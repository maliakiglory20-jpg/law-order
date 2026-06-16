import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'cybercrime',
    name: 'United States v. Morris',
    citation: '928 F.2d 504 (2d Cir. 1991)',
    jurisdiction: 'Federal – Second Circuit',
    court: 'United States Court of Appeals for the Second Circuit',
    year: 1991,
    isFeatured: true,
    facts:
      'In November 1988, Cornell University graduate student Robert Tappan Morris released a self-replicating program—later called the Morris Worm—from MIT computers onto the ARPANET, then the backbone of the early internet. The worm exploited vulnerabilities in Unix sendmail, fingerd, and rsh/rexec services and a flaw in the gets() function to propagate and execute on remote machines. Due to a programming error, the worm replicated far more aggressively than Morris intended, causing an estimated 6,000 machines—roughly ten percent of the internet at the time—to slow to a halt or become completely unresponsive. Cleanup and remediation costs were estimated between $200 and $53,000 per affected site, with total damages reportedly in the millions of dollars. Morris was the first person prosecuted under the Computer Fraud and Abuse Act of 1986 (CFAA), 18 U.S.C. § 1030.',
    keyLegalIssues: [
      'Scope of 18 U.S.C. § 1030(a)(5) of the CFAA—whether intentional release of a program that causes unintended damage constitutes a criminal offense',
      'Whether the government must prove the defendant intended to prevent authorized access or cause the resulting damage, or only that he intentionally released the program',
      'Definition of "unauthorized access" and "exceeds authorized access" under the CFAA',
      'Appropriate jury instruction on the mens rea element of the statute',
    ],
    plaintiffArguments:
      'The government argued that Morris acted intentionally when he released the worm and that the statute only required proof that he intentionally inserted the code, not that he intended every harmful consequence. Prosecutors presented forensic evidence showing Morris had deliberately crafted exploit code targeting known Unix vulnerabilities and had taken steps to obscure the worm\'s origin by launching it from MIT rather than Cornell. The government contended that the widespread disruption to federal-interest computers satisfied the statutory damage threshold and that Morris\'s attempt to minimize harm after the fact did not negate criminal intent.',
    defendantArguments:
      'Morris\'s defense argued that he lacked the specific intent required by the CFAA because he never intended the worm to cause damage—he designed it as an intellectual exercise to measure the internet\'s size. Defense counsel contended the statute required the government to prove Morris intended to prevent authorized access, not merely that he intentionally released a program. The defense also argued that the trial court\'s jury instruction improperly relieved the government of its burden on the mens rea element, warranting reversal.',
    proceduralHistory:
      'Morris was indicted in 1989 in the Northern District of New York. A jury convicted him in January 1990 after a trial in which the government presented extensive technical testimony about the worm\'s propagation and damage. The district court sentenced Morris to three years of probation, 400 hours of community service, and a $10,050 fine—declining to impose imprisonment. Morris appealed, challenging the jury instruction on intent.',
    finalDecision:
      'The Second Circuit affirmed the conviction in March 1991. The court held that the CFAA did not require the government to prove Morris intended the resulting damage; it was sufficient to show he intentionally released the program. The sentence of probation and community service was upheld.',
    judicialReasoning:
      'The Second Circuit, in an opinion by Judge Jon Newman, parsed the statutory text of 18 U.S.C. § 1030(a)(5) and concluded that the word "intentionally" modified only the act of gaining access without authorization, not the downstream harm caused by the worm. The court reasoned that Congress drafted the CFAA to punish deliberate intrusions into computer systems and that requiring proof of intent to cause damage would undermine the statute\'s protective purpose. The panel found the district court\'s instruction adequately conveyed that the government must prove only that Morris intentionally released the worm knowing it would access computers without authorization. The court also rejected the argument that the worm merely tested vulnerabilities without constituting an access exceeding authorization, noting that exploiting security flaws to execute arbitrary code is paradigmatic unauthorized access.',
    legalStandards: [
      '18 U.S.C. § 1030(a)(5) – Computer Fraud and Abuse Act (1986 version)',
      'Mens rea standard: intentional release of intrusive code, not intent to cause damage',
      'Federal interest computer threshold for CFAA jurisdiction',
    ],
    keyPrecedents: [
      'United States v. Riggs, 739 F. Supp. 414 (N.D. Ill. 1990) – early CFAA prosecution',
      'United States v. Sablan, 92 F.3d 865 (9th Cir. 1996) – CFAA mens rea',
      'United States v. Lloyd, 269 F.3d 228 (3d Cir. 2001) – computer damage under CFAA',
    ],
    evidenceAnalysis:
      'The government introduced source code for the Morris Worm recovered from MIT computers and Cornell\'s systems, demonstrating that Morris deliberately targeted specific Unix vulnerabilities. Expert witnesses explained how the worm propagated and explained the programming error that caused uncontrolled replication. System logs from affected institutions corroborated the timeline and scale of the infection, and financial records from affected sites documented remediation costs sufficient to meet the CFAA\'s damage threshold.',
    alternativeOutcomes:
      'Had the court adopted Morris\'s narrower reading of intent, the conviction would have been reversed and the government would have needed to retry the case under a more demanding standard—likely resulting in acquittal given the difficulty of proving Morris intended the damage. Alternatively, a finding that worm propagation did not constitute "unauthorized access" could have created a significant gap in CFAA coverage, potentially leaving entire classes of malware deployment unpunishable under federal law.',
    lessonsLearned: [
      'Releasing self-propagating code on networked systems creates enormous foreseeable risk regardless of the programmer\'s subjective intent',
      'The CFAA\'s intentionality requirement attaches to the act of unauthorized access, not to resulting harm, making good-faith security research legally precarious',
      'Early prosecution under cybercrime statutes established that the internet was not a consequence-free environment for experimentation',
    ],
    bestPractices: [
      'Security researchers should obtain explicit written authorization before testing vulnerabilities on third-party systems',
      'Controlled environments and isolated lab networks should be used for malware and worm experiments',
      'Bug bounty programs and responsible disclosure frameworks provide legally safer channels for reporting vulnerabilities',
    ],
    significance:
      'United States v. Morris is the foundational cybercrime prosecution in American legal history, establishing that the Computer Fraud and Abuse Act reaches unintended downstream consequences of deliberate intrusions. The case prompted Congress to amend the CFAA in 1996 to broaden its scope and increase penalties, shaping the legal architecture governing computer crime for decades. It also catalyzed the formation of the CERT Coordination Center at Carnegie Mellon University as the first dedicated internet security incident-response organization. Morris\'s light sentence—probation rather than incarceration—reflected judicial uncertainty about proportionality in a domain the law had only just begun to address, a tension that persists in cybercrime sentencing today.',
    outcome: 'Defendant Convicted',
    parties: [
      {
        name: 'United States of America',
        role: 'PLAINTIFF',
        counsel: 'Mark D. Rasch, U.S. Department of Justice Computer Crime Unit',
        description: 'Federal prosecutor representing the government\'s interest in punishing unauthorized computer intrusion',
      },
      {
        name: 'Robert Tappan Morris',
        role: 'DEFENDANT',
        counsel: 'Thomas A. Guidoboni',
        description: 'Cornell University graduate student who created and released the Morris Worm in November 1988',
      },
    ],
  },

  {
    litigationSlug: 'cybercrime',
    name: 'Van Buren v. United States',
    citation: '593 U.S. 374 (2021)',
    jurisdiction: 'Federal – United States Supreme Court',
    court: 'Supreme Court of the United States',
    year: 2021,
    facts:
      'Nathan Van Buren was a Georgia police sergeant who, while on duty and with authorized access to the state law enforcement database, ran a license plate search for a private individual in exchange for cash—a purpose explicitly prohibited by his department\'s policies. The search was part of an FBI sting operation in which an informant paid Van Buren to look up the plate. Van Buren was charged under the Computer Fraud and Abuse Act, specifically the provision criminalizing access of a computer for which one is authorized when one "exceeds authorized access." The Eleventh Circuit affirmed his conviction, adopting a broad reading of "exceeds authorized access" that encompassed using authorized system access for an improper purpose. The Supreme Court granted certiorari to resolve a circuit split over the meaning of that phrase.',
    keyLegalIssues: [
      'Whether a person who is authorized to access information on a computer "exceeds authorized access" under 18 U.S.C. § 1030(a)(2) when he accesses that information for a purpose not permitted by the authorizing party',
      'Proper textual interpretation of "exceeds authorized access" under the CFAA\'s definitional provision, 18 U.S.C. § 1030(e)(6)',
      'Whether the CFAA\'s scope encompasses violations of employer-imposed use restrictions on otherwise-accessible data',
      'Implications for ordinary computer users who breach terms of service on websites and databases',
    ],
    plaintiffArguments:
      'The government argued that Van Buren\'s access to the license plate database exceeded his authorization because he used the system for a personal financial purpose in direct violation of his department\'s policies, which conditioned his access on legitimate law enforcement use. The prosecution contended that authorization is not binary—it is purpose-specific—and that using an authorized credential to perform a prohibited query is precisely the harm the CFAA was designed to prevent. The government also argued that the "gates-up-or-down" reading urged by Van Buren would create a loophole allowing insiders to misuse sensitive databases with impunity.',
    defendantArguments:
      'Van Buren\'s counsel argued that "exceeds authorized access" under § 1030(e)(6) applies only to technical barriers—situations where a user accesses areas of a computer system beyond those they are permitted to reach, not to misuse of information they are technically permitted to retrieve. The defense contended that the government\'s interpretation would federalize all workplace computer-use policy violations and breach-of-terms-of-service situations, turning millions of ordinary employees and internet users into potential federal criminals. Van Buren maintained that he was fully authorized to query the database and that his improper motive was a matter for employment discipline, not criminal prosecution.',
    proceduralHistory:
      'Van Buren was convicted after a jury trial in the Northern District of Georgia and sentenced to 18 months in prison. He appealed to the Eleventh Circuit, which affirmed, joining circuits that read "exceeds authorized access" broadly to include purpose-based restrictions. The Supreme Court granted certiorari in 2020 given a deep circuit split between the broad reading (Eleventh Circuit) and the narrower technical-barrier reading (First, Second, Fourth, and Ninth Circuits).',
    finalDecision:
      'The Supreme Court reversed Van Buren\'s conviction in a 6-3 decision authored by Justice Amy Coney Barrett. The Court held that a person "exceeds authorized access" only when he accesses files, folders, or databases that are off-limits to him, not when he accesses permitted information for an improper purpose.',
    judicialReasoning:
      'Justice Barrett\'s majority opinion conducted a close textual analysis of 18 U.S.C. § 1030(e)(6), which defines "exceeds authorized access" as accessing a computer "with authorization" and then "access[ing] information in the computer that the accesser is not entitled so to obtain." The Court reasoned that the phrase "is not entitled so to obtain" refers to files or areas of the system the user is forbidden from accessing, not to restrictions on the purposes for which otherwise-accessible data may be used. The majority emphasized that the government\'s reading would sweep in vast swaths of everyday conduct—checking sports scores at work in violation of an employer\'s policy, or lying in a dating-site profile in violation of terms of service—effectively creating a federal misdemeanor out of routine behavior. The Court also examined the statute\'s structure and found that the "so" in "so to obtain" linked back to the manner of access, supporting the narrower reading. Justice Thomas, joined by the Chief Justice and Justice Alito, dissented, arguing that Van Buren had been explicitly denied authorization to query the database for personal gain.',
    legalStandards: [
      '18 U.S.C. § 1030(a)(2) – CFAA prohibition on exceeding authorized access',
      '18 U.S.C. § 1030(e)(6) – statutory definition of "exceeds authorized access"',
      'Statutory textualism and the canon against surplusage',
      'Rule of lenity in construing ambiguous criminal statutes',
    ],
    keyPrecedents: [
      'United States v. Nosal, 676 F.3d 854 (9th Cir. 2012) (en banc) – narrow CFAA reading adopted',
      'WEC Carolina Energy Solutions LLC v. Miller, 687 F.3d 199 (4th Cir. 2012) – purpose-based restrictions insufficient',
      'United States v. Rodriguez, 628 F.3d 1258 (11th Cir. 2010) – broad reading of exceeds authorized access',
    ],
    evidenceAnalysis:
      'The government\'s key evidence was the FBI sting recording and database access logs confirming that Van Buren ran the license plate query using his authenticated departmental credentials during his shift. Digital forensic records established the precise timestamp of the query and matched it to the cash payment made by the informant. The parties did not dispute the underlying facts; the case turned entirely on the legal interpretation of the statute.',
    alternativeOutcomes:
      'Had the Court affirmed the Eleventh Circuit\'s broad interpretation, the CFAA would effectively have federalized all workplace computer-use policy violations, potentially exposing millions of employees to criminal liability for minor infractions. The result would also have expanded prosecutorial leverage in cases involving insider threats, trade secret theft, and corporate espionage—potentially displacing more targeted statutes like the Defend Trade Secrets Act.',
    lessonsLearned: [
      'The scope of the CFAA\'s "exceeds authorized access" prohibition is limited to technical access barriers, not employer-imposed purpose restrictions',
      'Criminal statutes of broad potential reach are subject to limiting construction to avoid criminalizing ordinary behavior',
      'The decision clarifies that employee misuse of authorized database access must be addressed through employment law, contract, and purpose-specific statutes rather than the CFAA',
    ],
    bestPractices: [
      'Organizations should implement technical access controls—role-based permissions and query logging—rather than relying solely on policy restrictions to prevent database misuse',
      'Law enforcement agencies should segment database access by authorized use case and audit query logs for anomalous patterns',
      'Prosecutors should evaluate insider-threat cases under the Defend Trade Secrets Act or wire fraud statutes when CFAA coverage is uncertain post-Van Buren',
    ],
    significance:
      'Van Buren v. United States is the Supreme Court\'s first and definitive ruling on the scope of the CFAA\'s "exceeds authorized access" clause, resolving a two-decade circuit split. The decision substantially narrows federal cybercrime exposure for employees and ordinary internet users who misuse authorized access for improper purposes, limiting the CFAA to genuine intrusion scenarios. The ruling has significant implications for computer security research, as it reduces—though does not eliminate—CFAA liability for researchers who access publicly available systems for purposes beyond those intended by operators. It also signals the Court\'s concern about overcriminalization in the digital domain and the need for Congress to legislate with precision when regulating computer conduct.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'United States of America',
        role: 'PLAINTIFF',
        counsel: 'Eric J. Feigin, Acting Deputy Solicitor General',
        description: 'Federal government seeking to uphold conviction of a police officer who misused law enforcement database access',
      },
      {
        name: 'Nathan Van Buren',
        role: 'DEFENDANT',
        counsel: 'Jeffrey L. Fisher, Stanford Law School Supreme Court Litigation Clinic',
        description: 'Georgia police sergeant convicted of accessing a law enforcement database for an unauthorized purpose during an FBI sting',
      },
    ],
  },

  {
    litigationSlug: 'cybercrime',
    name: 'United States v. Nosal',
    citation: '676 F.3d 854 (9th Cir. 2012) (Nosal I); 844 F.3d 1024 (9th Cir. 2016) (Nosal II)',
    jurisdiction: 'Federal – Ninth Circuit',
    court: 'United States Court of Appeals for the Ninth Circuit',
    year: 2016,
    facts:
      'David Nosal, a former executive at the executive-search firm Korn/Ferry International, left the company in 2004 but arranged for former colleagues who remained employed there to access the firm\'s proprietary Searcher database—containing confidential candidate and client information—and download data to help him start a competing firm. Korn/Ferry had implemented an access policy restricting use of Searcher to internal business purposes, and the employees who assisted Nosal were authorized database users in a technical sense but were acting in violation of company policy and for Nosal\'s personal benefit. Later, after Nosal\'s own credentials were revoked, he obtained the login credentials of a former assistant—who had also left the company—and used them to access Searcher directly.',
    keyLegalIssues: [
      'Whether former employees who use their own valid credentials to access an employer\'s computer system for an unauthorized purpose "exceed authorized access" under the CFAA (Nosal I)',
      'Whether a former employee who uses a current employee\'s credentials—without the employer\'s knowledge—accesses the system "without authorization" under the CFAA (Nosal II)',
      'Whether the CFAA\'s access provisions should be read narrowly to avoid overcriminalizing ordinary workplace conduct',
      'Interplay between the CFAA and trade secret law when departing employees misappropriate proprietary data',
    ],
    plaintiffArguments:
      'The government contended that Nosal orchestrated a scheme to steal Korn/Ferry\'s proprietary trade secret data, and that both the collusion with current employees who violated access restrictions and Nosal\'s own use of another person\'s revoked credentials constituted CFAA violations. In Nosal II, the prosecution argued that using login credentials belonging to a person whose access had been revoked is paradigmatically "without authorization"—the employer had affirmatively withdrawn permission, making any subsequent access unauthorized regardless of who physically entered the credentials.',
    defendantArguments:
      'In Nosal I, the defense argued that current employees who are technically authorized to access a database do not exceed their authorization merely because they violate an employer\'s use policy—a position the en banc Ninth Circuit adopted. In Nosal II, Nosal argued that the former assistant had consented to sharing her credentials and that the CFAA should not criminalize password sharing, a near-universal practice. Defense counsel also argued that the statute was void for vagueness as applied to credential-sharing conduct.',
    proceduralHistory:
      'Nosal was indicted in 2008 on multiple counts including CFAA violations and trade secret theft. After a three-judge panel initially affirmed a broad reading of the CFAA, the Ninth Circuit reheard the case en banc and in 2012 (Nosal I) reversed, adopting a narrow reading that employer policy violations do not constitute exceeding authorized access. On remand, Nosal was convicted at trial, and the Ninth Circuit in 2016 (Nosal II) affirmed convictions related to his own access using revoked credentials, while the prior narrow ruling stood for the employee-policy-violation counts.',
    finalDecision:
      'In Nosal I (2012), the en banc Ninth Circuit reversed the district court and held that violating an employer\'s computer use policy does not by itself constitute "exceeding authorized access" under the CFAA. In Nosal II (2016), the Ninth Circuit affirmed Nosal\'s conviction on counts related to his use of a former employee\'s revoked credentials, holding that accessing a computer system after the account holder\'s authorization has been affirmatively terminated by the owner constitutes access "without authorization."',
    judicialReasoning:
      'In Nosal I, Judge Alex Kozinski\'s en banc majority reasoned that reading "exceeds authorized access" to cover purpose-based policy violations would transform the CFAA into a sweeping federal criminal statute governing all workplace computer use, criminalizing conduct as innocuous as reading personal email on a work computer. The court applied the rule of lenity and emphasized that criminal statutes must be read narrowly when their text supports multiple interpretations. In Nosal II, Chief Judge Sidney Thomas distinguished the two situations: Nosal I addressed currently-authorized employees acting outside policy, whereas Nosal II involved access after the account owner\'s authorization had been affirmatively and entirely revoked by the system owner—the employer—making the access structurally unauthorized regardless of any third-party consent to share credentials.',
    legalStandards: [
      '18 U.S.C. § 1030(a)(2)(C) – unauthorized or exceeding authorized access to obtain information from a protected computer',
      '18 U.S.C. § 1030(e)(6) – definition of "exceeds authorized access"',
      'Rule of lenity in construction of ambiguous criminal statutes',
      '18 U.S.C. § 1832 – theft of trade secrets',
    ],
    keyPrecedents: [
      'International Airport Centers, LLC v. Citrin, 440 F.3d 418 (7th Cir. 2006) – broad CFAA reading for departing employees',
      'LVRC Holdings LLC v. Brekka, 581 F.3d 1127 (9th Cir. 2009) – Ninth Circuit narrow CFAA baseline',
      'Van Buren v. United States, 593 U.S. 374 (2021) – Supreme Court ultimately adopted Nosal I\'s narrow reading',
    ],
    evidenceAnalysis:
      'Digital forensic evidence included Searcher database access logs, download records, and metadata linking extracted files to Nosal\'s personal devices and the competing business he was forming. Email communications recovered through corporate server forensics showed Nosal directing colleagues to retrieve specific candidate records and coaching them on how to export data. In the credential-misuse phase, server logs recorded login events using the former assistant\'s credentials from IP addresses associated with Nosal\'s home and new offices after Korn/Ferry had terminated the account.',
    alternativeOutcomes:
      'Had the en banc court upheld the broad reading in Nosal I, the Ninth Circuit would have aligned with the Eleventh Circuit\'s position, preserving a circuit split that the Supreme Court ultimately resolved in Van Buren. A broader ruling would have exposed countless employees to federal criminal prosecution for routine workplace computer-policy violations and may have chilled legitimate competitive intelligence gathering.',
    lessonsLearned: [
      'Complete and documented revocation of system credentials upon employee departure is essential to establishing CFAA "without authorization" liability',
      'Employer access policies alone are insufficient to support CFAA criminal liability—technical access controls must accompany policy restrictions',
      'Departing executives who orchestrate data extraction by current employees face both CFAA and trade secret liability even if they never personally access the system',
    ],
    bestPractices: [
      'Immediately terminate all system credentials and remote access upon an employee\'s departure, especially for employees joining competitors',
      'Implement audit logging and anomaly detection to identify unusual bulk downloads or access from new IP addresses',
      'Use role-based access controls tied to business functions so that access automatically lapses when roles change',
    ],
    significance:
      'United States v. Nosal (Nosal I) stands as the leading Ninth Circuit decision curtailing the government\'s expansive use of the CFAA against employees who misuse authorized access, and it directly influenced the Supreme Court\'s ruling in Van Buren v. United States. Together, the two Nosal opinions map the boundary between authorized misuse (not criminal under the CFAA) and truly unauthorized access (criminal), giving employers, employees, and security researchers critical guidance. The case also illustrates how trade secret law and the CFAA intersect in corporate espionage scenarios, and Nosal\'s ultimate conviction in Nosal II confirms that credential theft and post-revocation access remain firmly within the CFAA\'s reach.',
    outcome: 'Mixed – Nosal I Reversed; Nosal II Affirmed Conviction',
    parties: [
      {
        name: 'United States of America',
        role: 'PLAINTIFF',
        counsel: 'Matthew Parrella and Joseph Fazioli, U.S. Attorney\'s Office, Northern District of California',
        description: 'Federal prosecutors alleging CFAA violations and trade secret theft arising from corporate data exfiltration scheme',
      },
      {
        name: 'David Nosal',
        role: 'DEFENDANT',
        counsel: 'Dennis Riordan and Donald Horgan',
        description: 'Former Korn/Ferry executive who orchestrated scheme to extract proprietary candidate database to launch a competing firm',
      },
    ],
  },

  {
    litigationSlug: 'cybercrime',
    name: 'United States v. Drew',
    citation: '259 F.R.D. 449 (C.D. Cal. 2009)',
    jurisdiction: 'Federal – Central District of California',
    court: 'United States District Court for the Central District of California',
    year: 2009,
    facts:
      'Lori Drew, a Missouri resident, created a fake MySpace account under the persona "Josh Evans" in 2006 to monitor and interact with Megan Meier, a 13-year-old neighbor who had previously had a falling-out with Drew\'s daughter. "Josh Evans" cultivated an online friendship with Megan and then abruptly sent her a series of cruel messages, telling her the world would be a better place without her. Megan died by suicide shortly after receiving the messages. Missouri prosecutors declined to charge Drew with any state crime because no applicable statute covered the conduct. Federal prosecutors in the Central District of California—where MySpace was headquartered—charged Drew under the CFAA for intentionally accessing MySpace\'s computers without authorization by violating the site\'s Terms of Service, which prohibited false registration information and harassment.',
    keyLegalIssues: [
      'Whether violating a website\'s Terms of Service constitutes "unauthorized access" or "exceeding authorized access" to a protected computer under 18 U.S.C. § 1030(a)(2)(C)',
      'Whether the CFAA\'s "intentionally accesses a computer without authorization" language is unconstitutionally vague as applied to Terms of Service violations',
      'Void-for-vagueness doctrine as applied to criminal statutes that incorporate private contractual terms by reference',
      'Limits of federal CFAA jurisdiction over cyberbullying and online harassment when no state law applies',
    ],
    plaintiffArguments:
      'Prosecutors argued that MySpace\'s Terms of Service explicitly prohibited creating fake profiles and using the platform to harass other users, and that Drew agreed to those terms upon registration. By creating a fictitious account for the purpose of tormenting Megan Meier, Drew accessed MySpace\'s computers in a manner that violated the conditions of her authorization, making the access unauthorized under the CFAA. The government contended that this theory was necessary to fill the gap left by the absence of applicable cyberbullying statutes and that the public interest in holding Drew accountable justified an expansive reading of the CFAA.',
    defendantArguments:
      'Drew\'s defense argued that the CFAA was never intended to criminalize Terms of Service violations and that the government\'s reading would make every internet user who misrepresents their age, uses a nickname, or violates any private contract a federal criminal. Defense counsel further argued that because the criminal prohibition was defined by MySpace\'s private ToS—which the company could modify unilaterally at any time—the statute as applied was unconstitutionally vague, failing to give ordinary people fair notice of what conduct was criminal.',
    proceduralHistory:
      'Drew was indicted in 2008 in the Central District of California. A jury convicted her of three misdemeanor CFAA counts for accessing a protected computer without authorization in violation of MySpace\'s ToS, but acquitted on the felony conspiracy charge. The district court subsequently granted Drew\'s motion for judgment of acquittal notwithstanding the verdict.',
    finalDecision:
      'Judge George Wu granted Drew\'s motion for judgment of acquittal in August 2009, setting aside the jury\'s misdemeanor convictions. The court held that treating a ToS violation as the predicate for criminal "unauthorized access" under the CFAA rendered the statute void for vagueness as applied and created an unconstitutional delegation of the power to define criminal conduct to a private party.',
    judicialReasoning:
      'Judge Wu applied the constitutional void-for-vagueness doctrine, concluding that a criminal statute must provide sufficiently definite notice of what conduct it prohibits and must not vest standardless discretion in enforcement authorities. When the definition of "unauthorized" turns entirely on the terms of a private contract that can be drafted and amended at will by a website operator, the line between criminal and lawful conduct becomes unpredictable and subject to arbitrary enforcement. The court observed that MySpace\'s ToS, like most websites\', were rarely read and constantly revised, meaning that the criminal prohibition would shift without any public notice. Wu also noted the CFAA\'s legislative history focused on hacking—intrusion into systems, not civil contract breaches—and declined to read the statute to cover ordinary ToS violations.',
    legalStandards: [
      '18 U.S.C. § 1030(a)(2)(C) – CFAA misdemeanor access without authorization',
      'Void-for-vagueness doctrine under the Fifth Amendment Due Process Clause',
      'Non-delegation principles as applied to private parties defining the scope of criminal statutes',
      'Federal Rule of Criminal Procedure 29 – judgment of acquittal',
    ],
    keyPrecedents: [
      'Grayned v. City of Rockford, 408 U.S. 104 (1972) – void-for-vagueness standard',
      'United States v. Morris, 928 F.2d 504 (2d Cir. 1991) – foundational CFAA scope case',
      'Van Buren v. United States, 593 U.S. 374 (2021) – Supreme Court later confirmed ToS violations are not CFAA violations',
    ],
    evidenceAnalysis:
      'The government introduced MySpace registration records, IP address logs tying the "Josh Evans" account to Drew\'s home internet connection, and a cache of private messages exchanged between the fake account and Megan Meier. Digital forensic analysis of Drew\'s home computer confirmed use of her machine to create and operate the account. The prosecution also presented MySpace\'s Terms of Service and argued the jury should find Drew agreed to terms she systematically violated.',
    alternativeOutcomes:
      'Had the conviction stood, the government\'s theory would have effectively made every ToS violation on any website a potential federal misdemeanor, creating enormous chilling effects on internet speech and enabling selective prosecution. The case\'s failure to reach a final conviction galvanized legislators; Missouri and numerous other states subsequently enacted explicit cyberbullying and cyberstalking statutes, and Congress considered but did not pass federal cyberbullying legislation.',
    lessonsLearned: [
      'The CFAA is not an appropriate vehicle for prosecuting online harassment absent a clear technical intrusion; purpose-built cyberbullying statutes are necessary',
      'Courts will not permit private companies\' Terms of Service to define the boundary of federal criminal liability without violating vagueness principles',
      'High-profile online harassment tragedies can drive legislative reform even when initial prosecution fails',
    ],
    bestPractices: [
      'Platform operators should report online harassment to law enforcement and cooperate in investigations while advocating for clear legislative standards',
      'Legislatures should enact specific cyberbullying and online harassment statutes rather than relying on misapplication of the CFAA',
      'Digital forensic investigators should preserve account creation records, IP logs, and message histories early in harassment investigations before data retention periods expire',
    ],
    significance:
      'United States v. Drew is the landmark case establishing that violating a website\'s Terms of Service does not constitute criminal unauthorized computer access under the CFAA, a principle later confirmed by the Supreme Court in Van Buren. The case exposed the legal vacuum surrounding cyberbullying and spurred legislative action across the country, with most states eventually enacting targeted harassment statutes. It also ignited a national conversation about the relationship between online anonymity, adolescent mental health, and legal accountability—debates that remain unresolved and urgent. The prosecution\'s creative but ultimately unsuccessful use of the CFAA illustrated both the statute\'s limitations and the dangers of overbroad interpretations of cybercrime law.',
    outcome: 'Defendant Victory – Judgment of Acquittal',
    parties: [
      {
        name: 'United States of America',
        role: 'PLAINTIFF',
        counsel: 'Mark Krause, Assistant U.S. Attorney, Central District of California',
        description: 'Federal prosecutors using the CFAA to hold Drew criminally accountable for cyberbullying that preceded Megan Meier\'s suicide',
      },
      {
        name: 'Lori Drew',
        role: 'DEFENDANT',
        counsel: 'Dean Steward',
        description: 'Missouri woman who created a fraudulent MySpace persona to harass a teenage neighbor, resulting in the teenager\'s death by suicide',
      },
    ],
  },

  {
    litigationSlug: 'cybercrime',
    name: 'LVRC Holdings LLC v. Brekka',
    citation: '581 F.3d 1127 (9th Cir. 2009)',
    jurisdiction: 'Federal – Ninth Circuit',
    court: 'United States Court of Appeals for the Ninth Circuit',
    year: 2009,
    facts:
      'Christopher Brekka was employed by LVRC Holdings LLC, a drug-and-alcohol rehabilitation center operator in Las Vegas, to manage digital marketing and website operations. While employed, Brekka emailed himself several LVRC business documents—including client lists, financial records, and marketing materials—from his work computer to his personal email account for what he claimed were legitimate work purposes. After employment negotiations broke down and Brekka departed, LVRC discovered that Brekka had accessed the company\'s website back end and changed the administrative login credentials, locking LVRC out of its own website. LVRC sued Brekka under the CFAA alleging both that his emailing of company documents exceeded his authorization and that his post-departure access to the website was without authorization.',
    keyLegalIssues: [
      'Whether an employee who accesses a company computer with employer permission "without authorization" or "in excess of authorized access" under the CFAA when he sends company files to his personal email for potential adverse use',
      'Whether authorization under the CFAA depends on the employer\'s subjective intent or on objective indicia of permission',
      'What conduct causes authorization to lapse under the CFAA—departure, revocation, or something else',
      'Applicability of the CFAA to civil suits brought by private employers against former employees',
    ],
    plaintiffArguments:
      'LVRC argued that Brekka\'s authorization to access company computers was implicitly conditioned on acting in the employer\'s interest and that, once he began contemplating competing against LVRC, any access to company systems was in excess of his authorization under an agency-law theory. The company also argued that even if his pre-departure access was authorized, it was clear that he acted without authorization when he accessed the website and changed credentials after his employment ended, locking LVRC out of its own digital property.',
    defendantArguments:
      'Brekka argued that he had explicit, unconditional permission to access all the computers and systems at issue during his employment and that the CFAA does not strip authorization retroactively based on the employee\'s undisclosed motives. He contended that his authorization was objective and technical—he had valid credentials and employer permission—and that using those credentials, even for self-interested purposes, did not constitute unauthorized access. Regarding the post-departure access, Brekka disputed the factual record.',
    proceduralHistory:
      'LVRC brought a civil action under the CFAA in federal district court, which granted summary judgment to Brekka. LVRC appealed to the Ninth Circuit, arguing the district court erred in its interpretation of "without authorization" and "exceeds authorized access."',
    finalDecision:
      'The Ninth Circuit affirmed summary judgment for Brekka on all pre-departure conduct. The court held that an employee who is given permission to access a company computer does not access it "without authorization" merely because the employee uses the computer in a way that is adverse to the employer\'s interests. As to post-departure access, the court remanded for further factual development on whether Brekka had permission to access the website after leaving LVRC.',
    judicialReasoning:
      'The Ninth Circuit, in an opinion by Judge Sandra Ikuta, held that authorization under the CFAA is an objective inquiry: a person accesses a computer "without authorization" only when the system owner has not granted permission for that access, not when the owner would have withheld permission had it known the employee\'s true purpose. The court rejected LVRC\'s agency-theory argument, reasoning that grafting fiduciary-duty concepts onto the CFAA\'s authorization analysis would impermissibly expand the statute\'s scope beyond computer intrusion into general employment law disputes. The panel emphasized that Congress enacted the CFAA to target outside hackers and that stretching the statute to cover employees who misuse authorized access for disloyal purposes would go far beyond congressional intent. This objective-authorization framework became the Ninth Circuit\'s baseline and directly informed the en banc court\'s reasoning in United States v. Nosal (2012).',
    legalStandards: [
      '18 U.S.C. § 1030(a)(2) and (a)(4) – civil and criminal CFAA unauthorized access provisions',
      '18 U.S.C. § 1030(g) – CFAA civil cause of action',
      'Objective versus subjective authorization framework',
      'Agency law\'s duty of loyalty and its inapplicability to CFAA authorization analysis',
    ],
    keyPrecedents: [
      'International Airport Centers, LLC v. Citrin, 440 F.3d 418 (7th Cir. 2006) – agency-theory authorization, which Brekka declined to follow',
      'United States v. Nosal, 676 F.3d 854 (9th Cir. 2012) – directly built on Brekka\'s objective-authorization framework',
      'Van Buren v. United States, 593 U.S. 374 (2021) – Supreme Court ultimately endorsed the narrow reading Brekka helped establish',
    ],
    evidenceAnalysis:
      'The record included email server logs showing Brekka forwarded LVRC documents to his personal email using his company-issued credentials on dates during his employment, and website access logs reflecting changes to administrative credentials. LVRC presented evidence that Brekka subsequently operated a competing rehabilitation center website. The district court found that the documentary and log evidence did not raise a genuine dispute about Brekka\'s technical authorization during employment, as no revocation had occurred.',
    alternativeOutcomes:
      'Had the Ninth Circuit adopted the Seventh Circuit\'s agency-theory approach from Citrin, employees throughout the circuit would have faced potential CFAA liability—civil or criminal—whenever their access of a work computer was motivated by disloyalty, fundamentally changing the employment law landscape. The ruling prevented a significant expansion of CFAA liability and preserved a coherent boundary between computer intrusion law and general employment and trade secret law.',
    lessonsLearned: [
      'Employers must affirmatively and promptly revoke system credentials and communicate the revocation in writing to establish CFAA "without authorization" liability upon employee departure',
      'The CFAA\'s civil action under § 1030(g) requires the same technical unauthorized-access showing as the criminal statute—good faith business grievances are insufficient',
      'Objective technical permission, not the employee\'s subjective loyalty, governs CFAA authorization analysis in the Ninth Circuit',
    ],
    bestPractices: [
      'Establish documented off-boarding protocols that include immediate credential revocation and confirmation to create a clear authorization cutoff for CFAA purposes',
      'Use data loss prevention (DLP) tools to monitor and alert on bulk file transfers or unusual emailing of sensitive documents to external addresses',
      'Maintain detailed access logs with timestamps and user identifiers to support forensic reconstruction of access patterns in employment disputes',
    ],
    significance:
      'LVRC Holdings LLC v. Brekka established the Ninth Circuit\'s foundational objective-authorization framework for the CFAA, directly influencing the en banc decision in United States v. Nosal and ultimately the Supreme Court\'s ruling in Van Buren v. United States. By rejecting the agency-law theory that disloyal employees lose authorization, Brekka set the Ninth Circuit on a path toward the most defendant-protective CFAA interpretation of any major circuit. The case is also significant for establishing that the CFAA\'s civil cause of action requires the same rigorous unauthorized-access showing as criminal prosecution, preventing employers from weaponizing the statute in ordinary employment disputes. It remains a foundational reference for any CFAA litigation in the Ninth Circuit involving employee computer use.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'LVRC Holdings LLC',
        role: 'PLAINTIFF',
        counsel: 'Steven Kroll',
        description: 'Nevada drug-and-alcohol rehabilitation center operator suing a former digital marketing employee for alleged CFAA violations',
      },
      {
        name: 'Christopher Brekka',
        role: 'DEFENDANT',
        counsel: 'Thomas D. Beatty',
        description: 'Former LVRC employee who emailed company documents to his personal account and later accessed the company website after departure',
      },
    ],
  },
];

export default cases;
