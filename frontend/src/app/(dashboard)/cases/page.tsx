'use client';
import { useState } from 'react';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';
import { CaseCard } from '@/components/cases/CaseCard';
import { useCases } from '@/hooks/useCases';

const LITIGATION_TYPES = ['All', 'Civil', 'Criminal', 'Commercial', 'IP', 'Employment', 'Constitutional', 'Regulatory'];
const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'alpha', label: 'Alphabetical' },
  { value: 'views', label: 'Most Viewed' },
];

export default function CasesPage() {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState('All');
  const [sort, setSort] = useState('recent');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const { cases, bookmarks, toggleBookmark, isLoading } = useCases({ search, limit: 20 });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Case Studies</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">175+ landmark cases across all litigation categories</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setView('grid')} className={`p-2 rounded-lg border ${view === 'grid' ? 'border-amber-400 text-amber-600 bg-amber-50 dark:bg-amber-900/20' : 'border-slate-200 dark:border-slate-700 text-slate-400'}`}><LayoutGrid className="h-4 w-4" /></button>
          <button onClick={() => setView('list')} className={`p-2 rounded-lg border ${view === 'list' ? 'border-amber-400 text-amber-600 bg-amber-50 dark:bg-amber-900/20' : 'border-slate-200 dark:border-slate-700 text-slate-400'}`}><List className="h-4 w-4" /></button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input type="text" placeholder="Search cases, courts, parties..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white" />
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white">
          {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* Type Filter */}
      <div className="flex flex-wrap gap-2">
        {LITIGATION_TYPES.map((type) => (
          <button key={type} onClick={() => setActiveType(type)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeType === type ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-400'}`}>
            {type}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-56 bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse" />)}
        </div>
      ) : (
        <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
          {(cases.length > 0 ? cases : MOCK_CASES).map((c) => (
            <CaseCard key={c.id} caseItem={c} isBookmarked={bookmarks.has(c.id)} onBookmark={toggleBookmark} />
          ))}
        </div>
      )}
    </div>
  );
}

const MOCK_CASES: any[] = [
  { id: '1', name: 'Brown v. Board of Education', litigationType: { name: 'Constitutional' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Landmark case challenging racial segregation in public schools, finding separate but equal inherently unequal.', decisionDate: '1954-05-17', outcome: 'Plaintiff Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 15420, createdAt: '', updatedAt: '' },
  { id: '2', name: 'Miranda v. Arizona', litigationType: { name: 'Criminal' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Established constitutional requirements for police to inform suspects of their rights during custodial interrogation.', decisionDate: '1966-06-13', outcome: 'Plaintiff Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 12300, createdAt: '', updatedAt: '' },
  { id: '3', name: 'Apple Inc. v. Samsung Electronics', litigationType: { name: 'Patent Litigation' }, court: 'U.S. District Court, N.D. Cal.', jurisdiction: 'Federal', facts: 'Trade dress and patent infringement dispute between two smartphone giants over design and technology patents.', decisionDate: '2012-08-24', outcome: 'Plaintiff Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 9800, createdAt: '', updatedAt: '' },
  { id: '4', name: 'Oracle America v. Google', litigationType: { name: 'Copyright Litigation' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Landmark case determining whether Google\'s copying of Java APIs to create Android constituted fair use.', decisionDate: '2021-04-05', outcome: 'Defendant Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 8700, createdAt: '', updatedAt: '' },
  { id: '5', name: 'Wal-Mart Stores v. Dukes', litigationType: { name: 'Class Action' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Largest employment discrimination class action in U.S. history involving 1.5 million female Walmart employees.', decisionDate: '2011-06-20', outcome: 'Defendant Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 7600, createdAt: '', updatedAt: '' },
  { id: '6', name: 'Citizens United v. FEC', litigationType: { name: 'Constitutional' }, court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Landmark First Amendment case holding that corporate funding of independent political broadcasts cannot be limited.', decisionDate: '2010-01-21', outcome: 'Plaintiff Victory', litigationTypeId: '', keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: false, isPublished: true, viewCount: 6900, createdAt: '', updatedAt: '' },
];
