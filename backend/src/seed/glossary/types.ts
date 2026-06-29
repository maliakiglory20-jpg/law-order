// Shared shape for seed glossary data. The seeder derives `slug` from `term`.

export interface GlossaryTermSeed {
  term: string;
  definition: string;
  category: string;
  /** Optional usage example or note. */
  example?: string;
  /** Names of related terms (free text, not foreign keys). */
  relatedTerms?: string[];
}
