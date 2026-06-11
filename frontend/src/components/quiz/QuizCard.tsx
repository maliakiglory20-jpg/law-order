'use client';
import Link from 'next/link';
import { Clock, HelpCircle, Star } from 'lucide-react';
import { Quiz } from '@/types';

const quizTypeLabel: Record<string, string> = {
  MULTIPLE_CHOICE: 'Multiple Choice', TRUE_FALSE: 'True / False',
  SCENARIO: 'Scenario-Based', EVIDENCE_IDENTIFICATION: 'Evidence ID',
  RULING_ANALYSIS: 'Ruling Analysis',
};

const quizTypeColor: Record<string, string> = {
  MULTIPLE_CHOICE: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  TRUE_FALSE: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  SCENARIO: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  EVIDENCE_IDENTIFICATION: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  RULING_ANALYSIS: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

interface QuizCardProps { quiz: Quiz; bestScore?: number; }

export function QuizCard({ quiz, bestScore }: QuizCardProps) {
  const qCount = quiz._count?.questions ?? (quiz.questions?.length ?? 0);
  const estimatedMinutes = Math.max(5, qCount * 1.5);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all p-5">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${quizTypeColor[quiz.type] || 'bg-slate-100 text-slate-600'}`}>
          {quizTypeLabel[quiz.type] || quiz.type}
        </span>
        {quiz.isAiGenerated && (
          <span className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="h-3 w-3" /> AI
          </span>
        )}
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white mb-1 leading-tight">{quiz.title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">{quiz.description}</p>
      <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
        <div className="flex items-center gap-1"><HelpCircle className="h-3 w-3" /><span>{qCount} questions</span></div>
        <div className="flex items-center gap-1"><Clock className="h-3 w-3" /><span>~{estimatedMinutes} min</span></div>
      </div>
      {bestScore !== undefined && (
        <div className="mb-3 flex items-center gap-2">
          <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
            <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: `${bestScore}%` }} />
          </div>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{bestScore}%</span>
        </div>
      )}
      <Link href={`/quizzes/${quiz.id}`} className="block w-full text-center text-sm font-medium bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 hover:bg-amber-500 dark:hover:bg-amber-300 py-2 rounded-lg transition-colors">
        {bestScore !== undefined ? 'Retake Quiz' : 'Start Quiz'}
      </Link>
    </div>
  );
}
