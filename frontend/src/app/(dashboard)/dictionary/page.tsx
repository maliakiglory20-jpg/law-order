'use client';
import { useMemo, useState } from 'react';
import { Search, BookA } from 'lucide-react';
import { useGlossary, useGlossaryCategories } from '@/hooks/useGlossary';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function DictionaryPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [letter, setLetter] = useState<string | null>(null);

  const { categories, total } = useGlossaryCategories();
  // Fetch the full set once, then filter client-side for instant search/letter jumps.
  const { terms, isLoading } = useGlossary({ category });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return terms.filter((t) => {
      const matchesSearch = !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
      const matchesLetter = !letter || t.term.toUpperCase().startsWith(letter);
      return matchesSearch && matchesLetter;
    });
  }, [terms, search, letter]);

  const availableLetters = useMemo(
    () => new Set(terms.map((t) => t.term[0]?.toUpperCase()).filter(Boolean)),
    [terms],
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <BookA className="h-8 w-8 text-amber-400" />
          <h1 className="text-3xl font-bold">Legal Dictionary</h1>
        </div>
        <p className="text-slate-300 max-w-2xl">
          {total > 0 ? `${total} legal terms` : 'Legal terms'} used across litigation and legal document review —
          definitions, examples, and related terms.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search a term or definition (e.g. hearsay, privilege, redaction)..."
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
            onClick={() => { setCategory(c); setLetter(null); }}
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

      {/* A–Z jump */}
      <div className="flex flex-wrap gap-1">
        <button
          onClick={() => setLetter(null)}
          className={`w-7 h-7 rounded text-xs font-medium ${!letter ? 'bg-amber-400 text-slate-900' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
        >
          All
        </button>
        {ALPHABET.map((l) => {
          const enabled = availableLetters.has(l);
          return (
            <button
              key={l}
              disabled={!enabled}
              onClick={() => setLetter(l)}
              className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                letter === l
                  ? 'bg-amber-400 text-slate-900'
                  : enabled
                    ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
              }`}
            >
              {l}
            </button>
          );
        })}
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-500 dark:text-slate-400">No terms match your search.</div>
      ) : (
        <>
          <p className="text-sm text-slate-500 dark:text-slate-400">{filtered.length} terms</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{t.term}</h3>
                  <span className="text-[10px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {t.category}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.definition}</p>
                {t.example && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic border-l-2 border-amber-300 pl-2">
                    {t.example}
                  </p>
                )}
                {t.relatedTerms?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {t.relatedTerms.map((rt, i) => (
                      <span key={i} className="text-[11px] text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded">
                        {rt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
