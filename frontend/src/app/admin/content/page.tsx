'use client';
import { useState } from 'react';
import { BookOpen, Plus, Pencil, Upload } from 'lucide-react';

const LITIGATION_TYPES_SUMMARY = [
  { id: '1', name: 'Civil Litigation', cases: 5, category: 'Civil', difficulty: 'Beginner' },
  { id: '2', name: 'Constitutional Litigation', cases: 5, category: 'Constitutional', difficulty: 'Expert' },
  { id: '3', name: 'Patent Litigation', cases: 5, category: 'IP', difficulty: 'Expert' },
  { id: '4', name: 'Employment Litigation', cases: 5, category: 'Employment', difficulty: 'Intermediate' },
  { id: '5', name: 'Criminal Litigation', cases: 5, category: 'Criminal', difficulty: 'Advanced' },
];

const diffColor: Record<string, string> = { Beginner: 'bg-emerald-900 text-emerald-300', Intermediate: 'bg-blue-900 text-blue-300', Advanced: 'bg-amber-900 text-amber-300', Expert: 'bg-red-900 text-red-300' };

export default function AdminContentPage() {
  const [activeTab, setActiveTab] = useState('Litigation Types');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-white">Content Management</h1><p className="text-slate-400 mt-1">Manage litigation types and course materials</p></div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm hover:bg-slate-800 transition-colors"><Upload className="h-4 w-4" />Bulk Upload</button>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-300 transition-colors"><Plus className="h-4 w-4" />Add Litigation Type</button>
        </div>
      </div>

      <div className="flex gap-2 border-b border-slate-700">
        {['Litigation Types', 'Documents', 'Learning Paths'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Litigation Types' && (
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-900 border-b border-slate-700">
              <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                <th className="px-5 py-3">Name</th><th className="px-5 py-3">Category</th><th className="px-5 py-3">Difficulty</th><th className="px-5 py-3">Cases</th><th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {LITIGATION_TYPES_SUMMARY.map((lt) => (
                <tr key={lt.id}>
                  <td className="px-5 py-4 text-sm font-medium text-white">{lt.name}</td>
                  <td className="px-5 py-4 text-sm text-slate-400">{lt.category}</td>
                  <td className="px-5 py-4"><span className={`text-xs px-2 py-1 rounded-full ${diffColor[lt.difficulty]}`}>{lt.difficulty}</span></td>
                  <td className="px-5 py-4 text-sm text-slate-400">{lt.cases} cases</td>
                  <td className="px-5 py-4"><button className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors"><Pencil className="h-4 w-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Documents' && (
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 text-center">
          <Upload className="h-12 w-12 mx-auto text-slate-500 mb-3" />
          <p className="text-slate-300 font-medium mb-2">Upload Court Documents</p>
          <p className="text-sm text-slate-500 mb-4">Upload PDFs, Word documents, and other court materials</p>
          <button className="px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-medium">Select Files</button>
        </div>
      )}

      {activeTab === 'Learning Paths' && (
        <div className="text-center py-12 text-slate-400">
          <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">Learning paths coming soon</p>
        </div>
      )}
    </div>
  );
}
