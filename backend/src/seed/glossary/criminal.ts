import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Actus Reus',
    definition:
      'The physical act or unlawful omission that constitutes the external element of a crime. A defendant cannot be convicted of most crimes without proof of a guilty act; a mere intention, no matter how wicked, is generally insufficient without a corresponding action or failure to act where a duty exists.',
    category: 'Criminal Law & Procedure',
    example:
      'In a murder prosecution, the actus reus is the physical act of killing the victim, such as firing a gun.',
    relatedTerms: ['Mens Rea', 'Criminal Intent', 'Omission Liability'],
  },
  {
    term: 'Mens Rea',
    definition:
      'The mental element or guilty mind required for criminal liability. Most crimes require proof that the defendant acted intentionally, knowingly, recklessly, or negligently with respect to each element of the offense.',
    category: 'Criminal Law & Procedure',
    example:
      'A charge of first-degree murder requires the specific mens rea of premeditation and deliberation.',
    relatedTerms: ['Actus Reus', 'Criminal Intent', 'Strict Liability'],
  },
  {
    term: 'Felony',
    definition:
      'A serious criminal offense typically punishable by imprisonment of more than one year in a state or federal prison. Felonies include crimes such as murder, rape, robbery, and burglary, and conviction often results in the loss of civil rights such as voting and firearm ownership.',
    category: 'Criminal Law & Procedure',
    example:
      'Armed robbery is classified as a felony, carrying a potential sentence of five to twenty years in prison.',
    relatedTerms: ['Misdemeanor', 'Indictment', 'Conviction'],
  },
  {
    term: 'Misdemeanor',
    definition:
      'A less serious criminal offense than a felony, generally punishable by a fine or imprisonment of up to one year in a local jail rather than a state prison. Common misdemeanors include petty theft, simple assault, and disorderly conduct.',
    category: 'Criminal Law & Procedure',
    example:
      'Shoplifting merchandise worth less than $500 is typically charged as a misdemeanor.',
    relatedTerms: ['Felony', 'Infraction', 'Arraignment'],
  },
  {
    term: 'Arraignment',
    definition:
      'A court proceeding at which a criminal defendant is formally read the charges against them and enters a plea of guilty, not guilty, or no contest. Arraignment is usually the first court appearance after arrest and charges are filed.',
    category: 'Criminal Law & Procedure',
    example:
      'At the arraignment, the defendant pleaded not guilty to two counts of grand theft auto.',
    relatedTerms: ['Indictment', 'Plea Bargain', 'Bail'],
  },
  {
    term: 'Indictment',
    definition:
      'A formal written accusation issued by a grand jury charging a person with the commission of a crime. In federal cases and many state cases, a felony prosecution must be initiated by indictment rather than by the prosecutor alone.',
    category: 'Criminal Law & Procedure',
    example:
      'The grand jury returned a twelve-count indictment against the defendant for wire fraud and money laundering.',
    relatedTerms: ['Grand Jury', 'Information', 'Arraignment'],
  },
  {
    term: 'Information',
    definition:
      'A formal criminal charge filed directly by a prosecutor without a grand jury indictment. Many states allow felony cases to proceed by information after a preliminary hearing establishes probable cause, rather than requiring a grand jury.',
    category: 'Criminal Law & Procedure',
    example:
      'The district attorney filed an information charging the defendant with aggravated assault after the preliminary hearing.',
    relatedTerms: ['Indictment', 'Grand Jury', 'Probable Cause'],
  },
  {
    term: 'Grand Jury',
    definition:
      'A body of citizens convened to evaluate whether sufficient evidence exists to formally charge a person with a crime. Grand jury proceedings are secret; only the prosecution presents evidence, and the jury decides whether to issue an indictment.',
    category: 'Criminal Law & Procedure',
    example:
      'The federal grand jury heard testimony from fifteen witnesses before voting to indict the corporate executive.',
    relatedTerms: ['Indictment', 'Probable Cause', 'Information'],
  },
  {
    term: 'Probable Cause',
    definition:
      'A reasonable basis, grounded in articulable facts and circumstances, to believe that a crime has been or is being committed, or that evidence of a crime will be found in the place to be searched. Probable cause is required before police may make a warrantless arrest or obtain a search or arrest warrant.',
    category: 'Criminal Law & Procedure',
    example:
      'The smell of marijuana emanating from a vehicle gave officers probable cause to conduct a warrantless search.',
    relatedTerms: ['Reasonable Suspicion', 'Arrest Warrant', 'Search Warrant'],
  },
  {
    term: 'Reasonable Suspicion',
    definition:
      'A lower standard than probable cause that permits a law enforcement officer to briefly detain a person for investigative purposes when specific, articulable facts suggest criminal activity may be afoot. Established in Terry v. Ohio, it allows a "stop and frisk" but not a full arrest.',
    category: 'Criminal Law & Procedure',
    example:
      'An officer who observes a person repeatedly pacing near parked cars and peering into windows has reasonable suspicion to conduct an investigative stop.',
    relatedTerms: ['Probable Cause', 'Terry Stop', 'Fourth Amendment'],
  },
  {
    term: 'Miranda Rights',
    definition:
      'The constitutional warnings that law enforcement must give a suspect before a custodial interrogation, informing them of the right to remain silent, that anything said can be used against them, the right to an attorney, and the right to an appointed attorney if they cannot afford one. Derived from Miranda v. Arizona (1966).',
    category: 'Criminal Law & Procedure',
    example:
      'After handcuffing the suspect, the detective read him his Miranda rights before asking any questions at the station.',
    relatedTerms: ['Fifth Amendment', 'Sixth Amendment', 'Custodial Interrogation', 'Exclusionary Rule'],
  },
  {
    term: 'Arrest Warrant',
    definition:
      'A judicial order authorizing law enforcement to arrest and detain a named individual upon a finding of probable cause that the person committed a crime. Arrest warrants are issued by a neutral magistrate or judge upon submission of a sworn affidavit.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge signed an arrest warrant for the suspect after reviewing the detective\'s affidavit describing the surveillance evidence.',
    relatedTerms: ['Probable Cause', 'Search Warrant', 'Fourth Amendment'],
  },
  {
    term: 'Search Warrant',
    definition:
      'A court order authorizing law enforcement to search a specified place for specified items and to seize any contraband or evidence found. The Fourth Amendment generally requires police to obtain a search warrant supported by probable cause and describing with particularity the place to be searched and items to be seized.',
    category: 'Criminal Law & Procedure',
    example:
      'Armed with a search warrant, agents searched the defendant\'s home and seized computers containing incriminating files.',
    relatedTerms: ['Probable Cause', 'Arrest Warrant', 'Exclusionary Rule', 'Fourth Amendment'],
  },
  {
    term: 'Exclusionary Rule',
    definition:
      'A judicial doctrine that prohibits the use of evidence obtained in violation of a defendant\'s constitutional rights, particularly Fourth Amendment protections against unreasonable searches and seizures. Evidence suppressed under this rule is inadmissible at trial.',
    category: 'Criminal Law & Procedure',
    example:
      'Because officers searched the apartment without a valid warrant, the court applied the exclusionary rule and suppressed the drugs found inside.',
    relatedTerms: ['Fruit of the Poisonous Tree', 'Search Warrant', 'Fourth Amendment', 'Suppression Hearing'],
  },
  {
    term: 'Fruit of the Poisonous Tree',
    definition:
      'An extension of the exclusionary rule holding that evidence derived from an initial unlawful government action is also inadmissible, because the taint of the original illegality flows through to any subsequently discovered evidence.',
    category: 'Criminal Law & Procedure',
    example:
      'Because the initial confession was coerced, the witness identified through that confession was deemed fruit of the poisonous tree and could not testify.',
    relatedTerms: ['Exclusionary Rule', 'Fourth Amendment', 'Suppression Hearing'],
  },
  {
    term: 'Double Jeopardy',
    definition:
      'A constitutional protection under the Fifth Amendment prohibiting the government from prosecuting a defendant a second time for the same offense after an acquittal or conviction, or from imposing multiple punishments for the same crime. It does not bar separate prosecutions by different sovereigns (e.g., state and federal).',
    category: 'Criminal Law & Procedure',
    example:
      'After the jury returned a not-guilty verdict, the prosecutor could not retry the defendant on the same charges due to double jeopardy.',
    relatedTerms: ['Acquittal', 'Fifth Amendment', 'Mistrial', 'Conviction'],
  },
  {
    term: 'Plea Bargain',
    definition:
      'An agreement between a prosecutor and a defendant in which the defendant pleads guilty to a lesser charge or to one of multiple charges in exchange for a more lenient sentence or the dismissal of other charges. Plea bargaining resolves the vast majority of criminal cases without trial.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant accepted a plea bargain, pleading guilty to manslaughter instead of first-degree murder in exchange for a ten-year sentence.',
    relatedTerms: ['Nolo Contendere', 'Arraignment', 'Conviction', 'Sentencing'],
  },
  {
    term: 'Nolo Contendere',
    definition:
      'A Latin term meaning "I do not wish to contest," this plea has the same immediate criminal consequence as a guilty plea but cannot be used as an admission of liability in a subsequent civil proceeding. It is also called a "no contest" plea.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant entered a nolo contendere plea to the traffic offense, avoiding having the plea used against him in a civil lawsuit.',
    relatedTerms: ['Plea Bargain', 'Guilty Plea', 'Arraignment'],
  },
  {
    term: 'Bail',
    definition:
      'The temporary release of a defendant from custody pending trial, conditioned upon the defendant\'s promise to appear at all court proceedings, often secured by a deposit of money or property. The Eighth Amendment prohibits excessive bail.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge set bail at $50,000, and the defendant was released after posting the required amount.',
    relatedTerms: ['Bond', 'Arraignment', 'Pretrial Detention', 'Eighth Amendment'],
  },
  {
    term: 'Bond',
    definition:
      'A financial instrument used to secure a defendant\'s release from pretrial detention. A surety bond is typically posted by a bail bondsman who charges a nonrefundable premium and guarantees the defendant\'s appearance; a cash bond requires the full amount to be deposited with the court.',
    category: 'Criminal Law & Procedure',
    example:
      'Unable to afford the full $100,000 bail, the family hired a bondsman and paid a $10,000 premium to secure a surety bond.',
    relatedTerms: ['Bail', 'Arraignment', 'Pretrial Detention'],
  },
  {
    term: 'Acquittal',
    definition:
      'A judgment by a court, following trial on the merits, that the defendant is not guilty of the charged offense. An acquittal by a jury (or judge in a bench trial) bars any subsequent prosecution for the same crime under the Double Jeopardy Clause.',
    category: 'Criminal Law & Procedure',
    example:
      'After deliberating for three days, the jury returned a verdict of acquittal on all counts.',
    relatedTerms: ['Double Jeopardy', 'Conviction', 'Beyond a Reasonable Doubt', 'Verdict'],
  },
  {
    term: 'Conviction',
    definition:
      'A formal judgment of guilt entered against a defendant either after a guilty verdict at trial or upon entry of a guilty or no-contest plea. A conviction exposes the defendant to sentencing and may carry collateral consequences such as loss of voting rights or professional licenses.',
    category: 'Criminal Law & Procedure',
    example:
      'Following the jury\'s guilty verdict, the judge entered a conviction and scheduled a sentencing hearing for sixty days later.',
    relatedTerms: ['Acquittal', 'Plea Bargain', 'Sentencing', 'Felony'],
  },
  {
    term: 'Mistrial',
    definition:
      'A trial that is declared invalid and terminated before a verdict is reached, typically due to a hung jury, serious procedural error, juror misconduct, or manifest necessity. A mistrial generally allows the prosecution to retry the defendant without violating double jeopardy.',
    category: 'Criminal Law & Procedure',
    example:
      'After the jury reported it was deadlocked eleven-to-one after eight days of deliberation, the judge declared a mistrial.',
    relatedTerms: ['Hung Jury', 'Double Jeopardy', 'Retrial'],
  },
  {
    term: 'Hung Jury',
    definition:
      'A jury that is unable to reach a unanimous verdict required for conviction or acquittal after extended deliberations. A hung jury results in a mistrial, and the prosecution may choose to retry the case.',
    category: 'Criminal Law & Procedure',
    example:
      'The hung jury—split eight-to-four in favor of conviction—led to a mistrial and a retrial six months later.',
    relatedTerms: ['Mistrial', 'Double Jeopardy', 'Verdict', 'Deliberation'],
  },
  {
    term: 'Beyond a Reasonable Doubt',
    definition:
      'The highest standard of proof in the American legal system, required to convict a defendant of a criminal offense. It requires the fact-finder to be firmly convinced of the defendant\'s guilt; it does not require absolute certainty, but the doubt must be based on reason and common sense.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge instructed the jury that they could only convict if they were convinced beyond a reasonable doubt that the defendant pulled the trigger.',
    relatedTerms: ['Burden of Proof', 'Acquittal', 'Conviction', 'Presumption of Innocence'],
  },
  {
    term: 'Self-Defense',
    definition:
      'An affirmative defense justifying the use of force, including deadly force, when a defendant reasonably believed such force was immediately necessary to protect themselves from imminent unlawful harm. The amount of force used must be proportional to the threat faced.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant raised self-defense, arguing she shot the intruder only after he raised a knife and lunged at her.',
    relatedTerms: ['Affirmative Defense', 'Defense of Others', 'Castle Doctrine', 'Stand Your Ground'],
  },
  {
    term: 'Entrapment',
    definition:
      'An affirmative defense asserting that law enforcement officers induced or persuaded an otherwise unwilling person to commit a crime that the defendant would not have committed absent governmental inducement. The defense fails if the defendant was predisposed to commit the crime.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant claimed entrapment after an undercover officer repeatedly pressured him for weeks to sell narcotics.',
    relatedTerms: ['Affirmative Defense', 'Mens Rea', 'Undercover Operations'],
  },
  {
    term: 'Accomplice',
    definition:
      'A person who intentionally assists, encourages, or facilitates another person in the commission of a crime. An accomplice is generally subject to the same criminal liability as the principal actor under theories of aiding and abetting.',
    category: 'Criminal Law & Procedure',
    example:
      'The getaway driver was convicted as an accomplice to armed robbery even though he never entered the bank.',
    relatedTerms: ['Conspiracy', 'Accessory', 'Aiding and Abetting', 'Principal'],
  },
  {
    term: 'Conspiracy',
    definition:
      'An agreement between two or more persons to commit an unlawful act, combined with an overt act in furtherance of the agreement. Conspiracy is a separate and independent crime from the underlying offense; conspirators may be held liable for reasonably foreseeable crimes committed by co-conspirators.',
    category: 'Criminal Law & Procedure',
    example:
      'All five defendants were charged with conspiracy to distribute heroin in addition to the substantive drug trafficking charges.',
    relatedTerms: ['Accomplice', 'Accessory', 'Overt Act', 'RICO'],
  },
  {
    term: 'Accessory',
    definition:
      'A person who assists a criminal before or after the commission of a crime but is not present at the scene. An accessory before the fact helps plan or encourages the crime; an accessory after the fact knowingly assists the offender in avoiding arrest, trial, or punishment.',
    category: 'Criminal Law & Procedure',
    example:
      'The woman who hid the robbery proceeds in her attic was charged as an accessory after the fact.',
    relatedTerms: ['Accomplice', 'Conspiracy', 'Obstruction of Justice'],
  },
  {
    term: 'Recidivism',
    definition:
      'The tendency of a convicted criminal to reoffend and return to criminal behavior after release from incarceration. Recidivism rates are widely used to evaluate the effectiveness of rehabilitation programs and sentencing policies.',
    category: 'Criminal Law & Procedure',
    example:
      'Studies show that recidivism rates are significantly lower among offenders who completed vocational training while incarcerated.',
    relatedTerms: ['Parole', 'Probation', 'Sentencing', 'Rehabilitation'],
  },
  {
    term: 'Parole',
    definition:
      'The conditional release of a prisoner before the expiration of their sentence, subject to supervision and compliance with specified conditions. A parolee who violates the conditions may be returned to prison to serve the remainder of the original sentence.',
    category: 'Criminal Law & Procedure',
    example:
      'After serving eight years of a fifteen-year sentence, the defendant was granted parole on the condition that he report monthly to a parole officer.',
    relatedTerms: ['Probation', 'Recidivism', 'Sentencing', 'Good-Time Credits'],
  },
  {
    term: 'Probation',
    definition:
      'A sentencing alternative to incarceration in which a convicted offender is released into the community under court-imposed conditions and the supervision of a probation officer. Violation of probation conditions may result in revocation and imposition of the original suspended prison sentence.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge sentenced the first-time offender to three years of probation rather than prison, requiring community service and random drug testing.',
    relatedTerms: ['Parole', 'Sentencing', 'Suspended Sentence', 'Recidivism'],
  },
  {
    term: 'Habeas Corpus',
    definition:
      'Latin for "you shall have the body," a writ requiring a person detaining another to bring the detainee before a court to determine whether the detention is lawful. It is a fundamental safeguard against unlawful imprisonment and is available in both state and federal courts.',
    category: 'Criminal Law & Procedure',
    example:
      'The prisoner filed a habeas corpus petition arguing that his trial counsel was constitutionally ineffective, entitling him to a new trial.',
    relatedTerms: ['Due Process', 'Post-Conviction Relief', 'Ineffective Assistance of Counsel'],
  },
  {
    term: 'Due Process',
    definition:
      'The constitutional guarantee that the government may not deprive a person of life, liberty, or property without fair procedures (procedural due process) and without a legitimate governmental purpose proportionate to the burden imposed (substantive due process). In criminal law, due process requires notice of charges, a fair hearing, and an impartial tribunal.',
    category: 'Criminal Law & Procedure',
    example:
      'The court held that the defendant\'s due process rights were violated when the prosecution withheld exculpatory evidence.',
    relatedTerms: ['Brady Disclosure', 'Habeas Corpus', 'Fifth Amendment', 'Fourteenth Amendment'],
  },
  {
    term: 'Brady Disclosure',
    definition:
      'The constitutional obligation of the prosecution, derived from Brady v. Maryland (1963), to disclose to the defense any material evidence that is favorable to the accused, including exculpatory evidence and evidence that could be used to impeach government witnesses. Failure to disclose Brady material can result in reversal of a conviction.',
    category: 'Criminal Law & Procedure',
    example:
      'The conviction was overturned because the prosecutor had failed to disclose a Brady letter revealing that the key witness had a prior history of lying to police.',
    relatedTerms: ['Due Process', 'Exculpatory Evidence', 'Giglio Material', 'Prosecutorial Misconduct'],
  },
  {
    term: 'Burden of Proof',
    definition:
      'The obligation of a party to establish a fact or facts to a required standard of certainty. In criminal cases, the prosecution bears the burden of proving every element of the charged offense beyond a reasonable doubt; the defendant bears no burden to prove innocence.',
    category: 'Criminal Law & Procedure',
    example:
      'Because the prosecution failed to meet its burden of proof on the element of premeditation, the jury acquitted on first-degree murder but convicted on manslaughter.',
    relatedTerms: ['Beyond a Reasonable Doubt', 'Presumption of Innocence', 'Affirmative Defense'],
  },
  {
    term: 'Presumption of Innocence',
    definition:
      'The fundamental principle that a criminal defendant is presumed innocent until proven guilty beyond a reasonable doubt. The presumption places the entire burden of proof on the prosecution and requires that any reasonable doubt be resolved in favor of the defendant.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge instructed jurors that the presumption of innocence alone was sufficient to acquit unless the prosecution overcame it with proof beyond a reasonable doubt.',
    relatedTerms: ['Burden of Proof', 'Beyond a Reasonable Doubt', 'Acquittal'],
  },
  {
    term: 'Affirmative Defense',
    definition:
      'A defense in which the defendant admits the conduct alleged but asserts a legal justification or excuse that negates criminal liability. The defendant typically bears the burden of producing sufficient evidence to raise the defense, after which the prosecution must disprove it beyond a reasonable doubt in most jurisdictions.',
    category: 'Criminal Law & Procedure',
    example:
      'Insanity and self-defense are classic affirmative defenses; both require the defendant to introduce supporting evidence.',
    relatedTerms: ['Self-Defense', 'Entrapment', 'Insanity Defense', 'Duress'],
  },
  {
    term: 'Insanity Defense',
    definition:
      'An affirmative defense asserting that a defendant, due to a severe mental disease or defect, either did not understand the nature and quality of the criminal act or did not understand that the act was wrong. A successful insanity defense results in acquittal by reason of insanity rather than conviction.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant was found not guilty by reason of insanity and was committed to a secure psychiatric facility.',
    relatedTerms: ['Affirmative Defense', 'Mens Rea', 'Competency to Stand Trial'],
  },
  {
    term: 'Competency to Stand Trial',
    definition:
      'The legal standard requiring that a criminal defendant have a sufficient present ability to consult with counsel with a reasonable degree of rational understanding and a rational and factual understanding of the proceedings. An incompetent defendant may not be tried until competency is restored.',
    category: 'Criminal Law & Procedure',
    example:
      'The court ordered a psychiatric evaluation after defense counsel raised doubts about the defendant\'s competency to stand trial.',
    relatedTerms: ['Insanity Defense', 'Due Process', 'Sixth Amendment'],
  },
  {
    term: 'Suppression Hearing',
    definition:
      'A pretrial hearing at which a defendant seeks to exclude evidence from trial on the grounds that it was obtained in violation of constitutional rights. The judge evaluates the circumstances of the evidence\'s collection and rules on whether it is admissible.',
    category: 'Criminal Law & Procedure',
    example:
      'At the suppression hearing, the judge ruled that the defendant\'s confession was involuntary and must be excluded from trial.',
    relatedTerms: ['Exclusionary Rule', 'Fruit of the Poisonous Tree', 'Fourth Amendment', 'Miranda Rights'],
  },
  {
    term: 'Sentencing',
    definition:
      'The phase of a criminal proceeding following conviction in which the court imposes a penalty on the defendant. Sentences may include imprisonment, fines, probation, community service, restitution, or a combination thereof, guided by statutory ranges and judicial discretion.',
    category: 'Criminal Law & Procedure',
    example:
      'At the sentencing hearing, the judge considered the pre-sentence report and victim impact statements before imposing a seven-year term.',
    relatedTerms: ['Conviction', 'Probation', 'Parole', 'Mandatory Minimum'],
  },
  {
    term: 'Mandatory Minimum',
    definition:
      'A statute requiring a court to impose at least a specified minimum prison sentence upon conviction of a particular offense, regardless of mitigating circumstances. Mandatory minimums limit judicial discretion and are common in drug and firearms offenses.',
    category: 'Criminal Law & Procedure',
    example:
      'Federal law imposed a five-year mandatory minimum for possession of five grams of crack cocaine, leaving the judge no discretion to impose a lighter sentence.',
    relatedTerms: ['Sentencing', 'Felony', 'Plea Bargain'],
  },
  {
    term: 'Preliminary Hearing',
    definition:
      'A court proceeding, held before trial, at which a judge determines whether there is probable cause to believe the defendant committed the charged offense. If probable cause is found, the case proceeds; if not, the charges are dismissed.',
    category: 'Criminal Law & Procedure',
    example:
      'At the preliminary hearing, the magistrate found probable cause based on the arresting officer\'s testimony and bound the case over for trial.',
    relatedTerms: ['Probable Cause', 'Indictment', 'Information', 'Arraignment'],
  },
  {
    term: 'Change of Venue',
    definition:
      'The transfer of a criminal case from one jurisdiction to another, typically granted when pervasive pretrial publicity or community bias makes it impossible to empanel an impartial jury in the original location.',
    category: 'Criminal Law & Procedure',
    example:
      'Because the crime had dominated local news for months, the defense successfully moved for a change of venue to a neighboring county.',
    relatedTerms: ['Jury Selection', 'Impartial Jury', 'Sixth Amendment'],
  },
  {
    term: 'Voir Dire',
    definition:
      'The process of questioning prospective jurors to assess their impartiality and suitability to serve on a jury. Attorneys may challenge jurors "for cause" (unlimited, must show bias) or use a limited number of "peremptory challenges" (no reason required, but cannot be exercised on racial or gender grounds).',
    category: 'Criminal Law & Procedure',
    example:
      'During voir dire, the prosecutor struck a juror for cause after the juror admitted she believed all police officers lied under oath.',
    relatedTerms: ['Jury Selection', 'Peremptory Challenge', 'Impartial Jury', 'Batson Challenge'],
  },
  {
    term: 'Exculpatory Evidence',
    definition:
      'Evidence that tends to clear a defendant of fault or guilt. The prosecution is constitutionally required to disclose exculpatory evidence to the defense under Brady v. Maryland; failure to do so violates due process.',
    category: 'Criminal Law & Procedure',
    example:
      'The surveillance footage showing the defendant at a different location at the time of the crime was powerful exculpatory evidence.',
    relatedTerms: ['Brady Disclosure', 'Due Process', 'Burden of Proof'],
  },
  {
    term: 'Aggravating Circumstances',
    definition:
      'Factors that increase the severity of a crime or the culpability of the defendant, which may justify a harsher sentence. Common aggravating factors include prior criminal history, use of a weapon, vulnerability of the victim, or particular cruelty in commission of the crime.',
    category: 'Criminal Law & Procedure',
    example:
      'The judge cited aggravating circumstances—the victim was elderly and the attack was unprovoked—in imposing the maximum sentence.',
    relatedTerms: ['Sentencing', 'Mitigating Circumstances', 'Mandatory Minimum'],
  },
  {
    term: 'Mitigating Circumstances',
    definition:
      'Factors that do not excuse or justify a criminal act but may reduce the defendant\'s moral culpability and warrant a lesser sentence. Examples include lack of prior criminal history, mental illness, remorse, or cooperation with authorities.',
    category: 'Criminal Law & Procedure',
    example:
      'The defendant\'s troubled childhood and genuine remorse were presented as mitigating circumstances to argue for a reduced sentence.',
    relatedTerms: ['Aggravating Circumstances', 'Sentencing', 'Plea Bargain'],
  },
];

export default terms;
