import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Hearsay',
    definition:
      'An out-of-court statement offered to prove the truth of the matter asserted. Hearsay is generally inadmissible under the Federal Rules of Evidence unless a specific exception applies.',
    category: 'Evidence',
    example:
      'A witness testifying that they heard someone say "the defendant did it" to prove the defendant committed the act is hearsay.',
    relatedTerms: ['Hearsay Exception', 'Admissibility', 'Out-of-Court Statement'],
  },
  {
    term: 'Hearsay Exception',
    definition:
      'A recognized category under which an otherwise inadmissible hearsay statement may be admitted into evidence. Common exceptions include excited utterances, present sense impressions, dying declarations, and business records.',
    category: 'Evidence',
    example:
      'A statement made by a victim immediately after a car accident describing what happened qualifies as an excited utterance exception.',
    relatedTerms: ['Hearsay', 'Excited Utterance', 'Business Records Exception'],
  },
  {
    term: 'Excited Utterance',
    definition:
      'A hearsay exception for a statement relating to a startling event or condition made while the declarant was under the stress of excitement caused by the event. The spontaneity of the statement is the basis for its reliability.',
    category: 'Evidence',
    example:
      '"He just stabbed me!" shouted immediately after a stabbing qualifies as an excited utterance.',
    relatedTerms: ['Hearsay Exception', 'Present Sense Impression', 'Spontaneous Declaration'],
  },
  {
    term: 'Relevance',
    definition:
      'Evidence is relevant if it has any tendency to make a fact of consequence to the determination of the action more or less probable than it would be without the evidence. Relevant evidence is generally admissible; irrelevant evidence is not.',
    category: 'Evidence',
    example:
      'A prior threatening letter from the defendant to the victim is relevant in a harassment case.',
    relatedTerms: ['Materiality', 'Probative Value', 'Admissibility'],
  },
  {
    term: 'Materiality',
    definition:
      'Evidence is material if it relates to a fact that is actually in dispute and significant to the outcome of the case. Materiality is closely linked to relevance; evidence must be both relevant and material to be admissible.',
    category: 'Evidence',
    example:
      'In a breach of contract case, evidence of the contract terms is material; evidence of the defendant\'s unrelated traffic ticket is not.',
    relatedTerms: ['Relevance', 'Probative Value', 'Admissibility'],
  },
  {
    term: 'Probative Value',
    definition:
      'The tendency of evidence to prove or disprove a disputed fact in a case. Evidence with high probative value strongly supports or refutes a key issue; courts may still exclude it if its probative value is substantially outweighed by the danger of unfair prejudice.',
    category: 'Evidence',
    example:
      'DNA evidence matching the defendant has high probative value in an assault case.',
    relatedTerms: ['Prejudicial Effect', 'Relevance', 'Rule 403 Balancing'],
  },
  {
    term: 'Prejudicial Effect',
    definition:
      'The potential for evidence to unfairly influence the jury against a party beyond its legitimate probative value. Under Federal Rule of Evidence 403, a court may exclude relevant evidence if its probative value is substantially outweighed by the danger of unfair prejudice, confusion, or misleading the jury.',
    category: 'Evidence',
    example:
      'Graphic crime-scene photographs may be excluded if their inflammatory nature far outweighs their evidentiary value.',
    relatedTerms: ['Probative Value', 'Rule 403 Balancing', 'Admissibility'],
  },
  {
    term: 'Rule 403 Balancing',
    definition:
      'The judicial process of weighing the probative value of evidence against the danger of unfair prejudice, confusion of the issues, misleading the jury, undue delay, waste of time, or needless presentation of cumulative evidence. If the dangers substantially outweigh probative value, the court may exclude the evidence.',
    category: 'Evidence',
    example:
      'A judge balances the value of prior-crime evidence against the risk of the jury convicting based on character rather than the charged conduct.',
    relatedTerms: ['Probative Value', 'Prejudicial Effect', 'Relevance'],
  },
  {
    term: 'Authentication',
    definition:
      'The process of establishing that a piece of evidence is what its proponent claims it to be before it may be admitted. Authentication can be accomplished through witness testimony, distinctive characteristics, chain of custody, or self-authentication for certain documents.',
    category: 'Evidence',
    example:
      'A witness who sent a text message can authenticate it by testifying that the screenshot accurately depicts the conversation.',
    relatedTerms: ['Chain of Custody', 'Foundation', 'Best Evidence Rule'],
  },
  {
    term: 'Chain of Custody',
    definition:
      'A documented chronological record showing who collected, handled, transferred, and analyzed a piece of evidence from the time it was gathered until it is presented in court. A broken chain of custody can undermine the admissibility or weight of physical evidence.',
    category: 'Evidence',
    example:
      'Police must log every person who handled a blood sample from a crime scene to establish an unbroken chain of custody.',
    relatedTerms: ['Authentication', 'Foundation', 'Spoliation'],
  },
  {
    term: 'Best Evidence Rule',
    definition:
      'A rule requiring that, to prove the content of a writing, recording, or photograph, the original must be produced unless an adequate excuse is offered for its absence, in which case secondary evidence may be admitted. Also called the original document rule.',
    category: 'Evidence',
    example:
      'To prove what a contract says, the party must produce the original contract rather than paraphrasing it in testimony.',
    relatedTerms: ['Authentication', 'Secondary Evidence', 'Parol Evidence Rule'],
  },
  {
    term: 'Parol Evidence Rule',
    definition:
      'A substantive contract doctrine that bars introduction of extrinsic evidence—oral or written negotiations or agreements made prior to or contemporaneous with a final integrated written contract—to vary, contradict, or add to its terms.',
    category: 'Evidence',
    example:
      'If a written lease says rent is $1,500/month, the tenant cannot introduce evidence of an oral side-deal promising a lower rate.',
    relatedTerms: ['Best Evidence Rule', 'Integration Clause', 'Contract Interpretation'],
  },
  {
    term: 'Privilege',
    definition:
      'A legal right to refuse to disclose, or to prevent another from disclosing, confidential communications made within a protected relationship. Privileges include attorney-client, spousal, physician-patient, and therapist-patient, among others.',
    category: 'Evidence',
    example:
      'A client may assert attorney-client privilege to prevent their lawyer from testifying about legal advice given during representation.',
    relatedTerms: ['Attorney-Client Privilege', 'Work Product Doctrine', 'Spousal Privilege'],
  },
  {
    term: 'Attorney-Client Privilege',
    definition:
      'A privilege protecting confidential communications between a client and their attorney made for the purpose of obtaining or providing legal advice. The privilege belongs to the client, who may waive it; it persists even after the attorney-client relationship ends.',
    category: 'Evidence',
    example:
      'Emails between a corporate officer and in-house counsel seeking legal guidance on a merger are protected by attorney-client privilege.',
    relatedTerms: ['Privilege', 'Work Product Doctrine', 'Waiver of Privilege'],
  },
  {
    term: 'Work Product Doctrine',
    definition:
      'A protection shielding materials prepared by or for an attorney in anticipation of litigation from discovery by the opposing party. Unlike attorney-client privilege, the work product doctrine protects the attorney\'s mental impressions, legal theories, and trial strategy.',
    category: 'Evidence',
    example:
      'An attorney\'s notes outlining litigation strategy and witness interview summaries are protected work product.',
    relatedTerms: ['Attorney-Client Privilege', 'Privilege', 'Discovery'],
  },
  {
    term: 'Expert Witness',
    definition:
      'A witness qualified by knowledge, skill, experience, training, or education to offer opinion testimony on a scientific, technical, or other specialized matter beyond the understanding of the average juror. Expert testimony must satisfy admissibility standards such as Daubert or Frye.',
    category: 'Evidence',
    example:
      'A forensic accountant called to explain complex financial fraud schemes is an expert witness.',
    relatedTerms: ['Daubert Standard', 'Frye Standard', 'Lay Witness'],
  },
  {
    term: 'Lay Witness',
    definition:
      'An ordinary witness who testifies about facts they personally observed. A lay witness may offer opinion testimony only if it is rationally based on their own perception, helpful to understanding the testimony or determining a fact in issue, and not based on scientific or specialized knowledge.',
    category: 'Evidence',
    example:
      'A bystander who saw a car run a red light can testify to the color of the light as a lay witness.',
    relatedTerms: ['Expert Witness', 'Fact Witness', 'Opinion Testimony'],
  },
  {
    term: 'Daubert Standard',
    definition:
      'The federal standard governing the admissibility of expert testimony, requiring the trial judge to act as a gatekeeper by evaluating whether the expert\'s methodology is scientifically valid and reliably applied to the facts. Factors include peer review, testability, error rate, and general acceptance.',
    category: 'Evidence',
    example:
      'A court applies the Daubert standard to decide whether a fire-investigation expert\'s methodology reliably determines the cause of a building fire.',
    relatedTerms: ['Frye Standard', 'Expert Witness', 'Scientific Evidence'],
  },
  {
    term: 'Frye Standard',
    definition:
      'An older admissibility standard for expert scientific testimony requiring that the scientific technique or principle underlying the testimony be "generally accepted" within the relevant scientific community. Still used in some states in place of the Daubert standard.',
    category: 'Evidence',
    example:
      'Under Frye, polygraph evidence has historically been excluded because lie-detector results are not generally accepted as reliable.',
    relatedTerms: ['Daubert Standard', 'Expert Witness', 'Scientific Evidence'],
  },
  {
    term: 'Direct Examination',
    definition:
      'The initial questioning of a witness by the party who called that witness. Leading questions are generally not permitted on direct examination; the examining attorney uses open-ended questions to allow the witness to tell their story.',
    category: 'Evidence',
    example:
      'The plaintiff\'s attorney asks their client "What happened on the night of the accident?" during direct examination.',
    relatedTerms: ['Cross-Examination', 'Leading Question', 'Redirect Examination'],
  },
  {
    term: 'Cross-Examination',
    definition:
      'The questioning of a witness by the opposing party after direct examination. Cross-examination is generally limited to matters covered in direct examination and may use leading questions. Its primary purposes are to test credibility and elicit favorable facts.',
    category: 'Evidence',
    example:
      'Defense counsel asks the plaintiff\'s witness "Isn\'t it true that you were not wearing your glasses that night?" on cross-examination.',
    relatedTerms: ['Direct Examination', 'Impeachment', 'Leading Question'],
  },
  {
    term: 'Impeachment',
    definition:
      'The process of attacking the credibility or veracity of a witness through evidence of prior inconsistent statements, bias, interest, prior convictions, or defects in perception or memory. Impeachment aims to convince the fact-finder to discount the witness\'s testimony.',
    category: 'Evidence',
    example:
      'Counsel impeaches a witness by presenting a signed statement the witness made to police that contradicts their trial testimony.',
    relatedTerms: ['Cross-Examination', 'Prior Inconsistent Statement', 'Credibility'],
  },
  {
    term: 'Leading Question',
    definition:
      'A question that suggests the desired answer within the question itself. Leading questions are generally prohibited on direct examination but are permitted on cross-examination, and also when examining a hostile witness or an adverse party.',
    category: 'Evidence',
    example:
      '"You were speeding, weren\'t you?" is a leading question because it suggests the answer "yes."',
    relatedTerms: ['Direct Examination', 'Cross-Examination', 'Hostile Witness'],
  },
  {
    term: 'Objection',
    definition:
      'A formal protest raised by a party\'s attorney during trial challenging the admissibility of evidence or the propriety of a question. Common grounds include hearsay, relevance, speculation, leading, and foundation. Failure to object in a timely manner typically waives the issue on appeal.',
    category: 'Evidence',
    example:
      'Counsel objects "Hearsay, Your Honor" when opposing counsel asks a witness to recount what an absent third party told them.',
    relatedTerms: ['Foundation', 'Admissibility', 'Waiver'],
  },
  {
    term: 'Foundation',
    definition:
      'Preliminary evidence establishing the admissibility of a subsequent piece of evidence or testimony. A proper foundation must be laid before a document, recording, or expert opinion can be admitted; it typically establishes authenticity, relevance, and reliability.',
    category: 'Evidence',
    example:
      'Before admitting a business record, counsel must establish that it was made in the ordinary course of business and at or near the time of the event.',
    relatedTerms: ['Authentication', 'Objection', 'Business Records Exception'],
  },
  {
    term: 'Stipulation',
    definition:
      'An agreement between opposing parties or their counsel regarding a matter of fact or procedure that removes it from dispute and avoids the need to introduce formal proof. Stipulations are binding on the parties and may be read to the jury.',
    category: 'Evidence',
    example:
      'The parties stipulate that the defendant was present at the scene on the date in question, eliminating the need for testimony on that point.',
    relatedTerms: ['Judicial Notice', 'Admissibility', 'Pretrial Conference'],
  },
  {
    term: 'Judicial Notice',
    definition:
      'The court\'s recognition of a fact as true without requiring formal proof because it is either commonly known in the community or capable of accurate and ready determination from reliable sources. A court may take judicial notice on its own or upon a party\'s request.',
    category: 'Evidence',
    example:
      'A court may take judicial notice that July 4 is a federal holiday without requiring evidence to prove it.',
    relatedTerms: ['Stipulation', 'Admissibility', 'Fact-Finding'],
  },
  {
    term: 'Burden of Proof',
    definition:
      'The obligation imposed on a party to establish the truth of a disputed fact by a required standard of evidence. The burden of proof encompasses both the burden of production (introducing enough evidence to raise an issue) and the burden of persuasion (convincing the fact-finder).',
    category: 'Evidence',
    example:
      'In a civil lawsuit, the plaintiff bears the burden of proof to establish liability by a preponderance of the evidence.',
    relatedTerms: ['Preponderance of the Evidence', 'Beyond a Reasonable Doubt', 'Clear and Convincing Evidence'],
  },
  {
    term: 'Preponderance of the Evidence',
    definition:
      'The standard of proof in most civil cases, requiring the party with the burden to show that their version of the facts is more likely true than not—i.e., greater than a 50% probability. It is the lowest standard of proof in civil litigation.',
    category: 'Evidence',
    example:
      'A plaintiff in a negligence suit must show by preponderance of the evidence that the defendant\'s carelessness caused their injuries.',
    relatedTerms: ['Burden of Proof', 'Clear and Convincing Evidence', 'Beyond a Reasonable Doubt'],
  },
  {
    term: 'Clear and Convincing Evidence',
    definition:
      'An intermediate standard of proof requiring the party to demonstrate that a claim is highly probable or reasonably certain—more than a preponderance but less than beyond a reasonable doubt. Used in cases such as fraud, punitive damages, and certain family law matters.',
    category: 'Evidence',
    example:
      'To obtain punitive damages in many jurisdictions, a plaintiff must prove malice or oppression by clear and convincing evidence.',
    relatedTerms: ['Burden of Proof', 'Preponderance of the Evidence', 'Beyond a Reasonable Doubt'],
  },
  {
    term: 'Beyond a Reasonable Doubt',
    definition:
      'The highest standard of proof, required in criminal cases. The prosecution must eliminate any reasonable doubt about the defendant\'s guilt; it does not require absolute certainty, but the evidence must leave the jury firmly convinced of guilt.',
    category: 'Evidence',
    example:
      'A jury that has lingering doubts grounded in reason about whether the defendant committed the crime must acquit under the beyond a reasonable doubt standard.',
    relatedTerms: ['Burden of Proof', 'Preponderance of the Evidence', 'Presumption of Innocence'],
  },
  {
    term: 'Circumstantial Evidence',
    definition:
      'Evidence that requires an inference to connect it to a conclusion of fact, as contrasted with direct evidence. Circumstantial evidence is not inherently less reliable than direct evidence, and a conviction may rest entirely on circumstantial evidence.',
    category: 'Evidence',
    example:
      'Muddy footprints leading from a crime scene to the defendant\'s car are circumstantial evidence linking the defendant to the location.',
    relatedTerms: ['Direct Evidence', 'Inference', 'Relevance'],
  },
  {
    term: 'Direct Evidence',
    definition:
      'Evidence that directly proves a fact without requiring any inference, such as eyewitness testimony or a confession. Direct evidence, if believed, establishes a fact without needing additional reasoning.',
    category: 'Evidence',
    example:
      'A witness who saw the defendant fire the gun provides direct evidence of that act.',
    relatedTerms: ['Circumstantial Evidence', 'Eyewitness Testimony', 'Credibility'],
  },
  {
    term: 'Exhibit',
    definition:
      'A tangible item or document formally introduced into evidence and made part of the official trial record. Exhibits are typically marked with letters or numbers for identification, authenticated, and admitted through witness testimony or stipulation.',
    category: 'Evidence',
    example:
      'The prosecution introduces the murder weapon as Exhibit 1 after a detective testifies to its discovery and chain of custody.',
    relatedTerms: ['Authentication', 'Chain of Custody', 'Demonstrative Evidence'],
  },
  {
    term: 'Demonstrative Evidence',
    definition:
      'Evidence that illustrates or explains other evidence rather than proving a fact directly—such as diagrams, models, maps, charts, animations, or reconstructions. Demonstrative evidence is used to help the jury understand complex or technical information.',
    category: 'Evidence',
    example:
      'An accident-reconstruction expert uses a computer animation showing vehicle trajectories as demonstrative evidence.',
    relatedTerms: ['Exhibit', 'Expert Witness', 'Real Evidence'],
  },
  {
    term: 'Real Evidence',
    definition:
      'Physical objects that played an actual role in the events at issue in a case and are offered directly for the jury\'s inspection. Also called physical evidence, it differs from demonstrative evidence, which only illustrates; real evidence speaks for itself.',
    category: 'Evidence',
    example:
      'A bloody glove recovered at a crime scene is real evidence; a diagram of the crime scene is demonstrative evidence.',
    relatedTerms: ['Demonstrative Evidence', 'Exhibit', 'Chain of Custody'],
  },
  {
    term: 'Spoliation',
    definition:
      'The intentional or negligent destruction, alteration, or concealment of evidence relevant to pending or foreseeable litigation. Courts may sanction the spoliating party with adverse inference instructions, dismissal, or monetary penalties.',
    category: 'Evidence',
    example:
      'A company that shreds emails after receiving a litigation hold notice commits spoliation and may face an adverse inference instruction.',
    relatedTerms: ['Chain of Custody', 'Adverse Inference', 'Litigation Hold'],
  },
  {
    term: 'Adverse Inference',
    definition:
      'A jury instruction permitting or directing jurors to infer that destroyed or withheld evidence would have been unfavorable to the party responsible for its loss. It is a common sanction for spoliation of evidence.',
    category: 'Evidence',
    example:
      'Because the defendant deleted surveillance footage, the judge instructs the jury that it may infer the footage showed the defendant at the crime scene.',
    relatedTerms: ['Spoliation', 'Jury Instruction', 'Sanctions'],
  },
  {
    term: 'Prior Inconsistent Statement',
    definition:
      'A statement made by a witness on a prior occasion that contradicts their current testimony, used primarily to impeach the witness\'s credibility. Under certain conditions, prior inconsistent statements may also be admitted as substantive evidence.',
    category: 'Evidence',
    example:
      'Counsel confronts a witness with a police report in which the witness described the car as blue, contrary to the witness\'s trial testimony that it was red.',
    relatedTerms: ['Impeachment', 'Cross-Examination', 'Credibility'],
  },
  {
    term: 'Business Records Exception',
    definition:
      'A hearsay exception permitting the admission of records made in the regular course of business, at or near the time of the events recorded, by a person with knowledge of the facts. The foundation is typically established by a custodian of records.',
    category: 'Evidence',
    example:
      'Hospital billing records are admitted under the business records exception to show the cost of medical treatment.',
    relatedTerms: ['Hearsay Exception', 'Foundation', 'Authentication'],
  },
  {
    term: 'Dying Declaration',
    definition:
      'A hearsay exception for a statement made by a declarant who believed their death was imminent, concerning the cause or circumstances of what they believed to be their impending death. Historically limited to homicide prosecutions but broadened in some jurisdictions.',
    category: 'Evidence',
    example:
      'A stabbing victim\'s statement to paramedics identifying the attacker, made while the victim believed they would not survive, is a dying declaration.',
    relatedTerms: ['Hearsay Exception', 'Excited Utterance', 'Confrontation Clause'],
  },
  {
    term: 'Confrontation Clause',
    definition:
      'The Sixth Amendment right of a criminal defendant to confront the witnesses against them. Under Crawford v. Washington, testimonial out-of-court statements are inadmissible unless the declarant is unavailable and the defendant had a prior opportunity to cross-examine.',
    category: 'Evidence',
    example:
      'A recorded police interrogation statement offered against the defendant may violate the Confrontation Clause if the declarant does not testify at trial.',
    relatedTerms: ['Hearsay', 'Cross-Examination', 'Dying Declaration'],
  },
  {
    term: 'Limiting Instruction',
    definition:
      'A judge\'s direction to the jury that certain evidence may be considered only for a specific purpose and not for other purposes. Limiting instructions are used, for example, when prior-act evidence is admitted for motive but not to show propensity.',
    category: 'Evidence',
    example:
      'When a prior conviction is admitted to impeach a witness, the judge instructs the jury to use it only to assess credibility, not as proof that the defendant is a bad person.',
    relatedTerms: ['Jury Instruction', 'Prejudicial Effect', 'Rule 403 Balancing'],
  },
  {
    term: 'Character Evidence',
    definition:
      'Evidence offered to prove that a person acted in conformity with a particular character trait on a specific occasion. Generally inadmissible to prove conduct, but subject to exceptions—such as when a criminal defendant offers evidence of good character or when character is directly in issue.',
    category: 'Evidence',
    example:
      'A prosecutor generally cannot introduce evidence that the defendant has a violent character to prove he committed assault.',
    relatedTerms: ['Propensity Evidence', 'Prior Bad Acts', 'Prejudicial Effect'],
  },
  {
    term: 'Propensity Evidence',
    definition:
      'Evidence of a person\'s prior acts or character used to argue that the person acted in conformity with that character on a specific occasion. Such evidence is generally prohibited because it invites judgment based on past behavior rather than the charged conduct, but exceptions exist for sexual assault and child molestation cases.',
    category: 'Evidence',
    example:
      'Offering evidence that the defendant previously assaulted someone to prove he assaulted the current victim is propensity evidence generally barred by FRE 404(b).',
    relatedTerms: ['Character Evidence', 'Prior Bad Acts', 'Rule 403 Balancing'],
  },
  {
    term: 'Prior Bad Acts',
    definition:
      'Evidence of a person\'s prior wrongful conduct, admissible not to show propensity but for specific permissible purposes such as proving motive, opportunity, intent, preparation, plan, knowledge, identity, or absence of mistake under Federal Rule of Evidence 404(b).',
    category: 'Evidence',
    example:
      'Evidence of a defendant\'s prior insurance fraud scheme is admissible to show a common plan or scheme in a new fraud prosecution.',
    relatedTerms: ['Propensity Evidence', 'Character Evidence', 'Limiting Instruction'],
  },
  {
    term: 'Opinion Testimony',
    definition:
      'Testimony in which the witness offers their own conclusion or inference rather than just a recitation of observed facts. Lay witnesses may give opinions rationally grounded in personal perception; expert witnesses may offer opinions within their area of expertise.',
    category: 'Evidence',
    example:
      'A lay witness may testify "He seemed drunk" based on observed stumbling and slurred speech; an expert toxicologist may opine on a specific blood-alcohol level.',
    relatedTerms: ['Expert Witness', 'Lay Witness', 'Foundation'],
  },
  {
    term: 'Presumption',
    definition:
      'A legal inference that a court is required or permitted to draw from a proven fact, shifting the burden of production or persuasion to the opposing party to rebut it. Presumptions may be rebuttable or conclusive (irrebuttable).',
    category: 'Evidence',
    example:
      'A person who has been missing for seven years is presumed dead, shifting the burden to those contesting the death to produce rebutting evidence.',
    relatedTerms: ['Burden of Proof', 'Inference', 'Judicial Notice'],
  },
];

export default terms;
