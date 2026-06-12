import { CatalogCase } from './types';

export const CIVIL_TORT_CASES: CatalogCase[] = [
  // ===== CIVIL LITIGATION =====
  {
    id: 'palsgraf-v-long-island-railroad-co',
    name: 'Palsgraf v. Long Island Railroad Co.',
    citation: '248 N.Y. 339, 162 N.E. 99 (1928)',
    litigationTypeSlug: 'civil',
    litigationTypeName: 'Civil Litigation',
    court: 'New York Court of Appeals',
    jurisdiction: 'New York, United States',
    decisionDate: '1928-05-29',
    facts:
      "Helen Palsgraf was standing on a Long Island Railroad platform waiting for a train to Rockaway Beach. A man carrying a small package wrapped in newspaper ran to board a departing train, and two railroad employees — one on the train pulling him aboard and one on the platform pushing him from behind — dislodged the package. The package, which contained fireworks, fell onto the rails and exploded. The concussion from the explosion allegedly knocked over a set of scales at the other end of the platform, many feet away, which struck and injured Mrs. Palsgraf. Nothing about the package's appearance gave any notice that it contained explosives. Palsgraf sued the railroad for the negligence of its employees in handling the boarding passenger.",
    keyLegalIssues: [
      'Whether a defendant owes a duty of care to a plaintiff who is outside the zone of foreseeable danger',
      'Whether negligence toward one person can support liability to an unforeseeable third party',
      'The proper scope of proximate cause in negligence actions',
    ],
    plaintiffArguments:
      "Palsgraf argued that the railroad's employees acted negligently in pushing and pulling the boarding passenger, and that this negligence set in motion the chain of events that injured her. She contended that once a defendant commits a negligent act, it should be liable for all injuries that flow directly from that act, regardless of whether the particular victim was foreseeable. Her counsel emphasized that she was an innocent ticketed passenger lawfully on the platform and that the railroad, as a common carrier, owed her the highest duty of care.",
    defendantArguments:
      "The railroad argued that its employees could not have known the unmarked newspaper-wrapped package contained fireworks, so no harm to Palsgraf was foreseeable. It contended that negligence is relational — a duty must be owed to the particular plaintiff — and that any carelessness toward the boarding passenger was not a wrong to a woman standing far away. The railroad also argued the explosion and falling scales were extraordinary, unforeseeable consequences that broke any causal chain.",
    proceduralHistory:
      'Palsgraf won a jury verdict at trial in the Kings County Supreme Court, and the Appellate Division affirmed by a 3-2 vote. The Long Island Railroad appealed to the New York Court of Appeals, which reversed.',
    finalDecision:
      "The New York Court of Appeals reversed in a 4-3 decision authored by Chief Judge Benjamin Cardozo and dismissed the complaint. The court held that the railroad owed no duty to Palsgraf because she was outside the zone of foreseeable risk created by the employees' conduct.",
    judicialReasoning:
      "Cardozo famously wrote that 'the risk reasonably to be perceived defines the duty to be obeyed,' framing negligence as a relational concept rather than a wrong to the world at large. Because nothing in the package's appearance suggested danger, the guards' conduct, even if careless toward the package's owner, was not a wrong in relation to Palsgraf standing far away. Negligence 'in the air' is not actionable; the plaintiff must show a violation of a duty owed to her personally. Judge Andrews dissented, arguing that everyone owes the world a duty to refrain from acts that unreasonably threaten others, and that liability should turn on proximate cause as a matter of practical politics and policy rather than on duty. The majority's foreseeability framework prevailed and became the dominant American approach to duty.",
    legalStandards: [
      'Duty in negligence is defined by the zone of foreseeable risk (Cardozo view)',
      'Negligence requires a wrong in relation to the particular plaintiff, not negligence in the abstract',
      'Proximate cause as a limit on liability for remote consequences (Andrews dissent)',
    ],
    keyPrecedents: [
      'Heaven v. Pender, 11 Q.B.D. 503 (1883) — early articulation of a general duty of care',
      'Munsey v. Webb, 231 U.S. 150 (1913) — foreseeability of harm in carrier negligence',
    ],
    evidenceAnalysis:
      "The decisive evidentiary fact was the undisputed appearance of the package: a small bundle wrapped in newspaper that gave no hint of explosives, which made harm to a distant bystander unforeseeable as a matter of law. The plaintiff's evidence of the employees' physical mishandling of the passenger was credible but ultimately irrelevant under the majority's duty analysis. Evidence connecting the explosion to the falling scales was also thin — later commentators have questioned whether the concussion alone could have toppled them — but the court assumed causation and decided the case on duty. The weakness of any proof that the railroad knew or should have known of the package's contents doomed the claim.",
    alternativeOutcomes:
      "Had the package been visibly labeled as fireworks or had the guards known its contents, harm to nearby passengers would have been foreseeable and the railroad likely liable. If Judge Andrews's dissenting proximate-cause approach had commanded a majority, the jury verdict would probably have stood, and American tort law might have developed around causation rather than duty as the principal limiting doctrine.",
    lessonsLearned: [
      'Foreseeability of the plaintiff is a threshold requirement for duty in negligence',
      'A defendant is not liable to every person injured in a chain of events it sets in motion',
      'Framing an issue as duty (for the court) versus proximate cause (for the jury) can determine who decides the case',
      'Dissenting opinions can shape doctrine for decades even when they do not prevail',
    ],
    bestPractices: [
      'Plead and prove facts establishing that harm to this specific plaintiff was foreseeable',
      'Defense counsel should test whether the plaintiff falls within the zone of danger before contesting breach',
      'Develop the evidentiary record on what the defendant knew or should have known about the risk',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Palsgraf established the foreseeable-plaintiff rule that defines the scope of duty in American negligence law.',
    isFeatured: true,
    parties: [
      { id: 'palsgraf-plaintiff', name: 'Helen Palsgraf', role: 'PLAINTIFF', counsel: 'Matthew W. Wood' },
      { id: 'palsgraf-defendant', name: 'Long Island Railroad Co.', role: 'DEFENDANT', counsel: 'William McNamara and Joseph F. Keany' },
    ],
  },
  {
    id: 'macpherson-v-buick-motor-co',
    name: 'MacPherson v. Buick Motor Co.',
    citation: '217 N.Y. 382, 111 N.E. 1050 (1916)',
    litigationTypeSlug: 'civil',
    litigationTypeName: 'Civil Litigation',
    court: 'New York Court of Appeals',
    jurisdiction: 'New York, United States',
    decisionDate: '1916-03-14',
    facts:
      "Donald MacPherson purchased a Buick automobile from a retail dealer, not directly from Buick Motor Company. While he was driving the car, one of its wooden wheels collapsed because its spokes were made of defective wood, and MacPherson was thrown from the vehicle and injured. The defective wheel had been manufactured by a component supplier, but the evidence showed the defect could have been discovered by Buick through reasonable inspection, which Buick failed to perform. Buick sold the finished car to the dealer, who resold it to MacPherson. MacPherson sued Buick directly in negligence despite having no contract with the manufacturer.",
    keyLegalIssues: [
      'Whether a manufacturer owes a duty of care to remote purchasers with whom it has no privity of contract',
      "Whether the 'inherently dangerous' exception to the privity rule extends to products dangerous only if negligently made",
      'The scope of a manufacturer’s duty to inspect component parts supplied by others',
    ],
    plaintiffArguments:
      "MacPherson argued that an automobile, if negligently constructed, is a thing of danger whose use by persons other than the immediate buyer is plainly foreseeable. He contended Buick was responsible for the finished product it placed on the market and could not delegate its duty of inspection to the wheel supplier. He urged the court to abandon the rigid privity rule of Winterbottom v. Wright as unsuited to modern manufacturing and distribution through dealers.",
    defendantArguments:
      "Buick argued that under the established privity doctrine it owed contractual and tort duties only to its immediate purchaser, the dealer, and not to downstream consumers. It contended an automobile was not an 'inherently dangerous' article like poison or explosives, the narrow exception then recognized. Buick also argued it had bought the wheel from a reputable supplier and should not be liable for a component maker’s hidden defect.",
    proceduralHistory:
      'MacPherson obtained a jury verdict at trial, which the Appellate Division affirmed. Buick appealed to the New York Court of Appeals, which affirmed the judgment for MacPherson.',
    finalDecision:
      'The Court of Appeals, in an opinion by Judge Cardozo, affirmed the judgment for MacPherson. It held that a manufacturer of a product that is reasonably certain to place life and limb in peril if negligently made owes a duty of care to foreseeable users regardless of privity.',
    judicialReasoning:
      "Cardozo reinterpreted the line of 'inherently dangerous' cases, holding that the principle was not limited to things dangerous in their normal operation but extended to any product that becomes dangerous when negligently made, where the manufacturer knows it will be used by persons other than the buyer without new tests. An automobile traveling at speed plainly fits that description, and Buick knew the car would be resold by the dealer to a consumer. The duty therefore arose from foreseeability of harm, not from contract. Because the defect was discoverable on reasonable inspection and Buick was responsible for the finished product, it could not escape liability by pointing to its component supplier. The privity limitation of Winterbottom v. Wright was confined to its facts.",
    legalStandards: [
      'A manufacturer owes a duty of reasonable care to foreseeable users of its products, without privity',
      'Duty extends to products reasonably certain to endanger life if negligently made',
      'A manufacturer must reasonably inspect component parts incorporated into its finished product',
    ],
    keyPrecedents: [
      'Thomas v. Winchester, 6 N.Y. 397 (1852) — liability without privity for mislabeled poison',
      'Devlin v. Smith, 89 N.Y. 470 (1882) — scaffold builder liable to workers, not just contracting party',
      'Winterbottom v. Wright, 152 Eng. Rep. 402 (1842) — the privity rule that MacPherson confined',
    ],
    evidenceAnalysis:
      "The persuasive evidence was expert testimony that the wheel's wooden spokes were brittle and defective and that the defect would have been revealed by ordinary inspection before assembly, which Buick admitted it did not conduct on purchased wheels. Buick's reliance on the wheel supplier's reputation was a weak answer because the duty of final inspection rested with the assembler of the finished vehicle. Evidence of the accident itself — the wheel crumbling at modest speed on an ordinary road — corroborated a manufacturing defect rather than driver error, though Buick's counsel disputed the speed and road conditions with limited success.",
    alternativeOutcomes:
      'Had the court adhered strictly to privity, MacPherson would have been left to sue only the dealer, who lacked any practical ability to inspect wheels, and manufacturers would have remained insulated from consumer suits. If the defect had been genuinely undiscoverable by reasonable inspection, Buick likely would have prevailed even under the new duty rule, since liability remained negligence-based rather than strict.',
    lessonsLearned: [
      'Privity of contract is no longer a shield against negligence claims by foreseeable product users',
      'Final assemblers bear responsibility for inspecting components they incorporate',
      'Doctrinal exceptions can be generalized into new rules when the old rule no longer fits commercial reality',
      'MacPherson laid the conceptual groundwork for modern product liability law',
    ],
    bestPractices: [
      'Manufacturers should implement documented inspection and quality-control programs for supplied components',
      'Plaintiffs should plead foreseeability of use by persons beyond the immediate purchaser',
      'Counsel should trace the chain of distribution to identify every party with a duty of inspection',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'MacPherson abolished the privity requirement for negligence claims against manufacturers and founded modern product liability law.',
    isFeatured: false,
    parties: [
      { id: 'macpherson-plaintiff', name: 'Donald C. MacPherson', role: 'PLAINTIFF', counsel: 'Edgar T. Brackett' },
      { id: 'macpherson-defendant', name: 'Buick Motor Company', role: 'DEFENDANT', counsel: 'William Van Dyke' },
    ],
  },
  {
    id: 'liebeck-v-mcdonalds-restaurants',
    name: "Liebeck v. McDonald's Restaurants",
    citation: 'No. CV-93-02419, 1995 WL 360309 (N.M. Dist. Ct. 1994)',
    litigationTypeSlug: 'civil',
    litigationTypeName: 'Civil Litigation',
    court: 'Second Judicial District Court, Bernalillo County',
    jurisdiction: 'New Mexico, United States',
    decisionDate: '1994-08-18',
    facts:
      "Stella Liebeck, a 79-year-old woman, purchased a cup of coffee at a McDonald's drive-through in Albuquerque while a passenger in her grandson's parked car. While removing the lid to add cream and sugar, she spilled the coffee into her lap, where her sweatpants absorbed and held the liquid against her skin. The coffee, served at 180 to 190 degrees Fahrenheit per McDonald's policy, caused third-degree burns over six percent of her body, including her thighs and groin, requiring hospitalization for eight days and skin grafts. Liebeck initially sought only about $20,000 to cover her medical expenses, but McDonald's offered just $800. Discovery revealed more than 700 prior burn claims involving McDonald's coffee over the preceding decade.",
    keyLegalIssues: [
      'Whether coffee served at 180-190 degrees Fahrenheit was unreasonably dangerous and defective',
      "Whether McDonald's failed to adequately warn customers of the severity of the burn risk",
      'Whether punitive damages were warranted by willful or reckless conduct',
      "The application of comparative negligence to the plaintiff's handling of the cup",
    ],
    plaintiffArguments:
      "Liebeck argued that McDonald's deliberately served coffee 30 to 40 degrees hotter than home-brewed coffee, at temperatures capable of causing full-thickness burns in seconds, making the product defective and unreasonably dangerous as served. She presented evidence of more than 700 prior burn claims showing McDonald's knew of the hazard yet refused to lower the temperature or provide meaningful warnings. Her counsel emphasized that the small printed warning on the cup was inadequate to convey the risk of third-degree burns, and that punitive damages were needed to change corporate behavior.",
    defendantArguments:
      "McDonald's argued that customers buy coffee hot and want it hot, that its temperature complied with industry practice, and that the spill — not the temperature — caused the injury, making Liebeck herself responsible. It contended 700 claims were statistically trivial against billions of cups sold. McDonald's also argued that the warning on the cup adequately disclosed that the contents were hot and that hot coffee is an open and obvious hazard.",
    proceduralHistory:
      "Liebeck sued in New Mexico state court after McDonald's refused her pre-suit demand; a court-ordered mediation recommendation of $225,000 was rejected by McDonald's. The case proceeded to a jury trial in August 1994. After the verdict, the trial judge reduced the punitive award, and the parties settled confidentially while post-trial proceedings were pending.",
    finalDecision:
      'The jury found McDonald’s liable, awarding $200,000 in compensatory damages reduced to $160,000 for Liebeck’s 20 percent comparative fault, plus $2.7 million in punitive damages representing roughly two days of McDonald’s coffee revenue. The trial judge remitted the punitive award to $480,000 (three times compensatories), and the parties later settled for an undisclosed amount.',
    judicialReasoning:
      "The jury concluded that coffee served at 180-190 degrees was unreasonably dangerous because it could cause third-degree burns in two to seven seconds, far faster than consumers would expect, and that the cup's warning was insufficient in size and substance. The 700 prior claims persuaded jurors that McDonald's acted with conscious indifference, supporting punitive damages under New Mexico's willful-and-reckless standard. In remitting the punitive award, Judge Robert Scott nonetheless described McDonald's conduct as willful, wanton, and reckless, affirming the liability findings while applying a proportionality check tying punitives to three times compensatory damages.",
    legalStandards: [
      'Strict product liability for products that are unreasonably dangerous as sold',
      'Adequacy of warnings measured against the severity and speed of the risk',
      'Punitive damages for willful, wanton, or reckless corporate conduct',
      'Comparative negligence apportionment under New Mexico law',
    ],
    keyPrecedents: [
      'Restatement (Second) of Torts § 402A — strict liability for defective products',
      'Stang v. Hertz Corp., 83 N.M. 730 (1972) — adoption of strict product liability in New Mexico',
    ],
    evidenceAnalysis:
      "The most persuasive evidence was medical: photographs of Liebeck's third-degree burns and skin grafts shocked jurors who had assumed the case was frivolous, and burn experts testified that liquid at 180 degrees destroys full-thickness skin in seconds. The 700 prior claims and testimony from McDonald's own quality-assurance manager — who conceded the coffee was not fit for consumption at serving temperature because it would burn the mouth and throat, and that the company had no intention of lowering it — were devastating admissions. McDonald's industry-practice defense was weakened by evidence that other establishments served coffee substantially cooler, and its tiny cup warning looked inadequate next to the injury photos.",
    alternativeOutcomes:
      "Had McDonald's accepted Liebeck's initial $20,000 demand or the mediator's $225,000 recommendation, the case would never have become a national story. If the jury had found Liebeck more than 50 percent at fault for spilling the cup between her knees, New Mexico comparative-fault principles could have barred or drastically cut recovery, and without the prior-claims evidence punitive damages would likely have been unavailable.",
    lessonsLearned: [
      'A documented history of similar injuries is powerful evidence of conscious corporate indifference',
      'Rejecting reasonable settlement demands can convert a small claim into a punitive verdict',
      'Graphic injury evidence can transform public and jury perception of a seemingly trivial claim',
      'Warnings must match the true severity of the hazard, not merely state the obvious',
    ],
    bestPractices: [
      'Corporations should track and act on patterns of consumer injury claims',
      'Evaluate settlement exposure realistically, including punitive risk, before refusing modest demands',
      'Design warnings proportionate to the latent severity of the risk, not just its existence',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      "Liebeck became the most famous — and most misunderstood — punitive damages verdict in American history, shaping the tort reform debate.",
    isFeatured: false,
    parties: [
      { id: 'liebeck-plaintiff', name: 'Stella Liebeck', role: 'PLAINTIFF', counsel: 'S. Reed Morgan and Kenneth R. Wagner' },
      { id: 'liebeck-defendant', name: "McDonald's Restaurants, P.T.S., Inc. and McDonald's International, Inc.", role: 'DEFENDANT', counsel: 'Tracy McGee of Rodey, Dickason, Sloan, Akin & Robb' },
    ],
  },
  {
    id: 'tarasoff-v-regents-of-university-of-california',
    name: 'Tarasoff v. Regents of the University of California',
    citation: '17 Cal. 3d 425, 551 P.2d 334 (1976)',
    litigationTypeSlug: 'civil',
    litigationTypeName: 'Civil Litigation',
    court: 'Supreme Court of California',
    jurisdiction: 'California, United States',
    decisionDate: '1976-07-01',
    facts:
      "Prosenjit Poddar, a graduate student at UC Berkeley, became obsessed with Tatiana Tarasoff after she rebuffed his romantic interest. During voluntary outpatient psychotherapy at the university's Cowell Memorial Hospital, Poddar told his psychologist, Dr. Lawrence Moore, that he intended to kill an unnamed but readily identifiable girl — Tatiana — when she returned from a trip to Brazil. Dr. Moore notified campus police, who briefly detained Poddar but released him when he appeared rational, and Moore's superior directed that no further action be taken and that the detention letter be destroyed. No one warned Tatiana or her family. Two months later, in October 1969, Poddar went to Tatiana's home and stabbed her to death. Her parents sued the therapists, the campus police, and the Regents.",
    keyLegalIssues: [
      'Whether a psychotherapist owes a duty to protect third parties threatened by a patient',
      'Whether the special relationship between therapist and patient supports a duty to warn identifiable victims',
      'Whether therapist-patient confidentiality and governmental immunity bar liability',
    ],
    plaintiffArguments:
      "The Tarasoffs argued that the therapists knew or should have known Poddar posed a serious danger of violence to Tatiana, an identifiable victim, and that reasonable care required warning her or her family. They contended the therapist-patient relationship is a special relationship that supports a duty running to foreseeable victims, analogous to a physician's duty to warn those endangered by a contagious patient. They argued that confidentiality must yield where the public peril begins.",
    defendantArguments:
      'The defendants argued that therapists owe duties only to their patients, not to third parties, and that predictions of dangerousness are inherently unreliable, making any duty to warn unworkable. They contended that imposing such a duty would destroy the confidentiality essential to effective psychotherapy and deter dangerous patients from seeking treatment. They also invoked statutory governmental immunities for discretionary acts and for decisions about confining persons for mental illness.',
    proceduralHistory:
      "The trial court sustained demurrers and dismissed the complaint, and the Court of Appeal affirmed. The California Supreme Court first reversed in 1974 (Tarasoff I), recognizing a duty to warn, then granted rehearing and issued its 1976 opinion (Tarasoff II) reframing the obligation as a duty to use reasonable care to protect the foreseeable victim.",
    finalDecision:
      'The California Supreme Court held that when a therapist determines, or under professional standards should determine, that a patient presents a serious danger of violence to another, the therapist incurs an obligation to use reasonable care to protect the intended victim — by warning the victim or others, notifying police, or taking other reasonably necessary steps. The plaintiffs were permitted to proceed against the therapists, though the police defendants and certain immunity claims were resolved in defendants’ favor.',
    judicialReasoning:
      "Justice Tobriner's majority opinion, famously declaring that 'the protective privilege ends where the public peril begins,' reasoned that the therapist-patient relationship is a special relationship under Restatement section 315 sufficient to support a duty to third persons. Foreseeability of harm to an identifiable victim was the key factor under the Rowland v. Christian duty analysis, outweighing the burdens on confidentiality and the difficulty of predicting violence. The court held therapists need only exercise the reasonable degree of skill and care of their profession in predicting dangerousness, accommodating professional uncertainty. It rejected blanket immunity, holding the decision not to warn was not a basic policy decision shielded by Government Code section 820.2.",
    legalStandards: [
      'Special relationship doctrine under Restatement (Second) of Torts §§ 315-320',
      'Rowland v. Christian multi-factor duty analysis (foreseeability, burden, policy)',
      'Professional standard of care for predicting patient dangerousness',
    ],
    keyPrecedents: [
      'Rowland v. Christian, 69 Cal. 2d 108 (1968) — California’s general duty framework',
      'Restatement (Second) of Torts § 315 — duty to control conduct of third persons via special relationship',
      'Merchants National Bank & Trust Co. v. United States, 272 F. Supp. 409 (D.N.D. 1967) — liability for releasing a dangerous psychiatric patient',
    ],
    evidenceAnalysis:
      "The allegations most damaging to the defendants were Poddar's explicit, specific threat communicated directly to his therapist and Dr. Moore's own conduct — notifying campus police and seeking commitment — which demonstrated that he actually believed Poddar dangerous, undercutting any argument that the danger was unforeseeable. The superior's order to destroy Moore's letter and take no further action suggested institutional concealment. The defendants' strongest point, the unreliability of dangerousness predictions, was weak on these facts precisely because no prediction was needed: the threat was explicit and the victim identifiable.",
    alternativeOutcomes:
      'Had Poddar threatened violence against no identifiable person, California courts would later hold (Thompson v. County of Alameda) that no warning duty arises, so the Tarasoffs likely would have lost. If the court had retained the pure duty-to-warn formulation of Tarasoff I rather than the broader duty-to-protect, therapists would have less flexibility but clearer obligations, and many state statutes later codified exactly that narrower warning duty.',
    lessonsLearned: [
      'Therapist-patient confidentiality yields to the protection of identifiable third parties in serious danger',
      'A professional’s own protective actions can establish that the danger was foreseeable to them',
      'Special relationships can generate affirmative duties to act for the benefit of strangers to the relationship',
      'Institutions should never suppress or destroy records of risk assessments',
    ],
    bestPractices: [
      'Mental health providers should adopt written protocols for assessing and responding to patient threats',
      'Document threat assessments contemporaneously and preserve all records',
      'When a serious threat names an identifiable victim, warn the victim and notify law enforcement',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      "Tarasoff created the therapist's duty to protect identifiable third parties from dangerous patients, now codified in most states.",
    isFeatured: false,
    parties: [
      { id: 'tarasoff-plaintiff', name: 'Vitaly and Lydia Tarasoff (parents of Tatiana Tarasoff)', role: 'PLAINTIFF', counsel: 'Daniel U. Smith and Valerie McGinty (plaintiff’s appellate team led by Donald Magaña)' },
      { id: 'tarasoff-defendant', name: 'Regents of the University of California, Dr. Lawrence Moore, et al.', role: 'DEFENDANT', counsel: 'Thomas J. McDonald and the UC General Counsel’s office' },
    ],
  },
  {
    id: 'vosburg-v-putney',
    name: 'Vosburg v. Putney',
    citation: '80 Wis. 523, 50 N.W. 403 (1891)',
    litigationTypeSlug: 'civil',
    litigationTypeName: 'Civil Litigation',
    court: 'Supreme Court of Wisconsin',
    jurisdiction: 'Wisconsin, United States',
    decisionDate: '1891-11-17',
    facts:
      "In a Waukesha, Wisconsin schoolroom in February 1889, after the class had been called to order, eleven-year-old George Putney reached across the aisle and lightly kicked fourteen-year-old Andrew Vosburg on the shin. The touch was so slight Vosburg did not feel it at first, but minutes later he felt violent pain. Unknown to Putney, Vosburg's leg was already weakened from a prior injury and infection, and the kick aggravated the condition, ultimately destroying the bone and leaving Vosburg with permanent loss of the use of his leg. Vosburg sued Putney for battery, seeking damages for the full extent of the injury despite the triviality of the contact.",
    keyLegalIssues: [
      'Whether battery requires intent to harm or merely intent to make an unlawful contact',
      'Whether implied license excuses contacts customary on a playground but not in a classroom in session',
      'Whether a defendant is liable for unforeseeable consequences of an intentional tort (eggshell plaintiff)',
    ],
    plaintiffArguments:
      'Vosburg argued that Putney intentionally touched him without consent or lawful justification, and that the intent required for battery is the intent to commit the contact, not an intent to cause injury. Because the classroom had been called to order, no implied license of playground horseplay applied, making the kick unlawful. He contended that a wrongdoer takes his victim as he finds him and is liable for all consequences flowing from the unlawful act, however unexpected.',
    defendantArguments:
      "Putney argued that the kick was a trivial, playful touch between schoolboys with no intent to harm and no anticipation of any injury, and that schoolyard custom implied consent to such contacts. He contended that liability for catastrophic, unforeseeable consequences of a harmless touch was unjust, and that Vosburg's pre-existing infection — not the kick — was the true cause of his disability.",
    proceduralHistory:
      'Vosburg won a first jury verdict of $2,800, which was reversed on appeal for evidentiary error. On retrial he recovered $2,500, and Putney again appealed to the Wisconsin Supreme Court, which reversed and remanded once more on an evidentiary point while announcing the governing substantive rules.',
    finalDecision:
      'The Wisconsin Supreme Court held that the plaintiff needed to show only that the intended contact was unlawful — not that the defendant intended harm — and that the defendant was liable for all resulting damage even if unforeseeable. The judgment was nonetheless reversed and remanded because of an error in admitting certain expert testimony.',
    judicialReasoning:
      "The court reasoned that in an action for assault and battery, the plaintiff must show either that the intention was unlawful or that the defendant is at fault; if the intended act is unlawful, the intention to commit it must necessarily be unlawful. Because the kick occurred after the class was called to order, the implied license of the playground did not apply, and the touching was unlawful regardless of Putney's benign motive. On damages, the court adopted the rule that the wrongdoer is liable for all injuries resulting directly from the wrongful act, whether or not they could have been foreseen — the foundation of the eggshell-skull doctrine. The reversal rested narrowly on a hypothetical question put to a medical expert that assumed facts not in evidence.",
    legalStandards: [
      'Battery requires intent to make an unlawful or unconsented contact, not intent to injure',
      'Eggshell plaintiff rule: the tortfeasor takes the victim as he finds him',
      'Implied license/consent judged by the context and customs of the setting',
    ],
    keyPrecedents: [
      'Brown v. Kendall, 60 Mass. 292 (1850) — fault framework for unintentional contacts',
      'Cole v. Fisher, 11 Mass. 137 (1814) — liability for direct consequences of wrongful acts',
    ],
    evidenceAnalysis:
      "The medical evidence was the heart of the case: physicians testified that the kick aggravated a latent infection in the bone, linking a trivial touch to a devastating outcome, and the jury specifically found the kick was the exciting cause of the injury while also finding Putney intended no harm. That special verdict — no intent to harm, yet liability — is what made the case a teaching classic. The defense's causation attack on the pre-existing condition failed because aggravation suffices. The case nonetheless turned on appeal on a flawed hypothetical question to an expert, showing how fragile expert testimony can make even a winning record.",
    alternativeOutcomes:
      'Had the kick occurred on the playground during recess, the implied license of schoolboy games would likely have defeated the claim entirely. If Wisconsin had required intent to injure for battery, Putney would have prevailed on the jury’s express finding that he meant no harm, and the eggshell-skull rule would have had a different doctrinal home.',
    lessonsLearned: [
      'Intent in battery attaches to the contact, not the consequences',
      'Context determines consent: the same touch may be licensed at recess and tortious in class',
      'Defendants bear the full cost of harm to unusually vulnerable plaintiffs',
      'Improperly framed hypothetical questions to experts can unravel a verdict',
    ],
    bestPractices: [
      'Frame expert hypotheticals strictly on facts in evidence',
      'Plead aggravation of pre-existing conditions explicitly in damages claims',
      'Analyze the setting and customs of the encounter when evaluating consent defenses',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Vosburg is the canonical case establishing that battery requires only intent to make an unlawful contact and that tortfeasors take their victims as they find them.',
    isFeatured: false,
    parties: [
      { id: 'vosburg-plaintiff', name: 'Andrew Vosburg', role: 'PLAINTIFF', counsel: 'T.W. Haight' },
      { id: 'vosburg-defendant', name: 'George Putney', role: 'DEFENDANT', counsel: 'Ryan & Merton' },
    ],
  },
];
