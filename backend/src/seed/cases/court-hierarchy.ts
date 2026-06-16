import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'court-hierarchy',
    name: 'Marbury v. Madison',
    citation: '5 U.S. (1 Cranch) 137 (1803)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1803,
    facts: 'In the final days of the Adams administration, Secretary of State John Marshall signed and sealed commissions for several "midnight judges," including William Marbury, who had been appointed Justice of the Peace for the District of Columbia. The new Jefferson administration\'s Secretary of State, James Madison, refused to deliver Marbury\'s commission. Marbury petitioned the Supreme Court directly for a writ of mandamus compelling Madison to deliver the commission, invoking original jurisdiction under Section 13 of the Judiciary Act of 1789. Chief Justice John Marshall, who had himself been the Secretary of State who signed the commissions, presided over the case. The political stakes were enormous: a direct order to Madison would likely be ignored, while declining to act would appear to concede executive supremacy.',
    keyLegalIssues: [
      'Whether Marbury had a legal right to his commission',
      'Whether mandamus was the proper remedy',
      'Whether the Supreme Court had original jurisdiction to issue the writ under the Judiciary Act of 1789',
      'Whether the Court had power to strike down an Act of Congress as unconstitutional',
      'Whether the judiciary is the authoritative interpreter of the Constitution'
    ],
    plaintiffArguments: 'Marbury argued that his commission was complete and legally binding upon the President\'s signing and the Secretary of State\'s sealing, making its delivery a mere ministerial act. He contended that Section 13 of the Judiciary Act of 1789 expressly granted the Supreme Court original jurisdiction to issue writs of mandamus to federal officers. Marbury further argued that where there is a legal right, there must be a legal remedy, and the Court was the proper forum to vindicate that right.',
    defendantArguments: 'Madison, through the Jefferson administration, argued that the appointment was not complete until the commission was delivered, and that the executive had discretion over delivery. The administration contended that political questions involving executive appointments were beyond judicial review. Madison\'s counsel also argued that the Court lacked jurisdiction to interfere with executive branch operations and that mandamus was not available against a Cabinet officer in these circumstances.',
    proceduralHistory: 'Marbury filed his petition for a writ of mandamus directly in the Supreme Court, seeking to invoke its original jurisdiction. The Jefferson administration refused to participate meaningfully in the proceedings. Chief Justice Marshall, writing for a unanimous Court, structured the opinion to address three questions sequentially: whether Marbury had a right, whether a remedy existed, and whether mandamus in the Supreme Court was that remedy.',
    finalDecision: 'The Supreme Court unanimously held that Marbury had a right to his commission and that mandamus was a proper remedy, but ruled that Section 13 of the Judiciary Act of 1789 was unconstitutional insofar as it purported to grant the Court original jurisdiction beyond that specified in Article III. The Court denied the writ for lack of jurisdiction.',
    judicialReasoning: 'Chief Justice Marshall\'s opinion established the foundational principle of judicial review: that it is "emphatically the province and duty of the judicial department to say what the law is." Marshall reasoned that the Constitution is the supreme law of the land and that an act of Congress repugnant to the Constitution must be void. The Court sits at the apex of the judicial hierarchy precisely because it has the authority and duty to interpret the Constitution and invalidate legislation that conflicts with it. Marshall cleverly avoided a direct confrontation with the Jefferson administration by denying relief on jurisdictional grounds while simultaneously asserting enormous judicial power. The decision established that courts — not legislatures or executives — have the final word on constitutional meaning, cementing the Supreme Court\'s position at the top of the court hierarchy.',
    legalStandards: [
      'Judicial review: courts may strike down legislation inconsistent with the Constitution',
      'The Constitution is the supreme law of the land and binds all branches',
      'Original jurisdiction of the Supreme Court is defined by Article III and cannot be enlarged by Congress',
      'Where there is a right, there is a remedy',
      'Separation of powers limits legislative interference with judicial jurisdiction'
    ],
    keyPrecedents: [
      'Article III, Section 2 of the U.S. Constitution (defining Supreme Court jurisdiction)',
      'Judiciary Act of 1789, Section 13 (held unconstitutional as applied)',
      'Federalist No. 78 (Hamilton on judicial review)',
      'Hylton v. United States, 3 U.S. 171 (1796) (early exercise of constitutional review)'
    ],
    evidenceAnalysis: 'The evidentiary record consisted primarily of documentary and testimonial evidence establishing that the commission had been signed by President Adams and sealed by Secretary of State Marshall before the end of the Adams administration. Secretary of State Madison declined to provide information about the commissions to the Court. The Court treated the fact of signing and sealing as legally sufficient to complete the appointment for purposes of the right-to-commission analysis, before pivoting to the jurisdictional question that ultimately resolved the case.',
    alternativeOutcomes: 'Had the Court granted the writ of mandamus, Jefferson almost certainly would have defied it, potentially triggering a constitutional crisis that could have permanently weakened the judiciary. Had the Court simply dismissed for lack of jurisdiction without addressing the merits or asserting the power of judicial review, it would have missed a historic opportunity to establish the Court\'s supremacy in constitutional interpretation. A ruling upholding Section 13 as constitutional would have left the Court with broader original jurisdiction but without the landmark assertion of judicial review.',
    lessonsLearned: [
      'Courts can expand their long-term institutional power by strategically accepting short-term losses',
      'The power to say what the law is ultimately belongs to the judiciary in the American system',
      'Congressional attempts to alter the Supreme Court\'s constitutionally defined jurisdiction raise Article III concerns',
      'Judicial opinions can simultaneously decline to grant relief and assert sweeping doctrinal authority',
      'The structure of a judicial opinion — the sequence in which questions are addressed — can be as consequential as the holding'
    ],
    bestPractices: [
      'Practitioners must distinguish between the Court\'s original and appellate jurisdiction when selecting the proper forum',
      'Constitutional challenges to jurisdictional statutes must be raised and briefed carefully',
      'Understanding that the Court\'s power of judicial review underlies every constitutional argument made before it',
      'Framing legal rights claims with a clear articulation of the available remedy',
      'Appreciating that separation-of-powers principles limit judicial remedies against coordinate branches'
    ],
    significance: 'Marbury v. Madison is the single most important case in American constitutional law and the cornerstone of the court hierarchy. By establishing judicial review, Chief Justice Marshall transformed the Supreme Court from a comparatively weak institution into the authoritative interpreter of the Constitution. The decision explains why the Court sits at the apex of the judicial hierarchy: it has both the power and the duty to invalidate any law — federal or state — that conflicts with the Constitution. Every subsequent case involving judicial review, constitutional interpretation, or the relationship between the branches rests on the foundation laid in Marbury. For students of the court system, the case demonstrates that the Supreme Court\'s supremacy is not merely a matter of statutory design but is grounded in the constitutional structure itself.',
    outcome: 'Defendant Victory (writ denied for lack of jurisdiction)',
    isFeatured: true,
    parties: [
      {
        name: 'William Marbury',
        role: 'PLAINTIFF',
        counsel: 'Charles Lee',
        description: 'Appointed Justice of the Peace for the District of Columbia whose commission was withheld'
      },
      {
        name: 'James Madison',
        role: 'DEFENDANT',
        description: 'Secretary of State under President Jefferson who refused to deliver the commission'
      }
    ]
  },
  {
    litigationSlug: 'court-hierarchy',
    name: 'Martin v. Hunter\'s Lessee',
    citation: '14 U.S. (1 Wheat.) 304 (1816)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1816,
    facts: 'This dispute arose from competing claims to a large tract of land in Virginia known as the Northern Neck, originally granted by the Crown to Lord Fairfax. Denny Martin, a British subject and Fairfax\'s heir, claimed title under the original grant and Treaty of Paris protections. David Hunter claimed title through a Virginia land grant issued after the state had purported to confiscate the Fairfax lands under sequestration laws enacted during the Revolutionary War. The Virginia Court of Appeals ruled in favor of Hunter, applying Virginia law. The United States Supreme Court reversed in Fairfax\'s Devisee v. Hunter\'s Lessee (1813), holding that treaty protections preserved Fairfax\'s title. The Virginia Court of Appeals then took the extraordinary step of refusing to obey the Supreme Court\'s mandate, asserting that Section 25 of the Judiciary Act of 1789 — which authorized Supreme Court review of state court decisions — was unconstitutional. Virginia\'s highest court argued that the federal and state judiciaries were coordinate, independent sovereigns with no appellate relationship between them.',
    keyLegalIssues: [
      'Whether the Supreme Court has appellate jurisdiction over final judgments of state courts on federal questions',
      'Whether Section 25 of the Judiciary Act of 1789 is constitutional',
      'Whether the Supremacy Clause requires state courts to apply and be bound by federal law',
      'Whether the federal and state judiciaries are coordinate independent sovereigns or exist in a hierarchical relationship',
      'Whether treaties of the United States supersede conflicting state confiscation laws'
    ],
    plaintiffArguments: 'Martin argued that his title was protected by the Jay Treaty and the Treaty of Paris, which as treaties of the United States were supreme over conflicting Virginia state law under the Supremacy Clause. He contended that the Supreme Court\'s earlier ruling in his favor was binding on the Virginia Court of Appeals and that the state court\'s refusal to comply was itself a federal question reviewable by the Supreme Court. Martin further argued that a uniform national interpretation of federal law was essential to the constitutional design and could only be secured through Supreme Court review of state court decisions.',
    defendantArguments: 'Hunter and Virginia argued that the state and federal courts were coordinate, co-equal sovereigns, each supreme within its own sphere, with no appellate relationship between them. Virginia contended that Section 25 of the Judiciary Act violated the Constitution by subordinating state courts to federal appellate authority, undermining state sovereignty. Hunter\'s counsel argued that Virginia\'s confiscation statutes lawfully divested Fairfax of his title before any treaty protection attached, and that the state court\'s interpretation of its own property law was final.',
    proceduralHistory: 'The Virginia Court of Appeals initially ruled for Hunter. The Supreme Court reversed in Fairfax\'s Devisee v. Hunter\'s Lessee (1813) and remanded. Virginia\'s Court of Appeals then issued a remarkable opinion declaring Section 25 of the Judiciary Act unconstitutional and refusing to comply with the Supreme Court\'s mandate. Martin again appealed to the Supreme Court, which granted certiorari to address the constitutional question of its own appellate authority over state courts. Chief Justice Marshall recused himself because he had a personal interest in Virginia land titles; Justice Story wrote for the Court.',
    finalDecision: 'The Supreme Court, in an opinion by Justice Story, unanimously upheld the constitutionality of Section 25 and firmly asserted its appellate jurisdiction over state court judgments on federal questions. The Court held that the Virginia Court of Appeals was obligated to comply with the Supreme Court\'s mandate and that the Constitution established a unified national judicial hierarchy with the Supreme Court at its apex.',
    judicialReasoning: 'Justice Story\'s opinion is the definitive statement of the Supreme Court\'s appellate authority over state courts. Story reasoned that Article III vests the judicial power of the United States in federal courts and expressly extends that power to cases arising under the Constitution, federal laws, and treaties. This jurisdiction is over the subject matter — not merely over the tribunal — meaning the Supreme Court\'s appellate reach extends to state courts whenever they decide federal questions. Story demolished Virginia\'s coordinate-sovereignty theory by showing that the Constitution created a unified national judiciary to ensure uniform interpretation of federal law. Without Supreme Court review of state decisions, federal law would mean different things in different states, defeating the Framers\' intent of national legal supremacy. The Court\'s position at the top of the judicial hierarchy — superior to state courts on federal questions — is thus constitutionally mandated, not merely a statutory choice.',
    legalStandards: [
      'Article III appellate jurisdiction extends to federal questions decided by state courts',
      'Section 25 of the Judiciary Act of 1789 is constitutional',
      'The Supremacy Clause requires state courts to apply federal law and submit to federal appellate review',
      'Uniform national interpretation of federal law requires a single supreme appellate court',
      'State court judgments on federal questions are not final; they are subject to Supreme Court review'
    ],
    keyPrecedents: [
      'Fairfax\'s Devisee v. Hunter\'s Lessee, 11 U.S. (7 Cranch) 603 (1813) (prior Supreme Court ruling in the same litigation)',
      'Article III, Sections 1 and 2 of the U.S. Constitution',
      'Supremacy Clause, Article VI of the U.S. Constitution',
      'Judiciary Act of 1789, Section 25',
      'Marbury v. Madison, 5 U.S. 137 (1803)'
    ],
    evidenceAnalysis: 'The evidentiary issues centered on chain of title to the Fairfax lands: royal grants, the Treaty of Paris, the Jay Treaty, and Virginia\'s confiscation statutes. The legal question of Supreme Court jurisdiction was resolved purely through constitutional text, structure, and the history of the constitutional convention. Justice Story\'s analysis demonstrated that the original grant predated Virginia statehood and that subsequent treaty provisions protected British subjects\' property rights, but the more consequential evidence was the Virginia Court of Appeals\' own written opinion refusing to comply — which served as concrete proof of the need for federal appellate supremacy.',
    alternativeOutcomes: 'Had the Court accepted Virginia\'s coordinate-sovereignty theory, each state\'s highest court would have been the final arbiter of federal questions within its borders, leading to fifty different interpretations of the Constitution and federal law. Treaties and federal statutes would have no uniform national meaning. Had Congress not enacted Section 25 in the Judiciary Act of 1789, or had the Court struck it down, the constitutional design would have required Congress to create some alternative mechanism for national legal uniformity, likely through a mandatory lower federal court system covering every state.',
    lessonsLearned: [
      'The Supreme Court\'s appellate authority over state courts on federal questions is constitutionally grounded, not merely statutory',
      'State courts are bound by Supreme Court interpretations of federal law regardless of their own views',
      'National uniformity in federal law depends on a single supreme appellate court',
      'A state court\'s refusal to comply with a Supreme Court mandate is itself a reviewable federal question',
      'The judicial hierarchy established by the Constitution was designed to prevent legal fragmentation across states'
    ],
    bestPractices: [
      'Practitioners must understand that state court decisions on federal questions are reviewable by certiorari to the Supreme Court',
      'When litigating treaty or federal statutory rights in state court, preserve the federal question for Supreme Court review',
      'State court judges are obligated to follow Supreme Court precedent on federal questions even if they personally disagree',
      'The procedural vehicle for Supreme Court review of state court judgments is a petition for certiorari under 28 U.S.C. § 1257',
      'Identifying whether a claim arises under federal law is essential to understanding which court has final authority'
    ],
    significance: 'Martin v. Hunter\'s Lessee is the indispensable companion to Marbury v. Madison in understanding the federal court hierarchy. While Marbury established the Supreme Court\'s authority over the other branches of the federal government, Martin established its authority over state courts on federal questions. The decision resolved the most dangerous potential gap in the constitutional design: without appellate supervision of state courts, the Supremacy Clause would have been a dead letter. The case teaches that the judicial hierarchy is not just a matter of federal court levels — it extends downward into the state court systems whenever federal law is at issue. Justice Story\'s reasoning remains the definitive constitutional basis for the writ of certiorari from state courts and for the entire body of Supreme Court precedent that state courts are required to follow.',
    outcome: 'Plaintiff Victory (Supreme Court jurisdiction affirmed; state court ordered to comply)',
    isFeatured: false,
    parties: [
      {
        name: 'Denny Martin',
        role: 'PLAINTIFF',
        counsel: 'Walter Jones and Charles Lee',
        description: 'British subject and heir of Lord Fairfax, claiming title to Virginia land under royal grant and treaty protections'
      },
      {
        name: 'David Hunter',
        role: 'DEFENDANT',
        counsel: 'Philip Barbour',
        description: 'Virginia claimant asserting title through a state grant of the confiscated Fairfax lands'
      }
    ]
  },
  {
    litigationSlug: 'court-hierarchy',
    name: 'Cooper v. Aaron',
    citation: '358 U.S. 1 (1958)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1958,
    facts: 'Following the Supreme Court\'s landmark decision in Brown v. Board of Education (1954 and 1955), the Little Rock, Arkansas school board adopted a plan to begin desegregating Central High School in the fall of 1957. Arkansas Governor Orval Faubus ordered the state National Guard to prevent Black students from entering Central High School. After a federal district court ordered the National Guard withdrawn, a mob formed and violence broke out, prompting President Eisenhower to federalize the Arkansas National Guard and deploy the 101st Airborne Division to enforce the integration order. Facing continued disorder, the school board petitioned the district court to suspend the desegregation plan for two and a half years. The district court granted the suspension, but the Eighth Circuit reversed. The school board petitioned the Supreme Court, which convened a special term in August 1958 to hear the case. Arkansas officials, including the Governor and state legislature, had passed laws purporting to nullify Brown and released statements asserting that they were not bound by the Supreme Court\'s constitutional interpretations.',
    keyLegalIssues: [
      'Whether state officials are bound by the Supreme Court\'s constitutional interpretations under the Supremacy Clause',
      'Whether a school board may suspend a desegregation plan due to community hostility and state government opposition',
      'Whether state legislators and governors may nullify Supreme Court decisions',
      'Whether the constitutional rights of students are subordinate to administrative difficulties caused by state-fomented resistance',
      'Whether the Supreme Court\'s interpretation of the Constitution binds all state and local officials'
    ],
    plaintiffArguments: 'The school board argued that the violent community resistance and official state opposition created administrative chaos that made it impossible to safely operate an integrated school. It contended that a temporary suspension of the desegregation plan was necessary to restore order and would not permanently abandon the students\' rights. The board maintained that it was acting in good faith and that the extraordinary circumstances — including the Governor\'s direct interference — constituted compelling reasons to delay implementation of the federal court\'s order.',
    defendantArguments: 'The Black student plaintiffs, represented by Thurgood Marshall and the NAACP Legal Defense Fund, argued that their constitutional rights could not be suspended merely because state officials chose to resist federal law. They contended that allowing community hostility to delay desegregation would reward unlawful defiance and encourage other states to manufacture similar crises. The plaintiffs argued that the Supremacy Clause makes the Constitution and the Supreme Court\'s interpretation of it binding on all state officials without exception, and that a temporary suspension was functionally a capitulation to unconstitutional segregation.',
    proceduralHistory: 'The Little Rock school board filed suit in the Eastern District of Arkansas seeking suspension of its court-approved desegregation plan. Judge Lemley granted the suspension in June 1958. The Eighth Circuit Court of Appeals reversed in August 1958. The Supreme Court convened a special term and granted certiorari. In a highly unusual procedural move, the opinion was signed individually by all nine Justices — including three newly appointed ones — to emphasize the Court\'s unanimity and institutional weight. The Court affirmed the Eighth Circuit\'s reversal and ordered the desegregation plan to proceed.',
    finalDecision: 'The Supreme Court unanimously and emphatically affirmed the Eighth Circuit, holding that the school board\'s desegregation plan must proceed without suspension. The Court declared that the constitutional rights of the Black students could not be sacrificed or yielded to violence and disorder engineered by state officials, and that the federal judiciary\'s interpretation of the Constitution is the supreme law of the land binding on all state and local officials.',
    judicialReasoning: 'Cooper v. Aaron produced one of the most forceful statements in history about the binding nature of Supreme Court precedent and the hierarchy of legal authority in the American system. The Court invoked Marbury v. Madison\'s principle that it is "emphatically the province and duty of the judicial department to say what the law is," and extended it to bind every state official under oath to support the Constitution. The Court held that the constitutional rights of students could not be subordinated to the administrative difficulties flowing from the Governor\'s own unlawful actions — the state could not benefit from the disorder it created. Critically, the Court stated that under the Supremacy Clause and Article VI, "the interpretation of the Fourteenth Amendment enunciated by this Court in the Brown case is the supreme law of the land," binding on state governors and legislators. This articulated a principle of vertical precedent with teeth: lower courts and state officials must follow Supreme Court interpretations of the Constitution, and community or political resistance is no excuse for non-compliance.',
    legalStandards: [
      'Supreme Court interpretations of the Constitution constitute the supreme law of the land under the Supremacy Clause',
      'All state officials are bound by Supreme Court constitutional interpretations by virtue of their oaths of office',
      'Constitutional rights cannot be suspended because of disorder manufactured by state officials resisting federal law',
      'The doctrine of nullification — state authority to void Supreme Court decisions — is constitutionally impermissible',
      'Federal courts may enjoin state officials to comply with constitutional mandates regardless of political opposition'
    ],
    keyPrecedents: [
      'Brown v. Board of Education, 347 U.S. 483 (1954) and 349 U.S. 294 (1955)',
      'Marbury v. Madison, 5 U.S. 137 (1803)',
      'Martin v. Hunter\'s Lessee, 14 U.S. 304 (1816)',
      'McCulloch v. Maryland, 17 U.S. 316 (1819)',
      'Supremacy Clause, Article VI of the U.S. Constitution'
    ],
    evidenceAnalysis: 'The factual record was largely undisputed: the school board had adopted a valid desegregation plan, state officials had actively obstructed its implementation, violence had ensued, and federal military force had been required. The district court\'s findings about administrative difficulties were accepted as accurate but deemed legally irrelevant: the source of those difficulties was unlawful state resistance, which could not justify suspending the constitutional rights of the students. The Court treated the Governor\'s own proclamations and the legislature\'s nullification statutes as evidence of the unconstitutional defiance it was addressing.',
    alternativeOutcomes: 'Had the Court permitted the suspension of the desegregation plan, it would have effectively endorsed the proposition that sufficiently determined state resistance could render Supreme Court decisions unenforceable. Other states pursuing "massive resistance" strategies would have been emboldened. The principle that compliance with constitutional mandates is optional when politically inconvenient could have permanently crippled the federal court system\'s ability to enforce civil rights. Alternatively, had the Court framed its holding more narrowly on the specific facts, the broader declaration about the binding nature of Supreme Court precedent — the aspect most relevant to court hierarchy — might not have emerged as clearly.',
    lessonsLearned: [
      'Supreme Court constitutional interpretations are mandatory, not advisory, for all state and local officials',
      'The doctrine of interposition and nullification has been definitively rejected by the Supreme Court',
      'Courts will not reward state-manufactured disorder as grounds for suspending constitutional rights',
      'The unanimity and individual signatures of all nine Justices signaled the institutional weight the Court attached to the hierarchy question',
      'Federal courts have equitable power to enjoin state officials and enforce constitutional mandates over political opposition'
    ],
    bestPractices: [
      'Practitioners advising government clients must counsel strict compliance with Supreme Court constitutional rulings regardless of political disagreement',
      'Citing Cooper v. Aaron when opposing motions to delay court-ordered remedies based on community resistance or administrative difficulty',
      'Understanding that Supreme Court precedent on constitutional questions binds all courts below and all state actors',
      'Recognizing that contempt proceedings are available against state officials who defy federal court orders',
      'Appellate attorneys should use Cooper v. Aaron to reinforce the non-negotiable nature of vertical stare decisis'
    ],
    significance: 'Cooper v. Aaron is the definitive statement on the supremacy and binding force of Supreme Court precedent within the court hierarchy. While Marbury established that the Court interprets the Constitution, Cooper established that those interpretations are mandatory law for every official in the country. The case directly confronted — and buried — the theory of nullification, the idea that state governments could simply disregard Supreme Court decisions they found objectionable. For students of court structure, the case illustrates the vertical dimension of the judicial hierarchy: Supreme Court decisions flow downward with binding force through all inferior federal courts and extend horizontally to bind state courts and state officials on constitutional questions. The unusual step of having all nine Justices sign the opinion was itself a lesson in institutional authority — the Court was showing that its hierarchical supremacy was not the position of any one Justice but of the institution as a whole.',
    outcome: 'Defendant Victory (desegregation ordered to proceed without suspension)',
    isFeatured: false,
    parties: [
      {
        name: 'William G. Cooper (Little Rock School Board)',
        role: 'PLAINTIFF',
        counsel: 'Richard C. Butler',
        description: 'President of the Little Rock School Board seeking suspension of the court-approved desegregation plan'
      },
      {
        name: 'John Aaron (and other Black students)',
        role: 'DEFENDANT',
        counsel: 'Thurgood Marshall and Wiley Branton (NAACP Legal Defense Fund)',
        description: 'Black students seeking to enforce their constitutional right to attend desegregated schools'
      }
    ]
  },
  {
    litigationSlug: 'court-hierarchy',
    name: 'Ex parte McCardle',
    citation: '74 U.S. (7 Wall.) 506 (1869)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1869,
    facts: 'William McCardle was a newspaper editor in Mississippi who was arrested in 1867 by military authorities during Reconstruction and held for trial before a military commission for publishing articles alleged to be inflammatory and incendiary. McCardle sought a writ of habeas corpus from the federal Circuit Court, which denied relief. He appealed to the Supreme Court under an 1867 Act of Congress that had broadly expanded federal habeas corpus jurisdiction and expressly allowed appeals to the Supreme Court. After the Supreme Court heard oral arguments, Congress — fearing the Court might use the case to strike down military Reconstruction as unconstitutional — passed a statute in March 1868 stripping the Court of jurisdiction to hear or decide appeals in habeas cases brought under the 1867 Act. President Johnson vetoed the bill but Congress overrode the veto. The Supreme Court was left to decide whether it retained jurisdiction over a case already argued before it, or whether Congress could constitutionally withdraw appellate jurisdiction mid-proceeding.',
    keyLegalIssues: [
      'Whether Congress may withdraw the Supreme Court\'s appellate jurisdiction over a case already submitted for decision',
      'The scope of Congress\'s power under the Exceptions Clause of Article III to limit Supreme Court appellate jurisdiction',
      'Whether withdrawal of jurisdiction while a case is pending violates due process or separation of powers',
      'Whether military commission trials of civilians in areas where civil courts are open are constitutional',
      'The relationship between congressional power over jurisdiction and judicial independence'
    ],
    plaintiffArguments: 'McCardle argued that his detention by military commission was unlawful because the civil courts in Mississippi were open and functioning, making trial by military tribunal unconstitutional under Ex parte Milligan (1866). He contended that Congress could not retroactively strip the Court of jurisdiction over a case already argued, as doing so violated principles of judicial independence and due process. McCardle further argued that the Exceptions Clause of Article III did not permit Congress to manipulate jurisdiction to prevent the Court from protecting individual constitutional rights.',
    defendantArguments: 'The government argued that Article III\'s Exceptions Clause grants Congress plenary power to define and limit the Supreme Court\'s appellate jurisdiction, subject only to the outer limits of that clause. The government contended that Congress\'s repeal of the 1867 Act\'s appeal provision was a valid exercise of this power and that the Court was required to give effect to the repeal even though the case was pending. The government also argued that military authority in the Reconstruction South was constitutionally valid as an exercise of Congress\'s war powers and the power to enforce the Thirteenth Amendment.',
    proceduralHistory: 'McCardle was arrested in November 1867. The Circuit Court denied his habeas petition in December 1867. McCardle appealed to the Supreme Court under the 1867 Act. The Court heard arguments in March 1868. Before the Court decided, Congress passed the jurisdiction-stripping statute on March 27, 1868, over the President\'s veto. The Supreme Court held a subsequent argument on the effect of the repeal statute and ultimately dismissed for want of jurisdiction in April 1869. The merits of the military commission\'s authority were never decided.',
    finalDecision: 'The Supreme Court unanimously dismissed the case for want of jurisdiction, holding that Congress had validly repealed its appellate jurisdiction under the 1867 Act and that the Court had no power to proceed to the merits once that jurisdiction was withdrawn. Chief Justice Chase\'s opinion acknowledged the breadth of congressional control over appellate jurisdiction while noting that the Court retained other avenues for habeas jurisdiction not affected by the repeal.',
    judicialReasoning: 'The Court\'s opinion provides the clearest illustration of the constitutional limits of the federal judicial hierarchy from above: Congress controls the Supreme Court\'s appellate jurisdiction. Chief Justice Chase acknowledged that appellate jurisdiction is given by the Constitution, but "with such exceptions and under such regulations as the Congress shall make." The Court held that this Exceptions Clause gives Congress virtually plenary authority to define, limit, and withdraw the Court\'s appellate jurisdiction. When Congress repeals a jurisdictional grant, courts must stop even if the case is fully submitted. Chase noted carefully, however, that the 1868 repeal did not affect other sources of habeas jurisdiction, suggesting implicit limits on Congress\'s power to eliminate jurisdiction entirely over a constitutional right. The case thus illustrates that while the Court sits at the apex of the judicial hierarchy in terms of precedent, Congress occupies a structural position of control over the dimensions of that apex through its jurisdiction-regulating power.',
    legalStandards: [
      'The Exceptions Clause of Article III gives Congress broad power to limit Supreme Court appellate jurisdiction',
      'Congressional withdrawal of appellate jurisdiction is effective even as to pending cases',
      'Courts must dismiss for want of jurisdiction when Congress has validly repealed their jurisdictional authority',
      'Congress may use jurisdiction-stripping as a political tool to limit judicial review of its acts',
      'The Supreme Court may retain jurisdiction from other statutory or constitutional sources not affected by a repeal'
    ],
    keyPrecedents: [
      'Ex parte Milligan, 71 U.S. 2 (1866) (military commissions for civilians where civil courts are open)',
      'Article III, Section 2, Clause 2 (Exceptions Clause)',
      'Marbury v. Madison, 5 U.S. 137 (1803)',
      'United States v. Klein, 80 U.S. 128 (1872) (limits on congressional control of court judgments)',
      'Judiciary Act of 1867 (the statute whose appeal provision was repealed)'
    ],
    evidenceAnalysis: 'The relevant evidence was legal and statutory: the text of the 1867 Habeas Corpus Act, the text and legislative history of the 1868 repeal statute, and the procedural record establishing that the case was fully argued before the repeal. The Court did not reach the factual merits of McCardle\'s detention. The legislative record showed that Congress specifically targeted the pending case, a circumstance that has led later scholars to question whether the case was correctly decided or whether targeted jurisdiction-stripping to prevent a decision violates separation of powers.',
    alternativeOutcomes: 'Had the Court asserted jurisdiction and decided the merits, it might have struck down key features of Reconstruction, creating a major constitutional crisis and potentially invalidating military occupation of the South. Had the Court held that Congress cannot strip jurisdiction over a pending case, the Exceptions Clause would have been significantly narrowed and congressional power to manage the federal docket would have been curtailed. A holding that targeted jurisdiction-stripping to prevent a specific decision is unconstitutional — suggested by the later case of United States v. Klein — would have created a meaningful check on Congress\'s use of jurisdiction as a political weapon.',
    lessonsLearned: [
      'Congress has broad authority to define and limit the Supreme Court\'s appellate jurisdiction under the Exceptions Clause',
      'Jurisdiction-stripping is a powerful political tool that can effectively remove courts from deciding controversial questions',
      'Courts must take jurisdictional questions seriously and cannot exercise jurisdiction Congress has validly withdrawn',
      'The judicial hierarchy is not purely vertical; it is also subject to horizontal constraints imposed by the legislature',
      'Pending litigation provides no protection against valid congressional repeal of the Court\'s jurisdiction'
    ],
    bestPractices: [
      'Practitioners must verify that jurisdiction-conferring statutes remain in effect throughout the life of a case',
      'When Congress is considering jurisdiction-stripping legislation, litigants should seek to argue their case before any repeal takes effect',
      'Understanding the limits of the Exceptions Clause is essential for appellate strategy involving controversial federal questions',
      'Jurisdictional questions must always be raised at the threshold — courts cannot proceed to the merits without valid jurisdiction',
      'Attorneys should monitor pending legislation that could affect the court\'s authority to hear ongoing matters'
    ],
    significance: 'Ex parte McCardle illustrates one of the most important structural features of the federal court hierarchy: while the Supreme Court sits at the apex, Congress sits above it in the sense that it controls the dimensions of the Court\'s appellate jurisdiction. The Exceptions Clause is a genuine constitutional limit on judicial supremacy, allowing the political branches to channel — and theoretically foreclose — judicial review of particular categories of cases. The case is essential for understanding that the court hierarchy is not just about the relationship between courts but about the relationship between courts and the other branches of government. Modern debates about congressional jurisdiction-stripping — whether over immigration, school prayer, or other issues — all trace back to McCardle\'s holding that Congress may make "exceptions" to Supreme Court appellate jurisdiction, a power the Court declined to limit even when used in the most transparently political manner.',
    outcome: 'Defendant Victory (case dismissed for lack of jurisdiction)',
    isFeatured: false,
    parties: [
      {
        name: 'William H. McCardle',
        role: 'PLAINTIFF',
        counsel: 'Jeremiah S. Black and David Dudley Field',
        description: 'Mississippi newspaper editor held by military commission for publishing allegedly inflammatory articles during Reconstruction'
      },
      {
        name: 'United States (Military Authorities)',
        role: 'DEFENDANT',
        counsel: 'Matthew H. Carpenter and Lyman Trumbull',
        description: 'Federal military authorities asserting authority to try civilians before military commissions in the Reconstruction South'
      }
    ]
  },
  {
    litigationSlug: 'court-hierarchy',
    name: 'Erie Railroad Co. v. Tompkins',
    citation: '304 U.S. 64 (1938)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1938,
    facts: 'Harry Tompkins, a citizen of Pennsylvania, was walking along a path beside the Erie Railroad tracks in Pennsylvania at night when he was struck by an object protruding from a passing Erie Railroad train. Tompkins lost his right arm in the accident. Because Tompkins was a Pennsylvania citizen and the Erie Railroad was incorporated in New York, Tompkins brought a diversity of citizenship action in federal district court in New York rather than in Pennsylvania state court, strategically seeking to avoid the harsher Pennsylvania common law rule that treated him as a trespasser. Under the prevailing federal common law established by Swift v. Tyson (1842), federal courts in diversity cases applied federal general common law rather than state common law, which often produced results more favorable to plaintiffs. The key issue was whether federal courts were required to apply Pennsylvania\'s common law rules about the duty of care owed to persons walking beside railroad tracks, or whether they could apply a more favorable general federal common law standard.',
    keyLegalIssues: [
      'Whether federal courts sitting in diversity must apply the substantive common law of the state in which they sit',
      'Whether Swift v. Tyson\'s doctrine of federal general common law is constitutionally permissible',
      'Whether the Rules of Decision Act, 28 U.S.C. § 1652, requires federal courts to apply state law in diversity cases',
      'Whether the existence of federal general common law creates unconstitutional forum shopping advantages in diversity cases',
      'The proper boundary between federal judicial power and state sovereignty in diversity jurisdiction'
    ],
    plaintiffArguments: 'Tompkins argued that under Swift v. Tyson\'s federal general common law, federal courts in diversity cases were free to apply a general common law rule that imposed a duty of reasonable care on the railroad, regardless of Pennsylvania\'s more restrictive rule treating him as a trespasser or licensee. He contended that federal general common law recognized a duty of care that the railroad had breached, entitling him to damages. Tompkins argued that Swift v. Tyson had been the established rule for nearly a century and should be followed as settled precedent.',
    defendantArguments: 'Erie Railroad argued that under Pennsylvania common law, Tompkins was a trespasser or at most a licensee to whom the railroad owed only a duty to refrain from wanton or willful injury. It contended that Pennsylvania\'s own courts had consistently applied this restrictive rule and that a federal court sitting in diversity should apply state law rather than a judge-made federal common law. Erie argued that the outcome of a case should not depend on whether it is brought in federal or state court, and that Swift v. Tyson created unjustifiable inequities and forum shopping.',
    proceduralHistory: 'Tompkins filed in the Southern District of New York. The district court applied federal general common law under Swift v. Tyson and ruled in Tompkins\'s favor. The Second Circuit affirmed. The Supreme Court granted certiorari. In a remarkable step, the Court raised the constitutionality of Swift v. Tyson sua sponte — the parties had not challenged the doctrine — and overruled it after nearly a century of application. Justice Brandeis wrote the majority opinion. Justice Butler dissented on procedural grounds, arguing the Court should not have reached the constitutional question.',
    finalDecision: 'The Supreme Court overruled Swift v. Tyson and held that in diversity cases, federal courts must apply the substantive law of the state in which they sit, including that state\'s common law as declared by its highest court. The Court held that there is no general federal common law and that federal courts have no power to declare substantive common law rules governing state-law disputes. The case was remanded for application of Pennsylvania law.',
    judicialReasoning: 'Justice Brandeis\'s opinion established the foundational rule for the relationship between federal and state law in the federal court hierarchy. The Court held that Swift v. Tyson\'s assumption that there exists a transcendental federal common law independent of any state was not only incorrect but unconstitutional. The Constitution, Brandeis wrote, grants federal courts no power to create substantive common law for state-law matters; that power belongs to the states. Allowing federal courts to apply a different common law than state courts created two injustices: it discriminated against citizens of the forum state who could not access federal court, and it invited non-residents to forum-shop into federal court to obtain more favorable law. The Erie doctrine thus reflects the constitutional design of dual sovereignty: federal courts in diversity are guests in the states\' substantive law domain, applying state law as the states\' own courts would. This delineates a crucial boundary in the court hierarchy — federal courts are not universally superior to state law; they are required to defer to state substantive law in diversity cases while applying federal procedural law.',
    legalStandards: [
      'Federal courts in diversity cases must apply the substantive law of the forum state, including its common law',
      'There is no general federal common law governing state-law disputes',
      'The Rules of Decision Act, 28 U.S.C. § 1652, requires application of state law as the rule of decision in diversity cases',
      'Federal procedural law (Federal Rules of Civil Procedure) governs procedure even in diversity cases (Hanna v. Plumer)',
      'Swift v. Tyson, 41 U.S. 1 (1842), is overruled'
    ],
    keyPrecedents: [
      'Swift v. Tyson, 41 U.S. (16 Pet.) 1 (1842) (overruled)',
      'Rules of Decision Act, 28 U.S.C. § 1652',
      'Hanna v. Plumer, 380 U.S. 460 (1965) (Erie doctrine and Federal Rules of Civil Procedure)',
      'Guaranty Trust Co. v. York, 326 U.S. 99 (1945) (outcome-determinative test for Erie)',
      'Article III, Section 2 (diversity jurisdiction)'
    ],
    evidenceAnalysis: 'The factual record included evidence of the physical circumstances of Tompkins\'s injury — the path beside the tracks, the manner in which he was struck, and the nature of his injuries — all of which bore on whether he was a trespasser, licensee, or invitee under the applicable common law. However, the dispositive legal question was which common law to apply. The Court\'s analysis of the inequities of Swift v. Tyson drew on empirical observations about forum shopping and disparate outcomes for in-state versus out-of-state litigants. Justice Brandeis cited scholarly work by Charles Warren establishing that the original intent of the Rules of Decision Act was to include state common law, not merely state statutes.',
    alternativeOutcomes: 'Had the Court retained Swift v. Tyson, federal courts would have continued to develop a separate body of federal common law in diversity cases, creating parallel legal systems with different rules for the same state-law disputes depending on whether the plaintiff could access federal court. The inequity and forum shopping that Erie condemned would have persisted and likely grown. Alternatively, had Congress codified the Swift doctrine by statute, the constitutional question might have been deferred, though the structural argument against federal common law would remain. If the Court had held Swift v. Tyson unconstitutional but limited the ruling to the negligence context, the Erie doctrine\'s broad reach across all diversity cases might not have developed.',
    lessonsLearned: [
      'Federal courts in diversity are not superior to state law — they must apply state substantive law as if they were state courts',
      'The structure of the court system includes not just a hierarchy of courts but a division between federal and state law',
      'Forum shopping between federal and state court should not produce different substantive outcomes in state-law cases',
      'Long-standing Supreme Court precedents can be overruled when their constitutional foundations are found to be flawed',
      'The Erie doctrine requires lawyers to conduct choice-of-law analysis at the outset of every diversity case'
    ],
    bestPractices: [
      'In every diversity case, conduct a thorough Erie analysis to identify which state\'s substantive law applies',
      'Distinguish carefully between substantive law (state) and procedural law (federal) in diversity litigation',
      'Research the forum state\'s highest court decisions on any common law issue that is outcome-determinative',
      'When state law is unclear, predict how the state\'s highest court would rule rather than applying federal common law',
      'Understand that choice of federal versus state court in diversity cases affects procedural rules but not substantive rights'
    ],
    significance: 'Erie Railroad Co. v. Tompkins is essential for understanding a dimension of the court hierarchy that goes beyond vertical precedent: the horizontal division of authority between federal and state law. The case establishes that federal courts, despite sitting at a higher rung in the hierarchical ladder for federal questions, are required to defer to state law for state-law disputes resolved through diversity jurisdiction. Erie thus illustrates that the American court system is not a simple pyramid with the Supreme Court at the top of everything; it is a dual system in which federal and state law occupy distinct but coordinated domains. The decision eliminated the ability of litigants to obtain different substantive law simply by choosing federal court over state court, enforcing a principle of rough equality between the two systems for state-law disputes. For practitioners, Erie is the mandatory starting point for any diversity case and a constant reminder that jurisdictional choice does not mean substantive law choice.',
    outcome: 'Defendant Victory (Pennsylvania law applied; case remanded)',
    isFeatured: false,
    parties: [
      {
        name: 'Erie Railroad Company',
        role: 'DEFENDANT',
        counsel: 'Frederick H. Wood',
        description: 'New York-incorporated railroad whose train struck Tompkins along a Pennsylvania track right-of-way'
      },
      {
        name: 'Harry J. Tompkins',
        role: 'PLAINTIFF',
        counsel: 'Bernard Nemeroff',
        description: 'Pennsylvania citizen who lost his right arm when struck by an object protruding from a passing Erie Railroad train'
      }
    ]
  }
];

export default cases;
