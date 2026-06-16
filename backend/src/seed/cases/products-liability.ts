import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'products-liability',
    name: 'Greenman v. Yuba Power Products, Inc.',
    citation: '59 Cal. 2d 57, 377 P.2d 897 (1963)',
    jurisdiction: 'California',
    court: 'Supreme Court of California',
    year: 1963,
    isFeatured: true,
    outcome: 'Plaintiff Victory',
    facts:
      'William Greenman received a Shopsmith combination power tool as a Christmas gift in 1955. After using the tool for woodturning on several occasions without incident, a piece of wood flew out of the tool and struck Greenman in the head, causing serious injuries. Greenman sued both the retailer and Yuba Power Products, the manufacturer, approximately ten and a half months after he discovered that the set screws holding the tailstock were insufficient to withstand the forces generated during operation. Expert testimony established that the mechanism was defective in design and construction, as the set screws were inadequate to keep the tailstock in place under normal operating conditions. The trial court granted a nonsuit in favor of the retailer but allowed the claim against the manufacturer to proceed to verdict.',
    keyLegalIssues: [
      'Whether strict liability in tort applies to manufacturers of defective products that cause personal injury',
      'Whether privity of contract is required to recover for injuries caused by a defective product',
      'Whether warranty notice requirements bar a personal-injury tort claim against a manufacturer',
      'What duty of care a manufacturer owes to the ultimate consumer of its product',
    ],
    plaintiffArguments:
      'Greenman argued that the Shopsmith was defective in its construction and design because the set screws used to hold the tailstock were inadequate to prevent it from moving under the vibration and force of normal use. He contended that a manufacturer who places a defective article on the market should be strictly liable for injuries caused by that defect, regardless of whether the injured party provided timely notice under warranty law. Greenman maintained that imposing a negligence or warranty framework unfairly disadvantaged consumers who lacked the technical expertise to detect latent manufacturing defects. He further argued that placing the cost of defect-related injuries on manufacturers would incentivize safer product design and manufacture.',
    defendantArguments:
      'Yuba Power Products argued that Greenman had failed to give timely notice of the breach of warranty as required by California commercial law, thereby barring his warranty claim. The manufacturer contended that it had exercised reasonable care in the design and manufacture of the Shopsmith and therefore could not be held liable under a negligence theory. Yuba also argued that strict liability in tort had no recognized basis in California law and that courts should not depart from the established negligence and warranty frameworks governing product injuries. The company maintained that expanding manufacturer liability without fault would place an undue economic burden on American industry.',
    proceduralHistory:
      'Greenman filed suit in the Superior Court of Santa Clara County, alleging causes of action in both warranty and negligence. The trial court granted a nonsuit as to the retailer but the case against Yuba Power Products went to the jury, which returned a verdict of $65,000 for the plaintiff. The California Court of Appeal affirmed, and the California Supreme Court granted review to address the foundational question of whether strict tort liability applied to product manufacturers.',
    finalDecision:
      'The California Supreme Court unanimously affirmed the judgment for Greenman, holding that a manufacturer is strictly liable in tort when an article it places on the market proves to have a defect that causes injury to a human being. The court eliminated the need to prove negligence or to satisfy warranty notice requirements in personal-injury product cases, establishing strict liability as an independent doctrine rooted in tort law.',
    judicialReasoning:
      'Justice Roger Traynor, writing for the court, reasoned that the purpose of strict liability in tort is to ensure that the costs of injuries resulting from defective products are borne by the manufacturers who put such products on the market rather than by the injured persons who are powerless to protect themselves. Traynor observed that the negligence and warranty frameworks had proved inadequate to protect consumers because proof of negligence was often impossible and warranty notice requirements were technical hurdles unrelated to the merits of an injury claim. The court drew on Traynor\'s own earlier concurrence in Escola v. Coca-Cola Bottling Co. and on the Restatement of Torts to hold that manufacturers\' strict liability did not depend on privity or contractual notice. Traynor emphasized that the manufacturer, by placing the product in the stream of commerce with an implied representation that it is safe for ordinary use, is in the best position to prevent defects and to spread the cost of resulting injuries through pricing and insurance. The decision deliberately separated strict products liability from contract warranty doctrine, grounding it firmly in tort principles.',
    legalStandards: [
      'Strict liability in tort for manufacturers of defective products (Restatement (Second) of Torts Section 402A)',
      'Consumer expectation standard: a product is defective if it fails to perform as safely as an ordinary consumer would expect',
      'No privity requirement for personal-injury tort claims against manufacturers',
      'Elimination of warranty notice requirements in personal-injury strict-liability actions',
    ],
    keyPrecedents: [
      'Escola v. Coca-Cola Bottling Co. of Fresno, 24 Cal. 2d 453 (1944) (Traynor, J., concurring)',
      'MacPherson v. Buick Motor Co., 217 N.Y. 382 (1916)',
      'Restatement (Second) of Torts Section 402A (adopted shortly after this decision)',
    ],
    evidenceAnalysis:
      'Expert testimony at trial demonstrated that the set screws securing the tailstock on the Shopsmith were inadequate in size and number to withstand the lateral forces generated during normal woodturning operations. The plaintiff introduced the defective unit itself as physical evidence, and engineering experts testified that the design specifications deviated from industry standards for similar machinery. Evidence of the mechanism\'s failure under ordinary use conditions was central to establishing the defect, and the jury credited the expert accounts over the manufacturer\'s contention that the tool had been misused.',
    alternativeOutcomes:
      'Had the court upheld the warranty notice requirement, Greenman would have recovered nothing despite his serious injury because his notice was filed more than ten months after purchase, exceeding the then-applicable reasonable-time standard. Had the court required proof of manufacturer negligence, Greenman would have faced the near-impossible task of demonstrating a specific lapse in the production process, an evidentiary burden that historically defeated most consumer injury claims.',
    lessonsLearned: [
      'Strict liability removes the consumer\'s burden of proving manufacturer negligence, making product-injury litigation more accessible to injured parties',
      'Manufacturers bear the economic incentive to invest in safer product design when liability is not fault-dependent',
      'Tort law can develop independent doctrines even where contract law already addresses a subject, when policy considerations demand it',
      'A single judicial opinion can reshape an entire field of law, as Greenman did for products liability across the United States',
    ],
    bestPractices: [
      'Manufacturers should conduct rigorous design and safety testing before placing products in the stream of commerce',
      'Legal teams should evaluate both warranty and strict-liability theories when advising product-injury plaintiffs',
      'Defense counsel for manufacturers should document quality-control processes to mitigate risk even though fault is not formally at issue under strict liability',
      'Plaintiffs\' counsel should secure expert engineering testimony early to establish the existence and nature of the alleged defect',
    ],
    significance:
      'Greenman v. Yuba Power Products is the foundational American products liability decision. It established strict liability in tort as the governing standard for manufacturer liability for defective products, replacing the patchwork of negligence and warranty theories that had previously failed to protect consumers. The decision was adopted almost immediately by the American Law Institute in Restatement (Second) of Torts Section 402A (1965), which in turn was adopted in virtually every American jurisdiction. Greenman shifted the landscape of products litigation for sixty years, spawning an entire body of law governing design defects, manufacturing defects, and failure to warn. It is universally cited in first-year torts courses as the seminal statement of strict products liability and continues to inform legislative and judicial development of the doctrine worldwide.',
    parties: [
      {
        name: 'William Greenman',
        role: 'PLAINTIFF',
        counsel: 'Not prominently recorded in published opinion',
        description: 'Consumer injured by defective power tool during ordinary use',
      },
      {
        name: 'Yuba Power Products, Inc.',
        role: 'DEFENDANT',
        description: 'Manufacturer of the Shopsmith combination power tool',
      },
    ],
  },
  {
    litigationSlug: 'products-liability',
    name: 'Grimshaw v. Ford Motor Co.',
    citation: '119 Cal. App. 3d 757, 174 Cal. Rptr. 348 (1981)',
    jurisdiction: 'California',
    court: 'California Court of Appeal, Fourth Appellate District',
    year: 1981,
    isFeatured: false,
    outcome: 'Plaintiff Victory',
    facts:
      'In May 1972, Lilly Gray purchased a new Ford Pinto and shortly thereafter was driving it on a California highway when the vehicle stalled and was struck from behind by another car traveling at approximately 28 to 37 miles per hour. The Pinto\'s fuel tank, located only nine to ten inches from the rear bumper, ruptured on impact and ignited a fire that engulfed the passenger compartment. Gray died of carbon monoxide poisoning, and her passenger, thirteen-year-old Richard Grimshaw, sustained catastrophic burns over approximately 90 percent of his body, requiring numerous surgeries and permanent disfigurement. Internal Ford documents revealed that company engineers had identified the fuel-tank design as dangerous before production, estimated the cost of a one-dollar safety bladder fix that would have prevented rupture, and conducted a cost-benefit analysis concluding that the economic cost of modifying the design exceeded the projected payout for anticipated deaths and injuries. Ford had decided to proceed with the defective design without modification.',
    keyLegalIssues: [
      'Whether the Ford Pinto\'s fuel-tank design constituted a design defect under the consumer expectation and risk-utility tests',
      'Whether Ford\'s internal cost-benefit memoranda were admissible to establish corporate malice for punitive damages',
      'Whether punitive damages may be awarded against a manufacturer whose conduct involves conscious disregard for consumer safety',
      'What standard governs the constitutionality and proportionality of punitive damage awards in product-liability cases',
    ],
    plaintiffArguments:
      'Grimshaw and the Gray estate argued that Ford\'s placement of the Pinto\'s fuel tank between the rear bumper and the axle, with minimal structural protection, created an unreasonable risk of rupture and fire in even moderate-speed rear-end collisions. Plaintiffs introduced Ford\'s own internal memoranda, including the now-infamous cost-benefit analysis attributing a dollar value to human lives, to demonstrate that the decision to forego the safety modification was made with conscious disregard for the safety of Pinto occupants. They argued this corporate indifference to known risk warranted both compensatory and substantial punitive damages to deter similar conduct. Counsel emphasized that Ford had the technical means to correct the defect at minimal cost but chose profit over consumer safety.',
    defendantArguments:
      'Ford argued that the Pinto met all applicable federal safety standards in effect at the time of manufacture and that compliance with regulatory requirements should shield the company from liability. The company contended that its engineers had followed standard industry design practices and that the internal memoranda were routine cost-benefit analyses used in product-planning contexts throughout the industry, not evidence of malice. Ford maintained that the collision forces exceeded the speed parameters for which the Pinto was designed and that the plaintiff had mischaracterized the purpose and scope of the internal documents. The company also challenged the $125 million punitive damage award as grossly excessive and disproportionate to compensatory damages.',
    proceduralHistory:
      'The Gray estate and Grimshaw filed separate suits in Orange County Superior Court, which were consolidated for trial. The jury returned a verdict awarding Grimshaw approximately $2.5 million in compensatory damages and $125 million in punitive damages, and awarding the Gray estate approximately $560,000 in compensatory damages. The trial court reduced the punitive award to $3.5 million on remittitur. Ford appealed, challenging the design-defect finding, the admissibility of the internal memoranda, and the punitive damages award.',
    finalDecision:
      'The California Court of Appeal affirmed the judgment in all material respects, upholding the design-defect finding under both the consumer expectation and risk-utility tests and holding that the internal cost-benefit memoranda were properly admitted as evidence of Ford\'s state of mind for purposes of punitive damages. The court upheld the reduced punitive damage award of $3.5 million, finding it supported by Ford\'s malicious and oppressive corporate conduct.',
    judicialReasoning:
      'The court applied California\'s dual test for design defects, finding that the Pinto\'s fuel-tank configuration failed both the consumer expectation standard, because ordinary consumers do not expect a car to burst into flames from a moderate rear-end impact, and the risk-utility test under Barker v. Lull Engineering Co., because the risks of the design outweighed its benefits given the availability of a low-cost corrective fix. The court held that Ford\'s internal documents demonstrated that the company had actual knowledge of the fuel-tank hazard and made a deliberate business decision to accept the risk of death and injury rather than incur the cost of a remedy. This constituted the malice and oppression required to sustain punitive damages under California Civil Code Section 3294. The court reasoned that punitive damages serve the critical social function of deterring corporate defendants from treating safety expenditures as mere profit-and-loss variables, and that the award was proportionate given Ford\'s enormous revenues. The opinion also addressed evidentiary issues regarding expert testimony on accident reconstruction and the admissibility of post-production design changes.',
    legalStandards: [
      'Risk-utility balancing test for design defects as articulated in Barker v. Lull Engineering Co., 20 Cal. 3d 413 (1978)',
      'Consumer expectation standard for design defects',
      'Punitive damages for corporate malice under California Civil Code Section 3294',
      'Admissibility of corporate internal documents to prove conscious disregard for consumer safety',
    ],
    keyPrecedents: [
      'Barker v. Lull Engineering Co., 20 Cal. 3d 413 (1978)',
      'Greenman v. Yuba Power Products, Inc., 59 Cal. 2d 57 (1963)',
      'Li v. Yellow Cab Co., 13 Cal. 3d 804 (1975)',
    ],
    evidenceAnalysis:
      'The most consequential evidence was Ford\'s internal "Fatalities Associated with Crash-Induced Fuel Leakage and Fires" memorandum, commonly called the Pinto memo, which calculated that retrofitting all Pintos with an $11 safety improvement would cost $137 million while the projected cost of injuries and deaths without the fix was only $49.5 million. Crash test data introduced at trial demonstrated that the Pinto\'s fuel tank routinely ruptured at collision speeds as low as 25 miles per hour. Plaintiffs also presented engineering expert testimony establishing that alternative fuel-tank placements used by other manufacturers substantially reduced fire risk in comparable collisions. The physical evidence of the crash scene and the victims\' medical records documenting the severity of their injuries were central to the jury\'s large compensatory award.',
    alternativeOutcomes:
      'Had the trial court excluded the internal cost-benefit memoranda, plaintiffs would likely have been limited to compensatory damages and would have faced a substantially harder task proving design defect without Ford\'s own admissions. Had Ford\' complied with its engineers\' earlier recommendations to reposition the fuel tank or install a protective bladder, the Gray-Grimshaw accident might have produced no fire and no litigation, illustrating how a minimal safety investment could have avoided catastrophic liability.',
    lessonsLearned: [
      'Internal corporate documents reflecting deliberate cost-benefit trade-offs against consumer safety constitute powerful evidence of malice supporting punitive damages',
      'Regulatory compliance does not immunize a manufacturer from strict products liability when the product\'s design is independently unreasonable',
      'Punitive damages serve a deterrence function that compensatory damages alone cannot fulfill when corporate misconduct is systematic',
      'The Ford Pinto case transformed corporate risk-management practices, prompting manufacturers to treat internal safety analyses with legal privilege concerns in mind',
    ],
    bestPractices: [
      'Manufacturers should treat safety-related internal analyses as potential litigation documents and ensure that decisions not to implement a safety measure are made with rigorous technical, not merely financial, justification',
      'Plaintiffs\' counsel should pursue discovery of corporate internal communications and design-review files as a priority in design-defect cases',
      'Defense counsel should advise corporate clients that punitive damages exposure transforms routine negligence cases into existential litigation risk',
      'Companies should subject safety-critical design decisions to independent engineering review to guard against motivated reasoning in cost-benefit analyses',
    ],
    significance:
      'Grimshaw v. Ford Motor Co. is the paradigmatic case for punitive damages in products liability and for the role of corporate documents in establishing malicious indifference to consumer safety. The Ford Pinto memo became a symbol of corporate disregard for human life and is studied in every major American business ethics and torts curriculum. The case prompted federal recall investigations, triggered National Highway Traffic Safety Administration rulemaking on fuel-system integrity, and fundamentally altered how American manufacturers approach internal safety documentation. It demonstrated that juries would hold corporations accountable for actuarial decisions that trade human safety for profit, and it validated the use of punitive damages as a systemic deterrent in mass product-defect litigation. The case remains the leading American authority on the interplay between design-defect doctrine and punitive damages.',
    parties: [
      {
        name: 'Richard Grimshaw',
        role: 'PLAINTIFF',
        counsel: 'Ben Kelley and team (prominent consumer safety advocates assisted)',
        description: 'Thirteen-year-old passenger catastrophically burned in Pinto fuel-tank fire',
      },
      {
        name: 'Estate of Lilly Gray',
        role: 'PLAINTIFF',
        description: 'Estate of driver who died of carbon monoxide poisoning in the same collision',
      },
      {
        name: 'Ford Motor Company',
        role: 'DEFENDANT',
        counsel: 'Murchison & Cumming (trial); Ford in-house counsel',
        description: 'Manufacturer of the defectively designed Ford Pinto automobile',
      },
    ],
  },
  {
    litigationSlug: 'products-liability',
    name: 'Escola v. Coca-Cola Bottling Co. of Fresno',
    citation: '24 Cal. 2d 453, 150 P.2d 436 (1944)',
    jurisdiction: 'California',
    court: 'Supreme Court of California',
    year: 1944,
    isFeatured: false,
    outcome: 'Plaintiff Victory',
    facts:
      'Gladys Escola was a waitress employed at a restaurant in Tulare County, California. While loading Coca-Cola bottles into a restaurant refrigerator, one of the bottles exploded in her hand, severing blood vessels and nerves and causing permanent injury to her thumb and index finger. The bottles had been delivered by the Coca-Cola Bottling Company of Fresno approximately thirty-six hours before the accident and had remained undisturbed in a case until Escola began restocking them. There was no evidence that anyone had tampered with the bottles or that Escola had mishandled them. Expert testimony indicated that the bottle had shattered due to excessive internal pressure or a defect in the glass, both of which would be the result of conditions existing at the time of manufacture or bottling.',
    keyLegalIssues: [
      'Whether the doctrine of res ipsa loquitur applies to allow an inference of negligence when a bottled beverage explodes without apparent external cause',
      'Whether exclusive control by the defendant at the time of the alleged negligence is required for res ipsa loquitur when the product has passed to an intermediary',
      'Whether manufacturers should be held strictly liable for injuries caused by their defective products even absent proof of specific negligence',
      'What evidentiary showing suffices to submit a product-injury claim to the jury under res ipsa loquitur',
    ],
    plaintiffArguments:
      'Escola argued that the explosion of the Coca-Cola bottle under normal handling conditions was the type of accident that ordinarily does not occur in the absence of negligence, satisfying the first element of res ipsa loquitur. She contended that although the bottle had left the bottler\'s exclusive control before the accident, the absence of any evidence of tampering or mishandling between delivery and the explosion meant the bottler retained sufficient constructive control to trigger the doctrine. Plaintiff further argued that the bottler, as the party with the greatest knowledge of its production process and the greatest ability to prevent defects, should bear the burden of explaining the bottle\'s failure. Escola urged the court to hold the bottler responsible for placing an unreasonably dangerous bottle into the stream of commerce.',
    defendantArguments:
      'Coca-Cola Bottling argued that res ipsa loquitur could not apply because the bottle had been out of the defendant\'s exclusive possession for thirty-six hours before the explosion, during which time others had the opportunity to tamper with or mishandle it. The company maintained that there was no direct evidence of negligence in the bottling or inspection process and that the mere fact of an explosion was insufficient to support an inference of fault. The bottler contended that the plaintiff had failed to establish the cause of the explosion with the specificity required to send the case to the jury. Defendant further argued that imposing liability without direct proof of negligence would unfairly burden the bottling industry.',
    proceduralHistory:
      'Escola brought suit in the Superior Court of Tulare County. The trial court permitted the case to go to the jury on a res ipsa loquitur theory, and the jury returned a verdict in favor of Escola. Coca-Cola Bottling appealed, arguing that res ipsa loquitur should not have been submitted to the jury because exclusive control was lacking. The California Supreme Court granted review.',
    finalDecision:
      'The California Supreme Court affirmed the judgment for Escola, holding that res ipsa loquitur was properly applied even though the defendant did not have exclusive control of the bottle at the precise moment of the accident. The majority reasoned that the exclusive-control requirement is satisfied when the evidence demonstrates that it is more probable than not that the defendant was responsible for the negligence causing the injury. Justice Roger Traynor concurred separately, arguing that the majority\'s analysis was unnecessary and that manufacturers should simply be held strictly liable for injuries caused by defective products placed in the stream of commerce.',
    judicialReasoning:
      'The majority opinion, authored by Justice Gibson, held that the exclusive-control element of res ipsa loquitur should not be applied mechanically and that its purpose is simply to eliminate other responsible causes. Because there was no evidence of tampering or mishandling between the time the bottles were delivered and the time Escola handled them, the jury could reasonably infer that the negligence occurred during bottling or inspection. The majority noted that the bottler was in the best position to know whether its bottles met safety standards and that the bottle had remained under conditions consistent with proper storage. Justice Traynor\'s concurrence, which has proved far more historically influential, argued that the majority\'s res ipsa analysis was a legal fiction masking what should be a straightforward rule of strict liability. Traynor reasoned that public policy demands that responsibility be fixed wherever it will most effectively reduce the hazards to life and health inherent in defective products, and that this responsibility lies with the manufacturer who puts the product into commerce. His concurrence planted the conceptual seed that he would harvest twenty years later in Greenman v. Yuba Power Products.',
    legalStandards: [
      'Res ipsa loquitur: inference of negligence from the nature of the accident and defendant\'s relation to the instrumentality',
      'Exclusive control element interpreted functionally to eliminate other probable causes rather than demanding literal physical control',
      'Traynor concurrence: strict liability for manufacturers who place defective products in the stream of commerce',
      'Burden-shifting: once res ipsa established, defendant must produce evidence to rebut inference of negligence',
    ],
    keyPrecedents: [
      'Ybarra v. Spangard, 25 Cal. 2d 486 (1944)',
      'MacPherson v. Buick Motor Co., 217 N.Y. 382 (1916)',
      'Greenman v. Yuba Power Products, Inc., 59 Cal. 2d 57 (1963) (subsequent case building on Traynor\'s concurrence)',
    ],
    evidenceAnalysis:
      'Expert testimony from a glass technologist established that the bottle had not been struck by any external force and that the explosion was consistent with either excessive internal pressure from over-carbonation or a structural weakness in the glass introduced during manufacturing. The absence of any physical evidence of tampering was critical to the court\'s conclusion that the negligence more probably than not occurred at the bottling plant. Evidence of the bottler\'s inspection procedures, which included visual inspection and pressure testing, was also introduced; the court noted that if the inspection system had functioned properly, the defective bottle should have been detected and removed from the production line.',
    alternativeOutcomes:
      'Had the court applied a strict literal requirement of continuous exclusive control, Escola\'s case would have failed on the res ipsa issue and she would have faced the nearly impossible task of identifying the specific act of negligence that caused the bottle to be defective, a task that would require access to the manufacturer\'s internal processes. Had Justice Traynor\'s strict-liability concurrence become the majority opinion in 1944, the development of American products liability law might have been accelerated by two decades.',
    lessonsLearned: [
      'Res ipsa loquitur is a flexible doctrine that courts can apply to product-injury cases where direct proof of negligence is inaccessible to the plaintiff',
      'A concurring opinion can be more historically significant than the majority opinion if it correctly anticipates the direction of legal development',
      'Manufacturers are better positioned than consumers to detect and prevent defects, a policy consideration that justifies allocating the burden of proof to defendants in product-injury cases',
      'The stream-of-commerce concept, first articulated in this context by Traynor, became the foundational principle of modern strict products liability',
    ],
    bestPractices: [
      'Plaintiffs\' counsel in product-injury cases should explore res ipsa loquitur as an alternative to direct negligence proof when the defective product was exclusively or constructively under the defendant\'s control',
      'Manufacturers should document and retain records of quality-control and inspection procedures to rebut res ipsa inferences',
      'Courts should interpret the exclusive-control element functionally, focusing on whether other probable causes have been eliminated rather than on literal physical custody',
      'Product liability practitioners should read Traynor\'s concurrence alongside the majority opinion to understand the full doctrinal significance of the case',
    ],
    significance:
      'Escola v. Coca-Cola Bottling Co. is significant both for its majority holding, which expanded the practical reach of res ipsa loquitur in product-injury cases, and even more profoundly for Justice Traynor\'s landmark concurrence. Traynor\'s articulation of strict manufacturer liability anticipated the doctrinal revolution he completed in Greenman v. Yuba Power Products nineteen years later and provided the intellectual framework for Restatement (Second) of Torts Section 402A. The case is taught in every American torts course as the bridge between nineteenth-century negligence doctrine and twentieth-century strict products liability. It represents a pivotal moment in which judicial policy reasoning about consumer protection, risk distribution, and the superior knowledge of manufacturers began to displace the fault-based framework that had governed the common law for centuries.',
    parties: [
      {
        name: 'Gladys Escola',
        role: 'PLAINTIFF',
        description: 'Restaurant waitress injured when a Coca-Cola bottle exploded in her hand',
      },
      {
        name: 'Coca-Cola Bottling Co. of Fresno',
        role: 'DEFENDANT',
        description: 'Bottler and distributor of the carbonated beverage bottle that exploded',
      },
    ],
  },
  {
    litigationSlug: 'products-liability',
    name: 'Wyeth v. Levine',
    citation: '555 U.S. 555 (2009)',
    jurisdiction: 'Federal / Vermont',
    court: 'Supreme Court of the United States',
    year: 2009,
    isFeatured: false,
    outcome: 'Plaintiff Victory',
    facts:
      'Diana Levine, a professional musician in Vermont, was administered Phenergan (promethazine), a Wyeth antiemetic drug, by IV-push injection — a method by which a drug is injected directly into a patient\'s vein. The drug came into contact with arterial blood and caused irreversible gangrene in her right arm, which had to be amputated at the forearm, ending her musical career. Wyeth\'s FDA-approved labeling warned of the danger of intra-arterial injection and arterial contact but did not explicitly contraindicate the IV-push method in most circumstances. Levine sued Wyeth in Vermont state court, alleging that the labeling was inadequate because it should have specifically warned against IV-push administration or required a safer alternative method such as IV drip. Wyeth contended that federal law preempted Levine\'s state-law failure-to-warn claim because the FDA had approved the drug\'s labeling.',
    keyLegalIssues: [
      'Whether FDA approval of a drug\'s labeling preempts state-law tort claims that the label\'s warnings were inadequate',
      'Whether implied conflict preemption bars a failure-to-warn claim when compliance with state-law duties would allegedly conflict with federal regulatory requirements',
      'What scope of authority Congress intended the FDA to have in displacing state common-law tort remedies for inadequate drug labeling',
      'Whether the FDA\'s changes-being-effected regulation permitted Wyeth to strengthen its label without prior FDA approval',
    ],
    plaintiffArguments:
      'Levine argued that Wyeth\'s federally approved label was insufficient under Vermont common law because it failed to warn healthcare providers that IV-push administration of Phenergan carried an unacceptably high risk of arterial contact and gangrene when a safer and equally effective method was available. She contended that federal law did not preempt her state-law claim because FDA regulations expressly permit drug manufacturers to strengthen warning labels on their own initiative under the changes-being-effected provision, meaning Wyeth could have complied with both federal and state law by adding a stronger contraindication without prior FDA approval. Levine argued that Congress had not expressly preempted state failure-to-warn claims in the Food, Drug, and Cosmetic Act and that the presumption against preemption should apply. She maintained that state tort suits serve as a complementary mechanism to FDA regulation, providing additional incentives for drug manufacturers to maintain current and adequate safety warnings.',
    defendantArguments:
      'Wyeth argued that the FDA\'s approval of Phenergan\'s label after a thorough regulatory review constituted a federal determination that the label was adequate, and that allowing a state jury to second-guess that determination would stand as an obstacle to federal regulatory objectives. The company contended that it could not unilaterally strengthen the label in a way that conflicted with the FDA\'s own considered judgment and that doing so would expose it to liability for unapproved labeling changes. Wyeth argued that the FDA\'s comprehensive drug-labeling regime impliedly preempted state tort claims that would effectively require a different label. The company maintained that permitting fifty states to impose fifty different labeling standards through tort verdicts would undermine the national uniformity that the federal drug-approval process is designed to achieve.',
    proceduralHistory:
      'Levine sued in Vermont Superior Court. The jury found in her favor, awarding approximately $7.4 million in compensatory damages after finding that Wyeth had failed to adequately warn of the risks of IV-push administration. The Vermont Supreme Court affirmed, rejecting Wyeth\'s preemption defense. The United States Supreme Court granted certiorari to resolve a circuit split and to address the scope of federal preemption of state-law drug-labeling failure-to-warn claims.',
    finalDecision:
      'The Supreme Court affirmed the Vermont Supreme Court in a 6-3 decision authored by Justice Stevens. The Court held that federal law did not preempt Levine\'s state failure-to-warn claim because Wyeth could have complied with both federal requirements and the state-law duty to provide a stronger warning by using the FDA\'s changes-being-effected procedure, and because there was no evidence that the FDA had affirmatively concluded that the existing label was appropriate in the face of new safety information.',
    judicialReasoning:
      'Justice Stevens wrote that the burden is on the party asserting preemption to establish that compliance with both federal and state law was impossible, and that Wyeth had not met that burden because FDA regulations at the time permitted the company to strengthen its labeling unilaterally under the CBE provision pending formal FDA approval. The Court rejected Wyeth\'s argument that FDA approval of the original label constituted an affirmative decision that a stronger contraindication was unwarranted, finding no evidence that the FDA had made such a specific determination with respect to IV-push administration. Stevens emphasized that state tort law has traditionally been a complementary safety mechanism alongside federal drug regulation and that Congress had not manifested a clear intent to displace those remedies. The majority observed that drug manufacturers have superior access to information about their products\' risks and that tort liability provides an important incentive to identify and communicate emerging safety hazards. Justice Thomas concurred in the judgment on different preemption grounds, while Justice Alito, joined by the Chief Justice and Justice Scalia, dissented, arguing that the majority had misread the FDA\'s regulatory authority.',
    legalStandards: [
      'Impossibility preemption: federal law preempts state law only if compliance with both is a physical impossibility',
      'Obstacle preemption: state law is preempted only if it stands as an obstacle to the accomplishment of federal objectives',
      'Presumption against preemption in areas traditionally governed by state police powers such as tort law',
      'FDA changes-being-effected regulation allowing manufacturers to strengthen labeling without prior FDA approval',
    ],
    keyPrecedents: [
      'Medtronic, Inc. v. Lohr, 518 U.S. 470 (1996)',
      'Geier v. American Honda Motor Co., 529 U.S. 861 (2000)',
      'Cipollone v. Liggett Group, Inc., 505 U.S. 504 (1992)',
    ],
    evidenceAnalysis:
      'Trial evidence included Wyeth\'s internal safety reports, adverse event data, and FDA correspondence showing that the company had received reports of gangrene and amputation associated with Phenergan IV-push administration before and after the drug\'s initial approval. Expert medical testimony established that IV drip administration presented substantially lower risk of arterial contact and that the IV-push method was contraindicated for Phenergan by many clinical pharmacology authorities. The FDA\'s own regulatory history with the drug label, including prior label changes and the agency\'s communications with Wyeth, was critical to the Court\'s conclusion that the FDA had not affirmatively determined the existing warning was sufficient with respect to IV-push risks.',
    alternativeOutcomes:
      'Had the Court held that FDA approval preempted state failure-to-warn claims, pharmaceutical manufacturers would have been largely insulated from state tort liability for inadequate drug labeling, effectively making the FDA the exclusive arbiter of drug safety and eliminating jury trials as a check on manufacturer conduct. A different outcome on the CBE regulation question could have significantly restricted the ability of manufacturers to update labels without awaiting lengthy FDA approval, potentially delaying the dissemination of new safety information to healthcare providers.',
    lessonsLearned: [
      'FDA approval of drug labeling does not automatically preempt state failure-to-warn claims unless compliance with both regimes is truly impossible',
      'The changes-being-effected regulation is a critical tool for drug manufacturers, enabling unilateral label strengthening and simultaneously limiting preemption defenses',
      'State tort litigation serves as a vital complement to federal drug regulation, providing incentives for manufacturers to monitor and communicate emerging risks',
      'Pharmaceutical companies must actively track post-market adverse event data and consider label updates, or face liability exposure for failure to warn',
    ],
    bestPractices: [
      'Pharmaceutical manufacturers should conduct ongoing post-market pharmacovigilance and use the CBE process to strengthen warnings promptly when new safety data emerges',
      'Defense counsel in drug-labeling cases should carefully document the FDA\'s specific regulatory history with each warning at issue to support an impossibility-preemption defense',
      'Plaintiffs\' counsel should focus discovery on internal adverse event reports and FDA correspondence to rebut the claim that the approved label reflected the agency\'s affirmative safety determination',
      'Healthcare providers and manufacturers should ensure labeling clearly delineates safer alternative administration methods when a drug carries route-specific risks',
    ],
    significance:
      'Wyeth v. Levine is the Supreme Court\'s most important modern decision on the preemption of state products-liability claims by federal drug regulation. By rejecting broad conflict preemption for FDA-approved drug labels, the Court preserved the ability of injured patients to seek redress through state tort litigation and rejected the pharmaceutical industry\'s argument that federal approval extinguished state remedies. The decision has governed hundreds of subsequent pharmaceutical failure-to-warn cases and shaped the FDA\'s approach to labeling disputes. It reinforced the principle that federal regulatory compliance sets a floor, not a ceiling, for manufacturer obligations and that state tort law retains an independent role in protecting consumers. The case is regularly cited in debates about regulatory preemption across all sectors of products liability, from medical devices to automobile safety systems.',
    parties: [
      {
        name: 'Wyeth',
        role: 'DEFENDANT',
        counsel: 'Seth Waxman (argued for Wyeth before the Supreme Court)',
        description: 'Pharmaceutical manufacturer of Phenergan (promethazine) antiemetic drug',
      },
      {
        name: 'Diana Levine',
        role: 'PLAINTIFF',
        counsel: 'David Frederick (argued for Levine before the Supreme Court)',
        description: 'Professional musician who lost her forearm to gangrene following Phenergan IV-push administration',
      },
    ],
  },
  {
    litigationSlug: 'products-liability',
    name: 'Barker v. Lull Engineering Co.',
    citation: '20 Cal. 3d 413, 573 P.2d 443 (1978)',
    jurisdiction: 'California',
    court: 'Supreme Court of California',
    year: 1978,
    isFeatured: false,
    outcome: 'Plaintiff Victory',
    facts:
      'In 1970, Ray Barker was injured while operating a high-lift loader manufactured by Lull Engineering Company at a construction site in Napa County, California. Barker, who had received only limited training on the machine, was using it on a sloped terrain when the loader became unstable and began to tip. In an attempt to stabilize the machine, Barker jumped from the loader and was struck by a piece of lumber dislodged by the falling load. The loader lacked outriggers that would have provided lateral stability on uneven ground and did not have a roll-over protective structure or seat belt that would have kept the operator safely in the cab if tipping occurred. The injury was serious and left Barker with permanent physical limitations. He sued Lull Engineering and the company that had leased the equipment, asserting strict products liability for defective design.',
    keyLegalIssues: [
      'What standard or test courts should apply to determine whether a product has a defective design for purposes of strict products liability',
      'Whether the consumer expectation test alone is adequate to evaluate complex industrial machinery design defects',
      'Whether the risk-utility balancing test should be adopted as an alternative or additional standard for design defects',
      'How the burden of proof should be allocated between plaintiff and defendant on the design-defect question',
    ],
    plaintiffArguments:
      'Barker argued that the high-lift loader was defectively designed because it lacked basic safety features, including outriggers for lateral stability on slopes, a roll-over protective structure, and operator restraints, that were available and used on comparable equipment in the industry. He contended that an ordinary consumer of construction equipment would not expect the machine to become dangerously unstable on moderately sloped terrain under ordinary working conditions, satisfying the consumer expectation test. Barker further argued that even if the consumer expectation standard were not met, the risks posed by the loader\'s design outweighed its utility, particularly given that effective safety features were technically available and would not have substantially impaired the machine\'s function. He maintained that the defendant should bear the burden of proving that the design\'s utility outweighed its dangers once the plaintiff establishes that the product caused injury while being used in a reasonably foreseeable manner.',
    defendantArguments:
      'Lull Engineering argued that the loader was designed in conformity with applicable industry standards and that a machine intended for use on construction sites by trained operators should be evaluated against the expectations of a sophisticated commercial user rather than an average consumer. The company contended that Barker\'s accident was caused by operator error, specifically by using the machine on an excessively steep slope in a manner inconsistent with its design specifications and operator manual. Lull maintained that the consumer expectation test, properly applied, did not support a finding of design defect because a trained heavy equipment operator would know of the machine\'s limitations on slopes. The company argued that a shift to risk-utility balancing would impose an unworkable standard that second-guessed legitimate engineering trade-offs.',
    proceduralHistory:
      'Barker brought suit in Napa County Superior Court. The trial court instructed the jury solely on the consumer expectation test and the jury returned a verdict for the defendants. Barker appealed, arguing that the trial court had failed to properly instruct the jury on the applicable standard for design-defect liability. The California Court of Appeal affirmed. The California Supreme Court granted review to resolve uncertainty about the proper test for design defects under strict products liability.',
    finalDecision:
      'The California Supreme Court reversed and remanded for a new trial. The court held that a design defect may be established under either of two alternative tests: the consumer expectation test, under which a product is defective if it fails to perform as safely as an ordinary consumer would expect when used in an intended or reasonably foreseeable manner, or the risk-utility test, under which a product is defective if the plaintiff demonstrates that the product\'s design proximately caused injury and the defendant fails to establish in light of relevant factors that the benefits of the design outweigh the risk of danger inherent in such design. The court also held that once the plaintiff makes the required showing, the burden shifts to the defendant to prove that the product\'s benefits outweigh its risks.',
    judicialReasoning:
      'Chief Justice Bird, writing for the court, explained that the consumer expectation test alone was inadequate for evaluating the design of complex products whose internal workings are not understood by ordinary consumers. For products such as industrial machinery, consumers may have no expectation about how a machine should perform in an emergency, and limiting liability to consumer expectations would insulate manufacturers of technically complex products from accountability for unreasonably dangerous designs. The court therefore adopted a disjunctive test, preserving consumer expectations as one path to recovery while adding a risk-utility alternative. Under the risk-utility prong, the court identified relevant factors including the gravity of the danger posed, the likelihood that the danger would cause harm, the mechanical feasibility of a safer design, the financial cost of an improved design, and the adverse consequences to the product and consumer of an alternative design. Critically, the court placed the burden on the defendant to prove that the design\'s utility outweighed its risks once the plaintiff established that injury occurred during a foreseeable use. This burden-shifting reflected the court\'s view that manufacturers have superior access to information about design choices and alternatives and that placing the burden on plaintiffs to negate all possible design justifications would be unduly onerous.',
    legalStandards: [
      'Consumer expectation test: product fails to perform as safely as an ordinary consumer would expect in foreseeable use',
      'Risk-utility test: plaintiff establishes injury from foreseeable use, then burden shifts to defendant to prove design benefits outweigh risks',
      'Strict products liability for design defects under Greenman v. Yuba Power Products, Inc.',
      'Burden-shifting framework placing proof of design utility on the defendant once plaintiff establishes causation and foreseeable use',
    ],
    keyPrecedents: [
      'Greenman v. Yuba Power Products, Inc., 59 Cal. 2d 57 (1963)',
      'Cronin v. J.B.E. Olson Corp., 8 Cal. 3d 121 (1972)',
      'Restatement (Second) of Torts Section 402A (1965)',
    ],
    evidenceAnalysis:
      'Evidence at trial included industry safety standards for high-lift loaders and comparable equipment showing that outriggers and roll-over protective structures were commonly available during the period of manufacture. Expert engineering testimony established that the cost of adding outriggers to the loader would have been minimal relative to the machine\'s total price and that such safety additions were feasible without impairing the loader\'s primary function. Evidence of prior similar incidents involving tip-overs of the same or similar loader models was also relevant to showing that the risk was foreseeable to the manufacturer. The plaintiff introduced the operator manual, which contained slope limitations that were arguably ambiguous, to demonstrate that the manufacturer itself had identified the stability risk but had not taken engineering steps to address it.',
    alternativeOutcomes:
      'Had the California Supreme Court retained the consumer expectation test as the sole standard, Barker would likely have lost on remand because sophisticated construction-site operators might be held to a higher standard of knowledge about machine stability limitations than ordinary consumers, defeating his recovery. Had the court placed the burden of proving the design\'s risk-utility on the plaintiff rather than the defendant, many meritorious design-defect cases involving complex machinery would effectively be unwinnable because plaintiffs lack access to the manufacturer\'s engineering trade-off analyses.',
    lessonsLearned: [
      'A dual-test approach to design defects allows plaintiffs to pursue liability through the most appropriate doctrinal route for the type of product and injury at issue',
      'Burden-shifting on the risk-utility question is justified by the manufacturer\'s superior access to information about design alternatives and safety trade-offs',
      'Industrial machinery manufacturers cannot insulate themselves from design-defect liability by pointing to a sophisticated user base when basic safety features were omitted',
      'The Barker framework has been adopted or adapted by numerous jurisdictions and influenced the Third Restatement of Torts\' treatment of design defects',
    ],
    bestPractices: [
      'Manufacturers of complex industrial equipment should document safety-feature trade-off analyses and retain records demonstrating the engineering rationale for design decisions',
      'Plaintiffs\' counsel should present risk-utility evidence including the cost and feasibility of alternative designs to succeed under the Barker burden-shifting framework',
      'Defense counsel should prepare robust expert testimony on the benefits of the existing design and on the adverse consequences that a plaintiff\'s proposed alternative design would have on product performance',
      'Equipment lessors and rental companies should ensure that machines they place in the field meet current industry safety standards and that operators receive adequate training on the machine\'s limitations',
    ],
    significance:
      'Barker v. Lull Engineering Co. is the foundational California decision establishing the dual consumer expectation / risk-utility test for design defects and the defendant-burden-shifting framework that has become central to design-defect litigation. The decision resolved a significant gap in California products liability law, which after Greenman had strict liability for manufacturing defects but no clear standard for design defects. The Barker framework was subsequently adopted in modified form by the Restatement (Third) of Torts: Products Liability (1998), which controversially moved away from the consumer expectation test and toward risk-utility as the primary standard, sparking ongoing scholarly and judicial debate. Barker is also notable for its influence on the subsequent Ford Pinto litigation and for its role in shaping how California courts and practitioners approach the single most contested issue in modern products liability: what makes a product\'s design unreasonably dangerous.',
    parties: [
      {
        name: 'Ray Barker',
        role: 'PLAINTIFF',
        description: 'Construction worker injured when a high-lift loader tipped on sloped terrain',
      },
      {
        name: 'Lull Engineering Co.',
        role: 'DEFENDANT',
        description: 'Manufacturer of the defectively designed high-lift loader',
      },
      {
        name: 'Leasing company defendant',
        role: 'DEFENDANT',
        description: 'Company that leased the loader to the construction site operator',
      },
    ],
  },
];

export default cases;
