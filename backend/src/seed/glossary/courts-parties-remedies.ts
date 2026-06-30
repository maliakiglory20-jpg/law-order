import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Trial Court',
    definition:
      'The court of first instance where cases are initially heard, evidence is presented, witnesses testify, and facts are determined. Trial courts have original jurisdiction over most civil and criminal matters.',
    category: 'Courts, Parties & Remedies',
    example: 'A car accident lawsuit starts in a trial court, where a jury hears witnesses and looks at evidence before deciding who wins.',
    relatedTerms: ['Original Jurisdiction', 'Appellate Court', 'Bench Trial', 'Jury'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Appellate Court',
    definition:
      'A court that reviews decisions of lower courts to determine whether legal errors were made. Appellate courts generally do not hear new evidence; they examine the record from the trial court and consider legal arguments submitted in written briefs.',
    category: 'Courts, Parties & Remedies',
    example: 'After losing at trial, a defendant appeals to the appellate court, arguing the judge wrongly excluded key evidence.',
    relatedTerms: ['Appellate Jurisdiction', 'Trial Court', 'Appellant', 'Appellee'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Supreme Court',
    definition:
      'The highest court in a jurisdiction whose decisions are final and binding on all lower courts. In the United States, the U.S. Supreme Court is the court of last resort for federal constitutional questions, while each state has its own supreme court for state law matters.',
    category: 'Courts, Parties & Remedies',
    example: 'When lower courts disagree on a major legal question, the U.S. Supreme Court can step in to settle it once and for all.',
    relatedTerms: ['Appellate Court', 'Appellate Jurisdiction', 'Justice', 'Certiorari'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'District Court',
    definition:
      'The principal trial courts in the federal judicial system, organized by geographic district. Each state has at least one federal district court, and they hear the majority of federal civil and criminal cases.',
    category: 'Courts, Parties & Remedies',
    example: 'A federal antitrust lawsuit is filed in the U.S. District Court for the Southern District of New York.',
    relatedTerms: ['Circuit Court', 'Trial Court', 'Original Jurisdiction', 'Federal Jurisdiction'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Circuit Court',
    definition:
      'In the federal system, the intermediate appellate courts (called U.S. Courts of Appeals) organized into thirteen circuits. They review decisions from district courts within their geographic circuit. Several states also use the term "circuit court" for their trial courts of general jurisdiction.',
    category: 'Courts, Parties & Remedies',
    example: 'The Ninth Circuit Court of Appeals reversed the district court\'s ruling on constitutional grounds.',
    relatedTerms: ['District Court', 'Appellate Court', 'Appellant', 'Appellee'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Magistrate',
    definition:
      'A judicial officer who handles preliminary matters and lesser proceedings, such as issuing warrants, setting bail, conducting initial appearances, and presiding over misdemeanor cases. Federal magistrate judges assist district court judges and may handle certain civil matters with the consent of parties.',
    category: 'Courts, Parties & Remedies',
    example: 'After an arrest, a magistrate holds a quick hearing to decide whether the accused can be released on bail and for how much.',
    relatedTerms: ['Judge', 'Trial Court', 'District Court', 'Bench Trial'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Judge',
    definition:
      'A public official vested with authority to hear and decide legal disputes. Judges preside over court proceedings, rule on motions, instruct juries on the law, and impose sentences or enter judgments.',
    category: 'Courts, Parties & Remedies',
    example: 'The judge controls the courtroom, decides what evidence is allowed, and tells the jury which legal rules apply to the case.',
    relatedTerms: ['Justice', 'Magistrate', 'Bench Trial', 'Clerk of Court'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Justice',
    definition:
      'The title given to judges who sit on appellate courts, particularly supreme courts. At the U.S. Supreme Court, nine Justices — including one Chief Justice — decide the most significant federal legal questions.',
    category: 'Courts, Parties & Remedies',
    example: 'A Justice on the Supreme Court writes a formal opinion explaining why the Court ruled a law unconstitutional.',
    relatedTerms: ['Judge', 'Supreme Court', 'Appellate Court', 'Appellate Jurisdiction'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Jury',
    definition:
      'A group of citizens selected to determine facts in dispute and render a verdict in a trial. In criminal cases, a petit jury typically consists of twelve members; civil juries may vary by jurisdiction. A grand jury, by contrast, determines whether probable cause exists to indict.',
    category: 'Courts, Parties & Remedies',
    example: 'Twelve ordinary citizens listen to both sides of a criminal case and vote on whether the defendant is guilty or not guilty.',
    relatedTerms: ['Bench Trial', 'Trial Court', 'Verdict', 'Plaintiff'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Bench Trial',
    definition:
      'A trial in which the judge, rather than a jury, serves as the finder of fact and renders a verdict. Parties may waive their right to a jury trial and elect a bench trial.',
    category: 'Courts, Parties & Remedies',
    example: 'Both sides agreed to skip the jury and let the judge alone decide who wins — that is a bench trial.',
    relatedTerms: ['Jury', 'Judge', 'Trial Court', 'Verdict'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Plaintiff',
    definition:
      'The party who initiates a civil lawsuit by filing a complaint against another party. The plaintiff bears the burden of proving the elements of the claim by a preponderance of the evidence in most civil actions.',
    category: 'Courts, Parties & Remedies',
    example: 'If your neighbor\'s dog bites you and you sue them, you are the plaintiff — the person bringing the lawsuit.',
    relatedTerms: ['Defendant', 'Petitioner', 'Complaint', 'Burden of Proof'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Defendant',
    definition:
      'The party against whom a civil lawsuit or criminal charge is brought. In civil cases, the defendant responds to the plaintiff\'s complaint; in criminal cases, the defendant is the person accused of committing an offense.',
    category: 'Courts, Parties & Remedies',
    example: 'The person or company being sued or charged with a crime is the defendant — they must respond to the case brought against them.',
    relatedTerms: ['Plaintiff', 'Respondent', 'Defense Attorney', 'Answer'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Petitioner',
    definition:
      'The party who files a petition initiating a proceeding, typically used in appellate proceedings, habeas corpus actions, or certain administrative matters. In some jurisdictions, "petitioner" is used in place of "plaintiff" in family law or probate matters.',
    category: 'Courts, Parties & Remedies',
    example: 'A prisoner who asks a court to review whether their imprisonment is lawful is called a petitioner.',
    relatedTerms: ['Respondent', 'Plaintiff', 'Appellant', 'Original Jurisdiction'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Respondent',
    definition:
      'The party who responds to a petition or appeal filed by another party. Respondent is the counterpart to petitioner and corresponds to the appellee in appellate terminology.',
    category: 'Courts, Parties & Remedies',
    example: 'When someone files an appeal or petition against you, you become the respondent — you respond and defend the lower court\'s decision.',
    relatedTerms: ['Petitioner', 'Appellee', 'Defendant', 'Appellate Court'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Appellant',
    definition:
      'The party who appeals a lower court\'s decision to a higher court. The appellant argues that legal error affected the outcome and asks the appellate court to reverse, modify, or remand the decision.',
    category: 'Courts, Parties & Remedies',
    example: 'If you lose at trial and believe the judge made a legal mistake, you become the appellant when you take the case to a higher court.',
    relatedTerms: ['Appellee', 'Appellate Court', 'Appellate Jurisdiction', 'Petitioner'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Appellee',
    definition:
      'The party against whom an appeal is filed; the party who prevailed at the lower court level and seeks to have the decision affirmed on appeal.',
    category: 'Courts, Parties & Remedies',
    example: 'If you won at trial and the other side appeals, you become the appellee — you argue that the original decision should stand.',
    relatedTerms: ['Appellant', 'Appellate Court', 'Respondent', 'Affirmance'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Intervenor',
    definition:
      'A third party who is not an original party to a lawsuit but who is permitted by the court to participate because that party has an interest in the outcome of the litigation. Intervention may be of right or permissive.',
    category: 'Courts, Parties & Remedies',
    example: 'An environmental group joined an ongoing lawsuit as an intervenor because the outcome would directly affect the wildlife refuge it manages.',
    relatedTerms: ['Plaintiff', 'Defendant', 'Amicus Curiae', 'Standing'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Amicus Curiae',
    definition:
      'Latin for "friend of the court." A person or organization not party to a case who files a brief offering information, expertise, or argument relevant to the issues before the court. Amicus briefs are common in appellate proceedings on matters of broad public importance.',
    category: 'Courts, Parties & Remedies',
    example: 'Civil rights groups not directly involved in a Supreme Court case filed friend-of-the-court briefs sharing research and arguments they wanted the justices to consider.',
    relatedTerms: ['Intervenor', 'Appellate Court', 'Brief', 'Supreme Court'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Pro Se Litigant',
    definition:
      'A party who represents themselves in legal proceedings without the assistance of an attorney. Pro se litigants are generally held to less stringent pleading standards than represented parties but must still comply with procedural rules.',
    category: 'Courts, Parties & Remedies',
    example: 'Someone who cannot afford a lawyer and handles their own small claims case in court is acting as a pro se litigant.',
    relatedTerms: ['Counsel', 'Plaintiff', 'Defendant', 'Defense Attorney'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Counsel',
    definition:
      'An attorney or group of attorneys representing a party in legal proceedings. "Counsel" may refer to a single lawyer or to the legal team as a whole, and the term encompasses both in-house legal advisors and outside litigation attorneys.',
    category: 'Courts, Parties & Remedies',
    example: 'The judge asked counsel for both sides to hand in their proposed jury instructions before the end of the day.',
    relatedTerms: ['Defense Attorney', 'Prosecutor', 'Pro Se Litigant', 'Attorney-Client Privilege'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Prosecutor',
    definition:
      'A government attorney who represents the state or the people in criminal proceedings and bears the burden of proving the defendant\'s guilt beyond a reasonable doubt. Prosecutors include district attorneys, state attorneys general, and federal assistant U.S. attorneys.',
    category: 'Courts, Parties & Remedies',
    example: 'In a robbery trial, the prosecutor presents evidence and calls witnesses to convince the jury the defendant committed the crime.',
    relatedTerms: ['Defense Attorney', 'Defendant', 'Burden of Proof', 'Indictment'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Defense Attorney',
    definition:
      'A lawyer who represents the defendant in criminal proceedings or the defending party in civil litigation. In criminal cases, defense attorneys ensure the accused receives due process and a fair trial, and the Sixth Amendment guarantees the right to counsel in serious criminal prosecutions.',
    category: 'Courts, Parties & Remedies',
    example: 'A defense attorney challenged the police search that produced the main evidence, arguing it violated the defendant\'s constitutional rights.',
    relatedTerms: ['Prosecutor', 'Defendant', 'Counsel', 'Pro Se Litigant'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Bailiff',
    definition:
      'A court officer responsible for maintaining order in the courtroom, escorting the judge, managing the jury, and ensuring the security and decorum of court proceedings.',
    category: 'Courts, Parties & Remedies',
    example: 'The bailiff announces "All rise" when the judge enters, keeps order in the courtroom, and watches over the jury during deliberations.',
    relatedTerms: ['Judge', 'Clerk of Court', 'Jury', 'Court Reporter'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Clerk of Court',
    definition:
      'An official who manages the administrative operations of a court, including maintaining court records, docketing filings, issuing summonses, and processing judgments. The clerk\'s office is the primary point of contact for filing legal documents.',
    category: 'Courts, Parties & Remedies',
    example: 'When you file a lawsuit, you bring your paperwork to the clerk of court\'s office, where it is stamped, assigned a case number, and added to the official court record.',
    relatedTerms: ['Judge', 'Bailiff', 'Court Reporter', 'Docket'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Court Reporter',
    definition:
      'A certified professional who creates a verbatim written transcript of court proceedings, depositions, and hearings using stenographic equipment or voice recording technology. The transcript constitutes the official record of proceedings.',
    category: 'Courts, Parties & Remedies',
    example: 'The court reporter types every word spoken during the trial so that appellate courts and attorneys can review exactly what was said.',
    relatedTerms: ['Clerk of Court', 'Bailiff', 'Appellate Court', 'Deposition'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Original Jurisdiction',
    definition:
      'The authority of a court to hear a case for the first time, as opposed to reviewing a decision made by a lower court. Courts with original jurisdiction receive cases at their inception and conduct trials.',
    category: 'Courts, Parties & Remedies',
    example: 'When two states disagree over their shared border, the U.S. Supreme Court hears the dispute first because it has original jurisdiction over cases between states.',
    relatedTerms: ['Appellate Jurisdiction', 'Trial Court', 'District Court', 'Petitioner'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Appellate Jurisdiction',
    definition:
      'The power of a court to review and revise the decision of a lower court. Appellate jurisdiction is invoked after a final judgment has been entered in the trial court and a party timely files a notice of appeal.',
    category: 'Courts, Parties & Remedies',
    example: 'The court of appeals used its appellate jurisdiction to review whether the trial judge made a legal error when denying an injunction.',
    relatedTerms: ['Original Jurisdiction', 'Appellate Court', 'Appellant', 'Circuit Court'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Remedy',
    definition:
      'The legal or equitable relief granted by a court to a party who has suffered a legal wrong. Remedies may be legal (monetary) or equitable (injunctive or declaratory) in nature.',
    category: 'Courts, Parties & Remedies',
    example: 'After proving the other side broke the law, a court decides the remedy — for example, ordering them to pay money or to stop certain behavior.',
    relatedTerms: ['Damages', 'Injunction', 'Equitable Relief', 'Declaratory Judgment'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Damages',
    definition:
      'A monetary award granted by a court to compensate a party who has suffered loss or injury due to the wrongful act of another. Damages are the most common legal remedy and may be compensatory, punitive, or nominal.',
    category: 'Courts, Parties & Remedies',
    example: 'After winning a personal injury lawsuit, the plaintiff received $200,000 in damages covering medical bills, lost wages, and pain and suffering.',
    relatedTerms: ['Compensatory Damages', 'Punitive Damages', 'Nominal Damages', 'Remedy'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Compensatory Damages',
    definition:
      'Damages intended to make the injured party whole by restoring them to the position they would have been in had the wrong not occurred. Compensatory damages include both economic losses (medical bills, lost income) and non-economic losses (pain and suffering, emotional distress).',
    category: 'Courts, Parties & Remedies',
    example: 'The plaintiff received compensatory damages of $75,000 for hospital bills and $25,000 for ongoing physical therapy — money to cover real out-of-pocket losses.',
    relatedTerms: ['Damages', 'Punitive Damages', 'Nominal Damages', 'Remedy'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Punitive Damages',
    definition:
      'Damages awarded in addition to compensatory damages to punish a defendant for especially egregious, willful, or malicious conduct and to deter similar conduct in the future. Punitive damages are not available in all cases and are subject to constitutional limits.',
    category: 'Courts, Parties & Remedies',
    example: 'On top of covering the victim\'s losses, the court added $1 million in punitive damages to punish a company that knowingly sold a dangerous product.',
    relatedTerms: ['Compensatory Damages', 'Damages', 'Remedy', 'Nominal Damages'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Nominal Damages',
    definition:
      'A small, token monetary award granted when a legal right has been violated but no actual loss can be proven. Nominal damages vindicate the plaintiff\'s rights and establish that a legal wrong occurred.',
    category: 'Courts, Parties & Remedies',
    example: 'The jury found the defendant trespassed on the plaintiff\'s land but caused no real harm, so it awarded just $1 in nominal damages to acknowledge the violation.',
    relatedTerms: ['Compensatory Damages', 'Punitive Damages', 'Damages', 'Remedy'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Injunction',
    definition:
      'A court order directing a party to do or refrain from doing a specific act. Injunctions may be temporary (restraining order), preliminary (pending final judgment), or permanent (issued as final relief after trial).',
    category: 'Courts, Parties & Remedies',
    example: 'A court issued an injunction ordering a factory to stop dumping chemicals into a nearby river while the lawsuit was decided.',
    relatedTerms: ['Preliminary Injunction', 'Permanent Injunction', 'Equitable Relief', 'Remedy'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Preliminary Injunction',
    definition:
      'A court order issued before the final resolution of a case that maintains the status quo or prevents irreparable harm while litigation proceeds. A party seeking a preliminary injunction must typically show likelihood of success on the merits, irreparable harm, balance of equities, and public interest.',
    category: 'Courts, Parties & Remedies',
    example: 'While the lawsuit was ongoing, an employee got a preliminary injunction stopping the company from enforcing a noncompete agreement that was preventing her from working.',
    relatedTerms: ['Injunction', 'Permanent Injunction', 'Equitable Relief', 'Temporary Restraining Order'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Permanent Injunction',
    definition:
      'A final court order, issued after a full hearing on the merits, that permanently prohibits or requires certain conduct. Unlike a preliminary injunction, a permanent injunction is entered as part of the final judgment.',
    category: 'Courts, Parties & Remedies',
    example: 'After the full trial, the court issued a permanent injunction requiring the factory to permanently stop discharging pollutants into the river.',
    relatedTerms: ['Preliminary Injunction', 'Injunction', 'Equitable Relief', 'Declaratory Judgment'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Declaratory Judgment',
    definition:
      'A court ruling that determines the rights and obligations of the parties without ordering any specific relief or awarding damages. Declaratory judgments clarify the legal relationship between parties and resolve uncertainty before a dispute escalates.',
    category: 'Courts, Parties & Remedies',
    example: 'An insurance company asked a court for a declaratory judgment to establish upfront that its policy did not cover the customer\'s claimed losses — settling the question without waiting for a full lawsuit.',
    relatedTerms: ['Remedy', 'Injunction', 'Equitable Relief', 'Damages'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Restitution',
    definition:
      'A remedy requiring a defendant to give back to the plaintiff any benefit unjustly obtained or to restore the plaintiff to their original position. In criminal law, restitution may be ordered as a condition of sentencing to compensate crime victims.',
    category: 'Courts, Parties & Remedies',
    example: 'A judge ordered the fraudster to pay $30,000 in restitution directly to the victim — giving back exactly what was stolen.',
    relatedTerms: ['Remedy', 'Compensatory Damages', 'Equitable Relief', 'Specific Performance'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Specific Performance',
    definition:
      'An equitable remedy compelling a party to perform their obligations under a contract, typically ordered when monetary damages are inadequate — most commonly in contracts for the sale of unique property or rare goods.',
    category: 'Courts, Parties & Remedies',
    example: 'When a seller backed out of a contract to sell a one-of-a-kind historic home, the court ordered specific performance — forcing the seller to complete the sale rather than just pay money.',
    relatedTerms: ['Equitable Relief', 'Remedy', 'Injunction', 'Restitution'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Equitable Relief',
    definition:
      'Remedies that originate from courts of equity, designed to achieve a fair and just result when legal remedies (money damages) are insufficient. Equitable relief includes injunctions, specific performance, rescission, and declaratory judgments.',
    category: 'Courts, Parties & Remedies',
    example: 'Because money alone could not fix the problem, the court granted equitable relief by ordering the defendant to hand over property they had wrongfully taken.',
    relatedTerms: ['Injunction', 'Specific Performance', 'Declaratory Judgment', 'Remedy'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Garnishment',
    definition:
      'A legal procedure by which a creditor obtains payment of a judgment debt by directing a third party (such as an employer or bank) who holds money belonging to the debtor to pay that money to the creditor instead.',
    category: 'Courts, Parties & Remedies',
    example: 'After winning a lawsuit, the creditor used wage garnishment to have a portion of the debtor\'s paycheck sent directly to them each pay period until the debt was paid.',
    relatedTerms: ['Lien', 'Damages', 'Judgment', 'Restitution'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Lien',
    definition:
      'A legal claim or security interest against a debtor\'s property, giving the lienholder the right to have the property sold to satisfy a debt if the debtor fails to pay. Liens may arise by contract, statute, or court judgment.',
    category: 'Courts, Parties & Remedies',
    example: 'After a homeowner failed to pay for renovation work, the contractor filed a lien on the house — meaning the house cannot be sold until the contractor is paid.',
    relatedTerms: ['Garnishment', 'Judgment', 'Remedy', 'Specific Performance'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Contempt of Court',
    definition:
      'Conduct that disrespects, disobeys, or undermines the authority of the court or its orders. Civil contempt is typically used to compel compliance with a court order; criminal contempt punishes deliberate disregard for the court\'s dignity or authority.',
    category: 'Courts, Parties & Remedies',
    example: 'A company that ignored a court order to hand over documents was held in contempt of court and fined $5,000 for every day it continued to refuse.',
    relatedTerms: ['Injunction', 'Judge', 'Remedy', 'Sanctions'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Temporary Restraining Order',
    definition:
      'An emergency court order obtained without notice to the opposing party that temporarily prevents a party from taking certain actions. A TRO is short-lived and must be followed by a hearing on a preliminary injunction.',
    category: 'Courts, Parties & Remedies',
    example: 'A business got an emergency temporary restraining order within hours to stop a former employee from immediately sharing trade secrets with a rival company.',
    relatedTerms: ['Preliminary Injunction', 'Injunction', 'Equitable Relief', 'Contempt of Court'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Standing',
    definition:
      'The legal right of a party to bring a claim in court. To have standing, a party must demonstrate a sufficient connection to and harm from the challenged law or action, typically requiring an injury in fact, causation, and redressability.',
    category: 'Courts, Parties & Remedies',
    example: 'A citizen who was not personally affected by a new regulation cannot sue to challenge it — courts require standing, meaning you must show the law actually harmed you.',
    relatedTerms: ['Plaintiff', 'Original Jurisdiction', 'Intervenor', 'Petitioner'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Judgment',
    definition:
      'The official decision of a court resolving the claims in a lawsuit and determining the rights and obligations of the parties. A final judgment concludes the litigation at the trial court level and may be appealed.',
    category: 'Courts, Parties & Remedies',
    example: 'After the trial ended, the court entered a judgment ordering the defendant to pay the plaintiff $150,000.',
    relatedTerms: ['Damages', 'Remedy', 'Verdict', 'Appellate Court'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Verdict',
    definition:
      'The formal decision rendered by a jury (or by a judge in a bench trial) on the factual questions submitted to them. In civil cases, the verdict determines liability and may set the amount of damages; in criminal cases, the verdict is either guilty or not guilty.',
    category: 'Courts, Parties & Remedies',
    example: 'After deliberating, the twelve jurors announced their verdict: not guilty on all charges.',
    relatedTerms: ['Jury', 'Bench Trial', 'Judgment', 'Trial Court'],
    difficulty: 'Beginner',
    isEssential: true,
  },
];

export default terms;
