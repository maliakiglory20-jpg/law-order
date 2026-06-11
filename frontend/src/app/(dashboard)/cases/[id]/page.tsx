'use client';
import { useState } from 'react';
import { ArrowLeft, Bookmark, BookmarkCheck, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { CaseTimeline } from '@/components/cases/CaseTimeline';
import { RulingAnalysis } from '@/components/cases/RulingAnalysis';
import { CaseDocuments } from '@/components/cases/CaseDocuments';
import { useCases } from '@/hooks/useCases';

const TABS = ['Overview', 'Case Summary', 'Court Ruling', 'Evidence', 'Documents', 'Notes'];

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [note, setNote] = useState('');
  const [aiExplanation, setAiExplanation] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const { getCaseById, bookmarks, toggleBookmark } = useCases();
  const caseItem = getCaseById(params.id) ?? MOCK_CASE;
  const isBookmarked = bookmarks.has(caseItem.id);

  const handleAiExplain = async () => {
    setAiLoading(true);
    try {
      const res = await fetch(`/api/ai/explain-ruling`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        body: JSON.stringify({ caseId: caseItem.id }),
      });
      const data = await res.json();
      setAiExplanation(data.explanation || '');
    } catch {
      setAiExplanation('Unable to load AI explanation at this time.');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400">
        <Link href="/library" className="hover:text-amber-500 transition-colors">Library</Link>
        <ChevronRight className="h-3 w-3" />
        {caseItem.litigationType && <Link href={`/library/${caseItem.litigationType.slug ?? ''}`} className="hover:text-amber-500 transition-colors">{caseItem.litigationType.name}</Link>}
        <ChevronRight className="h-3 w-3" />
        <span className="text-slate-600 dark:text-slate-300 truncate max-w-[200px]">{caseItem.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {caseItem.litigationType && (
              <span className="text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded-full">{caseItem.litigationType.name}</span>
            )}
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-1">{caseItem.name}</h1>
            {caseItem.citation && <p className="text-sm text-slate-400 mb-3">{caseItem.citation}</p>}
            <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span>🏛️ {caseItem.court}</span>
              <span>📍 {caseItem.jurisdiction}</span>
              {caseItem.filingDate && <span>📅 Filed: {new Date(caseItem.filingDate).toLocaleDateString()}</span>}
              {caseItem.decisionDate && <span>⚖️ Decided: {new Date(caseItem.decisionDate).toLocaleDateString()}</span>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => toggleBookmark(caseItem.id)} className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition-colors">
              {isBookmarked ? <BookmarkCheck className="h-5 w-5 text-amber-500" /> : <Bookmark className="h-5 w-5 text-slate-400" />}
            </button>
            <button onClick={handleAiExplain} disabled={aiLoading}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
              <Sparkles className="h-4 w-4" />
              {aiLoading ? 'Analyzing...' : 'AI Explanation'}
            </button>
          </div>
        </div>

        {/* Parties */}
        {caseItem.parties && caseItem.parties.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-4">
            {caseItem.parties.map((p) => (
              <div key={p.id} className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.role === 'PLAINTIFF' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : p.role === 'DEFENDANT' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>{p.role}</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{p.name}</span>
                {p.counsel && <span className="text-xs text-slate-400">({p.counsel})</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AI Explanation */}
      {aiExplanation && (
        <div className="bg-violet-50 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-violet-600" />
            <span className="text-sm font-semibold text-violet-700 dark:text-violet-400">AI Analysis</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{aiExplanation}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-slate-200 dark:border-slate-700">
        <div className="flex gap-1 overflow-x-auto">
          {TABS.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? 'border-amber-400 text-amber-600 dark:text-amber-400' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'Overview' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Case Timeline</h3>
              <CaseTimeline filingDate={caseItem.filingDate} decisionDate={caseItem.decisionDate} />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Key Legal Issues</h3>
              <ul className="space-y-2">
                {caseItem.keyLegalIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-amber-500 mt-0.5 font-bold">{i + 1}.</span> {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'Case Summary' && (
          <div className="space-y-4">
            {[['Facts of the Case', caseItem.facts], ['Plaintiff\'s Arguments', caseItem.plaintiffArguments], ['Defendant\'s Arguments', caseItem.defendantArguments], ['Procedural History', caseItem.proceduralHistory]].map(([title, content]) => (
              <div key={title} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Court Ruling' && <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6"><RulingAnalysis caseItem={caseItem} /></div>}
        {activeTab === 'Evidence' && (
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Evidence Analysis</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{caseItem.evidenceAnalysis}</p>
            {caseItem.bestPractices.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Best Practices</h4>
                <ul className="space-y-2">
                  {caseItem.bestPractices.map((bp, i) => <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"><span className="text-emerald-500">✓</span>{bp}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}
        {activeTab === 'Documents' && <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6"><CaseDocuments documents={caseItem.documents ?? []} /></div>}
        {activeTab === 'Notes' && (
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">My Notes</h3>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={8} placeholder="Add your notes about this case..."
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white" />
            <button className="mt-3 px-4 py-2 bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors">Save Notes</button>
          </div>
        )}
      </div>
    </div>
  );
}

const MOCK_CASE: any = {
  id: '1', name: 'Brown v. Board of Education', citation: '347 U.S. 483 (1954)',
  litigationType: { name: 'Constitutional Litigation', slug: 'constitutional' },
  court: 'U.S. Supreme Court', jurisdiction: 'Federal',
  filingDate: '1952-10-08', decisionDate: '1954-05-17',
  facts: 'This landmark Supreme Court case challenged the "separate but equal" doctrine established by Plessy v. Ferguson (1896). The case consolidated several cases from Kansas, South Carolina, Virginia, and Delaware, all challenging racial segregation in public schools. The NAACP Legal Defense Fund, led by Thurgood Marshall, argued that separate educational facilities were inherently unequal and violated the Equal Protection Clause of the Fourteenth Amendment.',
  keyLegalIssues: ['Whether racial segregation in public schools violates the Equal Protection Clause of the Fourteenth Amendment', 'Whether the separate but equal doctrine of Plessy v. Ferguson should be overturned', 'The constitutionality of state-mandated school segregation'],
  plaintiffArguments: 'Segregation in public education generated feelings of inferiority among Black children that damaged their motivation to learn. Social science evidence demonstrated the psychological harm of segregation. The Equal Protection Clause mandated equal treatment regardless of race.',
  defendantArguments: 'Separate schools could be equal in tangible respects, satisfying the constitutional requirement. Education was a state matter beyond federal constitutional control. The Court should defer to state legislatures on social policy matters.',
  proceduralHistory: 'Cases filed in district courts that upheld segregation. NAACP appealed to Supreme Court. Cases consolidated as Brown v. Board. First argued in 1952, re-argued in 1953 after Justice Vinson\'s death. New Chief Justice Warren led to unanimous decision.',
  finalDecision: 'The Supreme Court unanimously ruled that racial segregation in public schools was unconstitutional. The Court held that "separate educational facilities are inherently unequal" and violate the Equal Protection Clause.',
  judicialReasoning: 'Chief Justice Warren emphasized that education had become essential to democratic participation. The Court relied on social science evidence showing psychological harm from segregation. The Court explicitly overruled Plessy v. Ferguson\'s separate but equal doctrine.',
  legalStandards: ['Equal Protection Clause of the 14th Amendment', 'Strict scrutiny for racial classifications', 'De jure vs de facto segregation'],
  keyPrecedents: ['Plessy v. Ferguson (1896) - overruled', 'Sweatt v. Painter (1950)', 'McLaurin v. Oklahoma State Regents (1950)'],
  evidenceAnalysis: 'The NAACP presented Kenneth and Mamie Clark\'s doll studies showing racial preference among Black children as evidence of psychological harm from segregation. The Court found this social science evidence persuasive in demonstrating the inherent inequality of separate facilities.',
  alternativeOutcomes: 'If the Court had applied Plessy and required only physical equality, school integration might have been delayed by decades. A narrower ruling limited to graduate schools would have left K-12 segregation intact.',
  lessonsLearned: ['Social science evidence can be powerful in constitutional litigation', 'Strategic case selection and consolidation can maximize impact', 'Unanimous decisions carry more moral authority', 'Implementation decrees matter as much as the underlying ruling'],
  bestPractices: ['Document psychological and societal harm with expert evidence', 'Build broad coalitions including affected communities', 'Frame constitutional arguments in terms of fundamental rights', 'Plan for implementation challenges at the outset'],
  outcome: 'Plaintiff Victory', significance: 'Landmark ruling ending school segregation', isFeatured: true, isPublished: true, viewCount: 15420, createdAt: '', updatedAt: '', litigationTypeId: '',
  parties: [{ id: '1', name: 'Oliver Brown et al.', role: 'PLAINTIFF', counsel: 'Thurgood Marshall, NAACP LDF' }, { id: '2', name: 'Board of Education of Topeka', role: 'DEFENDANT', counsel: 'Paul Wilson, Kansas AG' }],
  documents: [],
};
