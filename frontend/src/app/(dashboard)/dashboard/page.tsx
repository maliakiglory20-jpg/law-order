'use client';
import { BookOpen, Trophy, TrendingUp, Flame, Bookmark, Clock } from 'lucide-react';
import { StatsCard } from '@/components/analytics/StatsCard';
import { ActivityFeed } from '@/components/analytics/ActivityFeed';
import { CaseCard } from '@/components/cases/CaseCard';
import { useAuthStore } from '@/store';
import { useCases } from '@/hooks/useCases';

const MOCK_PROGRESS = [
  { name: 'Civil Litigation', icon: '⚖️', percent: 72, cases: 4 },
  { name: 'Criminal Litigation', icon: '🔨', percent: 45, cases: 2 },
  { name: 'IP Litigation', icon: '💡', percent: 88, cases: 5 },
  { name: 'Employment Litigation', icon: '👔', percent: 60, cases: 3 },
  { name: 'Constitutional Litigation', icon: '🏛️', percent: 30, cases: 1 },
];

export default function DashboardPage() {
  const { user } = useAuthStore();
  const { cases, bookmarks, toggleBookmark } = useCases({ limit: 4, featured: true });

  const firstName = user?.name?.split(' ')[0] ?? 'Counselor';

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back, {firstName} 👋</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Continue your legal learning journey. You have 3 cases bookmarked.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Cases Studied" value={42} icon={BookOpen} color="blue" trend={8} trendLabel="vs last week" />
        <StatsCard title="Quizzes Completed" value={18} icon={Trophy} color="gold" trend={3} trendLabel="this week" />
        <StatsCard title="Average Score" value={84} icon={TrendingUp} color="green" suffix="%" trend={5} trendLabel="improvement" />
        <StatsCard title="Study Streak" value={7} icon={Flame} color="purple" suffix=" days" trendLabel="Keep it up!" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Progress */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Learning Progress</h2>
          <div className="space-y-4">
            {MOCK_PROGRESS.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                    <span className="text-xs text-slate-400">{item.cases} cases</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full transition-all" style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 w-10 text-right">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h2>
          <ActivityFeed />
        </div>
      </div>

      {/* Featured Cases */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900 dark:text-white">Featured Cases</h2>
          <a href="/cases" className="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400">View all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(cases.length > 0 ? cases : MOCK_FEATURED_CASES).map((c) => (
            <CaseCard key={c.id} caseItem={c} isBookmarked={bookmarks.has(c.id)} onBookmark={toggleBookmark} />
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { href: '/library', icon: '📚', label: '35 Litigation Types', sub: 'Explore all categories' },
          { href: '/quizzes', icon: '✏️', label: 'Take a Quiz', sub: 'Test your knowledge' },
          { href: '/search', icon: '🔍', label: 'Search Cases', sub: 'Find specific cases' },
          { href: '/analytics', icon: '📊', label: 'View Analytics', sub: 'Track your progress' },
        ].map((link) => (
          <a key={link.href} href={link.href} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:border-amber-400 hover:shadow-md transition-all">
            <div className="text-2xl mb-2">{link.icon}</div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{link.label}</p>
            <p className="text-xs text-slate-400 mt-0.5">{link.sub}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

const MOCK_FEATURED_CASES = [
  { id: '1', name: 'Brown v. Board of Education', court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Landmark case challenging racial segregation in public schools under the Equal Protection Clause.', decisionDate: '1954-05-17', outcome: 'Plaintiff Victory', litigationType: { name: 'Constitutional Litigation' }, keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 0, createdAt: '', updatedAt: '', litigationTypeId: '' } as any,
  { id: '2', name: 'Apple Inc. v. Samsung Electronics', court: 'U.S. District Court, N.D. Cal.', jurisdiction: 'Federal', facts: 'Trade dress and patent infringement battle over smartphone design and technology.', decisionDate: '2012-08-24', outcome: 'Plaintiff Victory', litigationType: { name: 'Patent Litigation' }, keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 0, createdAt: '', updatedAt: '', litigationTypeId: '' } as any,
  { id: '3', name: 'Miranda v. Arizona', court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: 'Established that suspects must be informed of their constitutional rights before custodial interrogation.', decisionDate: '1966-06-13', outcome: 'Plaintiff Victory', litigationType: { name: 'Criminal Litigation' }, keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 0, createdAt: '', updatedAt: '', litigationTypeId: '' } as any,
  { id: '4', name: "Wal-Mart Stores v. Dukes", court: 'U.S. Supreme Court', jurisdiction: 'Federal', facts: "Largest employment discrimination class action in U.S. history involving 1.5 million female employees.", decisionDate: '2011-06-20', outcome: 'Defendant Victory', litigationType: { name: 'Class Action Litigation' }, keyLegalIssues: [], plaintiffArguments: '', defendantArguments: '', proceduralHistory: '', finalDecision: '', judicialReasoning: '', legalStandards: [], keyPrecedents: [], evidenceAnalysis: '', alternativeOutcomes: '', lessonsLearned: [], bestPractices: [], significance: '', isFeatured: true, isPublished: true, viewCount: 0, createdAt: '', updatedAt: '', litigationTypeId: '' } as any,
];
