'use client';
import Link from 'next/link';
import { CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuizAttempt } from '@/types';

interface QuizResultsProps { attempt: QuizAttempt; onRetake?: () => void; }

export function QuizResults({ attempt, onRetake }: QuizResultsProps) {
  const percent = Math.round(attempt.score);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 text-center">
        <div className="relative inline-flex items-center justify-center mb-4">
          <svg width="120" height="120" className="-rotate-90">
            <circle cx="60" cy="60" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" />
            <circle cx="60" cy="60" r="45" fill="none" stroke={attempt.passed ? '#10b981' : '#f59e0b'} strokeWidth="8"
              strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
          </svg>
          <div className="absolute text-center">
            <p className="text-3xl font-bold text-slate-900 dark:text-white">{percent}%</p>
          </div>
        </div>
        <div className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-3',
          attempt.passed ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400')}>
          <Trophy className="h-4 w-4" />
          {attempt.passed ? 'Passed!' : 'Not Passed'}
        </div>
        {attempt.timeTaken && (
          <p className="text-sm text-slate-500 dark:text-slate-400">Completed in {Math.floor(attempt.timeTaken / 60)}m {attempt.timeTaken % 60}s</p>
        )}
        <div className="flex gap-3 justify-center mt-6">
          {onRetake && <button onClick={onRetake} className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Retake Quiz</button>}
          <Link href="/quizzes" className="px-4 py-2 bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 rounded-lg text-sm hover:bg-amber-500 transition-colors">All Quizzes</Link>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Answer Review</h3>
        <div className="space-y-4">
          {attempt.answers.map((ans, i) => (
            <div key={ans.questionId} className={cn('p-4 rounded-lg border', ans.isCorrect ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/10' : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10')}>
              <div className="flex items-start gap-2 mb-2">
                {ans.isCorrect ? <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" /> : <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />}
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Question {i + 1}</span>
              </div>
              {!ans.isCorrect && (
                <p className="text-xs text-slate-600 dark:text-slate-400 ml-6">Correct: <span className="font-medium text-emerald-600">{ans.correctAnswer}</span></p>
              )}
              {ans.explanation && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-6 italic">{ans.explanation}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
