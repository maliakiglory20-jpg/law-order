import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'class-action',
    name: 'Wal-Mart Stores, Inc. v. Dukes',
    citation: '564 U.S. 338 (2011)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2011,
    isFeatured: true,
    facts: 'Betty Dukes and approximately 1.5 million current and former female Wal-Mart employees filed a class action alleging that Wal-Mart engaged in a nationwide pattern and practice of sex discrimination in pay and promotions in violation of Title VII of the Civil Rights Act of 1964. The plaintiffs argued that Wal-Mart\'s corporate culture, combined with its policy of granting local store managers broad discretion over pay and promotion decisions, had a disparate impact on women and constituted a uniform discriminatory practice. Statistical evidence purportedly showed that female employees were paid less than male employees in every region and were underrepresented in management positions relative to their share of the hourly workforce. A sociologist offered expert testimony that Wal-Mart\'s corporate culture made it vulnerable to gender bias, and plaintiffs argued this culture constituted the "glue" holding the proposed class\'s claims together. The district court certified a class of approximately 1.5 million women, the largest employment discrimination class in U.S. history, which the Ninth Circuit affirmed.',
    keyLegalIssues: [
      'Whether plaintiffs satisfied the "commonality" requirement of Federal Rule of Civil Procedure 23(a)(2) by demonstrating a common question of law or fact',
      'Whether backpay claims could be certified under Rule 23(b)(2) without providing individualized hearings to class members',
      'Whether a court must conduct a rigorous analysis of class certification requirements even when doing so overlaps with the merits',
      'What constitutes sufficient evidence of a common discriminatory policy to bind 1.5 million employees into a single class'
    ],
    plaintiffArguments: 'Plaintiffs argued that Wal-Mart\'s corporate culture of gender stereotyping, combined with its uniform policy of granting managers subjective discretion, constituted a common practice that harmed all female employees in the same way, satisfying Rule 23(a)(2) commonality. They contended that statistical regression analyses showing consistent pay gaps across all regions, combined with anecdotal testimony from hundreds of women and sociological expert testimony, demonstrated a nationwide pattern of discrimination. Plaintiffs further argued that their backpay claims could be certified under Rule 23(b)(2) as incidental to injunctive relief, which would allow the class to proceed without individualized damage hearings that would make the case unmanageable.',
    defendantArguments: 'Wal-Mart argued that its formal written policy expressly prohibited sex discrimination and that the mere fact of granting local managers discretion could not constitute a common discriminatory policy, because such discretion by definition produces individualized rather than uniform outcomes. The company contended that the plaintiffs\' statistical evidence masked enormous variation among the thousands of stores, and that different managers making different decisions destroyed any claim of a common question. Wal-Mart further argued that certifying backpay claims under Rule 23(b)(2) rather than Rule 23(b)(3) improperly denied class members their due process right to opt out and deprived absent class members of individualized hearings on their damages.',
    proceduralHistory: 'Betty Dukes filed the original complaint in the Northern District of California in 2001. In 2004, District Judge Martin Jenkins certified the class of approximately 1.5 million women under both Rule 23(b)(2) and, in the alternative, Rule 23(b)(3). A Ninth Circuit panel affirmed the certification, and the Ninth Circuit reheard the case en banc and again affirmed class certification in 2010, prompting Wal-Mart to petition the Supreme Court for certiorari, which was granted.',
    finalDecision: 'The Supreme Court reversed the Ninth Circuit 5-4 on the commonality question and 9-0 on the Rule 23(b)(2) backpay issue. The Court held that plaintiffs failed to satisfy Rule 23(a)(2) commonality because they could not identify a common discriminatory policy that drove all 1.5 million claims, and separately held that claims for individualized monetary relief such as backpay cannot be certified under Rule 23(b)(2).',
    judicialReasoning: 'Justice Scalia, writing for the majority on commonality, explained that Rule 23(a)(2) requires more than a common question; plaintiffs must demonstrate that the class members\' claims depend on a common contention whose truth or falsity will resolve an issue central to each class member\'s claim in one stroke. The Court held that Wal-Mart\'s corporate policy of granting managers discretion was the opposite of a uniform policy, and that allowing subjective decision-making cannot be a common policy because it leads to different outcomes in each store. The majority applied a "rigorous analysis" standard requiring courts to examine the merits at the certification stage where necessary to evaluate Rule 23 requirements, rejecting any suggestion that courts must accept plaintiffs\' pleadings as true. On the Rule 23(b)(2) issue, a unanimous Court held that class members have a right to opt out of and receive individualized hearings on monetary claims, which are "not incidental" to any injunctive or declaratory relief when they are not automatically flowing from it.',
    legalStandards: [
      'Federal Rule of Civil Procedure 23(a)(2) commonality requirement',
      'Federal Rule of Civil Procedure 23(b)(2) class certification for injunctive relief',
      'Rigorous analysis standard for class certification decisions',
      'Title VII of the Civil Rights Act of 1964 disparate impact and disparate treatment frameworks',
      'Due process rights of absent class members to individualized hearings on damages'
    ],
    keyPrecedents: [
      'General Telephone Co. of Southwest v. Falcon, 457 U.S. 147 (1982) - established rigorous analysis requirement',
      'Eisen v. Carlisle & Jacquelin, 417 U.S. 156 (1974) - courts may not consider merits at class certification stage (distinguished)',
      'International Brotherhood of Teamsters v. United States, 431 U.S. 324 (1977) - pattern or practice discrimination framework'
    ],
    evidenceAnalysis: 'The plaintiffs offered three categories of evidence: statistical analyses by Dr. Richard Drogin showing consistent pay disparities between men and women across regions, anecdotal testimony from 120 women describing discriminatory treatment, and sociological expert testimony from Dr. William Bielby asserting that Wal-Mart\'s culture made it vulnerable to gender bias. The Court found that the statistical evidence, even if probative of discrimination, did not establish the necessary common mode of exercising managerial discretion, and that anecdotes from 120 of 1.5 million employees were insufficient to demonstrate a nationwide uniform practice. The majority also expressed skepticism about Bielby\'s methodology, noting he could not determine what percentage of employment decisions were influenced by stereotyping.',
    alternativeOutcomes: 'Had the Court upheld class certification, the litigation would have proceeded as the largest employment discrimination class action in history and potentially exposed Wal-Mart to billions of dollars in backpay liability. Individual class members could have pursued smaller class actions at the regional or store level under Rule 23(b)(3), as Justice Ginsburg\'s dissent suggested, which would have maintained the option for collective litigation while providing more individualized proceedings. A narrowly defined class of employees in specific departments or regions with stronger evidence of a common supervisor might have satisfied the commonality requirement.',
    lessonsLearned: [
      'Plaintiffs must identify a specific common policy or practice, not merely evidence of statistical disparity, to satisfy Rule 23(a)(2) commonality',
      'A policy of granting managers subjective discretion defeats commonality rather than establishing it, even when combined with evidence of a general culture of bias',
      'Courts must conduct rigorous factual inquiry into Rule 23 requirements at the certification stage, even where doing so overlaps with the merits of the case',
      'Backpay and other individualized monetary relief cannot be swept into a Rule 23(b)(2) class to avoid providing opt-out rights and individualized damage hearings'
    ],
    bestPractices: [
      'When building a class action, identify and plead a specific, identifiable uniform corporate policy that applies to all class members, rather than relying on statistical evidence alone',
      'Anticipate that courts will scrutinize expert testimony at the class certification stage and ensure statistical methodologies are defensible under the rigorous analysis standard',
      'Consider whether monetary claims should be certified separately under Rule 23(b)(3) to avoid the Rule 23(b)(2) limitations on individualized relief',
      'Structure class definitions with geographic or organizational boundaries that correspond to discrete units where common policies are more clearly operative'
    ],
    significance: 'Wal-Mart v. Dukes is the most consequential class action decision in a generation, dramatically raising the bar for satisfying Rule 23(a)(2) commonality and effectively foreclosing large employment discrimination class actions based on subjective managerial discretion combined with statistical evidence alone. The decision forced plaintiffs\' lawyers to rethink class action strategy in employment cases, leading to a proliferation of smaller, more targeted class actions and a decline in massive nationwide employment class certifications. The ruling also clarified that courts must conduct a rigorous merits inquiry at the certification stage, settling a circuit split and signaling the Court\'s skepticism toward expansive class action litigation. The case fundamentally reshaped the landscape of employment discrimination law by making it significantly harder for diffuse groups of plaintiffs to aggregate their claims, and its reasoning has been extended to class actions in many other substantive areas beyond employment.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Betty Dukes',
        role: 'PLAINTIFF',
        counsel: 'Brad Seligman, Joseph Sellers (Cohen Milstein)',
        description: 'Lead named plaintiff and Wal-Mart employee who worked as a greeter in Pittsburg, California'
      },
      {
        name: 'Wal-Mart Stores, Inc.',
        role: 'DEFENDANT',
        counsel: 'Theodore Boutrous, Jr. (Gibson, Dunn & Crutcher)',
        description: 'The world\'s largest private employer and largest retailer, operating thousands of stores across the United States'
      },
      {
        name: 'United States',
        role: 'AMICUS_CURIAE',
        description: 'Filed amicus brief on behalf of neither party discussing the appropriate standard for class certification'
      }
    ]
  },
  {
    litigationSlug: 'class-action',
    name: 'Amchem Products, Inc. v. Windsor',
    citation: '521 U.S. 591 (1997)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1997,
    facts: 'Thousands of asbestos manufacturers and their insurers, facing mounting litigation from asbestos-exposure victims, negotiated a sweeping global settlement with plaintiffs\' counsel to resolve all pending and future asbestos personal injury claims in a single class action settlement. The proposed class included hundreds of thousands of current claimants and an unlimited number of future claimants who had been exposed to asbestos but had not yet manifested illness or filed suit. The settlement was negotiated before any class was certified, and class counsel simultaneously negotiated both the class definition and the settlement terms, raising questions about their ability to adequately represent the diverse interests of the class. The terms provided scheduled payments for various asbestos-related conditions ranging from mesothelioma to pleural thickening, but imposed caps on payments, eliminated future claims for punitive damages, and barred class members from opting out to litigate individually. Objectors—many of them current claimants with manifested disease—argued that the settlement unfairly subordinated their immediate, substantial claims to protect the interests of future claimants who might never become sick.',
    keyLegalIssues: [
      'Whether a class action may be certified solely for the purpose of facilitating a settlement without meeting all requirements of Rule 23 as if the case were proceeding to trial',
      'Whether the proposed class satisfied Rule 23(a)(4) adequacy of representation where class counsel simultaneously represented present claimants and future claimants with potentially divergent interests',
      'Whether the global settlement class satisfied Rule 23(b)(3)\'s predominance and superiority requirements given the individualized nature of asbestos injury claims',
      'How courts should evaluate the fairness of settlement classes that involve future claimants who cannot yet advocate for their own interests'
    ],
    plaintiffArguments: 'Proponents of the settlement argued that global resolution of asbestos litigation was a practical necessity to stem the tide of thousands of individual lawsuits that threatened to overwhelm the federal judiciary and deplete defendants\' resources before all victims could be compensated. They contended that class counsel adequately represented the entire class because all members shared a common interest in maximizing total compensation from defendants, and that the settlement as a whole was fair, reasonable, and adequate given the litigation risks and defendants\' limited ability to pay. The settling parties argued that courts should apply a more relaxed version of Rule 23 to settlement classes, given that many of the manageability concerns animating those requirements were irrelevant when no trial would actually take place.',
    defendantArguments: 'Objecting plaintiffs argued that the settlement class was a collusive arrangement that sacrificed the interests of present claimants with immediate financial needs and strong claims in order to protect defendants from future liability by locking future claimants into a compensation scheme with caps and restrictions. They contended that current asbestos victims with mesothelioma had fundamentally different and conflicting interests from people who had only been exposed and might never become ill, and that a single class counsel could not adequately represent both groups simultaneously. Objectors further argued that the individualized nature of asbestos causation and damages questions meant that common issues did not predominate, making the class unsuitable for certification under Rule 23(b)(3) regardless of the settlement context.',
    proceduralHistory: 'The case originated when several asbestos manufacturers and CCR, a consortium of asbestos defendants, reached a global settlement with a group of plaintiffs\' attorneys, after which a class was filed in the Eastern District of Pennsylvania solely to implement the settlement. District Judge Lowell Reed conditionally certified the class and approved the settlement. The Third Circuit reversed, holding that the class failed to meet the requirements of Rule 23(a) and (b)(3), and that a settlement-only class must still satisfy all Rule 23 requirements as if the case were going to trial.',
    finalDecision: 'The Supreme Court affirmed the Third Circuit\'s reversal of class certification in an 8-1 decision authored by Justice Ginsburg. The Court held that district courts must rigorously apply all Rule 23 requirements to settlement classes, rejecting any relaxed standard, and found that the Amchem settlement class failed to satisfy both Rule 23(a)(4) adequacy of representation and Rule 23(b)(3)\'s predominance requirement.',
    judicialReasoning: 'Justice Ginsburg acknowledged that a district court need not inquire into whether the case would be manageable at trial when certifying a settlement class, because the manageability criterion of Rule 23(b)(3)(D) is irrelevant to a case that will not be tried. However, she held that all other Rule 23 requirements apply with full force to settlement classes, because otherwise the class device could be used to bind absent plaintiffs to inadequate settlements without their consent. On adequacy, the Court found fatal conflict between present claimants who needed immediate, substantial compensation and future claimants whose exposure had not yet ripened into disease, as their interests in the distribution of limited funds were directly adverse. On predominance, the Court found that the highly individualized nature of asbestos exposure, causation, injury manifestation, and damages meant that common issues did not predominate over individual questions, even in the settlement context.',
    legalStandards: [
      'Federal Rule of Civil Procedure 23(a)(4) adequacy of representation requirement',
      'Federal Rule of Civil Procedure 23(b)(3) predominance and superiority requirements',
      'Settlement class certification standard requiring full compliance with Rule 23 except manageability',
      'Conflict of interest analysis for class counsel representing claimants with divergent interests',
      'Due process rights of absent class members to fair representation and opportunity to be heard'
    ],
    keyPrecedents: [
      'Hansberry v. Lee, 311 U.S. 32 (1940) - due process requires adequate representation of absent class members',
      'General Telephone Co. of Southwest v. Falcon, 457 U.S. 147 (1982) - rigorous analysis of Rule 23 requirements',
      'Ortiz v. Fibreboard Corp., 527 U.S. 815 (1999) - follow-on decision further restricting global asbestos settlement classes'
    ],
    evidenceAnalysis: 'The Court examined the terms of the settlement agreement itself as the primary evidence of adequacy and fairness. Comparing the compensation schedules for current claimants versus exposure-only plaintiffs, the Court found structural evidence of conflict: the settlement imposed aggregate limits on total payments over time and capped payments for each category of disease, meaning that higher payments to future claimants would necessarily reduce amounts available to present claimants. The Court also noted that the settlement eliminated punitive damages for future claimants—a significant right that current claimants had not yet relinquished—without any separate representation for the group most harmed by this concession.',
    alternativeOutcomes: 'Had the settlement class been approved, it would have resolved the then-largest mass tort in American history and set a template for resolving future mass tort litigation through global settlement classes. The rejection of the Amchem settlement ultimately led to the continued fragmentation of asbestos litigation across thousands of individual and smaller class actions, and subsequent congressional proposals for a national asbestos compensation fund never passed. A properly structured settlement with separate sub-classes and independent counsel for future claimants, as Justice Ginsburg\'s opinion implied might be permissible, could potentially have addressed the adequacy concerns.',
    lessonsLearned: [
      'Settlement classes must satisfy all Rule 23 requirements except trial manageability, with no relaxed standard for the settlement context',
      'Class counsel cannot simultaneously represent groups with structurally divergent financial interests without separate representation and sub-classes',
      'Future claimants in mass tort settlements require independent representation because their interests in preserving future compensation rights may conflict with present claimants\' need for immediate payment',
      'The terms of a settlement agreement itself can be the best evidence of inadequacy and conflict, allowing courts to identify structural problems without full merits inquiry'
    ],
    bestPractices: [
      'When structuring a settlement class involving diverse injury profiles, create sub-classes with independent counsel for each distinct group whose interests might conflict',
      'Ensure that the settlement allocation among sub-classes is negotiated by counsel with undivided loyalty to each sub-class before the global terms are agreed upon',
      'Avoid negotiating global settlement caps that pit present and future claimants against each other for shares of a limited fund without separate representation',
      'Preserve core litigation rights such as punitive damages for all class members unless separately negotiated and approved by counsel representing only those members'
    ],
    significance: 'Amchem Products v. Windsor is the foundational case governing settlement class actions and remains the Supreme Court\'s most thorough treatment of the requirements for certifying a class for settlement purposes. By rejecting any relaxed standard for settlement classes and holding that Rule 23 requirements apply with full vigor, the Court prevented the class action device from becoming a tool for defendants and plaintiffs\' counsel to collude in binding absent plaintiffs to inadequate settlements. The decision has been the primary obstacle to global mass tort settlements and forced plaintiffs\' firms and defendants to negotiate more carefully structured settlements with adequate sub-class representation. The case also highlighted the structural problem of entrepreneurial class counsel whose financial incentive to settle may diverge from individual class members\' interests in continued litigation.',
    outcome: 'Settlement Rejected',
    parties: [
      {
        name: 'Amchem Products, Inc.',
        role: 'DEFENDANT',
        counsel: 'Charles Renfrew (Shea & Gardner)',
        description: 'One of several asbestos manufacturers and members of the Center for Claims Resolution, a consortium organized to manage asbestos liability'
      },
      {
        name: 'George Windsor and other asbestos claimants',
        role: 'PLAINTIFF',
        counsel: 'Gene Locks, Ronald Motley',
        description: 'Named representative plaintiffs for both present asbestos disease claimants and future exposure-only claimants'
      },
      {
        name: 'Georgine objectors',
        role: 'INTERVENOR',
        counsel: 'Frederick Baron',
        description: 'Objecting asbestos plaintiffs who challenged the adequacy of the settlement and the representation of present claimants\' interests'
      }
    ]
  },
  {
    litigationSlug: 'class-action',
    name: 'Comcast Corp. v. Behrend',
    citation: '569 U.S. 27 (2013)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2013,
    facts: 'Cable television subscribers in the Philadelphia area brought a class action against Comcast Corporation alleging that Comcast had monopolized the cable television market in the Philadelphia Designated Market Area through a series of "clustering" transactions in which it swapped cable systems with other providers to build a dominant regional presence. Plaintiffs advanced four theories of antitrust harm and sought class certification, which Comcast contested on the ground that any damages model must be capable of measuring damages attributable only to the theories of harm that survived class certification. The district court accepted only one of the four theories—that Comcast\'s clustering strategy reduced competition from overbuilders, cable companies that build competing systems in areas already served by an incumbent—and certified a class for purposes of proving impact and damages under this single theory. The plaintiffs\' damages expert, Dr. James McClave, offered a regression model purporting to calculate $875 million in damages from reduced competition, but Comcast argued the model did not isolate damages from the accepted overbuilder-competition theory and instead calculated damages attributable to all four theories collectively.',
    keyLegalIssues: [
      'Whether a class may be certified under Rule 23(b)(3) when the plaintiffs\' damages model does not measure damages attributable only to the theory of liability accepted by the court for class-wide treatment',
      'Whether Rule 23(b)(3)\'s predominance requirement demands that plaintiffs present a workable damages model at the class certification stage',
      'Whether antitrust impact and damages can be calculated on a class-wide basis when the accepted liability theory requires individualized proof of competitive harm',
      'The extent to which Daubert v. Merrell Dow applies to expert damages models offered at the class certification stage'
    ],
    plaintiffArguments: 'Plaintiffs argued that their regression model was a valid statistical method for calculating aggregate class-wide damages consistent with the antitrust injury alleged, and that any deficiencies in the model went to the weight and admissibility of the evidence at trial rather than class certification. They contended that class action plaintiffs are not required to prove damages at the certification stage but only to show that damages can be measured on a class-wide basis consistent with the theory of liability, and that the district court\'s acceptance of the model satisfied this requirement. Plaintiffs further argued that antitrust law permits an inference of class-wide impact once a conspiracy or monopoly is established, and that the regression methodology, regardless of whether it perfectly isolated the overbuilder-suppression theory, was sufficient to establish that all class members suffered some harm.',
    defendantArguments: 'Comcast argued that the plaintiffs\' damages model was fatally flawed because it measured total antitrust damages from all four theories of harm, not merely the one theory the district court found suitable for class-wide adjudication, and that a model incapable of distinguishing one source of antitrust harm from another could not satisfy Rule 23(b)(3)\'s predominance requirement. The company contended that the Supreme Court\'s precedents require that damages be capable of measurement on a class-wide basis through common proof tied to the accepted liability theory, and that permitting a class to proceed with a non-matching damages model would force Comcast to defend against liability theories already rejected as unsuitable for class treatment. Comcast further argued that at the certification stage, courts must resolve, not merely accept, disputes about the reliability of expert damages methodologies.',
    proceduralHistory: 'The plaintiffs filed suit in the Eastern District of Pennsylvania in 2003. District Judge John Padova certified a class of approximately two million current and former Comcast cable subscribers after accepting one of four proffered liability theories and finding the McClave regression model sufficient to establish predominance of common issues. The Third Circuit affirmed class certification in a divided panel decision, holding that it was not required to decide whether the model definitively tied damages to the single accepted theory because such inquiries were premature at the certification stage.',
    finalDecision: 'The Supreme Court reversed the Third Circuit 5-4 in an opinion by Justice Scalia. The Court held that the plaintiffs\' damages model failed to satisfy Rule 23(b)(3) because it did not measure damages attributable only to the single theory of antitrust liability accepted by the district court for class-wide treatment, and that this failure meant common issues did not predominate over individual ones.',
    judicialReasoning: 'Justice Scalia applied the rigorous analysis standard established in Wal-Mart v. Dukes to hold that courts must conduct a full inquiry into whether the Rule 23(b)(3) predominance requirement is satisfied, even when doing so requires evaluating expert testimony. The majority reasoned that if plaintiffs\' damages model does not isolate damages from the one accepted liability theory, then proof of damages will require individual inquiries into each class member\'s unique circumstances and cannot be established through common proof applicable to the entire class. The Court rejected the Third Circuit\'s view that flaws in the damages model went only to trial-stage admissibility, holding that a model failing to tie damages to the approved theory is not even a workable class-wide model and therefore destroys the predominance of common issues at the certification stage. Justices Ginsburg and Breyer dissented, arguing the majority improperly decided a question not raised by the petition for certiorari and that the damages model was sufficiently tied to the overbuilder-competition theory.',
    legalStandards: [
      'Federal Rule of Civil Procedure 23(b)(3) predominance of common questions requirement',
      'Rigorous analysis standard for expert evidence at class certification per Wal-Mart v. Dukes',
      'Antitrust injury and class-wide impact requirements under Sherman Act Section 2',
      'Requirement that damages model be consistent with and tied to the theory of liability accepted for class treatment',
      'Daubert standard for expert testimony as applied at the class certification stage'
    ],
    keyPrecedents: [
      'Wal-Mart Stores, Inc. v. Dukes, 564 U.S. 338 (2011) - rigorous analysis of Rule 23 requirements',
      'Hydrogen Peroxide Antitrust Litigation, 552 F.3d 305 (3d Cir. 2008) - Third Circuit antitrust class certification standards',
      'In re Rail Freight Fuel Surcharge Antitrust Litigation, 725 F.3d 244 (D.C. Cir. 2013) - post-Comcast application to antitrust class damages'
    ],
    evidenceAnalysis: 'The central evidentiary issue was Dr. McClave\'s regression model, which purported to calculate the price overcharge suffered by Philadelphia cable subscribers as a result of Comcast\'s anticompetitive clustering strategy. The model compared actual cable prices in the Philadelphia DMA to prices in other comparable markets and attributed the difference to antitrust harm. However, the model made no attempt to disaggregate which portion of the alleged overcharge resulted from suppression of overbuilder competition specifically, as opposed to the three other theories of harm the district court had rejected for class-wide treatment. The Court found this methodological failure disqualifying: without being able to attribute damages to the accepted theory, any individual class member\'s damages necessarily required individual inquiry.',
    alternativeOutcomes: 'Had the damages model been accepted, the Philadelphia cable subscribers would have proceeded to trial as a class with potential damages of $875 million, trebled to $2.625 billion under antitrust law. Plaintiffs could have sought class certification on all four theories and presented separate damages models for each, then narrowed the class definition after class certification to correspond to whichever theory survived. On remand, plaintiffs could also have tried to develop a new regression model that isolated the overbuilder-competition damages, though this would require substantially more economic analysis.',
    lessonsLearned: [
      'Plaintiffs must present a damages model at class certification that specifically measures only those damages attributable to the liability theory accepted for class-wide treatment',
      'Antitrust class actions with multiple theories of harm require separate damages models for each theory, so that class certification can proceed on only those theories suitable for class-wide proof',
      'Courts applying rigorous analysis at class certification may resolve disputes about expert methodology and need not defer expert challenges to the trial stage',
      'Defendants should scrutinize whether plaintiffs\' damages model actually corresponds to the class-wide liability theory, as a mismatch is grounds to oppose predominance under Rule 23(b)(3)'
    ],
    bestPractices: [
      'Develop a separate, theory-specific damages model for each liability theory advanced, so that if some theories are rejected at class certification, a corresponding damages model remains',
      'Ensure that economic experts building damages models understand the specific causal story behind each theory of liability and isolate that specific mechanism in the regression methodology',
      'In antitrust class actions, conduct sensitivity analyses showing that the damages estimate does not materially change if any one theory is excluded, to demonstrate that the model is not inflated by rejected theories',
      'Defendants should retain rebuttal economic experts to critique the correspondence between plaintiffs\' damages model and accepted liability theories before the class certification hearing'
    ],
    significance: 'Comcast Corp. v. Behrend is a landmark post-Wal-Mart decision that extended the rigorous analysis requirement to the damages element of Rule 23(b)(3) class certification, requiring that plaintiffs demonstrate a workable class-wide damages model at the certification stage rather than simply asserting that damages can be calculated later. The decision significantly raised the cost and complexity of prosecuting antitrust class actions by requiring sophisticated economic analysis before the class is even certified, and it has been widely cited in circuit courts to challenge damages models in securities fraud, consumer protection, and other class contexts. The ruling has intensified the role of economic experts at class certification and shifted the economics of complex litigation by making it easier for defendants to defeat class certification by attacking the damages methodology.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Caroline Behrend and Philadelphia cable subscribers',
        role: 'PLAINTIFF',
        counsel: 'Barry Barnett (Susman Godfrey)',
        description: 'Class of approximately two million current and former Comcast cable subscribers in the Philadelphia Designated Market Area'
      },
      {
        name: 'Comcast Corporation',
        role: 'DEFENDANT',
        counsel: 'Helgi Walker (Gibson, Dunn & Crutcher)',
        description: 'The dominant cable television provider in the Philadelphia metropolitan area, which had grown through a series of regional clustering transactions'
      }
    ]
  },
  {
    litigationSlug: 'class-action',
    name: 'Eisen v. Carlisle & Jacquelin',
    citation: '417 U.S. 156 (1974)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1974,
    facts: 'Morton Eisen, a small investor who owned two shares of Sperry Rand Corporation stock, brought a class action lawsuit against Carlisle & Jacquelin and DeCoppet & Doremus, the two dominant dealers in odd-lot trading on the New York Stock Exchange. Eisen alleged that the defendants had fixed the price of odd-lot trading commissions—transactions involving fewer than 100 shares—in violation of the federal antitrust laws and the Securities Exchange Act of 1934. The proposed class consisted of approximately six million odd-lot investors who had traded on the NYSE over an eleven-year period, making it one of the largest class actions ever proposed at the time. The critical practical problem the case raised was who must bear the cost of providing individual notice to all six million class members as required by Rule 23(c)(2), which the district court estimated would cost approximately $315,000. The district court, finding that Eisen\'s individual share of any recovery would be only $70, imposed 90% of the notice costs on the defendants based on its preliminary assessment that Eisen would likely succeed on the merits.',
    keyLegalIssues: [
      'Whether Rule 23(c)(2) requires individual notice to all identifiable class members in a Rule 23(b)(3) class action, or whether notice may be provided by publication',
      'Whether the named plaintiff or the defendant bears the cost of providing individual notice to class members',
      'Whether a district court may make a preliminary assessment of the merits of the plaintiff\'s claims at the class certification stage to determine the allocation of notice costs',
      'What constitutes the "best notice practicable" under Rule 23(c)(2) when the class is extremely large'
    ],
    plaintiffArguments: 'Eisen argued that requiring him alone to bear the full cost of notifying six million class members would effectively deny small investors access to the class action device, because no rational plaintiff would spend $315,000 to vindicate a personal claim of $70. He contended that the district court\'s procedure of requiring defendants to pay the majority of notice costs based on an early assessment of the merits was a practical solution to this problem and was consistent with Rule 23\'s purpose of facilitating aggregate litigation of small claims. Eisen further argued that some form of notice other than individual mail—such as publication in financial newspapers—should satisfy the Rule 23(c)(2) requirement and would be sufficient to protect absent class members\' rights at a much lower cost.',
    defendantArguments: 'Carlisle & Jacquelin argued that Rule 23(c)(2) unambiguously requires individual notice to all class members whose identities and addresses can be determined with reasonable effort, and that the plain text of the rule admitted no exception for cases where such notice would be prohibitively expensive. The defendants contended that the district court\'s preliminary assessment of the merits to allocate notice costs was an improper and prejudicial procedure that denied defendants a fair hearing, and that the correct rule was that the plaintiff, who brings the suit and seeks its benefits, must bear the costs of maintaining it. They argued that if individual notice would make a class action economically unfeasible, that merely reflected the reality that the case was not appropriate for class treatment.',
    proceduralHistory: 'Eisen first filed suit in 1966 in the Southern District of New York. After years of preliminary litigation, the Second Circuit initially reversed a district court ruling that the case was not maintainable as a class action. On remand, District Judge Tyler imposed 90% of notice costs on defendants based on a preliminary merits assessment, and the Second Circuit certified an interlocutory appeal. The Second Circuit panel agreed that individual notice was required but found the cost-shifting approach improper while suggesting that some portion of costs might be allocated to defendants. The Supreme Court granted certiorari to resolve the circuit split on the notice and cost questions.',
    finalDecision: 'The Supreme Court reversed the Second Circuit and vacated the district court\'s order in an 8-0 decision authored by Justice Powell. The Court held that Rule 23(c)(2) requires individual notice to all identifiable class members in a Rule 23(b)(3) class action as a matter of due process, that publication notice does not satisfy this requirement where individual notice is feasible, and that the named plaintiff must bear the cost of providing such notice. The Court also held that district courts are categorically prohibited from making any preliminary assessment of the merits at the class certification stage.',
    judicialReasoning: 'Justice Powell grounded the individual notice requirement in the Due Process Clause of the Fifth Amendment, reasoning that class members who have not affirmatively joined a class have the right to receive actual notice before they are bound by a judgment or lose the right to opt out and pursue individual claims. The Court held that Rule 23(c)(2)\'s requirement that the court "direct to the members of the class the best notice practicable" meant individual notice where class members are identifiable through reasonable effort, not merely the best method practicable given cost constraints. On cost allocation, the Court held that because the plaintiff brings the action for his own benefit, he must bear the costs, and that the practical effect of making class actions infeasible for small-stakes claims was for Congress, not courts, to remedy. Most importantly, the Court categorically forbade preliminary merits assessments at certification, holding that judges may not consider the probability of success on the merits when deciding whether to certify a class or allocate class action costs.',
    legalStandards: [
      'Federal Rule of Civil Procedure 23(c)(2) best notice practicable requirement for Rule 23(b)(3) classes',
      'Due Process Clause of the Fifth Amendment protection for absent class members\' right to notice and opt-out',
      'Prohibition on preliminary merits assessment at the class certification stage',
      'Named plaintiff\'s obligation to bear the costs of maintaining the class action',
      'Standards for determining when individual notice versus publication notice satisfies due process'
    ],
    keyPrecedents: [
      'Mullane v. Central Hanover Bank & Trust Co., 339 U.S. 306 (1950) - constitutional minimum for notice to absent parties',
      'Hansberry v. Lee, 311 U.S. 32 (1940) - due process requires that absent class members be adequately represented and notified',
      'Oppenheimer Fund, Inc. v. Sanders, 437 U.S. 340 (1978) - follow-on case addressing who must compile the list of class members for notice'
    ],
    evidenceAnalysis: 'The Court focused on the practical and legal evidence presented about the composition of the proposed class. Records from the NYSE and broker-dealers made it possible to identify approximately 2.25 million class members for whom names and addresses were available, making individual notice technically feasible even if expensive. The estimated $315,000 cost of mailing individual notice to these members was presented as the key factual predicate for the district court\'s novel cost-shifting approach, but the Court rejected cost as a basis for relaxing the notice requirement or for making a preliminary merits assessment to shift costs.',
    alternativeOutcomes: 'If publication notice had been accepted as sufficient, the case would have proceeded as a class action covering six million odd-lot traders at a fraction of the notice cost, potentially changing the economics of consumer class action litigation significantly. Had the Court permitted preliminary merits assessments to shift costs, district courts would have acquired substantial power to prejudge litigation at the certification stage, potentially creating incentives for early settlements and distorting the adversarial process. The prohibition on preliminary merits assessments became one of the most cited procedural rules in class action jurisprudence, though subsequent cases including Wal-Mart v. Dukes created tension by requiring rigorous factual analysis at certification.',
    lessonsLearned: [
      'Individual notice by first-class mail is constitutionally required for all identifiable class members in Rule 23(b)(3) classes, regardless of the cost relative to any individual plaintiff\'s stake',
      'The named plaintiff bears the cost of providing notice to the class as a condition of prosecuting the class action, and this cost can make small-stakes class actions economically infeasible',
      'District courts are categorically prohibited from making any assessment of the merits of the plaintiffs\' claims at the class certification stage, whether for cost allocation or any other purpose',
      'The "best notice practicable" standard requires individual notice where class members are identifiable, not merely the best notice given financial constraints'
    ],
    bestPractices: [
      'Before filing a class action, assess the total cost of providing individual notice to all identifiable class members and ensure the named plaintiff or counsel can fund this expense',
      'Work with notice administrators early in the case to identify the optimal approach for compiling class member data from available databases, minimizing notice costs while complying with the individual notice requirement',
      'In large classes where individual notice costs are prohibitive, consider structuring the class to use a claims-made process that reduces the universe of notified members, or negotiate notice cost arrangements in early settlement discussions',
      'Avoid any argument or submission at class certification that touches on the merits of the plaintiffs\' claims, as courts must and will refuse to consider such arguments at this stage'
    ],
    significance: 'Eisen v. Carlisle & Jacquelin established two enduring pillars of class action procedure in the United States: the constitutional requirement of individual notice to identifiable class members in Rule 23(b)(3) classes, and the categorical prohibition on preliminary merits assessments at the class certification stage. The notice requirement has made large consumer class actions enormously expensive to prosecute and has forced plaintiffs\' lawyers to develop sophisticated notice administration programs. The no-merits-at-certification rule became a foundational principle later clarified and qualified by Wal-Mart v. Dukes and Comcast Corp. v. Behrend, which required rigorous factual analysis of Rule 23 requirements even where those requirements overlap with the merits. The case exposed the tension between the class action\'s purpose of vindicating small-stakes claims and the procedural protections required to protect absent class members\' constitutional rights.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Morton Eisen',
        role: 'PLAINTIFF',
        counsel: 'Samuel Handsman',
        description: 'Individual investor who owned two shares of Sperry Rand stock and sought to represent a class of six million odd-lot traders on the New York Stock Exchange'
      },
      {
        name: 'Carlisle & Jacquelin',
        role: 'DEFENDANT',
        counsel: 'Theodore Dewar',
        description: 'One of two dominant dealers in odd-lot stock transactions on the New York Stock Exchange, alleged to have fixed trading commissions in violation of antitrust law'
      },
      {
        name: 'DeCoppet & Doremus',
        role: 'DEFENDANT',
        description: 'The other dominant odd-lot dealer on the NYSE, co-defendant in the alleged price-fixing conspiracy'
      }
    ]
  },
  {
    litigationSlug: 'class-action',
    name: 'Phillips Petroleum Co. v. Shutts',
    citation: '472 U.S. 797 (1985)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1985,
    facts: 'Approximately 28,000 royalty owners who held interests in natural gas leases operated by Phillips Petroleum Company filed a class action in Kansas state court to recover interest on royalty payments that Phillips had allegedly withheld while seeking regulatory approval to raise natural gas prices. The plaintiff class was nationwide in scope, with over 99% of the class members having no connection to Kansas—they were residents of other states whose leases involved gas wells located in dozens of other states. The Kansas Supreme Court applied Kansas law to all claims of all class members, reasoning that Kansas had an interest in regulating the conduct of Phillips, which was headquartered and did significant business there. Phillips challenged both the Kansas court\'s assertion of personal jurisdiction over the absent class members and the court\'s application of Kansas substantive law to claims arising under the laws of many different states, arguing that neither the Due Process Clause nor the Full Faith and Credit Clause permitted such extraterritorial reach.',
    keyLegalIssues: [
      'Whether a state court can assert personal jurisdiction over absent plaintiff class members who have no connection to the forum state, without violating the Due Process Clause of the Fourteenth Amendment',
      'Whether the Full Faith and Credit Clause and Due Process Clause limit a state court\'s ability to apply its own substantive law to all claims in a nationwide class action regardless of where the claims arose',
      'What minimum protections—notice, opt-out rights, adequate representation—must be provided to absent plaintiff class members as a matter of constitutional due process',
      'Whether the same minimum contacts analysis that governs defendant jurisdiction applies to absent plaintiff class members'
    ],
    plaintiffArguments: 'The plaintiff class argued that absent plaintiff class members do not need minimum contacts with the forum state because, unlike defendants, they are not being subjected to the coercive power of the state—they stand only to benefit from the class action and bear no risk of an adverse judgment unless they choose to participate. Class representatives contended that the notice and opt-out procedures required under Kansas class action rules provided adequate due process protection for absent plaintiffs, because any member who objected to Kansas jurisdiction or law could simply opt out and litigate individually elsewhere. On the choice-of-law issue, plaintiffs argued Kansas had a legitimate interest in applying its law uniformly to all class claims because Phillips was a Kansas-based defendant and uniform application of one state\'s law was necessary for the class action to be manageable.',
    defendantArguments: 'Phillips Petroleum argued that applying Kansas law to the claims of class members whose leases were in other states and who had no connection to Kansas violated the Full Faith and Credit Clause and the Due Process Clause, because each state has an interest in having its own law applied to disputes arising within its borders, and Kansas had no legitimate interest in displacing the law of states where the gas was produced. On the jurisdiction question, Phillips argued that permitting a state to bind out-of-state plaintiffs without minimum contacts would allow forum shopping states to become the default home for all nationwide class actions, importing plaintiffs from across the country without any connection to the forum.',
    proceduralHistory: 'The royalty owners filed suit in Kansas state court in 1977. The trial court certified a class of over 28,000 royalty owners and, after a bench trial, awarded approximately $5 million in interest. The Kansas Supreme Court affirmed the class certification and the application of Kansas law to all claims, holding that neither constitutional provision was violated. Phillips petitioned the United States Supreme Court for certiorari, which was granted to address the significant constitutional questions about the reach of state court class action jurisdiction and choice of law.',
    finalDecision: 'The Supreme Court issued a mixed decision authored by Justice Rehnquist. The Court held unanimously that a modified minimum contacts requirement does apply to absent plaintiff class members, but that the requirement is significantly less demanding than for defendants and was satisfied by the notice and opt-out procedures provided. On the choice-of-law question, the Court held 7-2 that Kansas could not apply its own law to all claims in the class without violating the Full Faith and Credit Clause, because Kansas lacked sufficient interest in the claims of plaintiffs whose leases and gas wells were entirely in other states.',
    judicialReasoning: 'Justice Rehnquist reasoned that while absent plaintiff class members do require constitutional due process protection, the analysis differs from that applied to defendants because plaintiffs are not subject to the coercive power of the forum state and cannot suffer an adverse judgment. The Court held that the constitutional minimum for absent plaintiffs requires: adequate notice reasonably calculated to reach them, an opportunity to opt out, and adequate representation by class counsel. Because the Kansas class action procedures provided these protections, the court\'s exercise of jurisdiction over absent plaintiff class members was constitutionally permissible. On choice of law, however, the Court applied the Full Faith and Credit Clause to hold that Kansas could not apply its law to claims with no significant connection to Kansas—merely wishing to provide a uniform rule or having the defendant headquartered in Kansas was insufficient when the gas leases, wells, and plaintiffs were located in other states, each of which had its own interest in the applicable law.',
    legalStandards: [
      'Due Process Clause of the Fourteenth Amendment as applied to absent plaintiff class members\' right to notice and opt-out',
      'Full Faith and Credit Clause limitations on state court choice-of-law in multistate class actions',
      'Minimum constitutional requirements for class action procedure: adequate notice, opt-out opportunity, and adequate representation',
      'Significant aggregation of contacts test for determining when a state has sufficient interest to apply its law to out-of-state claims',
      'Distinction between jurisdiction over absent plaintiffs and jurisdiction over absent defendants'
    ],
    keyPrecedents: [
      'International Shoe Co. v. Washington, 326 U.S. 310 (1945) - minimum contacts standard for personal jurisdiction (distinguished for plaintiffs)',
      'Allstate Insurance Co. v. Hague, 449 U.S. 302 (1981) - constitutional limits on choice of law under Full Faith and Credit Clause',
      'Hansberry v. Lee, 311 U.S. 32 (1940) - due process requirement of adequate representation for absent class members'
    ],
    evidenceAnalysis: 'The factual record established that over 99% of the 28,000 class members were nonresidents of Kansas, that the gas leases at issue were located in eleven different states primarily in the Southwest and Midwest, and that the only connection to Kansas was Phillips Petroleum\'s corporate headquarters and its registration to do business there. The Court examined the text of the royalty agreements to determine which states\' laws would govern the interest-on-royalties claims and found that Kansas had no legitimate interest in supplanting the substantive law of states like Oklahoma, Texas, and Wyoming where the actual gas production occurred. Statistical evidence about the geographic distribution of class members was central to the Court\'s finding that Kansas could not legitimately apply its law as a uniform rule.',
    alternativeOutcomes: 'Had the Court upheld Kansas\'s application of its own law to all claims, the decision would have created a powerful incentive for plaintiffs to file nationwide class actions in states with favorable substantive law and permissive class action procedures, regardless of any connection to the dispute. This would have accelerated forum shopping and potentially led Congress or the Court to restrict state court class action jurisdiction. If the Court had also found that absent plaintiff class members require the same minimum contacts as defendants, state court class actions would have been severely constrained to classes with geographic ties to the forum state, effectively channeling all large class actions into federal court.',
    lessonsLearned: [
      'Absent plaintiff class members require some constitutional protections—notice, opt-out rights, and adequate representation—even though they need not have minimum contacts with the forum state in the same way defendants do',
      'State courts cannot apply their own substantive law uniformly to a nationwide class action when the vast majority of class members and claims have no connection to the forum state',
      'The Full Faith and Credit Clause imposes real limits on class action forum shopping by requiring states to apply the law of other states to claims that arose under those states\' legal regimes',
      'Choice-of-law analysis in multistate class actions requires careful attention to each state\'s interest in having its law applied to the claims of its residents and those whose transactions occurred within its borders'
    ],
    bestPractices: [
      'When filing a nationwide class action in state court, carefully analyze whether the forum state has sufficient contacts with the claims of all class members to apply its substantive law uniformly, or whether different states\' laws must be applied to different sub-groups',
      'Conduct a choice-of-law analysis before class certification to identify how many different states\' laws might apply to the class claims, since the need to apply multiple states\' laws may defeat predominance under Rule 23(b)(3)',
      'In cases where multistate choice-of-law issues threaten to defeat class certification, consider whether the case can be certified as a Rule 23(b)(2) injunctive class or whether sub-classes can be created for each state\'s law',
      'Defendants opposing nationwide class actions should develop detailed choice-of-law arguments demonstrating that many different states\' laws apply to the class claims, making class certification inappropriate'
    ],
    significance: 'Phillips Petroleum Co. v. Shutts is a foundational constitutional case governing state court class actions that established the minimum procedural protections required by the Due Process Clause for absent plaintiff class members and imposed meaningful Full Faith and Credit Clause limits on state court choice-of-law in multistate class actions. The decision\'s holding that state courts cannot arbitrarily apply forum law to all claims in a nationwide class has become one of the most powerful weapons in defendants\' arsenal against class certification, because it exposes the need to apply multiple states\' laws to the class claims, which frequently defeats the predominance of common issues under Rule 23(b)(3). The case also helped channel large class actions toward federal court and toward the Class Action Fairness Act of 2005, which gave federal courts jurisdiction over large interstate class actions precisely to address the forum-shopping concerns Shutts highlighted. The constitutional floor for absent plaintiff protections—notice, opt-out rights, and adequate representation—remains a bedrock principle of class action procedure.',
    outcome: 'Mixed',
    parties: [
      {
        name: 'Irl Shutts and other royalty owners',
        role: 'PLAINTIFF',
        counsel: 'J. Eugene Balloun',
        description: 'Class of approximately 28,000 natural gas royalty owners who held interests in leases operated by Phillips Petroleum across multiple states'
      },
      {
        name: 'Phillips Petroleum Company',
        role: 'DEFENDANT',
        counsel: 'Glen D. Johnson',
        description: 'Major integrated oil and gas company headquartered in Bartlesville, Oklahoma (later Kansas operations), operator of natural gas leases across the United States'
      },
      {
        name: 'State of Kansas',
        role: 'AMICUS_CURIAE',
        description: 'Forum state defending its courts\' authority to apply Kansas law uniformly to all claims in the class action'
      }
    ]
  }
];

export default cases;
