import { CatalogCase } from './types';

export const COMMERCIAL_CASES: CatalogCase[] = [
  // ===== Commercial Litigation =====
  {
    id: 'smith-v-van-gorkom',
    name: 'Smith v. Van Gorkom',
    citation: '488 A.2d 858 (Del. 1985)',
    litigationTypeSlug: 'commercial',
    litigationTypeName: 'Commercial Litigation',
    court: 'Delaware Supreme Court',
    jurisdiction: 'Delaware',
    decisionDate: '1985-01-29',
    facts:
      'Jerome Van Gorkom, CEO of Trans Union Corporation, negotiated a cash-out merger with investor Jay Pritzker at $55 per share, a price Van Gorkom himself proposed based largely on a leveraged buyout feasibility figure rather than a valuation of the company. The board approved the merger at a two-hour meeting convened on short notice, without reviewing the merger agreement, without any valuation study, and relying almost entirely on a twenty-minute oral presentation by Van Gorkom. Directors did not ask for an investment banker fairness opinion before approving the deal. Shareholders led by Alden Smith sued, alleging the directors were grossly negligent in approving the sale of the company. The merger was later approved by shareholders, but plaintiffs argued the approval was based on inadequate disclosure. The case became the leading test of how informed a board must be when selling the company.',
    keyLegalIssues: [
      'Whether directors breached the duty of care by approving a merger without adequate information or deliberation',
      'Whether the business judgment rule protects an uninformed board decision',
      'Whether shareholder ratification cured the board’s defective process given incomplete disclosure',
      'The proper measure of damages for a duty-of-care breach in a cash-out merger',
    ],
    plaintiffArguments:
      'The shareholder class argued that the board acted with gross negligence by approving the sale of the entire company in two hours, with no documents, no valuation analysis, and no independent advice. They contended the $55 price was plucked from a leveraged buyout feasibility calculation, not from any determination of Trans Union’s intrinsic value. Plaintiffs further argued that shareholder approval could not ratify the transaction because the proxy materials failed to disclose the haste and ignorance behind the board’s decision. Accordingly, the business judgment rule should not shield the directors.',
    defendantArguments:
      'The directors argued they were highly experienced businesspeople intimately familiar with Trans Union and its market, so they could rely on that background knowledge and on Van Gorkom’s report. They emphasized that $55 represented a substantial premium of roughly 50 percent over the market price, which itself evidenced fairness. They argued the agreement preserved a "market test" period allowing competing bids, and that informed shareholder ratification independently validated the merger. Finally, they invoked the business judgment rule’s presumption that disinterested directors act in good faith and on an informed basis.',
    proceduralHistory:
      'The Delaware Court of Chancery entered judgment for the defendant directors, finding their conduct fell within the business judgment rule. Plaintiffs appealed to the Delaware Supreme Court, which reversed in a 3-2 decision and remanded for a determination of the fair value of the shares and damages. The case subsequently settled for approximately $23.5 million, much of it paid by the Pritzker family beyond the directors’ insurance coverage.',
    finalDecision:
      'The Delaware Supreme Court held that the directors were grossly negligent and breached their duty of care by approving the merger without informing themselves of all material information reasonably available. The court rejected the premium-over-market and shareholder-ratification defenses and remanded for an entire-fairness valuation and damages.',
    judicialReasoning:
      'Justice Horsey reasoned that the business judgment rule protects only informed decisions, and the relevant standard for an uninformed decision is gross negligence. The board’s approval rested on a twenty-minute oral presentation, with no written agreement before the directors, no valuation study, and no inquiry into how the $55 figure was derived. A market premium alone cannot establish fairness because the premium must be measured against the company’s intrinsic value, which the board never determined. The supposed market test was illusory given deal protections that discouraged competing bids. Shareholder ratification failed because the proxy statement did not candidly disclose the board’s defective process, so the vote was not fully informed.',
    legalStandards: [
      'Duty of care: directors must inform themselves of all material information reasonably available before deciding (gross negligence standard)',
      'Business judgment rule: a presumption protecting informed, disinterested, good-faith decisions',
      'Shareholder ratification requires full and fair disclosure of all material facts',
    ],
    keyPrecedents: [
      'Aronson v. Lewis, 473 A.2d 805 (Del. 1984) (gross negligence as the duty-of-care standard)',
      'Lutz v. Boas, 171 A.2d 381 (Del. Ch. 1961) (director liability for abdication of oversight)',
      'Weinberger v. UOP, Inc., 457 A.2d 701 (Del. 1983) (entire fairness and valuation methodology)',
    ],
    evidenceAnalysis:
      'The most damaging evidence was the timeline itself: a senior-management meeting and a two-hour board meeting on a single Saturday, minutes showing no documents distributed, and testimony that no director read the merger agreement before it was signed at a social event that evening. Testimony that the $55 figure came from a debt-service feasibility study rather than a valuation undercut the fairness defense. The directors’ evidence of their collective experience proved weak because experience cannot substitute for deal-specific information. The premium-over-market data was unpersuasive once the court noted Trans Union’s stock was arguably undervalued due to unused investment tax credits.',
    alternativeOutcomes:
      'Had the board commissioned even a basic fairness opinion, documented deliberations over several meetings, and genuinely shopped the company, the business judgment rule would almost certainly have shielded the decision. Conversely, if the court had affirmed, Delaware boards might have continued approving major transactions on minimal process. The decision’s severity prompted the Delaware legislature to enact Section 102(b)(7) permitting exculpation of duty-of-care damages.',
    lessonsLearned: [
      'Process matters as much as price: courts scrutinize how a board decided, not just what it decided',
      'Boards selling a company should obtain independent valuations and fairness opinions',
      'A market premium does not by itself establish fair value',
      'Disclosure defects can vitiate shareholder ratification as a defense',
    ],
    bestPractices: [
      'Document board deliberations thoroughly, including materials reviewed, advisors consulted, and time spent',
      'Retain independent financial and legal advisors before approving fundamental transactions',
      'Build a genuine market check or go-shop process into sale-of-company transactions',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'The decision that put teeth in the duty of care, reshaped M&A board practice, and triggered Delaware’s Section 102(b)(7) exculpation statute.',
    isFeatured: true,
    parties: [
      { id: 'smith-vg-p1', name: 'Alden Smith and shareholder class of Trans Union Corporation', role: 'PLAINTIFF', counsel: 'William Prickett of Prickett, Jones, Elliott, Kristol & Schnee' },
      { id: 'smith-vg-d1', name: 'Jerome W. Van Gorkom and the Trans Union board of directors', role: 'DEFENDANT', counsel: 'Robert K. Payson of Potter Anderson & Corroon' },
    ],
  },
  {
    id: 'revlon-v-macandrews-forbes',
    name: 'Revlon, Inc. v. MacAndrews & Forbes Holdings, Inc.',
    citation: '506 A.2d 173 (Del. 1986)',
    litigationTypeSlug: 'commercial',
    litigationTypeName: 'Commercial Litigation',
    court: 'Delaware Supreme Court',
    jurisdiction: 'Delaware',
    decisionDate: '1986-03-13',
    facts:
      'Pantry Pride, controlled by Ronald Perelman’s MacAndrews & Forbes, launched a hostile tender offer for Revlon, which the Revlon board, advised by CEO Michel Bergerac, resisted through a poison pill and an exchange offer for its own shares containing restrictive covenants. As Pantry Pride raised its bid in increments, the Revlon board negotiated a leveraged buyout with white knight Forstmann Little, ultimately granting Forstmann a lock-up option on Revlon’s crown-jewel divisions, a no-shop provision, and a $25 million cancellation fee. In exchange, Forstmann agreed to support the par value of notes Revlon had issued in the exchange offer, which had fallen in value, exposing directors to noteholder lawsuits. Pantry Pride, willing to top any Forstmann bid, sued to enjoin the deal protections. By that point the breakup of the company was inevitable and the contest had become an auction. The Court of Chancery enjoined the lock-up, and Revlon appealed.',
    keyLegalIssues: [
      'What duties directors owe once the sale or breakup of the company becomes inevitable',
      'Whether lock-up options, no-shop clauses, and cancellation fees are permissible when they end an active auction',
      'Whether directors may favor noteholders or other constituencies over shareholders in a sale',
      'The continuing validity of defensive measures under Unocal once Revlon duties attach',
    ],
    plaintiffArguments:
      'Pantry Pride argued that once Revlon’s board decided to sell the company, the directors’ role changed from defenders of the corporate bastion to auctioneers obligated to obtain the highest price for shareholders. It contended the lock-up, no-shop, and cancellation fee were granted not to extract a materially better bid but to end the bidding and to protect directors from noteholder liability. Pantry Pride stressed it stood ready to outbid Forstmann, so the deal protections destroyed shareholder value. It asked the court to enjoin the defensive measures so the auction could continue.',
    defendantArguments:
      'Revlon’s directors argued their actions were protected business judgments: the poison pill and exchange offer had successfully driven the price from $47.50 to over $53, benefiting shareholders. They defended the Forstmann lock-up as the necessary price of obtaining a higher firm offer and protection for the noteholders, arguing directors may lawfully consider creditor and other constituency interests. They characterized Pantry Pride’s bid as junk-bond financed and front-end loaded, justifying defensive measures under Unocal. They maintained that ending the auction with a certain, higher bid was a reasonable exercise of judgment.',
    proceduralHistory:
      'The Delaware Court of Chancery preliminarily enjoined the lock-up option, the no-shop provision, and the cancellation fee, finding the board had breached its duty of loyalty by preferring noteholders over shareholders. Revlon and Forstmann appealed. The Delaware Supreme Court affirmed the injunction in a unanimous opinion by Justice Moore.',
    finalDecision:
      'The Delaware Supreme Court affirmed, holding that once the breakup of Revlon became inevitable, the directors’ duty changed to maximizing the company’s value at a sale for the stockholders’ benefit. The lock-up and related provisions improperly ended an active auction in exchange for minimal price improvement and were enjoined.',
    judicialReasoning:
      'The court reasoned that defensive measures are judged under Unocal’s enhanced scrutiny, and Revlon’s early defenses were reasonable responses to an inadequate, junk-bond-financed offer. But when the board authorized negotiations for a sale of the company, the duty shifted: the directors became auctioneers charged with getting the best price for the stockholders. Concern for noteholders was improper because constituency interests may be considered only if rationally related to shareholder benefit, and here the notes’ contractual terms defined the noteholders’ rights. A lock-up is not per se illegal and may be used to draw a bidder into the contest, but it cannot be used to end an active auction, particularly where the favored bidder’s advantage was purchased largely with director self-protection in mind. The no-shop and cancellation fee compounded the preference for Forstmann and were likewise invalid.',
    legalStandards: [
      'Revlon duties: when sale or breakup is inevitable, directors must seek the highest value reasonably available for shareholders',
      'Unocal enhanced scrutiny: defensive measures must respond reasonably to a legitimate threat',
      'Lock-ups and deal protections are permissible to attract bidders but not to end an active auction',
      'Non-shareholder constituency interests may be considered only if rationally related to shareholder benefit',
    ],
    keyPrecedents: [
      'Unocal Corp. v. Mesa Petroleum Co., 493 A.2d 946 (Del. 1985)',
      'Smith v. Van Gorkom, 488 A.2d 858 (Del. 1985)',
      'Moran v. Household International, Inc., 500 A.2d 1346 (Del. 1985)',
    ],
    evidenceAnalysis:
      'The persuasive evidence was the negotiating record showing the Forstmann lock-up bought only about a dollar per share of nominal improvement, with the real consideration being Forstmann’s promise to support the falling notes and thus shield directors from noteholder suits. Board minutes and testimony showed Forstmann received confidential financial information that was withheld from Pantry Pride, evidencing favoritism rather than value maximization. Revlon’s evidence that the auction had already raised the price substantially was credited as to the early defenses but could not justify terminating the bidding. The directors’ claimed concern for noteholders was weak because the notes’ covenants defined those rights contractually.',
    alternativeOutcomes:
      'Had the board treated both bidders evenhandedly and used the lock-up to extract a decisively higher Forstmann bid, the protections might have survived. If the court had upheld the lock-up, target boards could routinely hand-pick acquirers, and hostile-bid auctions would have been chilled. A contrary ruling would also have legitimized using shareholder value to buy off director liability exposure.',
    lessonsLearned: [
      'Once a company is for sale, price maximization for shareholders becomes the board’s singular objective',
      'Deal protections must serve the auction, not terminate it',
      'Directors cannot trade shareholder value to protect themselves from liability to other constituencies',
      'Evenhanded treatment of competing bidders is essential once Revlon duties attach',
    ],
    bestPractices: [
      'Establish clear board records showing how each deal protection extracted incremental value for shareholders',
      'Provide competing bidders equal access to due diligence once a sale process begins',
      'Use independent committees and advisors to manage conflicts when management or creditor interests diverge from shareholders',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Created the eponymous "Revlon duties" requiring boards to maximize shareholder value once the sale of the company is inevitable.',
    isFeatured: false,
    parties: [
      { id: 'revlon-p1', name: 'MacAndrews & Forbes Holdings, Inc. / Pantry Pride, Inc.', role: 'PLAINTIFF', counsel: 'Stuart L. Shapiro of Skadden, Arps, Slate, Meagher & Flom' },
      { id: 'revlon-d1', name: 'Revlon, Inc. and its board of directors', role: 'DEFENDANT', counsel: 'A. Gilchrist Sparks III of Morris, Nichols, Arsht & Tunnell; Wachtell, Lipton, Rosen & Katz' },
      { id: 'revlon-d2', name: 'Forstmann Little & Co.', role: 'THIRD_PARTY', counsel: 'Fried, Frank, Harris, Shriver & Jacobson' },
    ],
  },
  {
    id: 'ebay-domestic-holdings-v-newmark',
    name: 'eBay Domestic Holdings, Inc. v. Newmark',
    citation: '16 A.3d 1 (Del. Ch. 2010)',
    litigationTypeSlug: 'commercial',
    litigationTypeName: 'Commercial Litigation',
    court: 'Delaware Court of Chancery',
    jurisdiction: 'Delaware',
    decisionDate: '2010-09-09',
    facts:
      'eBay acquired a 28.4 percent minority stake in craigslist, Inc., the closely held classifieds company controlled by founders Craig Newmark and Jim Buckmaster. The shareholders’ agreement permitted eBay to compete with craigslist, and eBay launched a competing classifieds site, Kijiji, in the United States. In response, Newmark and Buckmaster used their board control to adopt a rights plan (poison pill) restricting eBay from acquiring more shares, implemented a staggered board, and offered a right to renew shares in exchange for a right of first refusal, the combined effect of which diluted eBay’s stake below the threshold needed to elect a director. eBay sued, challenging the measures as breaches of fiduciary duty. The founders defended the pill in part as protecting craigslist’s community-service culture rather than profit maximization. The case tested whether controllers of a for-profit Delaware corporation may deploy defensive measures to entrench a non-economic mission.',
    keyLegalIssues: [
      'Whether a poison pill adopted against an existing minority stockholder satisfies Unocal enhanced scrutiny',
      'Whether protecting a non-profit-seeking corporate culture is a legally cognizable objective for a for-profit Delaware corporation',
      'Whether the staggered board and right-of-first-refusal dilution served proper purposes',
      'The fiduciary duties controlling stockholders owe minority stockholders in a closely held corporation',
    ],
    plaintiffArguments:
      'eBay argued that Newmark and Buckmaster, as controlling stockholders and directors, breached their fiduciary duties by deploying the rights plan, staggered board, and dilutive share-issuance scheme to punish eBay for lawful competition the parties’ own agreement expressly allowed. It contended the poison pill served no legitimate corporate purpose because eBay posed no threat of a takeover, and the true purpose was entrenchment and retaliation. eBay further argued that defending a philosophy of not maximizing profits cannot justify defensive action in a for-profit corporation. It sought rescission of all three measures.',
    defendantArguments:
      'Newmark and Buckmaster argued the measures were reasonable responses to a genuine threat: eBay had used its insider position to gather competitive intelligence and then launched a direct competitor, and the defendants needed to protect craigslist’s confidential information and unique community-oriented culture. They contended the rights plan ensured long-term continuity of craigslist’s public-service mission, which they characterized as a legitimate corporate objective. They defended the staggered board as protecting against eBay obtaining board representation while competing, and the dilution as the consequence of eBay’s own choice not to grant a right of first refusal.',
    proceduralHistory:
      'eBay filed suit in the Delaware Court of Chancery in 2008 challenging the 2008 board actions; craigslist counterclaimed over eBay’s use of confidential information in launching Kijiji, with the counterclaims proceeding separately. After a nine-day trial, Chancellor Chandler issued a post-trial opinion in September 2010 rescinding two of the three challenged measures.',
    finalDecision:
      'The Court of Chancery rescinded the rights plan and the dilutive right-of-first-refusal share issuance, holding the founders breached their fiduciary duties, but upheld the staggered board as a valid exercise of statutory power. The court held that promoting a palpably non-economic mission cannot justify defensive measures in a for-profit Delaware corporation.',
    judicialReasoning:
      'Chancellor Chandler applied Unocal scrutiny to the rights plan and found the defendants failed to identify a cognizable threat: eBay could not stage a takeover given its minority position and the transfer restrictions already in place, and craigslist’s culture of community service, however admirable, was not a legally protectable interest divorced from stockholder value. In a much-quoted passage, the court held that directors of a for-profit Delaware corporation must pursue the promotion of stockholder value and cannot defend a business strategy that openly eschews it. The dilutive issuance failed entire fairness review because it was structured to penalize eBay and reduce its voting power without a fair price or fair dealing. The staggered board survived because implementing a classified board is an inherent statutory right and eBay had no contractual entitlement to a board seat.',
    legalStandards: [
      'Unocal enhanced scrutiny for defensive measures, requiring a cognizable threat and a proportionate response',
      'Entire fairness review for self-dealing transactions by controlling stockholders',
      'Directors of a for-profit corporation must pursue stockholder value as the corporation’s end',
    ],
    keyPrecedents: [
      'Unocal Corp. v. Mesa Petroleum Co., 493 A.2d 946 (Del. 1985)',
      'Unitrin, Inc. v. American General Corp., 651 A.2d 1361 (Del. 1995)',
      'Sinclair Oil Corp. v. Levien, 280 A.2d 717 (Del. 1971)',
    ],
    evidenceAnalysis:
      'Trial testimony in which Newmark and Buckmaster candidly admitted craigslist was not managed to maximize profits, while authentic, proved legally fatal because it conceded the defensive measures protected a non-economic agenda. Contemporaneous documents showed the 2008 measures were conceived as a coordinated response to eBay’s launch of Kijiji, supporting the retaliation narrative. eBay’s evidence that it could never acquire control given existing transfer restrictions destroyed the takeover-threat justification for the pill. The defendants’ strongest evidence, eBay’s misuse of confidential information, supported their counterclaims but could not retroactively justify entrenchment devices.',
    alternativeOutcomes:
      'Had craigslist been organized as a non-stock or benefit entity, the culture-preservation defense might have been viable; the opinion itself notes the founders chose a for-profit form and were bound by its norms. If the court had upheld the pill, controlling founders of Delaware corporations could weaponize defensive devices against minority investors who lawfully compete. The decision also foreshadowed the policy debate that produced Delaware’s public benefit corporation statute in 2013.',
    lessonsLearned: [
      'A for-profit Delaware corporation’s directors must justify defensive measures by reference to stockholder value',
      'Minority investors who compete with portfolio companies should expect retaliation risk and negotiate protections ex ante',
      'Candid trial admissions about corporate purpose can decide fiduciary cases',
      'Mission-driven founders should consider benefit-corporation or non-stock structures',
    ],
    bestPractices: [
      'Align entity choice with corporate mission before taking outside investors',
      'Paper the threat analysis contemporaneously before adopting any rights plan',
      'Treat transactions that alter a minority holder’s voting power as entire-fairness events requiring fair process and fair price',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'The leading modern statement that directors of a for-profit Delaware corporation must pursue stockholder value and cannot entrench a non-economic mission.',
    isFeatured: false,
    parties: [
      { id: 'ebay-p1', name: 'eBay Domestic Holdings, Inc.', role: 'PLAINTIFF', counsel: 'Michael Hanrahan of Prickett, Jones & Elliott; Goodwin Procter LLP' },
      { id: 'ebay-d1', name: 'Craig Newmark and James Buckmaster; craigslist, Inc.', role: 'DEFENDANT', counsel: 'Gregory P. Williams of Richards, Layton & Finger; Perkins Coie LLP' },
    ],
  },
  {
    id: 'texaco-v-pennzoil',
    name: 'Texaco, Inc. v. Pennzoil, Co.',
    citation: '729 S.W.2d 768 (Tex. App.—Houston [1st Dist.] 1987)',
    litigationTypeSlug: 'commercial',
    litigationTypeName: 'Commercial Litigation',
    court: 'Texas Court of Appeals, First District (affirming Harris County jury verdict)',
    jurisdiction: 'Texas',
    decisionDate: '1987-02-12',
    facts:
      'In January 1984, Pennzoil and the Getty interests (the Getty Oil board, the Sarah C. Getty Trust, and the J. Paul Getty Museum) reached an agreement in principle for Pennzoil to acquire three-sevenths of Getty Oil at $110 per share plus a $5 stub, memorialized in a signed memorandum of agreement and announced in press releases stating the parties had reached an agreement in principle. Days later, Texaco, advised that Getty might still be free to deal, offered $125 and then $128 per share for all of Getty Oil, and Getty’s board accepted, with Texaco agreeing to indemnify the Getty entities against Pennzoil claims. Pennzoil sued Texaco in Texas state court for tortious interference with contract. A Houston jury found that a binding contract existed and that Texaco knowingly interfered. The jury awarded $7.53 billion in compensatory damages and $3 billion in punitive damages, the largest civil verdict in history at that time. The judgment ultimately drove Texaco into Chapter 11 bankruptcy.',
    keyLegalIssues: [
      'Whether an "agreement in principle" with essential terms can constitute a binding contract under New York law before definitive documentation',
      'Whether Texaco knowingly induced breach of that contract',
      'The proper measure of damages for tortious interference with a corporate acquisition',
      'Whether the punitive damages award was excessive',
    ],
    plaintiffArguments:
      'Pennzoil argued that the memorandum of agreement, the Getty board’s 15-to-1 vote approving the Pennzoil deal, the agreed press releases, and the parties’ conduct showed intent to be bound on all essential terms, with only formal documentation remaining. It contended Texaco knew of the agreement, having been briefed by Getty’s bankers and having demanded indemnities precisely because it understood Pennzoil had contractual rights. Pennzoil claimed as damages the replacement cost of the one billion barrels of oil reserves it lost, roughly $7.53 billion. It urged punitive damages to punish deliberate corporate lawlessness.',
    defendantArguments:
      'Texaco argued that under New York law parties to a multibillion-dollar acquisition do not intend to be bound until definitive agreements are executed, and the Getty entities’ own lawyers and bankers represented that Getty was free to deal. It emphasized that open terms remained and the press release described only an agreement in principle subject to a definitive merger agreement. Texaco denied knowledge of any binding contract and characterized its conduct as legitimate competition for corporate control. It attacked the damages model as a windfall based on replacement cost rather than Pennzoil’s actual lost bargain, and the punitive award as grossly excessive.',
    proceduralHistory:
      'Pennzoil filed in Harris County, Texas after initially litigating in Delaware Chancery, and a four-and-a-half-month jury trial before Judge Solomon Casseb Jr. produced a $10.53 billion verdict in November 1985. The Texas Court of Appeals affirmed liability and compensatory damages but reduced punitive damages from $3 billion to $1 billion. After the U.S. Supreme Court rejected Texaco’s federal collateral attack on the bond requirement in Pennzoil Co. v. Texaco, Inc., 481 U.S. 1 (1987), Texaco filed for Chapter 11 and settled with Pennzoil for $3 billion in 1988.',
    finalDecision:
      'The Texas Court of Appeals affirmed the jury findings that a binding contract existed and that Texaco tortiously interfered with it, sustaining the $7.53 billion compensatory award. It ordered a remittitur reducing punitive damages to $1 billion, and the case settled for $3 billion during Texaco’s ensuing bankruptcy.',
    judicialReasoning:
      'The court held that under New York law the intent to be bound is a question of fact, and the jury could reasonably find from the memorandum of agreement, the board vote, the press releases, and the parties’ conduct that the Getty entities and Pennzoil intended to be bound despite contemplated formal documentation. Evidence that Texaco insisted on indemnities and that its advisors knew of the Pennzoil arrangement supported the finding of knowing interference. The court found the replacement-cost damages model legally acceptable because Pennzoil lost the unique opportunity to acquire reserves at a favorable price, and the jury was entitled to credit Pennzoil’s experts. The punitive award, however, exceeded what deterrence required and was conditioned on remittitur to $1 billion. Procedural complaints about the trial, including charge error and juror issues, were rejected as unpreserved or harmless.',
    legalStandards: [
      'Intent to be bound under New York law: a preliminary agreement binds if the parties intend it to, despite contemplated formal documents (Winston factors)',
      'Tortious interference requires an existing contract, knowledge, intentional inducement of breach, and damages',
      'Punitive damages must bear a reasonable relationship to actual damages and the character of the wrong',
    ],
    keyPrecedents: [
      'Winston v. Mediafare Entertainment Corp., 777 F.2d 78 (2d Cir. 1985)',
      'R.G. Group, Inc. v. Horn & Hardart Co., 751 F.2d 69 (2d Cir. 1984)',
      'Lumley v. Gye, 118 Eng. Rep. 749 (Q.B. 1853) (origin of interference tort)',
    ],
    evidenceAnalysis:
      'The decisive evidence was documentary: the signed memorandum of agreement, the Getty board minutes approving the Pennzoil price, the joint press release announcing an agreement in principle, and the congratulatory handshakes witnesses described. Texaco’s demand for broad indemnities from the Getty entities was devastating, as the jury saw it as proof Texaco knew it was buying a lawsuit. Texaco’s reliance on Wall Street custom that deals are not binding until signed fell flat with a Texas jury, especially as delivered through New York investment bankers whose credibility suffered on cross-examination. Pennzoil’s replacement-cost damages testimony went largely unrebutted because Texaco chose to contest liability rather than present a full alternative damages case, a strategic error the verdict punished.',
    alternativeOutcomes:
      'Had Texaco litigated the case in New York or Delaware, or invested seriously in a damages rebuttal, the exposure would likely have been a fraction of the verdict. If the jury had credited the not-bound-until-signed custom, agreements in principle would have remained safely non-binding and deal-jumping commonplace. A full affirmance of the $3 billion punitive award could have liquidated Texaco entirely rather than forcing the $3 billion settlement.',
    lessonsLearned: [
      'Agreements in principle, board approvals, and press releases can create binding obligations before definitive documents',
      'Indemnity demands can be construed as knowledge of a rival’s contractual rights',
      'Never concede the damages battlefield by litigating liability alone',
      'Forum and jury pool can be outcome-determinative in commercial mega-cases',
    ],
    bestPractices: [
      'Include explicit no-binding-effect language in term sheets and press releases until definitive agreements are signed',
      'Conduct interference diligence before topping an announced deal, and document the basis for believing the target is free to negotiate',
      'Prepare a complete alternative damages case even when contesting liability vigorously',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'The largest civil verdict of its era, establishing that jumping an agreed deal can constitute multibillion-dollar tortious interference.',
    isFeatured: false,
    parties: [
      { id: 'texaco-p1', name: 'Pennzoil Company', role: 'PLAINTIFF', counsel: 'Joe Jamail; Baker Botts (John Jeffers, G. Irvin Terrell)' },
      { id: 'texaco-d1', name: 'Texaco, Inc.', role: 'DEFENDANT', counsel: 'Richard Miller of Miller, Keeton, Bristow & Brown; later David Boies of Cravath, Swaine & Moore on appeal strategy' },
    ],
  },
  {
    id: 'salomon-v-a-salomon-co',
    name: 'Salomon v. A Salomon & Co Ltd',
    citation: '[1897] AC 22 (HL)',
    litigationTypeSlug: 'commercial',
    litigationTypeName: 'Commercial Litigation',
    court: 'House of Lords',
    jurisdiction: 'United Kingdom',
    decisionDate: '1897-11-16',
    facts:
      'Aron Salomon, a successful leather merchant and boot manufacturer in Whitechapel, incorporated his business as A Salomon & Co Ltd in 1892, with the seven shareholders required by the Companies Act 1862 consisting of himself, his wife, and five of his children, each holding one share while Salomon held the remaining 20,001. The company purchased the business from Salomon for approximately £39,000, paid partly in shares and partly through £10,000 in secured debentures issued to Salomon, giving him a floating charge over company assets. The business failed within a year amid a depression in the boot trade and strikes, and the company went into insolvent liquidation with assets insufficient to pay both Salomon’s secured debentures and the unsecured creditors. The liquidator argued the company was a sham and mere agent or alias of Salomon, who should personally indemnify the company for its debts. The lower courts agreed, but Salomon appealed to the House of Lords. The case posed squarely whether a duly incorporated one-man company is a legal person separate from its controller.',
    keyLegalIssues: [
      'Whether a company validly incorporated under the Companies Act 1862 is a separate legal person even when one individual beneficially controls it',
      'Whether the company acted as agent or trustee for its controlling shareholder, making him liable for its debts',
      'Whether the sale of the business to the company at an inflated price was a fraud on creditors',
      'The validity and priority of Salomon’s secured debentures against unsecured creditors',
    ],
    plaintiffArguments:
      'Salomon (appellant) argued that the company complied with every formal requirement of the Companies Act 1862, which demanded only seven members and said nothing about their independence or the distribution of shareholdings. He contended that once the registrar issued the certificate of incorporation, the company existed as a separate person capable of contracting with him, owing him secured debts, and incurring its own liabilities. He maintained the creditors dealt with the limited company knowingly and could have searched the register of charges. The business failed from genuine trade depression, not fraud.',
    defendantArguments:
      'The liquidator, on behalf of the company and its unsecured creditors, argued that the company was a myth and a fraud: the six family members were bare nominees, the business remained Salomon’s in every real sense, and the company was merely his agent or trustee. He contended the £39,000 purchase price was extravagant and self-dealt, since Salomon effectively sold to himself, and that the scheme’s purpose was to carry on business with limited liability while securing himself ahead of trade creditors. On this view, Salomon should indemnify the company for its trading debts, and his debentures should be subordinated.',
    proceduralHistory:
      'Vaughan Williams J at first instance held the company was Salomon’s agent and ordered him to indemnify it. The Court of Appeal affirmed on the alternative theory that the company was a trustee for Salomon and the scheme abused the Companies Act. The House of Lords unanimously reversed.',
    finalDecision:
      'The House of Lords held that A Salomon & Co Ltd was validly incorporated and was a legal person entirely separate from Aron Salomon, who was therefore not liable to indemnify the company for its debts. His secured debentures were valid and ranked ahead of the unsecured creditors.',
    judicialReasoning:
      'Lord Macnaghten and his colleagues reasoned that the Companies Act 1862 required only seven members and imposed no requirement of independence or substantial shareholding among them; the statute’s words must be applied as written, not supplemented by judicial notions about what Parliament should have required. Upon incorporation, the company became at law a different person altogether from its subscribers, and it was neither an agent nor a trustee of Salomon absent specific facts creating such relationships, which control alone does not. The motives of the promoters and the family character of the shareholding were irrelevant to the company’s separate existence. The allegedly excessive purchase price could not be a fraud where every shareholder knew and assented to the terms. Unsecured creditors who extended credit to a limited company took the risk apparent on the public register.',
    legalStandards: [
      'Separate corporate personality: a validly incorporated company is a legal person distinct from its members',
      'Compliance with statutory incorporation formalities is sufficient; motive and concentration of ownership are irrelevant',
      'Corporate agency or trusteeship for a shareholder requires specific facts beyond ownership and control',
    ],
    keyPrecedents: [
      'Companies Act 1862 (statutory framework for incorporation)',
      'Erlanger v. New Sombrero Phosphate Co. (1878) 3 App Cas 1218 (promoter dealings and disclosure)',
      'Subsequently qualified by veil-piercing doctrine, e.g., Adams v. Cape Industries plc [1990] Ch 433 and Prest v. Petrodel Resources Ltd [2013] UKSC 34',
    ],
    evidenceAnalysis:
      'The decisive considerations were documentary and statutory: the certificate of incorporation, the registered memorandum with seven subscribers, and the registered debentures, all of which complied with the Act. The liquidator’s evidence that the family members were passive nominees was factually accurate but legally irrelevant once the Lords held the statute imposed no independence requirement. Evidence of an inflated purchase price lost force because every member of the company assented with full knowledge, leaving no one deceived. The creditors’ inability to show any misrepresentation to them, combined with the public registration of the floating charge, eliminated the fraud theory.',
    alternativeOutcomes:
      'Had the House of Lords affirmed, one-person and family companies would have been legally precarious, and the modern architecture of limited liability subsidiaries might never have developed in the same form. The harshness toward unsecured creditors was later mitigated legislatively through preferential debts, floating-charge carve-outs, and wrongful trading provisions rather than by abandoning separate personality.',
    lessonsLearned: [
      'Incorporation formalities, properly observed, create genuine asset partitioning even for one-person businesses',
      'Creditors of limited companies must price and secure their risk, including by searching registered charges',
      'Statutory text governs over judicial intuitions about abuse; reform of corporate-form externalities is for legislatures',
      'Controller security interests in their own companies are valid if properly created and registered',
    ],
    bestPractices: [
      'Observe corporate formalities scrupulously, including registration of all charges and member records',
      'Document intercompany and founder transactions at the time, with disclosed terms approved by all members',
      'As a creditor, obtain personal guarantees or security when extending credit to thinly capitalized closely held companies',
    ],
    outcome: 'Defendant Victory',
    significance:
      'The foundational case of modern company law, establishing the separate legal personality of the corporation and the integrity of limited liability.',
    isFeatured: false,
    parties: [
      { id: 'salomon-p1', name: 'A Salomon & Co Ltd (in liquidation), by its liquidator', role: 'PLAINTIFF' },
      { id: 'salomon-d1', name: 'Aron Salomon', role: 'DEFENDANT', counsel: 'Ralph Neville QC' },
    ],
  },
];
