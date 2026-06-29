import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Procedural Due Process',
    definition:
      'A constitutional guarantee under the Fifth and Fourteenth Amendments requiring that the government follow fair procedures before depriving a person of life, liberty, or property. Courts assess what process is due by balancing the private interest at stake, the risk of erroneous deprivation, and the government\'s interest.',
    category: 'Constitutional & Administrative',
    example:
      'A public employee facing termination is entitled to notice of the charges and an opportunity to be heard before dismissal.',
    relatedTerms: ['Substantive Due Process', 'Fifth Amendment', 'Fourteenth Amendment', 'Notice and Hearing'],
  },
  {
    term: 'Substantive Due Process',
    definition:
      'A constitutional doctrine holding that certain fundamental rights are protected from government interference regardless of the procedures used. Courts apply heightened scrutiny when the government infringes on rights deemed fundamental to ordered liberty.',
    category: 'Constitutional & Administrative',
    example:
      'The Supreme Court relied on substantive due process to recognize a constitutional right to privacy in Griswold v. Connecticut.',
    relatedTerms: ['Procedural Due Process', 'Fundamental Rights', 'Strict Scrutiny', 'Fourteenth Amendment'],
  },
  {
    term: 'Equal Protection',
    definition:
      'The guarantee in the Fourteenth Amendment\'s Equal Protection Clause that similarly situated persons be treated alike under the law. The level of judicial scrutiny applied depends on the classification used and the rights affected.',
    category: 'Constitutional & Administrative',
    example:
      'A state law that provides different criminal penalties based solely on the defendant\'s race would violate equal protection.',
    relatedTerms: ['Strict Scrutiny', 'Intermediate Scrutiny', 'Rational Basis', 'Fourteenth Amendment'],
  },
  {
    term: 'Strict Scrutiny',
    definition:
      'The most demanding standard of judicial review, applied when a law targets a suspect classification (such as race or national origin) or burdens a fundamental right. The government must show the law is narrowly tailored to serve a compelling government interest.',
    category: 'Constitutional & Administrative',
    example:
      'Affirmative action programs in university admissions are evaluated under strict scrutiny because they involve racial classifications.',
    relatedTerms: ['Intermediate Scrutiny', 'Rational Basis', 'Equal Protection', 'Fundamental Rights'],
  },
  {
    term: 'Intermediate Scrutiny',
    definition:
      'A mid-level standard of judicial review applied to laws that discriminate on the basis of sex or legitimacy. The government must show the law is substantially related to an important government interest.',
    category: 'Constitutional & Administrative',
    example:
      'A state law providing different benefits to men and women in the military would be evaluated under intermediate scrutiny.',
    relatedTerms: ['Strict Scrutiny', 'Rational Basis', 'Equal Protection', 'Gender Discrimination'],
  },
  {
    term: 'Rational Basis Review',
    definition:
      'The most deferential standard of judicial review, used when no suspect class or fundamental right is involved. The law need only be rationally related to a legitimate government interest; it is presumed constitutional.',
    category: 'Constitutional & Administrative',
    example:
      'Economic regulations such as licensing requirements for professions are typically upheld under rational basis review.',
    relatedTerms: ['Strict Scrutiny', 'Intermediate Scrutiny', 'Equal Protection', 'Substantive Due Process'],
  },
  {
    term: 'Judicial Review',
    definition:
      'The power of federal courts to examine legislation and executive actions to determine whether they conform to the Constitution, and to invalidate those that do not. Established by the Supreme Court in Marbury v. Madison (1803).',
    category: 'Constitutional & Administrative',
    example:
      'The Supreme Court exercised judicial review in striking down a federal statute that exceeded Congress\'s Commerce Clause authority in United States v. Lopez.',
    relatedTerms: ['Separation of Powers', 'Constitutional Supremacy', 'Marbury v. Madison', 'Supremacy Clause'],
  },
  {
    term: 'Separation of Powers',
    definition:
      'The constitutional design dividing federal government authority among three branches—legislative, executive, and judicial—each with distinct functions and checks on the others to prevent any single branch from accumulating excessive power.',
    category: 'Constitutional & Administrative',
    example:
      'Congress may pass laws, but the President may veto them, and the courts may strike them down as unconstitutional.',
    relatedTerms: ['Checks and Balances', 'Judicial Review', 'Non-Delegation Doctrine', 'Executive Power'],
  },
  {
    term: 'Federalism',
    definition:
      'The constitutional system dividing governmental power between the national government and the states, with each having sovereignty in its own sphere. The Tenth Amendment reserves powers not delegated to the federal government to the states or the people.',
    category: 'Constitutional & Administrative',
    example:
      'States retain authority to regulate intrastate commerce and to pass criminal laws, absent a conflicting federal statute.',
    relatedTerms: ['Supremacy Clause', 'Commerce Clause', 'Tenth Amendment', 'Preemption'],
  },
  {
    term: 'Commerce Clause',
    definition:
      'Article I, Section 8 of the Constitution grants Congress the power to regulate commerce with foreign nations, among the several states, and with Indian tribes. It serves as the primary constitutional basis for broad federal regulatory power over economic activity.',
    category: 'Constitutional & Administrative',
    example:
      'Congress relied on the Commerce Clause to enact the Civil Rights Act of 1964, prohibiting discrimination by businesses affecting interstate commerce.',
    relatedTerms: ['Federalism', 'Supremacy Clause', 'Dormant Commerce Clause', 'Necessary and Proper Clause'],
  },
  {
    term: 'Supremacy Clause',
    definition:
      'Article VI of the Constitution declares federal law the supreme law of the land, meaning state laws that conflict with valid federal law are preempted and therefore invalid.',
    category: 'Constitutional & Administrative',
    example:
      'A state law permitting a practice that federal environmental law prohibits is invalid under the Supremacy Clause.',
    relatedTerms: ['Preemption', 'Federalism', 'Commerce Clause', 'Judicial Review'],
  },
  {
    term: 'Incorporation Doctrine',
    definition:
      'The judicial doctrine by which the Due Process Clause of the Fourteenth Amendment applies most provisions of the Bill of Rights to the states. Courts have selectively incorporated nearly all Bill of Rights protections against state action.',
    category: 'Constitutional & Administrative',
    example:
      'Through incorporation, the First Amendment\'s free speech protections apply to state and local governments, not only the federal government.',
    relatedTerms: ['Due Process', 'Bill of Rights', 'Fourteenth Amendment', 'State Action'],
  },
  {
    term: 'State Action Doctrine',
    definition:
      'The constitutional principle that the protections of the Fourteenth Amendment and the Bill of Rights apply only to actions by government entities or officials, not purely private conduct, unless private actors perform a public function or are sufficiently entangled with the state.',
    category: 'Constitutional & Administrative',
    example:
      'A private employer\'s discriminatory hiring policy does not violate the Fourteenth Amendment because there is no state action, though it may violate federal statutes.',
    relatedTerms: ['Incorporation Doctrine', 'Fourteenth Amendment', 'Public Function Doctrine', 'Equal Protection'],
  },
  {
    term: 'First Amendment',
    definition:
      'The constitutional amendment prohibiting Congress—and through incorporation, the states—from abridging freedom of speech, the press, religion, assembly, and petition. It includes the Establishment Clause and Free Exercise Clause regarding religion.',
    category: 'Constitutional & Administrative',
    example:
      'A city ordinance barring peaceful protest in a public park is subject to First Amendment scrutiny as a restriction on speech in a traditional public forum.',
    relatedTerms: ['Free Speech', 'Establishment Clause', 'Free Exercise Clause', 'Incorporation Doctrine'],
  },
  {
    term: 'Fourth Amendment',
    definition:
      'The constitutional amendment protecting persons from unreasonable searches and seizures and requiring probable cause supported by oath or affirmation for the issuance of warrants. Evidence obtained in violation of the Fourth Amendment may be suppressed under the exclusionary rule.',
    category: 'Constitutional & Administrative',
    example:
      'Police who search a home without a warrant and without an applicable exception violate the homeowner\'s Fourth Amendment rights.',
    relatedTerms: ['Exclusionary Rule', 'Probable Cause', 'Warrant Requirement', 'Fifth Amendment'],
  },
  {
    term: 'Fifth Amendment',
    definition:
      'The constitutional amendment providing several protections: the right to a grand jury in federal felony cases, protection against double jeopardy, the privilege against self-incrimination, due process of law, and just compensation when private property is taken for public use.',
    category: 'Constitutional & Administrative',
    example:
      'A defendant who invokes the Fifth Amendment during trial cannot have that silence used against them by the prosecution.',
    relatedTerms: ['Self-Incrimination', 'Takings Clause', 'Double Jeopardy', 'Procedural Due Process'],
  },
  {
    term: 'Qualified Immunity',
    definition:
      'A judicial doctrine shielding government officials from civil liability unless their conduct violated a clearly established statutory or constitutional right that a reasonable person would have known. It is a defense in Section 1983 civil rights suits against state officers.',
    category: 'Constitutional & Administrative',
    example:
      'A police officer sued for excessive force may raise qualified immunity if no prior case clearly established that the specific conduct was unlawful under the circumstances.',
    relatedTerms: ['Sovereign Immunity', 'Section 1983', 'Absolute Immunity', 'Civil Rights Litigation'],
  },
  {
    term: 'Sovereign Immunity',
    definition:
      'The common-law principle, derived from English law and enshrined in the Eleventh Amendment for states, that a sovereign government cannot be sued without its consent. Congress may waive federal sovereign immunity by statute.',
    category: 'Constitutional & Administrative',
    example:
      'Citizens may sue the federal government for personal injury claims only because Congress waived immunity through the Federal Tort Claims Act.',
    relatedTerms: ['Qualified Immunity', 'Eleventh Amendment', 'Governmental Immunity', 'Section 1983'],
  },
  {
    term: 'Standing',
    definition:
      'A constitutional threshold requirement derived from Article III\'s case-or-controversy limitation, demanding that a plaintiff show (1) an injury in fact, (2) causation linking the injury to the defendant\'s conduct, and (3) redressability by a favorable court decision.',
    category: 'Constitutional & Administrative',
    example:
      'An environmental group cannot sue a polluter on behalf of the general public without showing that its members have suffered a concrete, particularized injury.',
    relatedTerms: ['Ripeness', 'Mootness', 'Justiciability', 'Article III'],
  },
  {
    term: 'Ripeness',
    definition:
      'A justiciability doctrine requiring that a dispute be sufficiently developed and immediate before a court will adjudicate it. Courts examine the hardship to the parties of withholding review and the fitness of the issues for judicial resolution.',
    category: 'Constitutional & Administrative',
    example:
      'A challenge to a regulatory scheme that has not yet been applied to the plaintiff may be dismissed as unripe.',
    relatedTerms: ['Standing', 'Mootness', 'Justiciability', 'Political Question Doctrine'],
  },
  {
    term: 'Mootness',
    definition:
      'A justiciability doctrine that bars federal courts from deciding cases where the controversy has ceased to exist or the parties lack a legally cognizable interest in the outcome. Exceptions exist for issues capable of repetition yet evading review.',
    category: 'Constitutional & Administrative',
    example:
      'A prisoner\'s challenge to detention conditions may become moot upon release, unless the prisoner faces a realistic risk of rearrest.',
    relatedTerms: ['Standing', 'Ripeness', 'Justiciability', 'Article III'],
  },
  {
    term: 'Political Question Doctrine',
    definition:
      'A justiciability doctrine under which federal courts decline to decide certain constitutional questions committed by the Constitution to Congress or the President, or lacking judicially manageable standards for resolution.',
    category: 'Constitutional & Administrative',
    example:
      'Courts have held that challenges to partisan gerrymandering present nonjusticiable political questions beyond federal judicial competence.',
    relatedTerms: ['Standing', 'Justiciability', 'Separation of Powers', 'Judicial Review'],
  },
  {
    term: 'Administrative Agency',
    definition:
      'A governmental body created by a legislature to administer a specific area of law or public policy. Agencies typically exercise legislative (rulemaking), executive (enforcement), and quasi-judicial (adjudicatory) functions within their delegated authority.',
    category: 'Constitutional & Administrative',
    example:
      'The Environmental Protection Agency is an administrative agency charged with implementing and enforcing federal environmental statutes.',
    relatedTerms: ['Rulemaking', 'Administrative Law Judge', 'Delegation Doctrine', 'Chevron Deference'],
  },
  {
    term: 'Rulemaking',
    definition:
      'The process by which administrative agencies promulgate legally binding regulations having the force of law. The Administrative Procedure Act prescribes informal (notice-and-comment) and formal (on-the-record) rulemaking procedures.',
    category: 'Constitutional & Administrative',
    example:
      'The FDA must publish a proposed rule in the Federal Register and allow public comment before finalizing a regulation on drug labeling.',
    relatedTerms: ['Notice-and-Comment', 'Administrative Agency', 'Administrative Procedure Act', 'Chevron Deference'],
  },
  {
    term: 'Notice-and-Comment Rulemaking',
    definition:
      'The informal rulemaking process under Section 553 of the Administrative Procedure Act requiring agencies to publish proposed rules in the Federal Register, solicit public comments, and consider those comments before issuing a final rule.',
    category: 'Constitutional & Administrative',
    example:
      'Before issuing workplace safety standards, OSHA must publish the proposed standard, accept written comments from the public and industry, and respond to significant comments in the final rule.',
    relatedTerms: ['Rulemaking', 'Administrative Procedure Act', 'Final Rule', 'Arbitrary and Capricious'],
  },
  {
    term: 'Chevron Deference',
    definition:
      'A doctrine of administrative law, originating in Chevron U.S.A. v. Natural Resources Defense Council (1984), under which courts defer to a federal agency\'s reasonable interpretation of an ambiguous statute it administers. The Supreme Court overruled Chevron in Loper Bright Enterprises v. Raimondo (2024), returning interpretive primacy to courts.',
    category: 'Constitutional & Administrative',
    example:
      'Under Chevron, courts asked first whether Congress had spoken clearly and, if not, whether the agency\'s interpretation was permissible—a framework now superseded by de novo review.',
    relatedTerms: ['Administrative Agency', 'Rulemaking', 'Arbitrary and Capricious', 'Major Questions Doctrine'],
  },
  {
    term: 'Administrative Law Judge',
    definition:
      'A quasi-judicial officer within a federal or state administrative agency who presides over formal administrative hearings, takes evidence, and issues initial or recommended decisions subject to review by the agency head.',
    category: 'Constitutional & Administrative',
    example:
      'Social Security disability claimants whose initial applications are denied may request a hearing before an Administrative Law Judge within the Social Security Administration.',
    relatedTerms: ['Administrative Agency', 'Exhaustion of Remedies', 'Due Process', 'Adjudication'],
  },
  {
    term: 'Exhaustion of Remedies',
    definition:
      'The doctrine requiring a party to pursue all available administrative remedies before seeking judicial review. Failure to exhaust may result in dismissal of a court action for lack of jurisdiction or ripeness.',
    category: 'Constitutional & Administrative',
    example:
      'A federal employee who believes they were wrongfully terminated must exhaust grievance procedures before filing suit in federal court.',
    relatedTerms: ['Administrative Agency', 'Ripeness', 'Administrative Law Judge', 'Finality Doctrine'],
  },
  {
    term: 'Arbitrary and Capricious',
    definition:
      'The standard of judicial review under Section 706 of the Administrative Procedure Act by which courts set aside agency action that is not rationally connected to the facts in the record, fails to consider relevant factors, or reflects a clear error of judgment.',
    category: 'Constitutional & Administrative',
    example:
      'An agency rule that ignored significant scientific evidence in the rulemaking record may be vacated as arbitrary and capricious.',
    relatedTerms: ['Notice-and-Comment', 'Chevron Deference', 'Administrative Procedure Act', 'Hard Look Review'],
  },
  {
    term: 'Preemption',
    definition:
      'The doctrine, grounded in the Supremacy Clause, under which valid federal law displaces conflicting or inconsistent state law. Preemption may be express (stated in the statute), field (Congress occupies an entire regulatory field), or conflict preemption (compliance with both laws is impossible or state law frustrates federal purpose).',
    category: 'Constitutional & Administrative',
    example:
      'A state law imposing stricter aircraft noise standards was preempted because Congress intended to occupy the field of aviation safety regulation.',
    relatedTerms: ['Supremacy Clause', 'Federalism', 'Commerce Clause', 'Dormant Commerce Clause'],
  },
  {
    term: 'Non-Delegation Doctrine',
    definition:
      'A constitutional principle that Congress may not delegate its core legislative power to administrative agencies without providing an intelligible principle to guide the agency\'s discretion. Courts have rarely applied it to invalidate statutes but it constrains broad delegations of authority.',
    category: 'Constitutional & Administrative',
    example:
      'If a statute authorized an agency to regulate air quality "as it sees fit" with no further guidance, it might violate the non-delegation doctrine.',
    relatedTerms: ['Separation of Powers', 'Administrative Agency', 'Major Questions Doctrine', 'Rulemaking'],
  },
  {
    term: 'Major Questions Doctrine',
    definition:
      'A canon of statutory interpretation holding that courts will not defer to an agency\'s claim of authority to decide questions of vast economic and political significance absent a clear congressional statement granting such power.',
    category: 'Constitutional & Administrative',
    example:
      'In West Virginia v. EPA (2022), the Supreme Court held that the Clean Air Act did not clearly authorize the EPA to regulate carbon emissions through generation-shifting across the energy sector.',
    relatedTerms: ['Chevron Deference', 'Non-Delegation Doctrine', 'Administrative Agency', 'Rulemaking'],
  },
  {
    term: 'Dormant Commerce Clause',
    definition:
      'The implied limitation on state power, derived from the Commerce Clause, prohibiting states from enacting laws that discriminate against or unduly burden interstate commerce even in the absence of federal legislation on the subject.',
    category: 'Constitutional & Administrative',
    example:
      'A state law requiring that all milk sold in the state be processed at in-state facilities discriminates against interstate commerce and is invalid under the dormant Commerce Clause.',
    relatedTerms: ['Commerce Clause', 'Federalism', 'Preemption', 'Market Participant Exception'],
  },
];

export default terms;
