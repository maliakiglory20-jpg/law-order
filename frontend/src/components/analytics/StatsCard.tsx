'use client';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  trendLabel?: string;
  color?: 'blue' | 'gold' | 'green' | 'purple' | 'red';
  suffix?: string;
}

const colorMap = {
  blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  gold: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
  green: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
  purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
  red: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
};

export function StatsCard({ title, value, icon: Icon, trend, trendLabel, color = 'blue', suffix }: StatsCardProps) {
  const TrendIcon = trend === undefined ? Minus : trend > 0 ? TrendingUp : TrendingDown;
  const trendColor = trend === undefined ? 'text-slate-400' : trend > 0 ? 'text-emerald-500' : 'text-red-500';

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
        <div className={cn('p-2 rounded-lg', colorMap[color])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">
            {value}{suffix && <span className="text-lg ml-1">{suffix}</span>}
          </p>
          {trendLabel && (
            <div className={cn('flex items-center gap-1 mt-1 text-xs', trendColor)}>
              <TrendIcon className="h-3 w-3" />
              <span>{trendLabel}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
