import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Anthropic from '@anthropic-ai/sdk';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private client: Anthropic | null = null;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const apiKey = this.configService.get<string>('ANTHROPIC_API_KEY');
    if (apiKey) {
      this.client = new Anthropic({ apiKey });
    } else {
      this.logger.warn('ANTHROPIC_API_KEY not set. AI features will be limited.');
    }
  }

  private ensureClient(): Anthropic {
    if (!this.client) {
      throw new ServiceUnavailableException('AI service not configured. Please set ANTHROPIC_API_KEY.');
    }
    return this.client;
  }

  async summarizeCase(caseId: string): Promise<{ summary: string }> {
    const client = this.ensureClient();
    const caseItem = await this.prisma.case.findUnique({
      where: { id: caseId },
      include: { litigationType: true, parties: true },
    });

    if (!caseItem) throw new Error('Case not found');

    const prompt = `You are a legal education expert. Please provide a clear, educational summary of the following legal case for law students and legal professionals.

Case Name: ${caseItem.name}
Citation: ${caseItem.citation || 'N/A'}
Court: ${caseItem.court}
Jurisdiction: ${caseItem.jurisdiction}
Year: ${caseItem.year || 'N/A'}
Litigation Type: ${caseItem.litigationType.name}

Facts: ${caseItem.facts}

Key Legal Issues: ${caseItem.keyLegalIssues.join(', ')}

Final Decision: ${caseItem.finalDecision}

Judicial Reasoning: ${caseItem.judicialReasoning}

Please provide:
1. A concise 2-3 paragraph summary suitable for study
2. The 3 most important takeaways for legal practitioners
3. Why this case is significant in ${caseItem.litigationType.name}

Format your response in clear sections.`;

    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    });

    const summary = message.content[0].type === 'text' ? message.content[0].text : '';
    return { summary };
  }

  async explainRuling(caseId: string, question?: string): Promise<{ explanation: string }> {
    const client = this.ensureClient();
    const caseItem = await this.prisma.case.findUnique({ where: { id: caseId } });
    if (!caseItem) throw new Error('Case not found');

    const specificQuestion = question || 'Explain the judicial reasoning and legal standards applied in this ruling.';

    const prompt = `You are an expert legal educator. A student is studying the case "${caseItem.name}" and has the following question:

"${specificQuestion}"

Here is the relevant case information:

Final Decision: ${caseItem.finalDecision}

Judicial Reasoning: ${caseItem.judicialReasoning}

Legal Standards Applied: ${caseItem.legalStandards.join(', ')}

Key Precedents: ${caseItem.keyPrecedents.join(', ')}

Please provide a clear, educational explanation that:
1. Directly answers the question
2. Explains the legal reasoning in accessible terms
3. Connects to broader legal principles
4. Highlights any controversial aspects or alternative views

Be thorough but clear, as this is for educational purposes.`;

    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    });

    const explanation = message.content[0].type === 'text' ? message.content[0].text : '';
    return { explanation };
  }

  async generateQuiz(params: { litigationTypeId?: string; caseId?: string; count?: number; difficulty?: string }): Promise<{ questions: any[] }> {
    const client = this.ensureClient();
    const { litigationTypeId, caseId, count = 5, difficulty = 'intermediate' } = params;

    let context = '';

    if (caseId) {
      const caseItem = await this.prisma.case.findUnique({
        where: { id: caseId },
        include: { litigationType: true },
      });
      if (caseItem) {
        context = `
Case: ${caseItem.name}
Litigation Type: ${caseItem.litigationType.name}
Facts: ${caseItem.facts}
Key Issues: ${caseItem.keyLegalIssues.join(', ')}
Final Decision: ${caseItem.finalDecision}
Lessons Learned: ${caseItem.lessonsLearned.join(', ')}`;
      }
    } else if (litigationTypeId) {
      const litigationType = await this.prisma.litigationType.findUnique({
        where: { id: litigationTypeId },
        include: { cases: { take: 3 } },
      });
      if (litigationType) {
        context = `
Litigation Type: ${litigationType.name}
Description: ${litigationType.description}
Key Principles: ${litigationType.keyPrinciples.join(', ')}
Typical Issues: ${litigationType.typicalIssues.join(', ')}`;
      }
    }

    const prompt = `You are a legal education expert creating a quiz for law students at the ${difficulty} level.

Based on this legal content:
${context}

Generate exactly ${count} multiple-choice questions. Each question should test understanding of the legal concepts, not just memorization.

Return a JSON array with exactly this structure:
[
  {
    "text": "Question text here",
    "options": [
      {"id": "a", "text": "Option A"},
      {"id": "b", "text": "Option B"},
      {"id": "c", "text": "Option C"},
      {"id": "d", "text": "Option D"}
    ],
    "correctAnswer": "a",
    "explanation": "Why this answer is correct and educational explanation",
    "points": 1
  }
]

Make questions that:
- Test understanding of legal principles
- Include scenario-based questions
- Have plausible distractors
- Provide educational explanations

Return ONLY valid JSON, no other text.`;

    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }],
    });

    const responseText = message.content[0].type === 'text' ? message.content[0].text : '[]';

    try {
      const jsonMatch = responseText.match(/\[[\s\S]*\]/);
      const questions = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
      return { questions };
    } catch (e) {
      this.logger.error('Failed to parse AI quiz response', e);
      return { questions: [] };
    }
  }

  async analyzeEvidence(caseId: string): Promise<{ analysis: string }> {
    const client = this.ensureClient();
    const caseItem = await this.prisma.case.findUnique({
      where: { id: caseId },
      include: { documents: true, litigationType: true },
    });
    if (!caseItem) throw new Error('Case not found');

    const prompt = `You are a legal expert analyzing evidence in a court case for educational purposes.

Case: ${caseItem.name}
Evidence Analysis from case record: ${caseItem.evidenceAnalysis}
Documents in case: ${caseItem.documents.map((d) => `${d.name} (${d.type})`).join(', ')}

Please provide an educational analysis covering:
1. Key pieces of evidence and their legal significance
2. Which evidence was most persuasive and why
3. Any evidentiary challenges or objections that might have been raised
4. Lessons for practitioners about evidence gathering and presentation in ${caseItem.litigationType ? 'this type of' : ''} litigation

Format this as a structured educational analysis.`;

    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    });

    const analysis = message.content[0].type === 'text' ? message.content[0].text : '';
    return { analysis };
  }

  async chatAboutCase(caseId: string, message: string, conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []): Promise<{ response: string }> {
    const client = this.ensureClient();
    const caseItem = await this.prisma.case.findUnique({
      where: { id: caseId },
      include: { litigationType: true, parties: true },
    });
    if (!caseItem) throw new Error('Case not found');

    const systemPrompt = `You are an expert legal educator helping a student understand the case "${caseItem.name}".

Case Context:
- Name: ${caseItem.name}
- Court: ${caseItem.court}
- Jurisdiction: ${caseItem.jurisdiction}
- Year: ${caseItem.year}
- Litigation Type: ${caseItem.litigationType?.name}
- Facts: ${caseItem.facts.substring(0, 500)}...
- Final Decision: ${caseItem.finalDecision.substring(0, 300)}...

Answer questions clearly and educationally. Reference specific case details when relevant.`;

    const messages: any[] = [
      ...conversationHistory,
      { role: 'user', content: message },
    ];

    const response = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    });

    const responseText = response.content[0].type === 'text' ? response.content[0].text : '';
    return { response: responseText };
  }
}
