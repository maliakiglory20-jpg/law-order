'use client';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { LitigationCard } from '@/components/litigation/LitigationCard';
import { useLitigationTypes } from '@/hooks/useLitigation';

export default function LibraryPage() {
  const { types, isLoading, error } = useLitigationTypes();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(types.map((t) => t.category).filter(Boolean))).sort()],
    [types],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return types.filter((t) => {
      const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
      const matchesSearch =
        !q || t.name.toLowerCase().includes(q) || (t.description ?? '').toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [types, activeCategory, search]);

  const totalCases = useMemo(() => types.reduce((sum, t) => sum + (t._count?.cases ?? 0), 0), [types]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Litigation Library</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          {isLoading
            ? 'Loading litigation types…'
            : `${types.length} litigation types · ${totalCases} landmark cases`}
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search litigation types..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:text-white"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-44 bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-16 text-slate-500 dark:text-slate-400">
          Could not load litigation types. Please try again.
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-500 dark:text-slate-400">
          No litigation types match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <LitigationCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
