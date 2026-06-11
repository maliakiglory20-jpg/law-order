'use client';
import { cn } from '@/lib/utils';

interface TimelineEvent { label: string; date?: string; description?: string; completed?: boolean; }

const DEFAULT_EVENTS: TimelineEvent[] = [
  { label: 'Filing', description: 'Complaint filed with the court', completed: true },
  { label: 'Service', description: 'Defendant served with process', completed: true },
  { label: 'Pleadings', description: 'Answer and initial motions', completed: true },
  { label: 'Discovery', description: 'Evidence exchange and depositions', completed: true },
  { label: 'Pre-Trial', description: 'Motions in limine, trial prep', completed: true },
  { label: 'Trial / Hearing', description: 'Presentation of evidence', completed: true },
  { label: 'Decision', description: 'Court ruling issued', completed: true },
  { label: 'Appeal', description: 'Post-judgment proceedings', completed: false },
];

export function CaseTimeline({ events, filingDate, decisionDate }: {
  events?: TimelineEvent[];
  filingDate?: string;
  decisionDate?: string;
}) {
  const items = events || DEFAULT_EVENTS;
  return (
    <div className="relative">
      <div className="flex items-start gap-0 overflow-x-auto pb-2">
        {items.map((event, i) => (
          <div key={i} className="flex-1 min-w-[80px] flex flex-col items-center relative">
            {i < items.length - 1 && (
              <div className={cn(
                'absolute top-3 left-1/2 h-0.5 w-full',
                event.completed ? 'bg-amber-400' : 'bg-slate-200 dark:bg-slate-600'
              )} />
            )}
            <div className={cn(
              'w-6 h-6 rounded-full border-2 flex-shrink-0 z-10 flex items-center justify-center',
              event.completed
                ? 'bg-amber-400 border-amber-400'
                : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600'
            )}>
              {event.completed && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <div className="mt-2 text-center px-1">
              <p className={cn('text-xs font-medium', event.completed ? 'text-slate-900 dark:text-white' : 'text-slate-400')}>{event.label}</p>
              {event.date && <p className="text-xs text-slate-400 mt-0.5">{event.date}</p>}
            </div>
          </div>
        ))}
      </div>
      {(filingDate || decisionDate) && (
        <div className="mt-3 flex gap-4 text-xs text-slate-500 dark:text-slate-400">
          {filingDate && <span>Filed: {new Date(filingDate).toLocaleDateString()}</span>}
          {decisionDate && <span>Decided: {new Date(decisionDate).toLocaleDateString()}</span>}
        </div>
      )}
    </div>
  );
}
