import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Actus Reus',
    definition:
      'The physical act or unlawful omission that constitutes the external element of a crime. A defendant cannot be convicted of most crimes without proof of a guilty act; a mere intention, no matter how wicked, is generally insufficient without a corresponding action or failure to act where a duty exists.',
    category: 'Criminal Law & Procedure',
    example:
      'In a murder case, the actus reus is the physical act of killing — for example, pulling the trigger of a gun.',
    relatedTerms: ['Mens Rea', 'Criminal Intent', 'Omission Liability'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Mens Rea',
    definition:
      'The mental element or guilty mind required for criminal liability. Most crimes require proof that the defendant acted intentionally, knowingly, recklessly, or negligently with respect to each element of the offense.',
    category: 'Criminal Law & Procedure',
    example:
      'First-degree murder requires proof that the defendant planned the killing in advance — that is the guilty mental state (mens rea) required for that charge.',
    relatedTerms: ['Actus Reus', 'Criminal Intent', 'Strict Liability'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Felony',
    definition:
      'A serious criminal offense typically punishable by imprisonment of more than one year in a state or federal prison. Felonies include crimes such as murder, rape, robbery, and burglary, and conviction often results in the loss of civil rights such as voting and firearm ownership.',
    category: 'Criminal Law & Procedure',
    example:
      'Armed robbery is a felony — someone convicted of it could face five to twenty years in prison.',
    relatedTerms: ['Misdemeanor', 'Indictment', 'Conviction'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Misdemeanor',
    definition:
      'A less serious criminal offense than a felony, generally punishable by a fine or imprisonment of up to one year in a local jail rather than a state prison. Common misdemeanors include petty theft, simple assault, and disorderly conduct.',
    category: 'Criminal Law & Procedure',
    example:
      'Shoplifting merchandise worth less than $500 is typically charged as a misdemeanor, which might result in a small fine or a short jail stay.',
    relatedTerms: ['Felony', 'Infraction', 'Arraignment'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Arraignment',
    definition:
      'A court proceeding at which a criminal defendant is formally read the charges against them and enters a plea of guilty, not guilty, or no contest. Arraignment is usually the first court appearance after arrest and charges are filed.',
    category: 'Criminal Law & Procedure',
    example:
      'At the arraignment, the judge tells the defendant exactly what they are charged with, and the defendant says "guilty," "not guilty," or "no contest."',
    relatedTerms: ['Indictment', 'Plea Bargain', 'Bail'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Indictment',
    definition:
      'A formal written accusation issued by a grand jury charging a person with the commission of a crime. In federal cases and many state cases, a felony prosecution must be initiated by indictment rather than by the prosecutor alone.',
    category: 'Criminal Law & Procedure',
    example:
      'A grand jury reviewed the evidence and issued a twelve-count indictment, officially charging the defendant with wire fraud and money laundering.',
    relatedTerms: ['Grand Jury', 'Information', 'Arraignment'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Information',
    definition:
      'A formal criminal charge filed directly by a prosecutor without a grand jury indictment. Many states allow felony cases to proceed by information after a preliminary hearing establishes probable cause, rather than requiring a grand jury.',
    category: 'Criminal Law & Procedure',
    example:
      'Instead of going to a grand jury, the district attorney filed an information directly charging the defendant with aggravated assault after a preliminary hearing.',
    relatedTerms: ['Indictment', 'Grand Jury', 'Probable Cause'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Grand Jury',
    definition:
      'A body of citizens convened to evaluate whether sufficient evidence exists to formally charge a person with a crime. Grand jury proceedings are secret; only the prosecution presents evidence, and the jury decides whether to issue an indictment.',
    category: 'Criminal Law & Procedure',
    example:
      'A group of ordinary citizens heard testimony from witnesses and then voted on whether there was enough evidence to charge the executive with a crime.',
    relatedTerms: ['Indictment', 'Probable Cause', 'Information'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Probable Cause',
    definition:
      'A reasonable basis, grounded in articulable facts and circumstances, to believe that a crime has been or is being committed, or that evidence of a crime will be found in the place to be searched. Probable cause is required before police may make a warrantless arrest or obtain a search or arrest warrant.',
    category: 'Criminal Law & Procedure',
    example:
      'An officer who smells marijuana coming from a car has a concrete reason — probable cause — to search the vehicle without a warrant.',
    relatedTerms: ['Reasonable Suspicion', 'Arrest Warrant', 'Search Warrant'],
    difficulty: 'Intermediate',
    isEssential: true,
  },
  {
    term: 'Reasonable Suspicion',
    definition:
      'A lower standard than probable cause that permits a law enforcement officer to briefly detain a person for investigative purposes when specific, articulable facts suggest criminal activity may be afoot. Established in Terry v. Ohio, it allows a "stop and frisk" but not a full arrest.',
    category: 'Criminal Law & Procedure',
    example:
      'An officer who sees someone repeatedly peering into parked cars at night has enough suspicion to briefly stop and question that person — even without hard proof of a crime.',
    relatedTerms: ['Probable Cause', 'Terry Stop', 'Fourth Amendment'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Miranda Rights',
    definition:
      'The constitutional warnings that law enforcement must give a suspect before a custodial interrogation, informing them of the right to remain silent, that anything said can be used against them, the right to an attorney, and the right to an appointed attorney if they cannot afford one. Derived from Miranda v. Arizona (1966).',
    category: 'Criminal Law & Procedure',
    example:
      'Before questioning the suspect at the police station, the detective said: "You have the right to remain silent. Anything you say can be used against you in court..." — those are Miranda rights.',
    relatedTerms: ['Fifth Amendment', 'Sixth Amendment', 'Custodial Interrogation', 'Exclusionary Rule'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Arrest Warrant',
    definition:
      'A judicial order authorizing law enforcement to arrest and detain a named individual upon a finding of probable cause that the person committed a crime. Arrest warrants are issued by a neutral magistrate or judge upon submission of a sworn affidavit.',
    category: 'Criminal Law & Procedure',
    example:
      'A detective submitted a sworn statement to a judge explaining the evidence against the suspect; the judge then signed an arrest warrant allowing police to take the suspect into custody.',
    relatedTerms: ['Probable Cause', 'Search Warrant', 'Fourth Amendment'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Search Warrant',
    definition:
      'A court order authorizing law enforcement to search a specified place for specified items and to seize any contraband or evidence found. The Fourth Amendment generally requires police to obtain a search warrant supported by probable cause and describing with particularity the place to be searched and items to be seized.',
    category: 'Criminal Law & Procedure',
    example:
      'Police obtained a judge-signed search warrant allowing them to search the defendant\'s home for computers — they found incriminating files and seized them.',
    relatedTerms: ['Probable Cause', 'Arrest Warrant', 'Exclusionary Rule', 'Fourth Amendment'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Exclusionary Rule',
    definition:
      'A judicial doctrine that prohibits the use of evidence obtained in violation of a defendant\'s constitutional rights, particularly Fourth Amendment protections against unreasonable searches and seizures. Evidence suppressed under this rule is inadmissible at trial.',
    category: 'Criminal Law & Procedure',
    example:
      'Police searched an apartment without a valid warrant. Because the search was illegal, the judge applied the exclusionary rule and the drugs found inside could not be used as evidence at trial.',
    relatedTerms: ['Fruit of the Poisonous Tree', 'Search Warrant', 'Fourth Amendment', 'Suppression Hearing'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Fruit of the Poisonous Tree',
    definition:
      'An extension of the exclusionary rule holding that evidence derived from an initial unlawful government action is also inadmissible, because the taint of the original illegality flows through to any subsequently discovered evidence.',
    category: 'Criminal Law & Procedure',
    example:
      'Police illegally forced a confession, which led them to a witness. Because the witness was discovered through the illegal confession, that witness was considered "fruit of the poisonous tree" and could not testify.',
    relatedTerms: ['Exclusionary Rule', 'Fourth Amendment', 'Suppression Hearing'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Double Jeopardy',
    definition:
      'A constitutional protection under the Fifth Amendment prohibiting the government from prosecuting a defendant a second time for the same offense after an acquittal or conviction, or from imposing multiple punishments for the same crime. It does not bar separate prosecutions by different sovereigns (e.g., state and federal).',
    category: 'Criminal Law & Procedure',
    example:
      'A jury found the defendant not guilty. The prosecutor cannot try him again for the exact same crime — that would be double jeopardy.',
    relatedTerms: ['Acquittal', 'Fifth Amendment', 'Mistrial', 'Conviction'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Plea Bargain',
    definition:
      'An agreement between a prosecutor and a defendant in which the defendant pleads guilty to a lesser charge or to one of multiple charges in exchange for a more lenient sentence or the dismissal of other charges. Plea bargaining resolves the vast majority of criminal cases without trial.',
    category: 'Criminal Law & Procedure',
    example:
      'Rather than risk a trial for first-degree murder, the defendant agreed to plead guilty to manslaughter in exchange for a ten-year sentence instead of a potential life sentence.',
    relatedTerms: ['Nolo Contendere', 'Arraignment', 'Conviction', 'Sentencing'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Nolo Contendere',
    definition:
      'A Latin term meaning "I do not wish to contest," this plea has the same immediate criminal consequence as a guilty plea but cannot be used as an admission of liability in a subsequent civil proceeding. It is also called a "no contest" plea.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant pleaded no contest to a traffic offense. He accepted the criminal penalty but avoided having the plea used as proof of fault in a civil lawsuit.',
    relatedTerms: ['Plea Bargain', 'Guilty Plea', 'Arraignment'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Bail',
    definition:
      'The temporary release of a defendant from custody pending trial, conditioned upon the defendant\'s promise to appear at all court proceedings, often secured by a deposit of money or property. The Eighth Amendment prohibits excessive bail.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge set bail at $50,000. The defendant paid that amount as a deposit and was released from jail; if he shows up for all court dates, he gets the money back.',
    relatedTerms: ['Bond', 'Arraignment', 'Pretrial Detention', 'Eighth Amendment'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Bond',
    definition:
      'A financial instrument used to secure a defendant\'s release from pretrial detention. A surety bond is typically posted by a bail bondsman who charges a nonrefundable premium and guarantees the defendant\'s appearance; a cash bond requires the full amount to be deposited with the court.',
    category: 'Criminal Law & Procedure',
    example:
      'The family couldn\'t afford the full $100,000 bail, so they hired a bail bondsman, paid him $10,000 (nonrefundable), and he posted the bond to get the defendant released.',
    relatedTerms: ['Bail', 'Arraignment', 'Pretrial Detention'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Acquittal',
    definition:
      'A judgment by a court, following trial on the merits, that the defendant is not guilty of the charged offense. An acquittal by a jury (or judge in a bench trial) bars any subsequent prosecution for the same crime under the Double Jeopardy Clause.',
    category: 'Criminal Law & Procedure',
    example:
      'After three days of deliberation, the jury returned a not-guilty verdict — an acquittal — on all charges. The defendant walked free and cannot be retried for those crimes.',
    relatedTerms: ['Double Jeopardy', 'Conviction', 'Beyond a Reasonable Doubt', 'Verdict'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Conviction',
    definition:
      'A formal judgment of guilt entered against a defendant either after a guilty verdict at trial or upon entry of a guilty or no-contest plea. A conviction exposes the defendant to sentencing and may carry collateral consequences such as loss of voting rights or professional licenses.',
    category: 'Criminal Law & Procedure',
    example:
      'The jury found the defendant guilty; the judge then entered a formal conviction and scheduled a sentencing hearing for sixty days later.',
    relatedTerms: ['Acquittal', 'Plea Bargain', 'Sentencing', 'Felony'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Mistrial',
    definition:
      'A trial that is declared invalid and terminated before a verdict is reached, typically due to a hung jury, serious procedural error, juror misconduct, or manifest necessity. A mistrial generally allows the prosecution to retry the defendant without violating double jeopardy.',
    category: 'Criminal Law & Procedure',
    example:
      'After eight days of deliberation the jury was hopelessly deadlocked, so the judge declared a mistrial. The prosecutor can choose to hold a new trial.',
    relatedTerms: ['Hung Jury', 'Double Jeopardy', 'Retrial'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Hung Jury',
    definition:
      'A jury that is unable to reach a unanimous verdict required for conviction or acquittal after extended deliberations. A hung jury results in a mistrial, and the prosecution may choose to retry the case.',
    category: 'Criminal Law & Procedure',
    example:
      'The jury was split eight-to-four after days of debate and could not agree. The judge declared a mistrial because of the hung jury.',
    relatedTerms: ['Mistrial', 'Double Jeopardy', 'Verdict', 'Deliberation'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Beyond a Reasonable Doubt',
    definition:
      'The highest standard of proof in the American legal system, required to convict a defendant of a criminal offense. It requires the fact-finder to be firmly convinced of the defendant\'s guilt; it does not require absolute certainty, but the doubt must be based on reason and common sense.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge told the jury they could only vote guilty if, after weighing all the evidence, they were firmly convinced the defendant pulled the trigger — any reasonable doubt means not guilty.',
    relatedTerms: ['Burden of Proof', 'Acquittal', 'Conviction', 'Presumption of Innocence'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Self-Defense',
    definition:
      'An affirmative defense justifying the use of force, including deadly force, when a defendant reasonably believed such force was immediately necessary to protect themselves from imminent unlawful harm. The amount of force used must be proportional to the threat faced.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant argued she shot the intruder only after he lunged at her with a knife — claiming she acted in self-defense to protect her own life.',
    relatedTerms: ['Affirmative Defense', 'Defense of Others', 'Castle Doctrine', 'Stand Your Ground'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Entrapment',
    definition:
      'An affirmative defense asserting that law enforcement officers induced or persuaded an otherwise unwilling person to commit a crime that the defendant would not have committed absent governmental inducement. The defense fails if the defendant was predisposed to commit the crime.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant said he never would have sold drugs, but an undercover officer pestered him for weeks until he gave in — he raised entrapment as a defense.',
    relatedTerms: ['Affirmative Defense', 'Mens Rea', 'Undercover Operations'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Accomplice',
    definition:
      'A person who intentionally assists, encourages, or facilitates another person in the commission of a crime. An accomplice is generally subject to the same criminal liability as the principal actor under theories of aiding and abetting.',
    category: 'Criminal Law & Procedure',
    example:
      'The getaway driver waited outside while his friends robbed the bank. Even though he never went inside, he was convicted as an accomplice to armed robbery.',
    relatedTerms: ['Conspiracy', 'Accessory', 'Aiding and Abetting', 'Principal'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Conspiracy',
    definition:
      'An agreement between two or more persons to commit an unlawful act, combined with an overt act in furtherance of the agreement. Conspiracy is a separate and independent crime from the underlying offense; conspirators may be held liable for reasonably foreseeable crimes committed by co-conspirators.',
    category: 'Criminal Law & Procedure',
    example:
      'Five people planned together to distribute heroin. All five were charged with conspiracy — a separate crime on top of the actual drug charges — simply for agreeing to the plan and taking steps toward it.',
    relatedTerms: ['Accomplice', 'Accessory', 'Overt Act', 'RICO'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Accessory',
    definition:
      'A person who assists a criminal before or after the commission of a crime but is not present at the scene. An accessory before the fact helps plan or encourages the crime; an accessory after the fact knowingly assists the offender in avoiding arrest, trial, or punishment.',
    category: 'Criminal Law & Procedure',
    example:
      'A woman who knew about a robbery and hid the stolen money in her attic afterward was charged as an accessory after the fact.',
    relatedTerms: ['Accomplice', 'Conspiracy', 'Obstruction of Justice'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Recidivism',
    definition:
      'The tendency of a convicted criminal to reoffend and return to criminal behavior after release from incarceration. Recidivism rates are widely used to evaluate the effectiveness of rehabilitation programs and sentencing policies.',
    category: 'Criminal Law & Procedure',
    example:
      'Studies show that offenders who completed job-training programs while in prison were far less likely to commit new crimes after release — a lower recidivism rate.',
    relatedTerms: ['Parole', 'Probation', 'Sentencing', 'Rehabilitation'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Parole',
    definition:
      'The conditional release of a prisoner before the expiration of their sentence, subject to supervision and compliance with specified conditions. A parolee who violates the conditions may be returned to prison to serve the remainder of the original sentence.',
    category: 'Criminal Law & Procedure',
    example:
      'After serving eight years of a fifteen-year sentence, the defendant was released on parole. He had to check in with a parole officer every month and follow strict rules — or risk going back to prison.',
    relatedTerms: ['Probation', 'Recidivism', 'Sentencing', 'Good-Time Credits'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Probation',
    definition:
      'A sentencing alternative to incarceration in which a convicted offender is released into the community under court-imposed conditions and the supervision of a probation officer. Violation of probation conditions may result in revocation and imposition of the original suspended prison sentence.',
    category: 'Criminal Law & Procedure',
    example:
      'Instead of sending the first-time offender to prison, the judge gave him three years of probation: he had to do community service, submit to random drug tests, and report regularly to a probation officer.',
    relatedTerms: ['Parole', 'Sentencing', 'Suspended Sentence', 'Recidivism'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Habeas Corpus',
    definition:
      'Latin for "you shall have the body," a writ requiring a person detaining another to bring the detainee before a court to determine whether the detention is lawful. It is a fundamental safeguard against unlawful imprisonment and is available in both state and federal courts.',
    category: 'Criminal Law & Procedure',
    example:
      'A prisoner filed a habeas corpus petition claiming his lawyer did such a poor job at trial that his conviction was unfair. The court then had to review whether keeping him locked up was still legal.',
    relatedTerms: ['Due Process', 'Post-Conviction Relief', 'Ineffective Assistance of Counsel'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Due Process',
    definition:
      'The constitutional guarantee that the government may not deprive a person of life, liberty, or property without fair procedures (procedural due process) and without a legitimate governmental purpose proportionate to the burden imposed (substantive due process). In criminal law, due process requires notice of charges, a fair hearing, and an impartial tribunal.',
    category: 'Criminal Law & Procedure',
    example:
      'The prosecution hid evidence that would have helped the defendant. The court ruled that violated due process — the defendant\'s right to a fundamentally fair trial.',
    relatedTerms: ['Brady Disclosure', 'Habeas Corpus', 'Fifth Amendment', 'Fourteenth Amendment'],
    difficulty: 'Intermediate',
    isEssential: true,
  },
  {
    term: 'Brady Disclosure',
    definition:
      'The constitutional obligation of the prosecution, derived from Brady v. Maryland (1963), to disclose to the defense any material evidence that is favorable to the accused, including exculpatory evidence and evidence that could be used to impeach government witnesses. Failure to disclose Brady material can result in reversal of a conviction.',
    category: 'Criminal Law & Procedure',
    example:
      'The prosecution knew the key witness had a history of lying to police but never told the defense. That hidden information was a Brady disclosure violation, and the conviction was overturned.',
    relatedTerms: ['Due Process', 'Exculpatory Evidence', 'Giglio Material', 'Prosecutorial Misconduct'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Burden of Proof',
    definition:
      'The obligation of a party to establish a fact or facts to a required standard of certainty. In criminal cases, the prosecution bears the burden of proving every element of the charged offense beyond a reasonable doubt; the defendant bears no burden to prove innocence.',
    category: 'Criminal Law & Procedure',
    example:
      'The prosecution could not prove the defendant planned the killing in advance, so the jury convicted on manslaughter instead of first-degree murder — the prosecution failed to meet its burden of proof on that element.',
    relatedTerms: ['Beyond a Reasonable Doubt', 'Presumption of Innocence', 'Affirmative Defense'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Presumption of Innocence',
    definition:
      'The fundamental principle that a criminal defendant is presumed innocent until proven guilty beyond a reasonable doubt. The presumption places the entire burden of proof on the prosecution and requires that any reasonable doubt be resolved in favor of the defendant.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge told the jury: "Right now, before we even start, you must treat the defendant as innocent. It is entirely the prosecution\'s job to prove guilt."',
    relatedTerms: ['Burden of Proof', 'Beyond a Reasonable Doubt', 'Acquittal'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Affirmative Defense',
    definition:
      'A defense in which the defendant admits the conduct alleged but asserts a legal justification or excuse that negates criminal liability. The defendant typically bears the burden of producing sufficient evidence to raise the defense, after which the prosecution must disprove it beyond a reasonable doubt in most jurisdictions.',
    category: 'Criminal Law & Procedure',
    example:
      'A defendant who says "Yes, I hit him, but I was defending myself" is raising an affirmative defense — admitting the act but arguing it was legally justified.',
    relatedTerms: ['Self-Defense', 'Entrapment', 'Insanity Defense', 'Duress'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Insanity Defense',
    definition:
      'An affirmative defense asserting that a defendant, due to a severe mental disease or defect, either did not understand the nature and quality of the criminal act or did not understand that the act was wrong. A successful insanity defense results in acquittal by reason of insanity rather than conviction.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant was found not guilty by reason of insanity — the jury decided his severe mental illness prevented him from understanding that what he did was wrong. He was sent to a psychiatric facility instead of prison.',
    relatedTerms: ['Affirmative Defense', 'Mens Rea', 'Competency to Stand Trial'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Competency to Stand Trial',
    definition:
      'The legal standard requiring that a criminal defendant have a sufficient present ability to consult with counsel with a reasonable degree of rational understanding and a rational and factual understanding of the proceedings. An incompetent defendant may not be tried until competency is restored.',
    category: 'Criminal Law & Procedure',
    example:
      'The defense attorney told the judge she was not sure her client understood what was happening in court. The judge ordered a psychiatric evaluation to determine if the defendant was competent to stand trial.',
    relatedTerms: ['Insanity Defense', 'Due Process', 'Sixth Amendment'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Suppression Hearing',
    definition:
      'A pretrial hearing at which a defendant seeks to exclude evidence from trial on the grounds that it was obtained in violation of constitutional rights. The judge evaluates the circumstances of the evidence\'s collection and rules on whether it is admissible.',
    category: 'Criminal Law & Procedure',
    example:
      'Before the trial began, the defense asked the judge to throw out the confession, arguing it was obtained illegally. At the suppression hearing, the judge agreed and ruled the confession could not be used at trial.',
    relatedTerms: ['Exclusionary Rule', 'Fruit of the Poisonous Tree', 'Fourth Amendment', 'Miranda Rights'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Sentencing',
    definition:
      'The phase of a criminal proceeding following conviction in which the court imposes a penalty on the defendant. Sentences may include imprisonment, fines, probation, community service, restitution, or a combination thereof, guided by statutory ranges and judicial discretion.',
    category: 'Criminal Law & Procedure',
    example:
      'After the guilty verdict, the judge held a sentencing hearing, reviewed the pre-sentence report and victim statements, and imposed a seven-year prison term.',
    relatedTerms: ['Conviction', 'Probation', 'Parole', 'Mandatory Minimum'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Mandatory Minimum',
    definition:
      'A statute requiring a court to impose at least a specified minimum prison sentence upon conviction of a particular offense, regardless of mitigating circumstances. Mandatory minimums limit judicial discretion and are common in drug and firearms offenses.',
    category: 'Criminal Law & Procedure',
    example:
      'Federal law required at least five years in prison for possessing a certain amount of crack cocaine — the judge had no choice but to impose that minimum, even if she thought a shorter sentence was fair.',
    relatedTerms: ['Sentencing', 'Felony', 'Plea Bargain'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Preliminary Hearing',
    definition:
      'A court proceeding, held before trial, at which a judge determines whether there is probable cause to believe the defendant committed the charged offense. If probable cause is found, the case proceeds; if not, the charges are dismissed.',
    category: 'Criminal Law & Procedure',
    example:
      'A judge listened to the arresting officer\'s testimony and decided there was enough evidence to move forward — the case was bound over for trial after the preliminary hearing.',
    relatedTerms: ['Probable Cause', 'Indictment', 'Information', 'Arraignment'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Change of Venue',
    definition:
      'The transfer of a criminal case from one jurisdiction to another, typically granted when pervasive pretrial publicity or community bias makes it impossible to empanel an impartial jury in the original location.',
    category: 'Criminal Law & Procedure',
    example:
      'The crime had been all over local TV for months, making it hard to find unbiased jurors. The defense successfully moved for a change of venue to a neighboring county.',
    relatedTerms: ['Jury Selection', 'Impartial Jury', 'Sixth Amendment'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Voir Dire',
    definition:
      'The process of questioning prospective jurors to assess their impartiality and suitability to serve on a jury. Attorneys may challenge jurors "for cause" (unlimited, must show bias) or use a limited number of "peremptory challenges" (no reason required, but cannot be exercised on racial or gender grounds).',
    category: 'Criminal Law & Procedure',
    example:
      'During jury selection, a prospective juror said she believed all police officers lied. The prosecutor had her removed "for cause" — showing clear bias that would prevent her from being fair.',
    relatedTerms: ['Jury Selection', 'Peremptory Challenge', 'Impartial Jury', 'Batson Challenge'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Exculpatory Evidence',
    definition:
      'Evidence that tends to clear a defendant of fault or guilt. The prosecution is constitutionally required to disclose exculpatory evidence to the defense under Brady v. Maryland; failure to do so violates due process.',
    category: 'Criminal Law & Procedure',
    example:
      'Security footage showing the defendant was miles away when the crime occurred is exculpatory evidence — it points toward innocence rather than guilt.',
    relatedTerms: ['Brady Disclosure', 'Due Process', 'Burden of Proof'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Aggravating Circumstances',
    definition:
      'Factors that increase the severity of a crime or the culpability of the defendant, which may justify a harsher sentence. Common aggravating factors include prior criminal history, use of a weapon, vulnerability of the victim, or particular cruelty in commission of the crime.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge noted two aggravating circumstances — the victim was elderly and the attack was completely unprovoked — and imposed the maximum sentence.',
    relatedTerms: ['Sentencing', 'Mitigating Circumstances', 'Mandatory Minimum'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Mitigating Circumstances',
    definition:
      'Factors that do not excuse or justify a criminal act but may reduce the defendant\'s moral culpability and warrant a lesser sentence. Examples include lack of prior criminal history, mental illness, remorse, or cooperation with authorities.',
    category: 'Criminal Law & Procedure',
    example:
      'The defense attorney presented mitigating circumstances at sentencing — the defendant had no prior record, showed genuine remorse, and had cooperated with investigators — hoping the judge would impose a lighter sentence.',
    relatedTerms: ['Aggravating Circumstances', 'Sentencing', 'Plea Bargain'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
];

export default terms;
