'use client';
import Link from 'next/link';
import { Bookmark, BookmarkCheck, Calendar, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Case } from '@/types';

interface CaseCardProps {
  caseItem: Case;
  onBookmark?: (id: string) => void;
  isBookmarked?: boolean;
}

export function CaseCard({ caseItem, onBookmark, isBookmarked }: CaseCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group">
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            {caseItem.litigationType && (
              <span className="text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full">
                {caseItem.litigationType.name}
              </span>
            )}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); onBookmark?.(caseItem.id); }}
            className="text-slate-400 hover:text-amber-500 transition-colors flex-shrink-0"
          >
            {isBookmarked ? <BookmarkCheck className="h-5 w-5 text-amber-500" /> : <Bookmark className="h-5 w-5" />}
          </button>
        </div>
        <Link href={`/cases/${caseItem.id}`}>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors leading-tight">
            {caseItem.name}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">{caseItem.facts}</p>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Building2 className="h-3 w-3" />
            <span className="truncate max-w-[120px]">{caseItem.court}</span>
          </div>
          {(caseItem.decisionDate || (caseItem as any).year) && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{caseItem.decisionDate ? new Date(caseItem.decisionDate).getFullYear() : (caseItem as any).year}</span>
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-slate-100 dark:border-slate-700 px-5 py-3">
        <Link href={`/cases/${caseItem.id}`} className="text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors">
          View Case →
        </Link>
      </div>
    </div>
  );
}
