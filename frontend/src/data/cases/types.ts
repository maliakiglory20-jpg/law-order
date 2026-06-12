// Shared shape for the static case catalog (mirrors the API Case type)
export interface CatalogParty {
  id: string;
  name: string;
  role: 'PLAINTIFF' | 'DEFENDANT' | 'THIRD_PARTY';
  counsel?: string;
}

export interface CatalogCase {
  id: string; // kebab-case slug, e.g. 'brown-v-board-of-education'
  name: string;
  citation?: string;
  litigationTypeSlug: string; // matches library slugs, e.g. 'constitutional'
  litigationTypeName: string; // display name, e.g. 'Constitutional Litigation'
  court: string;
  jurisdiction: string;
  filingDate?: string; // ISO date
  decisionDate?: string; // ISO date
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
  outcome: string; // e.g. 'Plaintiff Victory', 'Defendant Victory', 'Settlement', 'Mixed'
  significance: string;
  isFeatured: boolean;
  parties: CatalogParty[];
}
