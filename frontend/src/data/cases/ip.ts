import { CatalogCase } from './types';

export const IP_CASES: CatalogCase[] = [
  // ===================== IP Litigation =====================
  {
    id: 'apple-v-samsung',
    name: 'Apple Inc. v. Samsung Electronics Co.',
    citation: '920 F. Supp. 2d 1079 (N.D. Cal. 2013); 786 F.3d 983 (Fed. Cir. 2015)',
    litigationTypeSlug: 'intellectual-property',
    litigationTypeName: 'IP Litigation',
    court: 'U.S. District Court for the Northern District of California',
    jurisdiction: 'United States (Federal)',
    filingDate: '2011-04-15',
    decisionDate: '2012-08-24',
    facts:
      "Apple sued Samsung in April 2011, alleging that Samsung's Galaxy line of smartphones and tablets infringed Apple's design patents covering the iPhone's rounded-rectangle front face, bezel, and grid-of-icons graphical user interface, as well as utility patents on features like \"bounce-back\" scrolling and tap-to-zoom. Apple also asserted trade dress claims over the overall look of the iPhone. Samsung counterclaimed that Apple infringed several of its standards-essential wireless patents. The case became the flagship battle in the global \"smartphone wars,\" with parallel litigation in roughly a dozen countries. After a month-long trial in San Jose, a jury found that numerous Samsung devices infringed Apple's patents and diluted its trade dress, awarding Apple $1.049 billion in damages, later adjusted through retrials.",
    keyLegalIssues: [
      'Whether Samsung devices infringed Apple design patents covering ornamental smartphone features',
      'How to calculate damages under 35 U.S.C. § 289, which awards "total profit" from the "article of manufacture"',
      'Whether the iPhone trade dress was protectable or functional',
      "Whether Apple's utility patents (bounce-back, tap-to-zoom) were valid and infringed",
    ],
    plaintiffArguments:
      'Apple argued that Samsung deliberately copied the iPhone, pointing to internal Samsung documents comparing the Galaxy interface feature-by-feature against the iPhone and recommending changes to make Samsung phones look more like Apple\'s. It contended that design patents protect the distinctive ornamental appearance that drives consumer demand, and that under Section 289 it was entitled to Samsung\'s entire profits on infringing phones. Apple also argued that its trade dress had acquired enormous secondary meaning through billions in marketing and iconic product recognition.',
    defendantArguments:
      'Samsung argued that the asserted designs were functional and dictated by the basic form of a touchscreen smartphone, and therefore unprotectable. It contended that rectangular slabs with rounded corners were obvious and anticipated by prior art such as earlier concept phones. Samsung further argued that awarding its entire profit on a complex multi-component device for infringing a few narrow design patents was grossly disproportionate, and that the relevant "article of manufacture" should be a component, not the whole phone.',
    proceduralHistory:
      'After a 2012 jury verdict of $1.049 billion for Apple, Judge Lucy Koh ordered a partial damages retrial, reducing the award to roughly $930 million. The Federal Circuit affirmed the design and utility patent rulings but reversed the trade dress dilution findings in 2015. The Supreme Court unanimously reversed on design patent damages in Samsung Electronics Co. v. Apple Inc., 580 U.S. 53 (2016), holding the "article of manufacture" can be a component; on remand a 2018 jury awarded Apple about $539 million before the parties settled.',
    finalDecision:
      'The jury found that Samsung willfully infringed multiple Apple design and utility patents and diluted Apple\'s registered trade dress, awarding $1.049 billion. After appeals, the Supreme Court remand, and a damages retrial, Samsung was held liable for roughly $539 million, and the parties settled all claims in June 2018.',
    judicialReasoning:
      'The jury and courts credited extensive evidence that Samsung used the iPhone as a design template, finding that ordinary observers would view the Galaxy designs as substantially the same as the patented designs. The Federal Circuit held that the iPhone trade dress was functional and unprotectable, illustrating the higher bar trade dress faces for product configurations. On damages, the Supreme Court reasoned that the statutory term "article of manufacture" is broad enough to cover either an end product or a component, so total-profit awards need not be calculated on the entire device. The litigation as a whole reflected judicial efforts to fit nineteenth-century design patent remedies to complex modern electronics.',
    legalStandards: [
      'Ordinary observer test for design patent infringement (Egyptian Goddess v. Swisa)',
      '35 U.S.C. § 289 total-profit damages for design patent infringement',
      'Functionality doctrine limiting trade dress protection for product configurations',
      'Willfulness standard for enhanced patent damages',
    ],
    keyPrecedents: [
      'Egyptian Goddess, Inc. v. Swisa, Inc., 543 F.3d 665 (Fed. Cir. 2008)',
      'TrafFix Devices, Inc. v. Marketing Displays, Inc., 532 U.S. 23 (2001)',
      'Gorham Co. v. White, 81 U.S. 511 (1871)',
    ],
    evidenceAnalysis:
      "The most persuasive evidence was Samsung's own internal documentation, including a 132-page report comparing the Galaxy S to the iPhone screen-by-screen with recommendations to mimic Apple's design choices — near-direct proof of copying that resonated powerfully with the jury. Apple's consumer surveys and design expert testimony reinforced the association between the asserted designs and the iPhone. Samsung's prior art evidence (such as the LG Prada and internal Samsung concepts) was weaker because none combined all claimed design elements, and its functionality arguments were undercut by the many alternative smartphone designs on the market. Samsung's standards-essential patent counterclaims gained little traction given FRAND licensing concerns.",
    alternativeOutcomes:
      "Had Samsung's internal comparison documents never been created or discovered, the copying narrative would have collapsed and the jury might have found non-infringement or awarded far smaller damages. If the Supreme Court had affirmed whole-device total-profit damages, design patent assertions against multi-component products would have exploded, fundamentally changing tech industry risk calculations. Conversely, an early settlement at cross-license terms could have avoided seven years of global litigation costing both sides hundreds of millions in fees.",
    lessonsLearned: [
      'Internal competitive-analysis documents can become devastating trial evidence of copying',
      'Design patents are powerful, enforceable assets, not mere formalities',
      'Total-profit design patent damages now turn on identifying the relevant article of manufacture',
      'Trade dress in product configuration faces serious functionality hurdles even for iconic products',
    ],
    bestPractices: [
      'Train product teams to document independent design rationale and avoid feature-by-feature copying memos',
      'Build design patent portfolios covering distinctive ornamental elements of flagship products',
      'Conduct design-around and freedom-to-operate reviews before launching products into crowded markets',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'The defining smartphone-era IP battle that revitalized design patents and led the Supreme Court to redefine design patent damages.',
    isFeatured: true,
    parties: [
      { id: 'apple-v-samsung-p', name: 'Apple Inc.', role: 'PLAINTIFF', counsel: 'Morrison & Foerster LLP; WilmerHale (Harold McElhinny, William Lee)' },
      { id: 'apple-v-samsung-d', name: 'Samsung Electronics Co., Ltd.', role: 'DEFENDANT', counsel: 'Quinn Emanuel Urquhart & Sullivan LLP (Charles Verhoeven, John Quinn)' },
    ],
  },
  {
    id: 'ebay-v-mercexchange',
    name: 'eBay Inc. v. MercExchange, L.L.C.',
    citation: '547 U.S. 388 (2006)',
    litigationTypeSlug: 'intellectual-property',
    litigationTypeName: 'IP Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2006-05-15',
    facts:
      'MercExchange, a small Virginia company founded by inventor Thomas Woolston, held business-method patents covering an electronic market for selling goods between private parties, including technology used in eBay\'s "Buy It Now" fixed-price purchasing feature. After licensing negotiations between the parties failed, MercExchange sued eBay and its subsidiary Half.com for patent infringement in the Eastern District of Virginia. A jury found the patent valid and willfully infringed and awarded MercExchange $35 million (later reduced to $25 million). The district court, however, refused to enter a permanent injunction, noting that MercExchange did not practice the patent and was willing to license it. The Federal Circuit reversed, applying its "general rule" that injunctions issue automatically upon a finding of infringement absent exceptional circumstances.',
    keyLegalIssues: [
      'Whether a permanent injunction should issue nearly automatically after a finding of patent infringement',
      'Whether traditional four-factor equitable principles govern injunctions in patent cases',
      'How non-practicing entity status affects entitlement to injunctive relief',
    ],
    plaintiffArguments:
      'eBay (the petitioner) argued that the Patent Act expressly provides that injunctions "may" issue "in accordance with the principles of equity," so courts must apply the traditional four-factor test rather than a categorical rule. It contended that automatic injunctions hand patent holders — especially non-practicing entities — undue holdup leverage to extract settlements far exceeding the patented technology\'s value. eBay emphasized that monetary damages fully compensated MercExchange, which did not compete with eBay and merely sought licensing revenue.',
    defendantArguments:
      'MercExchange argued that the right to exclude is the essence of a patent, and that denying injunctions to patentees who license rather than manufacture effectively creates a compulsory licensing regime Congress never enacted. It contended that the Federal Circuit\'s general rule correctly reflected centuries of practice in which courts protected property rights with injunctions. MercExchange also argued that its willingness to license should not be held against it, since licensing is a legitimate way to commercialize inventions.',
    proceduralHistory:
      'A jury in the Eastern District of Virginia found eBay liable for willful infringement in 2003, but the district court denied MercExchange a permanent injunction. The Federal Circuit reversed the injunction denial under its general rule favoring injunctions. The Supreme Court granted certiorari and vacated the Federal Circuit\'s decision in a unanimous opinion.',
    finalDecision:
      'The Supreme Court unanimously held that the traditional four-factor equitable test governs permanent injunctions in patent cases, rejecting both the Federal Circuit\'s automatic-injunction rule and the district court\'s categorical denial for non-practicing licensors. The case was remanded for application of the proper standard; on remand the injunction was again denied and the parties ultimately settled.',
    judicialReasoning:
      'Justice Thomas wrote that nothing in the Patent Act displaces the well-established principle that a plaintiff seeking a permanent injunction must demonstrate irreparable injury, inadequacy of legal remedies, that the balance of hardships favors equitable relief, and that the public interest would not be disserved. The Court held that neither categorical rule — automatic grants nor automatic denials to licensors — is consistent with equity. Chief Justice Roberts\'s concurrence noted the long historical practice of granting injunctions in patent cases, while Justice Kennedy\'s concurrence warned that patent-assertion firms using injunctions "as a bargaining tool to charge exorbitant fees" may often fail the four-factor test. The decision deliberately left application of the factors to district courts\' discretion.',
    legalStandards: [
      'Four-factor test for permanent injunctions (irreparable harm, inadequate legal remedy, balance of hardships, public interest)',
      '35 U.S.C. § 283 (injunctions "in accordance with the principles of equity")',
      'Abuse-of-discretion review of equitable relief decisions',
    ],
    keyPrecedents: [
      'Weinberger v. Romero-Barcelo, 456 U.S. 305 (1982)',
      'Amoco Production Co. v. Village of Gambell, 480 U.S. 531 (1987)',
      'Continental Paper Bag Co. v. Eastern Paper Bag Co., 210 U.S. 405 (1908)',
    ],
    evidenceAnalysis:
      "Because the Supreme Court issue was purely legal, the decisive material was statutory text and equity tradition rather than trial evidence. At the district court level, MercExchange's history of seeking licensing revenue rather than market exclusivity was the most persuasive fact against irreparable harm, showing money damages were adequate. eBay's evidence that it could design around the patent weakened MercExchange's holdup leverage. MercExchange's willful-infringement verdict, though significant for damages, carried little weight on the equitable question.",
    alternativeOutcomes:
      'Had the Court affirmed the Federal Circuit\'s automatic-injunction rule, non-practicing entities would have retained enormous settlement leverage, and the patent-troll business model would likely have grown even more aggressive. If the Court had instead adopted a categorical rule denying injunctions to all licensors, universities and individual inventors would have lost meaningful exclusivity, a result the majority expressly avoided. A narrower fact-bound ruling would have left the circuit split over equitable discretion unresolved.',
    lessonsLearned: [
      'Patent remedies are governed by traditional equity, not patent-specific categorical rules',
      'Non-practicing entities now rarely obtain injunctions and must build damages-focused strategies',
      'Operating companies gained substantial leverage in licensing negotiations after eBay',
      'Concurring opinions can shape lower-court practice as much as the majority holding',
    ],
    bestPractices: [
      'Assess injunction exposure realistically when valuing patent disputes — practicing status matters enormously',
      'Develop irreparable-harm evidence (lost market share, price erosion, brand harm) early if seeking an injunction',
      'Consider design-around feasibility as both a defense strategy and a damages-limiting argument',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Ended near-automatic patent injunctions and reshaped the economics of patent assertion, particularly for non-practicing entities.',
    isFeatured: false,
    parties: [
      { id: 'ebay-v-mercexchange-p', name: 'eBay Inc. and Half.com, Inc.', role: 'PLAINTIFF', counsel: 'Carter Phillips, Sidley Austin LLP' },
      { id: 'ebay-v-mercexchange-d', name: 'MercExchange, L.L.C.', role: 'DEFENDANT', counsel: 'Seth Waxman, WilmerHale' },
    ],
  },
  {
    id: 'kirtsaeng-v-john-wiley-sons',
    name: 'Kirtsaeng v. John Wiley & Sons, Inc.',
    citation: '568 U.S. 519 (2013)',
    litigationTypeSlug: 'intellectual-property',
    litigationTypeName: 'IP Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2013-03-19',
    facts:
      'Supap Kirtsaeng, a Thai citizen studying mathematics at Cornell and USC, asked friends and family in Thailand to buy English-language textbooks published abroad by Wiley\'s Asian subsidiary at low local prices and ship them to him in the United States. He resold the books on eBay, generating roughly $900,000 in revenue and tens of thousands of dollars in profit. Wiley sued for copyright infringement, arguing that the importation and resale of foreign-made editions violated its exclusive distribution right under 17 U.S.C. § 602(a)(1). Kirtsaeng invoked the first sale doctrine of § 109(a), which permits the owner of a copy "lawfully made under this title" to resell it without permission. The case turned on whether "lawfully made under this title" includes copies manufactured abroad.',
    keyLegalIssues: [
      'Whether the first sale doctrine applies to copies of copyrighted works lawfully manufactured abroad',
      'The meaning of "lawfully made under this title" in 17 U.S.C. § 109(a)',
      'The interaction between the importation right of § 602(a)(1) and first sale under § 109(a)',
    ],
    plaintiffArguments:
      "Wiley argued that \"lawfully made under this title\" imposes a geographical limitation, covering only copies manufactured in the United States where the Copyright Act applies. It contended that Congress enacted § 602(a)(1) specifically to let copyright owners segment international markets and prevent unauthorized importation of cheaper foreign editions. Wiley warned that a contrary rule would destroy publishers' ability to offer affordable editions in developing countries, since those copies would flow back into the U.S. market.",
    defendantArguments:
      'Kirtsaeng argued that "lawfully made under this title" means made in compliance with the Copyright Act — i.e., with the copyright owner\'s authorization — regardless of where manufacturing occurred. He invoked the common-law refusal to permit restraints on the alienation of chattels, a doctrine centuries old. He and supporting amici (libraries, used-book dealers, museums, retailers) warned of "horribles": a geographic rule would cloud title to billions of foreign-made books, cars containing copyrighted software, and museum-displayed artworks.',
    proceduralHistory:
      'The Southern District of New York barred Kirtsaeng\'s first sale defense, and a jury found willful infringement, awarding Wiley $600,000 in statutory damages. The Second Circuit affirmed, holding first sale inapplicable to foreign-manufactured copies. The Supreme Court reversed 6-3.',
    finalDecision:
      'The Supreme Court held that the first sale doctrine applies to copies lawfully made abroad, so Kirtsaeng\'s importation and resale of authorized foreign editions did not infringe. The judgment against him was reversed.',
    judicialReasoning:
      'Justice Breyer\'s majority opinion concluded that "lawfully made under this title" is a non-geographical phrase meaning "in accordance with" the Copyright Act, based on text, context, and statutory history. The Court emphasized the common law\'s deep hostility to restraints on alienation, quoting Lord Coke, and reasoned that Congress would not have silently overturned that tradition. The majority found the practical consequences of a geographic interpretation intolerable: libraries could not circulate foreign-printed books, used-car sales could implicate software copyrights, and retailers selling foreign-made goods with copyrighted packaging would face liability. The Court acknowledged the decision limits market segmentation but held the Copyright Act provides no right to divide markets geographically.',
    legalStandards: [
      'First sale (exhaustion) doctrine, 17 U.S.C. § 109(a)',
      'Importation right, 17 U.S.C. § 602(a)(1)',
      'Statutory interpretation guided by common-law presumptions against restraints on alienation',
    ],
    keyPrecedents: [
      'Quality King Distributors, Inc. v. L\'anza Research International, Inc., 523 U.S. 135 (1998)',
      'Bobbs-Merrill Co. v. Straus, 210 U.S. 339 (1908)',
    ],
    evidenceAnalysis:
      "The case was decided on statutory interpretation, so the most persuasive material was textual and historical rather than factual: the amici's concrete examples of disrupted commerce — library lending, used-book markets, and products with embedded copyrighted components — proved decisive in showing the unworkability of a geographic rule. Wiley's evidence of genuine price discrimination harms was real but could not overcome the statutory text and alienability tradition. Kirtsaeng's substantial profits, while making him an unsympathetic figure, were legally irrelevant once the first sale defense applied.",
    alternativeOutcomes:
      "Had Wiley prevailed, copyright owners could have gained perpetual downstream control over any foreign-manufactured copy, incentivizing offshoring of printing to preserve resale restrictions. Gray-market importation businesses would have been extinguished, and secondary markets for countless goods containing copyrighted elements would have faced legal uncertainty. Congress could still legislate international exhaustion rules, but no such legislation has displaced Kirtsaeng.",
    lessonsLearned: [
      'International exhaustion now governs U.S. copyright: authorized foreign sales exhaust U.S. distribution rights',
      'Geographic price discrimination strategies cannot rely on copyright law to block arbitrage',
      'Practical consequences and amicus "parade of horribles" can heavily influence statutory interpretation',
      'First sale is a robust shield for resellers of lawfully purchased genuine goods',
    ],
    bestPractices: [
      'Structure international pricing with the expectation that gray-market arbitrage is lawful under copyright',
      'Use contractual, logistical, and product-differentiation tools rather than copyright to manage regional markets',
      'Resellers should document the authorized provenance of imported goods to secure first sale protection',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Established international exhaustion in U.S. copyright law, legalizing the importation and resale of lawfully made foreign editions.',
    isFeatured: false,
    parties: [
      { id: 'kirtsaeng-p', name: 'John Wiley & Sons, Inc.', role: 'PLAINTIFF', counsel: 'Theodore Olson, Gibson, Dunn & Crutcher LLP' },
      { id: 'kirtsaeng-d', name: 'Supap Kirtsaeng', role: 'DEFENDANT', counsel: 'E. Joshua Rosenkranz, Orrick, Herrington & Sutcliffe LLP' },
    ],
  },
  {
    id: 'waymo-v-uber',
    name: 'Waymo LLC v. Uber Technologies, Inc.',
    citation: 'No. 3:17-cv-00939 (N.D. Cal. 2018)',
    litigationTypeSlug: 'intellectual-property',
    litigationTypeName: 'IP Litigation',
    court: 'U.S. District Court for the Northern District of California',
    jurisdiction: 'United States (Federal)',
    filingDate: '2017-02-23',
    decisionDate: '2018-02-09',
    facts:
      "Waymo, Alphabet's self-driving car unit, alleged that its former star engineer Anthony Levandowski downloaded approximately 14,000 confidential files — including designs for Waymo's custom LiDAR sensor systems — from a secure server shortly before resigning. Levandowski founded the self-driving truck startup Otto, which Uber acquired for roughly $680 million within months. Waymo discovered the alleged theft partly through an errantly copied email from a LiDAR component vendor showing an Uber circuit board design strikingly similar to Waymo's. Waymo sued Uber for trade secret misappropriation under the federal Defend Trade Secrets Act and California law, along with patent infringement claims that were later dropped. The case proceeded to a high-profile jury trial in San Francisco in February 2018 before Judge William Alsup.",
    keyLegalIssues: [
      'Whether Uber acquired or used Waymo trade secrets embodied in the files Levandowski downloaded',
      "Whether the asserted LiDAR design information qualified as trade secrets subject to reasonable secrecy measures",
      'Corporate liability for trade secret misappropriation by an acquired founder/employee',
      'The scope of injunctive relief and damages for threatened misappropriation',
    ],
    plaintiffArguments:
      "Waymo argued that Levandowski's mass download of 14,000 files weeks before resigning, followed by Uber's rapid acquisition of his months-old startup for $680 million, demonstrated a calculated scheme to steal years of LiDAR research. It pointed to due-diligence reports showing Uber knew Levandowski possessed Google information before closing the deal, and to meetings between Levandowski and Uber executives while he was still employed at Waymo. Waymo sought damages approaching $1.9 billion and an injunction halting Uber's self-driving program.",
    defendantArguments:
      "Uber argued that none of the downloaded files ever reached Uber's servers and that its LiDAR designs were independently developed and fundamentally different from Waymo's. It contended that much of the asserted information was general engineering knowledge or publicly known optical principles, not protectable trade secrets. Uber emphasized that Waymo could not show actual use of any specific secret in an Uber product, making the case one of suspicion and inference rather than proof.",
    proceduralHistory:
      'Judge Alsup denied a sweeping preliminary injunction but barred Levandowski from LiDAR work and referred the matter to federal prosecutors. Levandowski invoked the Fifth Amendment throughout, leading Uber to fire him for failing to cooperate. After extensive discovery battles — including late disclosure of the explosive "Jacobs letter" alleging Uber intelligence-gathering misconduct, which delayed trial — the jury trial began in February 2018 and ended after five days when the parties settled.',
    finalDecision:
      "The case settled mid-trial: Uber agreed to give Waymo equity equal to about 0.34% of Uber, valued at approximately $245 million, and agreed not to incorporate Waymo's confidential information into its hardware or software. Uber did not admit wrongdoing. Levandowski was separately indicted, pleaded guilty in 2020 to one count of trade secret theft, was sentenced to 18 months, and was pardoned by President Trump in January 2021.",
    judicialReasoning:
      "Because the case settled, no final merits ruling issued, but Judge Alsup's pretrial orders were influential: he found Waymo's evidence of Levandowski's download compelling enough to enjoin his LiDAR work and to make a rare criminal referral, while also noting Waymo had not yet proven the files migrated to Uber's servers. He sharply criticized litigation conduct on both sides, sanctioning late disclosures and policing overbroad trade secret designations. His rulings narrowing Waymo's asserted secrets from over 100 to nine illustrate judicial insistence that plaintiffs identify trade secrets with particularity rather than asserting entire technology domains.",
    legalStandards: [
      'Defend Trade Secrets Act, 18 U.S.C. § 1836 (misappropriation by improper acquisition, disclosure, or use)',
      'California Uniform Trade Secrets Act',
      'Requirement to identify trade secrets with reasonable particularity',
      'Preliminary injunction standard (Winter v. NRDC)',
    ],
    keyPrecedents: [
      'E.I. duPont deNemours & Co. v. Christopher, 431 F.2d 1012 (5th Cir. 1970)',
      'Silvaco Data Systems v. Intel Corp., 184 Cal. App. 4th 210 (2010)',
    ],
    evidenceAnalysis:
      "Waymo's strongest evidence was forensic: server logs proving Levandowski downloaded 14,000 files and wiped his laptop, plus the Stroz Friedberg due-diligence report showing Uber knew of the downloads before acquiring Otto. The accidentally forwarded vendor email showing a similar circuit board provided a vivid trial centerpiece. Waymo's weakness was the missing link — no direct proof the files reached Uber systems or were embodied in Uber's final designs, which had diverged technically. Levandowski's blanket Fifth Amendment invocation created damaging adverse inferences but could not be attributed wholesale to Uber.",
    alternativeOutcomes:
      "Had the trial gone to verdict, Waymo faced real risk of a defense verdict given the gap between proof of downloading and proof of use, which likely motivated accepting equity rather than the $1.9 billion demanded. A Waymo blowout verdict with an injunction could have crippled Uber's autonomous program ahead of its IPO. If Uber's due diligence had surfaced and quarantined the files before acquisition — or if it had declined the Otto deal — the entire dispute might have been avoided.",
    lessonsLearned: [
      'Acqui-hiring talent from competitors carries severe trade secret risk requiring rigorous due diligence and quarantine protocols',
      'Forensic evidence of mass downloads is powerful, but plaintiffs still must connect secrets to actual use',
      'Trade secret plaintiffs must identify their secrets with particularity or face claim narrowing',
      'Civil trade secret cases can spawn parallel criminal prosecutions of individual employees',
    ],
    bestPractices: [
      'Implement exit interviews, device forensics, and access monitoring for departing employees in sensitive roles',
      'In acquisitions of competitor-spawned startups, conduct independent forensic diligence and contractually wall off tainted materials',
      'Mark, segment, and access-restrict crown-jewel technical files to strengthen reasonable-measures proof',
    ],
    outcome: 'Settlement',
    significance:
      'The highest-profile trade secret case of the autonomous vehicle era, demonstrating the perils of competitor talent acquisition and yielding a $245 million equity settlement.',
    isFeatured: false,
    parties: [
      { id: 'waymo-v-uber-p', name: 'Waymo LLC', role: 'PLAINTIFF', counsel: 'Quinn Emanuel Urquhart & Sullivan LLP (Charles Verhoeven)' },
      { id: 'waymo-v-uber-d', name: 'Uber Technologies, Inc. and Ottomotto LLC', role: 'DEFENDANT', counsel: "Morrison & Foerster LLP; Boies Schiller Flexner LLP (Bill Carmody, Susman Godfrey at trial)" },
    ],
  },
  {
    id: 'impression-products-v-lexmark',
    name: 'Impression Products, Inc. v. Lexmark International, Inc.',
    citation: '581 U.S. 360 (2017)',
    litigationTypeSlug: 'intellectual-property',
    litigationTypeName: 'IP Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2017-05-30',
    facts:
      'Lexmark sold patented toner cartridges both at full price with no restrictions and at a discount through its "Return Program," which contractually required buyers to use the cartridge once and return it to Lexmark rather than transfer it to a refiller. Remanufacturers, including small West Virginia company Impression Products, acquired used Return Program cartridges, refilled them with toner, replaced microchips Lexmark installed to block reuse, and resold them. Impression also imported and resold cartridges Lexmark had originally sold abroad. Lexmark sued for patent infringement, contending that its post-sale restrictions and the foreign location of some sales preserved its patent rights against downstream resellers. Impression argued that Lexmark\'s authorized sales — domestic or foreign, restricted or not — exhausted all patent rights in the sold articles.',
    keyLegalIssues: [
      'Whether a patentee\'s sale subject to express post-sale restrictions exhausts patent rights in the item sold',
      'Whether an authorized sale outside the United States exhausts U.S. patent rights',
      'The relationship between patent exhaustion and contract remedies',
    ],
    plaintiffArguments:
      'Lexmark argued that the Patent Act lets patentees grant restricted licenses, so sales made under clearly communicated single-use/no-resale restrictions do not exhaust infringement remedies against downstream violators, consistent with Federal Circuit precedent in Mallinckrodt. As to foreign sales, it argued U.S. patent rights are territorial: a sale abroad, where U.S. patents confer no monopoly and command no premium, cannot exhaust U.S. rights. Lexmark contended its program legitimately funded discounts and combated low-quality remanufacturing.',
    defendantArguments:
      'Impression Products argued that patent exhaustion is an absolute limit on patent rights rooted in the common-law rule against restraints on alienation: once a patentee sells an item, it is private property and the patent laws no longer follow it. Restrictions may be enforceable as contracts against the original purchaser but cannot convert resale into patent infringement by remote parties. On foreign sales, Impression invoked Kirtsaeng, arguing exhaustion principles apply identically regardless of where the authorized sale occurs.',
    proceduralHistory:
      'The district court held domestic restricted sales exhausted Lexmark\'s rights but foreign sales did not. The en banc Federal Circuit ruled for Lexmark on both questions, reaffirming Mallinckrodt and Jazz Photo. The Supreme Court reversed on both issues, 8-0 on domestic exhaustion and 7-1 on international exhaustion (Justice Ginsburg dissenting in part).',
    finalDecision:
      'The Supreme Court held that a patentee\'s decision to sell a product exhausts all of its patent rights in that item, regardless of any restrictions the patentee purports to impose and regardless of whether the sale occurs in the United States or abroad. Lexmark\'s infringement claims against Impression Products failed entirely.',
    judicialReasoning:
      'Chief Justice Roberts wrote that exhaustion is not a presumption about implied authority but "a limit on the scope of the patentee\'s rights," grounded in the ancient common-law hostility to restraints on alienation. The Court reasoned that allowing patent infringement suits to enforce resale restrictions would clog the channels of commerce — using the example of an auto repair shop needing to verify patent permissions on every part. Restrictions may be enforceable through contract law against purchasers in privity, but "the patent laws provide no basis" for enforcing them downstream. On foreign sales, the Court extended Kirtsaeng\'s logic: nothing in the Patent Act shows Congress intended exhaustion to stop at the border, because exhaustion turns on the patentee\'s decision to sell, not the location or price of the sale.',
    legalStandards: [
      'Patent exhaustion (first sale) doctrine',
      'Common-law rule against restraints on alienation of chattels',
      'International exhaustion paralleling Kirtsaeng in copyright',
    ],
    keyPrecedents: [
      'Kirtsaeng v. John Wiley & Sons, Inc., 568 U.S. 519 (2013)',
      'Quanta Computer, Inc. v. LG Electronics, Inc., 553 U.S. 617 (2008)',
      'United States v. Univis Lens Co., 316 U.S. 241 (1942)',
    ],
    evidenceAnalysis:
      "As a pure question of law on stipulated facts, the case turned on doctrine rather than disputed evidence: it was undisputed that Lexmark's restrictions were clear and communicated, which made the ruling cleaner — even perfectly drafted restrictions cannot preserve patent remedies after sale. The practical commerce arguments (used goods markets, repair industries) advanced by Impression and amici proved highly persuasive. Lexmark's economic evidence about discount programs and foreign pricing was acknowledged but deemed legally irrelevant to exhaustion's bright-line character.",
    alternativeOutcomes:
      'Had Lexmark prevailed, manufacturers could have attached patent-enforced servitudes to everyday goods, exposing repair shops, refurbishers, and resellers to infringement liability and entrenching single-use product models. A split ruling preserving territorial limits on exhaustion would have encouraged firms to route first sales through foreign channels to retain U.S. patent control. Companies must now rely on contract claims against direct purchasers, technological measures, or business-model design rather than patent suits against downstream resellers.',
    lessonsLearned: [
      'Patent rights in a sold article terminate at the first authorized sale, anywhere in the world',
      'Post-sale restrictions are contract matters enforceable only against parties in privity',
      'Exhaustion doctrines in patent and copyright are now harmonized around international exhaustion',
      'Business models premised on controlling aftermarkets need non-patent enforcement strategies',
    ],
    bestPractices: [
      'Use leasing or licensing structures (rather than sales) where genuine post-transfer control is essential',
      'Draft robust contractual remedies against direct purchasers instead of relying on patent suits downstream',
      'Reassess global pricing and distribution given that foreign sales exhaust U.S. patent rights',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Established that an authorized sale anywhere in the world exhausts all U.S. patent rights, ending patent-based control of resale and repair markets.',
    isFeatured: false,
    parties: [
      { id: 'impression-lexmark-p', name: 'Lexmark International, Inc.', role: 'PLAINTIFF', counsel: 'Constantine Trela Jr., Sidley Austin LLP' },
      { id: 'impression-lexmark-d', name: 'Impression Products, Inc.', role: 'DEFENDANT', counsel: 'Andrew Pincus, Mayer Brown LLP' },
    ],
  },

  // ===================== Patent Litigation =====================
  {
    id: 'markman-v-westview-instruments',
    name: 'Markman v. Westview Instruments, Inc.',
    citation: '517 U.S. 370 (1996)',
    litigationTypeSlug: 'patent',
    litigationTypeName: 'Patent Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '1996-04-23',
    facts:
      'Herbert Markman owned a patent on an "inventory control and reporting system" for dry-cleaning businesses that could "maintain an inventory total" and detect spurious additions or deletions of clothing articles. He sued Westview Instruments, whose product tracked invoices and transaction totals (dollars owed) but did not track articles of clothing through the cleaning process. At trial, a jury found infringement after hearing competing testimony — including from Markman himself and his expert — on the meaning of the claim term "inventory." The district court granted judgment as a matter of law for Westview, construing "inventory" to require tracking articles of clothing, not just cash or invoices. The question on appeal was whether the judge or the jury should interpret the meaning of patent claims, given the Seventh Amendment jury trial right.',
    keyLegalIssues: [
      'Whether patent claim construction is a question for the judge or the jury',
      'Whether the Seventh Amendment guarantees a jury determination of claim meaning',
      'How the term "inventory" in the patent claims should be construed',
    ],
    plaintiffArguments:
      'Markman argued that infringement actions were tried to juries at English common law in 1791, so the Seventh Amendment preserves a jury right extending to all issues bound up in infringement, including the meaning of disputed claim terms. He contended that claim construction often turns on credibility battles between expert witnesses — classic jury work. On the merits, he argued "inventory" could encompass invoices and transaction totals, as his expert had testified.',
    defendantArguments:
      'Westview argued that construing a patent claim is interpretation of a written instrument, a task historically and functionally allocated to judges, like construction of contracts and deeds. It contended judges are better positioned to give claim terms a consistent, uniform meaning across cases, and that no direct historical antecedent showed juries construing patent claims in 1791. On the merits, Westview argued its device tracked nothing but invoices and dollars, falling outside any sensible reading of "inventory" in the patent.',
    proceduralHistory:
      'After the jury verdict for Markman, the district court granted judgment as a matter of law for Westview based on its own claim construction. The en banc Federal Circuit affirmed, holding claim construction is a matter of law for the court. The Supreme Court granted certiorari and unanimously affirmed.',
    finalDecision:
      'The Supreme Court unanimously held that the construction of patent claims is exclusively for the court, not the jury, and affirmed the judgment of non-infringement for Westview. Judges, not juries, define the meaning and scope of patent claim terms.',
    judicialReasoning:
      'Justice Souter\'s opinion applied the historical test for the Seventh Amendment and found no clear 1791 practice of juries construing patent claim terms — indeed, modern claims did not yet exist. Absent decisive history, the Court turned to functional considerations: judges, trained in exegesis of written instruments, are better suited than juries to interpret technical patent documents in light of the specification and prosecution history. The Court stressed the importance of uniformity: treating claim construction as a legal question subject to appellate review promotes consistent treatment of a given patent across cases and provides certainty to competitors. Credibility determinations, while occasionally relevant, are subsumed within the broader interpretive task.',
    legalStandards: [
      'Seventh Amendment historical test for jury trial rights',
      'Claim construction as a question of law for the court',
      'Interpretation of claims in light of specification and prosecution history',
    ],
    keyPrecedents: [
      'Winans v. Denmead, 56 U.S. 330 (1854)',
      'Bischoff v. Wethered, 76 U.S. 812 (1870)',
      'Tull v. United States, 481 U.S. 412 (1987)',
    ],
    evidenceAnalysis:
      "The intrinsic record — the claim language, specification, and prosecution history describing tracking of clothing articles — was the decisive interpretive evidence, strongly supporting Westview's construction of \"inventory.\" Markman's reliance on his own testimony and his expert's broad reading of \"inventory\" proved weak because extrinsic testimony cannot override the patent's internal logic. The case demonstrated that self-serving inventor testimony about claim meaning carries little weight against the written record.",
    alternativeOutcomes:
      'Had the Court assigned claim construction to juries, patent trials would feature black-box verdicts on claim scope with minimal appellate correction, producing inconsistent constructions of the same patent against different defendants. Litigation strategy would center on jury persuasion rather than the intrinsic record. The now-universal "Markman hearing" — often case-dispositive — would not exist, and summary judgment would resolve far fewer patent cases.',
    lessonsLearned: [
      'Claim construction is the pivotal, judge-decided phase of nearly every patent case',
      'The intrinsic record (claims, specification, prosecution history) dominates extrinsic expert testimony',
      'Patent drafting choices echo for decades — define key terms deliberately',
      'Uniformity and appellate reviewability are core values in patent adjudication',
    ],
    bestPractices: [
      'Draft patent claims with explicit definitions for commercially critical terms',
      'Prepare Markman strategy early; claim construction often effectively decides the case',
      'Build the prosecution history with future litigation interpretation in mind, avoiding careless disclaimers',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Established that judges, not juries, construe patent claims, creating the Markman hearing that now anchors all U.S. patent litigation.',
    isFeatured: false,
    parties: [
      { id: 'markman-p', name: 'Herbert Markman and Positek, Inc.', role: 'PLAINTIFF', counsel: 'William B. Mallin, Eckert Seamans Cherin & Mellott' },
      { id: 'markman-d', name: 'Westview Instruments, Inc. and Althon Enterprises, Inc.', role: 'DEFENDANT', counsel: 'Frank H. Griffin III, Gollatz, Griffin & Ewing' },
    ],
  },
  {
    id: 'ksr-international-v-teleflex',
    name: 'KSR International Co. v. Teleflex Inc.',
    citation: '550 U.S. 398 (2007)',
    litigationTypeSlug: 'patent',
    litigationTypeName: 'Patent Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2007-04-30',
    facts:
      "Teleflex held an exclusive license to the Engelgau patent, which claimed an adjustable automobile pedal assembly combined with an electronic throttle-position sensor mounted on the pedal's fixed pivot point. KSR, a Canadian auto parts supplier, developed an adjustable pedal with an electronic sensor for General Motors trucks. Teleflex sued for infringement; KSR responded that the asserted claim merely combined two known elements — adjustable pedals and electronic pedal sensors — in an obvious way, since the auto industry was actively converting from mechanical to electronic throttle controls. The district court agreed and invalidated the claim as obvious, but the Federal Circuit reversed under its rigid \"teaching, suggestion, or motivation\" (TSM) test, which required specific prior art evidence motivating the combination. The Supreme Court took the case to review the proper standard for obviousness under 35 U.S.C. § 103.",
    keyLegalIssues: [
      "Whether the Federal Circuit's rigid teaching-suggestion-motivation (TSM) test is the exclusive way to prove obviousness",
      'The proper framework for combining known prior art elements under 35 U.S.C. § 103',
      'The role of common sense, design incentives, and predictable results in the obviousness analysis',
    ],
    plaintiffArguments:
      'KSR (petitioner) argued that the TSM test, rigidly applied, conflicts with Graham v. John Deere and grants patents on trivial combinations any skilled mechanic would make. It contended that market pressure to adopt electronic throttle control made mounting a known sensor on a known adjustable pedal\'s fixed pivot an obvious, predictable design step with a finite set of solutions. KSR argued obviousness must remain a flexible, expansive inquiry informed by common sense, not a checklist requiring explicit prior art statements.',
    defendantArguments:
      'Teleflex argued that the TSM test usefully guards against hindsight bias — the temptation to view inventions as obvious only after seeing them. It contended no prior art reference taught placing the sensor on the fixed pivot point of an adjustable pedal, and that the specific combination solved problems (wire chafing, sensor movement) the prior art had not addressed. Teleflex warned that loosening the standard would destabilize thousands of issued patents and chill incremental innovation.',
    proceduralHistory:
      'The Eastern District of Michigan granted summary judgment that the asserted claim was invalid as obvious. The Federal Circuit reversed, faulting the district court for not strictly applying the TSM test. The Supreme Court granted certiorari and unanimously reversed the Federal Circuit.',
    finalDecision:
      'The Supreme Court unanimously held that the Federal Circuit\'s rigid application of the TSM test was inconsistent with § 103 and Graham, and reinstated the judgment that Teleflex\'s asserted claim was invalid as obvious. Obviousness is an expansive, flexible inquiry in which common sense and design incentives matter.',
    judicialReasoning:
      'Justice Kennedy wrote that "[t]he combination of familiar elements according to known methods is likely to be obvious when it does no more than yield predictable results." The Court held that any need or problem known in the field — not just the problem the patentee addressed — can supply a reason to combine elements, and that a person of ordinary skill is "a person of ordinary creativity, not an automaton." Where there is a design need or market pressure and a finite number of identified, predictable solutions, pursuing them is "obvious to try" and may show obviousness. While TSM can provide "helpful insight," it cannot become a rigid mandatory formula; courts may consider the inferences and creative steps a skilled artisan would employ. Applying this framework, mounting an available sensor on the pedal\'s fixed pivot was the predictable answer to a known design problem.',
    legalStandards: [
      '35 U.S.C. § 103 obviousness',
      'Graham v. John Deere factors (scope of prior art, differences, level of skill, secondary considerations)',
      '"Obvious to try" where finite predictable solutions exist',
      'Flexible rather than rigid application of teaching-suggestion-motivation evidence',
    ],
    keyPrecedents: [
      'Graham v. John Deere Co., 383 U.S. 1 (1966)',
      'United States v. Adams, 383 U.S. 39 (1966)',
      'Sakraida v. Ag Pro, Inc., 425 U.S. 273 (1976)',
    ],
    evidenceAnalysis:
      "The prior art record was devastating to Teleflex: the Asano patent disclosed an adjustable pedal with a fixed pivot, other references taught pedal-mounted electronic sensors, and industry-wide adoption of electronic throttles supplied an evident motivation to combine. Teleflex's expert declaration asserting non-obviousness was conclusory and could not create a genuine factual dispute. Secondary-consideration evidence (commercial success, long-felt need) was thin, leaving the claim with little to rebut the strong prima facie case of obviousness.",
    alternativeOutcomes:
      'Had the Court endorsed rigid TSM, patents on predictable combinations would have remained hard to invalidate, sustaining a lower quality bar at the PTO and in litigation. A Teleflex victory would have entrenched the Federal Circuit\'s formalism and made summary judgment of obviousness rare. Instead, KSR triggered a wave of invalidations and PTO rejections, and combination patents now require demonstrable unpredictability or unexpected results to survive.',
    lessonsLearned: [
      'Combining known elements with predictable results is presumptively vulnerable to obviousness attack',
      'Common sense and market pressures are legitimate evidence of motivation to combine',
      'Conclusory expert declarations cannot stave off summary judgment of obviousness',
      'Strong secondary-consideration evidence is essential insurance for combination patents',
    ],
    bestPractices: [
      'Draft applications emphasizing unexpected results and technical problems overcome, not just element combinations',
      'Develop rigorous evidence of commercial success, failure of others, and skepticism to rebut obviousness',
      'Challengers should map design incentives and industry trends to supply motivation-to-combine narratives',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Replaced the rigid TSM test with a flexible, common-sense obviousness standard, substantially raising the bar for combination patents.',
    isFeatured: false,
    parties: [
      { id: 'ksr-p', name: 'KSR International Co.', role: 'PLAINTIFF', counsel: 'James W. Dabney, Fried, Frank, Harris, Shriver & Jacobson LLP' },
      { id: 'ksr-d', name: 'Teleflex Inc. and Technology Holding Co.', role: 'DEFENDANT', counsel: 'Thomas C. Goldstein, Goldstein & Howe' },
    ],
  },
  {
    id: 'alice-corp-v-cls-bank',
    name: 'Alice Corp. Pty. Ltd. v. CLS Bank International',
    citation: '573 U.S. 208 (2014)',
    litigationTypeSlug: 'patent',
    litigationTypeName: 'Patent Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2014-06-19',
    facts:
      "Alice Corporation, an Australian company, held patents claiming a computerized scheme for mitigating settlement risk in financial transactions — the risk that one party to an agreed exchange will fail to pay. The claims covered methods of exchanging financial obligations using a computer as a third-party intermediary that maintains \"shadow\" records and permits only transactions for which both parties have adequate funds, plus corresponding system and media claims. CLS Bank, which operates a global currency-transaction settlement network, sought a declaratory judgment that the patents were invalid as claiming an abstract idea. Alice counterclaimed for infringement. The district court invalidated the claims under 35 U.S.C. § 101, and a deeply fractured en banc Federal Circuit affirmed in seven separate opinions, prompting Supreme Court review.",
    keyLegalIssues: [
      'Whether claims to a computer-implemented scheme for mitigating settlement risk are patent-eligible under 35 U.S.C. § 101',
      'How the Mayo two-step framework applies to abstract ideas implemented on generic computers',
      'Whether system and media claims fare differently from method claims for eligibility purposes',
    ],
    plaintiffArguments:
      "CLS Bank (the declaratory plaintiff) argued that Alice's claims recited the abstract idea of intermediated settlement — a fundamental economic practice as old as commerce itself — and merely appended instructions to implement it on a generic computer. It contended that allowing such claims would let drafters monopolize basic economic building blocks by clever claim formatting. Generic computer recitations, CLS argued, cannot supply an inventive concept under Mayo.",
    defendantArguments:
      "Alice argued that its claims were not abstract because they required a specific, concrete computer system performing particular operations — creating shadow accounts, obtaining real-time balances, issuing irrevocable instructions — that no human intermediary could practically execute. It contended that § 101 is a coarse filter and that concerns about claim breadth belong to §§ 102, 103, and 112. Alice warned that an expansive abstract-idea exception would imperil hundreds of thousands of software patents.",
    proceduralHistory:
      'The District Court for the District of Columbia held all claims patent-ineligible. The en banc Federal Circuit affirmed in a splintered per curiam decision producing seven opinions and no majority rationale. The Supreme Court granted certiorari and unanimously affirmed.',
    finalDecision:
      "The Supreme Court unanimously held all of Alice's claims invalid under § 101: the claims were drawn to the abstract idea of intermediated settlement, and generic computer implementation failed to transform that idea into a patent-eligible invention. Method, system, and media claims all fell together.",
    judicialReasoning:
      "Justice Thomas applied the two-step framework from Mayo: first, determine whether the claims are directed to a patent-ineligible concept; second, search for an \"inventive concept\" — an element or combination ensuring the claim amounts to significantly more than the ineligible concept itself. At step one, intermediated settlement, like the risk hedging in Bilski, is a fundamental economic practice and thus an abstract idea. At step two, the Court held that stating an abstract idea and adding \"apply it with a computer\" cannot confer eligibility: the claimed functions (record-keeping, obtaining data, issuing instructions) were purely conventional uses of a generic computer. The Court warned against allowing the draftsman's art to circumvent the rule, holding the system claims failed for the same reasons as the methods. The opinion deliberately declined to precisely define \"abstract idea,\" leaving lower courts to develop the contours.",
    legalStandards: [
      '35 U.S.C. § 101 patent-eligible subject matter',
      'Alice/Mayo two-step framework (directed to ineligible concept; inventive concept)',
      'Generic computer implementation insufficient to confer eligibility',
    ],
    keyPrecedents: [
      'Mayo Collaborative Services v. Prometheus Laboratories, Inc., 566 U.S. 66 (2012)',
      'Bilski v. Kappos, 561 U.S. 593 (2010)',
      'Gottschalk v. Benson, 409 U.S. 63 (1972)',
    ],
    evidenceAnalysis:
      "The decisive material was the claims themselves read against historical context: evidence that intermediated settlement was a longstanding economic practice (the Court cited references on clearing-houses dating to the 19th century) anchored the abstract-idea holding. Alice's specification undercut its own case by describing implementation on wholly conventional hardware, leaving nothing technical to supply an inventive concept. Expert assertions about implementation complexity were unpersuasive because the claims recited functions, not specific technological solutions.",
    alternativeOutcomes:
      "Had Alice prevailed, business-method and software patents claiming economic practices \"on a computer\" would have remained broadly enforceable, and the wave of § 101 motions that followed would never have occurred. A decision adopting the Federal Circuit dissenters' view that system claims survive would have made eligibility turn on claim format, inviting drafting gamesmanship. Instead, Alice spawned thousands of invalidations at the pleading stage and reshaped software patent prosecution toward technical-solution framing.",
    lessonsLearned: [
      'Claiming an economic or organizational practice with generic computer implementation is fatal under § 101',
      'Eligibility can be resolved early — often on the pleadings — making it a potent defense weapon',
      'Claim format (method vs. system vs. media) cannot rescue an abstract idea',
      'Patent drafting must articulate a specific technical improvement, not a business result',
    ],
    bestPractices: [
      'Draft software claims around concrete technical improvements to computer functionality with supporting specification detail',
      'Defendants should evaluate Alice motions at the outset of any software or business-method patent case',
      'Portfolio managers should audit pre-2014 software patents for eligibility vulnerability before assertion',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Established the Alice/Mayo two-step eligibility test that invalidated vast swaths of software and business-method patents.',
    isFeatured: true,
    parties: [
      { id: 'alice-p', name: 'CLS Bank International and CLS Services Ltd.', role: 'PLAINTIFF', counsel: 'Mark A. Perry, Gibson, Dunn & Crutcher LLP' },
      { id: 'alice-d', name: 'Alice Corporation Pty. Ltd.', role: 'DEFENDANT', counsel: 'Carter G. Phillips, Sidley Austin LLP' },
    ],
  },
  {
    id: 'mayo-v-prometheus',
    name: 'Mayo Collaborative Services v. Prometheus Laboratories, Inc.',
    citation: '566 U.S. 66 (2012)',
    litigationTypeSlug: 'patent',
    litigationTypeName: 'Patent Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2012-03-20',
    facts:
      'Prometheus Laboratories was the exclusive licensee of patents claiming methods for optimizing thiopurine drug dosages used to treat autoimmune diseases like Crohn\'s disease. The claims recited administering a thiopurine drug, determining the level of certain metabolites in the patient\'s blood, and specifying threshold concentrations (e.g., below 230 pmol indicates a need to increase dosage; above 400 pmol indicates toxicity risk) that "indicate a need" to adjust the dose. Mayo Clinic laboratories had purchased and used Prometheus\'s diagnostic tests but announced in 2004 that they would offer their own competing test using somewhat different metabolite thresholds. Prometheus sued for infringement. The dispute presented whether claims essentially describing a natural correlation between metabolite levels and drug efficacy or toxicity are patent-eligible subject matter.',
    keyLegalIssues: [
      'Whether claims reciting correlations between metabolite levels and drug efficacy/toxicity claim unpatentable laws of nature',
      'What additional elements suffice to transform a law of nature into a patent-eligible application',
      'The relationship between § 101 eligibility and the novelty/obviousness inquiries',
    ],
    plaintiffArguments:
      "Mayo (the petitioner/accused infringer) argued that the claims preempt a natural law — the body's correlation between thiopurine metabolite concentrations and clinical effect — and add only conventional, pre-existing activity: administering the drug doctors already prescribed and measuring metabolites through known techniques. It contended such patents would tie up basic biological facts and obstruct medical practice and research. Mayo emphasized that the claims required no actual dosage change, merely that the doctor be informed of the correlation.",
    defendantArguments:
      "Prometheus argued that its claims did not monopolize a law of nature but described a specific, useful application: a concrete treatment protocol involving administering a drug to a patient and determining metabolite levels — transformative, hands-on steps satisfying the machine-or-transformation framework. It contended that the specific numeric thresholds reflected human ingenuity in calibrating treatment, not nature operating alone. Prometheus warned that invalidation would devastate investment in personalized medicine diagnostics.",
    proceduralHistory:
      "The Southern District of California held the claims invalid under § 101 as covering natural correlations. The Federal Circuit reversed twice — both before and, on GVR remand following Bilski v. Kappos, after — finding the administering and determining steps transformative. The Supreme Court granted certiorari again and unanimously reversed.",
    finalDecision:
      "The Supreme Court unanimously held Prometheus's claims invalid under § 101. The correlations between metabolite levels and drug effects are laws of nature, and the claims' additional steps — administering the drug, determining metabolite levels, and informing doctors of the thresholds — were well-understood, routine, conventional activity insufficient to confer eligibility.",
    judicialReasoning:
      'Justice Breyer wrote that a patent claim reciting a law of nature must contain "other elements or a combination of elements, sometimes referred to as an \'inventive concept,\'" sufficient to ensure the patent amounts to significantly more than the natural law itself. The administering step merely identified a pre-existing audience of doctors; the determining step told doctors to use well-known measurement methods; and the wherein clauses simply stated the natural correlations. "Simply appending conventional steps, specified at a high level of generality," cannot make a law of nature patentable. The Court grounded the rule in preemption concerns: patents on natural laws risk foreclosing future innovation disproportionately to the inventor\'s contribution. It rejected the government\'s suggestion to handle such claims solely under §§ 102 and 103, holding eligibility is an independent requirement.',
    legalStandards: [
      '35 U.S.C. § 101 and the law-of-nature exception',
      'Inventive concept requirement beyond well-understood, routine, conventional activity',
      'Preemption analysis as the animating concern of eligibility doctrine',
    ],
    keyPrecedents: [
      'Diamond v. Diehr, 450 U.S. 175 (1981)',
      'Parker v. Flook, 437 U.S. 584 (1978)',
      'Bilski v. Kappos, 561 U.S. 593 (2010)',
    ],
    evidenceAnalysis:
      "The intrinsic admissions in Prometheus's own patents were the most damaging evidence: the specifications acknowledged that administering thiopurines and measuring metabolite levels were already well known in the art, leaving only the correlation itself as the claimed contribution. Mayo's framing of the claims as preempting all practical use of the correlation proved persuasive. Prometheus's machine-or-transformation argument was weakened because the transformations occurred in routine, pre-existing clinical practice rather than in any inventive application.",
    alternativeOutcomes:
      'Had Prometheus prevailed, diagnostic companies could have patented observed biological correlations with minimal application detail, potentially restricting physicians\' use of clinical knowledge. The subsequent collapse of many diagnostic method patents (e.g., in Ariosa v. Sequenom) would not have occurred, and investment patterns in molecular diagnostics would differ markedly. A middle-ground ruling requiring specific treatment steps might have preserved "method of treatment" style claims while still barring bare correlations — an approach later courts partially developed in Vanda v. West-Ward.',
    lessonsLearned: [
      'Bare diagnostic correlations plus routine steps are patent-ineligible',
      'Specification admissions that steps are conventional can doom eligibility',
      'Method-of-treatment claims with specific administration steps fare better than diagnostic claims',
      'Mayo supplies step two of the Alice framework governing all eligibility disputes',
    ],
    bestPractices: [
      'Draft diagnostic claims around novel sample-preparation, assay, or treatment techniques rather than the correlation itself',
      'Avoid characterizing claim steps as routine or conventional in the specification',
      'Pair diagnostic insights with concrete therapeutic action steps to strengthen eligibility',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Created the "inventive concept" framework for laws of nature, sharply restricting diagnostic method patents and forming step two of the Alice test.',
    isFeatured: false,
    parties: [
      { id: 'mayo-p', name: 'Mayo Collaborative Services (d/b/a Mayo Medical Laboratories) and Mayo Clinic Rochester', role: 'PLAINTIFF', counsel: 'Stephen M. Shapiro, Mayer Brown LLP' },
      { id: 'mayo-d', name: 'Prometheus Laboratories, Inc.', role: 'DEFENDANT', counsel: 'Richard P. Bress, Latham & Watkins LLP' },
    ],
  },
  {
    id: 'amgen-v-sanofi',
    name: 'Amgen Inc. v. Sanofi',
    citation: '598 U.S. 594 (2023)',
    litigationTypeSlug: 'patent',
    litigationTypeName: 'Patent Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2023-05-18',
    facts:
      "Amgen obtained patents with claims covering an entire genus of antibodies defined by function: any antibody that binds to specific amino acid residues on the PCSK9 protein and blocks PCSK9 from binding to LDL receptors, thereby lowering LDL (\"bad\") cholesterol. Amgen markets the PCSK9-inhibiting antibody Repatha (evolocumab); Sanofi and Regeneron market the competing antibody Praluent (alirocumab), which has a different amino acid sequence. Amgen sued Sanofi for infringing the functional genus claims, which potentially covered millions of undisclosed antibodies, though Amgen's patents disclosed the sequences of only 26 antibodies plus a \"roadmap\" and \"conservative substitution\" technique for finding others. Sanofi argued the claims were invalid for lack of enablement because the specification did not teach skilled artisans how to make and use the full scope of the claimed genus without undue experimentation.",
    keyLegalIssues: [
      'Whether functional genus claims to antibodies satisfy the enablement requirement of 35 U.S.C. § 112',
      'How much disclosure is required to enable a claim covering an entire class defined by function',
      'Whether a research "roadmap" of trial-and-error screening constitutes enablement of the full claim scope',
    ],
    plaintiffArguments:
      'Amgen argued that its specification enabled the full genus because skilled scientists could reliably generate and identify additional antibodies meeting the claim limitations using the disclosed roadmap (immunize, screen for binding, test for blocking) and conservative amino acid substitutions. It contended that enablement requires only that skilled artisans be able to make and use the invention, not that the patentee identify every embodiment in advance. Amgen warned that demanding sequence-level disclosure for every covered antibody would gut genus claiming and let copyists make trivial changes to evade pioneering patents.',
    defendantArguments:
      "Sanofi argued that Amgen's claims covered potentially millions of antibodies while disclosing only 26, and that the \"roadmap\" was merely an invitation to engage in the same trial-and-error discovery process Amgen itself used — research assignments, not enablement. It contended antibody science is unpredictable: small sequence changes unpredictably alter binding and blocking, so nothing in the patent taught which of the vast candidate space would work. Sanofi argued that the breadth of functional claims demands commensurate enabling disclosure.",
    proceduralHistory:
      "After two jury trials in the District of Delaware (the first verdict was set aside on appeal), the district court granted judgment as a matter of law that the genus claims were not enabled. The Federal Circuit affirmed, holding the claims' broad functional scope was not enabled without undue experimentation. The Supreme Court granted certiorari and unanimously affirmed.",
    finalDecision:
      "The Supreme Court unanimously held Amgen's functional genus claims invalid for lack of enablement. If a patent claims an entire class of compositions defined by function, its specification must enable the entire class, and Amgen's 26 examples plus roadmap amounted to little more than research directions.",
    judicialReasoning:
      "Justice Gorsuch wrote that the enablement bargain is foundational: in exchange for the patent monopoly, the specification must enable skilled artisans \"to make and use\" the invention to the full scope claimed. Surveying classics — the incandescent lamp case (Sawyer & Man v. Edison), the Morse telegraph case, and Holland Furniture — the Court reaffirmed that broad functional claims require broad enabling disclosure. While a specification may call for a reasonable amount of experimentation, Amgen's roadmap and conservative-substitution approach offered \"little more than two research assignments\" amounting to trial and error across a vast, unpredictable antibody landscape. The Court emphasized that the more a party claims, the more it must enable, and rejected the argument that this rule applies special, heightened scrutiny to genus claims — it is simply the statute's longstanding demand.",
    legalStandards: [
      '35 U.S.C. § 112(a) enablement requirement',
      'Full-scope enablement: disclosure commensurate with claim breadth',
      'Reasonable versus undue experimentation (cf. In re Wands factors)',
    ],
    keyPrecedents: [
      "O'Reilly v. Morse, 56 U.S. 62 (1854)",
      'The Incandescent Lamp Patent (Consolidated Electric Light Co. v. McKeesport Light Co.), 159 U.S. 465 (1895)',
      'Holland Furniture Co. v. Perkins Glue Co., 277 U.S. 245 (1928)',
    ],
    evidenceAnalysis:
      "The scientific evidence on antibody unpredictability was central: expert testimony that substituting even single amino acids can unpredictably destroy binding made the genus's millions of candidates impossible to enable through 26 examples. Amgen's own discovery process — extensive screening campaigns — undercut its position by showing that finding working antibodies required exactly the trial-and-error its roadmap prescribed. Amgen's evidence that competitors could \"reliably\" generate in-scope antibodies was unpersuasive because reliability of a screening process is not the same as teaching which structures work.",
    alternativeOutcomes:
      'Had Amgen prevailed, broad functional genus claims could have locked up entire therapeutic targets, allowing the first company to find any working antibody against a target to exclude all structurally distinct competitors — Praluent would likely have been forced off the market or into royalties. The decision instead channels biopharma claiming toward structural definitions and disclosed sequences, and competitors can design around with different sequences. A middle-ground ruling endorsing roadmap-based enablement would have left genus claim validity to case-by-case expert battles.',
    lessonsLearned: [
      'Functional genus claims in unpredictable arts face near-fatal enablement scrutiny',
      'Disclosure must scale with claim breadth — the more claimed, the more taught',
      'A screening "roadmap" is a research plan, not enablement',
      'Biopharma exclusivity strategies must combine structural claims, regulatory exclusivities, and portfolio depth',
    ],
    bestPractices: [
      'Claim antibodies by sequence and structure with layered fallback positions rather than pure function',
      'Disclose as many working species and structure-function data as feasible before filing',
      'Challengers should develop expert evidence quantifying claim scope versus disclosed embodiments',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Reaffirmed full-scope enablement and effectively ended broad functional antibody genus claims in biotechnology.',
    isFeatured: false,
    parties: [
      { id: 'amgen-p', name: 'Amgen Inc.', role: 'PLAINTIFF', counsel: 'Jeffrey A. Lamken, MoloLamken LLP' },
      { id: 'amgen-d', name: 'Sanofi, Aventisub LLC, and Regeneron Pharmaceuticals, Inc.', role: 'DEFENDANT', counsel: 'Paul D. Clement, Clement & Murphy PLLC' },
    ],
  },

  // ===================== Trademark Litigation =====================
  {
    id: 'two-pesos-v-taco-cabana',
    name: 'Two Pesos, Inc. v. Taco Cabana, Inc.',
    citation: '505 U.S. 763 (1992)',
    litigationTypeSlug: 'trademark',
    litigationTypeName: 'Trademark Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '1992-06-26',
    facts:
      'Taco Cabana operated a chain of Mexican fast-food restaurants in San Antonio with a distinctive trade dress: a festive eating atmosphere with interior dining and patio areas decorated with artifacts, bright colors, paintings, and murals; a stepped exterior with a festive, vivid color scheme using top border paint and neon stripes; and bright awnings and umbrellas. Two Pesos opened restaurants in Houston with a strikingly similar motif and expanded into other markets, though notably not San Antonio where Taco Cabana operated. Taco Cabana sued under Section 43(a) of the Lanham Act for trade dress infringement. A jury found the trade dress was inherently distinctive but had not acquired secondary meaning, that there was a likelihood of confusion, and that Two Pesos\'s copying was deliberate. The legal question was whether inherently distinctive trade dress is protectable without proof of secondary meaning.',
    keyLegalIssues: [
      'Whether inherently distinctive trade dress is protectable under § 43(a) without proof of secondary meaning',
      'Whether trade dress should be treated differently from word marks in the distinctiveness analysis',
      'The proper application of the Abercrombie distinctiveness spectrum to restaurant décor',
    ],
    plaintiffArguments:
      'Taco Cabana argued that the Lanham Act\'s protection of unregistered marks under § 43(a) draws no distinction between trademarks and trade dress, so the established rule that inherently distinctive marks need no secondary meaning applies equally to trade dress. It contended that requiring secondary meaning would leave new and regional businesses defenseless against rapid copying by better-funded competitors before consumer association could develop. The jury\'s findings of inherent distinctiveness, deliberate copying, and likely confusion entitled it to relief.',
    defendantArguments:
      'Two Pesos argued that trade dress is different in kind from word marks: protecting restaurant décor without secondary meaning risks granting monopolies over decorative styles and themes, suppressing legitimate competition in look-and-feel. It contended that secondary meaning should be a uniform prerequisite for unregistered trade dress, consistent with Second Circuit law, to ensure protection only where consumers actually associate the dress with a single source. It also argued the décor elements were common to Mexican restaurants generally.',
    proceduralHistory:
      'A jury in the Southern District of Texas found for Taco Cabana, and the district court awarded damages (doubled for deliberateness) and attorney fees. The Fifth Circuit affirmed, holding inherently distinctive trade dress needs no secondary meaning. The Supreme Court granted certiorari to resolve a circuit split and affirmed.',
    finalDecision:
      'The Supreme Court unanimously held that inherently distinctive trade dress is protectable under § 43(a) without proof of secondary meaning. The judgment for Taco Cabana, including enhanced damages, was affirmed.',
    judicialReasoning:
      'Justice White wrote that § 43(a) protects "symbols" and "devices" capable of identifying source, and nothing in the statute\'s text supports treating trade dress less favorably than trademarks. The general distinctiveness principles of Abercrombie apply: marks (or dress) that are suggestive, arbitrary, or fanciful are inherently distinctive and protectable from the outset because their intrinsic nature serves to identify source. Requiring secondary meaning for inherently distinctive trade dress would penalize start-ups and regional businesses, allowing competitors to appropriate distinctive dress in new markets before the originator could expand. The Court found no countervailing competition concern because the functionality doctrine independently prevents protection of features competitors need.',
    legalStandards: [
      'Lanham Act § 43(a) protection for unregistered trade dress',
      'Abercrombie spectrum of distinctiveness (generic, descriptive, suggestive, arbitrary, fanciful)',
      'Functionality doctrine as the safeguard for competition',
      'Likelihood of confusion analysis',
    ],
    keyPrecedents: [
      'Abercrombie & Fitch Co. v. Hunting World, Inc., 537 F.2d 4 (2d Cir. 1976)',
      'Chevron Chemical Co. v. Voluntary Purchasing Groups, Inc., 659 F.2d 695 (5th Cir. 1981)',
      'Inwood Laboratories, Inc. v. Ives Laboratories, Inc., 456 U.S. 844 (1982)',
    ],
    evidenceAnalysis:
      "The jury's finding of deliberate copying — supported by evidence that Two Pesos's founders had studied Taco Cabana's restaurants before opening nearly identical ones — was the most persuasive factual element, both for confusion and for enhanced damages. Photographic comparisons of the two chains' strikingly similar exteriors and interiors made the imitation vivid. Two Pesos's strongest counter-evidence — that festive Mexican-themed décor is common in the trade — was undercut by the specific combination of elements found inherently distinctive. The absence of secondary meaning evidence, which would normally doom a claim in some circuits, became legally irrelevant under the Court's holding.",
    alternativeOutcomes:
      'Had the Court required secondary meaning for all trade dress, regional businesses would have faced a protection gap during expansion, inviting fast-follower copying of distinctive concepts — exactly what happened to Taco Cabana in Houston. The later decision in Wal-Mart v. Samara Brothers shows the Court ultimately split the difference: product design (unlike the product-packaging-like restaurant décor here) always requires secondary meaning. Had Two Pesos litigated the inherent-distinctiveness finding itself rather than conceding it, the outcome might have differed.',
    lessonsLearned: [
      'Inherently distinctive trade dress (packaging/décor) is protectable immediately without secondary meaning',
      'Deliberate copying findings powerfully support both liability and enhanced damages',
      'Functionality, not secondary meaning, is the doctrinal guardian of competition in trade dress law',
      'Wal-Mart later confined Two Pesos: product design trade dress always requires secondary meaning',
    ],
    bestPractices: [
      'Document the creation and distinctive combination of trade dress elements from business launch',
      'Register protectable trade dress where possible to strengthen enforcement position',
      'Before adopting a concept similar to a competitor, conduct a trade dress clearance analysis — copying evidence is toxic',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Confirmed that inherently distinctive trade dress is protectable under the Lanham Act without proof of secondary meaning.',
    isFeatured: false,
    parties: [
      { id: 'two-pesos-p', name: 'Taco Cabana, Inc. (later Taco Cabana International)', role: 'PLAINTIFF', counsel: 'Richard P. Hogan Jr.; Kirk Patterson' },
      { id: 'two-pesos-d', name: 'Two Pesos, Inc.', role: 'DEFENDANT', counsel: 'Richard L. Stanley; Arnold, White & Durkee' },
    ],
  },
  {
    id: 'qualitex-v-jacobson-products',
    name: 'Qualitex Co. v. Jacobson Products Co.',
    citation: '514 U.S. 159 (1995)',
    litigationTypeSlug: 'trademark',
    litigationTypeName: 'Trademark Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '1995-03-28',
    facts:
      'Since the 1950s, Qualitex had colored the dry cleaning press pads it manufactured a distinctive green-gold shade, which the dry cleaning industry came to associate with Qualitex\'s product. In 1989, rival Jacobson Products began selling press pads in a similar green-gold color. Qualitex registered the green-gold color as a trademark in 1991 and sued Jacobson for trademark infringement and unfair competition. Jacobson argued that color alone can never function as a trademark. The Ninth Circuit set aside Qualitex\'s trademark judgment on that categorical ground, conflicting with other circuits that had permitted color marks, and the Supreme Court granted certiorari to resolve the split.',
    keyLegalIssues: [
      'Whether color alone, without more, can be registered and protected as a trademark',
      'Whether the "color depletion" and "shade confusion" theories justify a categorical bar on color marks',
      'How the functionality doctrine applies to color',
    ],
    plaintiffArguments:
      'Qualitex argued that the Lanham Act defines trademarks expansively to include "any word, name, symbol, or device" capable of identifying source, and a color that has acquired secondary meaning meets that definition just as shapes, sounds, and scents can. It presented evidence that the green-gold shade had, over decades, come to signify Qualitex to press pad purchasers. It argued the functionality doctrine adequately polices any competitive concerns, making a categorical color bar unnecessary.',
    defendantArguments:
      'Jacobson argued that recognizing color marks would create unworkable "shade confusion" litigation — courts forced to decide whether competing tints are confusingly similar — and would deplete the limited supply of usable colors, eventually disadvantaging late entrants. It contended that trademark law historically required color to be used in combination with some design or symbol, and that producers can always use color in a distinctive logo rather than monopolizing color itself.',
    proceduralHistory:
      "The Central District of California found trademark infringement and entered judgment for Qualitex. The Ninth Circuit reversed the trademark portion, holding color alone is not registrable. The Supreme Court unanimously reversed the Ninth Circuit.",
    finalDecision:
      'The Supreme Court unanimously held that no rule prevents color alone from serving as a trademark, provided it has acquired secondary meaning identifying source and is not functional. Qualitex\'s green-gold press pad color was a valid, protectable mark.',
    judicialReasoning:
      'Justice Breyer reasoned that the Lanham Act\'s language is broad — "almost anything at all that is capable of carrying meaning" can be a symbol or device — and color, like a descriptive word, can acquire secondary meaning that identifies a product\'s source. The functionality doctrine answers competitive concerns: a color may not be protected if it is essential to the use or purpose of the product or affects its cost or quality, or if exclusive use would put competitors at a significant non-reputation-related disadvantage. The Court dismissed shade confusion as no harder than the routine judicial task of comparing similar words, and found color depletion speculative and addressable through functionality when scarcity actually arises. On the facts, the green-gold color served no function beyond source identification — it merely avoided showing stains, a need any of many alternative colors could satisfy.',
    legalStandards: [
      'Lanham Act § 45 definition of "trademark" (word, name, symbol, or device)',
      'Secondary meaning requirement for color marks',
      'Functionality doctrine (Inwood formulation plus competitive-need analysis)',
    ],
    keyPrecedents: [
      'Inwood Laboratories, Inc. v. Ives Laboratories, Inc., 456 U.S. 844 (1982)',
      'Two Pesos, Inc. v. Taco Cabana, Inc., 505 U.S. 763 (1992)',
      'In re Owens-Corning Fiberglas Corp., 774 F.2d 1116 (Fed. Cir. 1985)',
    ],
    evidenceAnalysis:
      "Qualitex's decades of consistent, exclusive use and industry testimony associating green-gold pads with Qualitex constituted compelling secondary meaning evidence — the factual backbone of the case. Evidence that many alternative colors could equally hide stains defeated functionality, showing no competitive need for that particular shade. Jacobson's depletion and shade-confusion arguments failed for lack of concrete evidence that color scarcity was a real problem in the press pad market; they were policy speculation rather than record facts.",
    alternativeOutcomes:
      'Had Jacobson prevailed, single-color branding — Tiffany blue, UPS brown, Louboutin red, T-Mobile magenta — would lack standalone trademark protection, forcing brands to rely on color-plus-design composites. A ruling adopting color depletion concerns could have imported per-industry color availability analysis into registration practice. Instead, Qualitex opened the door to nontraditional marks generally (sounds, scents, motion), subject always to secondary meaning and functionality limits.',
    lessonsLearned: [
      'Color alone can be a trademark upon proof of secondary meaning and non-functionality',
      'Functionality, not categorical exclusions, is the safety valve for competition concerns',
      'Long, consistent, exclusive use plus industry recognition builds protectable rights in nontraditional marks',
      'The decision underwrites modern single-color brand strategies across industries',
    ],
    bestPractices: [
      'Use a precisely specified color (e.g., Pantone) consistently and exclusively across products and marketing',
      'Collect consumer surveys, sales, advertising, and industry recognition evidence to prove secondary meaning',
      'Vet color choices for functionality — utilitarian or cost-affecting colors cannot be protected',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Held that a color alone can serve as a trademark, laying the foundation for modern nontraditional mark protection.',
    isFeatured: false,
    parties: [
      { id: 'qualitex-p', name: 'Qualitex Company', role: 'PLAINTIFF', counsel: 'Donald G. Mulack, Keck, Mahin & Cate' },
      { id: 'qualitex-d', name: 'Jacobson Products Co., Inc.', role: 'DEFENDANT', counsel: 'Jeffrey H. Kaufman, Oblon, Spivak, McClelland, Maier & Neustadt' },
    ],
  },
  {
    id: 'matal-v-tam',
    name: 'Matal v. Tam',
    citation: '582 U.S. 218 (2017)',
    litigationTypeSlug: 'trademark',
    litigationTypeName: 'Trademark Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2017-06-19',
    facts:
      'Simon Tam, lead singer of the Asian-American rock band "The Slants," chose the band\'s name to reclaim and drain the denigrating force of a slur historically used against Asians. He applied to register THE SLANTS as a trademark, but the USPTO refused registration under the Lanham Act\'s disparagement clause, 15 U.S.C. § 1052(a), which barred registration of marks that may "disparage... or bring into contempt or disrepute" any persons, living or dead. Tam appealed, arguing the clause violates the Free Speech Clause of the First Amendment. The en banc Federal Circuit struck down the disparagement clause as facially unconstitutional, and the government sought Supreme Court review. The case proceeded in parallel with the high-profile cancellation of the Washington Redskins\' trademark registrations under the same clause.',
    keyLegalIssues: [
      "Whether the Lanham Act's disparagement clause violates the First Amendment's Free Speech Clause",
      'Whether federally registered trademarks are government speech, government subsidy, or private speech',
      'Whether viewpoint discrimination doctrine applies to trademark registration criteria',
    ],
    plaintiffArguments:
      "The government (petitioner) argued that trademark registration is government speech — the government publishes marks in its registry and issues certificates — or alternatively a government subsidy or limited public forum, in which content-based criteria are permissible. It contended the clause was viewpoint-neutral because it barred disparagement of any group evenhandedly, and that denying registration restricts no speech: Tam could still use the name, just without registration benefits.",
    defendantArguments:
      "Tam argued that the disparagement clause is viewpoint discrimination in its starkest form: the government registers marks expressing positive messages about groups while refusing those deemed offensive, disfavoring particular perspectives. He contended trademarks are private speech — no reasonable person thinks the government endorses every registered mark, from \"Yuppie Scum\" to competing brand slogans. He emphasized the expressive, reclamatory purpose of the band's name and the chilling effect of letting officials police offensiveness.",
    proceduralHistory:
      'The USPTO examining attorney and the Trademark Trial and Appeal Board refused registration. A Federal Circuit panel affirmed, but the en banc court reversed, holding the disparagement clause facially unconstitutional. The Supreme Court affirmed unanimously (8-0, Justice Gorsuch not participating).',
    finalDecision:
      'The Supreme Court held that the disparagement clause violates the Free Speech Clause: trademarks are private speech, not government speech, and the clause constitutes impermissible viewpoint discrimination. THE SLANTS was entitled to proceed to registration.',
    judicialReasoning:
      'Justice Alito\'s opinion rejected the government speech argument decisively: the PTO does not create or endorse marks, registers contradictory messages, and "if the federal registration of a trademark makes the mark government speech, the Federal Government is babbling prodigiously and incoherently." All eight Justices agreed the clause discriminates based on viewpoint — "Giving offense is a viewpoint," as Alito wrote — because it permits positive references to groups while banning derogatory ones. The Court split 4-4 on the precise framework (commercial speech versus heightened scrutiny), but agreed the clause failed even the more lenient Central Hudson test, since the interest in shielding people from offensive speech "strikes at the heart of the First Amendment." The decision\'s logic doomed the neighboring immoral-or-scandalous bar two years later in Iancu v. Brunetti.',
    legalStandards: [
      'First Amendment viewpoint discrimination doctrine',
      'Government speech doctrine (Walker v. Texas Division, Sons of Confederate Veterans)',
      'Central Hudson commercial speech framework',
      'Lanham Act § 2(a) registration bars',
    ],
    keyPrecedents: [
      'Walker v. Texas Division, Sons of Confederate Veterans, Inc., 576 U.S. 200 (2015)',
      'Rosenberger v. Rector and Visitors of the University of Virginia, 515 U.S. 819 (1995)',
      'Central Hudson Gas & Electric Corp. v. Public Service Commission, 447 U.S. 557 (1980)',
    ],
    evidenceAnalysis:
      "As a facial constitutional challenge, the case turned on legal argument, but Tam's personal narrative — an Asian-American artist reclaiming a slur, denied registration under a statute meant to protect Asians from disparagement — was rhetorically powerful evidence of the clause's perverse operation. The PTO's inconsistent registration history (registering some edgy marks while refusing others) demonstrated the arbitrariness of offensiveness screening. The government's strongest material, the Walker license-plate analogy, failed because trademark registries lack the historical state-identification function of license plates.",
    alternativeOutcomes:
      'Had the government prevailed on the government-speech theory, Congress could have imposed broad content and viewpoint screens on registration, and the Redskins cancellation would have stood. The actual holding mooted that long-running cancellation litigation and led directly to Iancu v. Brunetti striking the scandalous-marks bar, opening registration to vulgar and offensive marks generally. A narrow as-applied ruling for Tam (reclamation by the targeted group) would have preserved the clause for hostile uses but created an unadministrable speaker-identity test.',
    lessonsLearned: [
      'Trademark registration criteria are subject to full First Amendment scrutiny',
      'Viewpoint discrimination is fatal regardless of the speech framework applied',
      'Registration is a legal benefit attached to private speech, not government endorsement',
      'Matal\'s logic extends to other content-based registration bars (see Iancu v. Brunetti)',
    ],
    bestPractices: [
      'Evaluate previously "unregistrable" provocative marks for registration eligibility post-Tam/Brunetti',
      'Remember that registration eligibility does not eliminate marketplace and platform acceptance risks for offensive marks',
      'Constitutional challenges can be viable responses to PTO refusals grounded in content judgments',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Struck down the Lanham Act\'s disparagement clause as unconstitutional viewpoint discrimination, constitutionalizing trademark registration doctrine.',
    isFeatured: true,
    parties: [
      { id: 'matal-p', name: 'Joseph Matal, Interim Director, USPTO', role: 'PLAINTIFF', counsel: 'Malcolm L. Stewart, Office of the Solicitor General' },
      { id: 'matal-d', name: 'Simon Shiao Tam', role: 'DEFENDANT', counsel: 'John C. Connell, Archer & Greiner; Ronald D. Coleman' },
    ],
  },
  {
    id: 'jack-daniels-v-vip-products',
    name: "Jack Daniel's Properties, Inc. v. VIP Products LLC",
    citation: '599 U.S. 140 (2023)',
    litigationTypeSlug: 'trademark',
    litigationTypeName: 'Trademark Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2023-06-08',
    facts:
      'VIP Products sold the "Bad Spaniels Silly Squeaker," a dog toy shaped like a Jack Daniel\'s whiskey bottle, replacing "Jack Daniel\'s" with "Bad Spaniels," "Old No. 7 Brand Tennessee Sour Mash Whiskey" with "the Old No. 2 on your Tennessee Carpet," and the alcohol content statement with "43% Poo by Vol." Jack Daniel\'s demanded VIP stop selling the toy; VIP sought a declaratory judgment of non-infringement, and Jack Daniel\'s counterclaimed for trademark infringement and dilution by tarnishment. Critically, VIP used the Bad Spaniels trade dress and bottle design as its own source identifiers — it claimed trademark rights in them. The Ninth Circuit held the toy was an "expressive work" entitled to the speech-protective Rogers v. Grimaldi threshold test, and that its parodic character made it "noncommercial" and exempt from dilution liability. The Supreme Court granted review on both holdings.',
    keyLegalIssues: [
      "Whether the Rogers v. Grimaldi test applies when an accused infringer uses a mark as a source identifier for its own goods",
      'Whether parodic humor exempts a use from the likelihood-of-confusion analysis',
      "Whether the Lanham Act's \"noncommercial use\" exclusion shields parody from dilution-by-tarnishment claims",
    ],
    plaintiffArguments:
      "Jack Daniel's argued that the Rogers test, whatever its validity for titles of artistic works, has no application when a defendant uses another's trademark as a trademark — to designate the source of its own commercial products. It contended Bad Spaniels copied its iconic bottle and label precisely to trade on Jack Daniel's renown, and presented survey evidence of consumer confusion about sponsorship. On dilution, it argued associating its whiskey brand with dog excrement was textbook tarnishment, and that a parody exception swallows the statute when the parody itself is used as a mark.",
    defendantArguments:
      "VIP argued that Bad Spaniels is a successful parody and an expressive work conveying a humorous message — irreverent commentary juxtaposing a self-serious premium brand with dog-toy scatology — entitling it to First Amendment protection under Rogers unless the use had no artistic relevance or was explicitly misleading. It contended no reasonable consumer would believe Jack Daniel's made a poop-themed squeaky toy, and that the obvious joke dispels confusion. For dilution, VIP invoked the statutory parody and noncommercial-use carve-outs.",
    proceduralHistory:
      "The District of Arizona, after a bench trial, found infringement and dilution for Jack Daniel's. The Ninth Circuit reversed, applying Rogers and the noncommercial-use exclusion. The Supreme Court granted certiorari and unanimously vacated the Ninth Circuit's judgment, remanding for ordinary likelihood-of-confusion analysis.",
    finalDecision:
      "The Supreme Court unanimously held that the Rogers threshold test does not apply when the accused infringer uses the challenged mark as a designation of source for its own goods, and that the noncommercial-use exclusion from dilution liability does not shield parody when the mark is used as a source identifier. The case was remanded; the parties later resolved the dispute with the toy's sale ultimately enjoined after remand proceedings.",
    judicialReasoning:
      'Justice Kagan\'s opinion emphasized that trademark law\'s "cardinal sin" is confusing consumers about source, and that this concern is at its apex when a defendant uses another\'s mark as a mark. Whatever merit Rogers has in cases involving titles or purely expressive uses, it "has always been a cabined doctrine" inapplicable to source-identifying uses — VIP itself claimed trademark rights in the Bad Spaniels trade dress, conceding trademark use. Parody remains highly relevant, but within the likelihood-of-confusion analysis: a successful parody must conjure the original while signaling it is a joke, which often dispels confusion. On dilution, the Court held the noncommercial-use exclusion cannot cover every parody, or it would nullify the statute\'s express fair-use exclusion, which excludes source-identifying uses from its safe harbor. The opinion was deliberately narrow, expressing no view on Rogers\'s validity in its heartland.',
    legalStandards: [
      'Likelihood of confusion under Lanham Act § 32 and § 43(a)',
      'Rogers v. Grimaldi threshold test, limited to non-source-identifying expressive uses',
      'Trademark dilution by tarnishment, 15 U.S.C. § 1125(c), and its fair-use/noncommercial exclusions',
    ],
    keyPrecedents: [
      'Rogers v. Grimaldi, 875 F.2d 994 (2d Cir. 1989)',
      'Louis Vuitton Malletier S.A. v. Haute Diggity Dog, LLC, 507 F.3d 252 (4th Cir. 2007)',
      'Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994)',
    ],
    evidenceAnalysis:
      "VIP's fatal evidentiary problem was self-inflicted: its own pleadings claimed trademark and trade dress rights in the Bad Spaniels design, conclusively establishing source-identifying use and removing the case from Rogers's domain. Jack Daniel's consumer survey showing meaningful confusion about sponsorship provided concrete support at trial. VIP's strongest evidence — the obviousness of the joke and its history of similar parody toys — remains relevant on remand within the confusion factors, where parody can still defeat liability, but it could no longer short-circuit the analysis at the threshold.",
    alternativeOutcomes:
      "Had the Ninth Circuit's approach stood, any commercial product with a humorous twist could claim Rogers protection, effectively immunizing parodic merchandise from trademark scrutiny and gutting dilution law through the noncommercial exception. A broader ruling abolishing Rogers entirely would have destabilized decades of protection for film titles, songs, and artworks referencing brands. If VIP had marketed the toy without claiming its own trademark rights in the design, its Rogers argument would have been substantially stronger.",
    lessonsLearned: [
      'Using a parody of another\'s mark as your own source identifier forfeits Rogers protection',
      'Parody is weighed inside the confusion analysis, not as a threshold immunity',
      'Claiming trademark rights in an accused design can be a decisive admission of trademark use',
      'The dilution statute\'s noncommercial exclusion does not swallow its fair-use limits',
    ],
    bestPractices: [
      'Parody merchandisers should avoid asserting trademark rights in designs that mimic famous marks',
      'Design parodies to maximize differentiation signals (disclaimers, distinct branding) that dispel confusion',
      'Famous-brand owners should develop survey evidence of confusion and tarnishment when challenging commercial parodies',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'Cabined the Rogers test, holding that source-identifying parodic uses of famous marks face ordinary likelihood-of-confusion analysis.',
    isFeatured: false,
    parties: [
      { id: 'jack-daniels-p', name: "Jack Daniel's Properties, Inc.", role: 'PLAINTIFF', counsel: 'Lisa Blatt, Williams & Connolly LLP' },
      { id: 'jack-daniels-d', name: 'VIP Products LLC', role: 'DEFENDANT', counsel: 'Bennett Evan Cooper, Dickinson Wright PLLC' },
    ],
  },
  {
    id: 'christian-louboutin-v-yves-saint-laurent',
    name: 'Christian Louboutin S.A. v. Yves Saint Laurent America Holdings, Inc.',
    citation: '696 F.3d 206 (2d Cir. 2012)',
    litigationTypeSlug: 'trademark',
    litigationTypeName: 'Trademark Litigation',
    court: 'U.S. Court of Appeals for the Second Circuit',
    jurisdiction: 'United States (Federal)',
    filingDate: '2011-04-07',
    decisionDate: '2012-09-05',
    facts:
      'Designer Christian Louboutin had since 1992 lacquered the outsoles of his high-fashion women\'s shoes in a glossy red (Pantone 18-1663 "Chinese Red"), building one of fashion\'s most recognizable signatures, and obtained a U.S. trademark registration for the "Red Sole Mark" in 2008. In 2011, Yves Saint Laurent offered monochrome shoes — including an all-red shoe with a red insole, upper, and outsole — as part of a collection reviving its 1970s designs. Louboutin sued for trademark infringement and sought a preliminary injunction. The district court denied the injunction, reasoning that a single color in the fashion industry can never serve as a trademark because color is inherently aesthetic and functional in fashion design, and indicated it would order the registration cancelled. Louboutin appealed to the Second Circuit.',
    keyLegalIssues: [
      'Whether a single color can serve as a trademark in the fashion industry',
      'The scope of the aesthetic functionality doctrine for color in fashion',
      "Whether YSL's monochrome red shoe infringed Louboutin's red-sole mark",
    ],
    plaintiffArguments:
      "Louboutin argued that under Qualitex, color marks are protectable upon secondary meaning, and his red sole had achieved extraordinary recognition — extensive unsolicited media coverage, celebrity association, and consumer surveys showing strong identification of red soles with Louboutin. He contended the district court's per-se rule against color marks in fashion contradicted Supreme Court precedent. He argued YSL's red outsole would confuse consumers into believing the shoes were Louboutin's.",
    defendantArguments:
      "YSL argued that color is essential to fashion design — designers must remain free to use red, including monochromatically, as it had done since the 1970s — making exclusive rights in red soles aesthetically functional and anticompetitive. It contended its all-red shoe used red as design, not as a source identifier, and that no consumer would mistake a fully red YSL shoe for a Louboutin, whose signature depends on the contrast between a red sole and a differently colored upper. YSL counterclaimed to cancel Louboutin's registration.",
    proceduralHistory:
      "The Southern District of New York (Judge Marrero) denied Louboutin's preliminary injunction, holding single colors unprotectable in fashion. On appeal, the Second Circuit reversed that categorical holding but affirmed the denial of relief against YSL's monochrome shoes, ordering the registration limited rather than cancelled. Neither party sought Supreme Court review, and the case concluded with both sides claiming victory.",
    finalDecision:
      "The Second Circuit held that Louboutin's red lacquered outsole contrasting with the shoe's upper is a valid, protectable trademark with secondary meaning, rejecting any per-se bar on color marks in fashion. However, it modified the registration to cover only red soles contrasting with the upper, so YSL's monochrome all-red shoe fell outside the mark and did not infringe.",
    judicialReasoning:
      "The court held that Qualitex forecloses industry-specific categorical rules: whether a color mark is functional requires case-by-case analysis, and the district court's per-se fashion rule was legal error. Examining the extensive record of media coverage, advertising, sales, and surveys, the court found the red sole had acquired secondary meaning — but \"only in situations where the red lacquered outsole contrasts in color with the adjoining 'upper.'\" Because the secondary meaning evidence showed consumers associate the contrasting red sole with Louboutin, the court used its power under 15 U.S.C. § 1119 to limit the registration accordingly. With the mark so limited, YSL's monochrome shoe — where the red sole does not contrast with the upper — made no use of the mark, ending the infringement inquiry without reaching aesthetic functionality of monochrome designs.",
    legalStandards: [
      'Qualitex standard for color marks (secondary meaning plus non-functionality)',
      'Aesthetic functionality doctrine and significant non-reputation-related competitive disadvantage',
      'Judicial power to rectify trademark registrations under 15 U.S.C. § 1119',
    ],
    keyPrecedents: [
      'Qualitex Co. v. Jacobson Products Co., 514 U.S. 159 (1995)',
      'TrafFix Devices, Inc. v. Marketing Displays, Inc., 532 U.S. 23 (2001)',
      'Wal-Mart Stores, Inc. v. Samara Brothers, Inc., 529 U.S. 205 (2000)',
    ],
    evidenceAnalysis:
      "Louboutin's secondary meaning evidence was overwhelming — hundreds of millions in sales, pervasive unsolicited media references to \"red sole\" shoes, celebrity recognition, and survey data — and it saved the mark from cancellation. But the same evidence defined the mark's limits: virtually all of it depicted red soles against contrasting uppers, giving the court the basis to narrow the registration. YSL's historical evidence of its own monochrome red shoes dating to the 1970s supported its independent-design narrative and undercut any inference of copying. Louboutin's weakness was the absence of evidence that consumers associate non-contrasting red soles with his brand.",
    alternativeOutcomes:
      "Had the district court's per-se rule survived, single-color branding would have been categorically unavailable in fashion, threatening marks like Tiffany blue packaging by analogy and prompting cancellation of Louboutin's registration entirely. Had the Second Circuit instead upheld the unlimited mark, YSL's monochrome designs would have infringed and designers would face clearance burdens on any red-soled shoe. The actual contrast-limited result is a careful compromise that later proved decisive in Louboutin's global enforcement campaigns, with similar contrast framing adopted by the EU Court of Justice in 2018.",
    lessonsLearned: [
      'Color marks survive in fashion, but their scope tracks the secondary meaning evidence precisely',
      'Courts can judicially narrow registrations to match proven consumer association',
      'Aesthetic functionality remains a potent, fact-specific defense in design industries',
      'Both sides can "win": validity for the brand owner, freedom for the competitor\'s specific design',
    ],
    bestPractices: [
      'Build secondary meaning evidence that covers the full intended scope of a color mark, including edge cases',
      'Define color marks in registrations with precision (placement, contrast, Pantone) anticipating scope disputes',
      'Competitors should document independent design history to rebut copying narratives',
    ],
    outcome: 'Mixed',
    significance:
      "Preserved single-color trademarks in fashion while limiting Louboutin's red-sole mark to contrasting uses, the leading modern aesthetic functionality decision.",
    isFeatured: false,
    parties: [
      { id: 'louboutin-p', name: 'Christian Louboutin S.A., Christian Louboutin LLC, and Christian Louboutin', role: 'PLAINTIFF', counsel: 'Harley I. Lewin, McCarter & English LLP' },
      { id: 'louboutin-d', name: 'Yves Saint Laurent America Holdings, Inc. and related YSL entities', role: 'DEFENDANT', counsel: 'David H. Bernstein, Debevoise & Plimpton LLP' },
    ],
  },

  // ===================== Copyright Litigation =====================
  {
    id: 'oracle-america-v-google',
    name: 'Google LLC v. Oracle America, Inc.',
    citation: '593 U.S. 1 (2021)',
    litigationTypeSlug: 'copyright',
    litigationTypeName: 'Copyright Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    filingDate: '2010-08-13',
    decisionDate: '2021-04-05',
    facts:
      "When building the Android smartphone platform, Google wrote millions of lines of its own code but copied roughly 11,500 lines of \"declaring code\" from the Java SE API — the method headers and organizational structure that let programmers invoke pre-written functions using familiar calls — after licensing negotiations with Sun Microsystems failed. Google reimplemented all the underlying \"implementing code\" itself. Oracle, which acquired Sun in 2010, sued Google for copyright (and initially patent) infringement, seeking damages that grew to nearly $9 billion. Two jury trials, two Federal Circuit reversals, and a decade of litigation produced the defining legal battle over software interface copyrightability and fair use. The Supreme Court finally resolved the case in 2021.",
    keyLegalIssues: [
      'Whether the declaring code and organizational structure of the Java API are copyrightable',
      "Whether Google's copying of 11,500 lines of declaring code for Android was fair use",
      'How fair use applies to functional computer code, and the standard of review for jury fair-use verdicts',
    ],
    plaintiffArguments:
      "Oracle argued that the Java API's declaring code and its intricate organization reflect creative expression — thousands of choices about naming, grouping, and structuring — fully protected by copyright like any other code. It contended Google copied the heart of Java to shortcut Android's development after refusing a license, destroyed Java's licensing market for mobile, and that fair use cannot excuse verbatim commercial copying by a direct competitor. Oracle warned that excusing the copying would gut copyright protection for software.",
    defendantArguments:
      "Google argued that the declaring code is a functional system or method of operation — the vocabulary programmers must use to access functions — at or beyond the edge of copyrightability under § 102(b). Alternatively, its reuse was transformative fair use: it took only what was necessary to let Java-trained developers apply their existing skills to a new smartphone platform, writing all new implementing code. Google emphasized industry custom of reimplementing APIs and the innovation costs of allowing interface monopolies.",
    proceduralHistory:
      "Judge Alsup ruled after a 2012 trial that the declaring code was not copyrightable; the Federal Circuit reversed in 2014. On remand, a 2016 jury found fair use; the Federal Circuit reversed again in 2018, holding the copying unfair as a matter of law. The Supreme Court granted certiorari and reversed the Federal Circuit, 6-2.",
    finalDecision:
      "The Supreme Court held that, assuming for argument's sake the declaring code is copyrightable, Google's copying of the Java SE API declaring code to create Android was fair use as a matter of law. Oracle's multi-billion-dollar claims were extinguished.",
    judicialReasoning:
      "Justice Breyer's opinion bypassed copyrightability and resolved the case on fair use, applying all four factors. The nature of the copyrighted work favored Google: declaring code is \"inherently bound together with uncopyrightable ideas\" — the organization of tasks and the value derives largely from programmers' invested learning, placing it farther from the core of copyright than most code. The purpose and character of the use was transformative: Google used the lines to create a new platform for a different computing environment, advancing the constitutional aims of copyright. The amount factor favored Google because 11,500 lines were 0.4% of the relevant 2.86 million lines and were tethered to a valid transformative purpose. On market effects, the Court credited evidence that Sun had failed in smartphones and that enforcing the copyright here would harm the public by making Java declaring code \"a lock limiting the future creativity of new programs.\" The Court also held fair use is ultimately a legal question reviewed de novo, with underlying factual findings for the jury.",
    legalStandards: [
      'Fair use, 17 U.S.C. § 107 (four-factor analysis)',
      '17 U.S.C. § 102(b) idea/expression and method-of-operation limits',
      'De novo review of the ultimate fair use question following a jury verdict',
    ],
    keyPrecedents: [
      'Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994)',
      'Baker v. Selden, 101 U.S. 99 (1880)',
      'Sega Enterprises Ltd. v. Accolade, Inc., 977 F.2d 1510 (9th Cir. 1992)',
    ],
    evidenceAnalysis:
      "Google's most persuasive evidence was structural: it copied only declaring code while writing all implementing code anew, and expert testimony established that the copied lines' value lay in programmers' accumulated familiarity rather than intrinsic expression. Evidence of Sun's failed mobile efforts (and former Sun CEO Jonathan Schwartz's testimony welcoming Android) undermined Oracle's market-harm story. Oracle's strongest evidence — Google's failed license negotiations and internal emails acknowledging the need for a license — supported bad faith and market substitution narratives but was ultimately outweighed; the Court treated good faith as marginal to fair use.",
    alternativeOutcomes:
      "Had Oracle prevailed, reimplementation of APIs — foundational to software interoperability, cloud computing, and open-source ecosystems — would have required licenses, potentially exposing decades of industry practice to infringement claims and an award against Google of many billions. Had the Court squarely held declaring code uncopyrightable, software copyright's scope would have contracted more dramatically and predictably than the fair-use route chosen. The actual holding leaves API copyrightability formally open, so future interface disputes still litigate both questions.",
    lessonsLearned: [
      'Fair use can excuse even verbatim commercial copying of functional code where the purpose is transformative re-platforming',
      'Functional works like interfaces receive thinner protection at the copyright core',
      'The ultimate fair use question is legal, reviewable de novo despite a jury verdict',
      'A decade of litigation risk could have been avoided by either side accepting reasonable license terms',
    ],
    bestPractices: [
      'When reimplementing APIs, copy only declaring/interface elements and independently write all implementing code',
      'Document the interoperability and developer-ecosystem rationale for any interface reuse contemporaneously',
      'Treat internal emails about licensing needs with care — they become exhibits in fair use trials',
    ],
    outcome: 'Defendant Victory',
    significance:
      "Held Google's copying of the Java API declaring code was fair use, safeguarding API reimplementation and software interoperability.",
    isFeatured: true,
    parties: [
      { id: 'oracle-google-p', name: 'Oracle America, Inc.', role: 'PLAINTIFF', counsel: 'E. Joshua Rosenkranz, Orrick, Herrington & Sutcliffe LLP' },
      { id: 'oracle-google-d', name: 'Google LLC', role: 'DEFENDANT', counsel: 'Thomas C. Goldstein, Goldstein & Russell; Keker, Van Nest & Peters LLP' },
    ],
  },
  {
    id: 'campbell-v-acuff-rose-music',
    name: 'Campbell v. Acuff-Rose Music, Inc.',
    citation: '510 U.S. 569 (1994)',
    litigationTypeSlug: 'copyright',
    litigationTypeName: 'Copyright Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '1994-03-07',
    facts:
      'The rap group 2 Live Crew, led by Luther Campbell, recorded "Pretty Woman," a raunchy send-up of Roy Orbison\'s classic "Oh, Pretty Woman," copying the song\'s famous opening bass riff and first line before degenerating into lyrics about a "big hairy woman" and a "two-timin\' woman." The group\'s manager had requested a license from Acuff-Rose Music, the song\'s publisher, offering credit and payment; Acuff-Rose refused, but 2 Live Crew released the track anyway on its album "As Clean As They Wanna Be," which sold nearly a quarter million copies in its first year. Acuff-Rose sued for copyright infringement. The district court granted summary judgment for 2 Live Crew on fair use grounds, but the Sixth Circuit reversed, holding the commercial nature of the parody presumptively unfair and the taking of the song\'s "heart" excessive.',
    keyLegalIssues: [
      'Whether a commercial parody can qualify as fair use under 17 U.S.C. § 107',
      'Whether commercial purpose creates a presumption against fair use',
      'How much of an original a parody may take, and how market harm is assessed for transformative works',
    ],
    plaintiffArguments:
      'Acuff-Rose argued that 2 Live Crew\'s use was nakedly commercial — released on a for-profit album after a license was refused — triggering the presumption of unfairness drawn from Sony. It contended the group took the heart of the song, the signature riff and opening line, exceeding any conceivable parodic necessity. It further argued the rap version harmed the derivative market for authorized rap versions of the song, a market publishers actively license.',
    defendantArguments:
      "2 Live Crew argued that its song was a parody commenting on and ridiculing the saccharine romantic fantasy of the original, juxtaposing Orbison's idealized street encounter with crude reality — quintessential transformative criticism. It contended parody must be allowed to quote the original's most recognizable elements to conjure its target, and that no presumption against commercial uses survives the statute, since virtually all parody is sold for profit. It argued a scathing parody serves no market the copyright owner would license.",
    proceduralHistory:
      'The Middle District of Tennessee granted summary judgment to 2 Live Crew on fair use. The Sixth Circuit reversed, emphasizing commercial purpose and excessive taking. The Supreme Court granted certiorari and unanimously reversed the Sixth Circuit, remanding for further proceedings; the parties subsequently settled with a license.',
    finalDecision:
      "The Supreme Court unanimously held that 2 Live Crew's commercial parody could be fair use, rejecting any presumption that commercial use is unfair, and remanded for evaluation of the amount of music copied and the effect on the market for non-parody rap derivatives. On remand, the case settled.",
    judicialReasoning:
      'Justice Souter\'s opinion installed "transformativeness" at the center of fair use: the key first-factor question is whether the new work "adds something new, with a further purpose or different character, altering the first with new expression, meaning, or message." Parody has obvious claim to transformative value because it must mimic the original to make its critical point, and thus may take recognizable material — including the "heart" — to conjure its target. The Court held commerciality is only one element of the first factor, not a presumption of unfairness, because the Sony dictum cannot govern transformative uses like criticism and comment listed in § 107\'s preamble. On market harm, the Court distinguished harm from suppressive criticism (irrelevant) from harm by substitution (relevant), and noted the absence of evidence regarding the market for non-parody rap derivatives, requiring remand. The opinion also disposed of the license refusal: being denied permission does not weigh against fair use.',
    legalStandards: [
      'Fair use four-factor framework, 17 U.S.C. § 107',
      'Transformative use analysis under the first factor',
      'Market substitution (not critical suppression) as the relevant fourth-factor harm',
    ],
    keyPrecedents: [
      'Sony Corp. of America v. Universal City Studios, Inc., 464 U.S. 417 (1984)',
      'Harper & Row, Publishers, Inc. v. Nation Enterprises, 471 U.S. 539 (1985)',
      'Folsom v. Marsh, 9 F. Cas. 342 (C.C.D. Mass. 1841)',
    ],
    evidenceAnalysis:
      "The texts of the two songs themselves were the central evidence: side-by-side comparison showed 2 Live Crew copied the recognizable opening but rapidly departed into its own degraded scenario, supporting the parodic-comment characterization the Court found reasonably perceivable. Acuff-Rose's strongest evidence was the prior license request and the album's commercial success, but the Court neutralized both as a matter of law. The critical evidentiary gap ran against both sides on remand: neither had developed the record on harm to the licensed market for non-parody rap derivatives, the issue the Court deemed potentially decisive.",
    alternativeOutcomes:
      'Had the Sixth Circuit\'s presumption stood, virtually all commercial parody — from "Weird Al" to Saturday Night Live sketches to South Park — would have been presumptively infringing, chilling an entire expressive genre. A ruling that taking the "heart" always defeats fair use would have made effective parody legally impossible, since parody must evoke its target\'s most recognizable elements. The transformativeness framework the Court adopted instead became the organizing principle of all modern fair use law, from Google Books to Warhol.',
    lessonsLearned: [
      'Transformativeness is the engine of modern fair use analysis',
      'Commercial purpose does not presumptively defeat fair use',
      'Parody may copy the heart of a work to the extent needed to conjure its target',
      'A refused license does not weigh against fair use',
    ],
    bestPractices: [
      'Frame and document the critical, commentary-directed purpose of any parodic borrowing',
      'Take no more of the original than the parodic purpose reasonably requires beyond conjuring the target',
      'Develop fourth-factor evidence about actual derivative markets — its absence forced a remand here',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Established transformative use as the cornerstone of fair use and confirmed that commercial parody can be fair use.',
    isFeatured: false,
    parties: [
      { id: 'campbell-p', name: 'Acuff-Rose Music, Inc.', role: 'PLAINTIFF', counsel: 'Sidney S. Rosdeitcher, Paul, Weiss, Rifkind, Wharton & Garrison' },
      { id: 'campbell-d', name: 'Luther R. Campbell, Christopher Wongwon, Mark Ross, and David Hobbs (2 Live Crew)', role: 'DEFENDANT', counsel: 'Bruce S. Rogow' },
    ],
  },
  {
    id: 'andy-warhol-foundation-v-goldsmith',
    name: 'Andy Warhol Foundation for the Visual Arts, Inc. v. Goldsmith',
    citation: '598 U.S. 508 (2023)',
    litigationTypeSlug: 'copyright',
    litigationTypeName: 'Copyright Litigation',
    court: 'Supreme Court of the United States',
    jurisdiction: 'United States (Federal)',
    decisionDate: '2023-05-18',
    facts:
      'In 1981, celebrated rock photographer Lynn Goldsmith took studio portraits of the then-rising musician Prince. In 1984, Vanity Fair licensed one Goldsmith photograph for $400 as an "artist reference" for a single use; Andy Warhol used it to create an illustration for the magazine, but also — unknown to Goldsmith — created fifteen additional works, the "Prince Series." After Prince died in 2016, Condé Nast paid the Andy Warhol Foundation (AWF) $10,000 to license "Orange Prince" for a commemorative magazine cover; Goldsmith received nothing and only then learned of the series. When she notified AWF of potential infringement, AWF sued her for a declaratory judgment of non-infringement or fair use, and she counterclaimed. The Supreme Court granted review limited to a single question: whether the first fair use factor favored AWF\'s 2016 commercial licensing of Orange Prince to Condé Nast.',
    keyLegalIssues: [
      "Whether the purpose and character of AWF's licensing of Orange Prince to Condé Nast favored fair use",
      'How transformativeness is measured when the original and secondary use serve the same commercial purpose',
      'The relationship between new meaning or message and the first fair use factor',
    ],
    plaintiffArguments:
      "AWF (the declaratory plaintiff) argued that Warhol's silkscreen transformed Goldsmith's intimate, vulnerable portrait into a flat, iconic commentary on celebrity culture and dehumanization — a quintessentially transformative new meaning and message under Campbell. It contended that the follower-of-meaning test from the Second Circuit's Cariou decision protected exactly this kind of appropriation art, and that ruling against Warhol would imperil canonical art traditions from Renaissance reworkings to modern collage.",
    defendantArguments:
      "Goldsmith argued that the relevant use — licensing an image of Prince to a magazine for a cover story about Prince — was precisely the use she makes of her own photographs, a directly substitutional commercial purpose. She contended that a judge-administered \"new meaning or message\" test would let any infringer claim a different aesthetic, gutting the derivative-work right that gives authors control over adaptations. Photographers' licensing markets, she argued, would collapse if celebrities' portraits could be silkscreened and licensed without payment.",
    proceduralHistory:
      "The Southern District of New York granted summary judgment to AWF, finding all four factors favored fair use. The Second Circuit reversed, holding all four factors favored Goldsmith. The Supreme Court granted certiorari on the first factor only and affirmed, 7-2, with a vigorous dissent by Justice Kagan joined by Chief Justice Roberts.",
    finalDecision:
      "The Supreme Court held that the first fair use factor favored Goldsmith: AWF's 2016 licensing of Orange Prince to Condé Nast shared substantially the same purpose as Goldsmith's photograph — depicting Prince in a magazine story about Prince — and was commercial, without sufficient justification for the copying. The Second Circuit's judgment was affirmed; the parties later settled, with AWF paying Goldsmith.",
    judicialReasoning:
      "Justice Sotomayor's majority opinion reframed the first factor as use-specific: fair use is evaluated for the particular challenged use — here, the 2016 commercial license, not the creation of the Prince Series in 1984. The factor asks whether the use has a purpose and character different from the original, considered objectively, and whether it is commercial; new expression, meaning, or message alone does not make a use transformative, or the derivative-work right (covering adaptations that always add something new) would be hollowed out. Because both Goldsmith's photo and Orange Prince served as portraits of Prince licensed to magazines for stories about Prince, the purposes were substantially the same, and the commercial nature compounded the problem absent some independent justification like criticism or commentary directed at the original. The Court distinguished Campbell (parody targets the original) and Google (distinct platform purpose), and stressed that Warhol's Soup Cans served a different purpose — artistic commentary — than Campbell's soup labeling.",
    legalStandards: [
      'First fair use factor: purpose and character of the use, 17 U.S.C. § 107(1)',
      'Use-by-use analysis of fair use claims',
      'Derivative work right, 17 U.S.C. § 106(2), as a limit on transformativeness',
    ],
    keyPrecedents: [
      'Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994)',
      'Google LLC v. Oracle America, Inc., 593 U.S. 1 (2021)',
      'Cariou v. Prince, 714 F.3d 694 (2d Cir. 2013)',
    ],
    evidenceAnalysis:
      "The most persuasive evidence was market-practice testimony establishing that photographers routinely license their celebrity portraits to magazines — including as artist references — and that Goldsmith and AWF competed in the very same licensing transaction in 2016, where Condé Nast chose Orange Prince over a Goldsmith photo. The narrow 1984 license, limited to one use with attribution, documented the parties' own understanding that further exploitation required permission. AWF's expert testimony on Warhol's distinct aesthetic meaning was real but legally insufficient, because the Court measured purpose objectively at the level of the use, not the artistry. The dissent's art-historical evidence of borrowing traditions illustrated the stakes but did not address the commercial licensing posture.",
    alternativeOutcomes:
      "Had AWF prevailed, a \"new meaning or message\" test would have privileged famous appropriation artists and severely weakened photographers' derivative and licensing markets, arguably letting any stylized adaptation escape liability. Because the Court ruled only on the 2016 license, AWF might still defend other uses of the Prince Series — museum display, scholarly reproduction — as fair; a broader ruling condemning the series' creation would have unsettled museum holdings of appropriation art. Had Warhol simply obtained a license for derivative works in 1984, the dispute would never have arisen.",
    lessonsLearned: [
      'Fair use is analyzed use-by-use: the same work may be fair in one use and infringing in another',
      'New aesthetic meaning alone does not establish transformativeness; purpose substitution and commerciality control',
      'The derivative-work right constrains how far transformativeness doctrine can stretch',
      'Narrow license terms (single-use artist reference) are powerful evidence in later disputes',
    ],
    bestPractices: [
      'License source photographs for derivative and downstream uses explicitly, not just one-time reference',
      'Before commercially licensing appropriation-based art, analyze whether the use substitutes for the source work\'s market',
      'Creators should retain documentation of license scope and assert rights promptly upon discovering unauthorized uses',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Recalibrated transformative use, holding that commercial uses sharing the original\'s purpose are not transformative merely because they add new meaning.',
    isFeatured: false,
    parties: [
      { id: 'warhol-p', name: 'Andy Warhol Foundation for the Visual Arts, Inc.', role: 'PLAINTIFF', counsel: 'Roman Martinez, Latham & Watkins LLP' },
      { id: 'warhol-d', name: 'Lynn Goldsmith and Lynn Goldsmith, Ltd.', role: 'DEFENDANT', counsel: 'Lisa Blatt, Williams & Connolly LLP' },
    ],
  },
  {
    id: 'a-m-records-v-napster',
    name: 'A&M Records, Inc. v. Napster, Inc.',
    citation: '239 F.3d 1004 (9th Cir. 2001)',
    litigationTypeSlug: 'copyright',
    litigationTypeName: 'Copyright Litigation',
    court: 'U.S. Court of Appeals for the Ninth Circuit',
    jurisdiction: 'United States (Federal)',
    filingDate: '1999-12-06',
    decisionDate: '2001-02-12',
    facts:
      "Napster, founded by teenager Shawn Fanning in 1999, operated a peer-to-peer file sharing service through which users searched a central index maintained on Napster's servers and downloaded MP3 music files directly from other users' computers. Within months, tens of millions of users were exchanging billions of music files, the overwhelming majority of them copyrighted commercial recordings, without authorization. A&M Records and seventeen other record companies, joined by music publishers, sued Napster for contributory and vicarious copyright infringement. The district court entered a sweeping preliminary injunction requiring Napster to prevent the trading of plaintiffs' copyrighted works. Napster appealed, arguing its users made fair uses, that it was a mere conduit protected under Sony's staple-article-of-commerce doctrine, and that the DMCA safe harbors shielded it.",
    keyLegalIssues: [
      "Whether Napster users' uploading and downloading of copyrighted music was direct infringement or fair use (sampling, space-shifting)",
      'Whether Napster was liable for contributory infringement given its knowledge and material contribution',
      'Whether Napster was vicariously liable based on its right to supervise and financial benefit',
      "The scope of Sony's substantial-noninfringing-use defense for service operators with actual knowledge",
    ],
    plaintiffArguments:
      "The record companies argued that Napster users engaged in massive, wholesale direct infringement — copying and distributing entire copyrighted works for free to millions of anonymous strangers — and that no fair use theory could stretch to cover it. They argued Napster had actual and constructive knowledge of the infringement (including internal documents acknowledging users were exchanging \"pirated music\"), materially contributed by providing the index and infrastructure, and profited through user growth while retaining the right to block users — establishing both contributory and vicarious liability.",
    defendantArguments:
      'Napster argued its users engaged in fair uses: "sampling" music before purchase (which it claimed stimulated sales), "space-shifting" recordings users already owned (analogizing to Sony\'s time-shifting), and sharing authorized works by new artists. It invoked Sony to argue that a technology capable of substantial noninfringing uses cannot be condemned, and that it lacked specific knowledge of particular infringing files. It also claimed DMCA § 512 safe harbor protection and warned that liability would strangle peer-to-peer innovation.',
    proceduralHistory:
      "Judge Marilyn Hall Patel of the Northern District of California granted a broad preliminary injunction in July 2000, which the Ninth Circuit stayed pending appeal. In February 2001 the Ninth Circuit affirmed liability findings but remanded for a modified injunction requiring notice of specific infringing files. Unable to comply with the filtering requirements, Napster shut down its service in July 2001 and entered bankruptcy in 2002.",
    finalDecision:
      "The Ninth Circuit held that the plaintiffs were likely to succeed on contributory and vicarious infringement claims: Napster users were direct infringers, their conduct was not fair use, and Napster knew of, materially contributed to, and profited from the infringement while declining to police its system. The modified injunction effectively required filtering that doomed the service.",
    judicialReasoning:
      "The court rejected the fair use defenses: sampling was a commercial use that harmed the market for licensed downloads and CD sales, and space-shifting under Sony and Diamond Rio involved personal use, not simultaneous distribution to millions of strangers. On contributory liability, the court limited Sony: where an operator of an integrated service learns of specific infringing material available on its system and fails to purge it, the staple-article doctrine offers no shelter — Napster had both actual knowledge (RIAA notices identifying thousands of files, internal admissions) and the ability to remove them. Vicarious liability followed from Napster's financial interest in expanding its infringing user base and its reserved right to control access, which it failed to exercise through its search index. The court nonetheless required the injunction to be tied to plaintiffs providing notice of specific works, recognizing the system's architecture limited Napster's knowledge of file contents.",
    legalStandards: [
      'Contributory infringement (knowledge plus material contribution)',
      'Vicarious infringement (right and ability to supervise plus direct financial benefit)',
      'Fair use four-factor analysis applied to sampling and space-shifting',
      'Sony staple-article-of-commerce doctrine and its limits for ongoing services',
    ],
    keyPrecedents: [
      'Sony Corp. of America v. Universal City Studios, Inc., 464 U.S. 417 (1984)',
      'Fonovisa, Inc. v. Cherry Auction, Inc., 76 F.3d 259 (9th Cir. 1996)',
      'Recording Industry Association of America v. Diamond Multimedia Systems, Inc., 180 F.3d 1072 (9th Cir. 1999)',
    ],
    evidenceAnalysis:
      "Napster's internal documents were devastating — a co-founder's memo referencing the need to remain ignorant of users' real identities because they were \"exchanging pirated music\" supplied direct knowledge evidence. The RIAA's notice of more than 12,000 specific infringing files defeated claims of generalized ignorance. Plaintiffs' expert reports (Jay's and Fine's studies) showing harm to CD sales among college students and impairment of the nascent licensed digital download market carried the market-harm factor, despite methodological challenges. Napster's survey evidence that sampling stimulated purchases was deemed equivocal and, even if credited, could not legitimize wholesale distribution.",
    alternativeOutcomes:
      "Had Sony been read to immunize Napster, centralized-index P2P services would have proliferated with legal cover, and the music industry's transition to licensed digital distribution might have been forced on far worse terms. The decision instead pushed file sharing toward decentralized architectures (Grokster, KaZaA), spawning the Supreme Court's inducement doctrine in MGM v. Grokster (2005). Had Napster successfully pivoted to a licensed subscription model before collapse — negotiations with Bertelsmann came close — it might have become the first iTunes/Spotify; the failure left a market vacuum Apple filled in 2003.",
    lessonsLearned: [
      'Service architecture matters: a central index creating knowledge and control invites secondary liability',
      'Sony protects technology distribution, not ongoing services with specific knowledge of infringement',
      'Internal communications acknowledging infringement are catastrophic litigation evidence',
      'Disruptive platforms ignoring licensing eventually face existential injunctions',
    ],
    bestPractices: [
      'Build rights-management, filtering, and notice-and-takedown capability into content platforms from day one',
      'Pursue licensing negotiations with rights holders before, not after, achieving infringing scale',
      'Counsel platform teams that emails about user piracy will define the knowledge element in litigation',
    ],
    outcome: 'Plaintiff Victory',
    significance:
      'The foundational secondary liability decision of the internet era, shutting down Napster and shaping all subsequent platform copyright law.',
    isFeatured: false,
    parties: [
      { id: 'napster-p', name: 'A&M Records, Inc. and seventeen other record companies; Jerry Leiber et al. (music publishers)', role: 'PLAINTIFF', counsel: 'Russell J. Frackman, Mitchell Silberberg & Knupp LLP' },
      { id: 'napster-d', name: 'Napster, Inc.', role: 'DEFENDANT', counsel: 'David Boies, Boies, Schiller & Flexner LLP; Laurence Pulgram, Fenwick & West LLP' },
    ],
  },
  {
    id: 'authors-guild-v-google',
    name: 'Authors Guild v. Google, Inc.',
    citation: '804 F.3d 202 (2d Cir. 2015)',
    litigationTypeSlug: 'copyright',
    litigationTypeName: 'Copyright Litigation',
    court: 'U.S. Court of Appeals for the Second Circuit',
    jurisdiction: 'United States (Federal)',
    filingDate: '2005-09-20',
    decisionDate: '2015-10-16',
    facts:
      'Beginning in 2004, Google partnered with major research libraries to scan more than twenty million books — most still in copyright and scanned without permission — creating a searchable digital corpus. The Google Books service let users search the full text of books and view short "snippets" (about an eighth of a page) surrounding their search terms, with safeguards blacklisting some snippets and excluding works like dictionaries; Google also gave participating libraries digital copies of books from their own collections. The Authors Guild and individual authors sued in 2005, claiming massive copyright infringement. A proposed $125 million class settlement that would have created a books marketplace was rejected by the court in 2011 as exceeding the proper bounds of a class settlement. The case then proceeded on the merits of Google\'s fair use defense.',
    keyLegalIssues: [
      'Whether mass digitization of copyrighted books to enable full-text search is fair use',
      'Whether snippet display substitutes for the originals or reveals protected expression excessively',
      'Whether providing digital copies to partner libraries constituted infringement',
      "Whether Google's commercial motivation defeats transformative purpose",
    ],
    plaintiffArguments:
      'The Authors Guild argued that Google copied millions of complete works verbatim, for profit, without permission or payment — the largest copyright infringement in history. It contended the copying was not transformative because the books were not altered, and that Google usurped the authors\' right to license their works for search and digital indexing, a developing market. It warned that the corpus created hacking risks exposing complete texts, and that snippets, aggregated through repeated searches, could substitute for purchasing books.',
    defendantArguments:
      "Google argued that copying for full-text search is paradigmatically transformative: the corpus does not communicate books' expressive content but information about them — where terms appear, in which books, across centuries of usage — enabling research impossible by other means, such as text mining and n-gram analysis. Snippet view shows only fragments insufficient to substitute for any book, with engineering safeguards preventing reconstruction. Google contended no actual or potential market for search-indexing licenses was harmed, and that library copies merely enabled libraries to make fair uses of their own collections.",
    proceduralHistory:
      "After Judge Chin rejected the proposed class settlement in 2011 and the Second Circuit reversed class certification questions in favor of deciding fair use first, Judge Chin granted summary judgment to Google on fair use in November 2013. The Second Circuit (Judge Pierre Leval, fair use scholarship's leading judicial author) affirmed in 2015. The Supreme Court denied certiorari in April 2016, ending the eleven-year litigation.",
    finalDecision:
      "The Second Circuit held that Google's digitization, search function, and snippet display were fair use: the copying was highly transformative, the snippets did not provide a market substitute for the books, and supplying digital copies to the contributing libraries was not infringing. Judgment for Google was affirmed.",
    judicialReasoning:
      'Judge Leval — who coined "transformative use" in his 1990 Harvard Law Review article — held that Google\'s copying served a transformative purpose of the highest order: making available "information about Plaintiffs\' books," not the expressive content itself, akin to the thumbnail indexing approved in prior cases and the search function upheld in HathiTrust. The verbatim copying of entire books was reasonably necessary to enable full-text search, so the third factor did not weigh against Google; what matters is the amount made available to the public, and snippet view\'s fragmentary, blacklisted, non-contiguous display prevented meaningful substitution. On the fourth factor, the court found snippets might cause some lost sales (a searcher seeking one fact), but loss of sales of that kind — of facts, not protected expression — is not cognizable copyright harm. Google\'s overall commercial motivation did not defeat fair use given the transformative purpose, and the library copies were protected because each library could itself make fair use of digitized copies of its own books.',
    legalStandards: [
      'Fair use, 17 U.S.C. § 107, with transformative purpose as the first-factor core',
      'Third-factor focus on the amount made accessible to the public, not the amount copied internally',
      'Fourth-factor distinction between protected-expression substitution and unprotected-fact substitution',
    ],
    keyPrecedents: [
      'Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994)',
      'Authors Guild, Inc. v. HathiTrust, 755 F.3d 87 (2d Cir. 2014)',
      'Kelly v. Arriba Soft Corp., 336 F.3d 811 (9th Cir. 2003)',
    ],
    evidenceAnalysis:
      "Google's engineering evidence was decisive: detailed proof that snippet view returns at most three fragments per term per book, blacklists one snippet per page and one page in ten, and disables snippets for reference works showed a researcher could never reconstruct a meaningful portion of any book — the plaintiffs' own expert's attempts retrieved only scattered, incomplete text. Evidence of the corpus's research value (n-gram analysis, locating relevant books across millions of volumes) cemented the transformative purpose. The Authors Guild's market-harm theory was its weakest point, resting on a hypothetical licensing market for search indexing that the court held authors cannot claim, since it covers uses copyright does not reserve to them; its security-risk argument failed against evidence of Google's protective measures.",
    alternativeOutcomes:
      'Had the rejected 2011 class settlement been approved, it would have created a comprehensive licensed digital books marketplace with an industry-wide rights registry — arguably benefiting authors more than the fair use ruling that gave them nothing. A plaintiff victory on the merits would have shuttered book search, severely constrained search-engine indexing and text-data mining generally, and cast doubt on library digitization; the precedent instead became foundational authority for computational uses of copyrighted corpora, including arguments over AI training data. Had Google displayed larger excerpts, the substitution analysis could easily have flipped.',
    lessonsLearned: [
      'Copying entire works can be fair use when the purpose is transformative and public access to expression is tightly limited',
      'What the public can access matters more than what the defendant copied internally',
      'Rights holders cannot claim licensing markets for uses copyright does not reserve to them',
      'Technical design choices (snippet limits, blacklisting) can be the difference between fair use and infringement',
    ],
    bestPractices: [
      'Engineer access restrictions that prevent aggregate reconstruction of protected expression and document them',
      'Frame and limit mass-digitization projects around information-about-works outputs rather than expressive substitutes',
      'Rights holders should develop concrete evidence of substitution harm rather than relying on lost hypothetical license fees',
    ],
    outcome: 'Defendant Victory',
    significance:
      'Upheld mass book digitization for search as transformative fair use, the leading precedent for computational and indexing uses of copyrighted works.',
    isFeatured: false,
    parties: [
      { id: 'authors-guild-p', name: 'The Authors Guild, Inc. and individual authors (Betty Miles, Jim Bouton, Joseph Goulden)', role: 'PLAINTIFF', counsel: 'Paul M. Smith, Jenner & Block LLP; Boni & Zack LLC' },
      { id: 'authors-guild-d', name: 'Google, Inc.', role: 'DEFENDANT', counsel: 'Seth P. Waxman, WilmerHale; Daralyn J. Durie, Durie Tangri LLP' },
    ],
  },
];
