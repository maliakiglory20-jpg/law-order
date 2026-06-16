import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'immigration',
    name: 'INS v. Chadha',
    citation: '462 U.S. 919 (1983)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1983,
    facts: 'Jagdish Rai Chadha was a Kenyan-born East Indian who had been lawfully admitted to the United States on a nonimmigrant student visa, which expired in 1972. After the Immigration and Naturalization Service initiated deportation proceedings, an immigration judge suspended Chadha\'s deportation under a statutory provision allowing such suspension for aliens of good moral character whose deportation would cause extreme hardship. Congress had reserved by statute the power to veto an immigration judge\'s suspension of deportation by one-house resolution without presentment to the President. The House of Representatives exercised this legislative veto and passed a resolution overturning Chadha\'s suspension. Chadha challenged the constitutionality of the one-house legislative veto provision in Section 244(c)(2) of the Immigration and Nationality Act.',
    keyLegalIssues: [
      'Whether the one-house legislative veto in Section 244(c)(2) of the INA was constitutional',
      'Whether Congress can reverse executive branch decisions without following bicameralism and presentment requirements',
      'Whether the legislative veto violated the separation of powers doctrine',
      'Whether Chadha had standing to challenge the constitutionality of the veto provision'
    ],
    plaintiffArguments: 'Chadha argued that the one-house legislative veto provision violated the Constitution\'s requirements of bicameralism and presentment by allowing Congress to exercise legislative power through a single chamber resolution not presented to the President for signature or veto. He contended that the Framers deliberately designed a cumbersome lawmaking process to protect individual liberty from hasty or oppressive legislation. Chadha further argued that Congress had improperly delegated and then unilaterally reclaimed authority over immigration matters that the Constitution vested in the executive branch, violating separation of powers.',
    defendantArguments: 'The INS and the United States argued that the legislative veto was a practical accommodation that Congress had used for decades to delegate broad authority to the executive while retaining meaningful oversight. The government contended that the Constitution did not prohibit all congressional action outside of bicameralism and presentment, and that the legislative veto fell within Congress\'s inherent authority to structure its delegations of power. Congress also argued that invalidating the veto would force it to either micromanage immigration through detailed statutes or delegate power without any oversight mechanism.',
    proceduralHistory: 'The immigration judge suspended Chadha\'s deportation in 1974. The House of Representatives passed a resolution overturning the suspension in 1975. The Board of Immigration Appeals ordered Chadha deported. The Ninth Circuit Court of Appeals held the legislative veto unconstitutional in 1980. The Supreme Court noted probable jurisdiction and the INS, despite nominally defending the statute, sided with Chadha on the constitutional question, requiring the Court to appoint a special counsel to argue in support of the statute.',
    finalDecision: 'The Supreme Court held, 7-2, that the one-house legislative veto was unconstitutional. Chief Justice Burger wrote the majority opinion, joined by Justices Brennan, Marshall, Blackmun, Stevens, and O\'Connor, with Powell concurring in the judgment. Justices White and Rehnquist dissented.',
    judicialReasoning: 'Chief Justice Burger\'s majority opinion held that the House\'s action in passing the veto resolution was essentially legislative in character because it altered the legal rights of individuals and required compliance with the bicameralism and presentment requirements of Article I. The Court rejected the argument that convenience or efficiency could override constitutional structure, famously stating that the Framers were well aware that lawmaking was not a fast or easy process. The majority applied a functional test to conclude that the House\'s action had the purpose and effect of altering the legal rights of Chadha, and was therefore legislation subject to all constitutional requirements. The Court emphasized that the Constitution\'s explicit procedures for enacting legislation were not mere formalities but integral safeguards of the separation of powers. The decision invalidated hundreds of legislative veto provisions across federal statutes, fundamentally reshaping the relationship between Congress and the executive branch.',
    legalStandards: [
      'Bicameralism requirement of Article I, Sections 1 and 7',
      'Presentment Clause of Article I, Section 7',
      'Separation of powers doctrine',
      'Non-delegation doctrine principles'
    ],
    keyPrecedents: [
      'Youngstown Sheet & Tube Co. v. Sawyer, 343 U.S. 579 (1952)',
      'Buckley v. Valeo, 424 U.S. 1 (1976)',
      'Hampton & Co. v. United States, 276 U.S. 394 (1928)'
    ],
    evidenceAnalysis: 'The Court examined the legislative history and text of Section 244(c)(2) of the Immigration and Nationality Act, which explicitly granted one house of Congress the power to override an immigration judge\'s suspension of deportation. The majority analyzed the constitutional text and the records of the Constitutional Convention to conclude that the Framers had deliberately created bicameralism and presentment as the exclusive method for Congress to exercise legislative power. The Court also surveyed the many legislative veto provisions enacted since the 1930s but held that historical practice could not override clear constitutional requirements.',
    alternativeOutcomes: 'Had the Court upheld the legislative veto, Congress would have retained a powerful oversight mechanism over executive branch delegated authority across hundreds of statutory programs. Chadha would have been deported to Kenya, a country he had never lived in. The executive branch would have faced significantly more congressional constraints on implementation of delegated authority, potentially affecting foreign policy, regulatory action, and immigration enforcement for decades.',
    lessonsLearned: [
      'Constitutional structure cannot be overridden by practical convenience or historical practice',
      'Congress must follow bicameralism and presentment to exercise legislative power',
      'Broad delegations of authority to the executive branch carry constitutional risks when Congress attempts to retain unilateral control',
      'Immigration cases can become vehicles for major constitutional rulings on separation of powers'
    ],
    bestPractices: [
      'Ensure statutory oversight mechanisms comply with bicameralism and presentment requirements',
      'Draft immigration statutes with clear standards rather than relying on post-hoc congressional correction',
      'Consider administrative law remedies before raising constitutional challenges to congressional action',
      'When seeking suspension of deportation, build a thorough record of hardship and good moral character before the immigration judge'
    ],
    significance: 'INS v. Chadha is one of the most consequential separation of powers decisions in American constitutional history. The ruling invalidated over 200 legislative veto provisions embedded in federal statutes across virtually every domain of federal regulation, fundamentally reshaping the balance of power between Congress and the executive branch. The decision forced Congress to rely on traditional oversight tools such as appropriations restrictions, confirmation hearings, and sunset clauses rather than direct legislative overrides. In the immigration context, Chadha clarified that the suspension of deportation process must operate free from unilateral congressional interference. The case remains the leading authority on the constitutional requirements of the lawmaking process and is routinely cited in separation of powers disputes.',
    outcome: 'Plaintiff Victory',
    isFeatured: true,
    parties: [
      {
        name: 'Immigration and Naturalization Service',
        role: 'PLAINTIFF',
        description: 'Federal agency responsible for immigration enforcement, nominally the petitioner but conceding the constitutional issue'
      },
      {
        name: 'Jagdish Rai Chadha',
        role: 'DEFENDANT',
        counsel: 'Alan B. Morrison (argued for Chadha)',
        description: 'Kenyan-born East Indian student whose deportation suspension was overturned by House resolution'
      },
      {
        name: 'United States House of Representatives',
        role: 'INTERVENOR',
        description: 'Intervened to defend the constitutionality of the one-house legislative veto provision'
      },
      {
        name: 'United States Senate',
        role: 'INTERVENOR',
        description: 'Intervened to defend the constitutionality of the legislative veto'
      }
    ]
  },
  {
    litigationSlug: 'immigration',
    name: 'Zadvydas v. Davis',
    citation: '533 U.S. 678 (2001)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2001,
    facts: 'Kestutis Zadvydas was born in Germany to Lithuanian parents and was a stateless person who had been a lawful permanent resident of the United States. After being ordered removed following criminal convictions, Zadvydas could not be deported because neither Germany, Lithuania, nor the Dominican Republic (his wife\'s country) would accept him. Under 8 U.S.C. Section 1231(a)(6), the INS detained him indefinitely following his removal order. Kim Ho Ma, a companion case, was a Cambodian-born permanent resident who could not be removed because the United States had no repatriation agreement with Cambodia at the time. Both petitioners argued that indefinite detention following a final removal order violated the Due Process Clause of the Fifth Amendment.',
    keyLegalIssues: [
      'Whether 8 U.S.C. Section 1231(a)(6) authorized indefinite post-removal-order detention',
      'Whether indefinite detention of aliens whose removal is not reasonably foreseeable violates the Due Process Clause',
      'What constitutional limits apply to immigration detention after a final removal order',
      'Whether the avoidance canon should be applied to read a time limit into the detention statute'
    ],
    plaintiffArguments: 'Zadvydas and Ma argued that indefinite detention violated the Fifth Amendment\'s Due Process Clause, which applies to all persons in the United States regardless of immigration status. They contended that detention unconnected to any legitimate governmental purpose such as preventing flight risk or danger to the community constituted punishment without trial. Petitioners argued that where removal was not reasonably foreseeable, the government\'s interest in detention evaporated and liberty interests prevailed. They also invoked the canon of constitutional avoidance, urging the Court to read the statute as imposing an implicit time limit rather than authorizing indefinite confinement.',
    defendantArguments: 'The government argued that Congress\'s plenary power over immigration authorized indefinite detention of aliens under final removal orders, and that courts owed substantial deference to the political branches on immigration matters. The government contended that detention served the legitimate purposes of preventing flight and protecting the public from dangerous criminals during the removal period. It further argued that the statute\'s text, which permitted detention "beyond the removal period," plainly authorized continued detention so long as removal remained a possibility, even if not immediately practicable.',
    proceduralHistory: 'The district courts in both cases granted habeas corpus relief, ordering the government to release the petitioners with supervision. The Fifth Circuit reversed in Zadvydas\'s case, holding the statute constitutional. The Ninth Circuit affirmed in Ma\'s case, finding a constitutional violation. The Supreme Court consolidated the cases and granted certiorari to resolve the circuit split on indefinite immigration detention.',
    finalDecision: 'The Supreme Court held, 5-4, that Section 1231(a)(6) must be read to contain an implicit reasonable time limit of six months for post-removal-order detention. After six months, if removal is not reasonably foreseeable, the alien must be released subject to conditions. Justice Breyer wrote the majority, with Justices Stevens, O\'Connor, Souter, and Ginsburg joining. Chief Justice Rehnquist and Justices Scalia, Kennedy, and Thomas dissented.',
    judicialReasoning: 'Justice Breyer invoked the canon of constitutional avoidance to read into the detention statute an implicit reasonable time limitation, reasoning that a statute authorizing indefinite detention would raise serious Fifth Amendment due process concerns. The majority held that once removal is no longer reasonably foreseeable, continued detention serves no legitimate regulatory purpose related to the removal goal, making it punitive and therefore unconstitutional without procedural safeguards. The Court established a presumptively reasonable six-month detention period, after which the detainee bears an initial burden of showing no significant likelihood of removal in the reasonably foreseeable future. The majority acknowledged the plenary power doctrine but held it does not grant Congress unlimited authority to imprison aliens indefinitely without process. The dissenters argued the majority had rewritten the statute and that Congress\'s plenary power authorized such detention.',
    legalStandards: [
      'Due Process Clause of the Fifth Amendment',
      'Plenary power doctrine over immigration',
      'Canon of constitutional avoidance',
      'Substantive due process liberty interests'
    ],
    keyPrecedents: [
      'Shaughnessy v. United States ex rel. Mezei, 345 U.S. 206 (1953)',
      'Wong Wing v. United States, 163 U.S. 228 (1896)',
      'Carlson v. Landon, 342 U.S. 524 (1952)',
      'Foucha v. Louisiana, 504 U.S. 71 (1992)'
    ],
    evidenceAnalysis: 'The Court examined the statutory text of 8 U.S.C. Section 1231(a)(6) and the legislative history of the Illegal Immigration Reform and Immigrant Responsibility Act of 1996. The majority analyzed the practical reality that certain aliens could never be removed due to the refusal of their home countries to accept them, making the government\'s claimed regulatory purpose illusory. Evidence before the Court showed that Zadvydas had been detained for over two years without any realistic prospect of removal, while Ma had been detained for over a year in the same circumstance.',
    alternativeOutcomes: 'Had the Court upheld indefinite post-removal-order detention, hundreds or potentially thousands of aliens in Zadvydas\'s situation would have remained imprisoned indefinitely in American facilities with no path to release, raising profound civil liberties concerns. The ruling\'s six-month presumption has since been applied in thousands of habeas corpus petitions and has shaped DHS detention policy. A contrary ruling would likely have prompted legislative reform or persistent constitutional litigation in individual cases.',
    lessonsLearned: [
      'Constitutional avoidance can be a powerful tool for reading implicit limits into immigration detention statutes',
      'The Due Process Clause provides meaningful protection to non-citizens on American soil',
      'Plenary power over immigration does not insulate every detention decision from constitutional scrutiny',
      'Practical impossibility of removal undermines the regulatory justification for continued detention'
    ],
    bestPractices: [
      'File habeas corpus petitions promptly after six months of post-removal-order detention',
      'Document evidence that removal is not reasonably foreseeable, including country refusals and lack of repatriation agreements',
      'Request conditional supervision rather than release to improve chances of favorable judicial order',
      'Monitor for changes in diplomatic relations that may make previously impossible removal newly feasible'
    ],
    significance: 'Zadvydas v. Davis established that the Due Process Clause imposes meaningful limits on the federal government\'s power to detain aliens indefinitely after final removal orders. The decision created the six-month presumptively reasonable detention period that has governed post-removal-order detention ever since and has been applied in thousands of federal habeas cases. The ruling also confirmed that constitutional protections apply to aliens physically present in the United States even when subject to removal, limiting the scope of the plenary power doctrine. The case remains the foundational authority on the constitutional limits of immigration detention and is routinely cited in challenges to prolonged immigration confinement.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'Kestutis Zadvydas',
        role: 'PLAINTIFF',
        counsel: 'Paul R. Soglin (habeas petitioner)',
        description: 'Stateless Lithuanian-born permanent resident detained indefinitely after removal order'
      },
      {
        name: 'Michael Davis (INS District Director)',
        role: 'DEFENDANT',
        description: 'INS official responsible for Zadvydas\'s detention; government respondent'
      },
      {
        name: 'Kim Ho Ma',
        role: 'PLAINTIFF',
        description: 'Cambodian-born permanent resident in companion case whose removal was impossible due to absence of repatriation agreement'
      }
    ]
  },
  {
    litigationSlug: 'immigration',
    name: 'Plyler v. Doe',
    citation: '457 U.S. 202 (1982)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1982,
    facts: 'In 1975, the Texas legislature revised its education laws to withhold from local school districts state funds for the education of children not legally admitted to the United States, and authorized school districts to deny enrollment to such children. The Tyler Independent School District in Texas adopted a policy charging undocumented children a tuition fee of $1,000 per year to attend public schools, effectively excluding those who could not pay. A class action was filed on behalf of school-age children of Mexican origin residing in Texas as undocumented aliens who could not demonstrate lawful admission. The plaintiffs argued that denying free public education to undocumented children violated the Equal Protection Clause of the Fourteenth Amendment. The State of Texas defended the law as a rational measure to conserve educational resources for citizens and lawfully admitted aliens.',
    keyLegalIssues: [
      'Whether undocumented alien children are "persons" within the meaning of the Fourteenth Amendment entitled to equal protection',
      'Whether Texas could withhold public education from undocumented children without violating the Equal Protection Clause',
      'What level of scrutiny applies to state laws that discriminate against undocumented aliens',
      'Whether education is a fundamental right requiring heightened protection under the Constitution'
    ],
    plaintiffArguments: 'The plaintiffs argued that undocumented children are "persons" within the meaning of the Fourteenth Amendment and therefore entitled to its equal protection guarantees. They contended that the children bore no responsibility for their undocumented status, having been brought to the United States by their parents, and that punishing innocent children for their parents\' conduct was irrational and unjust. Plaintiffs further argued that denying education created a permanent underclass of illiterate individuals who would be unable to participate fully in American society, and that the fiscal savings from the exclusion were speculative and minimal compared to the harm inflicted on children.',
    defendantArguments: 'Texas argued that undocumented aliens are not within the jurisdiction of the state for purposes of the Fourteenth Amendment or are at least entitled to diminished constitutional protection. The state contended that preserving limited educational resources for citizens and lawfully admitted aliens was a legitimate governmental interest that rationally justified the exclusion. Texas also argued that the federal government bore responsibility for controlling illegal immigration and that the state should not be required to subsidize the consequences of federal enforcement failures. The state maintained that education, while important, was not a fundamental right requiring strict scrutiny.',
    proceduralHistory: 'The district court in Tyler, Texas enjoined the enforcement of the Texas statute after a trial on the merits. The Fifth Circuit Court of Appeals affirmed, applying an intermediate level of scrutiny because undocumented alien children constituted a "suspect class" or the statute impinged on a "quasi-fundamental" right to education. The Supreme Court noted probable jurisdiction and heard argument in the consolidated cases of Plyler v. Doe and Texas v. Certain Named and Unnamed Undocumented Alien Children.',
    finalDecision: 'The Supreme Court held, 5-4, that Section 21.031 of the Texas Education Code violated the Equal Protection Clause of the Fourteenth Amendment. Justice Brennan wrote the majority opinion, joined by Justices Marshall, Blackmun, Powell, and Stevens. Chief Justice Burger dissented, joined by Justices White, Rehnquist, and O\'Connor.',
    judicialReasoning: 'Justice Brennan\'s majority opinion held that undocumented aliens, because they are physically present within the jurisdiction of Texas, are "persons" within the meaning of the Fourteenth Amendment. The Court declined to declare education a fundamental right or undocumented alien children a suspect class, but applied a heightened rational basis test because the statute imposed a lifetime hardship on a discrete class of children based on circumstances entirely beyond their control. The majority held that the State had failed to demonstrate a substantial state interest justifying the complete deprivation of a public education. The Court emphasized that the children had no ability to affect their parents\' undocumented status and that branding them illiterate for life bore no rational relationship to any legitimate state interest. Chief Justice Burger\'s dissent argued that the majority had exceeded its judicial role by making policy judgments that belonged to the legislature.',
    legalStandards: [
      'Equal Protection Clause of the Fourteenth Amendment',
      'Heightened rational basis review for laws affecting innocent children',
      'Jurisdiction requirement of the Fourteenth Amendment',
      'Rational basis scrutiny as applied to classifications of aliens'
    ],
    keyPrecedents: [
      'San Antonio Independent School District v. Rodriguez, 411 U.S. 1 (1973)',
      'Graham v. Richardson, 403 U.S. 365 (1971)',
      'Levy v. Louisiana, 391 U.S. 68 (1968)',
      'Mathews v. Diaz, 426 U.S. 67 (1976)'
    ],
    evidenceAnalysis: 'The district court conducted a full evidentiary trial and found that the fiscal savings from excluding undocumented children were negligible compared to the educational harm caused by the exclusion. Evidence showed that the overwhelming majority of children affected had lived in the United States for years and were integrated into local communities. The Court relied on expert testimony and statistical evidence regarding the long-term social and economic consequences of denying literacy and education to a growing segment of the population present within American borders.',
    alternativeOutcomes: 'Had the Court upheld the Texas statute, other states would almost certainly have enacted similar exclusions, potentially denying public education to millions of undocumented children nationwide. The decision has prevented a two-tiered educational system based on immigration status, though critics argue it has incentivized continued undocumented presence. A contrary ruling would have forced Congress to address the educational rights of undocumented children through legislation, a politically charged process that might never have produced a protective result.',
    lessonsLearned: [
      'Constitutional protections extend to all persons physically present in the United States regardless of immigration status',
      'Children cannot be constitutionally punished for their parents\' immigration violations',
      'Complete deprivation of education requires a stronger state justification than mere fiscal savings',
      'Intermediate scrutiny may be applied when vulnerable populations of children are affected by discriminatory laws'
    ],
    bestPractices: [
      'Challenge exclusionary enrollment policies promptly through class action litigation',
      'Build an evidentiary record demonstrating the minimal fiscal savings and massive harm from educational exclusion',
      'Emphasize the blamelessness of children affected by parental conduct in constitutional challenges',
      'Document community integration and long-term residency of affected children to underscore social harm'
    ],
    significance: 'Plyler v. Doe is a landmark ruling establishing that all children physically present in the United States, regardless of immigration status, have a constitutional right to attend public elementary and secondary schools. The decision has shaped American education policy for over four decades, preventing states from erecting immigration-based barriers to K-12 schooling. The ruling has been cited in subsequent cases challenging restrictions on public benefits for undocumented individuals and represents the high-water mark of constitutional protection for undocumented persons. The case also established an important analytical framework for evaluating state laws that impose hardships on innocent children based on characteristics beyond their control.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'James Plyler (Tyler ISD Superintendent)',
        role: 'DEFENDANT',
        description: 'Superintendent of Tyler Independent School District who enforced the tuition policy against undocumented children'
      },
      {
        name: 'Undocumented School-Age Children (Doe class)',
        role: 'PLAINTIFF',
        counsel: 'Peter Roos (MALDEF); Michael McAndrew',
        description: 'Class of undocumented children of Mexican origin denied free public education by Texas law'
      },
      {
        name: 'State of Texas',
        role: 'DEFENDANT',
        description: 'Defendant defending Section 21.031 of the Texas Education Code withholding funds for undocumented children\'s education'
      }
    ]
  },
  {
    litigationSlug: 'immigration',
    name: 'Arizona v. United States',
    citation: '567 U.S. 387 (2012)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2012,
    facts: 'In 2010, Arizona enacted the Support Our Law Enforcement and Safe Neighborhoods Act, known as S.B. 1070, in response to the state\'s large undocumented immigrant population and the federal government\'s perceived failure to enforce immigration laws. The law created several new state immigration crimes, required state officers to check immigration status during any lawful stop when reasonable suspicion existed that the person was unlawfully present, made it a misdemeanor for aliens to fail to register or carry registration documents, and made it a state crime to work or seek work without authorization. The federal government sued Arizona before the law took effect, arguing that federal immigration law preempted the Arizona statute. Four provisions of S.B. 1070 were challenged as preempted by federal law.',
    keyLegalIssues: [
      'Whether federal immigration law preempts Arizona\'s S.B. 1070 under the Supremacy Clause',
      'Whether states may create independent state immigration crimes that mirror or supplement federal law',
      'Whether the mandatory immigration status check requirement conflicted with federal enforcement discretion',
      'Whether Section 2(B)\'s status verification requirement was facially preempted'
    ],
    plaintiffArguments: 'The United States argued that federal immigration law occupies the field of alien registration, preempting Arizona\'s registration and identification requirements under conflict and field preemption principles. The federal government contended that allowing states to impose additional criminal sanctions for immigration violations would disrupt the carefully calibrated federal enforcement scheme, which deliberately grants the executive branch discretion over enforcement priorities. The government argued that mandatory state-level enforcement would interfere with federal foreign policy and diplomatic interests by removing the executive\'s ability to prioritize removals and grant humanitarian relief. The United States further argued that the status check requirement would lead to prolonged detentions inconsistent with federal law.',
    defendantArguments: 'Arizona argued that S.B. 1070 was consistent with and complementary to federal immigration enforcement, not a displacement of it. The state contended that it had inherent police power authority to protect its residents from the consequences of illegal immigration, and that Congress had expressly authorized cooperative state enforcement of immigration laws. Arizona maintained that the status check provision was facially constitutional because officers could only initiate contact on an independent lawful basis, and the provision merely required reporting to federal authorities who retained final enforcement authority. The state also argued that its provisions mirrored federal law rather than conflicting with it.',
    proceduralHistory: 'The United States District Court for the District of Arizona granted a preliminary injunction against four provisions of S.B. 1070 before the law took effect. The Ninth Circuit Court of Appeals affirmed the injunction, holding that the federal government was likely to succeed on the merits of its preemption claims. The Supreme Court granted certiorari and heard argument in April 2012, with the decision issued in June 2012.',
    finalDecision: 'The Supreme Court held, 5-3 (Justice Kagan recused), that three of the four challenged provisions were preempted by federal law: the alien registration requirement (Section 3), the prohibition on unauthorized work (Section 5(C)), and the arrest-without-warrant provision (Section 6). The Court unanimously upheld Section 2(B)\'s status verification requirement against facial preemption challenge, while leaving open the possibility of as-applied challenges. Justice Kennedy wrote the majority opinion.',
    judicialReasoning: 'Justice Kennedy\'s majority opinion emphasized that immigration is a uniquely federal domain affecting foreign policy and national sovereignty, with Congress having established a comprehensive regulatory scheme that leaves little room for state supplementation. The Court held that the alien registration provisions in Section 3 were field preempted because Congress had enacted a complete registration scheme in the Immigration and Nationality Act that left no room for state additions. Section 5(C)\'s work prohibition was conflict preempted because Congress had deliberately not made it a crime for unauthorized aliens to seek work, reflecting a deliberate enforcement choice. Section 6\'s warrantless arrest power was preempted because it would allow Arizona to make arrests federal law did not permit. On Section 2(B), the Court held that on its face the provision could be implemented in a manner consistent with federal law, but expressly reserved as-applied challenges if the provision led to prolonged detention.',
    legalStandards: [
      'Supremacy Clause preemption analysis (field and conflict preemption)',
      'Federal plenary power over immigration and foreign affairs',
      'Obstacle preemption where state law stands as obstacle to federal objectives',
      'Facial versus as-applied constitutional challenges'
    ],
    keyPrecedents: [
      'Hines v. Davidowitz, 312 U.S. 52 (1941)',
      'De Canas v. Bica, 424 U.S. 351 (1976)',
      'Crosby v. National Foreign Trade Council, 530 U.S. 363 (2000)',
      'Chamber of Commerce v. Whiting, 563 U.S. 582 (2011)'
    ],
    evidenceAnalysis: 'The Court examined the text and structure of the Immigration and Nationality Act, the legislative history of federal immigration reform, and executive branch enforcement priorities communicated through official policy documents. The majority analyzed the DHS\'s cooperative enforcement programs with states to determine the scope of permissible state participation in immigration enforcement. Evidence of the law\'s likely practical effects, including anticipated prolonged detention during status checks and disruption of federal enforcement discretion, informed the conflict preemption analysis.',
    alternativeOutcomes: 'Had the Court upheld all four provisions of S.B. 1070, several other states that had enacted similar laws would have been emboldened to further expand state immigration enforcement authority. The ruling\'s mixed outcome preserved federal enforcement primacy while leaving the status check provision available for as-applied challenges. A complete invalidation of all four sections would have more clearly drawn the line against state immigration enforcement, while complete upholding would have fractured the federal immigration enforcement system.',
    lessonsLearned: [
      'States cannot create independent immigration crimes or enforcement regimes that supplement federal law',
      'Federal enforcement discretion is a key component of the preemption analysis in immigration cases',
      'Cooperative enforcement programs exist but cannot extend to state criminal sanctions',
      'As-applied challenges remain available even when facial challenges to immigration enforcement provisions fail'
    ],
    bestPractices: [
      'Challenge state immigration enforcement laws before they take effect through preliminary injunction proceedings',
      'Document how state enforcement provisions interfere with federal discretion and diplomatic interests',
      'Distinguish between permissible state assistance and impermissible state supplementation of federal immigration law',
      'Preserve as-applied challenges to provisions upheld on facial review for future litigation'
    ],
    significance: 'Arizona v. United States is the definitive modern statement on the limits of state authority in immigration enforcement and the scope of federal preemption in immigration law. The decision invalidated the core enforcement provisions of S.B. 1070, which had been the most aggressive state immigration enforcement law in the country and a template for similar laws in several other states. The ruling confirmed that immigration remains a uniquely federal domain and that states may not create independent criminal enforcement schemes even when they claim to mirror federal law. The case also established important doctrine on federal enforcement discretion as a component of preemption analysis, with implications for executive immigration policy across administrations.',
    outcome: 'Mixed',
    parties: [
      {
        name: 'State of Arizona',
        role: 'DEFENDANT',
        counsel: 'Paul Clement (argued for Arizona)',
        description: 'Defendant defending S.B. 1070, the Support Our Law Enforcement and Safe Neighborhoods Act'
      },
      {
        name: 'United States of America',
        role: 'PLAINTIFF',
        counsel: 'Donald Verrilli Jr. (Solicitor General)',
        description: 'Federal government challenging S.B. 1070 as preempted by federal immigration law'
      },
      {
        name: 'Governor Janice K. Brewer',
        role: 'DEFENDANT',
        description: 'Arizona Governor who signed S.B. 1070 into law and defended its constitutionality'
      }
    ]
  },
  {
    litigationSlug: 'immigration',
    name: 'Department of Homeland Security v. Regents of the University of California',
    citation: '591 U.S. 1 (2020)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2020,
    facts: 'The Deferred Action for Childhood Arrivals program, known as DACA, was established by the Obama administration in 2012 through a memorandum from DHS Secretary Janet Napolitano. The program allowed certain individuals who had been brought to the United States as children and met specified criteria to request deferred action from removal and to obtain work authorization for renewable two-year periods. Approximately 700,000 individuals enrolled in DACA, relying on the program for employment, education, and stability. In September 2017, the Trump administration announced it was rescinding DACA, with Acting DHS Secretary Elaine Duke issuing a memorandum citing the Attorney General\'s conclusion that DACA was unlawful under the APA and the Constitution. Multiple lawsuits were filed nationwide challenging the rescission.',
    keyLegalIssues: [
      'Whether the rescission of DACA was arbitrary and capricious under the Administrative Procedure Act',
      'Whether the rescission was judicially reviewable or committed to agency discretion',
      'Whether the agency adequately considered reliance interests of DACA recipients before rescission',
      'Whether DACA itself was lawfully established under the APA and within executive authority'
    ],
    plaintiffArguments: 'The Regents of the University of California and other plaintiffs argued that the rescission of DACA was arbitrary and capricious under Section 706(2)(A) of the APA because the agency failed to provide a reasoned explanation for its decision and failed to consider the reliance interests of the hundreds of thousands of people who had structured their lives around DACA. They contended that the government\'s stated legal rationale that DACA was unlawful was itself wrong, and that even if the agency had discretion to end DACA, it was required to engage in a more careful assessment of the consequences. Plaintiffs also argued that the rescission was motivated by discriminatory animus toward Latinos in violation of the Fifth Amendment\'s equal protection component.',
    defendantArguments: 'The government argued that the rescission of DACA was not reviewable under the APA because it was committed to agency discretion by law, as the decision whether to grant deferred action to any class of aliens falls within the executive\'s unreviewable enforcement discretion. DHS maintained that even if reviewable, the rescission was rational because the Attorney General had concluded DACA was unlawful, and the agency was entitled to follow that legal determination. The government contended that the agency was not required to consider reliance interests of people whose benefits derived from a program the government now viewed as illegal. DHS also argued that the policy concerns underlying DACA were better addressed by Congress through legislation.',
    proceduralHistory: 'Three district courts issued nationwide preliminary injunctions blocking the rescission: the Northern District of California, the Eastern District of New York, and the District of Columbia. The Ninth Circuit and the D.C. Circuit both affirmed injunctions against the rescission. The Second Circuit held the rescission was arbitrary and capricious. The Supreme Court granted certiorari before judgment in the Fourth Circuit and consolidated the cases for argument in November 2019, with a decision issued in June 2020.',
    finalDecision: 'The Supreme Court held, 5-4, that the rescission of DACA was arbitrary and capricious under the APA. Chief Justice Roberts wrote the majority opinion, joined by Justices Ginsburg, Breyer, Sotomayor, and Kagan. The Court held the rescission was judicially reviewable but remanded for the agency to provide an adequate explanation, including consideration of reliance interests. Justices Thomas, Alito, Gorsuch, and Kavanaugh dissented on various grounds.',
    judicialReasoning: 'Chief Justice Roberts\'s majority opinion first held that the rescission of DACA was subject to APA review because the government\'s nonenforcement rationale did not immunize the agency\'s choice of remedy from review. The Court then applied the arbitrary and capricious standard, finding that the Duke memorandum had failed to adequately consider the reliance interests of DACA recipients who had enrolled in school, bought homes, and made other major life decisions in reliance on the program. Roberts\'s opinion emphasized that while the agency had authority to rescind DACA, it was required under the APA to engage in reasoned decision-making that acknowledged and weighed the significant reliance interests at stake. The Court distinguished between the agency\'s discretion over whether to rescind and the legal requirement that whatever decision it made be accompanied by adequate reasoning. The majority declined to rule on whether DACA itself was lawful, leaving that question for remand. The opinion was notable for its emphasis on the APA\'s reasoned decision-making requirement as a constraint on executive immigration policy.',
    legalStandards: [
      'APA arbitrary and capricious standard, 5 U.S.C. Section 706(2)(A)',
      'Reasoned decision-making requirement for agency action',
      'Reliance interests as a factor in arbitrary and capricious review',
      'Committed to agency discretion exception to APA review, 5 U.S.C. Section 701(a)(2)'
    ],
    keyPrecedents: [
      'Motor Vehicle Manufacturers Association v. State Farm, 463 U.S. 29 (1983)',
      'FCC v. Fox Television Stations, Inc., 556 U.S. 502 (2009)',
      'Heckler v. Chaney, 470 U.S. 821 (1985)',
      'Massachusetts v. EPA, 549 U.S. 497 (2007)'
    ],
    evidenceAnalysis: 'The Court examined the Duke memorandum rescinding DACA and found it deficient because it rested entirely on the legal conclusion that DACA was unlawful, without separately addressing the reliance interests of the 700,000 enrollees. The majority analyzed declarations and evidence of the economic and social impact of DACA, including contributions of DACA recipients to the economy, their employment situations, mortgages, and educational enrollment. The Court also examined the subsequent Nielsen memorandum, which had attempted to bolster the rescission\'s reasoning, and declined to credit it as adequate post-hoc rationalization.',
    alternativeOutcomes: 'Had the Court upheld the rescission, DACA would have been immediately wound down and approximately 700,000 recipients would have lost work authorization and become subject to removal. Congress had repeatedly failed to enact legislative protection for childhood arrivals known as the DREAM Act, so no statutory safety net existed. On remand, the Biden administration announced it would preserve DACA, and subsequent litigation in lower courts continued to challenge the program\'s legality, reflecting the ongoing legal uncertainty the Supreme Court\'s narrow ruling left unresolved.',
    lessonsLearned: [
      'Agencies must consider reliance interests when rescinding programs that beneficiaries have structured their lives around',
      'Legal conclusions alone are insufficient to support major agency policy changes under the APA',
      'Nationwide programmatic immigration policies are subject to APA reasoned decision-making review',
      'Post-hoc rationalizations provided after litigation has commenced receive limited deference from courts'
    ],
    bestPractices: [
      'Document and submit evidence of reliance interests when challenging agency rescission of immigration programs',
      'Challenge agency rescissions that rely solely on legal conclusions without policy reasoning',
      'File for nationwide injunctions in multiple circuits to create the procedural posture for Supreme Court review',
      'Preserve both APA and constitutional equal protection claims in rescission challenges to preserve appellate options'
    ],
    significance: 'Department of Homeland Security v. Regents of the University of California is a landmark decision on the intersection of administrative law and immigration policy, establishing that major executive immigration programs can be rescinded only through reasoned decision-making that accounts for reliance interests. The ruling preserved DACA for the duration of the Trump administration\'s first term and allowed the Biden administration to maintain the program. The case significantly developed the doctrine of reliance interests under arbitrary and capricious review and confirmed that prosecutorial discretion exercised through categorical programs is subject to more rigorous APA scrutiny than individual enforcement decisions. The decision has broad implications for administrative law beyond immigration, establishing that even discretionary programs cannot be rescinded without adequate consideration of the consequences for those who relied on them.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'Department of Homeland Security',
        role: 'DEFENDANT',
        counsel: 'Noel Francisco (Solicitor General)',
        description: 'Federal agency that rescinded the DACA program through Acting Secretary Elaine Duke\'s 2017 memorandum'
      },
      {
        name: 'Regents of the University of California',
        role: 'PLAINTIFF',
        counsel: 'Theodore Olson; Donald Verrilli Jr.',
        description: 'Lead plaintiff representing universities and DACA recipients challenging the rescission of the DACA program'
      },
      {
        name: 'DACA Recipients (individual plaintiffs)',
        role: 'PLAINTIFF',
        description: 'Approximately 700,000 individuals enrolled in DACA who faced loss of work authorization and removal if the rescission was upheld'
      },
      {
        name: 'State of California (and other states)',
        role: 'INTERVENOR',
        description: 'States intervening to challenge the DACA rescission based on economic and fiscal harms to state residents and economies'
      }
    ]
  }
];

export default cases;
