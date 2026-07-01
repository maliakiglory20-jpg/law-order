'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, Scale, ExternalLink } from 'lucide-react';
import { useStatutes, useStatuteCategories } from '@/hooks/useStatutes';

const jurisdictionBadge: Record<string, string> = {
  'Federal Statute': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Constitutional: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Federal Rule': 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
  'State/Uniform': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  International: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

export default function StatutesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const { categories, total } = useStatuteCategories();
  const { statutes, isLoading } = useStatutes({ category });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return statutes.filter(
      (s) =>
        !q ||
        s.name.toLowerCase().includes(q) ||
        (s.shortName ?? '').toLowerCase().includes(q) ||
        (s.citation ?? '').toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q),
    );
  }, [statutes, search]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Scale className="h-8 w-8 text-amber-400" />
          <h1 className="text-3xl font-bold">Statute Library</h1>
        </div>
        <p className="text-slate-300 max-w-2xl">
          {total > 0 ? `${total} key laws & Acts` : 'Key laws & Acts'} that govern the litigation types in this platform —
          each with a plain-language summary, its main provisions, and a link to read the official full text.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search an Act, citation, or topic (e.g. Sherman, Title VII, 42 U.S.C. 1983)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {['All', ...categories.map((c) => c.name)].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              category === c
                ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-400'
            }`}
          >
            {c}
            {c !== 'All' && (
              <span className="ml-1.5 text-xs opacity-60">{categories.find((x) => x.name === c)?.count}</span>
            )}
          </button>
        ))}
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-48 bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-500 dark:text-slate-400">No laws match your search.</div>
      ) : (
        <>
          <p className="text-sm text-slate-500 dark:text-slate-400">{filtered.length} laws</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filtered.map((s) => (
              <div key={s.id} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <Link href={`/statutes/${s.slug}`} className="font-semibold text-slate-900 dark:text-white leading-tight hover:text-amber-600">{s.name}</Link>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${jurisdictionBadge[s.jurisdiction] ?? 'bg-slate-100 text-slate-600'}`}>
                    {s.jurisdiction}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                  {s.citation && <span className="font-mono">{s.citation}</span>}
                  {s.enactedYear && <span>· {s.enactedYear}</span>}
                  <span>· {s.category}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.summary}</p>
                {s.keyProvisions?.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {s.keyProvisions.map((p, i) => (
                      <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                        <span className="text-amber-500 mt-0.5">§</span>{p}
                      </li>
                    ))}
                  </ul>
                )}
                {s.officialUrl && (
                  <a
                    href={s.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400"
                  >
                    Read the official text <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
