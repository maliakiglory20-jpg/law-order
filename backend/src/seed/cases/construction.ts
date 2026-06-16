import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'construction',
    name: 'United States v. Spearin',
    citation: '248 U.S. 132 (1918)',
    jurisdiction: 'Federal',
    court: 'United States Supreme Court',
    year: 1918,
    isFeatured: true,
    outcome: 'Plaintiff Victory',
    facts:
      'The United States Navy contracted with Lieutenant Colonel Spearin to build a dry dock at the Brooklyn Navy Yard. The government provided detailed plans and specifications that included the design of a sewer system integral to the project. After Spearin began construction, a storm caused the sewer to back up and burst, flooding and destroying a significant portion of the completed work. The government\'s own specifications had directed the sewer\'s construction in a way that made it susceptible to overflow from a connecting sewer controlled by the city. Spearin halted work and demanded that the government repair the sewer and compensate him for his losses, but the government refused, eventually terminating the contract and re-letting the work at a higher price.',
    keyLegalIssues: [
      'Whether the government\'s provision of detailed plans and specifications carries an implied warranty that those specifications are accurate and sufficient.',
      'Whether a contractor is excused from performance when government-supplied designs are defective.',
      'Allocation of risk between owner and contractor when project plans are owner-provided.',
      'Whether a contractor who halts work due to defective specifications is liable for breach of contract.',
    ],
    plaintiffArguments:
      'Spearin argued that by furnishing detailed plans and specifications, the government impliedly warranted that following those plans would produce a workable result. He contended that a contractor who relies on owner-supplied designs cannot be held responsible when those designs prove defective through no fault of the contractor. Spearin further argued that the defective sewer rendered performance impossible under the original contract terms, excusing him from further performance and entitling him to compensation for work already done.',
    defendantArguments:
      'The United States argued that the contract placed all risk of subsurface and site conditions on the contractor, and that Spearin\'s duty was to complete the work regardless of unforeseen difficulties. The government maintained that the contractor had an obligation to inspect the site independently and was not entitled to rely blindly on government-furnished plans. It further argued that Spearin\'s unilateral work stoppage constituted a breach of contract that justified termination.',
    proceduralHistory:
      'Spearin sued in the Court of Claims, which found in his favor and awarded damages for the losses sustained due to the defective sewer design. The United States appealed to the Supreme Court, arguing that the Court of Claims had erred in placing responsibility for the defective specifications on the government.',
    finalDecision:
      'The Supreme Court unanimously affirmed the Court of Claims\' judgment in favor of Spearin, holding that when a contractor is bound to build according to plans and specifications prepared by the owner, the contractor is not responsible for the consequences of defects in those plans and specifications. The government\'s implied warranty of the sufficiency of its own plans was breached, entitling Spearin to recover his losses.',
    judicialReasoning:
      'Justice Brandeis, writing for the Court, articulated what became known as the "Spearin Doctrine": when an owner provides plans and specifications and directs a contractor to follow them, the owner impliedly warrants that compliance with those specifications will produce the intended result. The Court reasoned that a contractor who follows owner-supplied plans cannot be charged with responsibility for defects in those plans. The burden-shifting logic was grounded in the principle that the party who designs a system bears responsibility for that system\'s performance. The Court further noted that the general clauses in the contract requiring the contractor to examine the site and verify conditions could not override the specific warranty implied from the government\'s own detailed specifications. The decision recognized the fundamental asymmetry of information: the owner who prepares designs possesses superior knowledge of their adequacy.',
    legalStandards: [
      'Implied warranty of the sufficiency of owner-provided plans and specifications (the Spearin Doctrine).',
      'Contractor relief from performance obligations when owner-supplied designs are defective.',
      'Impossibility of performance caused by owner-furnished conditions.',
      'Government contract risk allocation between sovereign and contractor.',
    ],
    keyPrecedents: [
      'MacKnight Flintic Stone Co. v. The Mayor (1899) — early recognition of contractor reliance on owner plans.',
      'Horgan v. Mayor of New York (1893) — owner liability for defective specifications.',
      'Christie v. United States (1915) — contractor excuse from defective government directions.',
    ],
    evidenceAnalysis:
      'The Court examined the contract documents, including the government\'s detailed plans and specifications for the sewer system, and the historical storm drainage records that showed the defect was inherent in the design rather than caused by any contractor error. Engineering testimony established that the sewer as specified was inadequate for the site conditions known to the government at the time of contracting. Records of the city sewer system demonstrated that the backup originated from the connecting sewer—a risk the government\'s own engineers should have anticipated.',
    alternativeOutcomes:
      'Had the Court ruled for the government, contractors working on public projects would have borne unlimited risk for owner-provided designs, dramatically increasing bid prices to account for design defect risk. Alternatively, a narrower ruling limited to the specific facts of the sewer failure would have left the broader implied warranty doctrine unsettled, requiring further litigation to clarify the scope of contractor reliance on government specifications.',
    lessonsLearned: [
      'Owners who provide detailed plans and specifications impliedly warrant their sufficiency.',
      'Contractors should document all instances where they follow owner-provided designs to preserve warranty claims.',
      'Risk allocation provisions in contracts cannot eliminate the implied Spearin warranty without explicit, unambiguous language.',
      'Project owners should conduct thorough design review before incorporating existing infrastructure into project specifications.',
    ],
    bestPractices: [
      'Include explicit "differing site conditions" clauses to address the allocation of risk for subsurface and latent defects.',
      'Require independent design review of all owner-furnished specifications before contractor mobilization.',
      'Document in writing any contractor concerns about the adequacy of owner-provided designs before proceeding.',
      'Conduct pre-bid site investigations and share findings with all bidders to reduce hidden risk.',
    ],
    significance:
      'United States v. Spearin is among the most consequential construction law decisions in American jurisprudence. The "Spearin Doctrine" it established has been universally adopted across federal and state jurisdictions and serves as the foundational principle governing the allocation of design risk in construction contracts. The case fundamentally shaped how construction contracts are drafted, how bids are calculated, and how disputes over defective plans are resolved. Its influence extends to virtually every major public works project in the United States and has been cited in hundreds of subsequent construction law cases. The doctrine also prompted the development of standardized contract clauses—such as the "changed conditions" clause—designed to expressly address the risk allocation principles Spearin implied.',
    parties: [
      {
        name: 'Lieutenant Colonel P.J. Spearin',
        role: 'PLAINTIFF',
        description: 'Government contractor engaged to build a dry dock at the Brooklyn Navy Yard.',
      },
      {
        name: 'United States of America',
        role: 'DEFENDANT',
        description: 'Federal government that furnished defective sewer specifications as part of the dry dock project.',
      },
    ],
  },

  {
    litigationSlug: 'construction',
    name: 'Jacob & Youngs, Inc. v. Kent',
    citation: '230 N.Y. 239, 129 N.E. 889 (1921)',
    jurisdiction: 'New York',
    court: 'New York Court of Appeals',
    year: 1921,
    outcome: 'Plaintiff Victory',
    facts:
      'Jacob & Youngs, Inc. was a contractor hired by George Edward Kent to build a country home in Jericho, New York. The contract specified that all wrought-iron pipe used in the plumbing system was to be of "Reading" brand manufacture. Near the completion of the project, Kent\'s architect discovered that some of the pipe installed was not Reading brand but rather Cohoes pipe, which was of equivalent quality and industry specification. The contractor had installed the non-Reading pipe through an oversight rather than intentional substitution. When Kent demanded that the contractor replace all the non-conforming pipe—which would have required tearing out large sections of completed walls and ceilings at great expense—the contractor refused and sued for the unpaid balance of the contract price. Kent withheld approximately $3,500, claiming breach of contract.',
    keyLegalIssues: [
      'Whether a contractor who substantially performs a construction contract is entitled to recover the contract price, less any reduction for minor deviations.',
      'Whether the doctrine of substantial performance applies where a specification is violated through oversight rather than bad faith.',
      'How damages should be measured when full performance would require economic waste disproportionate to the benefit gained.',
      'Whether a brand-specific specification is a condition precedent to payment or merely a covenant.',
    ],
    plaintiffArguments:
      'Jacob & Youngs argued that it had substantially performed the contract, having constructed a complete and habitable home that fully satisfied the functional purpose of the agreement. The contractor contended that the substituted Cohoes pipe was of equal quality, durability, and utility to the specified Reading pipe, making any deviation trivial. It further argued that requiring the demolition and reconstruction of completed walls and plumbing solely to replace equivalent pipe would constitute economic waste and impose a penalty wholly disproportionate to any actual harm suffered by Kent.',
    defendantArguments:
      'Kent argued that the contract unambiguously required Reading pipe and that the contractor\'s failure to provide it was a material breach, regardless of the quality equivalence of the substituted material. He contended that he was entitled to receive exactly what he contracted for and that the contractor\'s deviation, however innocent, could not be excused by a court substituting its judgment for the parties\' express agreement. Kent also argued that the measure of damages should be the cost of replacement, not the diminution in market value of the property.',
    proceduralHistory:
      'The trial court ruled in favor of Kent, finding that the contractor had failed to perform the contract as specified and awarding no recovery on the unpaid balance. The Appellate Division reversed, finding substantial performance and awarding the contractor judgment. Kent appealed to the Court of Appeals, arguing that substantial performance should not excuse a clear contractual specification.',
    finalDecision:
      'The Court of Appeals affirmed the Appellate Division\'s ruling in favor of Jacob & Youngs, holding that the contractor had substantially performed the contract and was entitled to recover the contract price less the difference in value between the specified and installed pipe—which was nominal given the equivalence of the materials. The Court ruled that the proper measure of damages was diminution in market value, not cost of replacement, where replacement would involve unreasonable economic waste.',
    judicialReasoning:
      'Judge Benjamin Cardozo authored one of the most celebrated opinions in American contract law, articulating the doctrine of substantial performance as a equitable limitation on the right to demand perfect compliance with every specification. Cardozo distinguished between conditions and promises, explaining that not every contractual term is a condition precedent to recovery. He reasoned that a defect so trivial and innocent that it cannot be cured without tearing down and rebuilding an entire structure is not a material breach that forfeits all right to the contract price. The opinion introduced the principle that when deciding whether a breach is material, courts should consider the extent to which the breaching party has already performed, the hardship of forfeiture, and whether the breach was wilful or merely inadvertent. Cardozo also established the economic waste doctrine: damages measured by cost of completion are inappropriate when they would vastly exceed any benefit to the non-breaching party, and the proper measure is diminution in market value instead.',
    legalStandards: [
      'Doctrine of substantial performance in construction contracts.',
      'Distinction between conditions precedent and covenants in construction specifications.',
      'Economic waste doctrine limiting damages to diminution in value rather than cost of completion.',
      'Materiality of breach analysis in construction contract disputes.',
    ],
    keyPrecedents: [
      'Glacius v. Black (1874) — New York recognition of substantial performance doctrine.',
      'Spence v. Ham (1900) — contractor recovery for substantial performance despite minor defects.',
      'Smith v. Brady (1858) — analysis of conditions and promises in construction agreements.',
    ],
    evidenceAnalysis:
      'The court received evidence that Reading pipe and Cohoes pipe were manufactured to the same industry standards, were interchangeable in all functional respects, and that no engineer or plumber could distinguish between them once installed. Expert testimony established that the market value of the Kent residence was not diminished by the use of Cohoes pipe. The cost of replacement—requiring demolition of finished walls and extensive reconstruction—was shown to be grossly disproportionate to any quantifiable benefit.',
    alternativeOutcomes:
      'Had the Court ruled for Kent on the cost-of-replacement measure of damages, contractors would have faced crushing liability for inadvertent minor deviations from specifications, making construction contracts extraordinarily difficult to price and perform. A ruling that the brand specification was a strict condition precedent to any recovery would have enabled owners to seize the benefit of nearly completed construction while avoiding payment on technical grounds.',
    lessonsLearned: [
      'Specifications for named-brand materials should be accompanied by a "or approved equal" provision to reduce litigation risk.',
      'Contractors must document all substitutions and obtain written owner approval before deviating from specifications.',
      'Courts apply a totality-of-circumstances test to determine whether a breach is material, considering good faith, hardship, and benefit conferred.',
      'The economic waste doctrine limits owner remedies where the cost of correction vastly exceeds any benefit to the owner.',
    ],
    bestPractices: [
      'Require advance written approval from the owner\'s architect for any material or product substitution.',
      'Include clear "or approved equal" language in specifications to provide contractors flexibility while protecting owner intent.',
      'Conduct final inspections with sufficient lead time to address nonconformities before walls and ceilings are closed.',
      'Draft contract provisions explicitly addressing the materiality threshold for specification deviations and corresponding remedies.',
    ],
    significance:
      'Jacob & Youngs v. Kent is a cornerstone of American contract law and construction litigation. Judge Cardozo\'s articulation of the substantial performance doctrine and the economic waste limitation on damages profoundly shaped construction law, contract law generally, and the Restatement (Second) of Contracts, which codified his analysis. The case is studied in virtually every American law school and remains the leading authority for the proposition that technical deviations from specifications, if trivial and innocent, do not forfeit a contractor\'s right to payment. It also established the framework for choosing between cost-of-completion and diminution-in-value damages that remains in use today.',
    parties: [
      {
        name: 'Jacob & Youngs, Inc.',
        role: 'PLAINTIFF',
        description: 'General contractor who built the Kent country residence in Jericho, New York.',
      },
      {
        name: 'George Edward Kent',
        role: 'DEFENDANT',
        description: 'Owner of the country home who withheld payment due to the pipe specification deviation.',
      },
    ],
  },

  {
    litigationSlug: 'construction',
    name: 'Plante v. Jacobs',
    citation: '10 Wis. 2d 567, 103 N.W.2d 296 (1960)',
    jurisdiction: 'Wisconsin',
    court: 'Wisconsin Supreme Court',
    year: 1960,
    outcome: 'Plaintiff Victory',
    facts:
      'Frank M. Plante, a building contractor, entered into a contract with Eugene and Carol Jacobs to construct a house for $26,765. Plante began construction and completed the vast majority of the work, but the Jacobs stopped making progress payments before the project was fully finished, claiming various defects in the construction. Among the defects cited was the misplacement of a wall between the living room and the kitchen that reduced the living room width by approximately one foot from the contracted dimensions. Plante sued to recover the unpaid balance of the contract price. The Jacobs counterclaimed, arguing that they were entitled to damages for the wall misplacement and other alleged defects, and further that the contractor had not substantially performed the contract.',
    keyLegalIssues: [
      'Whether a residential contractor who substantially completes construction is entitled to recover the contract price minus the cost to remedy defects.',
      'How to measure damages for a structural deviation that does not affect market value but does deviate from specifications.',
      'Whether diminution in market value or cost of repair is the appropriate damages standard for construction defects.',
      'What constitutes substantial performance in residential home construction.',
    ],
    plaintiffArguments:
      'Plante argued that he had substantially performed the construction contract, completing all major structural and finish work and delivering a habitable, functional home to the Jacobs. He contended that the misplaced wall and other minor deficiencies did not rise to the level of a material breach and that he was entitled to the unpaid contract balance less any offset for the diminution in value caused by the defects. Plante further argued that the wall placement deviation caused no measurable diminution in the market value of the home, and that the cost of tearing out and rebuilding the wall would constitute unreasonable economic waste.',
    defendantArguments:
      'The Jacobs argued that the misplacement of the living room wall was a measurable deviation from the contract plans and that they were entitled to the full cost of correcting the error, including the cost of moving the wall to its specified location. They contended that a contractor is not entitled to the contract price when the structure as delivered does not conform to the approved plans, regardless of whether the deviation affects market value. The Jacobs also raised other defects to argue that the cumulative effect precluded a finding of substantial performance.',
    proceduralHistory:
      'The trial court found substantial performance and awarded Plante the unpaid contract balance, reduced by the cost of remedying the various defects. On the wall misplacement issue, the trial court measured damages by diminution in market value rather than cost of repair, finding that the market value was not reduced by the one-foot deviation. The Jacobs appealed, challenging both the substantial performance finding and the damages measurement.',
    finalDecision:
      'The Wisconsin Supreme Court affirmed the trial court\'s judgment for Plante. The Court held that Plante had substantially performed the contract and was entitled to recover the contract price reduced by the diminution in market value caused by the identified defects. The Court approved the trial court\'s use of the diminution-in-value measure for the wall misplacement, finding that cost of repair would constitute unreasonable economic waste where market value was unaffected.',
    judicialReasoning:
      'The Court engaged in a thorough analysis of the substantial performance doctrine, reaffirming that a contractor who has rendered performance that deviates only in minor respects from the contract is entitled to recover the contract price, subject to offsets for the value of the deficiencies. The Court articulated a two-part damages framework: where a defect can be remedied at a cost not disproportionate to the benefit, the measure is cost of repair; but where correction would involve unreasonable economic waste or the defect does not reduce market value, the measure is diminution in value. On the specific wall deviation, the Court reasoned that because expert testimony established no measurable reduction in the home\'s market value, awarding cost of repair would be a windfall to the Jacobs rather than compensation for actual loss. The Court also carefully reviewed the evidence of other defects and found each either adequately addressed by the trial court\'s offsetting damages or too minor to defeat a finding of substantial performance.',
    legalStandards: [
      'Substantial performance doctrine in residential construction contracts.',
      'Diminution in market value versus cost of repair as competing measures of construction defect damages.',
      'Economic waste doctrine limiting damages to value lost rather than cost of correction.',
      'Cumulative defect analysis in substantial performance determinations.',
    ],
    keyPrecedents: [
      'Jacob & Youngs, Inc. v. Kent (1921) — foundational articulation of substantial performance and economic waste.',
      'Restatement of Contracts § 346 — damages for defective or unfinished construction.',
      'Nees v. Weaver (1936) — Wisconsin application of the substantial performance doctrine.',
    ],
    evidenceAnalysis:
      'The parties presented competing expert testimony on the market value of the home as built compared to the home as contracted. Real estate appraisers testified that the one-foot reduction in living room width did not affect the market value of the property, given the overall size of the home and comparable properties in the area. The trial court credited this testimony in adopting the diminution-in-value standard for the wall deviation. For other defects—including finish carpentry and painting issues—the court accepted cost-of-repair evidence, reflecting the principle that the appropriate measure varies with the nature and remedial cost of each individual defect.',
    alternativeOutcomes:
      'Had the court adopted the cost-of-repair measure for the wall deviation, the contractor would have faced damages likely exceeding the value of any benefit to the Jacobs, since relocating the wall would require substantial demolition and reconstruction. Alternatively, a ruling that the wall deviation was a material breach would have denied the contractor recovery of the substantial contract price and incentivized owners to refuse payment upon discovering any technical specification deviation.',
    lessonsLearned: [
      'The appropriate measure of construction defect damages depends on whether correction would be economically wasteful relative to the benefit conferred.',
      'Minor structural deviations that do not affect market value are compensable only by diminution-in-value damages, not cost of repair.',
      'Contractors should conduct careful dimensional verification at each structural phase to catch specification deviations before they are buried in subsequent work.',
      'Owners who wish to preserve cost-of-repair remedies should conduct progressive inspections and halt work when deviations are discovered rather than accepting the completed work.',
    ],
    bestPractices: [
      'Require contractors to submit as-built drawings at each structural phase for owner architect review.',
      'Include contract provisions specifying which damages measure applies to different categories of defects.',
      'Conduct detailed pre-drywall inspections to identify dimensional deviations before walls are closed.',
      'Document all defects and owner objections in writing as they are discovered during construction.',
    ],
    significance:
      'Plante v. Jacobs is a leading Wisconsin authority on the substantial performance doctrine and the damages framework for residential construction defects. The case is widely taught in law schools as a concrete illustration of how courts apply the economic waste doctrine and calibrate damages to reflect actual loss rather than hypothetical cost of correction. Its endorsement of the diminution-in-value standard for defects that do not reduce market value has influenced residential construction litigation throughout the United States and has been cited approvingly in treatises on construction law and in Restatement commentary.',
    parties: [
      {
        name: 'Frank M. Plante',
        role: 'PLAINTIFF',
        description: 'Building contractor who constructed the Jacobs residence and sued for the unpaid contract balance.',
      },
      {
        name: 'Eugene Jacobs',
        role: 'DEFENDANT',
        description: 'Homeowner who withheld final payment, claiming construction defects including a misplaced wall.',
      },
      {
        name: 'Carol Jacobs',
        role: 'DEFENDANT',
        description: 'Co-owner of the home and co-defendant in the payment dispute.',
      },
    ],
  },

  {
    litigationSlug: 'construction',
    name: 'Peevyhouse v. Garland Coal & Mining Co.',
    citation: '382 P.2d 109 (Okla. 1962)',
    jurisdiction: 'Oklahoma',
    court: 'Oklahoma Supreme Court',
    year: 1962,
    outcome: 'Defendant Victory',
    facts:
      'Willie and Lucille Peevyhouse owned a farm in Garvin County, Oklahoma, and leased it to Garland Coal & Mining Company for strip mining operations. As a condition of the lease, Garland Coal agreed to perform certain remedial and restorative work on the property at the conclusion of mining, including refilling and grading the excavated areas to restore the land to a reasonably level condition. After completing its mining operations and extracting the coal, Garland Coal refused to perform the agreed-upon restorative work. The Peevyhouses sued for breach of contract, seeking damages equal to the cost of performing the promised reclamation—approximately $29,000. The mining company argued that the actual diminution in market value of the farm caused by the failure to restore the land was only approximately $300.',
    keyLegalIssues: [
      'Whether the proper measure of damages for a contractor\'s failure to perform promised land restoration is the cost of performance or the diminution in market value of the property.',
      'Whether a contractual promise of incidental restorative work can be enforced by cost-of-performance damages when those damages are grossly disproportionate to the economic benefit to the promisee.',
      'How courts balance freedom of contract principles against the economic waste doctrine in damages measurement.',
      'Whether the Peevyhouses\' personal attachment to their farm justified cost-of-performance damages over market-value diminution.',
    ],
    plaintiffArguments:
      'The Peevyhouses argued that Garland Coal had made an express contractual promise to restore their land and that they were entitled to receive the full benefit of that bargain—the cost of actually performing the restoration work. They contended that the diminution-in-market-value measure would leave them with a scarred and devastated farm while the mining company profited from its breach. The Peevyhouses also argued that their personal relationship with the land and the subjective value of having their farm restored exceeded any market value calculation, and that allowing the mining company to buy its way out of a performance obligation with nominal damages would render the contractual promise meaningless.',
    defendantArguments:
      'Garland Coal argued that the universally recognized rule limiting construction damages to the lesser of cost of performance or diminution in market value should apply, and that awarding $29,000 in damages for a $300 reduction in market value would constitute an unconscionable windfall to the plaintiffs. The company contended that the restorative work was merely an incidental provision of the lease and not a principal purpose of the contract, making the economic waste doctrine particularly applicable. It further argued that requiring cost-of-performance damages in cases of such gross disproportion would create perverse incentives and unjustly enrich landowners at the expense of industry.',
    proceduralHistory:
      'The trial court ruled in favor of the Peevyhouses and awarded them $5,000 in damages—less than the cost of performance but more than the market value diminution. Both parties appealed: the Peevyhouses sought the full cost-of-performance measure, while Garland Coal argued for limitation to the $300 diminution in market value. The Oklahoma Supreme Court granted certiorari to resolve the proper damages standard.',
    finalDecision:
      'The Oklahoma Supreme Court reversed the trial court and reduced the damages award to $300, the measure of diminution in market value. The Court held that where the cost of performance is grossly disproportionate to the economic benefit of the promised work, the proper measure of damages is the difference in value of the land with and without the restoration, not the cost of performing the restoration. The Court reasoned that the restorative provisions were incidental to the main purpose of the mining lease.',
    judicialReasoning:
      'The majority applied the Restatement rule that where a contractor fails to perform, damages are generally the reasonable cost of completion—but that rule yields to the diminution-in-value measure where cost of completion would be grossly disproportionate to the benefit obtained. The Court characterized the restorative work as an incidental covenant rather than a central purpose of the contract, distinguishing it from cases where the performance itself was the primary subject of the agreement. The majority acknowledged that this result might seem harsh to the Peevyhouses but reasoned that allowing cost-of-performance damages would create a windfall that bears no rational relationship to any actual economic loss. A vigorous dissent argued that the majority\'s approach effectively rewarded the company for deliberately breaching its contract and ignored the parties\' express allocation of risk and responsibility in the lease, as well as the Peevyhouses\' legitimate interest in the restoration of their family farm.',
    legalStandards: [
      'Cost of performance versus diminution in market value as alternative measures of contract breach damages.',
      'Gross disproportionality test for triggering the economic waste exception to cost-of-performance damages.',
      'Distinction between principal and incidental contract covenants for purposes of damages measurement.',
      'Restatement of Contracts § 346 analysis of damages for defective or incomplete performance.',
    ],
    keyPrecedents: [
      'Jacob & Youngs, Inc. v. Kent (1921) — economic waste doctrine and diminution-in-value damages.',
      'Groves v. John Wunder Co. (1939) — Minnesota case rejecting the diminution-in-value rule and awarding cost of performance for land restoration.',
      'Restatement of Contracts § 346 (1932) — standard formulation of construction contract damages.',
    ],
    evidenceAnalysis:
      'The Court received expert real estate testimony establishing that the farm\'s market value was diminished by only approximately $300 as a result of the unrestored excavations. Evidence of the cost to perform the restoration work—regrading, refilling, and replanting—came to approximately $29,000. The vast disproportion between these figures was central to the Court\'s analysis. Evidence regarding the agricultural use of the farm and the Peevyhouses\' personal attachment to it was presented but ultimately did not influence the majority\'s market-value-based analysis.',
    alternativeOutcomes:
      'The Minnesota Supreme Court in Groves v. John Wunder Co. had reached the opposite result on similar facts, awarding cost-of-performance damages and reasoning that a deliberate breach should not be rewarded with a reduced damages measure. Had Oklahoma followed Groves, Garland Coal would have faced a $29,000 judgment, potentially making many strip mining ventures uneconomical and providing a strong incentive for mining companies to honor land restoration commitments. The case has been widely criticized by contracts scholars as an example of courts distorting the economic waste doctrine to protect industrial defendants.',
    lessonsLearned: [
      'Landowners granting mining or extraction leases should insist on performance bonds or escrow arrangements to guarantee reclamation obligations.',
      'The economic value of restorative covenants should be explicitly stated in the contract to strengthen cost-of-performance damage claims.',
      'Courts\' application of the economic waste doctrine to restorative obligations can effectively nullify contractual reclamation promises.',
      'Legislative environmental restoration mandates—rather than private contract—may be the more reliable mechanism for ensuring land reclamation.',
    ],
    bestPractices: [
      'Require a reclamation performance bond or letter of credit as a condition of any mining or extraction lease.',
      'Include explicit contract language stating that restorative obligations are material conditions of the lease, not incidental covenants.',
      'Negotiate periodic restoration milestones with partial payment holdbacks to incentivize ongoing compliance.',
      'Consult with appraisers before contracting to establish baseline land values and expected post-mining diminution for damages purposes.',
    ],
    significance:
      'Peevyhouse v. Garland Coal is one of the most debated cases in American contract and construction law, frequently appearing in law school curricula as a counterpoint to Jacob & Youngs and Groves v. John Wunder. The case crystallized the tension between the economic waste doctrine and the freedom of contract principle that parties should receive the benefit of their bargain. It prompted significant scholarly criticism and legislative reform: Oklahoma subsequently enacted environmental reclamation statutes requiring mining companies to restore mined land regardless of contract terms. The decision is also cited in discussions of whether courts should consider subjective value and personal attachment in calculating damages, a debate that remains unresolved in American law.',
    parties: [
      {
        name: 'Willie Peevyhouse',
        role: 'PLAINTIFF',
        description: 'Oklahoma farmer who leased land to Garland Coal and sought damages for failure to restore the property.',
      },
      {
        name: 'Lucille Peevyhouse',
        role: 'PLAINTIFF',
        description: 'Co-owner of the farm and co-plaintiff in the breach of contract action.',
      },
      {
        name: 'Garland Coal & Mining Co.',
        role: 'DEFENDANT',
        description: 'Strip mining company that extracted coal from the Peevyhouse farm and refused to perform promised land restoration.',
      },
    ],
  },

  {
    litigationSlug: 'construction',
    name: 'Severin v. United States',
    citation: '99 Ct. Cl. 435 (1943)',
    jurisdiction: 'Federal',
    court: 'United States Court of Claims',
    year: 1943,
    outcome: 'Defendant Victory',
    facts:
      'Severin was a general contractor who had entered into a contract with the United States government for the construction of a public works project. Subcontractors performing work on the project suffered delays and increased costs that they attributed to government actions, including design changes, site access problems, and government-caused interruptions. Severin\'s subcontracts contained "no damage for delay" clauses, which released the general contractor from any liability to the subcontractors for owner-caused delays. After the project was completed, Severin filed a claim against the United States on behalf of his subcontractors, seeking to recover the delay damages that the subcontractors had suffered. The government moved to dismiss, arguing that Severin had no recoverable loss because his subcontracts had insulated him from any liability to the subcontractors.',
    keyLegalIssues: [
      'Whether a general contractor can maintain a claim against the government on behalf of subcontractors when the general contractor bears no liability to those subcontractors for the losses claimed.',
      'Whether the "pass-through" or "sponsored claim" mechanism permits recovery in the absence of general contractor liability.',
      'What standing and legal injury requirements must be satisfied for a general contractor\'s claim against the United States.',
      'Whether contractual exculpatory clauses between general contractors and subcontractors extinguish the general contractor\'s right to bring a derivative claim against the government.',
    ],
    plaintiffArguments:
      'Severin argued that as the party in privity with the United States, he was the only entity that could bring a claim against the government and that it would be inequitable to deny recovery simply because his subcontracts contained no-damage-for-delay clauses. He contended that the government\'s wrongful acts caused real losses to the subcontractors and that he should be permitted to bring those claims as a conduit to ensure the government was held responsible. Severin further argued that the "pass-through" mechanism was a recognized and necessary feature of federal construction contracting given the absence of subcontractor privity with the government.',
    defendantArguments:
      'The United States argued that Severin suffered no actual damages because his subcontracts expressly relieved him of any obligation to compensate the subcontractors for owner-caused delays. Since a plaintiff must prove actual loss to recover, and Severin had none, his claim was not cognizable. The government contended that allowing a contractor to sue on behalf of parties to whom he owes no obligation would be an unprecedented expansion of standing doctrine and would expose the United States to liability it never undertook in its direct contract with Severin.',
    proceduralHistory:
      'Severin filed suit in the Court of Claims following denial of his administrative claims. The government filed a motion to dismiss on the grounds that Severin lacked a cognizable legal claim given the no-damage-for-delay clauses in his subcontracts. The Court of Claims considered the motion and ultimately ruled on the merits of the standing and liability issues.',
    finalDecision:
      'The Court of Claims dismissed Severin\'s claims, holding that a general contractor cannot maintain a pass-through claim against the government for subcontractor losses when the general contractor has contractually relieved itself of any obligation to the subcontractors for those losses. Because Severin bore no liability to his subcontractors, he had suffered no damages and lacked a legally cognizable claim against the United States.',
    judicialReasoning:
      'The court reasoned that the fundamental predicate of a pass-through or sponsored claim is that the general contractor, as the party in privity with the government, must actually be liable to the subcontractor for the damages sought. Without that underlying liability, the general contractor is not passing through its own loss but rather attempting to recover on behalf of a third party who has no direct contract right against the government. The court grounded this requirement in basic principles of damages law: a plaintiff can only recover for losses it has actually suffered or for which it is legally responsible. The no-damage-for-delay clauses in Severin\'s subcontracts eliminated his liability to the subcontractors, eliminating his damages, and therefore eliminating his standing to bring the claim. The decision acknowledged that this result might leave subcontractors without a remedy for government wrongs but concluded that the legal structure of government contracting—which preserves privity as the gating principle for government liability—required this outcome.',
    legalStandards: [
      'Severin Doctrine: a general contractor\'s pass-through claim against the government requires the general contractor to be liable to the subcontractor for the damages claimed.',
      'Privity of contract as a prerequisite for direct claims against the United States.',
      'Standing requirements for derivative or sponsored claims in government contract litigation.',
      'No-damage-for-delay clause effect on general contractor liability and derivative standing.',
    ],
    keyPrecedents: [
      'Cannon Construction Co. v. United States (1963) — subsequent application and refinement of the Severin Doctrine.',
      'United States v. Blair (1944) — government contract privity principles in subcontractor disputes.',
      'J.L. Simmons Co. v. United States (1969) — Court of Claims clarification of Severin requirements and exceptions.',
    ],
    evidenceAnalysis:
      'The Court examined the subcontract documents between Severin and his subcontractors, focusing on the no-damage-for-delay provisions and their scope. The court also reviewed the prime contract between Severin and the United States to assess the scope of Severin\'s obligations and rights. Evidence of the actual delays and their causes was considered but was ultimately not determinative, as the threshold question of standing was resolved against Severin before reaching the merits of the government\'s responsibility for the delays.',
    alternativeOutcomes:
      'Had the court permitted Severin\'s claim despite the absence of liability to the subcontractors, it would have enabled general contractors to insulate themselves from subcontractor claims through no-damage-for-delay clauses while still recovering the equivalent damages from the government—a result the court viewed as fundamentally inconsistent with compensatory damages principles. Conversely, a ruling for Severin would have protected subcontractors from being left without remedy when government actions cause project delays, which subsequent commentators have argued would be the more equitable result.',
    lessonsLearned: [
      'General contractors must retain actual liability to subcontractors in order to bring pass-through claims against the government for subcontractor losses.',
      'No-damage-for-delay clauses in subcontracts can inadvertently extinguish the general contractor\'s ability to pass subcontractor claims through to the government.',
      'Subcontract attorneys should carefully analyze the interaction between no-damage-for-delay clauses and pass-through claim requirements before drafting.',
      'Subcontractors on government projects should seek to negotiate direct access to government claims mechanisms or ensure their general contractor retains sufficient liability to sponsor their claims.',
    ],
    bestPractices: [
      'Draft subcontract no-damage-for-delay clauses with a "pass-through exception" that preserves contractor liability for government-caused delays to the extent the government is liable to the contractor.',
      'Include a "Severin clause" in subcontracts expressly acknowledging the general contractor\'s liability as a pass-through prerequisite.',
      'Require general contractors to promptly notify subcontractors of any government-caused delay and to include subcontractor delay claims in the prime contract claim.',
      'Subcontractors should participate actively in claim documentation to support the general contractor\'s sponsored claim against the government.',
    ],
    significance:
      'Severin v. United States established the foundational "Severin Doctrine" that governs pass-through and sponsored claims in federal government contracting to this day. The rule—that a general contractor must bear actual liability to its subcontractor in order to sponsor a subcontractor\'s claim against the government—has been applied, refined, and occasionally criticized in hundreds of subsequent Court of Federal Claims decisions. The doctrine has profoundly influenced how government construction contracts and subcontracts are drafted, particularly with respect to the interaction between no-damage-for-delay clauses and pass-through claim rights. It remains among the most important principles studied in federal government contract law courses and is a central consideration in the preparation of government contract claims involving subcontractor losses.',
    parties: [
      {
        name: 'Severin',
        role: 'PLAINTIFF',
        description: 'General contractor who sought to recover on behalf of subcontractors for government-caused delay damages.',
      },
      {
        name: 'United States of America',
        role: 'DEFENDANT',
        description: 'Federal government that contracted with Severin for public works construction and whose actions allegedly caused subcontractor delays.',
      },
    ],
  },
];

export default cases;
