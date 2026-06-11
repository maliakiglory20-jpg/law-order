'use client';
import { useState } from 'react';
import { Plus, Search, Pencil, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';

const CASES = [
  { id: '1', name: 'Brown v. Board of Education', litigationType: 'Constitutional', court: 'U.S. Supreme Court', year: 1954, isPublished: true, isFeatured: true },
  { id: '2', name: 'Miranda v. Arizona', litigationType: 'Criminal', court: 'U.S. Supreme Court', year: 1966, isPublished: true, isFeatured: false },
  { id: '3', name: 'Apple Inc. v. Samsung Electronics', litigationType: 'Patent', court: 'U.S. District Court, N.D. Cal.', year: 2012, isPublished: true, isFeatured: true },
  { id: '4', name: 'Wal-Mart Stores v. Dukes', litigationType: 'Class Action', court: 'U.S. Supreme Court', year: 2011, isPublished: true, isFeatured: false },
  { id: '5', name: 'Citizens United v. FEC', litigationType: 'Constitutional', court: 'U.S. Supreme Court', year: 2010, isPublished: true, isFeatured: false },
];

export default function AdminCasesPage() {
  const [search, setSearch] = useState('');
  const filtered = CASES.filter((c) => !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.litigationType.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-white">Case Management</h1><p className="text-slate-400 mt-1">Manage case study repository</p></div>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-300 transition-colors"><Plus className="h-4 w-4" />Add Case</button>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input type="text" placeholder="Search cases..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm pl-9 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400" />
      </div>
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900 border-b border-slate-700">
            <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
              <th className="px-5 py-3">Case</th><th className="px-5 py-3">Type</th><th className="px-5 py-3">Year</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {filtered.map((c) => (
              <tr key={c.id}>
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-white">{c.name}</p>
                  <p className="text-xs text-slate-400">{c.court}</p>
                </td>
                <td className="px-5 py-4"><span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{c.litigationType}</span></td>
                <td className="px-5 py-4 text-sm text-slate-400">{c.year}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${c.isPublished ? 'bg-emerald-900 text-emerald-300' : 'bg-slate-700 text-slate-400'}`}>{c.isPublished ? 'Published' : 'Draft'}</span>
                    {c.isFeatured && <span className="text-xs bg-amber-900 text-amber-300 px-2 py-1 rounded-full">Featured</span>}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1">
                    <Link href={`/cases/${c.id}`} className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors"><Eye className="h-4 w-4" /></Link>
                    <button className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors"><Pencil className="h-4 w-4" /></button>
                    <button className="p-1.5 text-slate-400 hover:text-red-400 transition-colors"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
