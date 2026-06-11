import { Controller, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AiService } from './ai.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('AI')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('cases/:id/summarize')
  @ApiOperation({ summary: 'AI-generated case summary' })
  summarizeCase(@Param('id') id: string) {
    return this.aiService.summarizeCase(id);
  }

  @Post('cases/:id/explain-ruling')
  @ApiOperation({ summary: 'AI explanation of ruling' })
  explainRuling(@Param('id') id: string, @Body() body: { question?: string }) {
    return this.aiService.explainRuling(id, body.question);
  }

  @Post('cases/:id/analyze-evidence')
  @ApiOperation({ summary: 'AI evidence analysis' })
  analyzeEvidence(@Param('id') id: string) {
    return this.aiService.analyzeEvidence(id);
  }

  @Post('cases/:id/chat')
  @ApiOperation({ summary: 'Chat with AI about a case' })
  chat(
    @Param('id') id: string,
    @Body() body: { message: string; history?: Array<{ role: 'user' | 'assistant'; content: string }> },
  ) {
    return this.aiService.chatAboutCase(id, body.message, body.history);
  }

  @Post('generate-quiz')
  @ApiOperation({ summary: 'AI-generated quiz questions' })
  generateQuiz(
    @Body() body: { litigationTypeId?: string; caseId?: string; count?: number; difficulty?: string },
  ) {
    return this.aiService.generateQuiz(body);
  }
}
