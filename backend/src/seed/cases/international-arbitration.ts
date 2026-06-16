import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'international-arbitration',
    name: 'Mitsubishi Motors Corp. v. Soler Chrysler-Plymouth, Inc.',
    citation: '473 U.S. 614 (1985)',
    jurisdiction: 'United States (Federal)',
    court: 'Supreme Court of the United States',
    year: 1985,
    isFeatured: true,
    facts: 'Mitsubishi Motors Corporation, a joint venture between Chrysler International and Mitsubishi Motors of Japan, entered into a distributor agreement with Soler Chrysler-Plymouth, a Puerto Rico-based automobile dealer. The agreement contained a broad arbitration clause requiring disputes to be resolved by the Japan Commercial Arbitration Association in Tokyo. When automobile sales declined, Soler refused to accept shipments and Mitsubishi sought arbitration in Japan to recover damages. Soler counterclaimed in U.S. federal court, asserting violations of the Sherman Antitrust Act and other federal and Puerto Rican statutes, arguing those claims were not arbitrable. The district court compelled arbitration of the antitrust claims; the First Circuit reversed, holding statutory antitrust claims were not arbitrable.',
    keyLegalIssues: [
      'Whether federal statutory antitrust claims are arbitrable under an international commercial arbitration clause',
      'Whether the Federal Arbitration Act requires enforcement of arbitration clauses in international commercial contracts',
      'Whether international arbitration panels can be trusted to apply U.S. statutory law',
      'Scope and limits of the New York Convention on Recognition and Enforcement of Foreign Arbitral Awards'
    ],
    plaintiffArguments: 'Mitsubishi argued that the broad arbitration clause in the distributor agreement unambiguously covered all disputes arising from the commercial relationship, including statutory claims. It contended that the Federal Arbitration Act and the New York Convention reflected a strong federal policy in favor of arbitration, particularly in international commercial agreements. Mitsubishi maintained that international arbitral tribunals were capable of applying U.S. antitrust law and that concerns about the competence or neutrality of foreign arbitrators were speculative.',
    defendantArguments: 'Soler argued that the antitrust claims embodied important public policy interests that Congress had reserved exclusively for U.S. federal courts, rendering them categorically non-arbitrable. It contended that submitting Sherman Act claims to a Japanese arbitration panel would deprive claimants of effective vindication of statutory rights because foreign arbitrators could not be trusted to apply U.S. law faithfully. Soler further maintained that the legislative history of the antitrust laws demonstrated congressional intent that such disputes be resolved domestically.',
    proceduralHistory: 'Mitsubishi initiated arbitration proceedings in Tokyo while simultaneously filing suit in the U.S. District Court for the District of Puerto Rico seeking an order compelling arbitration of all claims. The district court compelled arbitration on all matters. The U.S. Court of Appeals for the First Circuit affirmed in part and reversed in part, finding the antitrust claims non-arbitrable. The Supreme Court granted certiorari to resolve the important question of arbitrability of statutory claims in international settings.',
    finalDecision: 'The Supreme Court reversed the First Circuit, holding 5-3 that federal statutory antitrust claims arising from international commercial transactions are arbitrable under a valid arbitration agreement. The Court enforced the arbitration clause and compelled Soler to submit its antitrust counterclaims to the Japan Commercial Arbitration Association.',
    judicialReasoning: 'Justice Blackmun, writing for the majority, emphasized that the federal policy favoring arbitration is especially powerful in the international commercial context, where predictability and neutrality are paramount for cross-border trade. The majority reasoned that international arbitral tribunals are presumed capable of applying the substantive law of any jurisdiction, including U.S. antitrust law, as directed by the parties\' agreement and the applicable procedural rules. The Court introduced the "effective vindication" doctrine as a safety valve, noting that if the foreign arbitral process proved inadequate to protect statutory rights, U.S. courts could refuse enforcement at the award-confirmation stage. The majority rejected the argument that the mere presence of a public law claim divests parties of their contractually-chosen forum. The decision recognized that sacrificing some procedural protections may be an acceptable price of an agreement to arbitrate internationally.',
    legalStandards: [
      'Federal Arbitration Act, 9 U.S.C. §§ 1-16: strong presumption of arbitrability',
      'New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards (1958)',
      'Sherman Antitrust Act, 15 U.S.C. §§ 1-7',
      'Effective vindication doctrine as limit on arbitrability of statutory claims',
      'Separability of the arbitration clause from the underlying contract'
    ],
    keyPrecedents: [
      'Scherk v. Alberto-Culver Co., 417 U.S. 506 (1974): earlier Court support for international arbitration of securities claims',
      'Moses H. Cone Memorial Hospital v. Mercury Construction Corp., 460 U.S. 1 (1983): federal policy favoring arbitration',
      'American Safety Equipment Corp. v. J.P. Maguire & Co., 391 F.2d 821 (2d Cir. 1968): prior circuit rule against antitrust arbitrability (overruled in international context)'
    ],
    evidenceAnalysis: 'The Court examined the text of the arbitration clause, which broadly covered "all disputes, controversies or differences which may arise between [the parties] out of or in relation to" the distributor agreement. Contractual language and the parties\' course of dealings in a sophisticated international transaction supported broad reading of the clause. The Court also considered evidence that international arbitral institutions routinely apply foreign statutory law.',
    alternativeOutcomes: 'Had the Court affirmed the First Circuit, the result would have been a categorical rule that U.S. antitrust claims are non-arbitrable, significantly constraining the use of arbitration clauses in international distribution and licensing agreements. This could have deterred foreign companies from contracting with U.S. counterparts or driven disputes entirely into U.S. federal courts, undermining the goals of the New York Convention. A narrower ruling confining arbitrability to the contract claims alone would have created bifurcated litigation, with overlapping factual issues addressed in two separate forums.',
    lessonsLearned: [
      'Statutory claims, including those embodying public policy, can be arbitrated in international commercial disputes',
      'Courts will defer to arbitration agreements of sophisticated parties in international transactions even when mandatory law is at stake',
      'The effective vindication doctrine provides a residual check at the award-enforcement stage rather than at the outset',
      'Broad arbitration clauses in international agreements should be drafted to expressly include statutory claims if that is the parties\' intent'
    ],
    bestPractices: [
      'Draft international arbitration clauses broadly to encompass all disputes "arising out of or relating to" the agreement, including statutory claims',
      'Specify the applicable law and the arbitral institution\'s rules for applying foreign statutory law in the arbitration clause',
      'Consider including a choice-of-law clause designating U.S. law as substantive law to ensure antitrust claims are properly analyzed',
      'Preserve award-enforcement objections by ensuring the arbitral process provides adequate procedural safeguards for statutory rights'
    ],
    significance: 'Mitsubishi Motors is the foundational Supreme Court decision establishing that federal statutory claims — including antitrust claims — are arbitrable in international commercial disputes. The ruling dramatically expanded the reach of international arbitration agreements and entrenched the pro-arbitration policy of the FAA and the New York Convention in U.S. law. It opened the door for arbitration of securities, RICO, employment discrimination, and other statutory claims in subsequent decades. The effective vindication doctrine introduced by the case has shaped the post-award judicial review framework. The decision is essential reading in international commercial law and remains one of the most cited arbitration precedents worldwide.',
    outcome: 'Claimant Victory — arbitration compelled',
    parties: [
      {
        name: 'Mitsubishi Motors Corporation',
        role: 'PLAINTIFF',
        counsel: 'John H. Pickering (Wilmer, Cutler & Pickering)',
        description: 'Japanese-American joint venture automobile manufacturer and distributor seeking to compel arbitration of contract and antitrust claims in Tokyo'
      },
      {
        name: 'Soler Chrysler-Plymouth, Inc.',
        role: 'DEFENDANT',
        counsel: 'David C. Indiano',
        description: 'Puerto Rico automobile dealer resisting arbitration of U.S. antitrust counterclaims before a Japanese arbitral tribunal'
      }
    ]
  },
  {
    litigationSlug: 'international-arbitration',
    name: 'Scherk v. Alberto-Culver Co.',
    citation: '417 U.S. 506 (1974)',
    jurisdiction: 'United States (Federal)',
    court: 'Supreme Court of the United States',
    year: 1974,
    facts: 'Fritz Scherk, a German entrepreneur, sold three European cosmetics companies and their associated trademarks to Alberto-Culver Company, a U.S. corporation, for approximately $31 million in Alberto-Culver stock. The purchase agreements, negotiated across several countries and governed by Illinois law, contained a clause requiring arbitration of any disputes before the International Chamber of Commerce in Paris. After the sale closed, Alberto-Culver discovered that the trademarks it had purchased were encumbered by undisclosed agreements and disputes, allegedly rendering them nearly worthless. Alberto-Culver filed suit in U.S. federal court alleging violations of Section 10(b) of the Securities Exchange Act of 1934 and SEC Rule 10b-5. Scherk moved to stay proceedings and compel arbitration pursuant to the contractual clause.',
    keyLegalIssues: [
      'Whether claims under Section 10(b) of the Securities Exchange Act are arbitrable under a valid international arbitration clause',
      'Whether Wilko v. Swan, which held Securities Act claims non-arbitrable, extends to Exchange Act claims in international contracts',
      'Whether the distinct context of international commercial transactions warrants different arbitrability rules than domestic transactions',
      'Enforceability of forum-selection and arbitration clauses in multinational purchase agreements'
    ],
    plaintiffArguments: 'Alberto-Culver argued that securities fraud claims under the Exchange Act implicate the same strong public interest as Securities Act claims invalidated in Wilko v. Swan, making arbitration inappropriate regardless of the international nature of the agreement. It contended that the statutory scheme of the Exchange Act contemplates judicial resolution of investor claims and that permitting arbitration would deprive investors of protections Congress specifically designed for them. Alberto-Culver further argued that an Illinois choice-of-law clause should govern, allowing U.S. courts to hear all disputes.',
    defendantArguments: 'Scherk argued that the arbitration clause was a freely negotiated term of a sophisticated international commercial agreement and must be enforced under the Federal Arbitration Act. He contended that the international character of the transaction distinguished it from domestic disputes addressed in Wilko v. Swan, because voiding the arbitration clause would unsettle the parties\' carefully negotiated forum selection and choice-of-law arrangements. Scherk maintained that refusal to enforce the clause would discourage foreign parties from doing business with U.S. companies.',
    proceduralHistory: 'Alberto-Culver filed suit in the Northern District of Illinois. The district court granted Scherk\'s motion to stay proceedings and compel arbitration. The Seventh Circuit reversed, applying Wilko v. Swan and holding that federal securities claims are not arbitrable. The Supreme Court granted certiorari given the importance of the international dimension.',
    finalDecision: 'The Supreme Court reversed the Seventh Circuit 5-4 and held that the arbitration clause was enforceable, compelling ICC arbitration in Paris. The Court distinguished Wilko v. Swan on the grounds that the international nature of the transaction made enforcement of the arbitration clause essential to international commerce.',
    judicialReasoning: 'Justice Stewart\'s majority opinion reasoned that an international commercial agreement is fundamentally different from a domestic securities transaction: it involves multiple legal systems, parties of different nationalities, and no single obvious forum. Refusing to enforce the arbitration clause would impose chaotic uncertainty on international commercial dealings, as each party could seek the forum most favorable to its position. The majority recognized that an international arbitration agreement serves as a "kind of international bill of lading" providing certainty and predictability in cross-border transactions. The Court acknowledged the tension with Wilko but held that the public policies underlying securities regulation do not categorically override contractual forum selection in transnational deals. Justice Douglas, dissenting, argued the majority evaded Wilko\'s binding precedent and sacrificed investor protection to commercial convenience.',
    legalStandards: [
      'Securities Exchange Act of 1934, Section 10(b) and Rule 10b-5',
      'Federal Arbitration Act, 9 U.S.C. §§ 1-16',
      'Wilko v. Swan, 346 U.S. 427 (1953): domestic rule against arbitration of Securities Act claims',
      'New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards',
      'General international comity principles favoring enforcement of forum-selection clauses'
    ],
    keyPrecedents: [
      'Wilko v. Swan, 346 U.S. 427 (1953): held Securities Act of 1933 claims non-arbitrable (distinguished)',
      'Bremen v. Zapata Off-Shore Co., 407 U.S. 1 (1972): strong presumption in favor of international forum-selection clauses',
      'Rodriguez de Quijas v. Shearson/American Express, Inc., 490 U.S. 477 (1989): later overruled Wilko in domestic context'
    ],
    evidenceAnalysis: 'The Court examined the structure and language of the purchase agreement, noting that negotiations occurred across multiple European countries and involved parties of different nationalities operating under different legal systems. The arbitration clause specifically designated ICC rules and a Paris seat, reflecting the parties\' deliberate choice of a neutral international forum. Evidence of the trademarks\' encumbrances formed the merits of the underlying dispute but was not directly at issue in the arbitrability analysis.',
    alternativeOutcomes: 'Had the Court affirmed the Seventh Circuit, international commercial contracts involving U.S. securities would have been subject to mandatory U.S. court jurisdiction, fundamentally undermining private party autonomy in cross-border transactions. Foreign counterparties would have faced the risk of U.S. forum shopping by American companies and may have demanded anti-arbitration warranties or declined to deal with U.S. parties entirely. The decision would have created inconsistency with the New York Convention obligations the U.S. had accepted.',
    lessonsLearned: [
      'International commercial transactions require enforcement of freely negotiated arbitration clauses even where U.S. statutory claims are asserted',
      'The public policy rationale for non-arbitrability of domestic securities claims does not automatically extend to international agreements',
      'Forum-selection and arbitration clauses are particularly critical in multinational deals spanning multiple legal systems',
      'The distinct context of international commerce justifies different arbitrability rules than purely domestic transactions'
    ],
    bestPractices: [
      'In cross-border acquisitions, include a clear arbitration clause specifying the institution, seat, and governing procedural rules',
      'Conduct thorough due diligence on the condition, ownership, and encumbrances of intellectual property assets acquired internationally',
      'Specify in the arbitration clause whether statutory law claims are encompassed and which body of substantive law applies',
      'Anticipate and document the international nature of the agreement to strengthen the enforceability of the forum-selection clause'
    ],
    significance: 'Scherk v. Alberto-Culver was the Supreme Court\'s first major ruling enforcing an international commercial arbitration clause over a federal statutory objection, laying the groundwork for Mitsubishi Motors. It established that the international context of a commercial transaction materially affects the arbitrability analysis and that courts must give substantial weight to contractually chosen international forums. The decision reflects U.S. commitment to the New York Convention and has shaped the legal landscape for arbitration of statutory claims in multinational transactions for over fifty years.',
    outcome: 'Defendant Victory — ICC arbitration compelled',
    parties: [
      {
        name: 'Fritz Scherk',
        role: 'DEFENDANT',
        counsel: 'Burke Marshall',
        description: 'German businessman and seller of European cosmetics companies seeking to enforce contractual ICC arbitration clause against U.S. buyer\'s securities fraud claims'
      },
      {
        name: 'Alberto-Culver Company',
        role: 'PLAINTIFF',
        counsel: 'Philip W. Tone',
        description: 'U.S. cosmetics corporation alleging securities fraud arising from undisclosed trademark encumbrances in cross-border acquisition'
      }
    ]
  },
  {
    litigationSlug: 'international-arbitration',
    name: 'BG Group plc v. Republic of Argentina',
    citation: '572 U.S. 25 (2014)',
    jurisdiction: 'United States (Federal) / International (UNCITRAL)',
    court: 'Supreme Court of the United States (reviewing UNCITRAL Award)',
    year: 2014,
    facts: 'BG Group plc, a British gas company, invested in Argentina\'s privatized gas distribution sector under licenses granted in the early 1990s. The bilateral investment treaty (BIT) between the United Kingdom and Argentina granted investors the right to arbitrate disputes with Argentina, but included a provision requiring investors to litigate the dispute in Argentine courts for 18 months before initiating arbitration. Following Argentina\'s 2001-2002 financial crisis, Argentina imposed emergency regulations that effectively froze gas tariffs, causing BG Group to suffer massive losses. BG Group initiated UNCITRAL arbitration without first litigating in Argentine courts, arguing that doing so would be futile given Argentina\'s emergency legislation and judicial hostility to tariff-restoration claims. The arbitral tribunal agreed that the 18-month litigation requirement was excused under the circumstances and awarded BG Group approximately $185 million. Argentina challenged the award in U.S. federal courts as the seat of arbitration.',
    keyLegalIssues: [
      'Whether courts or arbitrators have the authority to determine whether a treaty\'s preconditions to arbitration have been satisfied',
      'Whether the 18-month domestic litigation requirement in the UK-Argentina BIT is a condition precedent to arbitration or a procedural matter for the arbitrator to decide',
      'Whether Argentina\'s conduct could excuse compliance with the BIT\'s pre-arbitration litigation requirement',
      'Standard of judicial review of arbitral awards under the Federal Arbitration Act in the investor-state context'
    ],
    plaintiffArguments: 'BG Group argued that the 18-month domestic litigation requirement was a procedural pre-arbitration condition that the tribunal, not courts, had authority to assess and waive. It contended that Argentina\'s own emergency legislation and its courts\' refusal to award tariff relief made compliance with the 18-month requirement futile, and that Argentina was estopped from relying on the requirement it had rendered meaningless. BG Group also argued that the broad arbitration clause in the BIT should be interpreted to give arbitrators authority to determine their own jurisdiction, including satisfaction of pre-conditions.',
    defendantArguments: 'Argentina argued that the 18-month local litigation requirement was a jurisdictional threshold that courts, not arbitrators, must assess, because it defined the scope of consent to arbitrate. Without satisfaction of the condition, Argentina contended, the arbitral tribunal lacked jurisdiction entirely, and the resulting award was void. Argentina maintained that treaty obligations cannot be waived by an arbitral tribunal and that BG Group\'s failure to litigate locally was a fundamental jurisdictional defect.',
    proceduralHistory: 'The UNCITRAL tribunal ruled in BG Group\'s favor in 2007, awarding approximately $185 million. Argentina moved to vacate the award in the U.S. District Court for the District of Columbia, which confirmed the award. The D.C. Circuit reversed, holding that the 18-month requirement was a condition precedent to arbitration that courts must independently review. The Supreme Court granted certiorari to resolve the question of who — court or arbitrator — decides whether treaty pre-conditions to arbitration are met.',
    finalDecision: 'The Supreme Court reversed the D.C. Circuit 7-2 and reinstated the arbitral award. The Court held that the arbitrators had authority to interpret and apply the 18-month pre-arbitration litigation requirement, and that their decision to excuse it was entitled to judicial deference under the FAA.',
    judicialReasoning: 'Justice Breyer\'s majority opinion applied the presumption that pre-arbitration procedural conditions are for arbitrators, not courts, to determine, drawing on the Court\'s domestic arbitration precedents. The majority reasoned that BITs, like commercial arbitration agreements, must be interpreted to give effect to the parties\' intent, and that the text and structure of the UK-Argentina BIT did not clearly indicate that the 18-month requirement was a condition on consent to arbitrate rather than a procedural step. The Court found that the arbitrators had reasonably concluded that Argentina\'s own legislative actions had rendered the condition futile and that Argentina was not prejudiced by BG Group\'s non-compliance. Justice Roberts, joined by Justice Kennedy, dissented, arguing that treaty commitments by sovereign states are categorically different from commercial arbitration agreements and that courts should independently review whether treaty conditions to arbitration have been met.',
    legalStandards: [
      'Federal Arbitration Act, 9 U.S.C. §§ 10-11: grounds for vacating or modifying an arbitral award',
      'UK-Argentina Bilateral Investment Treaty (1990), Article 8: dispute resolution and pre-arbitration conditions',
      'UNCITRAL Arbitration Rules (1976)',
      'Howsam v. Dean Witter Reynolds, Inc., 537 U.S. 79 (2002): procedural arbitrability questions are for arbitrators',
      'Vienna Convention on the Law of Treaties, Article 31: treaty interpretation rules'
    ],
    keyPrecedents: [
      'Howsam v. Dean Witter Reynolds, Inc., 537 U.S. 79 (2002): procedural questions presumptively for arbitrators',
      'First Options of Chicago, Inc. v. Kaplan, 514 U.S. 938 (1995): who decides arbitrability',
      'Loewen Group, Inc. v. United States, ICSID Case No. ARB(AF)/98/3 (2003): exhaustion of local remedies in investor-state arbitration'
    ],
    evidenceAnalysis: 'The arbitral tribunal examined Argentina\'s emergency laws enacted during the 2001-2002 financial crisis, which froze utility tariffs and blocked judicial relief through domestic courts. Evidence included BG Group\'s futile attempts to seek redress through Argentine administrative channels and the Argentine courts\' consistent rulings denying tariff restoration to foreign investors. The tribunal analyzed the BIT\'s text and context, finding nothing requiring strict compliance with the 18-month requirement where the respondent state itself had created the conditions making compliance impossible.',
    alternativeOutcomes: 'Had the Supreme Court affirmed the D.C. Circuit, investor-state arbitral awards would have been subject to broader de novo judicial review of jurisdictional preconditions, significantly increasing the cost and uncertainty of BIT arbitration for investors. The decision could have emboldened states to include complex procedural conditions in BITs as a de facto shield against arbitration. Alternatively, requiring BG Group to have spent 18 months in Argentine courts before arbitrating would have caused further delay and expense where the outcome was predictably unfavorable.',
    lessonsLearned: [
      'Pre-arbitration procedural conditions in investment treaties are generally for arbitrators to interpret and apply, not courts',
      'A state that renders pre-arbitration conditions futile through its own actions may be precluded from relying on those conditions as a jurisdictional bar',
      'Investor-state arbitration operates under similar deference principles as commercial arbitration in U.S. courts',
      'BIT drafters should clearly specify whether pre-arbitration conditions are jurisdictional or merely procedural to reduce uncertainty'
    ],
    bestPractices: [
      'Carefully analyze the text of applicable BIT provisions to determine whether pre-arbitration steps are jurisdictional conditions or procedural requirements',
      'Document all attempts to comply with or satisfy pre-arbitration requirements, including correspondence with host-state authorities',
      'When host-state actions render pre-arbitration conditions futile, present contemporaneous evidence of futility to the tribunal',
      'Seat international arbitration in a jurisdiction that applies a deferential standard of review to arbitral awards'
    ],
    significance: 'BG Group plc v. Republic of Argentina is the leading U.S. Supreme Court precedent on the allocation of competence between courts and arbitrators in investor-state treaty arbitration. The decision confirmed that the pro-arbitration presumptions of the FAA extend to the interpretation of BIT pre-conditions, substantially limiting post-award judicial second-guessing of arbitral jurisdiction determinations. It reinforced the finality of international arbitral awards in U.S. courts and has influenced how parties structure investment treaty arbitration globally. The dissent\'s concern about extending commercial arbitration presumptions to sovereign treaty commitments remains an active debate in international investment law.',
    outcome: 'Claimant Victory — $185 million award reinstated',
    parties: [
      {
        name: 'BG Group plc',
        role: 'PLAINTIFF',
        counsel: 'Laurence H. Tribe; Jonathan Gould (King & Spalding)',
        description: 'British gas corporation seeking confirmation of a $185 million UNCITRAL arbitral award arising from Argentina\'s regulatory freeze on gas tariffs'
      },
      {
        name: 'Republic of Argentina',
        role: 'DEFENDANT',
        counsel: 'Jonathan D. Hacker; Office of the Attorney General of Argentina',
        description: 'Sovereign state challenging the arbitral award on grounds that the tribunal lacked jurisdiction because the investor failed to satisfy the BIT\'s 18-month local litigation requirement'
      }
    ]
  },
  {
    litigationSlug: 'international-arbitration',
    name: 'Dallah Real Estate and Tourism Holding Company v. Ministry of Religious Affairs, Government of Pakistan',
    citation: '[2010] UKSC 46; [2011] 1 AC 763',
    jurisdiction: 'United Kingdom / International (ICC)',
    court: 'United Kingdom Supreme Court',
    year: 2010,
    facts: 'Dallah Real Estate and Tourism Holding Company, a Saudi Arabian company, entered into an agreement in 1995 with a Pakistani governmental trust, the Awami Hajj Trust, for the construction and lease of housing for Pakistani pilgrims in Mecca. The agreement contained an ICC arbitration clause. The Awami Hajj Trust was established by a Pakistani government ordinance for the specific purpose of the housing project, but the ordinance was later allowed to lapse. When disputes arose over rent and the trust ceased to exist as a legal entity, Dallah commenced ICC arbitration in Paris and named the Government of Pakistan as respondent, arguing that the government was the true party to the agreement despite having signed it through the trust. The ICC tribunal seated in Paris accepted jurisdiction over Pakistan and awarded Dallah approximately $20 million. Dallah sought to enforce the award in England; Pakistan challenged enforcement, arguing it was never a party to the arbitration agreement.',
    keyLegalIssues: [
      'Whether a non-signatory sovereign state can be bound by an arbitration agreement entered into by a governmental trust it created',
      'Whether English courts conducting a de novo review of arbitral jurisdiction under the New York Convention are bound by the arbitral tribunal\'s own findings on that issue',
      'Application of French law (as the law of the seat) to determine whether Pakistan was party to the ICC arbitration agreement',
      'The alter ego, agency, and implied consent doctrines as bases for binding non-signatories to arbitration agreements'
    ],
    plaintiffArguments: 'Dallah argued that the Government of Pakistan was the true party to the housing agreement, having created the Awami Hajj Trust as a mere instrumentality to implement the project, and that it exercised complete control over the trust\'s activities. Dallah relied on French law principles of implied consent and the group of companies doctrine to contend that Pakistan\'s pervasive involvement in the project demonstrated its consent to arbitrate. It also argued that English courts should give deference to the ICC tribunal\'s findings on jurisdiction as part of the merits determination.',
    defendantArguments: 'Pakistan argued that it never signed any agreement with Dallah, that the Awami Hajj Trust was a legally separate entity created by statute, and that the cessation of the trust\'s legal existence did not render Pakistan a substitute party. Pakistan maintained that English courts exercising de novo review under the New York Convention were required to independently assess whether Pakistan had consented to arbitration, without deference to the tribunal\'s own jurisdictional findings. Pakistan further argued that the group of companies doctrine had no application under French or English law absent clear evidence of consent.',
    proceduralHistory: 'The ICC tribunal, applying French law, assumed jurisdiction over Pakistan and rendered an award of approximately $20 million in Dallah\'s favor. Dallah sought to enforce the award in England under the Arbitration Act 1996 (implementing the New York Convention). The English High Court refused enforcement, finding that Pakistan had not been a party to the arbitration agreement. The Court of Appeal upheld that refusal. The Supreme Court unanimously dismissed Dallah\'s appeal.',
    finalDecision: 'The UK Supreme Court unanimously upheld refusal of enforcement of the ICC arbitral award. The Court held that Pakistan was not a party to the arbitration agreement, applying French law as the law governing the arbitration agreement, and that English courts owe no deference to the tribunal\'s own findings on jurisdiction when reviewing enforcement under the New York Convention.',
    judicialReasoning: 'Lord Mance, writing the leading judgment, held that the New York Convention Article V(1)(a) expressly requires the court addressed for enforcement to determine independently, under the law governing the arbitration agreement (here French law), whether a party was bound by the agreement. The tribunal\'s own finding of jurisdiction is not binding on the enforcement court; if it were, a tribunal could enlarge its own jurisdiction by fiat. Applying French law, the Court found that the evidence did not establish that Pakistan had impliedly consented to arbitration: Pakistan was not a signatory, did not behave as if it were a party to the agreement, and the governmental trust was not merely an alter ego of the state. The Court rejected the expansive group of companies doctrine as applied by the tribunal, finding that mere creation of and involvement with a trust does not make a state party to the trust\'s contracts. Lord Collins and Lord Saville wrote concurring judgments emphasizing that consistent application of de novo review is essential to the integrity of the New York Convention enforcement regime.',
    legalStandards: [
      'New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards (1958), Article V(1)(a): non-party as ground for refusal of enforcement',
      'UK Arbitration Act 1996, Section 103: enforcement of New York Convention awards',
      'French law on arbitral jurisdiction and implied consent (as law of the arbitral seat)',
      'Alter ego and group of companies doctrine in international arbitration',
      'De novo judicial review of arbitral tribunal\'s own jurisdictional determinations at enforcement stage'
    ],
    keyPrecedents: [
      'Dallah v Pakistan (French Cour d\'appel, Paris, 17 February 2011): French court also refused to set aside the award, finding Pakistan bound — creating conflicting international decisions',
      'Dow Chemical France v. ISOVER Saint-Gobain, ICC Case 4131 (1982): seminal group of companies doctrine award',
      'Minmetals Germany GmbH v. Ferco Steel Ltd [1999] CLC 647: English courts apply de novo review to jurisdictional challenges under New York Convention'
    ],
    evidenceAnalysis: 'The tribunals and courts extensively analyzed the 1995 agreement, Pakistani government ordinances establishing and dissolving the trust, correspondence between Pakistani ministry officials and Dallah, and the financial arrangements under the project. The ICC tribunal found that Pakistan\'s Ministry of Religious Affairs had directed the trust\'s activities in minute detail and had negotiated the agreement on its behalf. English courts, reviewing the same documents de novo, found that this evidence showed Pakistan acting as a principal directing an agent but did not demonstrate consent to be bound personally as a party to the arbitration clause.',
    alternativeOutcomes: 'Had the Supreme Court deferred to the ICC tribunal\'s jurisdictional finding, the decision would have effectively allowed arbitral tribunals to bind non-signatories through expansive factual findings immune from meaningful judicial review at enforcement. This would have fundamentally altered the balance between arbitral finality and New York Convention enforcement safeguards. Alternatively, if French courts (before which set-aside proceedings were pending) had also refused to enforce the award, Dallah would have obtained a $20 million award unenforceable in any jurisdiction.',
    lessonsLearned: [
      'Enforcement courts independently assess whether each respondent was a party to the arbitration agreement under the New York Convention, without deference to the tribunal\'s own findings',
      'States that implement projects through governmental trusts or special purpose entities may not be bound by those entities\' arbitration agreements absent clear evidence of state consent',
      'The group of companies doctrine applies narrowly and requires unambiguous evidence of implied consent, not merely corporate or governmental control',
      'Claimants seeking to arbitrate against a state must carefully identify the correct contracting party and structure the agreement to bind the state directly'
    ],
    bestPractices: [
      'When contracting with a government-sponsored entity, insist that the parent ministry or state explicitly sign or ratify the arbitration agreement',
      'Draft arbitration clauses to expressly bind successors, assigns, and the creating governmental authority in case the contracting entity is dissolved',
      'Conduct early legal analysis of the non-signatory doctrines available under the law of the anticipated seat before initiating arbitration against a non-signatory',
      'Anticipate parallel enforcement and set-aside proceedings in multiple jurisdictions when the respondent is a sovereign state'
    ],
    significance: 'Dallah v. Pakistan is one of the most important decisions in international arbitration on the question of who is bound by an arbitration agreement and the standard of judicial review of arbitral jurisdiction at the enforcement stage. The decision firmly established in English law that New York Convention enforcement courts apply de novo review to jurisdiction and are not bound by the tribunal\'s own findings on that issue. The case created a famous divergence between the English and French courts on the same award, illustrating the importance of the law of the seat and the enforcement forum. It remains a key reference point for practitioners advising on non-signatory issues in investment and commercial arbitration.',
    outcome: 'Respondent Victory — enforcement refused',
    parties: [
      {
        name: 'Dallah Real Estate and Tourism Holding Company',
        role: 'PLAINTIFF',
        counsel: 'Lord Grabiner QC; Toby Landau QC (Essex Court Chambers)',
        description: 'Saudi Arabian real estate company seeking to enforce a $20 million ICC arbitral award against the Government of Pakistan as the alleged true contracting party'
      },
      {
        name: 'Ministry of Religious Affairs, Government of Pakistan',
        role: 'DEFENDANT',
        counsel: 'Lord Pannick QC; Ali Malek QC (3 Verulam Buildings)',
        description: 'Pakistani government ministry contesting enforcement on grounds it was not a signatory and had not consented to ICC arbitration'
      }
    ]
  },
  {
    litigationSlug: 'international-arbitration',
    name: 'First Options of Chicago, Inc. v. Kaplan',
    citation: '514 U.S. 938 (1995)',
    jurisdiction: 'United States (Federal)',
    court: 'Supreme Court of the United States',
    year: 1995,
    facts: 'First Options of Chicago, a securities clearing house, entered into workout agreements with Manuel Kaplan and his wife Carol Kaplan personally, as well as with MK Investments, Inc., the Kaplans\' investment company. The workout agreements contained arbitration clauses. When a dispute arose, First Options demanded arbitration before the Philadelphia Stock Exchange panel for debts allegedly owed by all three parties. MK Investments had signed the workout documents but the Kaplans personally had not signed any document containing an arbitration clause. The Kaplans objected to arbitration, arguing they were not personally bound by any arbitration agreement. The arbitration panel ruled against the Kaplans\' jurisdictional objection, proceeded to the merits, and awarded First Options approximately $2.5 million. The Kaplans sought vacatur in federal court, and the district court confirmed the award; the Third Circuit reversed as to the Kaplans personally, finding they had not agreed to arbitrate.',
    keyLegalIssues: [
      'Who — courts or arbitrators — decides whether parties have agreed to submit their dispute to arbitration ("arbitrability")',
      'What is the standard of judicial review of an arbitral panel\'s determination of its own jurisdiction',
      'Whether a party can be compelled to arbitrate a dispute it never agreed to arbitrate',
      'How courts determine whether parties have delegated arbitrability questions to the arbitrator'
    ],
    plaintiffArguments: 'First Options argued that by participating in the arbitration and arguing their case to the panel, the Kaplans had implicitly consented to arbitration and to the panel\'s authority to decide its own jurisdiction. First Options contended that the arbitrators\' finding of jurisdiction should be reviewed deferentially, as it is a factual-legal determination within the arbitrators\' domain. First Options also argued that the workout agreements, which the Kaplans had participated in negotiating, should be read as encompassing the Kaplans personally.',
    defendantArguments: 'The Kaplans argued they had never personally signed any arbitration agreement, that their objection to arbitration was timely and clear, and that no court could compel them to arbitrate absent their own written agreement to do so. They maintained that the question of whether they had consented to arbitration was for courts, not arbitrators, to decide de novo, because a party that has not agreed to arbitrate cannot be bound by an arbitrator\'s self-serving finding that it has jurisdiction. The Kaplans emphasized that submitting to arbitration under protest to avoid a default did not constitute waiver of their jurisdictional objection.',
    proceduralHistory: 'First Options initiated arbitration before the Philadelphia Stock Exchange arbitration panel. The Kaplans personally objected to jurisdiction but participated in the proceedings under protest. The panel ruled it had jurisdiction and awarded $2.5 million to First Options. First Options moved to confirm and the Kaplans moved to vacate. The Eastern District of Pennsylvania confirmed the award. The Third Circuit Court of Appeals reversed as to the Kaplans\' personal liability, applying de novo review to the arbitrability question. The Supreme Court affirmed the Third Circuit.',
    finalDecision: 'The Supreme Court unanimously affirmed the Third Circuit, holding that courts should independently review (de novo) whether parties agreed to submit the question of arbitrability to the arbitrators. The Court held that the Kaplans had not clearly agreed to arbitrate and vacated the award against them personally.',
    judicialReasoning: 'Justice Breyer\'s unanimous opinion established a foundational framework distinguishing two types of arbitrability questions: (1) whether the parties agreed to arbitrate the merits of a particular dispute, which courts review de novo; and (2) procedural questions arising under an admittedly applicable arbitration agreement, which arbitrators decide. The key insight was that the same deference owed to arbitrators on the merits cannot be extended to the threshold question of whether the parties ever agreed to arbitrate at all, because that would allow arbitrators to bootstrap their own jurisdiction by deciding jurisdictional disputes in their own favor. For arbitrators to have authority to decide arbitrability, the parties must clearly and unmistakably have agreed to delegate that question to the arbitrators. Absent such clear agreement — as was the case with the Kaplans, who had signed no arbitration clause — courts review the issue de novo. The Court applied ordinary contract law principles, holding that a party\' objection to arbitration does not constitute consent and that arbitration is fundamentally consensual.',
    legalStandards: [
      'Federal Arbitration Act, 9 U.S.C. §§ 1-16: consent as the foundation of arbitration',
      'Clear and unmistakable evidence standard for delegation of arbitrability to arbitrators',
      'De novo judicial review of arbitrability in absence of clear delegation',
      'Ordinary contract formation principles governing consent to arbitrate',
      'AT&T Technologies, Inc. v. Communications Workers, 475 U.S. 643 (1986): courts decide substantive arbitrability'
    ],
    keyPrecedents: [
      'AT&T Technologies, Inc. v. Communications Workers, 475 U.S. 643 (1986): arbitrability is a question for courts unless clearly delegated',
      'Howsam v. Dean Witter Reynolds, Inc., 537 U.S. 79 (2002): procedural questions presumptively for arbitrators (later clarified the First Options framework)',
      'Rent-A-Center, West, Inc. v. Jackson, 561 U.S. 63 (2010): delegation clauses in arbitration agreements are separately enforceable'
    ],
    evidenceAnalysis: 'The Court examined the workout agreements and correspondence to determine whether any document signed by the Kaplans personally contained an arbitration clause or manifested agreement to submit disputes to arbitration. Finding no such signed agreement, and noting the Kaplans\' clear and timely objection at the arbitration, the Court concluded the evidence was insufficient to establish consent. The distinction between MK Investments, which had signed the relevant documents, and the Kaplans personally, who had not, was determinative.',
    alternativeOutcomes: 'A ruling for First Options would have established that a party\'s participation in arbitration proceedings under objection constitutes a waiver of the right to judicial determination of arbitrability, severely chilling parties\' ability to challenge arbitral jurisdiction without risking an adverse default award. It would also have allowed arbitrators to determine their own jurisdiction conclusively, fundamentally altering the relationship between courts and arbitral tribunals. The decision as rendered preserved courts as the gatekeepers of arbitration consent, maintaining the consensual foundation of the arbitration system.',
    lessonsLearned: [
      'Courts — not arbitrators — decide whether parties agreed to arbitrate absent a clear and unmistakable delegation of that question to the arbitrator',
      'Parties who object to arbitration jurisdiction but participate in proceedings under protest do not waive their right to de novo judicial review of arbitrability',
      'Every party intended to be bound by an arbitration agreement must sign or otherwise clearly manifest consent; corporate signatures do not bind individual principals absent their own agreement',
      'Drafters seeking to delegate arbitrability to arbitrators must use explicit delegation clauses to meet the clear and unmistakable evidence standard'
    ],
    bestPractices: [
      'Ensure all intended parties — including individual principals of corporate signatories — personally sign the arbitration agreement or a separate submission agreement',
      'Include an explicit delegation clause (e.g., "disputes about the scope or validity of this arbitration agreement shall be decided by the arbitrators") to clearly delegate arbitrability',
      'Raise timely and written objections to arbitral jurisdiction before participating in proceedings to preserve de novo judicial review rights',
      'Review arbitration agreements in workout and restructuring contexts to confirm that all relevant parties, not just the corporate entity, are expressly bound'
    ],
    significance: 'First Options of Chicago v. Kaplan is the cornerstone Supreme Court decision establishing who decides arbitrability — the court or the arbitrator — and the applicable standard of review. The "clear and unmistakable evidence" test for delegation of arbitrability to arbitrators has shaped decades of arbitration practice and litigation, requiring explicit delegation clauses to achieve arbitrator-decided arbitrability. The decision reinforced that arbitration is consensual and that courts serve as the final arbiters of whether consent to arbitrate exists. First Options is cited in virtually every U.S. case involving arbitrability and has profoundly influenced the drafting of international arbitration clauses worldwide.',
    outcome: 'Defendant Victory — award vacated as to individual parties',
    parties: [
      {
        name: 'First Options of Chicago, Inc.',
        role: 'PLAINTIFF',
        counsel: 'Carter G. Phillips (Sidley & Austin)',
        description: 'Securities clearing house seeking confirmation of a $2.5 million arbitral award against investors and their personal guarantors on workout agreements'
      },
      {
        name: 'Manuel Kaplan and Carol Kaplan',
        role: 'DEFENDANT',
        counsel: 'Andrew J. Schaffran',
        description: 'Individual investors challenging arbitral jurisdiction on grounds they personally signed no arbitration agreement, distinguishing their personal liability from that of their company'
      }
    ]
  }
];

export default cases;
