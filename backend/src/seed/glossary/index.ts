import { GlossaryTermSeed } from './types';
import constitutionalAdmin from './constitutional-admin';
import contractsCommercial from './contracts-commercial';
import corporateIp from './corporate-ip';
import courtsPartiesRemedies from './courts-parties-remedies';
import criminal from './criminal';
import documentReview from './document-review';
import evidence from './evidence';
import latin from './latin';
import litigationProcedure from './litigation-procedure';
import property from './property';
import torts from './torts';

export const glossaryTerms: GlossaryTermSeed[] = [
  ...constitutionalAdmin,
  ...contractsCommercial,
  ...corporateIp,
  ...courtsPartiesRemedies,
  ...criminal,
  ...documentReview,
  ...evidence,
  ...latin,
  ...litigationProcedure,
  ...property,
  ...torts,
];
