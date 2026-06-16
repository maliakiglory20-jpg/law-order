'use client';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LitigationType } from '@/types';
import { TypeIcon } from '@/components/litigation/TypeIcon';

const difficultyColor = {
  Beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Intermediate: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Advanced: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Expert: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

interface LitigationCardProps {
  item: LitigationType;
  compact?: boolean;
}

export function LitigationCard({ item, compact }: LitigationCardProps) {
  return (
    <Link href={`/library/${item.slug}`}>
      <div className={cn(
        'group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700',
        'hover:border-amber-400 hover:shadow-lg transition-all duration-200 cursor-pointer',
        compact ? 'p-4' : 'p-5',
      )}>
        <div className="flex items-start justify-between mb-3">
          <div className="text-2xl text-amber-500"><TypeIcon name={item.icon} className="h-7 w-7" /></div>
          <span className={cn('text-xs font-medium px-2 py-1 rounded-full', difficultyColor[item.difficulty])}>
            {item.difficulty}
          </span>
        </div>
        <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors text-sm leading-tight">
          {item.name}
        </h3>
        {!compact && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">{item.description}</p>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <BookOpen className="h-3 w-3" />
            <span>{item._count?.cases ?? 5} cases</span>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-amber-400 transition-colors" />
        </div>
      </div>
    </Link>
  );
}
