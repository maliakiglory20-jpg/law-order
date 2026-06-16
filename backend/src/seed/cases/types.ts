// Shared shape for seed case data. Mirrors the Prisma `Case` model fields
// that the seeder writes, plus `litigationSlug` (resolved to litigationTypeId
// at seed time) and an inline `parties` array.

export type SeedPartyRole =
  | 'PLAINTIFF'
  | 'DEFENDANT'
  | 'THIRD_PARTY'
  | 'INTERVENOR'
  | 'AMICUS_CURIAE';

export interface CaseSeedParty {
  name: string;
  role: SeedPartyRole;
  counsel?: string;
  description?: string;
}

export interface CaseSeed {
  /** Slug of the owning litigation type (e.g. 'civil-rights'). */
  litigationSlug: string;
  name: string;
  citation?: string;
  jurisdiction: string;
  court: string;
  year?: number;
  facts: string;
  keyLegalIssues: string[];
  plaintiffArguments: string;
  defendantArguments: string;
  proceduralHistory: string;
  finalDecision: string;
  judicialReasoning: string;
  legalStandards: string[];
  keyPrecedents: string[];
  evidenceAnalysis: string;
  alternativeOutcomes: string;
  lessonsLearned: string[];
  bestPractices: string[];
  significance: string;
  /** e.g. 'Plaintiff Victory', 'Defendant Victory', 'Settlement', 'Mixed'. */
  outcome: string;
  isFeatured?: boolean;
  parties: CaseSeedParty[];
}
