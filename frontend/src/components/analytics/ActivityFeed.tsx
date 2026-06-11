'use client';
import { BookOpen, Award, Bookmark, FileText, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Activity {
  id: string;
  type: 'case_viewed' | 'quiz_completed' | 'bookmarked' | 'document_viewed' | 'login';
  title: string;
  subtitle?: string;
  createdAt: string;
  score?: number;
}

const activityConfig = {
  case_viewed: { icon: BookOpen, color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' },
  quiz_completed: { icon: Award, color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20' },
  bookmarked: { icon: Bookmark, color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20' },
  document_viewed: { icon: FileText, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' },
  login: { icon: Clock, color: 'text-slate-500 bg-slate-50 dark:bg-slate-700' },
};

const MOCK_ACTIVITIES: Activity[] = [
  { id: '1', type: 'case_viewed', title: 'Viewed Brown v. Board of Education', subtitle: 'Constitutional Litigation', createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
  { id: '2', type: 'quiz_completed', title: 'Completed Employment Litigation Quiz', subtitle: 'Score: 87%', createdAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(), score: 87 },
  { id: '3', type: 'bookmarked', title: 'Bookmarked Apple v. Samsung', subtitle: 'Patent Litigation', createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString() },
  { id: '4', type: 'case_viewed', title: 'Viewed Miranda v. Arizona', subtitle: 'Criminal Litigation', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() },
  { id: '5', type: 'quiz_completed', title: 'Completed IP Litigation Assessment', subtitle: 'Score: 92%', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), score: 92 },
  { id: '6', type: 'document_viewed', title: 'Reviewed Complaint Template', subtitle: 'Contract Litigation', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() },
];

interface ActivityFeedProps {
  activities?: Activity[];
  limit?: number;
}

export function ActivityFeed({ activities = MOCK_ACTIVITIES, limit = 6 }: ActivityFeedProps) {
  const displayed = activities.slice(0, limit);

  return (
    <div className="space-y-3">
      {displayed.map((activity) => {
        const config = activityConfig[activity.type];
        const Icon = config.icon;
        return (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`p-2 rounded-lg flex-shrink-0 ${config.color}`}>
              <Icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{activity.title}</p>
              {activity.subtitle && (
                <p className="text-xs text-slate-500 dark:text-slate-400">{activity.subtitle}</p>
              )}
            </div>
            <span className="text-xs text-slate-400 flex-shrink-0 mt-0.5">
              {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}
            </span>
          </div>
        );
      })}
    </div>
  );
}
