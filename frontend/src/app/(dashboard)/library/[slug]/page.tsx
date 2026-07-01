'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen, Clock, Award, Scale, FileText, Landmark } from 'lucide-react';
import { CaseCard } from '@/components/cases/CaseCard';
import { TypeIcon } from '@/components/litigation/TypeIcon';
import { useLitigationType } from '@/hooks/useLitigation';
import { casesApi } from '@/lib/api';
import { Case } from '@/types';

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-emerald-100 text-emerald-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-amber-100 text-amber-700',
  Expert: 'bg-red-100 text-red-700',
};

export default function LitigationTypePage({ params }: { params: { slug: string } }) {
  const { type, isLoading, error } = useLitigationType(params.slug);
  const [typeCases, setTypeCases] = useState<Case[]>([]);

  useEffect(() => {
    if (!type?.id) return;
    let active = true;
    casesApi
      .getAll({ litigationTypeId: type.id, limit: 50 })
      .then((res) => { if (active) setTypeCases(res.data.cases ?? res.data.data ?? []); })
      .catch(() => { if (active) setTypeCases([]); });
    return () => { active = false; };
  }, [type?.id]);

  if (isLoading) {
    return (
      <div className="space-y-6 max-w-4xl">
        <div className="h-40 bg-slate-100 dark:bg-slate-700 rounded-2xl animate-pulse" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-64 bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse" />
          <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (error || !type) {
    return (
      <div className="max-w-4xl text-center py-20">
        <p className="text-slate-500 dark:text-slate-400">This litigation type could not be found.</p>
        <Link href="/library" className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-3 inline-block">
          ← Back to Library
        </Link>
      </div>
    );
  }

  const caseCount = type._count?.cases ?? typeCases.length;

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400">
        <Link href="/library" className="hover:text-amber-500 transition-colors">Library</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-slate-600 dark:text-slate-300">{type.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="mb-4 text-amber-400">
          <TypeIcon name={type.icon} className="h-12 w-12" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium bg-white/10 px-2.5 py-1 rounded-full text-slate-200">{type.category}</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{type.name}</h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">{type.description}</p>
        <div className="flex items-center gap-4 mt-4 flex-wrap">
          {type.difficulty && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColor[type.difficulty] ?? 'bg-slate-100 text-slate-700'}`}>
              {type.difficulty}
            </span>
          )}
          <div className="flex items-center gap-1.5 text-sm text-slate-400"><Clock className="h-4 w-4" />{type.estimatedStudyHours} study hours</div>
          <div className="flex items-center gap-1.5 text-sm text-slate-400"><BookOpen className="h-4 w-4" />{caseCount} cases</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Purpose */}
          {type.purpose && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><Scale className="h-5 w-5 text-amber-500" />Purpose</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{type.purpose}</p>
            </div>
          )}

          {/* Court Process */}
          {type.courtProcess && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><FileText className="h-5 w-5 text-amber-500" />Court Process Overview</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{type.courtProcess}</p>
            </div>
          )}

          {/* Key Principles */}
          {type.keyPrinciples?.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><Award className="h-5 w-5 text-amber-500" />Key Legal Principles</h2>
              <ul className="space-y-2">
                {type.keyPrinciples.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-amber-500 mt-0.5">•</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Statutes & Governing Laws */}
          {(type.keyStatutes?.length ?? 0) > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2"><Landmark className="h-5 w-5 text-amber-500" />Key Statutes &amp; Governing Laws</h2>
              <ul className="space-y-2">
                {type.keyStatutes!.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-amber-500 mt-0.5">§</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Practical Examples */}
          {type.practicalExamples?.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-3">Practical Examples</h2>
              <ul className="space-y-2">
                {type.practicalExamples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-blue-400 mt-0.5">›</span>{ex}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Typical Issues */}
          {type.typicalIssues?.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Typical Legal Issues</h2>
              <ul className="space-y-1.5">
                {type.typicalIssues.map((issue, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">›</span>{issue}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Common Evidence */}
          {type.commonEvidence?.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Common Evidence</h2>
              <ul className="space-y-1.5">
                {type.commonEvidence.map((ev, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5"><span className="text-emerald-400 mt-0.5">✓</span>{ev}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Cases */}
      <div>
        <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Cases in {type.name}</h2>
        {typeCases.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">No cases available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {typeCases.map((c) => <CaseCard key={c.id} caseItem={c} />)}
          </div>
        )}
      </div>
    </div>
  );
}
