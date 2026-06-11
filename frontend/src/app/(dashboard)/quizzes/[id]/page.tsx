'use client';
import { useState } from 'react';
import { Clock, HelpCircle, Target } from 'lucide-react';
import { QuizEngine } from '@/components/quiz/QuizEngine';
import { QuizResults } from '@/components/quiz/QuizResults';
import { QuizAttempt, QuizAttemptAnswer, Question } from '@/types';

const MOCK_QUIZ = {
  id: '1', title: 'Constitutional Law Fundamentals', description: 'Test your knowledge of landmark constitutional cases, key doctrines, and the application of constitutional principles in litigation.',
  type: 'MULTIPLE_CHOICE' as const, timeLimit: 15, passingScore: 70, isAiGenerated: false, isPublished: true, createdAt: '', _count: { questions: 5, attempts: 45 },
  questions: [
    { id: 'q1', quizId: '1', text: 'In Brown v. Board of Education, what constitutional provision did the Supreme Court rely on to strike down school segregation?', options: [{ id: 'a', text: 'First Amendment freedom of association' }, { id: 'b', text: 'Equal Protection Clause of the Fourteenth Amendment' }, { id: 'c', text: 'Due Process Clause of the Fifth Amendment' }, { id: 'd', text: 'Commerce Clause of Article I' }], correctAnswer: 'b', explanation: 'The Supreme Court relied on the Equal Protection Clause of the Fourteenth Amendment to unanimously rule that racial segregation in public schools was unconstitutional.', points: 10, orderIndex: 1 },
    { id: 'q2', quizId: '1', text: 'Which standard of review applies to laws that classify based on race?', options: [{ id: 'a', text: 'Rational basis review' }, { id: 'b', text: 'Intermediate scrutiny' }, { id: 'c', text: 'Strict scrutiny' }, { id: 'd', text: 'De novo review' }], correctAnswer: 'c', explanation: 'Strict scrutiny applies to laws that classify based on race (a suspect classification). The government must show a compelling interest and narrow tailoring.', points: 10, orderIndex: 2 },
    { id: 'q3', quizId: '1', text: 'Miranda v. Arizona (1966) established that suspects must be informed of their rights before:', options: [{ id: 'a', text: 'Being arrested' }, { id: 'b', text: 'Custodial interrogation begins' }, { id: 'c', text: 'Their trial begins' }, { id: 'd', text: 'Being booked at the station' }], correctAnswer: 'b', explanation: 'Miranda warnings are required before custodial interrogation begins — when a suspect is both in custody AND subject to interrogation by law enforcement.', points: 10, orderIndex: 3 },
    { id: 'q4', quizId: '1', text: 'In Citizens United v. FEC (2010), the Supreme Court held that political spending by corporations is protected by which constitutional right?', options: [{ id: 'a', text: 'Fourth Amendment right against unreasonable searches' }, { id: 'b', text: 'Fifth Amendment right against self-incrimination' }, { id: 'c', text: 'First Amendment freedom of speech' }, { id: 'd', text: 'Fourteenth Amendment equal protection' }], correctAnswer: 'c', explanation: 'The Court held 5-4 that corporate independent expenditures for political communication are protected political speech under the First Amendment.', points: 10, orderIndex: 4 },
    { id: 'q5', quizId: '1', text: 'True or False: Obergefell v. Hodges (2015) held that same-sex couples have a fundamental right to marry under the Constitution.', options: [{ id: 'a', text: 'True' }, { id: 'b', text: 'False — it was decided on statutory grounds' }, { id: 'c', text: 'False — it only applied to federal benefits' }, { id: 'd', text: 'False — it remanded to states to decide' }], correctAnswer: 'a', explanation: 'In Obergefell v. Hodges, the Supreme Court held 5-4 that the fundamental right to marry is guaranteed to same-sex couples under the Due Process and Equal Protection Clauses.', points: 10, orderIndex: 5 },
  ] as Question[],
};

type Phase = 'intro' | 'quiz' | 'results';

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null);

  const handleComplete = (answers: QuizAttemptAnswer[], timeTaken: number) => {
    const totalPoints = MOCK_QUIZ.questions.reduce((s, q) => s + q.points, 0);
    const earned = answers.reduce((s, a) => s + a.points, 0);
    const score = Math.round((earned / totalPoints) * 100);
    const newAttempt: QuizAttempt = {
      id: Date.now().toString(), quizId: params.id, userId: '',
      score, passed: score >= MOCK_QUIZ.passingScore, answers, completedAt: new Date().toISOString(), timeTaken,
    };
    setAttempt(newAttempt);
    setPhase('results');
  };

  if (phase === 'intro') return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{MOCK_QUIZ.title}</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6">{MOCK_QUIZ.description}</p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: HelpCircle, label: 'Questions', value: MOCK_QUIZ.questions.length },
            { icon: Clock, label: 'Time Limit', value: `${MOCK_QUIZ.timeLimit} min` },
            { icon: Target, label: 'Passing Score', value: `${MOCK_QUIZ.passingScore}%` },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <Icon className="h-6 w-6 mx-auto mb-2 text-amber-500" />
              <p className="text-lg font-bold text-slate-900 dark:text-white">{value}</p>
              <p className="text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6 text-sm text-amber-700 dark:text-amber-400">
          <strong>Instructions:</strong> Read each question carefully and select the best answer. Each question shows an explanation after you answer. You can retake the quiz to improve your score.
        </div>
        <button onClick={() => setPhase('quiz')} className="w-full py-3 bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-amber-500 transition-colors">
          Start Quiz
        </button>
      </div>
    </div>
  );

  if (phase === 'quiz') return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">{MOCK_QUIZ.title}</h1>
      <QuizEngine questions={MOCK_QUIZ.questions} timeLimit={MOCK_QUIZ.timeLimit} onComplete={handleComplete} />
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">{MOCK_QUIZ.title} — Results</h1>
      {attempt && <QuizResults attempt={attempt} onRetake={() => { setAttempt(null); setPhase('intro'); }} />}
    </div>
  );
}
