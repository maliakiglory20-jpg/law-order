'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Scale, ExternalLink, BookOpen } from 'lucide-react';
import { statutesApi } from '@/lib/api';
import { Statute } from '@/types';

const jurisdictionBadge: Record<string, string> = {
  'Federal Statute': 'bg-blue-100 text-blue-700',
  Constitutional: 'bg-purple-100 text-purple-700',
  'Federal Rule': 'bg-slate-100 text-slate-700',
  'State/Uniform': 'bg-emerald-100 text-emerald-700',
  International: 'bg-amber-100 text-amber-700',
};

const prettifySlug = (s: string) =>
  s.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

export default function StatuteDetailPage({ params }: { params: { slug: string } }) {
  const [statute, setStatute] = useState<Statute | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    statutesApi
      .getBySlug(params.slug)
      .then((res) => { if (active) setStatute(res.data); })
      .catch(() => { if (active) setError(true); })
      .finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="max-w-3xl space-y-6">
        <div className="h-40 bg-slate-100 dark:bg-slate-700 rounded-2xl animate-pulse" />
        <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse" />
      </div>
    );
  }

  if (error || !statute) {
    return (
      <div className="max-w-3xl text-center py-20">
        <p className="text-slate-500 dark:text-slate-400">This statute could not be found.</p>
        <Link href="/statutes" className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-3 inline-block">
          ← Back to Statute Library
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400">
        <Link href="/statutes" className="hover:text-amber-500 transition-colors">Statute Library</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-slate-600 dark:text-slate-300 truncate">{statute.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="mb-4 text-amber-400"><Scale className="h-10 w-10" /></div>
        <h1 className="text-2xl font-bold mb-2">{statute.name}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${jurisdictionBadge[statute.jurisdiction] ?? 'bg-slate-100 text-slate-700'}`}>
            {statute.jurisdiction}
          </span>
          <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">{statute.category}</span>
          {statute.citation && <span className="font-mono text-slate-400">{statute.citation}</span>}
          {statute.enactedYear && <span className="text-slate-400">· {statute.enactedYear}</span>}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="font-semibold text-slate-900 dark:text-white mb-3">In plain English</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{statute.summary}</p>
      </div>

      {/* Key provisions */}
      {statute.keyProvisions?.length > 0 && (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-3">Key provisions</h2>
          <ul className="space-y-2">
            {statute.keyProvisions.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="text-amber-500 mt-0.5">§</span>{p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Official text link */}
      {statute.officialUrl && (
        <a
          href={statute.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-900/20 p-4 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
        >
          <div>
            <p className="font-semibold text-slate-900 dark:text-white text-sm">Read the official full text</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Opens the authoritative source (the real law) in a new tab.</p>
          </div>
          <ExternalLink className="h-5 w-5 text-amber-600 shrink-0" />
        </a>
      )}

      {/* Related litigation */}
      {statute.relatedLitigation?.length > 0 && (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><BookOpen className="h-5 w-5 text-amber-500" />Where this comes up</h2>
          <div className="flex flex-wrap gap-2">
            {statute.relatedLitigation.map((slug) => (
              <Link
                key={slug}
                href={`/library/${slug}`}
                className="text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2.5 py-1 rounded hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                {prettifySlug(slug)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
