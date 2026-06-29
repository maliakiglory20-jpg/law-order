import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Habeas Corpus',
    definition:
      'Literally "you shall have the body." A writ requiring a person under arrest to be brought before a judge or into court, ensuring that a prisoner can be released from unlawful detention that lacks sufficient cause or evidence.',
    category: 'Latin Terms & Maxims',
    example:
      'A defendant who believes they are being held without probable cause may file a petition for a writ of habeas corpus.',
    relatedTerms: ['Mandamus', 'Certiorari', 'Ex Parte'],
  },
  {
    term: 'Stare Decisis',
    definition:
      'Literally "to stand by things decided." The doctrine obligating courts to follow precedents set by prior decisions; it promotes consistency and predictability in the law.',
    category: 'Latin Terms & Maxims',
    example:
      'Under stare decisis, a lower court is bound by the holdings of the Supreme Court on questions of federal law.',
    relatedTerms: ['Ratio Decidendi', 'Obiter Dictum', 'De Novo'],
  },
  {
    term: 'Res Judicata',
    definition:
      'Literally "a matter judged." The principle that a final judgment on the merits by a competent court bars re-litigation of the same claim between the same parties in any subsequent suit.',
    category: 'Latin Terms & Maxims',
    example:
      'Because the court entered a final judgment on the negligence claim, res judicata prevents the plaintiff from suing the same defendant again for the same accident.',
    relatedTerms: ['Collateral Estoppel', 'Prima Facie', 'In Re'],
  },
  {
    term: 'Res Ipsa Loquitur',
    definition:
      'Literally "the thing speaks for itself." A negligence doctrine allowing a plaintiff to establish a presumption of negligence from the mere fact that an accident occurred, without direct evidence of the defendant\'s act, when the injury is of a type that does not ordinarily occur without negligence.',
    category: 'Latin Terms & Maxims',
    example:
      'When a surgical sponge is found inside a patient after an operation, res ipsa loquitur may be invoked to infer negligence.',
    relatedTerms: ['Prima Facie', 'Corpus Delicti', 'Actus Reus'],
  },
  {
    term: 'Mens Rea',
    definition:
      'Literally "guilty mind." The mental element or criminal intent required, along with a guilty act, to establish criminal liability; it reflects the principle that a person should not be punished unless they had a blameworthy state of mind.',
    category: 'Latin Terms & Maxims',
    example:
      'To convict a defendant of murder, the prosecution must prove mens rea — that the defendant intended to kill or acted with knowledge that death was substantially certain.',
    relatedTerms: ['Actus Reus', 'Corpus Delicti', 'Nolo Contendere'],
  },
  {
    term: 'Actus Reus',
    definition:
      'Literally "guilty act." The physical element of a crime — the voluntary act or unlawful omission that, combined with mens rea, constitutes a criminal offense.',
    category: 'Latin Terms & Maxims',
    example:
      'Pulling the trigger of a firearm is the actus reus of the offense; the accompanying intent to kill supplies the mens rea.',
    relatedTerms: ['Mens Rea', 'Corpus Delicti', 'Prima Facie'],
  },
  {
    term: 'Prima Facie',
    definition:
      'Literally "at first appearance." Describes evidence sufficient on its face to establish a fact or raise a presumption of fact unless rebutted; a prima facie case is one that will prevail in the absence of contrary evidence.',
    category: 'Latin Terms & Maxims',
    example:
      'The plaintiff established a prima facie case of discrimination by showing she was qualified, applied, and was rejected in favor of a less-qualified candidate outside her protected class.',
    relatedTerms: ['Res Ipsa Loquitur', 'Mens Rea', 'Burden of Proof'],
  },
  {
    term: 'Pro Bono',
    definition:
      'Short for pro bono publico, "for the public good." Legal services rendered voluntarily and without payment, typically by attorneys representing clients who cannot afford counsel.',
    category: 'Latin Terms & Maxims',
    example:
      'Many bar associations encourage attorneys to perform at least fifty hours of pro bono work each year.',
    relatedTerms: ['Pro Se', 'Amicus Curiae', 'In Forma Pauperis'],
  },
  {
    term: 'Pro Se',
    definition:
      'Literally "for oneself." Refers to a party who represents themselves in a legal proceeding without the assistance of an attorney.',
    category: 'Latin Terms & Maxims',
    example:
      'The defendant chose to proceed pro se at trial, cross-examining witnesses and delivering closing argument without a lawyer.',
    relatedTerms: ['Pro Bono', 'In Propria Persona', 'Amicus Curiae'],
  },
  {
    term: 'Amicus Curiae',
    definition:
      'Literally "friend of the court." A person or organization that is not a party to a case but offers information, expertise, or argument to assist the court in deciding a matter, typically by filing an amicus brief.',
    category: 'Latin Terms & Maxims',
    example:
      'Civil-liberties organizations frequently file amicus curiae briefs in Supreme Court cases involving constitutional rights.',
    relatedTerms: ['Pro Bono', 'Per Curiam', 'En Banc'],
  },
  {
    term: 'Certiorari',
    definition:
      'Literally "to be informed of." A discretionary writ issued by a higher court — most commonly the U.S. Supreme Court — directing a lower court to send up the record of a case for review.',
    category: 'Latin Terms & Maxims',
    example:
      'Counsel filed a petition for writ of certiorari asking the Supreme Court to review the circuit court\'s ruling on the First Amendment question.',
    relatedTerms: ['Habeas Corpus', 'Mandamus', 'De Novo'],
  },
  {
    term: 'De Novo',
    definition:
      'Literally "anew" or "fresh." Describes a standard of appellate review in which the higher court examines the lower court\'s legal conclusions without deference, as though the issue had not been decided before.',
    category: 'Latin Terms & Maxims',
    example:
      'Questions of statutory interpretation are reviewed de novo; the appellate court owes no deference to the trial court\'s legal analysis.',
    relatedTerms: ['Stare Decisis', 'En Banc', 'Certiorari'],
  },
  {
    term: 'En Banc',
    definition:
      'Literally "on the bench" (from Old French via Latin). Refers to a session of an appellate court in which all judges of the court participate, rather than the usual smaller panel; reserved for cases of exceptional importance or to resolve conflicting panel decisions.',
    category: 'Latin Terms & Maxims',
    example:
      'After the three-judge panel issued a divided opinion, the losing party petitioned for en banc rehearing before all eleven circuit judges.',
    relatedTerms: ['Per Curiam', 'De Novo', 'Certiorari'],
  },
  {
    term: 'Ex Parte',
    definition:
      'Literally "from one party." Describes a proceeding, motion, or order made at the request of, or for the benefit of, one side only, without notice to or participation by the opposing party.',
    category: 'Latin Terms & Maxims',
    example:
      'The plaintiff obtained an ex parte temporary restraining order before the defendant could be notified, owing to the risk of immediate harm.',
    relatedTerms: ['In Camera', 'In Limine', 'Sua Sponte'],
  },
  {
    term: 'In Camera',
    definition:
      'Literally "in the chamber." Refers to proceedings conducted in private, in the judge\'s chambers or a closed courtroom, away from the public and press; often used to review sensitive or privileged evidence.',
    category: 'Latin Terms & Maxims',
    example:
      'The judge reviewed the alleged trade-secret documents in camera to determine whether they were protected before ordering disclosure.',
    relatedTerms: ['Ex Parte', 'In Limine', 'Subpoena'],
  },
  {
    term: 'In Limine',
    definition:
      'Literally "at the threshold." A motion in limine is a pretrial request asking the court to exclude or limit certain evidence or argument before it is presented to the jury, preventing potentially prejudicial material from reaching jurors.',
    category: 'Latin Terms & Maxims',
    example:
      'Defense counsel filed a motion in limine to exclude the defendant\'s prior convictions from being introduced during the prosecution\'s case-in-chief.',
    relatedTerms: ['Ex Parte', 'In Camera', 'Voir Dire'],
  },
  {
    term: 'Inter Alia',
    definition:
      'Literally "among other things." Used in legal writing to indicate that the items listed are only a representative selection, not an exhaustive enumeration.',
    category: 'Latin Terms & Maxims',
    example:
      'The complaint alleged, inter alia, breach of contract, fraudulent misrepresentation, and unjust enrichment.',
    relatedTerms: ['Supra', 'Infra', 'Et Al.'],
  },
  {
    term: 'Ipso Facto',
    definition:
      'Literally "by the fact itself." Indicates that a legal consequence follows automatically from a particular fact or act, without need for any further action or determination.',
    category: 'Latin Terms & Maxims',
    example:
      'Filing for bankruptcy does not ipso facto discharge all debts; student loans typically survive absent undue hardship.',
    relatedTerms: ['De Facto', 'De Jure', 'Ultra Vires'],
  },
  {
    term: 'Mandamus',
    definition:
      'Literally "we command." A writ issued by a superior court compelling a lower court, government official, or other public body to perform a ministerial duty that is clearly required by law.',
    category: 'Latin Terms & Maxims',
    example:
      'The petitioner sought a writ of mandamus to compel the agency to act on a permit application it had unlawfully ignored for two years.',
    relatedTerms: ['Habeas Corpus', 'Certiorari', 'Sua Sponte'],
  },
  {
    term: 'Nolo Contendere',
    definition:
      'Literally "I do not wish to contend." A plea in a criminal case in which the defendant does not admit guilt but accepts punishment as though guilty; unlike a guilty plea, it cannot be used as an admission in a subsequent civil proceeding.',
    category: 'Latin Terms & Maxims',
    example:
      'The executive entered a nolo contendere plea to the fraud charge, avoiding a public admission of guilt that could have been used against him in the shareholder lawsuit.',
    relatedTerms: ['Mens Rea', 'Corpus Delicti', 'Prima Facie'],
  },
  {
    term: 'Obiter Dictum',
    definition:
      'Literally "a thing said by the way." A judicial remark or observation in an opinion that is not essential to the decision and therefore lacks binding precedential force, though it may be persuasive.',
    category: 'Latin Terms & Maxims',
    example:
      'The Court\'s comment about the constitutionality of a related statute was obiter dictum because the case was decided on narrower procedural grounds.',
    relatedTerms: ['Ratio Decidendi', 'Stare Decisis', 'Per Curiam'],
  },
  {
    term: 'Ratio Decidendi',
    definition:
      'Literally "the reason for deciding." The legal principle or rule of law upon which a court\'s decision actually rests; it is this part of the judgment that binds future courts under stare decisis.',
    category: 'Latin Terms & Maxims',
    example:
      'Identifying the ratio decidendi of a case can be difficult when justices write separate concurrences expressing differing reasons for reaching the same outcome.',
    relatedTerms: ['Obiter Dictum', 'Stare Decisis', 'Per Curiam'],
  },
  {
    term: 'Per Curiam',
    definition:
      'Literally "by the court." An opinion issued in the name of the court as a whole rather than attributed to any individual judge; often used for brief, unanimous decisions on straightforward matters.',
    category: 'Latin Terms & Maxims',
    example:
      'The Supreme Court issued a brief per curiam opinion reversing the lower court without scheduling oral argument.',
    relatedTerms: ['En Banc', 'Ratio Decidendi', 'Obiter Dictum'],
  },
  {
    term: 'Quid Pro Quo',
    definition:
      'Literally "something for something." The exchange of one thing of value for another; in contract law it is closely related to consideration, and in criminal law it describes the corrupt exchange at the heart of bribery or extortion offenses.',
    category: 'Latin Terms & Maxims',
    example:
      'The prosecution alleged a quid pro quo: the official awarded the contract in exchange for the contractor\'s payment into the official\'s personal account.',
    relatedTerms: ['Bona Fide', 'Ultra Vires', 'Ipso Facto'],
  },
  {
    term: 'Sua Sponte',
    definition:
      'Literally "of one\'s own accord." An action taken by a judge on the court\'s own initiative, without a request or motion from either party.',
    category: 'Latin Terms & Maxims',
    example:
      'The trial judge sua sponte raised the issue of subject-matter jurisdiction after noticing the complaint alleged no federal basis for the claim.',
    relatedTerms: ['Ex Parte', 'Mandamus', 'In Limine'],
  },
  {
    term: 'Sui Generis',
    definition:
      'Literally "of its own kind." Describes something that is unique or in a class by itself, not falling neatly within established legal categories.',
    category: 'Latin Terms & Maxims',
    example:
      'Courts have described copyright protection for computer software as sui generis because it does not map perfectly onto traditional literary-work analysis.',
    relatedTerms: ['De Facto', 'De Jure', 'Ultra Vires'],
  },
  {
    term: 'Ultra Vires',
    definition:
      'Literally "beyond the powers." Describes an act taken by a corporation, government body, or official that exceeds the authority granted by its charter, constitution, or statute; such acts are typically void or voidable.',
    category: 'Latin Terms & Maxims',
    example:
      'The municipal ordinance was struck down as ultra vires because state law had expressly preempted local regulation in that area.',
    relatedTerms: ['Ipso Facto', 'De Jure', 'Mandamus'],
  },
  {
    term: 'Voir Dire',
    definition:
      'From Old French, derived from Latin verum dicere, "to speak the truth." The process by which prospective jurors are questioned by the judge and attorneys to assess their suitability and impartiality before being selected to serve on a jury.',
    category: 'Latin Terms & Maxims',
    example:
      'During voir dire, counsel challenged several potential jurors for cause after they admitted they had already formed opinions about the defendant\'s guilt.',
    relatedTerms: ['In Limine', 'Per Curiam', 'In Camera'],
  },
  {
    term: 'Bona Fide',
    definition:
      'Literally "in good faith." Describes something genuine, authentic, or made without fraud or deceit; a bona fide purchaser is one who acquires property for value and without notice of any defect in the seller\'s title.',
    category: 'Latin Terms & Maxims',
    example:
      'The bank qualified as a bona fide purchaser of the mortgage note and therefore took it free of the borrower\'s personal defenses.',
    relatedTerms: ['Quid Pro Quo', 'Caveat Emptor', 'De Facto'],
  },
  {
    term: 'Caveat Emptor',
    definition:
      'Literally "let the buyer beware." The common-law principle that a buyer purchases property at their own risk and should inspect it before sale; now significantly limited by consumer-protection statutes and implied warranties.',
    category: 'Latin Terms & Maxims',
    example:
      'Before modern disclosure laws, caveat emptor meant a homebuyer had little legal recourse if they later discovered defects the seller had concealed.',
    relatedTerms: ['Bona Fide', 'In Re', 'De Facto'],
  },
  {
    term: 'Corpus Delicti',
    definition:
      'Literally "body of the crime." The material substance of a crime — the fact that a crime has actually been committed; it requires proof that a specific injury or harm occurred and that it was caused by criminal agency, not accident.',
    category: 'Latin Terms & Maxims',
    example:
      'The prosecution must establish corpus delicti before a defendant\'s confession alone can be used to obtain a conviction.',
    relatedTerms: ['Mens Rea', 'Actus Reus', 'Prima Facie'],
  },
  {
    term: 'De Facto',
    definition:
      'Literally "in fact." Describes a state of affairs that exists in reality or practice even if not formally recognized by law; contrasted with de jure, which denotes legal recognition.',
    category: 'Latin Terms & Maxims',
    example:
      'Although the company had no formal chief executive, the founder exercised de facto control over all major corporate decisions.',
    relatedTerms: ['De Jure', 'Ipso Facto', 'Bona Fide'],
  },
  {
    term: 'De Jure',
    definition:
      'Literally "by law." Describes a state of affairs that is formally established by or recognized in law, regardless of whether it exists in practice; contrasted with de facto.',
    category: 'Latin Terms & Maxims',
    example:
      'Racial segregation in schools was abolished de jure by Brown v. Board of Education, though de facto segregation persisted in many districts.',
    relatedTerms: ['De Facto', 'Ultra Vires', 'Sui Generis'],
  },
  {
    term: 'In Re',
    definition:
      'Literally "in the matter of." Used to designate legal proceedings that concern a thing, estate, or person rather than an adversarial dispute between two named parties; common in bankruptcy, probate, and juvenile cases.',
    category: 'Latin Terms & Maxims',
    example:
      'The bankruptcy case was styled In re Acme Corp. because there was no opposing party in the traditional sense.',
    relatedTerms: ['Res Judicata', 'Inter Alia', 'Pendente Lite'],
  },
  {
    term: 'Nunc Pro Tunc',
    definition:
      'Literally "now for then." Describes an order or entry made retroactively to correct the record to reflect what should have been done at an earlier time; it gives a present action the legal effect of a past date.',
    category: 'Latin Terms & Maxims',
    example:
      'The court entered a nunc pro tunc order to correct the judgment date so that the appeal would be deemed timely filed.',
    relatedTerms: ['Sua Sponte', 'Pendente Lite', 'In Re'],
  },
  {
    term: 'Pendente Lite',
    definition:
      'Literally "while the litigation is pending." Describes interim orders, rights, or obligations that take effect or are maintained only during the course of a lawsuit, until a final judgment is reached.',
    category: 'Latin Terms & Maxims',
    example:
      'The court issued a pendente lite order requiring the husband to pay temporary alimony until the divorce proceeding was resolved.',
    relatedTerms: ['In Re', 'Nunc Pro Tunc', 'Ex Parte'],
  },
  {
    term: 'Subpoena',
    definition:
      'Literally "under penalty." A court-issued command requiring a person to appear and give testimony (subpoena ad testificandum) or to produce documents and other evidence (subpoena duces tecum) at a designated time and place, under threat of penalty for non-compliance.',
    category: 'Latin Terms & Maxims',
    example:
      'The committee issued a subpoena duces tecum directing the corporation to produce all emails relating to the merger negotiation.',
    relatedTerms: ['In Camera', 'Habeas Corpus', 'Mandamus'],
  },
  {
    term: 'Supra',
    definition:
      'Literally "above." Used in legal writing to refer back to a source, authority, or passage that was previously cited or discussed earlier in the document.',
    category: 'Latin Terms & Maxims',
    example:
      'As established in the analysis supra, the defendant lacked the requisite intent for first-degree murder.',
    relatedTerms: ['Infra', 'Inter Alia', 'Obiter Dictum'],
  },
  {
    term: 'Infra',
    definition:
      'Literally "below." Used in legal writing to direct the reader to a source, authority, or passage that will appear later in the same document.',
    category: 'Latin Terms & Maxims',
    example:
      'The jurisdictional question is addressed infra at page 24, after the factual background is established.',
    relatedTerms: ['Supra', 'Inter Alia', 'Ratio Decidendi'],
  },
  {
    term: 'In Forma Pauperis',
    definition:
      'Literally "in the manner of a pauper." A status granted by a court permitting an indigent party to proceed with litigation without paying court fees and costs, ensuring access to justice regardless of financial means.',
    category: 'Latin Terms & Maxims',
    example:
      'The prisoner filed his civil-rights complaint in forma pauperis after the court waived the filing fee upon review of his financial affidavit.',
    relatedTerms: ['Pro Bono', 'Pro Se', 'Habeas Corpus'],
  },
  {
    term: 'Locus Standi',
    definition:
      'Literally "place of standing." The right or capacity of a party to bring a matter before a court; a litigant must demonstrate a sufficient legal interest or injury to invoke the court\'s jurisdiction.',
    category: 'Latin Terms & Maxims',
    example:
      'The environmental group lacked locus standi to challenge the permit because it could not show its members suffered a concrete, particularized injury.',
    relatedTerms: ['Prima Facie', 'De Novo', 'Amicus Curiae'],
  },
  {
    term: 'Modus Operandi',
    definition:
      'Literally "mode of operating." The characteristic method or pattern by which a person commits a crime; frequently used by prosecutors to introduce evidence of prior similar acts to show identity or intent.',
    category: 'Latin Terms & Maxims',
    example:
      'The prosecutor introduced three prior burglaries to establish the defendant\'s modus operandi — always entering through skylights and targeting art galleries.',
    relatedTerms: ['Mens Rea', 'Corpus Delicti', 'Prima Facie'],
  },
  {
    term: 'Non Compos Mentis',
    definition:
      'Literally "not of sound mind." Describes a person who lacks the mental capacity to manage their own affairs or to understand legal proceedings; a legal determination of non compos mentis may affect criminal responsibility or contractual capacity.',
    category: 'Latin Terms & Maxims',
    example:
      'The court declared the elderly testator non compos mentis at the time she executed the will, rendering it void.',
    relatedTerms: ['Mens Rea', 'Sui Generis', 'In Re'],
  },
  {
    term: 'Pacta Sunt Servanda',
    definition:
      'Literally "agreements must be kept." A foundational principle of contract and international law holding that parties are bound by their agreements and must perform their obligations in good faith.',
    category: 'Latin Terms & Maxims',
    example:
      'The tribunal cited pacta sunt servanda in rejecting the state\'s argument that changed economic circumstances excused performance of the treaty obligation.',
    relatedTerms: ['Bona Fide', 'Quid Pro Quo', 'Caveat Emptor'],
  },
  {
    term: 'Parens Patriae',
    definition:
      'Literally "parent of the fatherland." The doctrine authorizing the state to act as a guardian for individuals who are legally unable to care for themselves, such as minors or persons with mental disabilities; also invoked by states suing on behalf of their citizens.',
    category: 'Latin Terms & Maxims',
    example:
      'The state brought an antitrust action under parens patriae authority to redress harm suffered by its residents from price-fixing.',
    relatedTerms: ['Non Compos Mentis', 'In Re', 'Locus Standi'],
  },
  {
    term: 'Pari Delicto',
    definition:
      'Short for in pari delicto potior est conditio defendentis, "in equal fault the condition of the defendant is stronger." A defense holding that a plaintiff who is equally at fault in an illegal or wrongful transaction cannot recover against the defendant.',
    category: 'Latin Terms & Maxims',
    example:
      'The court dismissed the investor\'s fraud claim under the in pari delicto doctrine because the investor had knowingly participated in the illegal scheme.',
    relatedTerms: ['Bona Fide', 'Res Judicata', 'Caveat Emptor'],
  },
  {
    term: 'Scienter',
    definition:
      'Literally "knowingly." The mental element in certain causes of action — particularly fraud and securities violations — requiring proof that the defendant acted with knowledge of falsity or with reckless disregard for the truth.',
    category: 'Latin Terms & Maxims',
    example:
      'To prevail on a securities-fraud claim under Rule 10b-5, the plaintiff must plead facts giving rise to a strong inference of scienter.',
    relatedTerms: ['Mens Rea', 'Prima Facie', 'Actus Reus'],
  },
  {
    term: 'Sine Qua Non',
    definition:
      'Literally "without which not." An indispensable element or condition; in tort causation, the but-for test asks whether the harm was a sine qua non of the defendant\'s act — would the injury have occurred without it?',
    category: 'Latin Terms & Maxims',
    example:
      'The jury found that the manufacturer\'s defective brake design was the sine qua non of the accident, as the crash would not have occurred with properly functioning brakes.',
    relatedTerms: ['Res Ipsa Loquitur', 'Actus Reus', 'Corpus Delicti'],
  },
  {
    term: 'Status Quo',
    definition:
      'Literally "the state in which." Refers to the existing state of affairs at a particular moment; courts frequently grant injunctions to maintain the status quo while litigation is pending.',
    category: 'Latin Terms & Maxims',
    example:
      'The preliminary injunction preserved the status quo by preventing the defendant from transferring assets abroad until trial.',
    relatedTerms: ['Pendente Lite', 'Ex Parte', 'In Limine'],
  },
  {
    term: 'Subpoena Duces Tecum',
    definition:
      'Literally "bring with you under penalty." A specific type of subpoena commanding a person to appear and produce designated documents, records, or other tangible evidence before a court or other tribunal.',
    category: 'Latin Terms & Maxims',
    example:
      'The plaintiff served a subpoena duces tecum on the bank, ordering production of all account statements for the past five years.',
    relatedTerms: ['Subpoena', 'In Camera', 'Habeas Corpus'],
  },
  {
    term: 'Voire Dire (Voir Dire)',
    definition:
      'A variant form referencing voir dire. See Voir Dire.',
    category: 'Latin Terms & Maxims',
    relatedTerms: ['Voir Dire', 'In Limine', 'Per Curiam'],
  },
  {
    term: 'Lex Loci',
    definition:
      'Literally "the law of the place." A conflict-of-laws principle that the law of the place where a legal event occurs — such as the place of contracting or the place of injury — governs the rights and obligations of the parties.',
    category: 'Latin Terms & Maxims',
    example:
      'Under the lex loci delicti rule, the court applied the law of the state where the car accident occurred, not the state where the plaintiff was domiciled.',
    relatedTerms: ['De Jure', 'De Facto', 'Sui Generis'],
  },
  {
    term: 'Mutatis Mutandis',
    definition:
      'Literally "with the necessary changes having been made." Used to indicate that a rule, analysis, or precedent applies to a new situation with the obvious or stated modifications, without requiring a full restatement.',
    category: 'Latin Terms & Maxims',
    example:
      'The appellate court held that the same procedural safeguards apply to administrative hearings, mutatis mutandis, as to civil trials.',
    relatedTerms: ['Stare Decisis', 'Inter Alia', 'Supra'],
  },
  {
    term: 'Nisi Prius',
    definition:
      'Literally "unless before." Historically refers to the trial court level where facts are first determined by judge and jury; today used loosely to mean the trial court as distinguished from an appellate court.',
    category: 'Latin Terms & Maxims',
    example:
      'The evidence rule was well established at nisi prius long before any appellate court addressed it.',
    relatedTerms: ['De Novo', 'En Banc', 'Per Curiam'],
  },
  {
    term: 'Amicus Brief',
    definition:
      'Short for amicus curiae brief, "friend of the court brief." A written submission filed by a non-party who has an interest in the outcome of a case and seeks to provide additional arguments or information to assist the court.',
    category: 'Latin Terms & Maxims',
    example:
      'Dozens of technology companies joined an amicus brief urging the court to protect user privacy in the digital-search case.',
    relatedTerms: ['Amicus Curiae', 'Per Curiam', 'Certiorari'],
  },
  {
    term: 'Flagrante Delicto',
    definition:
      'Literally "while the crime is blazing." Describes a person caught in the act of committing a crime; being caught in flagrante delicto typically justifies a warrantless arrest.',
    category: 'Latin Terms & Maxims',
    example:
      'Officers arrested the suspect in flagrante delicto when they walked into the warehouse and observed him removing merchandise.',
    relatedTerms: ['Corpus Delicti', 'Actus Reus', 'Mens Rea'],
  },
  {
    term: 'Functus Officio',
    definition:
      'Literally "having performed the office." Describes a public officer or arbitrator who has discharged their duty and thus no longer has authority over the matter; a judge becomes functus officio once a final judgment has been entered and the term of court has ended.',
    category: 'Latin Terms & Maxims',
    example:
      'The arbitrator was functus officio after issuing the final award and therefore lacked authority to modify its substantive terms.',
    relatedTerms: ['Res Judicata', 'Ultra Vires', 'Nunc Pro Tunc'],
  },
  {
    term: 'In Propria Persona',
    definition:
      'Literally "in one\'s own proper person." Equivalent to pro se; denotes a party who appears in court and conducts litigation on their own behalf without counsel.',
    category: 'Latin Terms & Maxims',
    example:
      'The defendant appeared in propria persona at the preliminary hearing after dismissing his public defender.',
    relatedTerms: ['Pro Se', 'Pro Bono', 'Locus Standi'],
  },
  {
    term: 'Jus Cogens',
    definition:
      'Literally "compelling law." A peremptory norm of international law from which no derogation is permitted by treaty or custom; examples include prohibitions on genocide, slavery, and torture.',
    category: 'Latin Terms & Maxims',
    example:
      'The tribunal held that the prohibition on torture is a jus cogens norm, meaning no treaty can lawfully authorize it.',
    relatedTerms: ['Pacta Sunt Servanda', 'De Jure', 'Ultra Vires'],
  },
];

export default terms;
