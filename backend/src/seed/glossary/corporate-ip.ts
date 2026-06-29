import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Corporation',
    definition:
      'A legal entity formed under state law that is separate and distinct from its owners (shareholders), capable of entering contracts, owning property, and incurring liabilities. Corporations offer limited liability to shareholders and can raise capital by issuing stock.',
    category: 'Corporate, Business & IP',
    example: 'Apple Inc. is a Delaware corporation whose shareholders are not personally liable for its debts.',
    relatedTerms: ['Shareholder', 'Limited Liability Company', 'Piercing the Corporate Veil', 'Board of Directors'],
  },
  {
    term: 'Limited Liability Company (LLC)',
    definition:
      'A hybrid business entity that combines the pass-through taxation of a partnership with the limited liability protection of a corporation. Members are generally not personally responsible for company debts or judgments.',
    category: 'Corporate, Business & IP',
    example: 'A small law firm may organize as an LLC so that individual members are not liable for another member\'s malpractice.',
    relatedTerms: ['Corporation', 'Partnership', 'Piercing the Corporate Veil', 'Operating Agreement'],
  },
  {
    term: 'Partnership',
    definition:
      'A business relationship in which two or more persons carry on a business for profit as co-owners. General partnerships impose unlimited personal liability on each partner, while limited partnerships protect limited partners up to their capital contribution.',
    category: 'Corporate, Business & IP',
    example: 'Two attorneys who open a joint practice without filing any formation documents are general partners by default under most state laws.',
    relatedTerms: ['Limited Liability Company', 'Corporation', 'Fiduciary Duty', 'Operating Agreement'],
  },
  {
    term: 'Fiduciary Duty',
    definition:
      'A legal obligation requiring one party (the fiduciary) to act in the best interest of another (the beneficiary). In corporate law, directors and officers owe fiduciary duties to the corporation and its shareholders, encompassing the duty of care and the duty of loyalty.',
    category: 'Corporate, Business & IP',
    example: 'A corporate CEO who diverts a business opportunity to herself for personal profit breaches her fiduciary duty to the corporation.',
    relatedTerms: ['Duty of Care', 'Duty of Loyalty', 'Business Judgment Rule', 'Derivative Action'],
  },
  {
    term: 'Duty of Care',
    definition:
      'The obligation of corporate directors and officers to make informed, deliberate decisions with the same care an ordinarily prudent person would exercise in similar circumstances. Failure to be adequately informed before making a major business decision may constitute a breach.',
    category: 'Corporate, Business & IP',
    example: 'A board that approves a merger without reviewing any financial analyses may breach the duty of care.',
    relatedTerms: ['Fiduciary Duty', 'Duty of Loyalty', 'Business Judgment Rule', 'Board of Directors'],
  },
  {
    term: 'Duty of Loyalty',
    definition:
      'The obligation of corporate directors and officers to act in the best interests of the corporation and its shareholders rather than in their own personal interests. It prohibits self-dealing and requires disclosure of conflicts of interest.',
    category: 'Corporate, Business & IP',
    example: 'A director who votes to approve a contract between the corporation and a company he secretly owns breaches the duty of loyalty.',
    relatedTerms: ['Fiduciary Duty', 'Duty of Care', 'Business Judgment Rule', 'Derivative Action'],
  },
  {
    term: 'Business Judgment Rule',
    definition:
      'A legal presumption that corporate directors and officers act in good faith, on an informed basis, and in the honest belief that their decisions are in the best interests of the corporation. Courts generally will not second-guess protected business decisions unless the presumption is rebutted.',
    category: 'Corporate, Business & IP',
    example: 'A board decision to enter a new market that later fails will typically be protected by the business judgment rule if the board was adequately informed.',
    relatedTerms: ['Duty of Care', 'Duty of Loyalty', 'Fiduciary Duty', 'Board of Directors'],
  },
  {
    term: 'Piercing the Corporate Veil',
    definition:
      'A judicial remedy that holds shareholders or members personally liable for corporate debts when they have abused the corporate form, typically by commingling personal and business funds, failing to observe corporate formalities, or using the entity as a fraud.',
    category: 'Corporate, Business & IP',
    example: 'A court pierced the veil of a single-member LLC whose owner paid personal expenses from the company account and never held formal meetings.',
    relatedTerms: ['Corporation', 'Limited Liability Company', 'Shareholder', 'Alter Ego'],
  },
  {
    term: 'Shareholder',
    definition:
      'An individual or entity that owns shares (equity interests) in a corporation, entitling them to vote on major matters, receive dividends, and share in the residual assets upon dissolution. Shareholders\' liability is generally limited to the amount invested.',
    category: 'Corporate, Business & IP',
    example: 'A person who holds 100 shares of Tesla stock is a shareholder entitled to vote at annual meetings.',
    relatedTerms: ['Corporation', 'Board of Directors', 'Derivative Action', 'Merger'],
  },
  {
    term: 'Board of Directors',
    definition:
      'The governing body of a corporation, elected by shareholders, responsible for overseeing management, setting corporate policy, and making major business decisions. Directors owe fiduciary duties of care and loyalty to the corporation.',
    category: 'Corporate, Business & IP',
    example: 'The board of directors approved the issuance of additional shares to fund the acquisition.',
    relatedTerms: ['Fiduciary Duty', 'Duty of Care', 'Duty of Loyalty', 'Business Judgment Rule'],
  },
  {
    term: 'Derivative Action',
    definition:
      'A lawsuit brought by a shareholder on behalf of the corporation to enforce a right the corporation itself has failed to assert, typically against officers or directors who have harmed the corporation. Any recovery flows back to the corporation.',
    category: 'Corporate, Business & IP',
    example: 'Shareholders sued derivatively after the board refused to pursue claims against a CEO who had embezzled company funds.',
    relatedTerms: ['Shareholder', 'Fiduciary Duty', 'Duty of Loyalty', 'Corporation'],
  },
  {
    term: 'Merger',
    definition:
      'A transaction in which two or more corporations combine into a single surviving entity. Shareholders of the non-surviving entity typically receive cash, stock in the surviving entity, or a combination thereof.',
    category: 'Corporate, Business & IP',
    example: 'Disney\'s acquisition of 21st Century Fox was structured as a merger in which Fox shareholders received Disney stock.',
    relatedTerms: ['Acquisition', 'Due Diligence', 'Shareholder', 'Antitrust'],
  },
  {
    term: 'Acquisition',
    definition:
      'The purchase of one company by another, either by buying a controlling interest in its stock or by purchasing substantially all of its assets. Unlike a merger, the acquired entity may continue to exist as a subsidiary.',
    category: 'Corporate, Business & IP',
    example: 'Google\'s acquisition of YouTube in 2006 left YouTube operating as a subsidiary rather than merging it into Google.',
    relatedTerms: ['Merger', 'Due Diligence', 'Securities', 'Antitrust'],
  },
  {
    term: 'Due Diligence',
    definition:
      'A thorough investigation of a target company\'s financial, legal, operational, and regulatory status conducted before completing a merger, acquisition, or investment. Its purpose is to identify material risks and verify the accuracy of representations made by the seller.',
    category: 'Corporate, Business & IP',
    example: 'During due diligence, the buyer discovered undisclosed environmental liabilities that led to a reduction in the purchase price.',
    relatedTerms: ['Merger', 'Acquisition', 'Securities', 'Representations and Warranties'],
  },
  {
    term: 'Securities',
    definition:
      'Financial instruments that represent an ownership interest, a creditor relationship, or rights to buy or sell such interests. Common securities include stocks, bonds, options, and investment contracts. Their issuance and trading are regulated primarily by the SEC under federal securities laws.',
    category: 'Corporate, Business & IP',
    example: 'A startup\'s issuance of preferred stock in a Series A round constitutes the offer and sale of securities subject to SEC registration or exemption requirements.',
    relatedTerms: ['Insider Trading', 'Rule 10b-5', 'Securities Fraud', 'SEC'],
  },
  {
    term: 'Insider Trading',
    definition:
      'The buying or selling of a security by someone who has material, non-public information about that security, in breach of a duty to the source of that information. It is prohibited under federal securities laws and may result in civil and criminal penalties.',
    category: 'Corporate, Business & IP',
    example: 'A corporate executive who sells her company\'s stock after learning of an unannounced earnings miss commits insider trading.',
    relatedTerms: ['Securities', 'Rule 10b-5', 'Securities Fraud', 'SEC'],
  },
  {
    term: 'Rule 10b-5',
    definition:
      'An SEC rule promulgated under Section 10(b) of the Securities Exchange Act of 1934 that prohibits any person from making false statements or engaging in fraud or deceit in connection with the purchase or sale of any security. It is the primary basis for securities fraud claims.',
    category: 'Corporate, Business & IP',
    example: 'A company that issues a press release with false revenue figures may face a class-action lawsuit under Rule 10b-5.',
    relatedTerms: ['Insider Trading', 'Securities', 'Securities Fraud', 'SEC'],
  },
  {
    term: 'Antitrust',
    definition:
      'A body of law designed to protect competition and prevent monopolistic practices. Federal antitrust laws—including the Sherman Act, Clayton Act, and FTC Act—prohibit agreements in restraint of trade, monopolization, and mergers that substantially lessen competition.',
    category: 'Corporate, Business & IP',
    example: 'The Department of Justice filed an antitrust lawsuit challenging the proposed merger of two major airlines, arguing it would reduce competition on hundreds of routes.',
    relatedTerms: ['Monopoly', 'Merger', 'Acquisition', 'Sherman Act'],
  },
  {
    term: 'Monopoly',
    definition:
      'Control of a market by a single seller or producer such that competition is effectively eliminated. Under Section 2 of the Sherman Act, willfully acquiring or maintaining monopoly power through exclusionary conduct (rather than superior product or business acumen) is unlawful.',
    category: 'Corporate, Business & IP',
    example: 'The government argued that the technology company had used exclusive dealing contracts to unlawfully maintain its monopoly in the search engine market.',
    relatedTerms: ['Antitrust', 'Sherman Act', 'Market Power', 'Predatory Pricing'],
  },
  {
    term: 'Bankruptcy',
    definition:
      'A federal legal proceeding that allows individuals or entities unable to pay their debts to obtain relief by liquidating assets or reorganizing their financial affairs under court supervision. The U.S. Bankruptcy Code governs different forms of relief through numbered chapters.',
    category: 'Corporate, Business & IP',
    example: 'The retailer filed for bankruptcy after years of declining sales left it unable to service its debt obligations.',
    relatedTerms: ['Chapter 7', 'Chapter 11', 'Automatic Stay', 'Creditor'],
  },
  {
    term: 'Chapter 7',
    definition:
      'A bankruptcy chapter under which a debtor\'s non-exempt assets are liquidated by a trustee and the proceeds are distributed to creditors, after which the debtor receives a discharge of most remaining debts. It is available to both individuals and businesses.',
    category: 'Corporate, Business & IP',
    example: 'A small business with no viable future filed Chapter 7 to wind down operations and discharge unsecured debts.',
    relatedTerms: ['Bankruptcy', 'Chapter 11', 'Automatic Stay', 'Discharge'],
  },
  {
    term: 'Chapter 11',
    definition:
      'A bankruptcy chapter that allows a business (or individual) to reorganize its debts and continue operating while proposing a plan to pay creditors over time. The debtor typically operates as a "debtor in possession" with the powers of a bankruptcy trustee.',
    category: 'Corporate, Business & IP',
    example: 'The airline filed Chapter 11 to restructure its union contracts and debt load while continuing to fly passengers.',
    relatedTerms: ['Bankruptcy', 'Chapter 7', 'Automatic Stay', 'Reorganization Plan'],
  },
  {
    term: 'Automatic Stay',
    definition:
      'An injunction that arises automatically upon the filing of a bankruptcy petition, halting most collection actions, lawsuits, foreclosures, and repossessions against the debtor. It gives the debtor breathing room to reorganize or liquidate in an orderly fashion.',
    category: 'Corporate, Business & IP',
    example: 'The moment the company filed its Chapter 11 petition, all pending lawsuits against it were paused by the automatic stay.',
    relatedTerms: ['Bankruptcy', 'Chapter 7', 'Chapter 11', 'Creditor'],
  },
  {
    term: 'Patent',
    definition:
      'A government-granted exclusive right that allows an inventor to prevent others from making, using, selling, or importing a claimed invention for a limited period (generally 20 years from filing). Patents require novelty, non-obviousness, and utility.',
    category: 'Corporate, Business & IP',
    example: 'Pfizer obtained a patent on its COVID-19 vaccine formulation, giving it the exclusive right to manufacture the vaccine for 20 years.',
    relatedTerms: ['Prior Art', 'Patent Infringement', 'Trade Secret', 'Intellectual Property'],
  },
  {
    term: 'Trademark',
    definition:
      'A word, symbol, design, or combination thereof that identifies and distinguishes the source of goods or services of one party from those of others. Federal trademark registration is obtained through the USPTO and provides nationwide priority and constructive notice.',
    category: 'Corporate, Business & IP',
    example: 'Nike\'s "swoosh" logo is a registered trademark that the company can enforce against competitors who use a confusingly similar design.',
    relatedTerms: ['Trade Dress', 'Infringement', 'Copyright', 'Licensing'],
  },
  {
    term: 'Copyright',
    definition:
      'A form of intellectual property protection that grants the creator of an original work exclusive rights to reproduce, distribute, display, perform, and create derivative works for the life of the author plus 70 years. Copyright attaches automatically upon creation and fixation in a tangible medium.',
    category: 'Corporate, Business & IP',
    example: 'An author\'s novel is protected by copyright from the moment it is written, giving her the exclusive right to publish or license it.',
    relatedTerms: ['Fair Use', 'DMCA', 'Licensing', 'Infringement'],
  },
  {
    term: 'Trade Secret',
    definition:
      'Confidential business information—such as formulas, processes, or customer lists—that derives independent economic value from its secrecy and is subject to reasonable measures to maintain that secrecy. Trade secrets are protected under state law and the federal Defend Trade Secrets Act.',
    category: 'Corporate, Business & IP',
    example: 'The Coca-Cola formula is a classic trade secret, protected indefinitely so long as the company maintains its confidentiality.',
    relatedTerms: ['Patent', 'Non-Disclosure Agreement', 'Misappropriation', 'Infringement'],
  },
  {
    term: 'Infringement',
    definition:
      'The unauthorized use of another party\'s intellectual property rights, including patents, trademarks, or copyrights. Infringement gives the rights holder the ability to seek injunctive relief, damages, and, in some cases, attorneys\' fees.',
    category: 'Corporate, Business & IP',
    example: 'A competitor that copied the patented design of a consumer product without a license committed patent infringement.',
    relatedTerms: ['Patent', 'Trademark', 'Copyright', 'Fair Use'],
  },
  {
    term: 'Fair Use',
    definition:
      'A doctrine under U.S. copyright law that permits limited use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research. Courts evaluate fair use using four statutory factors, including the purpose of the use and its effect on the market for the original.',
    category: 'Corporate, Business & IP',
    example: 'A film critic who quotes several lines from a novel in her review may rely on fair use as a defense to copyright infringement.',
    relatedTerms: ['Copyright', 'Infringement', 'DMCA', 'Licensing'],
  },
  {
    term: 'Licensing',
    definition:
      'A contractual arrangement in which the owner of intellectual property (the licensor) grants another party (the licensee) the right to use that IP under specified conditions, typically in exchange for royalties or a fee. Licenses may be exclusive or non-exclusive.',
    category: 'Corporate, Business & IP',
    example: 'A software company licenses its operating system to device manufacturers rather than selling them ownership of the underlying code.',
    relatedTerms: ['Patent', 'Copyright', 'Trademark', 'Royalty'],
  },
  {
    term: 'Prior Art',
    definition:
      'All publicly available information that existed before a patent\'s filing date that is relevant to an invention\'s claimed novelty. If prior art discloses a claimed invention, the patent may be found invalid for lack of novelty or non-obviousness.',
    category: 'Corporate, Business & IP',
    example: 'The defendant successfully challenged the patent by introducing a scientific article published two years before the filing date as prior art.',
    relatedTerms: ['Patent', 'Novelty', 'Obviousness', 'Patent Infringement'],
  },
  {
    term: 'Trade Dress',
    definition:
      'The overall commercial image of a product or service—including its appearance, packaging, color scheme, and design—that identifies and distinguishes the source. Trade dress is protectable under the Lanham Act if it is distinctive and non-functional.',
    category: 'Corporate, Business & IP',
    example: 'The distinctive shape of a Coca-Cola bottle constitutes protectable trade dress that consumers associate with the brand.',
    relatedTerms: ['Trademark', 'Infringement', 'Licensing', 'Secondary Meaning'],
  },
  {
    term: 'Digital Millennium Copyright Act (DMCA)',
    definition:
      'A 1998 federal statute that implements international copyright treaties and addresses copyright issues in the digital environment. Key provisions include anti-circumvention rules prohibiting the bypassing of digital rights management and safe harbor protections for online service providers that promptly remove infringing content.',
    category: 'Corporate, Business & IP',
    example: 'YouTube relies on the DMCA safe harbor to avoid copyright liability for user-uploaded videos, provided it promptly removes content upon receiving valid takedown notices.',
    relatedTerms: ['Copyright', 'Fair Use', 'Infringement', 'Safe Harbor'],
  },
  {
    term: 'Securities Fraud',
    definition:
      'Deceptive practices in the stock or commodities markets that induce investors to make purchase or sale decisions based on false information, resulting in losses. It is prohibited under Rule 10b-5 and may give rise to both SEC enforcement actions and private lawsuits.',
    category: 'Corporate, Business & IP',
    example: 'The company\'s CFO was charged with securities fraud for falsifying quarterly earnings reports that inflated the stock price.',
    relatedTerms: ['Rule 10b-5', 'Insider Trading', 'Securities', 'SEC'],
  },
  {
    term: 'Operating Agreement',
    definition:
      'A binding contract among LLC members that governs the management, financial structure, and operating rules of the LLC. It specifies members\' ownership percentages, voting rights, profit-sharing arrangements, and procedures for admitting new members or dissolving the company.',
    category: 'Corporate, Business & IP',
    example: 'The operating agreement specified that major decisions required a two-thirds vote of membership interests rather than a simple majority.',
    relatedTerms: ['Limited Liability Company', 'Partnership', 'Corporation', 'Fiduciary Duty'],
  },
  {
    term: 'Representations and Warranties',
    definition:
      'Statements of fact made by a party in a transaction—typically the seller in an M&A deal—concerning the condition of the business or assets being transferred. A breach entitles the other party to indemnification or, in some cases, rescission.',
    category: 'Corporate, Business & IP',
    example: 'The seller\'s warranty that all financial statements were accurate was breached when the buyer discovered $5 million in undisclosed liabilities post-closing.',
    relatedTerms: ['Due Diligence', 'Merger', 'Acquisition', 'Indemnification'],
  },
  {
    term: 'Non-Disclosure Agreement (NDA)',
    definition:
      'A contract in which one or both parties agree to keep specified confidential information secret and not to disclose it to third parties without authorization. NDAs are commonly used to protect trade secrets during business negotiations, employment, and technology licensing.',
    category: 'Corporate, Business & IP',
    example: 'Before sharing proprietary software code with a potential investor, the startup required the investor to sign an NDA.',
    relatedTerms: ['Trade Secret', 'Licensing', 'Confidentiality', 'Misappropriation'],
  },
  {
    term: 'Sherman Act',
    definition:
      'The foundational U.S. antitrust statute enacted in 1890. Section 1 prohibits contracts, combinations, or conspiracies in restraint of trade; Section 2 prohibits monopolization and attempts to monopolize. Violations can result in criminal prosecution and treble damages in civil suits.',
    category: 'Corporate, Business & IP',
    example: 'Competing companies that agreed to fix prices at a trade meeting violated Section 1 of the Sherman Act.',
    relatedTerms: ['Antitrust', 'Monopoly', 'Clayton Act', 'Market Power'],
  },
  {
    term: 'Intellectual Property (IP)',
    definition:
      'A category of legal rights that protect creations of the mind, including inventions, literary and artistic works, designs, symbols, names, and images used in commerce. The main forms of IP protection are patents, copyrights, trademarks, and trade secrets.',
    category: 'Corporate, Business & IP',
    example: 'The startup\'s most valuable assets were its intellectual property portfolio, consisting of three pending patents and several registered trademarks.',
    relatedTerms: ['Patent', 'Copyright', 'Trademark', 'Trade Secret'],
  },
];

export default terms;
