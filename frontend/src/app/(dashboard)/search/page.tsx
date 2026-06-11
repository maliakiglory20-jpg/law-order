'use client';
import { useState, useEffect } from 'react';
import { Search, BookOpen, Scale, HelpCircle, X } from 'lucide-react';
import Link from 'next/link';

const RECENT_SEARCHES = ['Miranda v. Arizona', 'Patent infringement', 'Class action certification', 'Employment discrimination'];
const SUGGESTED = ['Constitutional rights', 'Securities fraud', 'Medical malpractice standard of care', 'GDPR data protection'];

const MOCK_RESULTS = [
  { type: 'case', id: '1', title: 'Miranda v. Arizona', subtitle: 'Criminal Litigation · U.S. Supreme Court · 1966', snippet: 'Established that suspects must be informed of constitutional rights before custodial interrogation.' },
  { type: 'case', id: '2', title: 'Brown v. Board of Education', subtitle: 'Constitutional Litigation · U.S. Supreme Court · 1954', snippet: 'Landmark case holding that racial segregation in public schools violates the Equal Protection Clause.' },
  { type: 'litigation', id: 'constitutional', title: 'Constitutional Litigation', subtitle: '5 cases · Expert level · 14 study hours', snippet: 'Cases testing the scope of constitutional rights and the limits of government power.' },
  { type: 'quiz', id: '1', title: 'Constitutional Law Fundamentals', subtitle: 'Multiple Choice · 10 questions · 15 min', snippet: 'Test your knowledge of landmark constitutional cases and key doctrines.' },
];

const typeIcon: Record<string, any> = { case: Scale, litigation: BookOpen, quiz: HelpCircle };
const typeColor: Record<string, string> = { case: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20', litigation: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20', quiz: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20' };
const typeHref: Record<string, (id: string) => string> = { case: (id) => `/cases/${id}`, litigation: (id) => `/library/${id}`, quiz: (id) => `/quizzes/${id}` };

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [results, setResults] = useState<typeof MOCK_RESULTS>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query) { setResults([]); setSearched(false); return; }
    const t = setTimeout(() => { setResults(MOCK_RESULTS.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()) || r.snippet.toLowerCase().includes(query.toLowerCase()))); setSearched(true); }, 300);
    return () => clearTimeout(t);
  }, [query]);

  const tabs = ['All', 'Cases', 'Litigation Types', 'Quizzes'];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Search</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Search across all cases, documents, litigation types, and quizzes</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search cases, legal concepts, courts..." autoFocus
          className="w-full pl-12 pr-10 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-amber-400 rounded-xl text-base focus:outline-none dark:text-white shadow-sm" />
        {query && <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"><X className="h-5 w-5" /></button>}
      </div>

      {searched && results.length > 0 && (
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-sm rounded-full font-medium transition-colors ${activeTab === tab ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}`}>
              {tab}
            </button>
          ))}
        </div>
      )}

      {searched ? (
        results.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-slate-500">{results.length} results for "<strong className="text-slate-700 dark:text-slate-300">{query}</strong>"</p>
            {results.map((r, i) => {
              const Icon = typeIcon[r.type];
              return (
                <Link key={i} href={typeHref[r.type](r.id)}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:border-amber-400 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${typeColor[r.type]}`}><Icon className="h-4 w-4" /></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{r.title}</p>
                        <p className="text-xs text-slate-400 mb-1">{r.subtitle}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{r.snippet}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400">
            <Search className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No results for "{query}"</p>
            <p className="text-sm mt-1">Try a different search term</p>
          </div>
        )
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Recent Searches</h3>
            <div className="flex flex-wrap gap-2">
              {RECENT_SEARCHES.map((s) => (
                <button key={s} onClick={() => setQuery(s)} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:border-amber-400 transition-colors">
                  <Search className="h-3 w-3 text-slate-400" />{s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Suggested Searches</h3>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED.map((s) => (
                <button key={s} onClick={() => setQuery(s)} className="px-3 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg text-sm hover:bg-amber-100 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
