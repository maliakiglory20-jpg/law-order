import { CaseSeed } from './types';
import administrativeLaw from './administrative-law';
import antitrust from './antitrust';
import bankingFinance from './banking-finance';
import bankruptcy from './bankruptcy';
import civilRights from './civil-rights';
import classAction from './class-action';
import commercial from './commercial';
import constitutional from './constitutional';
import construction from './construction';
import courtHierarchy from './court-hierarchy';
import criminalDefense from './criminal-defense';
import cybercrime from './cybercrime';
import defamationMedia from './defamation-media';
import elderEstate from './elder-estate';
import employment from './employment';
import energyNaturalResources from './energy-natural-resources';
import environmental from './environmental';
import environmentalJustice from './environmental-justice';
import familyLaw from './family-law';
import governmentContracts from './government-contracts';
import healthcare from './healthcare';
import immigration from './immigration';
import insurance from './insurance';
import intellectualProperty from './intellectual-property';
import internationalArbitration from './international-arbitration';
import internationalTrade from './international-trade';
import laborUnion from './labor-union';
import massTort from './mass-tort';
import privacyData from './privacy-data';
import productsLiability from './products-liability';
import realEstate from './real-estate';
import securities from './securities';
import sportsEntertainment from './sports-entertainment';
import tort from './tort';
import whiteCollarCrime from './white-collar-crime';

export const landmarkCases: CaseSeed[] = [
  ...administrativeLaw,
  ...antitrust,
  ...bankingFinance,
  ...bankruptcy,
  ...civilRights,
  ...classAction,
  ...commercial,
  ...constitutional,
  ...construction,
  ...courtHierarchy,
  ...criminalDefense,
  ...cybercrime,
  ...defamationMedia,
  ...elderEstate,
  ...employment,
  ...energyNaturalResources,
  ...environmental,
  ...environmentalJustice,
  ...familyLaw,
  ...governmentContracts,
  ...healthcare,
  ...immigration,
  ...insurance,
  ...intellectualProperty,
  ...internationalArbitration,
  ...internationalTrade,
  ...laborUnion,
  ...massTort,
  ...privacyData,
  ...productsLiability,
  ...realEstate,
  ...securities,
  ...sportsEntertainment,
  ...tort,
  ...whiteCollarCrime,
];
