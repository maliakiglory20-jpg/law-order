import { StatuteSeed } from './types';
import businessFinance from './business-finance';
import civilRightsConstitutional from './civil-rights-constitutional';
import criminalImmigrationProcedure from './criminal-immigration-procedure';
import employmentLabor from './employment-labor';
import environmentalHealthAdmin from './environmental-health-admin';
import ipPrivacyTech from './ip-privacy-tech';

export const statutes: StatuteSeed[] = [
  ...businessFinance,
  ...civilRightsConstitutional,
  ...criminalImmigrationProcedure,
  ...employmentLabor,
  ...environmentalHealthAdmin,
  ...ipPrivacyTech,
];
