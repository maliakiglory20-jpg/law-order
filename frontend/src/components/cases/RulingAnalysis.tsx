'use client';
import { CheckCircle2, XCircle, AlertCircle, Lightbulb } from 'lucide-react';
import { Case } from '@/types';

export function RulingAnalysis({ caseItem }: { caseItem: Case }) {
  return (
    <div className="space-y-6">
      {/* Final Decision */}
      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Final Decision
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{caseItem.finalDecision}</p>
        <div className="mt-3 inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
          {caseItem.outcome}
        </div>
      </div>

      {/* Judicial Reasoning */}
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Judicial Reasoning</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{caseItem.judicialReasoning}</p>
        {caseItem.legalStandards.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-medium text-slate-500 mb-2">Legal Standards Applied:</p>
            <div className="flex flex-wrap gap-2">
              {caseItem.legalStandards.map((s, i) => (
                <span key={i} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Evidence Analysis */}
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Evidence Analysis</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{caseItem.evidenceAnalysis}</p>
      </div>

      {/* Key Precedents */}
      {caseItem.keyPrecedents.length > 0 && (
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Key Precedents</h3>
          <ul className="space-y-2">
            {caseItem.keyPrecedents.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="text-amber-500 mt-0.5">•</span> {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Alternative Outcomes */}
      <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-5 border border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" /> Alternative Outcome Analysis
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{caseItem.alternativeOutcomes}</p>
      </div>

      {/* Lessons Learned */}
      {caseItem.lessonsLearned.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-blue-500" /> Lessons Learned
          </h3>
          <ul className="space-y-2">
            {caseItem.lessonsLearned.map((l, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="text-blue-500 font-bold mt-0.5">{i + 1}.</span> {l}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
