'use client';
import { useState, useEffect, useCallback } from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Question, QuizAttemptAnswer } from '@/types';

interface QuizEngineProps {
  questions: Question[];
  timeLimit?: number;
  onComplete: (answers: QuizAttemptAnswer[], timeTaken: number) => void;
}

export function QuizEngine({ questions, timeLimit, onComplete }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<QuizAttemptAnswer[]>([]);
  const [timeLeft, setTimeLeft] = useState(timeLimit ? timeLimit * 60 : null);
  const [startTime] = useState(Date.now());

  const handleFinish = useCallback((finalAnswers: QuizAttemptAnswer[]) => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    onComplete(finalAnswers, timeTaken);
  }, [startTime, onComplete]);

  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) { handleFinish(answers); return; }
    const t = setTimeout(() => setTimeLeft((v) => (v ?? 0) - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, answers, handleFinish]);

  const current = questions[currentIndex];

  const handleSelect = (optionId: string) => {
    if (showFeedback) return;
    setSelected(optionId);
  };

  const handleNext = () => {
    if (!selected) return;
    const isCorrect = selected === current.correctAnswer;
    const newAnswer: QuizAttemptAnswer = {
      questionId: current.id,
      selectedAnswer: selected,
      isCorrect,
      correctAnswer: current.correctAnswer,
      explanation: current.explanation,
      points: isCorrect ? current.points : 0,
    };
    if (!showFeedback) {
      setShowFeedback(true);
      return;
    }
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    if (currentIndex + 1 >= questions.length) {
      handleFinish(updatedAnswers);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  if (!current) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">Question {currentIndex + 1} / {questions.length}</span>
        {timeLeft !== null && (
          <div className={cn('flex items-center gap-1 text-sm font-medium', timeLeft < 60 ? 'text-red-500' : 'text-slate-600 dark:text-slate-300')}>
            <Clock className="h-4 w-4" />
            {formatTime(timeLeft)}
          </div>
        )}
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
        <div className="bg-amber-400 h-2 rounded-full transition-all" style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
        <p className="text-lg font-medium text-slate-900 dark:text-white leading-relaxed mb-6">{current.text}</p>
        <div className="space-y-3">
          {current.options.map((opt) => {
            let optClass = 'border-slate-200 dark:border-slate-600 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/10';
            if (selected === opt.id) {
              if (!showFeedback) optClass = 'border-amber-400 bg-amber-50 dark:bg-amber-900/10';
              else if (opt.id === current.correctAnswer) optClass = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10';
              else optClass = 'border-red-400 bg-red-50 dark:bg-red-900/10';
            } else if (showFeedback && opt.id === current.correctAnswer) {
              optClass = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10';
            }
            return (
              <button key={opt.id} onClick={() => handleSelect(opt.id)}
                className={cn('w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm', optClass)}>
                <span className="text-slate-800 dark:text-slate-200">{opt.text}</span>
              </button>
            );
          })}
        </div>
        {showFeedback && current.explanation && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300">
            <span className="font-medium">Explanation: </span>{current.explanation}
          </div>
        )}
      </div>

      <button onClick={handleNext} disabled={!selected}
        className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 rounded-xl font-medium disabled:opacity-40 hover:bg-amber-500 transition-colors">
        {showFeedback ? (currentIndex + 1 >= questions.length ? 'Finish Quiz' : 'Next Question') : 'Confirm Answer'}
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
