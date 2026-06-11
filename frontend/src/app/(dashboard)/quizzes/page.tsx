'use client';
import { useState } from 'react';
import { Sparkles, Filter } from 'lucide-react';
import { QuizCard } from '@/components/quiz/QuizCard';
import { Quiz } from '@/types';

const MOCK_QUIZZES: Quiz[] = [
  { id: '1', title: 'Constitutional Law Fundamentals', description: 'Test your knowledge of landmark constitutional cases and key constitutional doctrines.', type: 'MULTIPLE_CHOICE', isAiGenerated: false, passingScore: 70, isPublished: true, createdAt: '', _count: { questions: 10, attempts: 45 }, litigationType: { name: 'Constitutional Litigation', slug: 'constitutional' } },
  { id: '2', title: 'Miranda Rights & Criminal Procedure', description: 'Scenario-based quiz testing your understanding of Miranda rights and criminal procedure.', type: 'SCENARIO', isAiGenerated: true, passingScore: 75, isPublished: true, createdAt: '', _count: { questions: 8, attempts: 32 }, litigationType: { name: 'Criminal Litigation', slug: 'criminal' } },
  { id: '3', title: 'Patent Claim Construction', description: 'Advanced quiz on claim construction, Markman hearings, and patent litigation strategy.', type: 'RULING_ANALYSIS', isAiGenerated: false, passingScore: 80, isPublished: true, createdAt: '', _count: { questions: 12, attempts: 28 }, litigationType: { name: 'Patent Litigation', slug: 'patent' } },
  { id: '4', title: 'Class Action Certification Requirements', description: 'Test your knowledge of Rule 23 requirements and class certification strategy.', type: 'MULTIPLE_CHOICE', isAiGenerated: true, passingScore: 70, isPublished: true, createdAt: '', _count: { questions: 10, attempts: 19 }, litigationType: { name: 'Class Action Litigation', slug: 'class-action' } },
  { id: '5', title: 'Employment Discrimination Evidence', description: 'Identify key evidence in employment discrimination cases using real case scenarios.', type: 'EVIDENCE_IDENTIFICATION', isAiGenerated: false, passingScore: 75, isPublished: true, createdAt: '', _count: { questions: 8, attempts: 24 }, litigationType: { name: 'Employment Litigation', slug: 'employment' } },
  { id: '6', title: 'IP Litigation True/False', description: 'Quick true/false quiz covering core IP litigation concepts across patent, trademark, and copyright.', type: 'TRUE_FALSE', isAiGenerated: false, passingScore: 60, isPublished: true, createdAt: '', _count: { questions: 15, attempts: 61 }, litigationType: { name: 'IP Litigation', slug: 'intellectual-property' } },
];

const BEST_SCORES: Record<string, number> = { '1': 85, '6': 93 };

export default function QuizzesPage() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const types = ['All', 'MULTIPLE_CHOICE', 'SCENARIO', 'TRUE_FALSE', 'EVIDENCE_IDENTIFICATION', 'RULING_ANALYSIS'];
  const typeLabels: Record<string, string> = { 'All': 'All Types', 'MULTIPLE_CHOICE': 'Multiple Choice', 'SCENARIO': 'Scenario', 'TRUE_FALSE': 'True/False', 'EVIDENCE_IDENTIFICATION': 'Evidence ID', 'RULING_ANALYSIS': 'Ruling Analysis' };

  const filtered = MOCK_QUIZZES.filter((q) => {
    const matchSearch = !search || q.title.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === 'All' || q.type === filterType;
    return matchSearch && matchType;
  });

  const attempted = MOCK_QUIZZES.filter((q) => BEST_SCORES[q.id] !== undefined);
  const unattempted = filtered.filter((q) => BEST_SCORES[q.id] === undefined);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Quizzes & Assessments</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Test and sharpen your litigation knowledge</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          <Sparkles className="h-4 w-4" />
          Generate AI Quiz
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder="Search quizzes..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white" />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white">
          {types.map((t) => <option key={t} value={t}>{typeLabels[t]}</option>)}
        </select>
      </div>

      {attempted.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Completed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attempted.map((q) => <QuizCard key={q.id} quiz={q} bestScore={BEST_SCORES[q.id]} />)}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Available Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unattempted.map((q) => <QuizCard key={q.id} quiz={q} />)}
        </div>
      </div>
    </div>
  );
}
