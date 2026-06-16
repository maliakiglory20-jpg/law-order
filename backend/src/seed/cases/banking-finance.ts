import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'banking-finance',
    name: 'Marquette National Bank of Minneapolis v. First of Omaha Service Corp.',
    citation: '439 U.S. 299 (1978)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1978,
    isFeatured: true,
    outcome: 'Defendant Victory',
    facts:
      'First of Omaha Service Corp., a subsidiary of a Nebraska national bank, solicited credit-card customers in Minnesota and charged interest rates permissible under Nebraska law but above the maximum allowed by Minnesota usury statutes. Marquette National Bank, a Minnesota-chartered national bank, brought suit arguing that First of Omaha was violating Minnesota law by exporting Nebraska\'s higher interest rates into Minnesota. The National Bank Act of 1864 provided that a national bank could charge interest at the rate allowed by the state "where the bank is located." The dispute turned on whether a bank\'s home state\'s usury ceiling governed transactions conducted with out-of-state customers. Minnesota regulators supported Marquette, contending that allowing interstate rate exportation would deprive consumers of their state\'s consumer-protection guarantees. The case reached the Supreme Court after conflicting interpretations arose among financial regulators regarding which state\'s law applied to credit-card interest.',
    keyLegalIssues: [
      'Which state\'s usury law governs interest charged by a national bank to out-of-state customers',
      'Interpretation of "where the bank is located" under 12 U.S.C. § 85 of the National Bank Act',
      'Preemption of state usury laws by federal banking law',
      'Constitutional Commerce Clause implications of interstate credit-card lending',
    ],
    plaintiffArguments:
      'Marquette argued that Minnesota\'s usury statutes should govern any credit transactions conducted within Minnesota, regardless of the lender\'s charter state, because Minnesota consumers were the direct recipients of credit and deserved the protection of their own state\'s consumer laws. It contended that permitting a Nebraska bank to export its higher interest ceiling into Minnesota would effectively nullify Minnesota\'s legislature\'s policy judgments about fair lending. Marquette further argued that the phrase "where the bank is located" in the National Bank Act referred to the location of the customer transaction, not merely the bank\'s chartering state, given the realities of interstate consumer banking.',
    defendantArguments:
      'First of Omaha contended that under the plain text of 12 U.S.C. § 85, a national bank is "located" in its chartering state—Nebraska—and therefore is entitled to charge the interest rate permitted by Nebraska law to any customer nationwide. It argued that Congress enacted the National Bank Act to create uniform federal standards for national banks and that allowing each destination state to impose its own usury ceiling would fragment the national banking market. First of Omaha also relied on the historical understanding of the Act, maintaining that Congress intended the bank\'s home state to govern its interest-rate authority.',
    proceduralHistory:
      'Marquette National Bank filed suit in Minnesota state court seeking an injunction against First of Omaha\'s collection of interest exceeding Minnesota\'s statutory maximum. The Minnesota Supreme Court ruled in favor of Marquette, holding that Minnesota\'s usury law applied. First of Omaha appealed to the United States Supreme Court, which granted certiorari to resolve the important federal question of the scope of the National Bank Act\'s interest-rate provision.',
    finalDecision:
      'The Supreme Court reversed the Minnesota Supreme Court in an 8-1 decision authored by Justice Brennan, holding that a national bank is "located" for purposes of § 85 in the state named in its charter and that it may therefore charge customers in any other state the interest rate permitted by its home state. The ruling meant that First of Omaha could lawfully apply Nebraska\'s higher interest ceiling to its Minnesota credit-card customers.',
    judicialReasoning:
      'Justice Brennan\'s majority opinion examined the text, structure, and legislative history of the National Bank Act of 1864, finding that Congress deliberately chose to tie interest-rate authority to a bank\'s chartering state in order to give national banks competitive parity with state banks and to promote a uniform national banking system. The Court rejected Marquette\'s transactional interpretation, noting that the statutory text refers to the state where the bank is located—its domicile—not where individual transactions occur. The majority also stressed that Congress had specifically amended § 85 in 1874 to ensure parity between state and national banks in the same state, reinforcing the domicile-centered reading. The Court acknowledged the consumer-protection concerns but held that policy choices of that magnitude must be addressed by Congress rather than resolved through judicial reinterpretation of a century-old statute.',
    legalStandards: [
      '12 U.S.C. § 85 — National Bank Act interest-rate exportation provision',
      'Federal preemption of state usury laws for national banks',
      'Statutory interpretation of "where the bank is located"',
      'National bank parity principle under federal banking law',
    ],
    keyPrecedents: [
      'Tiffany v. National Bank of Missouri, 85 U.S. 409 (1874)',
      'National Bank Act of 1864, ch. 106, 13 Stat. 99',
      'Evans v. National Bank of Savannah, 251 U.S. 108 (1919)',
    ],
    evidenceAnalysis:
      'The Court focused almost entirely on statutory text and legislative history rather than factual evidence, examining congressional debates from 1864 and the 1874 amendments to § 85. The historical record showed that Congress was principally concerned with giving national banks interest-rate flexibility comparable to competing state-chartered institutions in the same state, supporting the home-state interpretation. Contemporaneous regulatory interpretations by the Comptroller of the Currency, which consistently read § 85 as referring to the chartering state, were given weight as evidence of the statute\'s original understood meaning.',
    alternativeOutcomes:
      'Had the Court affirmed the Minnesota Supreme Court, national banks would have been required to comply with the usury laws of every state in which they solicited customers, making uniform nationwide credit-card programs effectively impossible and likely limiting credit availability. An alternative middle-ground outcome—requiring compliance with destination-state law only for solicitation campaigns targeting specific states—was considered but rejected as administratively unworkable and inconsistent with the statutory text.',
    lessonsLearned: [
      'Federal statutory language governing national banks is broadly preemptive of conflicting state consumer-finance laws',
      'The chartering-state principle creates strong incentives for banks to domicile in states with favorable interest-rate ceilings',
      'Landmark decisions defining bank location under federal law can reshape entire consumer-credit markets',
      'Congressional inaction following major judicial interpretations can constitute implicit ratification of the ruling\'s market effects',
    ],
    bestPractices: [
      'National banks should carefully identify their chartering state\'s interest-rate ceiling as the governing standard for multi-state lending programs',
      'State legislatures seeking consumer-interest protections should pursue federal legislative channels given the preemptive scope of the National Bank Act',
      'Legal counsel advising credit-card issuers must monitor the chartering state\'s usury statute, not merely destination-state law',
      'Banks entering new interstate markets should obtain OCC guidance on the scope of § 85 interest-rate exportation',
    ],
    significance:
      'Marquette National Bank fundamentally transformed American consumer credit by allowing national banks to export their home state\'s interest rates nationwide, effectively nullifying state usury ceilings for federally chartered lenders. The decision triggered the "race to the bottom" in state usury law—most prominently illustrated by South Dakota and Delaware removing their interest-rate ceilings to attract major bank credit-card operations—and made universal credit-card programs economically viable for the first time. It laid the constitutional and statutory groundwork for the modern credit-card industry, enabling banks to offer uniform rates across all fifty states. The ruling also prompted Congress and state legislatures to reconsider consumer-protection frameworks that had assumed state usury law would remain operative. Marquette remains one of the most consequential banking decisions of the twentieth century, cited in virtually every subsequent case involving national bank preemption of state interest-rate or fee regulations.',
    parties: [
      {
        name: 'Marquette National Bank of Minneapolis',
        role: 'PLAINTIFF',
        description: 'Minnesota-chartered national bank challenging Nebraska competitor\'s use of higher out-of-state interest rates',
      },
      {
        name: 'First of Omaha Service Corp.',
        role: 'DEFENDANT',
        description: 'Nebraska national bank subsidiary offering credit cards to Minnesota consumers at Nebraska-permitted interest rates',
      },
    ],
  },

  {
    litigationSlug: 'banking-finance',
    name: 'Smiley v. Citibank (South Dakota), N.A.',
    citation: '517 U.S. 735 (1996)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1996,
    outcome: 'Defendant Victory',
    facts:
      'Barbara Smiley, a California resident and Citibank credit-card customer, filed a class action in California state court challenging the late-payment fees Citibank charged on her account. Citibank (South Dakota), N.A. was chartered in South Dakota and charged late fees that exceeded the maximum permitted by California law but were lawful under South Dakota law. Smiley argued that although Marquette National Bank settled the question for interest rates, late fees were a distinct category of charge not covered by the § 85 exportation principle and therefore subject to California\'s consumer-protection statutes. The case required the Court to decide whether credit-card fees beyond pure interest—such as late charges, over-limit fees, and annual fees—fell within the meaning of "interest" under the National Bank Act. The resolution of this question had enormous practical significance for the national credit-card industry, which had structured multi-state fee schedules in reliance on the Marquette principle.',
    keyLegalIssues: [
      'Whether credit-card late-payment fees constitute "interest" within the meaning of 12 U.S.C. § 85',
      'Scope of Marquette National Bank\'s interest-exportation principle as applied to non-rate charges',
      'Deference to the Office of the Comptroller of the Currency\'s regulatory definition of "interest"',
      'Preemption of California consumer-protection statutes by federal banking law',
    ],
    plaintiffArguments:
      'Smiley contended that late fees, as a matter of ordinary language and traditional legal distinction, are penalties rather than interest and therefore fall outside § 85\'s exportation provision, leaving California free to cap such charges. She argued that Marquette\'s rationale—preventing balkanization of the national banking system—did not require extending the ruling beyond the pure cost-of-money charges that Congress contemplated in 1864. Smiley also maintained that the OCC\'s regulatory interpretation of "interest" to include fees was entitled to no deference because it was a post-hoc litigation position rather than a considered policy judgment issued through notice-and-comment rulemaking.',
    defendantArguments:
      'Citibank argued that the OCC had issued a regulation expressly defining "interest" under § 85 to encompass late fees, over-limit fees, and other standard credit-card charges, and that this regulation was a reasonable interpretation of an ambiguous statutory term entitled to Chevron deference. It contended that treating fees as categorically distinct from interest would create an arbitrary line inconsistent with the economic reality that such charges are compensation for the cost and risk of extending credit. Citibank further argued that allowing each state to regulate fees independently would undermine the uniformity that Marquette sought to preserve.',
    proceduralHistory:
      'Smiley filed her class action in California Superior Court, and Citibank removed the case to federal court. The district court dismissed the complaint, finding that the OCC regulation brought late fees within § 85. The Ninth Circuit Court of Appeals reversed, holding that "interest" did not naturally include late fees and that the OCC regulation was not entitled to Chevron deference. The Supreme Court granted certiorari given the circuit split and the issue\'s broad significance for the credit-card industry.',
    finalDecision:
      'The Supreme Court reversed the Ninth Circuit in a unanimous decision authored by Justice Scalia, holding that the OCC\'s regulation defining "interest" to include late-payment fees was a reasonable construction of § 85 entitled to Chevron deference. Citibank\'s South Dakota-authorized late fees were therefore lawfully charged to California customers, and California law was preempted.',
    judicialReasoning:
      'Justice Scalia applied the two-step Chevron framework, first finding that § 85\'s use of "interest" was ambiguous as to whether it encompassed charges beyond the cost of borrowed money in the strict sense, and second concluding that the OCC\'s expansive regulatory definition was a permissible and reasonable policy choice. The opinion emphasized that administrative agencies with specialized expertise in their regulatory domains are entitled to substantial deference when filling statutory gaps, particularly in complex technical fields like banking. The Court declined to draw a judicially-managed line between "interest" and "fees" because any such line would be economically artificial—both forms of charge compensate the bank for the credit risk and administrative cost of lending. The decision also reinforced that preemption of state consumer-finance law in the national-bank context flows from federal statute and agency regulation together, not merely from the statute in isolation.',
    legalStandards: [
      '12 U.S.C. § 85 — definition of interest for national banks',
      'Chevron U.S.A., Inc. v. Natural Resources Defense Council, 467 U.S. 837 (1984) — agency deference',
      'OCC regulation 12 C.F.R. § 7.4001 defining "interest"',
      'Federal preemption of conflicting state consumer-protection statutes',
    ],
    keyPrecedents: [
      'Marquette National Bank of Minneapolis v. First of Omaha Service Corp., 439 U.S. 299 (1978)',
      'Chevron U.S.A., Inc. v. Natural Resources Defense Council, 467 U.S. 837 (1984)',
      'Anderson National Bank v. Luckett, 321 U.S. 233 (1944)',
    ],
    evidenceAnalysis:
      'The Court examined the text of § 85, the OCC\'s regulatory record, and the economic function of credit-card late fees. Linguistic analysis of nineteenth-century usage of "interest" showed the term was sometimes used broadly to encompass any charge for the use of money, supporting the OCC\'s definition. The regulatory record demonstrated that the OCC had engaged in deliberate policy analysis before promulgating 12 C.F.R. § 7.4001, weighing industry practice, consumer impact, and the statutory purpose of national-bank uniformity, which supported treating the regulation as a considered agency judgment rather than a litigation-driven position.',
    alternativeOutcomes:
      'A ruling for Smiley would have required Citibank and all national banks to calibrate their fee schedules to comply with the most restrictive state law in any jurisdiction where they maintained customers, effectively extending the pre-Marquette patchwork of state regulation to the fee dimension of consumer credit. A narrower ruling limiting the OCC\'s deference only to interest-rate regulations, while leaving fees to state law, was the Ninth Circuit\'s approach but was rejected as inconsistent with the Chevron principle and the OCC\'s statutory mandate.',
    lessonsLearned: [
      'OCC regulations defining the scope of § 85 interest carry Chevron deference, dramatically expanding the reach of federal preemption in consumer credit',
      'Credit-card fee structures engineered around a favorable chartering state are legally defensible under federal law',
      'Regulatory definitions issued through notice-and-comment rulemaking carry substantially more deference than agency positions advanced only in litigation',
      'State consumer-protection advocates must pursue federal legislative reform rather than state litigation to cap national bank fees',
    ],
    bestPractices: [
      'Credit-card issuers should structure fee schedules in compliance with their chartering state\'s law and maintain OCC guidance documentation to defend preemption claims',
      'Class-action plaintiffs challenging national bank charges must address the OCC\'s regulatory definition of interest before asserting state-law claims',
      'In-house counsel at national banks should monitor OCC rulemaking for changes to the definition of interest that could expand or contract the preemption shield',
      'State attorneys general should coordinate federal lobbying efforts when seeking to impose uniform fee caps on national banks',
    ],
    significance:
      'Smiley extended Marquette\'s interest-exportation principle to encompass the full range of credit-card fees, cementing the legal infrastructure that allows national banks to operate uniform, home-state-governed fee schedules in every American state. The decision confirmed that the OCC has broad authority to define what counts as "interest," transforming that agency into a primary regulator of credit-card economics. Smiley eliminated the prospect of state-by-state fee litigation against major credit-card issuers and accelerated the industry\'s consolidation around a small number of states with bank-friendly statutes. Together with Marquette, Smiley is considered a foundational pillar of the modern credit-card regulatory regime and is routinely cited in federal preemption disputes involving national bank charges and fees.',
    parties: [
      {
        name: 'Barbara Smiley',
        role: 'PLAINTIFF',
        description: 'California credit-card customer challenging Citibank\'s out-of-state late fees as violating California consumer-protection law',
      },
      {
        name: 'Citibank (South Dakota), N.A.',
        role: 'DEFENDANT',
        description: 'South Dakota-chartered national bank issuing credit cards nationwide under South Dakota\'s favorable interest and fee laws',
      },
    ],
  },

  {
    litigationSlug: 'banking-finance',
    name: 'NationsBank of North Carolina, N.A. v. Variable Annuity Life Insurance Co.',
    citation: '513 U.S. 251 (1995)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1995,
    outcome: 'Defendant Victory',
    facts:
      'NationsBank of North Carolina sought approval from the Office of the Comptroller of the Currency to act as agent for the sale of annuities—including variable annuities—to its customers through its bank branches. Variable Annuity Life Insurance Company (VALIC) and several insurance trade associations objected, arguing that annuities are insurance products and that national banks are prohibited from selling insurance under 12 U.S.C. § 92 except in towns with populations of 5,000 or fewer. The OCC issued a letter ruling concluding that annuities are not "insurance" for purposes of § 92 and that banks therefore had authority to act as agents in their sale. VALIC challenged the OCC ruling in federal district court, contending that annuities are a form of insurance that Congress prohibited national banks from marketing. The case tested the extent to which the OCC could define the scope of permissible bank activities through informal guidance and the degree of judicial deference owed to those determinations.',
    keyLegalIssues: [
      'Whether annuities constitute "insurance" within the meaning of 12 U.S.C. § 92\'s prohibition on national bank insurance sales',
      'Scope of OCC authority to authorize new bank activities through letter rulings',
      'Level of judicial deference owed to OCC interpretations of the National Bank Act',
      'Competitive boundary between federally chartered banks and state-regulated insurance companies',
    ],
    plaintiffArguments:
      'VALIC argued that annuities have long been regulated as insurance products by state insurance commissioners and that federal courts and the Supreme Court had historically recognized annuities\' insurance characteristics, including their risk-pooling and mortality-risk functions. It contended that allowing banks to sell annuities without complying with § 92\'s population restriction would circumvent Congress\'s deliberate decision to protect state-regulated insurance markets from bank competition. VALIC also challenged the procedural validity of the OCC\'s letter ruling, arguing that it was an informal agency action that should receive no Chevron deference and that it contravened decades of contrary agency practice.',
    defendantArguments:
      'NationsBank and the OCC argued that annuities are investment products, not insurance, because they do not indemnify against a fortuitous loss but instead serve as vehicles for tax-deferred wealth accumulation and retirement income. They contended that the OCC has broad authority under the National Bank Act to determine what activities are "incidental" to banking and that its reasonable interpretation of "insurance" to exclude annuities was entitled to Chevron deference. The OCC further argued that its letter ruling, while informal, represented a considered exercise of its supervisory expertise deserving judicial respect.',
    proceduralHistory:
      'VALIC filed suit in the United States District Court for the Western District of Texas, which upheld the OCC\'s ruling. The Fifth Circuit Court of Appeals reversed, holding that annuities were a form of insurance subject to § 92\'s restrictions and that the OCC\'s letter ruling was not entitled to Chevron deference. The Supreme Court granted certiorari, and the United States intervened in support of NationsBank.',
    finalDecision:
      'The Supreme Court reversed the Fifth Circuit in a unanimous decision authored by Justice Ginsburg, holding that the OCC\'s conclusion that annuities are not "insurance" under § 92 was a reasonable and permissible construction of the statute and entitled to Chevron deference. National banks were therefore free to act as agents for the sale of annuities without being limited to small-town branches.',
    judicialReasoning:
      'Justice Ginsburg\'s opinion applied Chevron deference, finding that the term "insurance" in § 92 was ambiguous given the dual nature of annuities as both investment vehicles and risk-managing instruments. The Court concluded that the OCC\'s functional analysis—focusing on the predominant investment and savings characteristics of annuities rather than their incidental mortality risk—was a reasonable policy judgment within the agency\'s discretion. The opinion emphasized that the OCC is the expert regulator charged with defining the contours of permissible bank activity and that courts should not substitute their own views on such boundary questions. The Court also noted that Congress\'s failure to legislatively overturn prior OCC letter rulings permitting limited bank involvement in annuity sales was at least consistent with acquiescence in the agency\'s interpretation.',
    legalStandards: [
      '12 U.S.C. § 92 — restriction on national bank insurance sales in larger communities',
      'Chevron deference to OCC interpretations of the National Bank Act',
      'OCC "incidental powers" doctrine under 12 U.S.C. § 24 (Seventh)',
      'National bank activity authorization framework',
    ],
    keyPrecedents: [
      'Securities Exchange Commission v. Variable Annuity Life Insurance Co., 359 U.S. 65 (1959)',
      'Chevron U.S.A., Inc. v. Natural Resources Defense Council, 467 U.S. 837 (1984)',
      'Clarke v. Securities Industry Association, 479 U.S. 388 (1987)',
    ],
    evidenceAnalysis:
      'The Court reviewed the regulatory record of the OCC\'s letter ruling process, the legislative history of § 92, and prior administrative and judicial treatments of annuities. Examination of the 1916 enactment of § 92 showed that Congress was primarily concerned with preventing banks from dominating local insurance markets in larger communities, not with categorically excluding all investment products that bore any resemblance to insurance. The OCC\'s record included economic analysis demonstrating that variable annuities function predominantly as securities-like investment vehicles—confirmed by the SEC\'s own jurisdiction over variable annuities under federal securities law—which supported treating them differently from traditional life insurance for purposes of § 92.',
    alternativeOutcomes:
      'Had the Court affirmed the Fifth Circuit, national banks would have been barred from selling annuities in any community with a population exceeding 5,000, effectively removing them from the rapidly growing annuity market and preserving that business exclusively for state-regulated insurance companies. A narrower ruling distinguishing fixed annuities (which the OCC had long permitted banks to sell) from variable annuities (which carry securities risk) was also available but was rejected in favor of a unified holding covering both product types.',
    lessonsLearned: [
      'The OCC\'s broad "incidental powers" authority permits national banks to engage in financial activities that blur traditional boundaries with insurance and securities',
      'Chevron deference to OCC activity authorizations substantially limits judicial oversight of bank product expansion',
      'Insurance industry competitors to banks must pursue legislative solutions—not litigation—to restrict bank entry into adjacent financial product markets',
      'Variable annuity regulation sits at the intersection of banking, insurance, and securities law, requiring cross-agency coordination',
    ],
    bestPractices: [
      'National banks seeking to offer new financial products should obtain OCC letter rulings or guidance before launch to establish a documented record for Chevron deference',
      'Insurance companies facing bank competition in annuity markets should engage Congress and state insurance commissioners rather than relying on federal litigation',
      'Legal teams at banks expanding into investment products must distinguish activities that are "incidental" to banking from those requiring separate regulatory authorization',
      'OCC applicants should provide economic and functional analysis supporting the investment-product characterization of any ambiguous financial product',
    ],
    significance:
      'NationsBank v. VALIC opened the door for national banks to become major distributors of annuities and other investment products, accelerating the convergence of banking, insurance, and securities markets that culminated in the Gramm-Leach-Bliley Act of 1999. The decision confirmed that the OCC has extensive discretion to authorize new bank activities through informal guidance entitled to full Chevron deference, fundamentally shifting the balance of regulatory power over financial product development toward the federal agency. VALIC is routinely cited for the proposition that the OCC\'s interpretation of permissible bank powers is entitled to substantial judicial deference, and it remains a key precedent in disputes over national bank entry into insurance, brokerage, and other non-traditional financial services.',
    parties: [
      {
        name: 'NationsBank of North Carolina, N.A.',
        role: 'PLAINTIFF',
        description: 'National bank seeking OCC approval to act as agent for the sale of variable annuities through its branch network',
        counsel: 'Represented by private counsel and supported by the U.S. Government as intervenor',
      },
      {
        name: 'Variable Annuity Life Insurance Co. (VALIC)',
        role: 'DEFENDANT',
        description: 'Insurance company challenging OCC ruling authorizing bank sales of annuities as an unlawful encroachment on state-regulated insurance markets',
      },
    ],
  },

  {
    litigationSlug: 'banking-finance',
    name: 'Jones v. Harris Associates L.P.',
    citation: '559 U.S. 335 (2010)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2010,
    outcome: 'Defendant Victory',
    facts:
      'Jerry Jones and other shareholders of mutual funds managed by Harris Associates L.P. brought suit under § 36(b) of the Investment Company Act of 1940 alleging that Harris charged excessive advisory fees that constituted a breach of fiduciary duty. Harris managed both the Oakmark family of mutual funds and separate accounts for institutional clients, charging institutional clients substantially lower fees—roughly half the percentage—than it charged the mutual funds for comparable investment management services. Plaintiffs argued that this fee disparity was direct evidence that the fees charged to mutual fund investors were excessive. The case arose against the backdrop of a circuit split over the standard for evaluating § 36(b) excessive-fee claims, with the Seventh Circuit applying a highly deferential standard under Gartenberg v. Merrill Lynch Asset Management and other circuits questioning whether that standard was sufficiently rigorous. The outcome had broad implications for the $13 trillion mutual fund industry.',
    keyLegalIssues: [
      'Legal standard for excessive advisory fees under § 36(b) of the Investment Company Act of 1940',
      'Whether courts must defer to mutual fund board approval of advisory fees or may conduct independent judicial review',
      'Relevance of fee disparities between mutual fund and institutional clients to the § 36(b) analysis',
      'Scope of investment adviser\'s fiduciary duty with respect to compensation under federal securities law',
    ],
    plaintiffArguments:
      'Jones and the plaintiff shareholders argued that Harris\'s fees were excessive as a matter of law because Harris charged mutual fund clients fees far exceeding what it charged institutional clients for substantially similar services, demonstrating that the market-clearing price for those services was well below what mutual fund investors paid. Plaintiffs contended that the Seventh Circuit\'s ultra-deferential standard—under which an adviser could escape liability unless its fee bore "no relationship" to services rendered—was inconsistent with the fiduciary duty Congress imposed in § 36(b) and effectively immunized advisers from meaningful judicial oversight. They urged the Court to adopt a standard under which any disproportionate fee compared to market benchmarks would be sufficient evidence of a breach of fiduciary duty.',
    defendantArguments:
      'Harris Associates argued that mutual fund advisory fees are subject to robust market discipline because mutual fund boards of directors negotiate fees at arm\'s length with adviser awareness of competitive alternatives, and that Congress did not intend § 36(b) to allow courts to second-guess the product of that negotiation. It contended that differences between mutual fund and institutional advisory fees reflect meaningful differences in the services provided—including retail investor services, compliance infrastructure, and securities registration obligations—and are not evidence of overcharging. Harris also argued that the Gartenberg standard properly cabined the judicial role in investment company governance consistent with congressional intent.',
    proceduralHistory:
      'Jones filed suit in the Northern District of Illinois, which granted summary judgment for Harris, applying the Seventh Circuit\'s Gartenberg-derived standard and finding no genuine issue of material fact as to excessive fees. The Seventh Circuit Court of Appeals affirmed in an opinion by Judge Easterbrook that questioned the continuing vitality of Gartenberg but ultimately upheld dismissal on the ground that only a fee "so unusual" as to be outside any arm\'s-length negotiation could support liability. The Supreme Court granted certiorari to resolve the standard for § 36(b) excessive-fee claims.',
    finalDecision:
      'The Supreme Court vacated the Seventh Circuit\'s judgment and remanded for further proceedings under a clarified standard. The Court, in an opinion by Justice Alito, held that courts must apply the Gartenberg standard—examining all relevant circumstances including the fee comparisons with other clients—but that the Seventh Circuit had been too dismissive of fee disparities between mutual fund and institutional clients as relevant evidence.',
    judicialReasoning:
      'Justice Alito\'s unanimous opinion affirmed the Gartenberg framework as consistent with § 36(b)\'s text and legislative history, under which courts assess whether the adviser\'s fee is within a range that could result from arm\'s-length bargaining, considering factors such as the nature of the services, the adviser\'s profitability, economies of scale, and comparative fee information. The Court held that while arm\'s-length negotiations by informed, independent fund boards carry significant weight, courts must not rubber-stamp board approval and must give meaningful consideration to all circumstantial evidence of fee excessiveness, including fee disparities with institutional clients—even if such disparities can be explained by differences in services. The opinion rejected the Seventh Circuit\'s market-mimicry approach, holding that § 36(b) imposes a distinct statutory fiduciary duty that does not yield entirely to market forces.',
    legalStandards: [
      '§ 36(b) of the Investment Company Act of 1940 — investment adviser fiduciary duty as to compensation',
      'Gartenberg v. Merrill Lynch Asset Management, Inc., 694 F.2d 923 (2d Cir. 1982) standard',
      'Arm\'s-length bargaining benchmark for investment advisory fee evaluation',
      'Summary judgment standards in statutory fiduciary duty litigation',
    ],
    keyPrecedents: [
      'Gartenberg v. Merrill Lynch Asset Management, Inc., 694 F.2d 923 (2d Cir. 1982)',
      'Investment Company Act of 1940, § 36(b), 15 U.S.C. § 80a-35(b)',
      'Burks v. Lasker, 441 U.S. 471 (1979)',
    ],
    evidenceAnalysis:
      'Plaintiffs submitted documentary evidence comparing Harris\'s fee schedules for the Oakmark mutual funds with its fee schedules for institutional clients managing comparable asset pools, demonstrating fee ratios roughly twice as high for mutual fund investors. Harris responded with evidence identifying differences in service scope—retail customer service, SEC registration and compliance costs, prospectus preparation, and transfer agency coordination—that it argued explained the disparity. The Court found this comparative fee evidence legally relevant and sufficient to survive summary judgment, requiring the district court on remand to weigh the explanatory factors rather than categorically discounting the institutional comparison.',
    alternativeOutcomes:
      'Affirmance of the Seventh Circuit\'s market-based standard would have made § 36(b) claims extraordinarily difficult to sustain and effectively removed judicial oversight of mutual fund advisory fees whenever an independent board had approved the arrangement. A ruling adopting the plaintiffs\' proposed de novo fee-reasonableness standard would have invited far more aggressive judicial intrusion into fund governance and potentially disrupted the existing mutual fund fee-setting process industrywide.',
    lessonsLearned: [
      'Investment advisers owe a statutory fiduciary duty under § 36(b) that is not fully discharged by obtaining independent board approval of fee arrangements',
      'Fee disparities between mutual fund and institutional clients are legally relevant evidence in excessive-fee litigation even if differences in services exist',
      'The Gartenberg multi-factor test remains the controlling standard for § 36(b) claims after Jones v. Harris',
      'Mutual fund boards must document genuine, informed fee negotiations to support an arm\'s-length-bargaining defense',
    ],
    bestPractices: [
      'Investment advisers should maintain detailed records of the services and costs underlying fee differentials between mutual fund and institutional client schedules',
      'Mutual fund boards should conduct rigorous, documented annual fee reviews that consider competitor advisory fee benchmarks and institutional client pricing',
      'Fund directors should retain independent counsel or consultants to evaluate advisory fee proposals rather than relying solely on materials supplied by the adviser',
      'Advisers should proactively disclose economies of scale and fee breakpoints to fund boards to demonstrate alignment of interests with shareholders',
    ],
    significance:
      'Jones v. Harris Associates is the Supreme Court\'s definitive ruling on the standard for excessive investment advisory fee claims under the Investment Company Act, resolving a long-standing circuit split and affirming meaningful judicial oversight of a cornerstone mutual fund governance issue. By endorsing the Gartenberg framework while requiring courts to take fee comparisons with institutional clients seriously, the Court struck a balance between deference to independent board judgment and the statutory fiduciary duty that § 36(b) imposes. The decision prompted the mutual fund industry to strengthen its fee-review practices and increased transparency in fee disclosure, and it continues to influence both § 36(b) litigation strategy and the SEC\'s approach to mutual fund governance rulemaking.',
    parties: [
      {
        name: 'Jerry Jones',
        role: 'PLAINTIFF',
        description: 'Mutual fund shareholder alleging Harris Associates charged excessive advisory fees in breach of § 36(b) fiduciary duty',
      },
      {
        name: 'Harris Associates L.P.',
        role: 'DEFENDANT',
        description: 'Investment adviser to the Oakmark family of mutual funds defending its fee structure as the product of arm\'s-length board negotiation',
        counsel: 'Represented by Seth P. Waxman of Wilmer Cutler Pickering Hale and Dorr LLP',
      },
    ],
  },

  {
    litigationSlug: 'banking-finance',
    name: 'Investment Company Institute v. Camp',
    citation: '401 U.S. 617 (1971)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1971,
    outcome: 'Plaintiff Victory',
    facts:
      'The Investment Company Institute (ICI), a trade association representing the mutual fund industry, challenged a regulation issued by the Comptroller of the Currency (John W. Camp) that authorized national banks to operate "commingled managing agency accounts"—pooled investment accounts that combined the assets of multiple bank trust customers and invested them collectively in securities. The ICI argued that these commingled accounts were functionally identical to mutual funds and that the Glass-Steagall Act of 1933 (specifically §§ 16 and 21) prohibited national banks from issuing, underwriting, selling, or distributing securities, which the banks were effectively doing through these accounts. The regulation would have allowed major banks to compete directly with registered investment companies without the regulatory burdens imposed by the Investment Company Act of 1940. The Comptroller maintained that the accounts were traditional trust activities permissible under the National Bank Act.',
    keyLegalIssues: [
      'Whether national bank commingled managing agency accounts violated the Glass-Steagall Act\'s prohibitions on bank securities activities',
      'Scope of Glass-Steagall §§ 16 and 21 as applied to bank collective investment vehicles',
      'Extent of Comptroller of the Currency\'s authority to authorize trust activities that resemble securities underwriting',
      'Competitive boundary between national banks and registered investment companies under federal law',
    ],
    plaintiffArguments:
      'The ICI argued that by pooling customer funds and continuously offering undivided interests in the pool, national banks were in substance issuing securities—a practice explicitly prohibited to commercial banks by the Glass-Steagall Act, which Congress enacted to separate commercial banking from investment banking following the banking crises of the late 1920s and early 1930s. The ICI contended that the Comptroller could not circumvent Glass-Steagall\'s securities prohibitions by labeling the accounts "trust" activities, and that permitting banks to operate unregistered collective investment vehicles would harm investors who relied on the protections of the Investment Company Act. The ICI also argued that bank entry into the mutual fund business would destabilize financial markets by blurring the separation between deposit-taking and securities underwriting that Glass-Steagall was designed to maintain.',
    defendantArguments:
      'The Comptroller argued that commingled managing agency accounts were a legitimate extension of the fiduciary and investment management functions that banks had performed for individual trust customers for decades, and that pooling trust assets for investment efficiency did not convert traditional trust administration into securities underwriting prohibited by Glass-Steagall. The regulation, the Comptroller contended, was a reasonable exercise of his authority to supervise national bank trust operations and did not require banks to "issue" securities in any sense relevant to Glass-Steagall\'s prohibitions. Participating banks argued that competition from bank-operated collective accounts would benefit consumers through lower investment costs.',
    proceduralHistory:
      'The ICI filed suit in the United States District Court for the District of Columbia, which upheld the Comptroller\'s regulation. The Court of Appeals for the District of Columbia Circuit reversed, finding that the commingled accounts ran afoul of Glass-Steagall. The Comptroller and participating banks sought certiorari, which the Supreme Court granted to resolve the important question of the Glass-Steagall Act\'s scope.',
    finalDecision:
      'The Supreme Court affirmed the D.C. Circuit in a 5-3 decision authored by Justice Stewart, holding that the Comptroller\'s regulation authorizing national bank commingled managing agency accounts was invalid because those accounts constituted a form of securities activity prohibited to commercial banks by the Glass-Steagall Act.',
    judicialReasoning:
      'Justice Stewart\'s majority opinion examined the text, structure, and legislative history of the Glass-Steagall Act in detail, emphasizing that Congress enacted the law in direct response to findings that commercial bank involvement in securities activities had contributed to the bank failures of the Great Depression. The Court found that a commingled managing agency account functioned identically to a mutual fund—pooling funds, issuing participation interests, and investing in a diversified portfolio—and that the Glass-Steagall Act\'s prohibition on bank securities issuance applied regardless of whether the vehicle was labeled a trust account. The majority rejected the Comptroller\'s deference argument, concluding that where an agency regulation conflicts with a clear congressional prohibition, no deference is owed. The opinion reinforced the separation-of-powers principle that an administrative agency cannot expand its own jurisdiction by recharacterizing activities Congress expressly prohibited.',
    legalStandards: [
      'Glass-Steagall Act §§ 16 and 21 — prohibition on commercial bank securities activities',
      'National Bank Act trust-powers authority under 12 U.S.C. § 92a',
      'Scope of Comptroller of the Currency\'s regulatory authority over national bank activities',
      'Judicial review of agency regulations that conflict with congressional prohibitions',
    ],
    keyPrecedents: [
      'Board of Governors of the Federal Reserve System v. Investment Company Institute, 450 U.S. 46 (1981)',
      'Glass-Steagall Act of 1933, §§ 16, 20, 21, and 32',
      'Whitney v. Helvering, 301 U.S. 95 (1937)',
    ],
    evidenceAnalysis:
      'The Court analyzed the structural features of the Comptroller\'s commingled account regulation and compared them point-by-point with the characteristics of registered investment companies. Evidence showed that the commingled accounts issued participation interests to multiple customers, established a continuous offering and redemption mechanism, and were priced based on net asset value—features identical to mutual fund operation. Congressional testimony from the Glass-Steagall debates demonstrated that Congress was specifically concerned about bank intermediation of public investment in securities through pooled vehicles, directly implicating the commingled accounts. The dissent by Justice Blackmun argued that the majority\'s analysis overstated the functional identity between the accounts and registered mutual funds.',
    alternativeOutcomes:
      'Had the Court upheld the Comptroller\'s regulation, national banks would have been able to operate collective investment vehicles in competition with registered mutual funds without complying with the Investment Company Act\'s disclosure and governance requirements, potentially attracting investment capital away from regulated mutual funds. A narrower ruling—permitting commingled accounts only for existing, individually established trust customers rather than as a general public offering—was available but the Court declined to draw that line, relying instead on the structural features the regulation permitted.',
    lessonsLearned: [
      'The Glass-Steagall Act\'s prohibition on commercial bank securities activities was interpreted broadly to cover functionally equivalent activities even when labeled as traditional banking services',
      'Regulatory agencies cannot use their interpretive authority to circumvent explicit congressional prohibitions on regulated entities\' activities',
      'The separation between commercial banking and securities activities enshrined in Glass-Steagall was a fundamental structural constraint that courts enforced rigorously prior to its partial repeal by Gramm-Leach-Bliley in 1999',
      'Industry trade associations have standing to challenge agency regulations that authorize competitors\' entry into their market sector',
    ],
    bestPractices: [
      'Banks seeking to offer new collective or pooled investment products should conduct a thorough Glass-Steagall and Investment Company Act analysis before launch, even in the post-Gramm-Leach-Bliley environment where residual restrictions remain',
      'Regulatory counsel should assess whether new financial products are functionally equivalent to prohibited activities regardless of the label used',
      'Trade associations representing fund managers should monitor bank regulatory filings and OCC guidance for proposed activities that could authorize unlevel competition with registered investment companies',
      'Compliance teams at financial holding companies should maintain clear functional distinctions between permissible bank trust activities and securities activities subject to the remaining Glass-Steagall prohibitions',
    ],
    significance:
      'Investment Company Institute v. Camp was the Supreme Court\'s most significant pre-Gramm-Leach-Bliley ruling on the scope of the Glass-Steagall Act\'s prohibition on commercial bank securities activities, reinforcing the wall between commercial banking and the mutual fund industry for nearly three decades. The decision validated the mutual fund industry\'s competitive concerns about bank entry into collective investment vehicles and confirmed that the Glass-Steagall separation was a genuine structural constraint, not merely a soft guideline subject to regulatory reinterpretation. ICI v. Camp became a foundational precedent for subsequent Glass-Steagall litigation and was extensively discussed in the academic and legislative debates that ultimately led to the Act\'s partial repeal through the Gramm-Leach-Bliley Act of 1999, which allowed financial holding companies to engage in banking, securities, and insurance under a unified regulatory framework.',
    parties: [
      {
        name: 'Investment Company Institute',
        role: 'PLAINTIFF',
        description: 'Trade association representing the registered investment company and mutual fund industry challenging the OCC regulation as violating Glass-Steagall',
      },
      {
        name: 'John W. Camp, Comptroller of the Currency',
        role: 'DEFENDANT',
        description: 'Comptroller of the Currency defending the validity of the regulation authorizing national bank commingled managing agency accounts',
      },
    ],
  },
];

export default cases;
