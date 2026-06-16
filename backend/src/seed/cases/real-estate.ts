import { CaseSeed } from './types';

const cases: CaseSeed[] = [
  {
    litigationSlug: 'real-estate',
    name: 'Kelo v. City of New London',
    citation: '545 U.S. 469 (2005)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 2005,
    facts: 'The City of New London, Connecticut, approved a development plan intended to revitalize its economically distressed downtown and waterfront. The plan called for the use of eminent domain to acquire privately owned land in the Fort Trumbull neighborhood and transfer it to private developers affiliated with the New London Development Corporation. Susette Kelo and eight other homeowners whose properties were targeted for condemnation challenged the takings, arguing their homes were not blighted and would be transferred to private parties rather than to a public use. The homeowners had maintained their properties and had no desire to sell. Connecticut courts upheld most of the takings, leading to the U.S. Supreme Court appeal.',
    keyLegalIssues: [
      'Whether economic development constitutes a "public use" under the Fifth Amendment Takings Clause',
      'Whether the government may condemn non-blighted private property and transfer it to another private party for economic development',
      'The scope of judicial deference to legislative determinations of public purpose',
      'Whether the Court should limit its prior holding in Berman v. Parker'
    ],
    plaintiffArguments: 'The homeowners argued that the Takings Clause permits condemnation only for uses that are genuinely open to or directly used by the public, such as roads, schools, or utilities. They contended that transferring private property to another private entity solely for economic development purposes — projected tax revenues and jobs — is not a "public use" as the Constitution requires. Counsel argued that allowing such takings would grant government unlimited power to condemn any property whenever a developer promised economic benefit, rendering the Public Use Clause meaningless. They urged the Court to apply heightened scrutiny to private-to-private transfers.',
    defendantArguments: 'New London argued that the Court has long recognized that "public use" encompasses "public purpose" and that legislatures are entitled to broad deference in determining what serves a public purpose. The city maintained that the comprehensive development plan was rationally related to legitimate government goals of economic revitalization and that job creation and increased tax revenues plainly serve the public welfare. Counsel relied on Berman v. Parker and Hawaii Housing Authority v. Midkiff as precedents establishing a highly deferential standard of review.',
    proceduralHistory: 'The homeowners filed suit in Connecticut Superior Court. The court granted a permanent injunction against some parcels but not others. Both parties appealed to the Connecticut Supreme Court, which reversed the injunction and upheld all the takings. The U.S. Supreme Court granted certiorari to address the scope of the Public Use Clause.',
    finalDecision: 'The Supreme Court affirmed the Connecticut Supreme Court in a 5-4 decision, holding that the city\'s use of eminent domain for economic development satisfied the "public use" requirement of the Fifth Amendment. Justice Stevens wrote the majority opinion; Justice O\'Connor authored the principal dissent joined by Chief Justice Rehnquist and Justices Scalia and Thomas.',
    judicialReasoning: 'Justice Stevens, writing for the majority, concluded that the Court\'s precedents interpreting "public use" to mean "public purpose" foreclosed a narrower reading. The majority emphasized that courts should defer to legislative judgments about what constitutes a public benefit, so long as the taking is rationally related to a conceivable public purpose. The Court found that the comprehensive, carefully considered development plan satisfied this standard because economic revitalization of a distressed city is plainly a legitimate government goal. The majority explicitly declined to adopt a bright-line rule prohibiting private-to-private transfers, reasoning that such categorical limits would unduly restrict governmental flexibility. In dissent, Justice O\'Connor argued the majority\'s ruling effectively eliminated any meaningful limit on the Takings Clause, since virtually any private use can be argued to confer some incidental public benefit. Justice Thomas separately dissented, urging a return to the original meaning of "public use" as requiring actual public access or ownership.',
    legalStandards: [
      'Fifth Amendment Public Use Clause',
      'Rational basis deference to legislative public purpose determinations',
      'Berman v. Parker broad public purpose doctrine',
      'Hawaii Housing Authority v. Midkiff standard for deference'
    ],
    keyPrecedents: [
      'Berman v. Parker, 348 U.S. 26 (1954)',
      'Hawaii Housing Authority v. Midkiff, 467 U.S. 229 (1984)',
      'Pennsylvania Coal Co. v. Mahon, 260 U.S. 393 (1922)'
    ],
    evidenceAnalysis: 'The Court examined the City\'s detailed development plan, which had been adopted after significant public deliberation and was designed to create thousands of jobs and millions in tax revenue. The record showed that New London had suffered decades of economic decline following closure of a naval facility. Expert testimony supported the city\'s determination that integrated development of the Fort Trumbull area as a whole would maximize public benefit, even though individual parcels were not themselves blighted.',
    alternativeOutcomes: 'Had the Court adopted Justice O\'Connor\'s approach, private-to-private transfers would have been permissible only where the condemned property itself was harmful — an "extreme hardship" or blight standard. A Thomas-approach ruling would have restricted condemnations to literally public-owned or publicly accessible facilities, fundamentally curtailing modern urban renewal and economic development programs. Either dissenting approach would have required legislatures and courts to apply meaningful scrutiny to takings benefiting private developers.',
    lessonsLearned: [
      'The Public Use Clause provides minimal judicial protection against legislative determinations of public purpose',
      'Property owners have little constitutional recourse when government condemns non-blighted land for economic development',
      'The political backlash following Kelo led over 40 states to enact stronger statutory protections for property owners',
      'Comprehensive planning processes provide some procedural safeguard even without strong constitutional limits'
    ],
    bestPractices: [
      'Municipalities should engage community stakeholders early when considering eminent domain for development',
      'Developers and cities should document thorough economic analyses supporting claimed public benefits',
      'Property owners facing condemnation should challenge not only the taking but also the adequacy of just compensation',
      'Attorneys should advise clients of state-law protections that may exceed federal constitutional minimums post-Kelo'
    ],
    significance: 'Kelo v. City of New London is one of the most controversial property-rights decisions in modern American history. The ruling definitively resolved that economic development satisfies the constitutional public use requirement, dramatically expanding governmental power to condemn private property for transfer to other private parties. The decision generated immediate and widespread public outrage, prompting legislative responses in the vast majority of states that enacted statutes or constitutional amendments providing greater protection than the federal floor. Kelo remains essential reading for eminent domain practice, illustrating the gap between constitutional doctrine and democratic sentiment. It fundamentally shaped how municipalities structure redevelopment plans and how property owners and their counsel approach condemnation challenges.',
    outcome: 'Defendant Victory',
    isFeatured: true,
    parties: [
      {
        name: 'Susette Kelo',
        role: 'PLAINTIFF',
        counsel: 'Scott Bullock, Institute for Justice',
        description: 'Lead plaintiff and homeowner whose pink cottage on the Thames River became a national symbol of the property-rights movement'
      },
      {
        name: 'City of New London, Connecticut',
        role: 'DEFENDANT',
        counsel: 'Wesley Horton; Thomas Londregan',
        description: 'Connecticut municipality seeking to execute a comprehensive economic development plan for the Fort Trumbull neighborhood'
      },
      {
        name: 'New London Development Corporation',
        role: 'THIRD_PARTY',
        description: 'Private non-profit development entity designated by the city to oversee the redevelopment project'
      }
    ]
  },
  {
    litigationSlug: 'real-estate',
    name: 'Penn Central Transportation Co. v. City of New York',
    citation: '438 U.S. 104 (1978)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1978,
    facts: 'Penn Central Transportation Company owned Grand Central Terminal in New York City, a grand Beaux-Arts structure completed in 1913. New York City designated Grand Central a landmark in 1967 under the New York City Landmarks Preservation Law, which required owners of designated landmarks to keep their buildings in good repair and obtain approval before altering facades. Penn Central proposed to construct a 55-story office tower above the terminal, under two separate plans submitted to the Landmarks Preservation Commission. Both plans were denied on the grounds they would destroy the aesthetic character of the terminal. Penn Central argued that the landmark designation as applied to the airspace above the terminal amounted to a regulatory taking requiring just compensation, because it deprived the company of any reasonable economic return on its valuable air rights.',
    keyLegalIssues: [
      'Whether landmark preservation regulations that prevent development of airspace above a building constitute a regulatory taking requiring just compensation',
      'The proper multi-factor test for identifying a regulatory taking',
      'Whether the availability of transferable development rights defeats a takings claim',
      'How to measure the relevant parcel for purposes of the diminution-in-value analysis'
    ],
    plaintiffArguments: 'Penn Central argued that the landmark designation singled out its property for a special burden not imposed on neighboring properties, depriving it of the ability to develop its air rights and earn a reasonable return. The company contended that the airspace above the terminal should be analyzed as a separate parcel and that the Commission\'s denial deprived it of essentially all value of those air rights. Penn Central maintained that the regulations transferred economic value from the company to the public without compensation, constituting a classic taking. The railroad also argued the transferable development rights offered were inadequate and speculative substitutes for the denied development.',
    defendantArguments: 'New York City argued that landmark designation is a legitimate exercise of the police power to preserve historic and aesthetic resources for the public benefit and imposes no categorical taking. The city contended that Penn Central retained substantial economic use of Grand Central — continuing to operate a functioning railroad terminal generating millions in revenue — and that only a deprivation of all economically beneficial use constitutes a per se taking. Counsel maintained that the relevant parcel is the entire ownership interest in the terminal, not the severed airspace, and that when measured correctly Penn Central suffered no significant diminution in value.',
    proceduralHistory: 'Penn Central filed suit in New York Supreme Court, which initially ruled for the company, finding a taking. The Appellate Division reversed. The New York Court of Appeals affirmed the Appellate Division, upholding the landmark law. The U.S. Supreme Court granted certiorari to resolve the question of whether landmark preservation laws can effect regulatory takings.',
    finalDecision: 'The Supreme Court affirmed the New York Court of Appeals in a 6-3 decision, holding that New York\'s application of its Landmarks Preservation Law did not constitute a taking. Justice Brennan authored the majority opinion; Justice Rehnquist dissented, joined by Chief Justice Burger and Justice Stevens.',
    judicialReasoning: 'Justice Brennan\'s majority opinion established the foundational ad hoc balancing test for regulatory takings that remains controlling law. The Court identified three primary factors: (1) the economic impact of the regulation on the claimant; (2) the extent to which the regulation interferes with distinct investment-backed expectations; and (3) the character of the governmental action. Applying these factors, the majority found no taking because Penn Central retained the ability to use Grand Central as a functioning terminal and generate reasonable economic returns from the existing use. The Court rejected the "segmentation" approach of treating airspace as a distinct parcel, reasoning that the relevant comparison is the property as a whole. The availability of transferable development rights, which Penn Central could sell or use elsewhere in the city, was also relevant in mitigating the economic impact. The majority emphasized that not every governmental regulation that diminishes property value constitutes a compensable taking, or government could not enact zoning, environmental, or safety laws.',
    legalStandards: [
      'Penn Central three-factor regulatory takings balancing test',
      'Diminution in value analysis using the parcel as a whole',
      'Investment-backed expectations doctrine',
      'Police power versus eminent domain distinction'
    ],
    keyPrecedents: [
      'Pennsylvania Coal Co. v. Mahon, 260 U.S. 393 (1922)',
      'Mugler v. Kansas, 123 U.S. 623 (1887)',
      'Village of Euclid v. Ambler Realty Co., 272 U.S. 365 (1926)'
    ],
    evidenceAnalysis: 'The record included financial analyses showing Penn Central earned substantial revenue operating Grand Central as a railroad terminal and that the terminal retained significant economic value independent of any air rights development. The Landmarks Commission\'s denial records documented aesthetic and structural concerns about both proposed tower designs. Evidence of the transferable development rights program showed that Penn Central could transfer unused development rights to nearby parcels it owned or sell them on the open market, partially mitigating the economic impact of the denial.',
    alternativeOutcomes: 'Had the Court adopted Penn Central\'s segmentation approach, governments would have faced takings liability whenever landmark or historic preservation regulations prevented development of airspace or other segments of a larger parcel, potentially making comprehensive preservation programs financially untenable. A ruling for Penn Central on the diminution standard would have created strong precedent requiring compensation for a vast array of ordinary land use regulations. Conversely, a categorical rule against takings for preservation laws would have provided less nuanced guidance for novel regulatory contexts.',
    lessonsLearned: [
      'The Penn Central balancing test is highly fact-specific and provides limited predictability for property owners and regulators',
      'The definition of the relevant parcel is often outcome-determinative in regulatory takings cases',
      'Preservation of economically productive use is a strong indicator against a regulatory taking finding',
      'Transferable development rights can be effective tools for mitigating economic impact and defeating takings claims'
    ],
    bestPractices: [
      'Municipalities should pair landmark designations with robust transferable development rights programs to reduce takings exposure',
      'Property owners challenging regulations should carefully document interference with investment-backed expectations established prior to the regulation',
      'Counsel should analyze both per se and Penn Central balancing theories when evaluating regulatory takings claims',
      'Governments should conduct economic impact analyses before imposing landmark or preservation designations'
    ],
    significance: 'Penn Central Transportation Co. v. City of New York established the primary analytical framework for regulatory takings that continues to govern most such claims today. By articulating a flexible, multi-factor balancing approach rather than a categorical rule, the Court gave governments significant latitude to regulate land use without triggering compensation requirements. The decision validated historic preservation as a legitimate public interest and enabled landmark programs across American cities. It also generated decades of litigation over what counts as the relevant parcel, what qualifies as a distinct investment-backed expectation, and how to apply the character-of-government-action factor, making Penn Central one of the most cited and debated cases in American property law.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Penn Central Transportation Company',
        role: 'PLAINTIFF',
        counsel: 'Irving Shapell; Norman Marcus',
        description: 'Railroad company that owned and operated Grand Central Terminal, seeking to develop air rights above the terminal'
      },
      {
        name: 'City of New York',
        role: 'DEFENDANT',
        counsel: 'Leonard Koerner; Peter Zimroth',
        description: 'Municipality defending its Landmarks Preservation Law and the Landmarks Preservation Commission\'s denial of Penn Central\'s development proposals'
      },
      {
        name: 'Landmarks Preservation Commission',
        role: 'THIRD_PARTY',
        description: 'City agency that designated Grand Central Terminal a landmark and denied Penn Central\'s applications for air rights development'
      }
    ]
  },
  {
    litigationSlug: 'real-estate',
    name: 'Pennsylvania Coal Co. v. Mahon',
    citation: '260 U.S. 393 (1922)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1922,
    facts: 'Pennsylvania Coal Company had conveyed surface rights to land to the Mahon family and others while expressly reserving the right to mine coal beneath the surface, including the right to cause surface subsidence without liability. The Kohler Act, enacted by Pennsylvania in 1921, prohibited coal mining in ways that would cause subsidence of homes, public buildings, and other structures. When Pennsylvania Coal gave notice of its intent to mine beneath the Mahons\' property in a manner that would cause their house to subside, the Mahons sought an injunction under the Kohler Act. The coal company argued that applying the Act to coal rights it had expressly reserved constituted an unconstitutional taking of private property without just compensation.',
    keyLegalIssues: [
      'Whether a state police power regulation that destroys the practical value of a property right constitutes a compensable taking under the Fourteenth Amendment',
      'The limits of the police power when applied to eliminate a property interest that was contractually reserved',
      'How to determine when a regulation "goes too far" and crosses the line into a taking',
      'The relevance of contractual allocation of subsurface rights to the takings analysis'
    ],
    plaintiffArguments: 'Pennsylvania Coal argued that the Kohler Act as applied destroyed the entire economic value of the support estate — a recognized distinct property interest under Pennsylvania law — that the company had specifically and expressly reserved when conveying the surface. The company maintained that because the Mahons and their predecessors had accepted deeds expressly disclaiming any right to support, they could not now invoke the government to give them what they had bargained away. Counsel contended that where a regulation goes so far as to render a property interest worthless, it constitutes a taking requiring compensation regardless of how the state characterizes its action as a police power exercise.',
    defendantArguments: 'The Mahons and the Commonwealth argued that the Kohler Act was a valid exercise of the police power to protect public health and safety from the hazards of subsidence, which caused structural damage and threatened lives. They maintained that property rights are always held subject to the sovereign\'s police power and that regulations protecting human safety do not give rise to compensation claims. Counsel argued that the company retained the right to mine elsewhere and that the Act did not destroy all value of its coal interests taken as a whole.',
    proceduralHistory: 'The Mahons filed suit in the Court of Common Pleas of Luzerne County, Pennsylvania, seeking to enjoin the coal company from mining in a manner that would cause subsidence. The lower court denied relief. The Pennsylvania Supreme Court reversed, upholding the Kohler Act and granting the injunction. Pennsylvania Coal appealed to the U.S. Supreme Court.',
    finalDecision: 'The Supreme Court reversed the Pennsylvania Supreme Court in an 8-1 decision, holding that the Kohler Act as applied to the reserved support estate constituted a regulatory taking of the coal company\'s property without just compensation. Justice Holmes wrote the majority; Justice Brandeis dissented.',
    judicialReasoning: 'Justice Holmes authored one of the most influential opinions in American property law, establishing the foundational principle that "if regulation goes too far it will be recognized as a taking." Holmes reasoned that while the state undoubtedly has broad police power to regulate, that power has limits, and a regulation that makes a particular property interest valueless is equivalent in its effect to a physical confiscation. He emphasized the importance of the distinct support estate recognized under Pennsylvania law, which the company had expressly reserved and which the Act effectively abolished in favor of surface owners who had contractually disclaimed any right to support. Holmes acknowledged the difficulty of drawing the line but concluded that in this case, where a specific, separately recognized, and contractually reserved property right was entirely destroyed by regulation, the line had been crossed. Justice Brandeis in dissent argued that the harm-prevention rationale of the Kohler Act justified it as police power rather than a taking, and that all property is held subject to the power of the state to prevent harmful uses.',
    legalStandards: [
      '"Goes too far" standard for regulatory takings (Holmes)',
      'Police power limitations under the Fourteenth Amendment',
      'Recognition of distinct property interests (support estate) in takings analysis',
      'Harm prevention versus benefit conferral distinction'
    ],
    keyPrecedents: [
      'Mugler v. Kansas, 123 U.S. 623 (1887)',
      'Hadacheck v. Sebastian, 239 U.S. 394 (1915)',
      'Plymouth Coal Co. v. Pennsylvania, 232 U.S. 531 (1914)'
    ],
    evidenceAnalysis: 'The record established that Pennsylvania recognized the support estate as a distinct legal interest that could be severed and separately conveyed, and that the Mahons\' deed expressly acknowledged the reservation of coal and the waiver of any right to surface support. Evidence showed the Kohler Act required the coal company to leave coal in place as pillars to prevent subsidence, rendering substantial quantities of reserved coal unmined and economically worthless. The practical effect was to transfer the economic value of the support estate from the company back to the surface owners without payment.',
    alternativeOutcomes: 'Had the Court adopted Brandeis\'s dissent, the police power would have been essentially unlimited as long as the government characterized regulation as preventing harm, making the Takings Clause largely unavailing against regulatory action. A narrower ruling might have found a taking only where a separately recognized estate is entirely destroyed, without establishing broader limits on regulation. The Holmes "goes too far" formulation instead created an open-ended standard requiring case-by-case analysis that proved enormously influential but also notoriously difficult to apply with consistency.',
    lessonsLearned: [
      'Regulatory takings doctrine requires courts to evaluate how far a regulation reaches into recognized property rights, not merely its stated justification',
      'Contractual allocation of property rights between private parties remains legally significant in regulatory takings cases',
      'The distinction between a separately recognized property interest and a regulation of the same parcel can be determinative',
      'Holmes\'s "goes too far" standard deliberately left line-drawing to case-by-case adjudication, creating lasting uncertainty'
    ],
    bestPractices: [
      'Mineral rights purchasers should document the economic value of severed estates and preserve records for potential takings claims',
      'Legislatures drafting land use regulations should assess whether they effectively destroy separately recognized property interests',
      'Attorneys should evaluate both the character of affected property interests and the degree of value destruction when advising on regulatory takings claims',
      'Surface owners should carefully review deed language regarding support rights before relying on regulatory protection'
    ],
    significance: 'Pennsylvania Coal Co. v. Mahon is the foundational case for the entire doctrine of regulatory takings in American constitutional law. Justice Holmes\'s declaration that "if regulation goes too far it will be recognized as a taking" established that the Takings Clause applies not only to physical appropriations but also to regulatory actions that effectively destroy property value. The case initiated nearly a century of Supreme Court decisions attempting to define exactly when regulation becomes a taking, making it the necessary starting point for any analysis in the field. The tension between Holmes\'s majority and Brandeis\'s dissent continues to animate scholarly debate and judicial decision-making in takings cases to the present day.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'Pennsylvania Coal Company',
        role: 'PLAINTIFF',
        counsel: 'George Wharton Pepper',
        description: 'Coal mining company that had reserved subsurface mining rights and the support estate when conveying surface rights, challenging state regulation prohibiting subsidence-causing mining'
      },
      {
        name: 'H.J. Mahon',
        role: 'DEFENDANT',
        counsel: 'Robert von Moschzisker',
        description: 'Surface property owner who sought to enjoin mining operations that would cause subsidence of his home, relying on the Kohler Act'
      },
      {
        name: 'Commonwealth of Pennsylvania',
        role: 'INTERVENOR',
        description: 'State that enacted the Kohler Act and intervened to defend its constitutionality as a valid exercise of the police power'
      }
    ]
  },
  {
    litigationSlug: 'real-estate',
    name: 'Lucas v. South Carolina Coastal Council',
    citation: '505 U.S. 1003 (1992)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1992,
    facts: 'David Lucas purchased two residential lots on the Isle of Palms, a barrier island off the coast of South Carolina, in 1986 for approximately $975,000, intending to build single-family homes on each. At the time of purchase, the lots were not subject to any construction prohibition. In 1988, South Carolina enacted the Beachfront Management Act, which prohibited construction of habitable structures seaward of a setback line. Both of Lucas\'s lots fell entirely seaward of the setback line, rendering them incapable of any economically productive use under state law. Lucas brought a takings claim in state court, arguing that the Act had rendered his property valueless and thus effected a regulatory taking requiring just compensation.',
    keyLegalIssues: [
      'Whether a regulation that deprives a landowner of all economically beneficial use of property constitutes a per se compensable taking regardless of the government\'s stated justification',
      'Whether the "harmful use" exception to the takings requirement extends to regulations that entirely eliminate property value',
      'The scope of the nuisance exception to the per se total-deprivation takings rule',
      'The relevance of background principles of state property and nuisance law in defining the scope of property rights subject to regulatory taking'
    ],
    plaintiffArguments: 'Lucas argued that because the Beachfront Management Act left him with zero economically beneficial use of his lots — he could not build, could not develop, and the lots had no agricultural or other alternative productive use — the regulation was functionally equivalent to a physical taking of the entire property. He contended that regardless of how important the state\'s environmental goals were, the Constitution required compensation whenever government eliminates all property value. Lucas maintained that the state could not invoke harm-prevention rationale to avoid the Takings Clause when the scale of deprivation was total.',
    defendantArguments: 'The South Carolina Coastal Council argued that the Beachfront Management Act was a proper exercise of the police power to prevent construction that would harm coastal ecosystems, cause beach erosion, and endanger lives and property from storm surge. The Council contended that because the lots were located in a fragile barrier island environment, construction on them always constituted a harmful use that the state could prohibit without compensation, regardless of whether the prohibition rendered the lots valueless. The state argued that no taking occurs when government prevents uses that constitute a nuisance or threaten public safety.',
    proceduralHistory: 'Lucas filed suit in the South Carolina Court of Common Pleas, which awarded him over $1.2 million in compensation. South Carolina appealed, and the South Carolina Supreme Court reversed, holding that no compensation was required because the Act was enacted to prevent serious public harm. The U.S. Supreme Court granted certiorari to consider the categorical treatment of total-deprivation regulations under the Takings Clause.',
    finalDecision: 'The Supreme Court reversed the South Carolina Supreme Court in a 6-3 decision, establishing a categorical rule that a regulation depriving a landowner of all economically beneficial use of property constitutes a taking unless the prohibited uses were already unlawful under background principles of the state\'s property and nuisance law. Justice Scalia authored the majority; Justices Blackmun and Stevens dissented.',
    judicialReasoning: 'Justice Scalia\'s majority opinion established two categorical rules at the poles of the regulatory takings spectrum. At one end, a permanent physical invasion always constitutes a taking. At the other end, a regulation that deprives an owner of all economically beneficial use also constitutes a categorical taking — without resort to Penn Central balancing — unless the proscribed uses were already unlawful as a nuisance or under other background principles of state property law existing when the owner acquired title. The Court rejected the argument that the harmful-use justification for a regulation could defeat a total-deprivation takings claim, reasoning that this would allow the exception to swallow the rule. The majority remanded for the South Carolina courts to determine whether Lucas\'s proposed construction would have been actionable as a nuisance or otherwise prohibited under background state law. On remand, South Carolina courts found no such background principles precluded Lucas\'s proposed use, and the state settled by paying Lucas compensation and eventually selling the lots. Justice Stevens\' dissent argued the categorical rule was arbitrary and that the Penn Central balancing test was more appropriate. Justice Blackmun\'s dissent criticized the majority for imposing a new categorical rule that ignored the state\'s legitimate power to prevent genuine harm.',
    legalStandards: [
      'Lucas categorical total-deprivation per se takings rule',
      'Background principles of state property and nuisance law exception',
      'Logically prior nuisance doctrine as limit on property rights',
      'Penn Central balancing for non-categorical cases'
    ],
    keyPrecedents: [
      'Pennsylvania Coal Co. v. Mahon, 260 U.S. 393 (1922)',
      'Penn Central Transportation Co. v. City of New York, 438 U.S. 104 (1978)',
      'Agins v. City of Tiburon, 447 U.S. 255 (1980)',
      'Mugler v. Kansas, 123 U.S. 623 (1887)'
    ],
    evidenceAnalysis: 'The record established that Lucas paid approximately $975,000 for the two lots specifically for residential development and that the Beachfront Management Act, enacted two years after his purchase, left the lots with no economically productive use given the construction prohibition. The South Carolina courts accepted the trial court\'s finding of total deprivation of economic value. Expert testimony on the marine environment supported the state\'s concerns about coastal erosion and ecosystem damage from construction on barrier islands, but the Supreme Court found these policy justifications insufficient to avoid compensation in a total-deprivation scenario.',
    alternativeOutcomes: 'Had the Court affirmed and adopted the South Carolina Supreme Court\'s approach, governments would have faced no per se takings liability whenever they characterized land-use prohibitions as preventing environmental harm, effectively immunizing total-deprivation regulations from the Takings Clause. A ruling applying only Penn Central balancing — as Stevens advocated — would have permitted weighing the severity of the deprivation against the regulatory purpose without a categorical rule, giving governments more flexibility but offering less predictability. The Lucas categorical rule instead created a clear doctrinal benchmark at the total-deprivation extreme, though it left the definition of the applicable parcel and the scope of background principles contested.',
    lessonsLearned: [
      'Governments must pay compensation when regulations eliminate all economically beneficial use unless background state law already prohibited those uses',
      'The timing of property acquisition relative to regulation is legally significant under the Lucas background-principles framework',
      'Environmental regulations that render coastal lots entirely unbuildable trigger per se takings liability absent applicable nuisance background principles',
      'The definition of the relevant parcel remains critical — subdividing a parcel can trigger a Lucas total-deprivation claim even when the larger holding retains value'
    ],
    bestPractices: [
      'Coastal property purchasers should investigate all applicable environmental setback rules and regulations before acquisition',
      'Governments enacting broad environmental restrictions should identify and document applicable background nuisance principles that support the prohibition without compensation',
      'Attorneys representing landowners facing regulatory prohibitions should assess whether total deprivation of economic value can be demonstrated',
      'Regulators should consider phased or graduated restrictions rather than categorical prohibitions that risk triggering Lucas categorical claims'
    ],
    significance: 'Lucas v. South Carolina Coastal Council significantly restructured regulatory takings doctrine by establishing a categorical per se rule at the extreme end of regulatory impact — total deprivation of economic value. By rejecting the argument that harm-prevention rationale defeats a takings claim in total-deprivation cases, the Court imposed a firm constitutional constraint on environmental and land-use regulations that entirely eliminate property value. The decision also introduced the concept of "background principles" of state law as the limiting exception, generating extensive subsequent litigation over what counts as such a principle. Lucas is essential to any understanding of the interaction between environmental regulation and constitutional property rights and remains a central case in property law courses and land use litigation practice.',
    outcome: 'Plaintiff Victory',
    parties: [
      {
        name: 'David H. Lucas',
        role: 'PLAINTIFF',
        counsel: 'Ronald Burnette',
        description: 'Developer who purchased two beachfront lots for residential construction and challenged the total prohibition on development imposed by the Beachfront Management Act'
      },
      {
        name: 'South Carolina Coastal Council',
        role: 'DEFENDANT',
        counsel: 'David©. Frohnmayer; James Brennan',
        description: 'State coastal management agency that administered the Beachfront Management Act and denied Lucas any right to build on his lots'
      }
    ]
  },
  {
    litigationSlug: 'real-estate',
    name: 'Village of Euclid v. Ambler Realty Co.',
    citation: '272 U.S. 365 (1926)',
    jurisdiction: 'Federal',
    court: 'Supreme Court of the United States',
    year: 1926,
    facts: 'The Village of Euclid, Ohio, adopted a comprehensive zoning ordinance in 1922 that divided the municipality into use districts restricting land to specified categories of residential, commercial, and industrial uses, along with height and area districts. Ambler Realty Company owned approximately 68 acres of undeveloped land in Euclid that lay along a major thoroughfare and had been held in anticipation of industrial development. The zoning ordinance classified much of Ambler\'s land in residential and limited-use zones, preventing the industrial development for which the company had acquired and held the property. Ambler claimed the ordinance reduced the market value of its land from approximately $10,000 per acre to $2,500 per acre and brought suit arguing the ordinance was an unconstitutional deprivation of property without due process of law.',
    keyLegalIssues: [
      'Whether comprehensive euclidean zoning ordinances restricting land use by district are a constitutional exercise of the municipal police power',
      'Whether zoning regulations that substantially diminish property value violate the Due Process Clause of the Fourteenth Amendment',
      'The proper judicial standard for evaluating facial challenges to comprehensive land use regulations',
      'Whether separating residential from commercial and industrial uses bears a rational relationship to legitimate government purposes'
    ],
    plaintiffArguments: 'Ambler Realty argued that the zoning ordinance constituted an arbitrary and unreasonable exercise of the police power because it destroyed a substantial portion of its property\'s value by preventing industrial use for which the land was uniquely suited by virtue of its location adjacent to transportation corridors. The company contended that zoning restrictions serve no legitimate public health or safety purpose when applied to undeveloped land that poses no present harm to neighboring properties. Counsel argued that the comprehensive classification of entire districts was a blunt instrument that bore no reasonable relationship to any specific nuisance or harm, and that the ordinance effectively confiscated industrial land value for the benefit of residential neighbors.',
    defendantArguments: 'The Village of Euclid argued that comprehensive zoning is a well-established and necessary exercise of the police power to promote public health, safety, morals, and general welfare by separating incompatible land uses, reducing traffic, and maintaining quiet residential areas free from the noise, congestion, and hazards of commercial and industrial activities. The village maintained that courts should defer to legislative judgments about optimal land use policy, and that the ordinance bore a rational relationship to legitimate governmental objectives even if it reduced Ambler\'s property value. Counsel analogized zoning to other recognized police power regulations that impose costs on some property owners for the general public benefit.',
    proceduralHistory: 'Ambler Realty filed suit in the U.S. District Court for the Northern District of Ohio, which ruled the ordinance unconstitutional on its face as an unreasonable exercise of police power. The District Court granted a permanent injunction against enforcement. The Village of Euclid appealed directly to the U.S. Supreme Court, which reversed.',
    finalDecision: 'The Supreme Court reversed the District Court in a 6-3 decision, upholding the constitutionality of comprehensive use-district zoning ordinances as a valid exercise of the municipal police power under the Fourteenth Amendment. Justice Sutherland wrote the majority opinion; Justices Van Devanter, McReynolds, and Butler dissented without opinion.',
    judicialReasoning: 'Justice Sutherland\'s majority opinion established that comprehensive land use zoning is a legitimate exercise of the police power that does not facially violate the Due Process Clause. The Court applied a deferential standard, asking whether the regulations bore a reasonable relationship to the public health, safety, morals, or general welfare. Sutherland acknowledged that zoning was a relatively new governmental tool but reasoned that circumstances change and that courts must adapt constitutional doctrine to modern urban conditions. The majority held that segregating residential, commercial, and industrial uses served obvious public benefits: protecting residents from the noise, traffic, and hazards of industry; preserving residential neighborhoods; and promoting orderly municipal growth. The Court noted the ordinance should be evaluated in its general application and declined to strike it down facially even if particular applications might prove arbitrary. Sutherland famously analogized a pig to a "nuisance in a parlor" — things that are not nuisances in themselves become so by location — to capture the principle that appropriate land uses depend on context. The Court reserved the possibility that as-applied challenges to specific parcels might succeed even if the ordinance is facially valid.',
    legalStandards: [
      'Rational basis review for land use regulations under the Due Process Clause',
      'Facial versus as-applied constitutional challenges to zoning ordinances',
      'Police power broad deference standard for land use regulation',
      'Contextual nuisance principle ("pig in the parlor") for use separations'
    ],
    keyPrecedents: [
      'Hadacheck v. Sebastian, 239 U.S. 394 (1915)',
      'Reinman v. City of Little Rock, 237 U.S. 171 (1915)',
      'Welch v. Swasey, 214 U.S. 91 (1909)'
    ],
    evidenceAnalysis: 'The record included the text of the Euclid zoning ordinance and evidence of Ambler\'s property holdings, their location, and the asserted diminution in market value from approximately $10,000 to $2,500 per acre for land restricted to residential use. The District Court had credited Ambler\'s evidence of value destruction and found the regulations arbitrary. The Supreme Court, however, evaluated the ordinance on its face rather than as applied to Ambler\'s specific parcels, and found the general scheme of use districts to be rationally related to health, safety, and welfare objectives regardless of impact on any particular owner.',
    alternativeOutcomes: 'Had the Court affirmed the District Court\'s ruling, comprehensive euclidean zoning would have been constitutionally invalidated in its infancy, fundamentally altering the development of American cities. Without zoning authority, municipalities would have had to rely solely on nuisance law and private covenants to manage incompatible land uses, likely resulting in far more mixed-use and less orderly urban growth. A ruling against Euclid would have left the separation of residential neighborhoods from industry to market forces and private ordering, producing profoundly different urban landscapes and land markets across the United States.',
    lessonsLearned: [
      'Comprehensive zoning is constitutionally permissible as a police power exercise subject only to rational basis review',
      'Facial challenges to zoning ordinances face a very high bar; as-applied challenges addressing specific parcels may be more viable',
      'Substantial diminution in property value alone does not render a zoning ordinance unconstitutional under the Due Process Clause',
      'Courts give broad deference to legislative and administrative determinations of appropriate land use classifications'
    ],
    bestPractices: [
      'Property purchasers should investigate all applicable zoning classifications and overlay districts before acquisition',
      'Developers seeking rezoning should document the rational relationship between proposed uses and surrounding land use patterns',
      'Municipal attorneys should ensure zoning ordinances are supported by planning findings that articulate health, safety, and welfare rationale',
      'Property owners challenging zoning restrictions should pursue as-applied challenges tied to the specific parcel rather than facial attacks on the ordinance'
    ],
    significance: 'Village of Euclid v. Ambler Realty Co. is the foundational constitutional decision validating comprehensive land use zoning in the United States. By upholding Euclid\'s use-district ordinance under rational basis review, the Supreme Court legitimized a form of land use regulation that would reshape every American city and suburb throughout the twentieth century. The decision enabled municipalities across the country to adopt separation-of-uses zoning, directly creating the suburban residential neighborhood as a legally protected category. Euclid established the basic constitutional framework — rational basis review for land use regulations — that continues to govern most zoning challenges today. Its legacy is visible in virtually every American community and it remains required reading for any practitioner or scholar in property law, land use regulation, or constitutional law.',
    outcome: 'Defendant Victory',
    parties: [
      {
        name: 'Ambler Realty Company',
        role: 'PLAINTIFF',
        counsel: 'Newton D. Baker',
        description: 'Real estate company holding approximately 68 acres of undeveloped land in Euclid intended for industrial development, whose land value was substantially reduced by the zoning ordinance'
      },
      {
        name: 'Village of Euclid, Ohio',
        role: 'DEFENDANT',
        counsel: 'James Metzenbaum',
        description: 'Ohio municipality that enacted one of the nation\'s first comprehensive use-district zoning ordinances in 1922, segregating residential, commercial, and industrial land uses throughout the village'
      }
    ]
  }
];

export default cases;
