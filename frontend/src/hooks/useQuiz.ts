'use client';
import { useState, useEffect, useRef } from 'react';
import { quizApi } from '@/lib/api';
import { Quiz, Question, QuizAttemptAnswer } from '@/types';

export function useQuizEngine(quizId: string) {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!quizId) return;
    quizApi
      .getOne(quizId)
      .then((res) => {
        setQuiz(res.data);
        if (res.data.timeLimit) {
          setTimeLeft(res.data.timeLimit * 60);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [quizId]);

  useEffect(() => {
    if (timeLeft === null || isSubmitted) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    timerRef.current = setTimeout(() => setTimeLeft((t) => (t ?? 0) - 1), 1000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeLeft, isSubmitted]);

  const answerQuestion = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (quiz && currentQuestionIndex < (quiz.questions?.length ?? 0) - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((i) => i - 1);
    }
  };

  const handleSubmit = async () => {
    if (!quiz || submitting) return;
    setSubmitting(true);
    if (timerRef.current) clearTimeout(timerRef.current);

    const timeTaken = Math.floor((Date.now() - startTimeRef.current) / 1000);
    const formattedAnswers = Object.entries(answers).map(([questionId, selectedAnswer]) => ({
      questionId,
      selectedAnswer,
    }));

    try {
      const res = await quizApi.submit(quiz.id, formattedAnswers, timeTaken);
      setResult(res.data);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to submit quiz:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const currentQuestion = quiz?.questions?.[currentQuestionIndex] ?? null;
  const totalQuestions = quiz?.questions?.length ?? 0;
  const answeredCount = Object.keys(answers).length;

  return {
    quiz,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    answeredCount,
    answers,
    isSubmitted,
    result,
    loading,
    submitting,
    timeLeft,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    handleSubmit,
  };
}
