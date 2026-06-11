'use client';
import { BookOpen, Trophy, TrendingUp, Flame, Clock, Award } from 'lucide-react';
import { StatsCard } from '@/components/analytics/StatsCard';
import { QuizScoreLineChart, CasesByTypeChart } from '@/components/analytics/ProgressChart';

const MILESTONES = [
  { label: 'Completed 5 Constitutional cases', date: 'Jun 8, 2026', icon: '🏛️' },
  { label: 'Scored 90%+ on IP Litigation quiz', date: 'Jun 5, 2026', icon: '💡' },
  { label: 'Studied 10+ litigation types', date: 'May 28, 2026', icon: '📚' },
  { label: '7-day study streak achieved', date: 'May 20, 2026', icon: '🔥' },
];

const WEEK_DATA = Array.from({ length: 28 }, (_, i) => ({ day: i, count: Math.floor(Math.random() * 4) }));

function HeatmapCell({ count }: { count: number }) {
  const bg = count === 0 ? 'bg-slate-100 dark:bg-slate-700' : count === 1 ? 'bg-amber-200 dark:bg-amber-800' : count === 2 ? 'bg-amber-400 dark:bg-amber-600' : 'bg-amber-600 dark:bg-amber-400';
  return <div className={`w-5 h-5 rounded-sm ${bg}`} title={`${count} activities`} />;
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics & Progress</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Track your litigation learning journey</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Cases Studied" value={42} icon={BookOpen} color="blue" trend={12} trendLabel="vs last month" />
        <StatsCard title="Quizzes Passed" value={15} icon={Trophy} color="gold" />
        <StatsCard title="Avg Quiz Score" value={84} icon={TrendingUp} color="green" suffix="%" trend={7} trendLabel="improvement" />
        <StatsCard title="Study Streak" value={7} icon={Flame} color="purple" suffix=" days" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Score Trend */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Quiz Score Trend</h2>
          <QuizScoreLineChart />
        </div>

        {/* Cases by Type */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Cases by Litigation Type</h2>
          <CasesByTypeChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Heatmap */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Activity Heatmap (Last 4 Weeks)</h2>
          <div className="flex flex-col gap-1">
            {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, wi) => (
              <div key={week} className="flex items-center gap-2">
                <span className="text-xs text-slate-400 w-14">{week}</span>
                <div className="flex gap-1">
                  {WEEK_DATA.slice(wi * 7, wi * 7 + 7).map((d, di) => <HeatmapCell key={di} count={d.count} />)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-slate-400">Less</span>
            <div className="flex gap-1">{[0, 1, 2, 3].map((v) => <HeatmapCell key={v} count={v} />)}</div>
            <span className="text-xs text-slate-400">More</span>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Award className="h-5 w-5 text-amber-500" /> Milestones</h2>
          <div className="space-y-3">
            {MILESTONES.map((m, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-xl">{m.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{m.label}</p>
                  <p className="text-xs text-slate-400">{m.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress by Category */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Category Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'IP Litigation', icon: '💡', progress: 88, quizScore: 92, cases: 5 },
            { name: 'Civil Litigation', icon: '⚖️', progress: 72, quizScore: 84, cases: 4 },
            { name: 'Employment Law', icon: '👔', progress: 60, quizScore: 78, cases: 3 },
            { name: 'Criminal Litigation', icon: '🔨', progress: 45, quizScore: 71, cases: 2 },
            { name: 'Constitutional Law', icon: '🏛️', progress: 30, quizScore: 85, cases: 1 },
            { name: 'Commercial Litigation', icon: '🏢', progress: 20, quizScore: 0, cases: 1 },
          ].map((cat) => (
            <div key={cat.name} className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{cat.name}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{cat.cases} cases</span>
                  {cat.quizScore > 0 && <span className="text-emerald-500 font-medium">{cat.quizScore}%</span>}
                </div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: `${cat.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
