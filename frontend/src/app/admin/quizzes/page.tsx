'use client';
import { useState } from 'react';
import { Sparkles, Plus, Pencil, Trash2, Eye } from 'lucide-react';

const QUIZZES = [
  { id: '1', title: 'Constitutional Law Fundamentals', type: 'MULTIPLE_CHOICE', questions: 10, attempts: 45, isAiGenerated: false, isPublished: true },
  { id: '2', title: 'Miranda Rights & Criminal Procedure', type: 'SCENARIO', questions: 8, attempts: 32, isAiGenerated: true, isPublished: true },
  { id: '3', title: 'Patent Claim Construction', type: 'RULING_ANALYSIS', questions: 12, attempts: 28, isAiGenerated: false, isPublished: true },
  { id: '4', title: 'Class Action Certification', type: 'MULTIPLE_CHOICE', questions: 10, attempts: 19, isAiGenerated: true, isPublished: false },
];

export default function AdminQuizzesPage() {
  const [showGenerate, setShowGenerate] = useState(false);
  const [genLitType, setGenLitType] = useState('');
  const [genType, setGenType] = useState('MULTIPLE_CHOICE');
  const [genCount, setGenCount] = useState('10');
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setShowGenerate(false); alert('AI Quiz generated successfully!'); }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold text-white">Quiz Management</h1><p className="text-slate-400 mt-1">Create and manage quizzes and assessments</p></div>
        <div className="flex gap-3">
          <button onClick={() => setShowGenerate(true)} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Sparkles className="h-4 w-4" />Generate with AI
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-300 transition-colors"><Plus className="h-4 w-4" />New Quiz</button>
        </div>
      </div>

      {showGenerate && (
        <div className="bg-slate-800 border border-violet-500 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-400" />Generate AI Quiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Litigation Type</label>
              <select value={genLitType} onChange={(e) => setGenLitType(e.target.value)} className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-violet-400">
                <option value="">Select type...</option>
                <option>Constitutional Litigation</option><option>Criminal Litigation</option><option>Patent Litigation</option><option>Employment Litigation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Quiz Type</label>
              <select value={genType} onChange={(e) => setGenType(e.target.value)} className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-violet-400">
                <option value="MULTIPLE_CHOICE">Multiple Choice</option><option value="SCENARIO">Scenario</option><option value="TRUE_FALSE">True/False</option><option value="EVIDENCE_IDENTIFICATION">Evidence ID</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Number of Questions</label>
              <input type="number" min="5" max="20" value={genCount} onChange={(e) => setGenCount(e.target.value)} className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-violet-400" />
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleGenerate} disabled={!genLitType || generating} className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-500 disabled:opacity-50 transition-colors flex items-center gap-2">
              {generating ? <><span className="animate-spin">⟳</span> Generating...</> : 'Generate Quiz'}
            </button>
            <button onClick={() => setShowGenerate(false)} className="px-4 py-2 border border-slate-600 text-slate-400 rounded-lg text-sm">Cancel</button>
          </div>
        </div>
      )}

      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900 border-b border-slate-700">
            <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
              <th className="px-5 py-3">Quiz</th><th className="px-5 py-3">Type</th><th className="px-5 py-3">Questions</th><th className="px-5 py-3">Attempts</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {QUIZZES.map((q) => (
              <tr key={q.id}>
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-white">{q.title}</p>
                  {q.isAiGenerated && <span className="text-xs text-violet-400 flex items-center gap-1 mt-0.5"><Sparkles className="h-3 w-3" />AI Generated</span>}
                </td>
                <td className="px-5 py-4 text-xs text-slate-400">{q.type.replace('_', ' ')}</td>
                <td className="px-5 py-4 text-sm text-slate-400">{q.questions}</td>
                <td className="px-5 py-4 text-sm text-slate-400">{q.attempts}</td>
                <td className="px-5 py-4"><span className={`text-xs px-2 py-1 rounded-full ${q.isPublished ? 'bg-emerald-900 text-emerald-300' : 'bg-slate-700 text-slate-400'}`}>{q.isPublished ? 'Published' : 'Draft'}</span></td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors"><Eye className="h-4 w-4" /></button>
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
