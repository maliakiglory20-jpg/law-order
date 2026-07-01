// Shared shape for seed statute data. The seeder derives `slug` from `name`.

export interface StatuteSeed {
  name: string;
  /** Common short name, e.g. "Title VII". */
  shortName?: string;
  /** Legal citation, e.g. "42 U.S.C. § 2000e". */
  citation?: string;
  /** Topical category, e.g. "Antitrust", "Environmental". */
  category: string;
  /** 'Federal Statute' | 'Constitutional' | 'Federal Rule' | 'State/Uniform' | 'International'. */
  jurisdiction: string;
  enactedYear?: number;
  /** Plain-language, student-friendly summary (3-6 sentences). */
  summary: string;
  /** Key provisions / what it does (3-6 short bullets). */
  keyProvisions: string[];
  /** Authoritative full-text link (validated before shipping). */
  officialUrl?: string;
  /** Slugs of related litigation types (for cross-linking). */
  relatedLitigation?: string[];
}
