'use client';
import Link from 'next/link';
import { ChevronRight, BookOpen, Clock, Award } from 'lucide-react';
import { CaseCard } from '@/components/cases/CaseCard';

const MOCK_DETAIL: Record<string, any> = {
  constitutional: {
    name: 'Constitutional Litigation', icon: '🏛️', difficulty: 'Expert', estimatedStudyHours: 14,
    description: 'Constitutional litigation encompasses cases that test the scope of constitutional rights and the limits of government power under the U.S. Constitution. These cases often involve challenges to statutes, government actions, or policies that allegedly violate fundamental rights.',
    purpose: 'To define and enforce constitutional rights and establish boundaries on government power. Constitutional cases shape the fundamental law of the land and often have sweeping societal implications.',
    typicalIssues: ['Equal Protection Clause violations', 'Due Process rights', 'First Amendment freedoms (speech, religion, press)', 'Fourth Amendment search and seizure', 'Fifth Amendment self-incrimination', 'Commerce Clause challenges', 'Separation of powers'],
    commonEvidence: ['Legislative history and congressional records', 'Social science research and empirical studies', 'Government agency records and data', 'Expert testimony on constitutional history', 'State and local government documents', 'Statistical analyses of disparate impact'],
    courtProcess: [
      { step: '1', label: 'Filing', desc: 'Complaint filed in federal district court' },
      { step: '2', label: 'Standing', desc: 'Court determines plaintiff has standing' },
      { step: '3', label: 'Constitutional Analysis', desc: 'Court identifies appropriate level of scrutiny' },
      { step: '4', label: 'Discovery', desc: 'Limited discovery on legislative history and facts' },
      { step: '5', label: 'Summary Judgment', desc: 'Constitutional question often resolved without trial' },
      { step: '6', label: 'Appeal', desc: 'Multi-level appellate review, often to Supreme Court' },
    ],
    keyPrinciples: ['Strict scrutiny for suspect classifications and fundamental rights', 'Intermediate scrutiny for gender and quasi-suspect classifications', 'Rational basis for economic and social legislation', 'State action doctrine — Constitution limits government, not private actors', 'Standing requirements (injury, causation, redressability)', 'Political question doctrine'],
  },
};

const MOCK_CASES: any[] = [
  { id: '1', name: 'Brown v. Board of Education', litigationType: { name: 'Constitutional Litigation' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Landmark case holding that racial segregation in public schools violates the Equal Protection Clause.', decisionDate: '1954-05-17', outcome: 'Plaintiff Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 0, createdAt: '', updatedAt: '' },
  { id: '6', name: 'Citizens United v. FEC', litigationType: { name: 'Constitutional Litigation' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Held that corporate independent expenditures for political communication are protected by the First Amendment.', decisionDate: '2010-01-21', outcome: 'Plaintiff Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: false, isPublished: true, viewCount: 0, createdAt: '', updatedAt: '' },
  { id: '7', name: 'Obergefell v. Hodges', litigationType: { name: 'Constitutional Litigation' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Held that same-sex couples have a fundamental right to marry under the Due Process and Equal Protection Clauses.', decisionDate: '2015-06-26', outcome: 'Plaintiff Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 0, createdAt: '', updatedAt: '' },
];

const difficultyColor: Record<string, string> = { Beginner: 'bg-emerald-100 text-emerald-700', Intermediate: 'bg-blue-100 text-blue-700', Advanced: 'bg-amber-100 text-amber-700', Expert: 'bg-red-100 text-red-700' };

export default function LitigationTypePage({ params }: { params: { slug: string } }) {
  const detail = MOCK_DETAIL[params.slug] ?? MOCK_DETAIL.constitutional;
  const { name, icon, difficulty, estimatedStudyHours, description, purpose, typicalIssues, commonEvidence, courtProcess, keyPrinciples } = detail;

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400">
        <Link href="/library" className="hover:text-amber-500 transition-colors">Library</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-slate-600 dark:text-slate-300">{name}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="text-5xl mb-4">{icon}</div>
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-slate-300 text-lg max-w-2xl">{description}</p>
        <div className="flex items-center gap-4 mt-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColor[difficulty]}`}>{difficulty}</span>
          <div className="flex items-center gap-1.5 text-sm text-slate-400"><Clock className="h-4 w-4" />{estimatedStudyHours} study hours</div>
          <div className="flex items-center gap-1.5 text-sm text-slate-400"><BookOpen className="h-4 w-4" />5 cases</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Purpose */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-3">Purpose</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{purpose}</p>
          </div>

          {/* Court Process */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Court Process Overview</h2>
            <div className="space-y-3">
              {courtProcess.map((step: any, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-bold flex-shrink-0">{step.step}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{step.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</p>
                  </div>
                  {i < courtProcess.length - 1 && <div className="absolute ml-3.5 mt-7 w-0.5 h-3 bg-slate-200 dark:bg-slate-700" />}
                </div>
              ))}
            </div>
          </div>

          {/* Key Principles */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><Award className="h-5 w-5 text-amber-500" />Key Legal Principles</h2>
            <ul className="space-y-2">
              {keyPrinciples.map((p: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-amber-500 mt-0.5">•</span>{p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {/* Typical Issues */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Typical Legal Issues</h2>
            <ul className="space-y-1.5">
              {typicalIssues.map((issue: string, i: number) => (
                <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">›</span>{issue}</li>
              ))}
            </ul>
          </div>
          {/* Common Evidence */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Common Evidence</h2>
            <ul className="space-y-1.5">
              {commonEvidence.map((ev: string, i: number) => (
                <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5"><span className="text-emerald-400 mt-0.5">✓</span>{ev}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Cases */}
      <div>
        <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Cases in {name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_CASES.map((c) => <CaseCard key={c.id} caseItem={c} />)}
        </div>
      </div>
    </div>
  );
}
