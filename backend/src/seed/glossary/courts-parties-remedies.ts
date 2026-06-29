import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Trial Court',
    definition:
      'The court of first instance where cases are initially heard, evidence is presented, witnesses testify, and facts are determined. Trial courts have original jurisdiction over most civil and criminal matters.',
    category: 'Courts, Parties & Remedies',
    example: 'A personal injury lawsuit begins in a state trial court where a jury hears testimony and reviews exhibits.',
    relatedTerms: ['Original Jurisdiction', 'Appellate Court', 'Bench Trial', 'Jury'],
  },
  {
    term: 'Appellate Court',
    definition:
      'A court that reviews decisions of lower courts to determine whether legal errors were made. Appellate courts generally do not hear new evidence; they examine the record from the trial court and consider legal arguments submitted in written briefs.',
    category: 'Courts, Parties & Remedies',
    example: 'After losing at trial, a defendant appeals to the court of appeals arguing the judge improperly excluded key evidence.',
    relatedTerms: ['Appellate Jurisdiction', 'Trial Court', 'Appellant', 'Appellee'],
  },
  {
    term: 'Supreme Court',
    definition:
      'The highest court in a jurisdiction whose decisions are final and binding on all lower courts. In the United States, the U.S. Supreme Court is the court of last resort for federal constitutional questions, while each state has its own supreme court for state law matters.',
    category: 'Courts, Parties & Remedies',
    example: 'The U.S. Supreme Court agreed to hear the case by granting a writ of certiorari.',
    relatedTerms: ['Appellate Court', 'Appellate Jurisdiction', 'Justice', 'Certiorari'],
  },
  {
    term: 'District Court',
    definition:
      'The principal trial courts in the federal judicial system, organized by geographic district. Each state has at least one federal district court, and they hear the majority of federal civil and criminal cases.',
    category: 'Courts, Parties & Remedies',
    example: 'A federal antitrust lawsuit is filed in the U.S. District Court for the Southern District of New York.',
    relatedTerms: ['Circuit Court', 'Trial Court', 'Original Jurisdiction', 'Federal Jurisdiction'],
  },
  {
    term: 'Circuit Court',
    definition:
      'In the federal system, the intermediate appellate courts (called U.S. Courts of Appeals) organized into thirteen circuits. They review decisions from district courts within their geographic circuit. Several states also use the term "circuit court" for their trial courts of general jurisdiction.',
    category: 'Courts, Parties & Remedies',
    example: 'The Ninth Circuit Court of Appeals reversed the district court\'s ruling on constitutional grounds.',
    relatedTerms: ['District Court', 'Appellate Court', 'Appellant', 'Appellee'],
  },
  {
    term: 'Magistrate',
    definition:
      'A judicial officer who handles preliminary matters and lesser proceedings, such as issuing warrants, setting bail, conducting initial appearances, and presiding over misdemeanor cases. Federal magistrate judges assist district court judges and may handle certain civil matters with the consent of parties.',
    category: 'Courts, Parties & Remedies',
    example: 'The magistrate set bail at $10,000 at the defendant\'s initial appearance following arrest.',
    relatedTerms: ['Judge', 'Trial Court', 'District Court', 'Bench Trial'],
  },
  {
    term: 'Judge',
    definition:
      'A public official vested with authority to hear and decide legal disputes. Judges preside over court proceedings, rule on motions, instruct juries on the law, and impose sentences or enter judgments.',
    category: 'Courts, Parties & Remedies',
    example: 'The judge granted the plaintiff\'s motion for summary judgment after finding no genuine dispute of material fact.',
    relatedTerms: ['Justice', 'Magistrate', 'Bench Trial', 'Clerk of Court'],
  },
  {
    term: 'Justice',
    definition:
      'The title given to judges who sit on appellate courts, particularly supreme courts. At the U.S. Supreme Court, nine Justices — including one Chief Justice — decide the most significant federal legal questions.',
    category: 'Courts, Parties & Remedies',
    example: 'Justice Sotomayor authored the majority opinion holding the statute unconstitutional.',
    relatedTerms: ['Judge', 'Supreme Court', 'Appellate Court', 'Appellate Jurisdiction'],
  },
  {
    term: 'Jury',
    definition:
      'A group of citizens selected to determine facts in dispute and render a verdict in a trial. In criminal cases, a petit jury typically consists of twelve members; civil juries may vary by jurisdiction. A grand jury, by contrast, determines whether probable cause exists to indict.',
    category: 'Courts, Parties & Remedies',
    example: 'After three days of deliberation, the jury returned a verdict of not guilty on all counts.',
    relatedTerms: ['Bench Trial', 'Trial Court', 'Verdict', 'Plaintiff'],
  },
  {
    term: 'Bench Trial',
    definition:
      'A trial in which the judge, rather than a jury, serves as the finder of fact and renders a verdict. Parties may waive their right to a jury trial and elect a bench trial.',
    category: 'Courts, Parties & Remedies',
    example: 'The parties agreed to a bench trial, and the judge issued findings of fact and conclusions of law one week after closing arguments.',
    relatedTerms: ['Jury', 'Judge', 'Trial Court', 'Verdict'],
  },
  {
    term: 'Plaintiff',
    definition:
      'The party who initiates a civil lawsuit by filing a complaint against another party. The plaintiff bears the burden of proving the elements of the claim by a preponderance of the evidence in most civil actions.',
    category: 'Courts, Parties & Remedies',
    example: 'The plaintiff alleged that the defendant\'s negligence caused $50,000 in property damage.',
    relatedTerms: ['Defendant', 'Petitioner', 'Complaint', 'Burden of Proof'],
  },
  {
    term: 'Defendant',
    definition:
      'The party against whom a civil lawsuit or criminal charge is brought. In civil cases, the defendant responds to the plaintiff\'s complaint; in criminal cases, the defendant is the person accused of committing an offense.',
    category: 'Courts, Parties & Remedies',
    example: 'The defendant filed an answer denying all allegations and asserting comparative negligence as an affirmative defense.',
    relatedTerms: ['Plaintiff', 'Respondent', 'Defense Attorney', 'Answer'],
  },
  {
    term: 'Petitioner',
    definition:
      'The party who files a petition initiating a proceeding, typically used in appellate proceedings, habeas corpus actions, or certain administrative matters. In some jurisdictions, "petitioner" is used in place of "plaintiff" in family law or probate matters.',
    category: 'Courts, Parties & Remedies',
    example: 'The petitioner sought a writ of habeas corpus arguing the conviction violated due process.',
    relatedTerms: ['Respondent', 'Plaintiff', 'Appellant', 'Original Jurisdiction'],
  },
  {
    term: 'Respondent',
    definition:
      'The party who responds to a petition or appeal filed by another party. Respondent is the counterpart to petitioner and corresponds to the appellee in appellate terminology.',
    category: 'Courts, Parties & Remedies',
    example: 'The respondent filed a brief opposing the petitioner\'s request for certiorari.',
    relatedTerms: ['Petitioner', 'Appellee', 'Defendant', 'Appellate Court'],
  },
  {
    term: 'Appellant',
    definition:
      'The party who appeals a lower court\'s decision to a higher court. The appellant argues that legal error affected the outcome and asks the appellate court to reverse, modify, or remand the decision.',
    category: 'Courts, Parties & Remedies',
    example: 'The appellant contended that the trial court erred by admitting hearsay evidence that prejudiced the jury.',
    relatedTerms: ['Appellee', 'Appellate Court', 'Appellate Jurisdiction', 'Petitioner'],
  },
  {
    term: 'Appellee',
    definition:
      'The party against whom an appeal is filed; the party who prevailed at the lower court level and seeks to have the decision affirmed on appeal.',
    category: 'Courts, Parties & Remedies',
    example: 'The appellee argued that the trial court\'s judgment was supported by substantial evidence and should be upheld.',
    relatedTerms: ['Appellant', 'Appellate Court', 'Respondent', 'Affirmance'],
  },
  {
    term: 'Intervenor',
    definition:
      'A third party who is not an original party to a lawsuit but who is permitted by the court to participate because that party has an interest in the outcome of the litigation. Intervention may be of right or permissive.',
    category: 'Courts, Parties & Remedies',
    example: 'An environmental group was allowed to intervene as an intervenor-defendant in a challenge to new pollution regulations.',
    relatedTerms: ['Plaintiff', 'Defendant', 'Amicus Curiae', 'Standing'],
  },
  {
    term: 'Amicus Curiae',
    definition:
      'Latin for "friend of the court." A person or organization not party to a case who files a brief offering information, expertise, or argument relevant to the issues before the court. Amicus briefs are common in appellate proceedings on matters of broad public importance.',
    category: 'Courts, Parties & Remedies',
    example: 'Dozens of civil rights organizations filed amicus curiae briefs urging the Supreme Court to strike down the challenged provision.',
    relatedTerms: ['Intervenor', 'Appellate Court', 'Brief', 'Supreme Court'],
  },
  {
    term: 'Pro Se Litigant',
    definition:
      'A party who represents themselves in legal proceedings without the assistance of an attorney. Pro se litigants are generally held to less stringent pleading standards than represented parties but must still comply with procedural rules.',
    category: 'Courts, Parties & Remedies',
    example: 'The pro se litigant filed a handwritten complaint that the court construed liberally in deciding the motion to dismiss.',
    relatedTerms: ['Counsel', 'Plaintiff', 'Defendant', 'Defense Attorney'],
  },
  {
    term: 'Counsel',
    definition:
      'An attorney or group of attorneys representing a party in legal proceedings. "Counsel" may refer to a single lawyer or to the legal team as a whole, and the term encompasses both in-house legal advisors and outside litigation attorneys.',
    category: 'Courts, Parties & Remedies',
    example: 'The court directed counsel for both parties to submit proposed jury instructions by Friday.',
    relatedTerms: ['Defense Attorney', 'Prosecutor', 'Pro Se Litigant', 'Attorney-Client Privilege'],
  },
  {
    term: 'Prosecutor',
    definition:
      'A government attorney who represents the state or the people in criminal proceedings and bears the burden of proving the defendant\'s guilt beyond a reasonable doubt. Prosecutors include district attorneys, state attorneys general, and federal assistant U.S. attorneys.',
    category: 'Courts, Parties & Remedies',
    example: 'The prosecutor presented forensic evidence linking the defendant to the crime scene.',
    relatedTerms: ['Defense Attorney', 'Defendant', 'Burden of Proof', 'Indictment'],
  },
  {
    term: 'Defense Attorney',
    definition:
      'A lawyer who represents the defendant in criminal proceedings or the defending party in civil litigation. In criminal cases, defense attorneys ensure the accused receives due process and a fair trial, and the Sixth Amendment guarantees the right to counsel in serious criminal prosecutions.',
    category: 'Courts, Parties & Remedies',
    example: 'The defense attorney filed a motion to suppress evidence obtained during an allegedly unlawful search.',
    relatedTerms: ['Prosecutor', 'Defendant', 'Counsel', 'Pro Se Litigant'],
  },
  {
    term: 'Bailiff',
    definition:
      'A court officer responsible for maintaining order in the courtroom, escorting the judge, managing the jury, and ensuring the security and decorum of court proceedings.',
    category: 'Courts, Parties & Remedies',
    example: 'The bailiff escorted the jury to the deliberation room after the judge delivered final instructions.',
    relatedTerms: ['Judge', 'Clerk of Court', 'Jury', 'Court Reporter'],
  },
  {
    term: 'Clerk of Court',
    definition:
      'An official who manages the administrative operations of a court, including maintaining court records, docketing filings, issuing summonses, and processing judgments. The clerk\'s office is the primary point of contact for filing legal documents.',
    category: 'Courts, Parties & Remedies',
    example: 'The attorney filed the complaint with the clerk of court and received a stamped copy with the case number.',
    relatedTerms: ['Judge', 'Bailiff', 'Court Reporter', 'Docket'],
  },
  {
    term: 'Court Reporter',
    definition:
      'A certified professional who creates a verbatim written transcript of court proceedings, depositions, and hearings using stenographic equipment or voice recording technology. The transcript constitutes the official record of proceedings.',
    category: 'Courts, Parties & Remedies',
    example: 'Appellate counsel ordered the court reporter\'s transcript of the trial to identify reversible error.',
    relatedTerms: ['Clerk of Court', 'Bailiff', 'Appellate Court', 'Deposition'],
  },
  {
    term: 'Original Jurisdiction',
    definition:
      'The authority of a court to hear a case for the first time, as opposed to reviewing a decision made by a lower court. Courts with original jurisdiction receive cases at their inception and conduct trials.',
    category: 'Courts, Parties & Remedies',
    example: 'The U.S. Supreme Court has original jurisdiction over disputes between two states.',
    relatedTerms: ['Appellate Jurisdiction', 'Trial Court', 'District Court', 'Petitioner'],
  },
  {
    term: 'Appellate Jurisdiction',
    definition:
      'The power of a court to review and revise the decision of a lower court. Appellate jurisdiction is invoked after a final judgment has been entered in the trial court and a party timely files a notice of appeal.',
    category: 'Courts, Parties & Remedies',
    example: 'The court of appeals exercised appellate jurisdiction to review the district court\'s denial of a preliminary injunction.',
    relatedTerms: ['Original Jurisdiction', 'Appellate Court', 'Appellant', 'Circuit Court'],
  },
  {
    term: 'Remedy',
    definition:
      'The legal or equitable relief granted by a court to a party who has suffered a legal wrong. Remedies may be legal (monetary) or equitable (injunctive or declaratory) in nature.',
    category: 'Courts, Parties & Remedies',
    example: 'The court determined that monetary damages were an inadequate remedy and awarded an injunction instead.',
    relatedTerms: ['Damages', 'Injunction', 'Equitable Relief', 'Declaratory Judgment'],
  },
  {
    term: 'Damages',
    definition:
      'A monetary award granted by a court to compensate a party who has suffered loss or injury due to the wrongful act of another. Damages are the most common legal remedy and may be compensatory, punitive, or nominal.',
    category: 'Courts, Parties & Remedies',
    example: 'The jury awarded the plaintiff $200,000 in damages for medical expenses, lost wages, and pain and suffering.',
    relatedTerms: ['Compensatory Damages', 'Punitive Damages', 'Nominal Damages', 'Remedy'],
  },
  {
    term: 'Compensatory Damages',
    definition:
      'Damages intended to make the injured party whole by restoring them to the position they would have been in had the wrong not occurred. Compensatory damages include both economic losses (medical bills, lost income) and non-economic losses (pain and suffering, emotional distress).',
    category: 'Courts, Parties & Remedies',
    example: 'The plaintiff received compensatory damages covering $75,000 in hospital bills and $25,000 for ongoing physical therapy.',
    relatedTerms: ['Damages', 'Punitive Damages', 'Nominal Damages', 'Remedy'],
  },
  {
    term: 'Punitive Damages',
    definition:
      'Damages awarded in addition to compensatory damages to punish a defendant for especially egregious, willful, or malicious conduct and to deter similar conduct in the future. Punitive damages are not available in all cases and are subject to constitutional limits.',
    category: 'Courts, Parties & Remedies',
    example: 'The court upheld a punitive damages award of $1 million after finding the defendant had acted with conscious disregard for public safety.',
    relatedTerms: ['Compensatory Damages', 'Damages', 'Remedy', 'Nominal Damages'],
  },
  {
    term: 'Nominal Damages',
    definition:
      'A small, token monetary award granted when a legal right has been violated but no actual loss can be proven. Nominal damages vindicate the plaintiff\'s rights and establish that a legal wrong occurred.',
    category: 'Courts, Parties & Remedies',
    example: 'The jury found the defendant liable for trespass but awarded only $1 in nominal damages because the plaintiff suffered no actual harm.',
    relatedTerms: ['Compensatory Damages', 'Punitive Damages', 'Damages', 'Remedy'],
  },
  {
    term: 'Injunction',
    definition:
      'A court order directing a party to do or refrain from doing a specific act. Injunctions may be temporary (restraining order), preliminary (pending final judgment), or permanent (issued as final relief after trial).',
    category: 'Courts, Parties & Remedies',
    example: 'The court issued a preliminary injunction preventing the company from releasing the product while litigation was pending.',
    relatedTerms: ['Preliminary Injunction', 'Permanent Injunction', 'Equitable Relief', 'Remedy'],
  },
  {
    term: 'Preliminary Injunction',
    definition:
      'A court order issued before the final resolution of a case that maintains the status quo or prevents irreparable harm while litigation proceeds. A party seeking a preliminary injunction must typically show likelihood of success on the merits, irreparable harm, balance of equities, and public interest.',
    category: 'Courts, Parties & Remedies',
    example: 'The employee obtained a preliminary injunction barring the employer from enforcing a noncompete clause while the court considered its validity.',
    relatedTerms: ['Injunction', 'Permanent Injunction', 'Equitable Relief', 'Temporary Restraining Order'],
  },
  {
    term: 'Permanent Injunction',
    definition:
      'A final court order, issued after a full hearing on the merits, that permanently prohibits or requires certain conduct. Unlike a preliminary injunction, a permanent injunction is entered as part of the final judgment.',
    category: 'Courts, Parties & Remedies',
    example: 'After trial, the court entered a permanent injunction requiring the factory to cease discharging pollutants into the river.',
    relatedTerms: ['Preliminary Injunction', 'Injunction', 'Equitable Relief', 'Declaratory Judgment'],
  },
  {
    term: 'Declaratory Judgment',
    definition:
      'A court ruling that determines the rights and obligations of the parties without ordering any specific relief or awarding damages. Declaratory judgments clarify the legal relationship between parties and resolve uncertainty before a dispute escalates.',
    category: 'Courts, Parties & Remedies',
    example: 'The insurer sought a declaratory judgment that the policy did not cover the plaintiff\'s claimed losses.',
    relatedTerms: ['Remedy', 'Injunction', 'Equitable Relief', 'Damages'],
  },
  {
    term: 'Restitution',
    definition:
      'A remedy requiring a defendant to give back to the plaintiff any benefit unjustly obtained or to restore the plaintiff to their original position. In criminal law, restitution may be ordered as a condition of sentencing to compensate crime victims.',
    category: 'Courts, Parties & Remedies',
    example: 'The court ordered restitution of $30,000 to the fraud victim, representing the full amount taken by the defendant.',
    relatedTerms: ['Remedy', 'Compensatory Damages', 'Equitable Relief', 'Specific Performance'],
  },
  {
    term: 'Specific Performance',
    definition:
      'An equitable remedy compelling a party to perform their obligations under a contract, typically ordered when monetary damages are inadequate — most commonly in contracts for the sale of unique property or rare goods.',
    category: 'Courts, Parties & Remedies',
    example: 'Because the land was unique, the court ordered specific performance of the real estate contract rather than money damages.',
    relatedTerms: ['Equitable Relief', 'Remedy', 'Injunction', 'Restitution'],
  },
  {
    term: 'Equitable Relief',
    definition:
      'Remedies that originate from courts of equity, designed to achieve a fair and just result when legal remedies (money damages) are insufficient. Equitable relief includes injunctions, specific performance, rescission, and declaratory judgments.',
    category: 'Courts, Parties & Remedies',
    example: 'The court granted equitable relief in the form of a constructive trust over assets the defendant had wrongfully acquired.',
    relatedTerms: ['Injunction', 'Specific Performance', 'Declaratory Judgment', 'Remedy'],
  },
  {
    term: 'Garnishment',
    definition:
      'A legal procedure by which a creditor obtains payment of a judgment debt by directing a third party (such as an employer or bank) who holds money belonging to the debtor to pay that money to the creditor instead.',
    category: 'Courts, Parties & Remedies',
    example: 'After obtaining a judgment, the creditor initiated wage garnishment proceedings to collect a portion of the debtor\'s paycheck each pay period.',
    relatedTerms: ['Lien', 'Damages', 'Judgment', 'Restitution'],
  },
  {
    term: 'Lien',
    definition:
      'A legal claim or security interest against a debtor\'s property, giving the lienholder the right to have the property sold to satisfy a debt if the debtor fails to pay. Liens may arise by contract, statute, or court judgment.',
    category: 'Courts, Parties & Remedies',
    example: 'The contractor filed a mechanic\'s lien on the property after the homeowner failed to pay for completed renovation work.',
    relatedTerms: ['Garnishment', 'Judgment', 'Remedy', 'Specific Performance'],
  },
  {
    term: 'Contempt of Court',
    definition:
      'Conduct that disrespects, disobeys, or undermines the authority of the court or its orders. Civil contempt is typically used to compel compliance with a court order; criminal contempt punishes deliberate disregard for the court\'s dignity or authority.',
    category: 'Courts, Parties & Remedies',
    example: 'The company was held in contempt of court and fined $5,000 per day for each day it failed to comply with the discovery order.',
    relatedTerms: ['Injunction', 'Judge', 'Remedy', 'Sanctions'],
  },
  {
    term: 'Temporary Restraining Order',
    definition:
      'An emergency court order obtained ex parte (without notice to the opposing party) that temporarily prevents a party from taking certain actions. A TRO is short-lived and must be followed by a hearing on a preliminary injunction.',
    category: 'Courts, Parties & Remedies',
    example: 'The business obtained a temporary restraining order halting the former employee from sharing trade secrets with a competitor.',
    relatedTerms: ['Preliminary Injunction', 'Injunction', 'Equitable Relief', 'Contempt of Court'],
  },
  {
    term: 'Standing',
    definition:
      'The legal right of a party to bring a claim in court. To have standing, a party must demonstrate a sufficient connection to and harm from the challenged law or action, typically requiring an injury in fact, causation, and redressability.',
    category: 'Courts, Parties & Remedies',
    example: 'The court dismissed the case because the plaintiff lacked standing, having suffered no concrete injury from the challenged regulation.',
    relatedTerms: ['Plaintiff', 'Original Jurisdiction', 'Intervenor', 'Petitioner'],
  },
  {
    term: 'Judgment',
    definition:
      'The official decision of a court resolving the claims in a lawsuit and determining the rights and obligations of the parties. A final judgment concludes the litigation at the trial court level and may be appealed.',
    category: 'Courts, Parties & Remedies',
    example: 'The court entered judgment in favor of the plaintiff for $150,000 in compensatory damages.',
    relatedTerms: ['Damages', 'Remedy', 'Verdict', 'Appellate Court'],
  },
  {
    term: 'Verdict',
    definition:
      'The formal decision rendered by a jury (or by a judge in a bench trial) on the factual questions submitted to them. In civil cases, the verdict determines liability and may set the amount of damages; in criminal cases, the verdict is either guilty or not guilty.',
    category: 'Courts, Parties & Remedies',
    example: 'The jury returned a general verdict in favor of the defendant, finding no liability.',
    relatedTerms: ['Jury', 'Bench Trial', 'Judgment', 'Trial Court'],
  },
];

export default terms;
