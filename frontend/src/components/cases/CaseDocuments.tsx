'use client';
import { FileText, Download, Eye, File } from 'lucide-react';
import { Document, DocumentType } from '@/types';

const docTypeLabels: Record<DocumentType, string> = {
  COMPLAINT: 'Complaint', ANSWER: 'Answer', MOTION: 'Motion', BRIEF: 'Brief',
  DEPOSITION: 'Deposition', EXHIBIT: 'Exhibit', EXPERT_REPORT: 'Expert Report',
  COURT_ORDER: 'Court Order', PROTOCOL: 'Protocol', NEWS_ARTICLE: 'News Article',
  NEWSLETTER: 'Newsletter', EMAIL: 'Email', CONTRACT: 'Contract', FINANCIAL_RECORD: 'Financial Record',
};

const docGroups: Record<string, DocumentType[]> = {
  'Court Documents': ['COMPLAINT', 'ANSWER', 'MOTION', 'BRIEF', 'COURT_ORDER'],
  'Evidence': ['EXHIBIT', 'DEPOSITION', 'EXPERT_REPORT', 'EMAIL', 'CONTRACT', 'FINANCIAL_RECORD'],
  'Protocols': ['PROTOCOL'],
  'Media Coverage': ['NEWS_ARTICLE', 'NEWSLETTER'],
};

function formatSize(bytes?: number): string {
  if (!bytes) return 'N/A';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

interface CaseDocumentsProps {
  documents: Document[];
  canDownload?: boolean;
}

export function CaseDocuments({ documents, canDownload = true }: CaseDocumentsProps) {
  if (documents.length === 0) {
    return (
      <div className="text-center py-8 text-slate-400">
        <File className="h-12 w-12 mx-auto mb-3 opacity-30" />
        <p className="text-sm">No documents available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {Object.entries(docGroups).map(([groupLabel, types]) => {
        const groupDocs = documents.filter((d) => types.includes(d.type));
        if (groupDocs.length === 0) return null;
        return (
          <div key={groupLabel}>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">{groupLabel}</h4>
            <div className="space-y-2">
              {groupDocs.map((doc) => (
                <div key={doc.id} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-amber-300 transition-colors">
                  <FileText className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{doc.name}</p>
                    <p className="text-xs text-slate-400">{docTypeLabels[doc.type]} · {formatSize(doc.fileSize)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-blue-500 transition-colors" title="Preview">
                      <Eye className="h-4 w-4" />
                    </button>
                    {canDownload && doc.isPublic && (
                      <button className="p-1.5 text-slate-400 hover:text-emerald-500 transition-colors" title="Download">
                        <Download className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
