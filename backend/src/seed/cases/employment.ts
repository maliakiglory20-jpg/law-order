import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'employment',
    name: 'Griggs v. Duke Power Co.',
    citation: '401 U.S. 424 (1971)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1971,
    facts: 'Duke Power Co. operated a generating facility in Draper, North Carolina, where it had historically restricted Black employees to the Labor Department, the lowest-paying unit. After Title VII of the Civil Rights Act of 1964 took effect, the company instituted new requirements for transfer or promotion: a high school diploma and satisfactory scores on two general intelligence tests. Willie Griggs and twelve other Black employees challenged these requirements as discriminatory because they had a disparate impact on Black applicants and bore no demonstrable relationship to successful job performance. White employees already performing the relevant jobs adequately did not hold high school diplomas or meet the test standards. The district court found no discriminatory intent, and the Fourth Circuit affirmed in part.',
    keyLegalIssues: [
      'Whether facially neutral employment practices that have a disparate impact on a protected class violate Title VII without proof of discriminatory intent',
      'Whether an employer must demonstrate business necessity to justify employment practices that screen out minority applicants at higher rates',
      'Whether pre-employment tests must be demonstrably related to job performance under Title VII'
    ],
    plaintiffArguments: 'The high school diploma and standardized testing requirements were not related to the ability to perform the jobs in question and served as barriers that disproportionately excluded Black applicants, perpetuating past discrimination. Because Title VII prohibits practices that operate as built-in headwinds against minority workers, discriminatory intent is irrelevant when the effect of the practice is discriminatory. The employer bore the burden of showing that any given requirement had a manifest relationship to the employment in question.',
    defendantArguments: 'Duke Power Co. argued that the diploma and testing requirements were neutral on their face and applied equally to all applicants without regard to race, satisfying its obligations under Title VII. The company contended that it had abandoned overt racial segregation and that its new standards were adopted in good faith to improve the overall quality of its workforce. Because there was no evidence of a discriminatory motive, the requirements should be permitted.',
    proceduralHistory: 'Griggs and his co-plaintiffs filed suit in the United States District Court for the Middle District of North Carolina, which ruled against them, finding no discriminatory intent. The Fourth Circuit Court of Appeals affirmed in part, holding the prior discriminatory policy unlawful but upholding the prospective testing requirements. The Supreme Court granted certiorari.',
    finalDecision: 'The Supreme Court reversed unanimously (8-0), holding that Title VII prohibits not only overt discrimination but also practices that are fair in form but discriminatory in operation unless the employer can demonstrate the practice is related to job performance.',
    judicialReasoning: 'Chief Justice Burger, writing for the Court, held that Congress directed the thrust of Title VII at the consequences of employment practices, not simply the motivation behind them. The Court reasoned that good intent or absence of discriminatory intent does not redeem employment procedures or testing mechanisms that operate as barriers to equal employment opportunity. The opinion emphasized that the touchstone under Title VII is business necessity: if an employment practice cannot be shown to be related to job performance, it is prohibited. The Court noted that the EEOC guidelines interpreting the statute were entitled to great deference and that Congress intended to eliminate practices that were discriminatory in effect even when neutral in form. History of prior discrimination at Duke Power strengthened the conclusion that the new requirements perpetuated past exclusion.',
    legalStandards: [
      'Disparate impact theory under Title VII of the Civil Rights Act of 1964',
      'Business necessity defense to disparate impact claims',
      'EEOC guidelines on employment testing and selection procedures',
      'Manifest relationship between employment requirement and job performance'
    ],
    keyPrecedents: [
      'Title VII of the Civil Rights Act of 1964',
      'EEOC Guidelines on Employee Selection Procedures',
      'Albemarle Paper Co. v. Moody, 422 U.S. 405 (1975) (extending Griggs validation requirements)'
    ],
    evidenceAnalysis: 'Evidence showed that white employees who had been hired before the diploma and testing requirements were instituted continued to perform satisfactorily in the very jobs for which the new standards were now required, undermining any claim of job-relatedness. Statistical data demonstrated that the tests disqualified Black applicants at a substantially higher rate than white applicants. Duke Power offered no validation study showing correlation between test performance and job success.',
    alternativeOutcomes: 'Had the Court required proof of discriminatory intent, Title VII would have offered far narrower protection, leaving employers free to maintain facially neutral practices with significant disparate racial impact. An employer-favorable ruling would have gutted the statute in the industrial context where testing and credentialing had long been used as proxies for race. Validation of the tests could have allowed Duke Power to maintain the requirements if job-relatedness were demonstrated.',
    lessonsLearned: [
      'Title VII reaches employment practices that are discriminatory in effect, not merely those driven by discriminatory intent',
      'Employers must be able to justify neutral-appearing selection criteria with evidence of job-relatedness or business necessity',
      'Pre-employment testing must be validated against actual job performance before it can lawfully screen applicants',
      'Historical patterns of discrimination are relevant context when assessing whether neutral practices perpetuate inequality'
    ],
    bestPractices: [
      'Conduct validation studies before implementing standardized testing or credentialing requirements',
      'Periodically audit applicant-flow data for disparate impact across protected classes',
      'Limit selection criteria to those demonstrably linked to essential job functions',
      'Consult EEOC Uniform Guidelines on Employee Selection Procedures when designing hiring systems'
    ],
    significance: 'Griggs v. Duke Power Co. is the foundational employment discrimination precedent establishing the disparate impact theory under Title VII. By holding that facially neutral practices with discriminatory effects are unlawful without a showing of business necessity, the Court dramatically expanded the statute\'s reach. The decision shifted the burden to employers to justify their selection criteria, fundamentally reshaping hiring and promotion systems across American industry. It spawned decades of litigation and regulatory guidance on test validation and has been cited in virtually every major employment discrimination case since. Congress codified the disparate impact standard in the Civil Rights Act of 1991 largely in response to subsequent decisions the Court believed had narrowed Griggs.',
    outcome: 'Plaintiff Victory',
    isFeatured: true,
    parties: [
      {
        name: 'Willie Griggs',
        role: 'PLAINTIFF',
        counsel: 'Jack Greenberg, NAACP Legal Defense Fund',
        description: 'Lead plaintiff, Black employee in the Labor Department at Duke Power\'s Dan River Steam Station'
      },
      {
        name: 'Duke Power Co.',
        role: 'DEFENDANT',
        counsel: 'George Ferguson',
        description: 'Utility company that operated the generating facility and implemented the challenged employment requirements'
      }
    ]
  },
  {
    litigationSlug: 'employment',
    name: 'McDonnell Douglas Corp. v. Green',
    citation: '411 U.S. 792 (1973)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1973,
    facts: 'Percy Green, a Black civil rights activist and mechanic employed by McDonnell Douglas Corporation in St. Louis, Missouri, was laid off in 1964 during a workforce reduction. He subsequently participated in protests against the company\'s alleged racially discriminatory employment practices, including a "stall-in" blocking access to the plant and a "lock-in" trapping company officials in a building. When McDonnell Douglas advertised for mechanics, Green applied and was rejected. He filed a charge with the EEOC alleging that the company refused to rehire him because of his race and in retaliation for his civil rights activities. The EEOC found reasonable cause to believe a violation of Title VII had occurred, and after conciliation efforts failed, Green brought suit. The district court dismissed the lock-in and stall-in claims but allowed the racial discrimination claim to proceed; the Eighth Circuit reversed the dismissal of the protest-related claims.',
    keyLegalIssues: [
      'What the proper order and allocation of proof is in a Title VII discriminatory refusal-to-hire case',
      'Whether an employer may lawfully refuse to rehire an employee who engaged in unlawful protest activities against the employer',
      'How a plaintiff establishes a prima facie case of racial discrimination in hiring under Title VII'
    ],
    plaintiffArguments: 'Green argued that McDonnell Douglas\'s stated reason for refusing to rehire him -- participation in the stall-in and lock-in -- was a pretext for racial discrimination, since the company did not apply the same disqualifying rule to white employees who had engaged in similar conduct. He contended that the timing of the refusal and the company\'s well-documented history of racial discrimination in hiring demonstrated that race was the true motivating factor. The EEOC\'s reasonable-cause determination supported his claim.',
    defendantArguments: 'McDonnell Douglas maintained that it refused to rehire Green solely because of his participation in illegal protest activities, including blocking access to company property and trapping company officials, which constituted lawful nondiscriminatory grounds for rejection under any reasonable employer policy. The company argued that Title VII did not immunize employees from consequences of unlawful conduct directed at the employer regardless of the civil rights context of the protest. It contended that Green had not produced evidence sufficient to establish racial motivation.',
    proceduralHistory: 'Green filed his EEOC charge in 1965; after the commission issued a right-to-sue letter, he filed in the Eastern District of Missouri. The district court granted summary judgment for McDonnell Douglas on the stall-in and lock-in claims but allowed the racial hiring claim to proceed. The Eighth Circuit reversed and reinstated all claims. The Supreme Court granted certiorari to resolve the proper standard of proof in Title VII disparate treatment cases.',
    finalDecision: 'The Supreme Court unanimously reversed the Eighth Circuit in part, holding that participation in the stall-in was not protected activity, but more importantly establishing the three-part burden-shifting framework that governs disparate treatment claims under Title VII.',
    judicialReasoning: 'Justice Powell, writing for the Court, articulated the burden-shifting structure now known as the McDonnell Douglas framework. The plaintiff first bears the burden of establishing a prima facie case of discrimination by showing: membership in a protected class, qualification for the position, rejection, and continued employer search for applicants. Once established, the burden shifts to the employer to articulate a legitimate, nondiscriminatory reason for the adverse action. The burden then returns to the plaintiff to show that the employer\'s stated reason is a pretext for discrimination. The Court explained that this framework reflected Congress\'s intent to place the initial burden on the party with greater access to proof while preserving the employer\'s right to make legitimate personnel decisions. The framework was designed to give both parties a fair opportunity to present their evidence in an orderly manner.',
    legalStandards: [
      'McDonnell Douglas burden-shifting framework for Title VII disparate treatment claims',
      'Prima facie case elements in discriminatory refusal-to-hire claims',
      'Legitimate nondiscriminatory reason defense under Title VII',
      'Pretext analysis in employment discrimination cases'
    ],
    keyPrecedents: [
      'Griggs v. Duke Power Co., 401 U.S. 424 (1971)',
      'Title VII of the Civil Rights Act of 1964, Section 703',
      'Texas Department of Community Affairs v. Burdine, 450 U.S. 248 (1981) (clarifying burden of production)'
    ],
    evidenceAnalysis: 'Green produced evidence of the company\'s prior refusal to upgrade Black employees and statistical data on racial composition of McDonnell Douglas\'s workforce. Critical to the pretext inquiry was whether white employees who had engaged in comparable conduct were treated differently. The Court noted that evidence of differential treatment of similarly situated employees outside the protected class, and evidence of general company policy, would be relevant at the pretext stage.',
    alternativeOutcomes: 'Without the McDonnell Douglas framework, courts would have lacked a coherent structure for evaluating circumstantial evidence of discrimination, making it either too easy or too hard for plaintiffs to proceed. If Green had prevailed on the pretext question outright, the Court would not have had occasion to articulate the full framework. The decision preserved employer authority to enforce conduct standards while preventing those standards from becoming a shield for racial discrimination.',
    lessonsLearned: [
      'Circumstantial evidence of discrimination can sustain a Title VII claim through the burden-shifting framework',
      'Employers must be prepared to articulate a clear, documented, nondiscriminatory reason for any adverse employment action',
      'Pretext can be shown by demonstrating inconsistent application of stated policies across racial lines',
      'Participation in unlawful activities against an employer may not be protected even when motivated by civil rights concerns'
    ],
    bestPractices: [
      'Document all hiring decisions contemporaneously with legitimate business reasons',
      'Apply disciplinary and conduct standards consistently across all employee groups',
      'Train managers on the elements of the prima facie case to avoid inadvertent Title VII exposure',
      'Review applicant pools and rejection reasons periodically for patterns suggesting pretext'
    ],
    significance: 'McDonnell Douglas Corp. v. Green established the foundational burden-shifting framework that governs the vast majority of employment discrimination claims litigated in federal courts. The three-part prima facie/legitimate reason/pretext structure has been applied in thousands of cases and refined in subsequent decisions including Texas Department of Community Affairs v. Burdine and St. Mary\'s Honor Center v. Hicks. The framework balances the plaintiff\'s difficulty in obtaining direct evidence of discriminatory intent with the employer\'s interest in maintaining legitimate authority over personnel decisions. It remains the central analytical tool for disparate treatment claims under Title VII, the ADEA, and the ADA.',
    outcome: 'Mixed',
    parties: [
      {
        name: 'Percy Green',
        role: 'PLAINTIFF',
        counsel: 'Samuel H. Liberman',
        description: 'Black civil rights activist and former McDonnell Douglas mechanic who alleged racially discriminatory refusal to rehire'
      },
      {
        name: 'McDonnell Douglas Corporation',
        role: 'DEFENDANT',
        counsel: 'Robert A. Schmitz',
        description: 'Major aerospace and defense manufacturer based in St. Louis that refused to rehire Green citing his protest activities'
      }
    ]
  },
  {
    litigationSlug: 'employment',
    name: 'Meritor Savings Bank v. Vinson',
    citation: '477 U.S. 57 (1986)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1986,
    facts: 'Mechelle Vinson was hired as a teller-trainee at Meritor Savings Bank in Washington, D.C. in 1974 and eventually promoted to assistant branch manager. She was employed there for four years before being discharged in 1978 for excessive use of sick leave. Vinson subsequently filed suit alleging that her supervisor, Sidney Taylor, had subjected her to sexual harassment throughout her employment, including making sexual demands, fondling her in front of other employees, following her into the women\'s restroom, exposing himself to her, and raping her on multiple occasions. Vinson testified that she complied with Taylor\'s demands out of fear of losing her job. Taylor and Meritor denied all allegations, and the bank argued that even if harassment occurred it had no notice and therefore bore no liability.',
    keyLegalIssues: [
      'Whether sexual harassment that creates a hostile or abusive work environment constitutes sex discrimination under Title VII',
      'Whether an employer is automatically liable for supervisory sexual harassment when it has a general anti-harassment policy',
      'Whether a plaintiff\'s voluntary participation in sexual conduct precludes a Title VII hostile environment claim'
    ],
    plaintiffArguments: 'Vinson argued that Title VII\'s prohibition on sex discrimination encompassed sexual harassment that poisoned the work environment, making it impossible for her to perform her job free from unwelcome sexual pressure. She contended that the relevant question was not whether she voluntarily participated in any sexual conduct but whether the conduct was unwelcome, which it clearly was given the power differential between supervisor and subordinate. The bank was liable as Taylor\'s employer because he used his supervisory authority to coerce her.',
    defendantArguments: 'Meritor Savings Bank argued that Title VII was intended to address economic discrimination and that noneconomic sexual harassment creating a hostile environment did not fall within the statute\'s scope. The bank further contended that it could not be held liable for Taylor\'s conduct because it had a general anti-discrimination policy and Vinson had never formally complained through internal channels. The bank also argued that Vinson\'s alleged voluntary participation in sexual activity with Taylor defeated her claim.',
    proceduralHistory: 'The district court found for Meritor on the ground that any relationship between Vinson and Taylor was voluntary and that the bank was not liable for a supervisor\'s actions when it had a grievance procedure the employee did not use. The D.C. Circuit reversed, recognizing hostile environment sexual harassment as actionable under Title VII. The Supreme Court granted certiorari.',
    finalDecision: 'The Supreme Court unanimously affirmed, holding for the first time that sexual harassment creating a hostile work environment constitutes sex discrimination under Title VII, and that the correct inquiry is whether the conduct was unwelcome, not whether it was voluntary.',
    judicialReasoning: 'Justice Rehnquist, writing for the Court, drew on the EEOC\'s 1980 guidelines, which the Court found persuasive in recognizing both quid pro quo and hostile environment harassment as forms of sex discrimination. The Court reasoned that Title VII\'s prohibition on discrimination "because of sex" extended to the entire spectrum of disparate treatment, including the creation of a discriminatory work environment. The opinion distinguished between "voluntary" and "unwelcome" conduct, emphasizing that a victim\'s acquiescence due to fear of job consequences did not make harassment welcome. On employer liability, the Court declined to impose automatic employer liability for supervisory harassment, holding instead that agency principles should govern, and noted that a grievance procedure that required complaints to go to the harassing supervisor was no defense. The Court left the precise contours of employer liability for future cases.',
    legalStandards: [
      'Hostile work environment theory of sexual harassment under Title VII',
      'Unwelcomeness standard for sexual harassment claims',
      'Quid pro quo sexual harassment doctrine',
      'Agency principles governing employer liability for supervisory harassment',
      'EEOC Guidelines on Discrimination Because of Sex (1980)'
    ],
    keyPrecedents: [
      'Title VII of the Civil Rights Act of 1964',
      'EEOC Guidelines on Sexual Harassment (29 C.F.R. § 1604.11)',
      'Burlington Industries, Inc. v. Ellerth, 524 U.S. 742 (1998)',
      'Faragher v. City of Boca Raton, 524 U.S. 775 (1998)'
    ],
    evidenceAnalysis: 'Vinson\'s testimony about specific incidents of harassment, rape, and coercion was corroborated in part by co-worker testimony about Taylor\'s conduct and by the pattern of his supervisory behavior toward female employees. Taylor\'s denial created a credibility dispute. The district court had improperly resolved that dispute against Vinson at the dismissal stage. The Court noted that evidence of a complainant\'s dress and personal fantasies was not per se inadmissible but courts should screen it carefully given its prejudicial potential.',
    alternativeOutcomes: 'A ruling for Meritor would have left employees without a Title VII remedy for severe workplace harassment absent a tangible economic loss such as demotion or termination, drastically limiting the statute\'s protective reach. Had the Court adopted automatic employer liability for all supervisory harassment, it would have preempted the later Ellerth/Faragher affirmative defense framework. A finding that voluntary participation precluded liability would have placed an impossible burden on employees subject to coercive supervisory harassment.',
    lessonsLearned: [
      'Sexual harassment that creates a hostile or abusive work environment is actionable sex discrimination under Title VII regardless of economic harm',
      'The relevant inquiry is whether the conduct was unwelcome, not whether the victim formally resisted',
      'Employers should establish effective anti-harassment policies with accessible complaint procedures that do not require victims to report to the harasser',
      'Supervisory authority magnifies the coercive potential of harassment and shapes the liability analysis'
    ],
    bestPractices: [
      'Adopt a clear written anti-harassment policy with multiple reporting channels that bypass the alleged harasser',
      'Train supervisors and managers annually on what constitutes prohibited harassment',
      'Investigate all harassment complaints promptly, thoroughly, and impartially',
      'Document investigations and remedial actions to establish good faith compliance efforts'
    ],
    significance: 'Meritor Savings Bank v. Vinson is the landmark Supreme Court decision establishing that sexual harassment violating Title VII encompasses not only quid pro quo demands tied to employment decisions but also harassment that creates a hostile or abusive work environment. By recognizing the hostile environment theory, the Court dramatically expanded Title VII\'s protective scope and validated the EEOC framework that had developed since 1980. The decision fundamentally transformed workplace law, spurring the adoption of anti-harassment policies and training programs across American employers. It laid the doctrinal foundation for subsequent refinements in Burlington Industries v. Ellerth and Faragher v. City of Boca Raton, which established the employer affirmative defense for harassment by supervisors not resulting in tangible employment action.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'Mechelle Vinson',
        role: 'PLAINTIFF',
        counsel: 'Patricia Barry',
        description: 'Former bank teller and assistant branch manager who alleged years of sexual harassment and rape by her supervisor'
      },
      {
        name: 'Meritor Savings Bank',
        role: 'DEFENDANT',
        counsel: 'R. Kent Murdy',
        description: 'Washington, D.C. savings bank that employed both Vinson and her alleged harasser, supervisor Sidney Taylor'
      },
      {
        name: 'Sidney Taylor',
        role: 'THIRD_PARTY',
        description: 'Branch manager and direct supervisor of Vinson, alleged to have perpetrated the sexual harassment'
      }
    ]
  },
  {
    litigationSlug: 'employment',
    name: 'Burlington Industries, Inc. v. Ellerth',
    citation: '524 U.S. 742 (1998)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1998,
    facts: 'Kimberly Ellerth worked as a salesperson for Burlington Industries in Chicago from March 1993 to May 1994. During that period she alleged that her supervisor, Ted Slowik, a mid-level manager with authority to recommend but not make final hiring decisions, made numerous offensive and threatening sexual remarks to her and on three occasions made comments that could be construed as threats to deny her tangible job benefits if she did not submit to sexual advances. Despite resisting Slowik\'s advances throughout her employment, Ellerth was promoted and suffered no tangible reduction in her salary, benefits, or job status. She resigned voluntarily in May 1994, claiming constructive discharge, and then filed a Title VII sexual harassment claim. Burlington argued it could not be liable because it had a policy against harassment, Ellerth had not used its complaint procedure, and no tangible employment action had been taken against her.',
    keyLegalIssues: [
      'Whether an employer is vicariously liable under Title VII for a supervisor\'s harassment when no tangible employment action is taken against the victim',
      'What affirmative defense an employer may raise when a supervisor creates a hostile environment but takes no tangible adverse action',
      'How agency law principles apply to employer liability for supervisory sexual harassment under Title VII'
    ],
    plaintiffArguments: 'Ellerth argued that because Slowik was her supervisor with apparent authority to affect the terms and conditions of her employment, Burlington was vicariously liable for his harassment without the need to show that the company knew or should have known about it. She contended that the threats themselves, even if not carried out, were sufficient to constitute actionable quid pro quo harassment creating employer liability. Burlington\'s failure to provide a workable complaint mechanism should not be allowed to insulate it from liability for its supervisor\'s conduct.',
    defendantArguments: 'Burlington Industries maintained that it could not be liable for Slowik\'s conduct because it had an anti-harassment policy, Ellerth had never used the company\'s complaint procedure, and no tangible adverse employment action had ever been taken against her. The company argued that without a completed quid pro quo -- an actual denial of a job benefit for refusing a sexual demand -- employer liability should depend on negligence, meaning actual or constructive knowledge, which Burlington lacked because Ellerth did not complain.',
    proceduralHistory: 'Ellerth filed suit in the Northern District of Illinois, which granted summary judgment for Burlington. A divided Seventh Circuit reversed en banc, with multiple opinions producing no clear majority rationale. The Supreme Court granted certiorari along with Faragher v. City of Boca Raton to resolve the confused state of supervisory harassment liability law.',
    finalDecision: 'The Supreme Court held 7-2 that an employer is subject to vicarious liability for a hostile environment created by a supervisor but may raise an affirmative defense when no tangible employment action has been taken, requiring proof that the employer exercised reasonable care to prevent and correct harassment and that the employee unreasonably failed to use corrective opportunities.',
    judicialReasoning: 'Justice Kennedy, writing for the majority, applied agency law principles to conclude that a supervisor\'s authority over subordinates, conferred by the employer, supports vicarious liability for harassment. The Court distinguished between cases where a supervisor takes a tangible employment action -- in which employer liability is automatic -- and cases where no such action occurs. In the latter category the employer may avoid liability or limit damages by proving: first, that it exercised reasonable care to prevent and promptly correct any sexually harassing behavior, typically demonstrated by having an effective anti-harassment policy; and second, that the plaintiff employee unreasonably failed to take advantage of preventive or corrective opportunities provided by the employer. The Court retired the quid pro quo/hostile environment distinction as a liability rubric, substituting the tangible-employment-action framework. The decision was issued simultaneously with Faragher v. City of Boca Raton, which applied the same affirmative defense.',
    legalStandards: [
      'Vicarious liability for supervisory harassment under Title VII',
      'Ellerth/Faragher affirmative defense for harassment without tangible employment action',
      'Tangible employment action standard (demotion, termination, significant change in benefits)',
      'Reasonable care prong of the affirmative defense',
      'Unreasonable failure to use complaint procedures prong of the affirmative defense'
    ],
    keyPrecedents: [
      'Meritor Savings Bank v. Vinson, 477 U.S. 57 (1986)',
      'Faragher v. City of Boca Raton, 524 U.S. 775 (1998)',
      'Restatement (Second) of Agency §§ 219, 228, 229',
      'Harris v. Forklift Systems, Inc., 510 U.S. 17 (1993)'
    ],
    evidenceAnalysis: 'Evidence established Slowik\'s pattern of suggestive remarks across multiple incidents, which the Court assumed for purposes of the summary judgment posture to constitute actionable hostile environment harassment. Critical to the affirmative defense analysis was the undisputed fact that Ellerth had never availed herself of Burlington\'s complaint procedure, a factor supporting the second prong. Burlington\'s anti-harassment policy had been distributed to employees but the adequacy of the complaint mechanism in practice remained a fact question for remand.',
    alternativeOutcomes: 'Automatic employer liability for all supervisory harassment would have removed employer incentives to create effective anti-harassment programs, since liability would attach regardless of compliance efforts. A negligence-only standard would have allowed employers to escape liability through deliberate ignorance of harassment occurring below the management level. The affirmative defense framework was designed to create positive compliance incentives while ensuring victims who use available remedies are protected.',
    lessonsLearned: [
      'Employers face automatic vicarious liability when a supervisor takes a tangible employment action in connection with harassment',
      'When no tangible action occurs, employers can limit or avoid liability by demonstrating a reasonable anti-harassment program and the victim\'s failure to use it',
      'Effective complaint procedures must be accessible and must not channel complaints solely through the harassing supervisor',
      'Employees who unreasonably fail to report harassment through available procedures may undercut their own claims'
    ],
    bestPractices: [
      'Adopt and widely disseminate a written anti-harassment policy with a clear, accessible multi-channel complaint procedure',
      'Train all supervisors and employees on the policy and reporting options at least annually',
      'Designate multiple complaint recipients including HR, legal, and senior management so no single supervisor controls reporting',
      'Respond to all complaints with prompt investigation and appropriate corrective action, documenting each step'
    ],
    significance: 'Burlington Industries, Inc. v. Ellerth, decided the same day as Faragher v. City of Boca Raton, fundamentally restructured employer liability doctrine for supervisory sexual harassment under Title VII. The companion decisions replaced the confusing quid pro quo/hostile environment distinction as a liability determinant with a unified framework centered on whether a tangible employment action occurred. Where none did, the Ellerth/Faragher affirmative defense gives employers a pathway to avoid liability by demonstrating a good-faith anti-harassment program and the employee\'s failure to use it. This framework powerfully incentivized adoption of robust workplace anti-harassment policies and has shaped employment law practice and corporate compliance programs for more than two decades.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'Kimberly Ellerth',
        role: 'PLAINTIFF',
        counsel: 'Ernest T. Rossiello',
        description: 'Former Burlington Industries salesperson who alleged quid pro quo and hostile environment sexual harassment by her supervisor'
      },
      {
        name: 'Burlington Industries, Inc.',
        role: 'DEFENDANT',
        counsel: 'Andrew J. Kilcarr',
        description: 'Large textile manufacturer and Ellerth\'s employer, sued for vicarious liability based on supervisor Ted Slowik\'s alleged harassment'
      }
    ]
  },
  {
    litigationSlug: 'employment',
    name: 'Bostock v. Clayton County',
    citation: '590 U.S. 644 (2020)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2020,
    facts: 'Gerald Bostock was a child welfare advocate employed by Clayton County, Georgia for a decade with a consistently positive performance record. Shortly after he began participating in a gay recreational softball league and his sexual orientation became known to county officials, Clayton County fired him for conduct unbecoming of a county employee. Donald Zarda, a skydiving instructor, was fired from Altitude Express in New York shortly after mentioning to a customer that he was gay. Aimee Stephens had worked as a funeral director for R.G. and G.R. Harris Funeral Homes in Michigan for six years before informing her employer that she was a transgender woman who intended to present as female at work; she was fired two weeks later. All three filed charges with the EEOC alleging sex discrimination under Title VII, and their cases were consolidated at the Supreme Court.',
    keyLegalIssues: [
      'Whether Title VII\'s prohibition on discrimination "because of sex" encompasses discrimination based on sexual orientation',
      'Whether Title VII\'s prohibition on discrimination "because of sex" encompasses discrimination based on transgender status or gender identity',
      'Whether but-for causation analysis requires that sex be the sole cause or merely a but-for cause of an adverse employment action'
    ],
    plaintiffArguments: 'Bostock, Zarda\'s estate, and Stephens argued that an employer who fires an employee for being gay or transgender necessarily discriminates against that individual at least in part because of sex. They reasoned that to determine how an employer treats a gay or transgender employee, one must consider the employee\'s sex, meaning sex is inescapably a but-for cause of the firing. The ordinary public meaning of Title VII at enactment encompassed discrimination where sex is a but-for cause, and modern interpretive tools confirmed that the statute\'s language covered these claims regardless of Congress\'s subjective expectations in 1964.',
    defendantArguments: 'Clayton County and the other employers argued that Congress did not intend to include sexual orientation or gender identity within the meaning of sex when it enacted Title VII in 1964, and that courts should not extend the statute beyond its originally understood meaning. They contended that sex meant biological sex in common usage and that discrimination based on sexual orientation or transgender status was conceptually distinct from discrimination based on sex. The employers also argued that other federal and state legislative efforts to add sexual orientation as a protected category demonstrated that it was not already covered.',
    proceduralHistory: 'Bostock\'s claim was dismissed by the Northern District of Georgia and affirmed by the Eleventh Circuit, which held sexual orientation not protected under Title VII. Zarda\'s claim was dismissed and the Second Circuit reversed en banc, holding sexual orientation covered. Stephens\'s claim was dismissed, the Sixth Circuit reversed, holding transgender status covered. The Supreme Court granted certiorari in all three cases and consolidated them.',
    finalDecision: 'The Supreme Court held 6-3 that an employer who fires a person for being homosexual or transgender fires that person at least in part because of sex and therefore violates Title VII of the Civil Rights Act of 1964.',
    judicialReasoning: 'Justice Gorsuch, writing for the majority and joined by Chief Justice Roberts and Justices Ginsburg, Breyer, Sotomayor, and Kagan, applied straightforward textual analysis. The opinion held that when an employer fires a male employee for being attracted to men, it treats him worse than it treats a female employee who is attracted to men -- a comparison that holds sex constant and reveals discrimination based on sex. The same logic applied to transgender employees: an employer who fires a biological male for presenting as female would not fire a biological female for the same conduct, demonstrating that sex was a but-for cause. The Court emphasized that it was interpreting the words of Title VII, not speculating about congressional intent in 1964, and that the statute\'s language was unambiguous. The majority rejected the argument that unexpected applications of a clear statutory text warrant a different result, citing standard textualist principles.',
    legalStandards: [
      'But-for causation standard for Title VII discrimination claims',
      'Textualist statutory interpretation of "because of sex" in Title VII',
      'Title VII of the Civil Rights Act of 1964, Section 703(a)(1)',
      'Individual versus group-level discrimination analysis',
      'Ordinary public meaning of statutory text at time of enactment'
    ],
    keyPrecedents: [
      'Price Waterhouse v. Hopkins, 490 U.S. 228 (1989) (sex stereotyping)',
      'Oncale v. Sundowner Offshore Services, Inc., 523 U.S. 75 (1998) (same-sex harassment)',
      'Phillips v. Martin Marietta Corp., 400 U.S. 542 (1971) (per curiam)',
      'Griggs v. Duke Power Co., 401 U.S. 424 (1971)'
    ],
    evidenceAnalysis: 'In Bostock\'s case, the primary evidence of discrimination was the close temporal proximity between county officials learning of his participation in a gay softball league and his termination for a vague "unbecoming conduct" charge that had not been applied to similarly situated heterosexual employees. In Stephens\'s case, the funeral home\'s owner explicitly stated in EEOC proceedings that he fired her because he believed it was wrong for a biological male to present as a woman. In Zarda\'s case, supervisors acknowledged awareness of his sexual orientation immediately before termination.',
    alternativeOutcomes: 'A ruling for the employers would have left millions of LGBTQ+ workers without federal employment discrimination protection, continuing a circuit split in which protections depended on geographic location. Congress could have provided protection through new legislation, but repeated legislative efforts including the Employment Non-Discrimination Act had failed across decades. State laws varied widely, leaving many employees unprotected. A narrower ruling covering only gender nonconformity might have protected some transgender plaintiffs while leaving gay and lesbian employees without a remedy.',
    lessonsLearned: [
      'Discrimination against an employee because of sexual orientation or gender identity is discrimination because of sex under Title VII',
      'The but-for causation standard requires only that sex be one of the causes, not the sole or primary cause, of an adverse action',
      'Textualist analysis of clear statutory language can yield expansive results regardless of original legislative expectations',
      'Employers who terminate employees shortly after learning of LGBTQ+ status face significant evidentiary exposure'
    ],
    bestPractices: [
      'Update anti-discrimination and anti-harassment policies to explicitly include sexual orientation and gender identity as protected characteristics',
      'Train managers to understand that adverse actions connected to an employee\'s LGBTQ+ status expose the company to Title VII liability',
      'Review employee handbooks, benefit plans, and transition-related policies for compliance with post-Bostock requirements',
      'Document performance-based employment decisions contemporaneously to rebut inference of discriminatory motivation'
    ],
    significance: 'Bostock v. Clayton County is the most consequential expansion of Title VII\'s scope since the statute\'s enactment, extending federal employment discrimination protection to an estimated 8.1 million LGBTQ+ workers across the United States. The decision resolved a decades-long circuit split and ended the anomaly in which a worker\'s federal civil rights depended on the state in which they were employed. Justice Gorsuch\'s majority opinion, notable for its rigorous textualism from a Justice appointed by a Republican president, underscored that faithful interpretation of statutory text can produce landmark civil rights results. Bostock has prompted significant litigation regarding its interaction with religious liberty claims, bathroom and dress-code policies, and the reach of the Religious Freedom Restoration Act, making it a continuing focus of employment law development.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'Gerald Bostock',
        role: 'PLAINTIFF',
        counsel: 'Brian Sutherland',
        description: 'Child welfare advocate fired by Clayton County, Georgia after his participation in a gay softball league became known to county officials'
      },
      {
        name: 'Clayton County, Georgia',
        role: 'DEFENDANT',
        counsel: 'Jeffrey M. Harris',
        description: 'Georgia county employer that terminated Bostock for alleged conduct unbecoming following disclosure of his sexual orientation'
      },
      {
        name: 'Estate of Donald Zarda',
        role: 'PLAINTIFF',
        counsel: 'Gregory Antollino',
        description: 'Estate of skydiving instructor fired from Altitude Express after revealing he was gay; consolidated with Bostock'
      },
      {
        name: 'Aimee Stephens',
        role: 'PLAINTIFF',
        counsel: 'David Dinielli, ACLU',
        description: 'Transgender funeral director fired by R.G. and G.R. Harris Funeral Homes after disclosing her gender identity; consolidated with Bostock'
      }
    ]
  }
];

export default cases;
