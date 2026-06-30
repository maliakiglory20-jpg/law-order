import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Habeas Corpus',
    definition:
      'Literally "you shall have the body." A writ requiring a person under arrest to be brought before a judge or into court, ensuring that a prisoner can be released from unlawful detention that lacks sufficient cause or evidence.',
    category: 'Latin Terms & Maxims',
    example:
      'Someone held in jail without being charged with a crime can file for a writ of habeas corpus to challenge their detention.',
    relatedTerms: ['Mandamus', 'Certiorari', 'Ex Parte'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Stare Decisis',
    definition:
      'Literally "to stand by things decided." The doctrine obligating courts to follow precedents set by prior decisions; it promotes consistency and predictability in the law.',
    category: 'Latin Terms & Maxims',
    example:
      'Because the Supreme Court ruled a certain way on free speech, lower courts must follow that same ruling in similar cases — that is stare decisis at work.',
    relatedTerms: ['Ratio Decidendi', 'Obiter Dictum', 'De Novo'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Res Judicata',
    definition:
      'Literally "a matter judged." The principle that a final court judgment on a claim bars the same parties from suing each other again over the same dispute.',
    category: 'Latin Terms & Maxims',
    example:
      'After a court ruled against the plaintiff and the judgment became final, res judicata prevented her from filing a second lawsuit over the same car accident.',
    relatedTerms: ['Collateral Estoppel', 'Prima Facie', 'In Re'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Res Ipsa Loquitur',
    definition:
      'Literally "the thing speaks for itself." A legal rule that allows a jury to infer negligence from the accident itself, without the injured person having to prove exactly what the defendant did wrong, when the type of accident normally does not happen without someone being careless.',
    category: 'Latin Terms & Maxims',
    example:
      'A surgeon left a sponge inside a patient — that kind of mistake does not happen without negligence, so res ipsa loquitur lets the patient argue negligence without pinpointing the exact error.',
    relatedTerms: ['Prima Facie', 'Corpus Delicti', 'Actus Reus'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Mens Rea',
    definition:
      'Literally "guilty mind." The criminal intent or mental state a person must have to be convicted of most crimes; punishment requires not just a harmful act but a blameworthy state of mind.',
    category: 'Latin Terms & Maxims',
    example:
      'To convict someone of murder, the prosecutor must prove mens rea — that the person intended to kill, not that it was purely an accident.',
    relatedTerms: ['Actus Reus', 'Corpus Delicti', 'Nolo Contendere'],
    difficulty: 'Intermediate',
    isEssential: true,
  },
  {
    term: 'Actus Reus',
    definition:
      'Literally "guilty act." The physical part of a crime — the actual act (or unlawful failure to act) that, together with a guilty mind, makes up a criminal offense.',
    category: 'Latin Terms & Maxims',
    example:
      'Pulling the trigger is the actus reus of the shooting; wanting to kill the victim is the mens rea.',
    relatedTerms: ['Mens Rea', 'Corpus Delicti', 'Prima Facie'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Prima Facie',
    definition:
      'Literally "at first appearance." Evidence or a case that looks strong enough to win on its face unless the other side provides a convincing counter-argument.',
    category: 'Latin Terms & Maxims',
    example:
      'An employee shows a prima facie case of discrimination by proving she was qualified, applied for a job, and was rejected in favor of a less-qualified person outside her protected group.',
    relatedTerms: ['Res Ipsa Loquitur', 'Mens Rea', 'Burden of Proof'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Pro Bono',
    definition:
      'Short for pro bono publico, "for the public good." Legal work done by a lawyer for free, usually for a client who cannot afford to pay.',
    category: 'Latin Terms & Maxims',
    example:
      'The law firm took the refugee family\'s immigration case pro bono, charging them nothing for the legal help.',
    relatedTerms: ['Pro Se', 'Amicus Curiae', 'In Forma Pauperis'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Pro Se',
    definition:
      'Literally "for oneself." When a person represents themselves in court without hiring a lawyer.',
    category: 'Latin Terms & Maxims',
    example:
      'Unable to afford an attorney, the defendant appeared pro se and argued his own case before the judge.',
    relatedTerms: ['Pro Bono', 'In Propria Persona', 'Amicus Curiae'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Amicus Curiae',
    definition:
      'Literally "friend of the court." A person or organization that is not a party to a case but is allowed to submit a written brief to give the court additional information or a different perspective.',
    category: 'Latin Terms & Maxims',
    example:
      'Civil-liberties groups filed amicus curiae briefs in the Supreme Court case to explain how the ruling could affect millions of people beyond the two parties.',
    relatedTerms: ['Pro Bono', 'Per Curiam', 'En Banc'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Certiorari',
    definition:
      'Literally "to be informed of." A formal request — most commonly to the U.S. Supreme Court — asking a higher court to review a lower court\'s decision. The court can grant or deny it at its discretion.',
    category: 'Latin Terms & Maxims',
    example:
      'After losing in the appeals court, the losing party filed a petition for certiorari asking the Supreme Court to take the case.',
    relatedTerms: ['Habeas Corpus', 'Mandamus', 'De Novo'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'De Novo',
    definition:
      'Literally "anew" or "fresh." When an appeals court reviews a legal question completely from scratch, giving no deference to the lower court\'s conclusion.',
    category: 'Latin Terms & Maxims',
    example:
      'The appeals court reviewed the contract interpretation question de novo, meaning it looked at the issue fresh rather than simply asking whether the trial judge was reasonable.',
    relatedTerms: ['Stare Decisis', 'En Banc', 'Certiorari'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'En Banc',
    definition:
      'Literally "on the bench." When all the judges of an appeals court hear a case together instead of the usual smaller panel of three; reserved for important or controversial cases.',
    category: 'Latin Terms & Maxims',
    example:
      'After a split three-judge decision, the losing side asked for an en banc rehearing before all eleven judges of the circuit.',
    relatedTerms: ['Per Curiam', 'De Novo', 'Certiorari'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Ex Parte',
    definition:
      'Literally "from one party." A proceeding or court order involving only one side, without notice to or participation by the other side.',
    category: 'Latin Terms & Maxims',
    example:
      'A domestic-violence victim got an ex parte restraining order the same day she applied, because telling the abuser first could have put her in danger.',
    relatedTerms: ['In Camera', 'In Limine', 'Sua Sponte'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'In Camera',
    definition:
      'Literally "in the chamber." A hearing or document review conducted privately by the judge, away from the public, press, or even the parties — often used for sensitive evidence.',
    category: 'Latin Terms & Maxims',
    example:
      'The judge reviewed the company\'s secret documents in camera to decide whether they were protected before ordering them handed over.',
    relatedTerms: ['Ex Parte', 'In Limine', 'Subpoena'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'In Limine',
    definition:
      'Literally "at the threshold." A pretrial motion asking the judge to keep certain evidence or arguments away from the jury before the trial begins.',
    category: 'Latin Terms & Maxims',
    example:
      'The defense lawyer filed a motion in limine to stop the prosecutor from telling the jury about the defendant\'s old criminal record.',
    relatedTerms: ['Ex Parte', 'In Camera', 'Voir Dire'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Inter Alia',
    definition:
      'Literally "among other things." Used in legal writing to show that the list given is only a sample, not a complete list.',
    category: 'Latin Terms & Maxims',
    example:
      'The lawsuit alleged, inter alia, breach of contract and fraud — meaning those were just two of several claims.',
    relatedTerms: ['Supra', 'Infra', 'Et Al.'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Ipso Facto',
    definition:
      'Literally "by the fact itself." A legal result that follows automatically from a particular act or event, with no additional steps required.',
    category: 'Latin Terms & Maxims',
    example:
      'Filing for bankruptcy does not ipso facto wipe out student loans — those debts survive unless the borrower can prove extreme hardship.',
    relatedTerms: ['De Facto', 'De Jure', 'Ultra Vires'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Mandamus',
    definition:
      'Literally "we command." A court order directing a government official, agency, or lower court to carry out a specific legal duty they have been refusing or failing to perform.',
    category: 'Latin Terms & Maxims',
    example:
      'When an agency sat on a permit application for two years without acting, the applicant went to court and obtained a writ of mandamus ordering the agency to make a decision.',
    relatedTerms: ['Habeas Corpus', 'Certiorari', 'Sua Sponte'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Nolo Contendere',
    definition:
      'Literally "I do not wish to contend." A criminal plea where the defendant accepts punishment without admitting guilt. Unlike a guilty plea, it cannot be used as an admission of wrongdoing in a later civil lawsuit.',
    category: 'Latin Terms & Maxims',
    example:
      'The executive pleaded nolo contendere to the fraud charge — he was sentenced as if guilty but never had to say "I did it," which protected him in the civil suit that followed.',
    relatedTerms: ['Mens Rea', 'Corpus Delicti', 'Prima Facie'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Obiter Dictum',
    definition:
      'Literally "a thing said by the way." A judge\'s side comment in a court opinion that is not essential to the decision; it is not binding on other courts but can be persuasive.',
    category: 'Latin Terms & Maxims',
    example:
      'The judge\'s opinion included an obiter dictum suggesting how a related law might apply, but that comment was not part of the actual ruling and had no binding force.',
    relatedTerms: ['Ratio Decidendi', 'Stare Decisis', 'Per Curiam'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Ratio Decidendi',
    definition:
      'Literally "the reason for deciding." The core legal principle on which a court\'s decision actually rests; this is the part that future courts must follow under stare decisis.',
    category: 'Latin Terms & Maxims',
    example:
      'Lawyers study old cases carefully to identify the ratio decidendi — the binding rule — versus side remarks the judge made that do not have to be followed.',
    relatedTerms: ['Obiter Dictum', 'Stare Decisis', 'Per Curiam'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Per Curiam',
    definition:
      'Literally "by the court." An opinion issued in the name of the entire court rather than any individual judge; often used for brief, unanimous decisions.',
    category: 'Latin Terms & Maxims',
    example:
      'The Supreme Court issued a short per curiam opinion reversing the lower court — no single justice\'s name was attached because the whole court agreed.',
    relatedTerms: ['En Banc', 'Ratio Decidendi', 'Obiter Dictum'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Quid Pro Quo',
    definition:
      'Literally "something for something." An exchange where each side gives something of value; in criminal law it describes the corrupt trade at the heart of bribery.',
    category: 'Latin Terms & Maxims',
    example:
      'The official was charged with bribery because there was a clear quid pro quo: he awarded the government contract in exchange for personal payments.',
    relatedTerms: ['Bona Fide', 'Ultra Vires', 'Ipso Facto'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Sua Sponte',
    definition:
      'Literally "of one\'s own accord." When a judge acts on their own initiative without either side asking them to.',
    category: 'Latin Terms & Maxims',
    example:
      'The judge sua sponte raised the question of whether the court even had authority to hear the case, even though neither lawyer had mentioned it.',
    relatedTerms: ['Ex Parte', 'Mandamus', 'In Limine'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Sui Generis',
    definition:
      'Literally "of its own kind." Something that is unique and does not fit neatly into any existing legal category.',
    category: 'Latin Terms & Maxims',
    example:
      'Courts have called software copyright protection sui generis because it does not fit perfectly into the rules written for books or music.',
    relatedTerms: ['De Facto', 'De Jure', 'Ultra Vires'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Ultra Vires',
    definition:
      'Literally "beyond the powers." An act by a corporation, government body, or official that goes beyond what their rules or law allow them to do; such acts are typically void.',
    category: 'Latin Terms & Maxims',
    example:
      'The city\'s new rule was struck down as ultra vires because state law had already forbidden cities from regulating that subject.',
    relatedTerms: ['Ipso Facto', 'De Jure', 'Mandamus'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Voir Dire',
    definition:
      'From Old French, derived from Latin verum dicere, "to speak the truth." The process where lawyers and the judge question potential jurors to check for bias before selecting the jury for a trial.',
    category: 'Latin Terms & Maxims',
    example:
      'During voir dire, several potential jurors were removed after admitting they had already decided the defendant was guilty before hearing any evidence.',
    relatedTerms: ['In Limine', 'Per Curiam', 'In Camera'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Bona Fide',
    definition:
      'Literally "in good faith." Genuine, honest, and without fraud or deceit. A bona fide purchaser is someone who buys property honestly and for fair value, without knowing of any problem with the seller\'s ownership.',
    category: 'Latin Terms & Maxims',
    example:
      'The bank was a bona fide purchaser of the loan — it paid fair value and had no idea the seller had obtained the mortgage through fraud.',
    relatedTerms: ['Quid Pro Quo', 'Caveat Emptor', 'De Facto'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Caveat Emptor',
    definition:
      'Literally "let the buyer beware." The old common-law rule that buyers purchase at their own risk and should inspect before buying; largely replaced today by consumer-protection laws and implied warranties.',
    category: 'Latin Terms & Maxims',
    example:
      'Before modern disclosure laws, caveat emptor meant a homebuyer who discovered hidden defects after closing had almost no legal recourse against the seller.',
    relatedTerms: ['Bona Fide', 'In Re', 'De Facto'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Corpus Delicti',
    definition:
      'Literally "body of the crime." The basic facts proving that a crime actually occurred — that real harm happened and it was caused by criminal conduct, not an accident.',
    category: 'Latin Terms & Maxims',
    example:
      'A defendant\'s confession alone is not enough to convict; the prosecution must also establish corpus delicti — proof that the crime actually took place.',
    relatedTerms: ['Mens Rea', 'Actus Reus', 'Prima Facie'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'De Facto',
    definition:
      'Literally "in fact." Describes something that exists in reality or in practice, even if it is not officially recognized by law.',
    category: 'Latin Terms & Maxims',
    example:
      'The founder had no formal title, but he made every major decision — he was the de facto CEO.',
    relatedTerms: ['De Jure', 'Ipso Facto', 'Bona Fide'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'De Jure',
    definition:
      'Literally "by law." Describes something that is officially recognized or established by law, whether or not it actually exists in practice.',
    category: 'Latin Terms & Maxims',
    example:
      'School segregation was abolished de jure by the Supreme Court in 1954, but de facto segregation continued in many communities for years afterward.',
    relatedTerms: ['De Facto', 'Ultra Vires', 'Sui Generis'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'In Re',
    definition:
      'Literally "in the matter of." Used in the title of legal cases that involve a person, estate, or thing rather than two opposing parties — common in bankruptcy, probate, and child custody cases.',
    category: 'Latin Terms & Maxims',
    example:
      'The bankruptcy case was titled In re Acme Corp. because there was no single opposing party — it was about the company\'s financial situation.',
    relatedTerms: ['Res Judicata', 'Inter Alia', 'Pendente Lite'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Nunc Pro Tunc',
    definition:
      'Literally "now for then." A court order entered today but given the legal effect of an earlier date, used to correct the record when something was not done or recorded correctly the first time.',
    category: 'Latin Terms & Maxims',
    example:
      'The court issued a nunc pro tunc order to fix the date on the judgment so the appeal would not be thrown out as too late.',
    relatedTerms: ['Sua Sponte', 'Pendente Lite', 'In Re'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Pendente Lite',
    definition:
      'Literally "while the litigation is pending." Temporary court orders or rights that are in effect only while a lawsuit is ongoing, until a final decision is reached.',
    category: 'Latin Terms & Maxims',
    example:
      'The court issued a pendente lite order requiring the husband to pay temporary spousal support while the divorce was still being decided.',
    relatedTerms: ['In Re', 'Nunc Pro Tunc', 'Ex Parte'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Subpoena',
    definition:
      'Literally "under penalty." A court order requiring someone to appear in court to testify, or to hand over documents or evidence, under threat of punishment for refusing.',
    category: 'Latin Terms & Maxims',
    example:
      'The witness did not want to testify, but after receiving a subpoena she was legally required to appear and answer questions.',
    relatedTerms: ['In Camera', 'Habeas Corpus', 'Mandamus'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Supra',
    definition:
      'Literally "above." Used in legal writing to point readers back to a source or argument mentioned earlier in the same document.',
    category: 'Latin Terms & Maxims',
    example:
      'As the brief explained supra on page 5, the defendant lacked the required intent.',
    relatedTerms: ['Infra', 'Inter Alia', 'Obiter Dictum'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Infra',
    definition:
      'Literally "below." Used in legal writing to point readers to a source or argument that appears later in the same document.',
    category: 'Latin Terms & Maxims',
    example:
      'The jurisdictional issue is explained infra at page 24, after the background facts are set out.',
    relatedTerms: ['Supra', 'Inter Alia', 'Ratio Decidendi'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'In Forma Pauperis',
    definition:
      'Literally "in the manner of a pauper." Permission granted by a court to a person who cannot afford legal fees to file a lawsuit or appeal without paying court costs.',
    category: 'Latin Terms & Maxims',
    example:
      'The prisoner filed his civil-rights lawsuit in forma pauperis — the court waived the filing fee after he showed he had no money.',
    relatedTerms: ['Pro Bono', 'Pro Se', 'Habeas Corpus'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Locus Standi',
    definition:
      'Literally "place of standing." The right of a person or group to bring a legal claim in court; you must show you have a real stake in the outcome — usually a direct injury — to have locus standi.',
    category: 'Latin Terms & Maxims',
    example:
      'The environmental group\'s lawsuit was dismissed because it could not show locus standi — its members had not suffered any direct harm from the permit.',
    relatedTerms: ['Prima Facie', 'De Novo', 'Amicus Curiae'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Modus Operandi',
    definition:
      'Literally "mode of operating." The characteristic way a person carries out a crime; prosecutors can use evidence of past similar crimes to show the defendant has a recognizable pattern.',
    category: 'Latin Terms & Maxims',
    example:
      'The prosecutor introduced three earlier burglaries to show the defendant\'s modus operandi — he always broke in through skylights and targeted art galleries.',
    relatedTerms: ['Mens Rea', 'Corpus Delicti', 'Prima Facie'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Non Compos Mentis',
    definition:
      'Literally "not of sound mind." A legal determination that a person lacks the mental capacity to manage their affairs or understand legal proceedings; it can affect criminal responsibility or the validity of contracts and wills.',
    category: 'Latin Terms & Maxims',
    example:
      'The court found the testator was non compos mentis when she signed the will, meaning she lacked the mental capacity to make a valid will at that time.',
    relatedTerms: ['Mens Rea', 'Sui Generis', 'In Re'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Pacta Sunt Servanda',
    definition:
      'Literally "agreements must be kept." A basic principle of contract and international law: parties are bound by their agreements and must carry out their obligations in good faith.',
    category: 'Latin Terms & Maxims',
    example:
      'The international tribunal cited pacta sunt servanda in rejecting the country\'s argument that tough economic times excused it from fulfilling a treaty commitment.',
    relatedTerms: ['Bona Fide', 'Quid Pro Quo', 'Caveat Emptor'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Parens Patriae',
    definition:
      'Literally "parent of the fatherland." The government\'s authority to step in as a legal guardian for people who cannot protect themselves, such as children or people with severe mental disabilities; states also use it to sue on behalf of their citizens.',
    category: 'Latin Terms & Maxims',
    example:
      'The state filed an antitrust lawsuit under parens patriae authority to recover money for residents overcharged by a price-fixing scheme.',
    relatedTerms: ['Non Compos Mentis', 'In Re', 'Locus Standi'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Pari Delicto',
    definition:
      'Short for in pari delicto, meaning "in equal fault." A defense that bars a plaintiff from suing when both sides are equally responsible for the wrongdoing.',
    category: 'Latin Terms & Maxims',
    example:
      'The investor\'s fraud claim was dismissed under pari delicto because he had knowingly participated in the same illegal scheme he was trying to blame on the defendant.',
    relatedTerms: ['Bona Fide', 'Res Judicata', 'Caveat Emptor'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Scienter',
    definition:
      'Literally "knowingly." The requirement in certain cases — especially fraud and securities law — that the defendant knew their statement was false or acted with reckless disregard for whether it was true.',
    category: 'Latin Terms & Maxims',
    example:
      'In a securities fraud lawsuit, the plaintiff must show scienter — that the company\'s executives knew the financial reports were misleading, not that they simply made an honest mistake.',
    relatedTerms: ['Mens Rea', 'Prima Facie', 'Actus Reus'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Sine Qua Non',
    definition:
      'Literally "without which not." An essential element or condition; in tort law, the "but-for" test asks whether the harm is a sine qua non of the defendant\'s act — would the injury have happened without it?',
    category: 'Latin Terms & Maxims',
    example:
      'The defective brakes were the sine qua non of the crash — without that defect, the accident would never have occurred.',
    relatedTerms: ['Res Ipsa Loquitur', 'Actus Reus', 'Corpus Delicti'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Status Quo',
    definition:
      'Literally "the state in which." The existing state of affairs at a given moment; courts often issue orders to maintain the status quo — keeping things as they are — while a case is being decided.',
    category: 'Latin Terms & Maxims',
    example:
      'The judge issued a temporary injunction to preserve the status quo, stopping the defendant from moving assets out of the country until the trial was over.',
    relatedTerms: ['Pendente Lite', 'Ex Parte', 'In Limine'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Subpoena Duces Tecum',
    definition:
      'Literally "bring with you under penalty." A specific court order requiring a person to appear and produce specific documents or other physical evidence.',
    category: 'Latin Terms & Maxims',
    example:
      'The plaintiff served a subpoena duces tecum on the bank, ordering it to produce five years of the defendant\'s account statements.',
    relatedTerms: ['Subpoena', 'In Camera', 'Habeas Corpus'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Voire Dire (Voir Dire)',
    definition:
      'A variant form referencing voir dire. See Voir Dire.',
    category: 'Latin Terms & Maxims',
    example:
      'The term "voire dire" appears in some older texts as an alternate spelling of voir dire — the jury-selection questioning process.',
    relatedTerms: ['Voir Dire', 'In Limine', 'Per Curiam'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Lex Loci',
    definition:
      'Literally "the law of the place." A rule for deciding which state\'s or country\'s law applies when a dispute has connections to more than one place — generally the law of the place where the key event occurred.',
    category: 'Latin Terms & Maxims',
    example:
      'Under lex loci, the court applied the law of the state where the car accident happened, even though both drivers lived in a different state.',
    relatedTerms: ['De Jure', 'De Facto', 'Sui Generis'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Mutatis Mutandis',
    definition:
      'Literally "with the necessary changes having been made." Used to say that a rule or analysis from one situation applies to a new situation, with the obvious adjustments made.',
    category: 'Latin Terms & Maxims',
    example:
      'The court held that the same due-process rules that apply in civil trials also apply, mutatis mutandis, in administrative hearings.',
    relatedTerms: ['Stare Decisis', 'Inter Alia', 'Supra'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Nisi Prius',
    definition:
      'Literally "unless before." Historically the trial court where facts are first decided by a judge and jury; today loosely used to mean the trial court level, as distinguished from an appeals court.',
    category: 'Latin Terms & Maxims',
    example:
      'The evidence rule had been applied consistently at nisi prius for decades before any appeals court formally addressed it.',
    relatedTerms: ['De Novo', 'En Banc', 'Per Curiam'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Amicus Brief',
    definition:
      'Short for amicus curiae brief, "friend of the court brief." A written submission filed by a non-party who wants to give the court additional information or a broader perspective on the issues.',
    category: 'Latin Terms & Maxims',
    example:
      'Dozens of technology companies joined an amicus brief urging the court to protect user privacy, even though none of them was a party to the case.',
    relatedTerms: ['Amicus Curiae', 'Per Curiam', 'Certiorari'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Flagrante Delicto',
    definition:
      'Literally "while the crime is blazing." Caught in the act of committing a crime; being caught in flagrante delicto typically justifies an immediate arrest without a warrant.',
    category: 'Latin Terms & Maxims',
    example:
      'Police officers entered the warehouse and caught the suspect in flagrante delicto — loading stolen merchandise into a van.',
    relatedTerms: ['Corpus Delicti', 'Actus Reus', 'Mens Rea'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Functus Officio',
    definition:
      'Literally "having performed the office." Describes a judge, official, or arbitrator who has completed their role and no longer has authority over the matter.',
    category: 'Latin Terms & Maxims',
    example:
      'Once the arbitrator issued the final award, he was functus officio and could not go back and change the outcome on his own.',
    relatedTerms: ['Res Judicata', 'Ultra Vires', 'Nunc Pro Tunc'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'In Propria Persona',
    definition:
      'Literally "in one\'s own proper person." The same as pro se — a person who represents themselves in court without a lawyer.',
    category: 'Latin Terms & Maxims',
    example:
      'The defendant dismissed his public defender and appeared in propria persona at the hearing, handling his own legal arguments.',
    relatedTerms: ['Pro Se', 'Pro Bono', 'Locus Standi'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Jus Cogens',
    definition:
      'Literally "compelling law." A fundamental rule of international law so important that no country can opt out of it through any treaty or agreement — such as the bans on genocide, slavery, and torture.',
    category: 'Latin Terms & Maxims',
    example:
      'The tribunal ruled that the ban on torture is a jus cogens norm — no treaty or national law can make torture legal.',
    relatedTerms: ['Pacta Sunt Servanda', 'De Jure', 'Ultra Vires'],
    difficulty: 'Advanced',
    isEssential: false,
  },
];

export default terms;
