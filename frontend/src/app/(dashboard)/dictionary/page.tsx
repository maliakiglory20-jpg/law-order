'use client';
import { useMemo, useState } from 'react';
import { Search, BookA, Sparkles, GraduationCap } from 'lucide-react';
import { useGlossary, useGlossaryCategories } from '@/hooks/useGlossary';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const difficultyBadge: Record<string, string> = {
  Beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Intermediate: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Advanced: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

export default function DictionaryPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [letter, setLetter] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState('All');
  const [essentialsOnly, setEssentialsOnly] = useState(false);

  const { categories, total } = useGlossaryCategories();
  // Fetch the full set once, then filter client-side for instant search/letter jumps.
  const { terms, isLoading } = useGlossary({ category });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return terms.filter((t) => {
      const matchesSearch = !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
      const matchesLetter = !letter || t.term.toUpperCase().startsWith(letter);
      const matchesDifficulty = difficulty === 'All' || t.difficulty === difficulty;
      const matchesEssential = !essentialsOnly || t.isEssential;
      return matchesSearch && matchesLetter && matchesDifficulty && matchesEssential;
    });
  }, [terms, search, letter, difficulty, essentialsOnly]);

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
          each with a plain-language definition, an everyday example, and related terms. New to law? Start with the
          green <span className="font-semibold text-emerald-300">Beginner</span> terms or tap{' '}
          <span className="font-semibold text-amber-300">Essentials</span>.
        </p>
      </div>

      {/* Start Here / Essentials toggle */}
      <button
        onClick={() => setEssentialsOnly((v) => !v)}
        className={`w-full flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
          essentialsOnly
            ? 'border-amber-400 bg-amber-50 dark:bg-amber-900/20'
            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-400'
        }`}
      >
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${essentialsOnly ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 dark:bg-slate-700 text-amber-500'}`}>
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
            Start Here — Essentials
            {essentialsOnly && <Sparkles className="h-3.5 w-3.5 text-amber-500" />}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {essentialsOnly ? 'Showing only must-know foundational terms. Tap to show all.' : 'Show only the must-know terms a beginner should learn first.'}
          </p>
        </div>
      </button>

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

      {/* Difficulty filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-400 mr-1">Level:</span>
        {DIFFICULTIES.map((d) => (
          <button
            key={d}
            onClick={() => setDifficulty(d)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              difficulty === d
                ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-400'
            }`}
          >
            {d}
          </button>
        ))}
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
        <div className="text-center py-16 text-slate-500 dark:text-slate-400">No terms match your filters.</div>
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
                  <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {t.isEssential && <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" aria-label="Essential" />}
                    {t.term}
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {t.difficulty && (
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${difficultyBadge[t.difficulty] ?? ''}`}>
                        {t.difficulty}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400">{t.category}</span>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5">{t.definition}</p>
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
