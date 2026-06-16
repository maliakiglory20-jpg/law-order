import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'bankruptcy',
    name: 'Local Loan Co. v. Hunt',
    citation: '292 U.S. 234 (1934)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1934,
    facts: 'William Hunt filed for bankruptcy and received a discharge of his debts, including a debt owed to Local Loan Co. After the discharge, Local Loan Co. attempted to garnish wages that Hunt had already assigned to the company before his bankruptcy filing. Hunt argued that the discharge freed him from any continuing obligation, including the wage assignment. Local Loan Co. contended that the pre-bankruptcy wage assignment was a valid contractual transfer of property that survived discharge. The case raised the foundational question of whether the bankruptcy discharge genuinely gave the debtor a "fresh start" free from pre-petition obligations.',
    keyLegalIssues: [
      'Whether a bankruptcy discharge extinguishes pre-petition wage assignments',
      'Scope of the "fresh start" policy underlying federal bankruptcy law',
      'Whether creditors may enforce pre-petition contractual rights against discharged debtors',
      'Conflict between state contract law and federal bankruptcy discharge policy'
    ],
    plaintiffArguments: 'Local Loan Co. argued that the wage assignment was a valid property transfer executed before bankruptcy, and the Bankruptcy Act did not explicitly void such assignments. The company contended that the discharge only released the debtor from personal liability on the underlying debt but could not undo a completed conveyance of property rights. Local Loan Co. further argued that allowing debtors to escape wage assignments would undermine settled commercial expectations and interfere with legitimate credit arrangements.',
    defendantArguments: 'Hunt argued that permitting enforcement of the wage assignment after discharge would render the discharge meaningless, since his future wages would continue to be consumed by the very creditor from whom he sought relief. He contended that the "fresh start" purpose of the Bankruptcy Act demanded that he be able to keep future earnings free from pre-petition encumbrances. Hunt also argued that allowing post-discharge wage garnishment would perpetuate involuntary servitude to his pre-bankruptcy creditors.',
    proceduralHistory: 'The case arose in Illinois courts, where Local Loan Co. sought to enforce the wage assignment against Hunt following his discharge. The Illinois courts ruled in favor of Hunt, finding the wage assignment unenforceable post-discharge. Local Loan Co. appealed, and the Supreme Court granted certiorari to resolve the question of whether a bankruptcy discharge bars enforcement of pre-petition wage assignments.',
    finalDecision: 'The Supreme Court affirmed the judgment for Hunt, holding that enforcement of the pre-petition wage assignment after discharge was barred by the bankruptcy discharge.',
    judicialReasoning: 'Justice Stone, writing for a unanimous Court, articulated the foundational principle that one of the primary purposes of the Bankruptcy Act is to relieve the honest debtor from the weight of oppressive indebtedness and permit him to start afresh. The Court reasoned that this "fresh start" purpose would be entirely frustrated if creditors could attach future wages through pre-petition assignments, since the debtor would emerge from bankruptcy with future earnings already committed to old creditors. The Court held that the discharge operates not merely as a defense to personal liability but as an affirmative grant of relief that protects the debtor\'s future earning capacity. Allowing the wage assignment to survive would allow creditors to circumvent the very relief that Congress intended the discharge to provide.',
    legalStandards: [
      'Fresh start doctrine as the central policy of bankruptcy discharge',
      'Bankruptcy discharge as extinguishing pre-petition claims and assignments against future earnings',
      'Supremacy of federal bankruptcy law over conflicting state contract law',
      'Liberal construction of bankruptcy statutes to effectuate debtor relief'
    ],
    keyPrecedents: [
      'Stellwagen v. Clum, 245 U.S. 605 (1918)',
      'Hanover National Bank v. Moyses, 186 U.S. 181 (1902)',
      'Williams v. United States Fidelity & Guaranty Co., 236 U.S. 549 (1915)'
    ],
    evidenceAnalysis: 'The Court focused on the structure and purpose of the Bankruptcy Act rather than disputed factual evidence, treating the case as principally a question of statutory interpretation. The wage assignment contract itself was undisputed; the sole legal question was whether the discharge operated to bar its post-bankruptcy enforcement. The legislative history of the Act supported the fresh-start interpretation.',
    alternativeOutcomes: 'Had the Court ruled for Local Loan Co., debtors could have been compelled through pre-petition wage assignments to continue servicing discharged debts indefinitely, undermining the core relief Congress provided. Such a ruling would likely have spurred legislative responses but would have sharply curtailed the practical value of a bankruptcy discharge for wage-earning debtors.',
    lessonsLearned: [
      'The bankruptcy discharge protects future earnings, not merely past assets, from pre-petition creditor claims',
      'Courts will interpret the Bankruptcy Act broadly to effectuate the "fresh start" purpose',
      'Pre-petition wage assignments do not survive a bankruptcy discharge',
      'Federal bankruptcy policy can override state-law contractual arrangements that conflict with discharge policy'
    ],
    bestPractices: [
      'Debtors should list all pre-petition wage assignments and contractual obligations in their bankruptcy schedules',
      'Creditors must rely on the bankruptcy claims process rather than pre-petition security arrangements that attach to future earnings',
      'Practitioners should advise clients that future wages are protected post-discharge from pre-petition creditors',
      'Counsel should review any pre-petition assignments of future income when advising debtors on the benefits of filing'
    ],
    significance: 'Local Loan Co. v. Hunt is the seminal Supreme Court decision establishing the "fresh start" doctrine as the animating principle of American bankruptcy discharge law. The case has been cited for nearly a century in virtually every major bankruptcy opinion addressing the scope and purpose of discharge. It established that the discharge is not a technical procedural device but a substantive grant of relief designed to allow honest but unfortunate debtors to begin their financial lives anew. The decision shapes modern bankruptcy practice by protecting discharged debtors\' future earnings from pre-petition creditors, and it remains the foundational precedent for arguments about the scope and policy of the discharge under the Bankruptcy Code.',
    outcome: 'Defendant Victory',
    isFeatured: true,
    parties: [
      {
        name: 'Local Loan Co.',
        role: 'PLAINTIFF',
        description: 'Consumer finance company seeking to enforce a pre-petition wage assignment against a discharged debtor'
      },
      {
        name: 'William Hunt',
        role: 'DEFENDANT',
        description: 'Individual debtor who received a bankruptcy discharge and resisted post-discharge enforcement of a wage assignment'
      }
    ]
  },
  {
    litigationSlug: 'bankruptcy',
    name: 'Stern v. Marshall',
    citation: '564 U.S. 462 (2011)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2011,
    facts: 'Vickie Lynn Marshall, known publicly as Anna Nicole Smith, married J. Howard Marshall II, a wealthy Texas oil magnate, shortly before his death. After J. Howard died, his son E. Pierce Marshall was the primary beneficiary of his estate. Vickie filed for bankruptcy in California, and in those proceedings she filed a counterclaim against Pierce for tortious interference with an inter vivos gift she claimed J. Howard had intended to give her. Pierce filed a proof of claim in the bankruptcy for defamation. The bankruptcy court entered judgment for Vickie on her counterclaim, awarding her hundreds of millions of dollars. Pierce argued that the bankruptcy court lacked constitutional authority to enter final judgment on Vickie\'s state-law counterclaim.',
    keyLegalIssues: [
      'Whether Article III of the Constitution permits Congress to assign final adjudication of state-law counterclaims to non-Article III bankruptcy courts',
      'Scope of the "public rights" exception that allows adjudication outside Article III courts',
      'Validity of 28 U.S.C. section 157(b)(2)(C) granting bankruptcy courts authority over counterclaims by the estate against creditors',
      'Separation of powers and judicial independence concerns raised by broad bankruptcy court jurisdiction'
    ],
    plaintiffArguments: 'Vickie Marshall argued that the bankruptcy court had statutory authority under 28 U.S.C. section 157(b)(2)(C) to enter final judgment on her counterclaim because it was a "core" proceeding. She contended that Congress\'s broad grant of jurisdiction to bankruptcy courts was a valid exercise of its constitutional power to establish uniform bankruptcy laws under Article I. Vickie further argued that practical considerations and the efficient resolution of related claims justified consolidated adjudication in the bankruptcy forum.',
    defendantArguments: 'Pierce Marshall argued that the Constitution\'s Article III vests the judicial power of the United States exclusively in courts whose judges enjoy life tenure and salary protections, and that a state-law counterclaim for tortious interference is a quintessential private right requiring adjudication by an Article III court. He contended that the "public rights" exception to Article III adjudication did not extend to common-law state tort claims. Pierce also argued that no consent or waiver by filing a proof of claim could constitutionally vest a non-Article III court with final adjudicatory power over an unrelated state-law claim.',
    proceduralHistory: 'The bankruptcy court entered a multi-hundred-million-dollar judgment for Vickie. The district court conducted a de novo review and also awarded Vickie a substantial sum. A lengthy parallel probate proceeding occurred in Texas state court, which ruled in favor of Pierce. The Ninth Circuit Court of Appeals reversed the district court, finding the bankruptcy court lacked jurisdiction. The Supreme Court granted certiorari and ultimately affirmed the Ninth Circuit on the constitutional question, though the case had additional procedural complexity regarding the Rooker-Feldman doctrine.',
    finalDecision: 'The Supreme Court held 5-4 that the bankruptcy court lacked constitutional authority under Article III to enter final judgment on Vickie\'s state-law counterclaim for tortious interference, even though the counterclaim was designated "core" by statute.',
    judicialReasoning: 'Chief Justice Roberts, writing for the majority, held that Article III\'s grant of judicial power to courts with life-tenured judges is not merely a personal privilege of the judges but a structural safeguard of individual liberty that Congress cannot override by labeling a proceeding "core." The Court drew on the distinction between public rights (disputes arising from federal regulatory schemes that Congress may assign to non-Article III tribunals) and private rights (disputes governed by common law or state law between private parties). Vickie\'s state-law tortious interference counterclaim was a private right claim that the Framers would have expected to be decided by an Article III court. The fact that Pierce had filed a proof of claim did not transform the nature of her independent counterclaim. The Court declined to allow Congress to expand the "public rights" exception beyond its historical scope simply for administrative convenience.',
    legalStandards: [
      'Article III vesting clause requires final adjudication of private rights by courts with life tenure and salary protections',
      'Public rights exception limited to disputes arising from federal regulatory or statutory schemes',
      'Filing a proof of claim does not consent to Article I adjudication of independent state-law counterclaims',
      'Statutory designation of a claim as "core" cannot cure an Article III constitutional deficiency'
    ],
    keyPrecedents: [
      'Northern Pipeline Construction Co. v. Marathon Pipe Line Co., 458 U.S. 50 (1982)',
      'Commodity Futures Trading Commission v. Schor, 478 U.S. 833 (1986)',
      'Granfinanciera, S.A. v. Nordberg, 492 U.S. 33 (1989)',
      'Murray\'s Lessee v. Hoboken Land & Improvement Co., 59 U.S. 272 (1856)'
    ],
    evidenceAnalysis: 'The evidentiary record regarding J. Howard Marshall\'s alleged gift was extensively litigated in both the bankruptcy proceedings and the Texas probate courts, with conflicting testimony about his testamentary intent. However, the Supreme Court\'s decision turned entirely on the structural constitutional question rather than the merits of Vickie\'s underlying claim, making the factual record secondary to the jurisdictional analysis.',
    alternativeOutcomes: 'Had the Court ruled that bankruptcy courts could enter final judgment on all "core" proceedings as labeled by Congress, the bankruptcy system would have operated as a wide-ranging federal adjudicatory body capable of displacing Article III courts across a broad swath of state-law claims. This would have raised profound structural concerns about judicial independence. Conversely, a narrower holding might have preserved bankruptcy court jurisdiction over counterclaims that arose from the same transaction as the proof of claim.',
    lessonsLearned: [
      'Bankruptcy courts lack constitutional authority to issue final judgments on state-law counterclaims even when labeled "core" by statute',
      'The structural protections of Article III cannot be waived by Congress for administrative convenience',
      'Practitioners must be alert to Article III limitations when asserting or defending against counterclaims in bankruptcy proceedings',
      'Consent cannot cure an Article III deficiency in the absence of a valid public rights exception'
    ],
    bestPractices: [
      'Analyze whether a bankruptcy court claim involves a public right or private right before proceeding to final adjudication in that forum',
      'File timely objections to the bankruptcy court\'s authority to enter final judgment on state-law counterclaims',
      'Consider whether a district court reference withdrawal motion is appropriate for claims implicating Article III concerns',
      'Advise clients that bankruptcy court judgments on private rights claims may be subject to de novo district court review'
    ],
    significance: 'Stern v. Marshall is the most important structural constitutional decision in bankruptcy law since Northern Pipeline, and it fundamentally altered the jurisdictional landscape of the federal bankruptcy courts. The decision created the category of so-called "Stern claims" — claims that are statutorily "core" but constitutionally require Article III adjudication — which has generated an enormous body of litigation over what bankruptcy courts may and may not finally decide. The ruling reinforced the separation of powers by protecting Article III\'s structural guarantees against legislative erosion for reasons of convenience. Stern also highlighted the dangers of satellite litigation when high-value estates intersect with both bankruptcy and state probate proceedings.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Howard K. Stern (as executor of the estate of Vickie Lynn Marshall)',
        role: 'PLAINTIFF',
        counsel: 'G. Eric Brunstad Jr. (argued before the Supreme Court)',
        description: 'Representative of the estate of Anna Nicole Smith, asserting a state-law tortious interference counterclaim in the bankruptcy proceedings'
      },
      {
        name: 'E. Pierce Marshall',
        role: 'DEFENDANT',
        counsel: 'Kent L. Richland (argued before the Supreme Court)',
        description: 'Son and primary heir of J. Howard Marshall II, challenging the bankruptcy court\'s constitutional authority to enter final judgment on the state-law counterclaim'
      }
    ]
  },
  {
    litigationSlug: 'bankruptcy',
    name: 'Czyzewski v. Jevic Holding Corp.',
    citation: '580 U.S. 451 (2017)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2017,
    facts: 'Jevic Holding Corp., a trucking company, filed for Chapter 11 bankruptcy in 2008 after its private equity owner CIT Group and Sun Capital Partners orchestrated a leveraged buyout that left the company deeply indebted. Shortly before the bankruptcy filing, Jevic terminated approximately 1,800 truck drivers without the 60-day advance notice required by the WARN Act, giving rise to employee claims totaling around $12.4 million with priority status under the Bankruptcy Code. When the bankruptcy estate was nearly exhausted, the debtor, secured creditors, and the official unsecured creditors committee agreed to a structured dismissal that distributed estate funds to general unsecured creditors while skipping over the WARN Act claimants, even though the WARN Act employees held higher-priority claims under the Code\'s distribution hierarchy.',
    keyLegalIssues: [
      'Whether a bankruptcy court may approve a structured dismissal that distributes assets in violation of the Bankruptcy Code\'s absolute priority rule',
      'Whether courts may deviate from the statutory priority scheme outside a plan of reorganization or liquidation',
      'Whether consent of the official creditors committee can authorize a priority-skipping settlement',
      'Scope of bankruptcy court equitable authority under 11 U.S.C. section 105'
    ],
    plaintiffArguments: 'The terminated employees (the Czyzewski petitioners) argued that the Bankruptcy Code\'s priority scheme is mandatory and may not be circumvented through a structured dismissal settlement, even with the agreement of the parties. They contended that allowing courts to approve priority-skipping distributions outside a confirmed plan would render the statutory protections for priority creditors meaningless and incentivize manipulation of the bankruptcy process. The employees also argued that the official creditors committee did not adequately represent their interests and had a conflict in agreeing to a distribution that benefited other unsecured creditors at the employees\' expense.',
    defendantArguments: 'Jevic, the secured creditors, and the creditors committee argued that the bankruptcy court had broad equitable authority under section 105 to approve a structured dismissal on terms the parties agreed to, especially when the only realistic alternative was a straight dismissal in which the WARN Act employees would receive nothing at all. They contended that the structured dismissal did not technically constitute a plan distribution subject to the absolute priority rule, and that the court\'s approval of a settlement should receive deferential review. Respondents also argued that rigid adherence to priority in a hopeless estate could harm all creditors.',
    proceduralHistory: 'The bankruptcy court approved the structured dismissal over the WARN Act employees\' objection, finding that the settlement was the best outcome available given the estate\'s depletion. The district court affirmed. The Third Circuit Court of Appeals also affirmed, reasoning that the extraordinary circumstances of a hopeless estate justified the departure from ordinary priority rules. The Supreme Court granted certiorari to resolve a circuit conflict on whether structured dismissals may deviate from the Bankruptcy Code\'s priority scheme.',
    finalDecision: 'The Supreme Court reversed 6-2, holding that bankruptcy courts may not approve structured dismissals that distribute estate assets in violation of the Bankruptcy Code\'s priority rules without the consent of affected creditors.',
    judicialReasoning: 'Justice Breyer, writing for the majority, acknowledged that bankruptcy courts possess broad equitable powers but held that those powers cannot be used to circumvent the specific priority distribution rules that Congress enacted in the Bankruptcy Code. The Court reasoned that the absolute priority rule and the statutory distribution hierarchy reflect deliberate legislative choices about who gets paid first from a bankruptcy estate, and courts may not override those choices through the mechanism of a structured dismissal simply because the parties find it convenient. The majority distinguished the case from a full settlement because the structured dismissal here served as a final distribution of assets without a plan, effectively accomplishing what a plan must accomplish but without the Code\'s procedural and priority protections. The Court also rejected the "no harm, no foul" argument that the WARN Act employees would have received nothing in a straight dismissal, finding that this logic would allow courts to systematically violate priority in any hopeless estate.',
    legalStandards: [
      'Absolute priority rule requires senior creditors to be paid before junior creditors in bankruptcy distributions',
      'Bankruptcy courts\' section 105 equitable authority cannot be used to override specific statutory provisions',
      'Structured dismissals that distribute assets must comply with the Bankruptcy Code\'s priority scheme',
      'Creditor consent to priority deviation must come from the affected priority creditors, not other constituencies'
    ],
    keyPrecedents: [
      'Norwest Bank Worthington v. Ahlers, 485 U.S. 197 (1988)',
      'In re Jevic Transportation, Inc., 787 F.3d 173 (3d Cir. 2015) (reversed)',
      'Law v. Siegel, 571 U.S. 415 (2014)',
      'Marrama v. Citizens Bank of Massachusetts, 549 U.S. 365 (2007)'
    ],
    evidenceAnalysis: 'The record demonstrated that the WARN Act employees held valid priority claims and that the structured dismissal settlement was negotiated by parties who did not represent the employees\' interests. The Court treated the factual record regarding the estate\'s depletion as undisputed but found it legally irrelevant to whether the priority rules could be set aside. The employees\' standing to object and the nature of their priority claims were central to the Court\'s analysis.',
    alternativeOutcomes: 'Had the Court upheld the structured dismissal, bankruptcy practitioners would have had a powerful tool to engineer priority-skipping distributions in Chapter 11 cases headed toward dismissal rather than confirmation, potentially undermining creditor protections across a wide range of cases. The ruling preserves the integrity of the Code\'s priority system but may reduce the ability of courts and parties to craft creative solutions for hopeless estates, occasionally resulting in straight dismissals where nothing is distributed.',
    lessonsLearned: [
      'Structured dismissals cannot be used as a vehicle to circumvent the Bankruptcy Code\'s mandatory priority rules',
      'Section 105 equitable authority does not authorize courts to override specific statutory provisions',
      'Consent to priority deviation must come from the creditors whose priority rights are being bypassed',
      'The "no harm" argument does not justify distributing assets outside the statutory priority scheme'
    ],
    bestPractices: [
      'When negotiating a structured dismissal, ensure all affected priority creditors consent to any deviation from the Code\'s distribution hierarchy',
      'Consider whether a structured dismissal or a liquidating plan better serves all creditor constituencies',
      'Counsel representing priority creditors should carefully review proposed structured dismissal terms for hidden priority violations',
      'Advise clients that creative distribution structures outside a confirmed plan will face heightened scrutiny after Jevic'
    ],
    significance: 'Czyzewski v. Jevic is a landmark ruling that preserved the integrity of the Bankruptcy Code\'s priority distribution system against judicial and party efforts to engineer around it through structured dismissals. The decision has significant practical importance because structured dismissals had become increasingly common in large Chapter 11 cases as a way to resolve estates without the cost of a full plan confirmation. After Jevic, courts must ensure that any distribution of assets in a structured dismissal respects the Code\'s priority hierarchy or has the consent of affected creditors. The case also reflects the Court\'s skepticism of using the bankruptcy process to disadvantage workers and other priority claimants in favor of financial creditors and equity holders.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'Casimir Czyzewski (and other terminated Jevic employees)',
        role: 'PLAINTIFF',
        counsel: 'Carolyn Shapiro (argued before the Supreme Court)',
        description: 'Former Jevic truck drivers holding priority WARN Act claims who objected to a structured dismissal that skipped their priority class'
      },
      {
        name: 'Jevic Holding Corp.',
        role: 'DEFENDANT',
        description: 'Chapter 11 debtor trucking company whose leveraged buyout left it unable to pay WARN Act obligations upon filing'
      },
      {
        name: 'CIT Group / Sun Capital Partners',
        role: 'THIRD_PARTY',
        description: 'Secured creditors and former owners who negotiated the structured dismissal settlement benefiting general unsecured creditors while bypassing priority employee claims'
      }
    ]
  },
  {
    litigationSlug: 'bankruptcy',
    name: 'Marrama v. Citizens Bank of Massachusetts',
    citation: '549 U.S. 365 (2007)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2007,
    facts: 'Robert Marrama filed a Chapter 7 bankruptcy petition and listed his Maine real estate on his schedules at "zero" value while simultaneously taking steps to transfer the property to a trust he controlled in an apparent attempt to shield it from creditors. When the Chapter 7 trustee moved to recover the property as a fraudulent transfer, Marrama sought to convert his case from Chapter 7 to Chapter 13, which would have allowed him to retain assets by proposing a repayment plan. The bankruptcy court denied the conversion, finding that Marrama had acted in bad faith and that conversion was an abuse of the bankruptcy process. The case raised the question of whether the Bankruptcy Code\'s right to convert a Chapter 7 case to Chapter 13 is absolute or may be denied on grounds of bad faith.',
    keyLegalIssues: [
      'Whether a debtor has an absolute right to convert a Chapter 7 case to Chapter 13 under 11 U.S.C. section 706(a)',
      'Whether bankruptcy courts have inherent or statutory authority to deny conversion sought in bad faith',
      'Scope of bankruptcy court authority to prevent abuse of the conversion mechanism',
      'Whether bad faith in the underlying Chapter 7 filing can support denial of conversion to Chapter 13'
    ],
    plaintiffArguments: 'Marrama argued that section 706(a) of the Bankruptcy Code uses the word "may" in stating that a debtor may convert a Chapter 7 case to Chapter 13, and that this language together with the statute\'s structure created an absolute right of conversion that the bankruptcy court could not deny. He contended that Congress intended to give debtors flexibility to choose their bankruptcy chapter and that any misconduct should be addressed through other mechanisms within Chapter 13, such as plan confirmation denial or dismissal, rather than by barring conversion entirely. Marrama also argued that the legislative history of section 706 supported an unrestricted right of conversion.',
    defendantArguments: 'Citizens Bank and the trustee argued that an absolute right of conversion would allow debtors to use Chapter 7 as a staging ground to hide assets and then convert to Chapter 13 when caught, effectively immunizing fraudulent prepetition transfers from Chapter 7 trustee avoidance. They contended that bankruptcy courts retain inherent equitable authority to prevent abuse of the bankruptcy process and that section 105 expressly empowers courts to act as necessary to prevent abuse. The bank argued that a debtor who acts in bad faith forfeits the protections afforded by the Bankruptcy Code.',
    proceduralHistory: 'The bankruptcy court denied Marrama\'s motion to convert, citing bad faith. The district court affirmed. The First Circuit Court of Appeals also affirmed, holding that the bankruptcy court had authority to deny conversion where the debtor had acted in bad faith. The Supreme Court granted certiorari to resolve whether section 706(a) creates an absolute right of conversion to Chapter 13.',
    finalDecision: 'The Supreme Court affirmed 5-4, holding that bankruptcy courts may deny a debtor\'s request to convert from Chapter 7 to Chapter 13 when the debtor has acted in bad faith that would require immediate reconversion or dismissal under Chapter 13.',
    judicialReasoning: 'Justice Stevens, writing for the majority, acknowledged that the language of section 706(a) is facially permissive but reasoned that a bankruptcy court\'s authority to deny conversion is grounded in section 1307(c), which permits dismissal or reconversion of a Chapter 13 case for cause, including bad faith. Because a Chapter 13 court would be required to dismiss or reconvert the case upon conversion given Marrama\'s evident bad faith, allowing conversion would be a futile gesture that the court could properly decline to make. The majority also relied on section 105(a) and the courts\' inherent authority to prevent abuse of the bankruptcy process. The majority declined to read section 706(a) as creating an absolute right that would allow debtors to manipulate the bankruptcy system by committing fraud in Chapter 7 and then escaping to Chapter 13 when the fraud was discovered.',
    legalStandards: [
      'Bankruptcy courts may deny conversion to Chapter 13 where immediate reconversion or dismissal would be required due to bad faith',
      'Section 105(a) empowers bankruptcy courts to prevent abuse of the bankruptcy process',
      'Bad faith conduct in a Chapter 7 case is relevant to whether conversion to Chapter 13 should be permitted',
      'The right of conversion under section 706(a) is not absolute and is subject to equitable limitation'
    ],
    keyPrecedents: [
      '11 U.S.C. section 706(a) (Chapter 7 to Chapter 13 conversion)',
      '11 U.S.C. section 1307(c) (Chapter 13 dismissal or conversion for cause)',
      'Local Loan Co. v. Hunt, 292 U.S. 234 (1934)',
      'In re Marrama, 430 F.3d 474 (1st Cir. 2005) (affirmed)'
    ],
    evidenceAnalysis: 'The bankruptcy court found clear evidence of Marrama\'s bad faith, including the undervaluation of the Maine property on his schedules and the pre-petition transfer to a self-settled trust. These factual findings were undisputed on appeal and formed the evidentiary basis for the Supreme Court\'s holding. The Court treated the bad faith finding as established and focused on its legal consequences for the conversion right.',
    alternativeOutcomes: 'Had the Court recognized an absolute right of conversion, debtors could have systematically used the Chapter 7 process to conceal assets, and upon discovery convert to Chapter 13 to propose a nominal repayment plan that protects the concealed property. This would have created a serious moral hazard and undermined the integrity of the asset disclosure requirements in bankruptcy. The dissent, written by Justice Alito, argued that the majority\'s reading was inconsistent with the statutory text and that Congress had provided adequate tools within Chapter 13 to address bad faith.',
    lessonsLearned: [
      'Debtors do not have an absolute right to convert from Chapter 7 to Chapter 13 if bad faith is established',
      'Fraudulent asset concealment in a Chapter 7 filing can result in denial of the right to convert chapters',
      'Bankruptcy courts have broad authority to prevent manipulation of the multi-chapter bankruptcy system',
      'Full and accurate asset disclosure in initial schedules is essential to preserving all bankruptcy rights'
    ],
    bestPractices: [
      'Counsel must ensure clients complete and accurate asset schedules before any bankruptcy filing to avoid bad faith findings',
      'Debtors considering pre-petition asset transfers should obtain advice on fraudulent transfer implications well before filing',
      'Trustees and creditors should promptly investigate suspicious asset transfers and move to avoid them before any conversion motion is filed',
      'Practitioners should advise clients that bad faith in Chapter 7 can foreclose the option to convert to Chapter 13'
    ],
    significance: 'Marrama v. Citizens Bank is a significant ruling on the intersection of debtor rights and the integrity of the bankruptcy system. By holding that bad faith can justify denial of conversion, the Court reinforced that the Bankruptcy Code\'s protections are available only to honest debtors who comply with disclosure requirements. The decision has practical importance in asset-concealment cases where trustees seek to prevent debtors from escaping Chapter 7 avoidance actions by converting to Chapter 13. The ruling also demonstrates the Supreme Court\'s willingness to read equitable limitations into facially permissive statutory language when necessary to prevent abuse.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Robert Marrama',
        role: 'PLAINTIFF',
        description: 'Chapter 7 debtor who sought to convert to Chapter 13 after the trustee moved to recover a Maine property Marrama had undervalued and transferred pre-petition'
      },
      {
        name: 'Citizens Bank of Massachusetts',
        role: 'DEFENDANT',
        description: 'Creditor opposing conversion and supporting the bankruptcy court\'s denial of Marrama\'s conversion motion on bad faith grounds'
      }
    ]
  },
  {
    litigationSlug: 'bankruptcy',
    name: 'Bank of America, N.A. v. Caulkett',
    citation: '575 U.S. 790 (2015)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2015,
    facts: 'David Caulkett and a companion debtor each filed Chapter 7 bankruptcy petitions on homes encumbered by two mortgages. In both cases, the value of the homes had fallen to the point where the homes were worth less than the balance owed on the first mortgage alone, meaning the second mortgage held by Bank of America was entirely "underwater" — it was secured by no equity whatsoever. The debtors moved to "strip off" (void) the second liens under 11 U.S.C. section 506(d), which provides that a lien is void to the extent the underlying claim is not an allowed secured claim. The debtors argued that because the second mortgages were wholly unsecured (given the home\'s value), they should be stripped off entirely in the Chapter 7 case.',
    keyLegalIssues: [
      'Whether 11 U.S.C. section 506(d) allows a Chapter 7 debtor to void a wholly underwater junior mortgage lien',
      'Whether the Supreme Court\'s decision in Dewsnup v. Timm bars lien stripping of wholly underwater junior mortgages in Chapter 7',
      'Meaning of "allowed secured claim" in section 506(d) when a lien is entirely unsupported by collateral value',
      'Distinction between partially and wholly underwater liens under the Bankruptcy Code'
    ],
    plaintiffArguments: 'The debtors argued that a lien supported by no equity is not an "allowed secured claim" under section 506(a) because the creditor holds no secured claim — only an unsecured claim — when the collateral is worth less than a senior lien. They contended that section 506(d) therefore permits voiding the wholly underwater junior lien, and that this reading was compelled by the plain statutory text. The debtors further argued that the Supreme Court\'s prior decision in Dewsnup v. Timm should be limited to its facts involving a partially secured lien and should not be extended to the wholly underwater context where the junior lienor has no secured claim at all.',
    defendantArguments: 'Bank of America argued that Dewsnup v. Timm definitively interpreted section 506(d) to prohibit lien stripping in Chapter 7 proceedings and that this holding applies equally to wholly underwater junior liens. The bank contended that the word "secured" in "allowed secured claim" retains its state-law meaning of being secured by a mortgage on real property, regardless of whether the lien is supported by any equity. The bank also argued that expanding lien stripping in Chapter 7 would disrupt settled expectations of mortgage lenders and create a significant windfall for debtors who chose Chapter 7 rather than Chapter 13.',
    proceduralHistory: 'The bankruptcy courts in both cases granted the debtors\' motions to strip the junior liens. The district courts affirmed. The Eleventh Circuit Court of Appeals affirmed, holding that Dewsnup did not apply to wholly underwater junior liens because the creditor held no "allowed secured claim" for section 506(d) purposes. The Supreme Court granted certiorari to resolve a circuit conflict on the application of Dewsnup to wholly underwater liens.',
    finalDecision: 'The Supreme Court reversed unanimously, holding that Dewsnup\'s interpretation of section 506(d) forecloses lien stripping of wholly underwater junior mortgages in Chapter 7, just as it forecloses stripping of partially underwater liens.',
    judicialReasoning: 'Justice Thomas, writing for a unanimous Court, acknowledged that the debtors\' reading of section 506(d) was "quite plausible" as a matter of statutory text but held that the Court was bound by its prior interpretation in Dewsnup, which had defined "allowed secured claim" in section 506(d) as any claim that is both allowed and secured by a lien. Under that definition, Bank of America\'s claim was an "allowed secured claim" because it was allowed (not disallowed) and secured by a mortgage, even if the collateral was worth nothing above the first lien. The Court declined to overrule Dewsnup, finding that the debtors had not demonstrated that Dewsnup was egregiously wrong or that sufficient changes in circumstances justified overruling it. The unanimous Court expressed significant reservations about the Dewsnup holding but concluded that stare decisis required adhering to it absent strong justification for departure.',
    legalStandards: [
      'Dewsnup v. Timm definition of "allowed secured claim" in section 506(d) encompasses any allowed claim secured by a lien regardless of collateral value',
      'Chapter 7 debtors may not strip off wholly underwater junior mortgage liens under section 506(d)',
      'Stare decisis requires adherence to prior statutory interpretations absent compelling justification for overruling',
      'Lien stripping of residential mortgages is available in Chapter 13 but not Chapter 7 under current doctrine'
    ],
    keyPrecedents: [
      'Dewsnup v. Timm, 502 U.S. 410 (1992)',
      '11 U.S.C. section 506(a) and 506(d) (secured claim valuation and lien voiding)',
      'Nobelman v. American Savings Bank, 508 U.S. 324 (1993)',
      'Associates Commercial Corp. v. Rash, 520 U.S. 953 (1997)'
    ],
    evidenceAnalysis: 'The factual record established that both properties were worth less than the balance on the first mortgage, leaving the Bank of America second mortgages entirely unsupported by collateral equity. The parties did not dispute the valuation facts; the case turned entirely on the legal interpretation of section 506(d) as applied to wholly underwater liens, with the Court ultimately treating the Dewsnup precedent as controlling regardless of the factual configuration.',
    alternativeOutcomes: 'Had the Court adopted the debtors\' reading and permitted lien stripping of wholly underwater junior mortgages in Chapter 7, it would have created a powerful incentive for underwater homeowners to choose Chapter 7 over Chapter 13 specifically to eliminate junior liens, potentially destabilizing the junior mortgage market and adversely affecting mortgage credit availability. At the same time, such a ruling would have provided significant relief to homeowners trapped in negative equity situations. The Court\'s ruling preserves the Chapter 13 lien-stripping option but eliminates a potential Chapter 7 strategy.',
    lessonsLearned: [
      'Chapter 7 debtors cannot strip off wholly underwater junior mortgage liens despite the absence of any equity supporting those liens',
      'Dewsnup\'s interpretation of section 506(d) applies broadly and is not limited to partially secured liens',
      'Underwater homeowners seeking lien relief must consider Chapter 13, which permits modification of certain mortgage claims',
      'Stare decisis can bind the Court to a precedent even when the Court acknowledges its interpretation may be questionable'
    ],
    bestPractices: [
      'Counsel advising underwater homeowners on bankruptcy options must explain the unavailability of lien stripping in Chapter 7 after Caulkett',
      'Chapter 13 should be considered as the appropriate vehicle for debtors seeking to address wholly unsecured junior mortgage liens',
      'Mortgage lenders with junior liens should monitor bankruptcy filings by borrowers with negative equity and verify chapter choice',
      'Practitioners should advise clients about the continued circuit-level uncertainty regarding other forms of lien avoidance in Chapter 7'
    ],
    significance: 'Bank of America, N.A. v. Caulkett is a significant ruling that extended the controversial Dewsnup decision to foreclose lien stripping of wholly underwater junior mortgages in Chapter 7, a practice that had become increasingly common in the wake of the 2008 housing crisis when millions of homes fell into negative equity. The decision effectively channels underwater homeowners into Chapter 13 if they seek mortgage lien relief, with important implications for chapter selection strategy. The unanimous opinion\'s candid acknowledgment that Dewsnup\'s interpretation was questionable but nonetheless binding illustrates the power and limits of stare decisis in bankruptcy statutory interpretation. The case remains highly relevant as courts and Congress continue to debate the appropriate scope of lien avoidance in consumer bankruptcy.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Bank of America, N.A.',
        role: 'PLAINTIFF',
        counsel: 'Phillip A. Bock (argued before the Supreme Court)',
        description: 'Junior mortgage lender seeking to preserve its wholly underwater second mortgage liens against Chapter 7 debtors\' strip-off motions'
      },
      {
        name: 'David Caulkett',
        role: 'DEFENDANT',
        description: 'Chapter 7 debtor with a wholly underwater home seeking to void Bank of America\'s junior mortgage lien under section 506(d)'
      },
      {
        name: 'Jesse C. Edtmead (companion debtor)',
        role: 'THIRD_PARTY',
        description: 'Second Chapter 7 debtor whose case was consolidated with Caulkett\'s for Supreme Court review on the same lien-stripping question'
      }
    ]
  }
];

export default cases;
