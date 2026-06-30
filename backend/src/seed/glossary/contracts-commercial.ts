import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Offer',
    definition:
      'A definite proposal made by one party (the offeror) to another (the offeree) indicating a willingness to enter into a contract on specified terms. An offer must be communicated, sufficiently definite, and made with the intent to be bound upon acceptance.',
    category: 'Contracts & Commercial',
    example:
      'A seller sends a signed letter offering to sell a warehouse for $500,000, with payment due within 30 days of acceptance.',
    relatedTerms: ['Acceptance', 'Mutual Assent', 'Consideration'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Acceptance',
    definition:
      'An unequivocal agreement by the offeree to the terms of an offer, forming a binding contract. Acceptance must mirror the offer exactly (the mirror-image rule at common law) and be communicated to the offeror before the offer lapses or is revoked.',
    category: 'Contracts & Commercial',
    example:
      'A buyer signs and returns the seller\'s purchase order without modification, constituting valid acceptance.',
    relatedTerms: ['Offer', 'Mutual Assent', 'Consideration', 'Counter-Offer'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Consideration',
    definition:
      'Something of legal value bargained for and exchanged between parties to a contract. Each party must give consideration—a benefit, detriment, act, forbearance, or promise—for a contract to be enforceable.',
    category: 'Contracts & Commercial',
    example:
      'A tenant pays monthly rent (consideration) in exchange for the landlord\'s promise to provide use of the premises.',
    relatedTerms: ['Promissory Estoppel', 'Offer', 'Acceptance', 'Quantum Meruit'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Mutual Assent',
    definition:
      'The meeting of the minds between contracting parties, demonstrated by a valid offer and acceptance, reflecting that both parties agree to the same terms at the same time. Without mutual assent there is no contract.',
    category: 'Contracts & Commercial',
    example:
      'Both parties sign the same written agreement after negotiating and agreeing on all material terms.',
    relatedTerms: ['Offer', 'Acceptance', 'Consideration'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Breach of Contract',
    definition:
      'The failure of a party to perform any obligation imposed by a valid contract without legal excuse. A breach may be total or partial, and may entitle the non-breaching party to damages, specific performance, or other remedies.',
    category: 'Contracts & Commercial',
    example:
      'A software developer fails to deliver the completed application by the contractual deadline, constituting a breach.',
    relatedTerms: ['Material Breach', 'Anticipatory Repudiation', 'Damages', 'Specific Performance'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Material Breach',
    definition:
      'A breach so significant that it defeats the purpose of the contract, excusing the non-breaching party from further performance and entitling them to sue for total breach damages. Courts weigh the extent of non-performance, likelihood of cure, and forfeiture to the breaching party.',
    category: 'Contracts & Commercial',
    example:
      'A contractor completes only 20% of a construction project before abandoning it, constituting a material breach.',
    relatedTerms: ['Breach of Contract', 'Anticipatory Repudiation', 'Damages', 'Rescission'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Anticipatory Repudiation',
    definition:
      'A clear, unequivocal statement or conduct by a promisor before the time for performance arrives indicating that they will not or cannot perform their contractual obligations. The non-breaching party may treat this as an immediate breach and sue at once.',
    category: 'Contracts & Commercial',
    example:
      'A supplier emails the buyer two months before the delivery date, stating it will not ship the goods under any circumstances.',
    relatedTerms: ['Material Breach', 'Breach of Contract', 'Damages', 'Mitigation'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Specific Performance',
    definition:
      'An equitable remedy ordering a breaching party to perform its contractual obligations as promised, rather than merely paying damages. It is typically granted only when the subject matter is unique and monetary compensation would be inadequate.',
    category: 'Contracts & Commercial',
    example:
      'A court orders the seller of a one-of-a-kind painting to complete the sale rather than pay money damages.',
    relatedTerms: ['Breach of Contract', 'Equitable Remedy', 'Injunction', 'Damages'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Liquidated Damages',
    definition:
      'A sum agreed upon in advance by contracting parties as the amount of compensation payable in the event of a specified breach. To be enforceable, the amount must be a reasonable estimate of actual harm at the time of contracting, not a penalty.',
    category: 'Contracts & Commercial',
    example:
      'A construction contract specifies $5,000 per day for every day beyond the completion deadline.',
    relatedTerms: ['Consequential Damages', 'Expectation Damages', 'Breach of Contract', 'Penalty Clause'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Consequential Damages',
    definition:
      'Damages that flow from a breach as a natural consequence of special circumstances known to the breaching party at the time of contracting. Also called special damages, they are recoverable only if foreseeable.',
    category: 'Contracts & Commercial',
    example:
      'A supplier\'s late delivery of raw materials causes a manufacturer to miss a major customer contract, and the manufacturer seeks the lost profits as consequential damages.',
    relatedTerms: ['Liquidated Damages', 'Expectation Damages', 'Mitigation', 'Breach of Contract'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Expectation Damages',
    definition:
      'The standard measure of contract damages designed to put the non-breaching party in the position they would have been in had the contract been performed. Also called benefit-of-the-bargain damages.',
    category: 'Contracts & Commercial',
    example:
      'A buyer who contracted to buy goods for $10,000 that now cost $14,000 on the open market recovers $4,000 in expectation damages.',
    relatedTerms: ['Consequential Damages', 'Reliance Damages', 'Restitution', 'Breach of Contract'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Mitigation',
    definition:
      'The duty of a non-breaching party to take reasonable steps to reduce or minimize losses flowing from a breach. Failure to mitigate bars recovery for damages that could have been reasonably avoided.',
    category: 'Contracts & Commercial',
    example:
      'An employee who is wrongfully terminated must make reasonable efforts to find comparable employment; failure to do so reduces any damages award.',
    relatedTerms: ['Expectation Damages', 'Consequential Damages', 'Breach of Contract', 'Reliance Damages'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Rescission',
    definition:
      'The cancellation or unmaking of a contract, restoring the parties to their pre-contractual positions. Rescission may be mutual or unilateral (e.g., for fraud, mistake, or failure of consideration) and typically requires returning any benefits received.',
    category: 'Contracts & Commercial',
    example:
      'After discovering the seller misrepresented the condition of equipment, the buyer rescinds the contract and demands a refund.',
    relatedTerms: ['Reformation', 'Voidable', 'Fraud', 'Restitution'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Reformation',
    definition:
      'An equitable remedy by which a court rewrites a written contract to reflect the true agreement of the parties when the writing fails to express their actual intent due to mutual mistake, fraud, or scrivener\'s error.',
    category: 'Contracts & Commercial',
    example:
      'A court reforms a lease that erroneously states $1,000/month when both parties agreed to $1,500/month.',
    relatedTerms: ['Rescission', 'Mutual Mistake', 'Equitable Remedy', 'Parol Evidence'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Void Contract',
    definition:
      'A purported agreement that has no legal effect from its inception because it lacks an essential element (e.g., involves an illegal subject matter or was made by a party with no legal capacity). Neither party has any rights or obligations under a void contract.',
    category: 'Contracts & Commercial',
    example:
      'A contract to commit a crime is void and cannot be enforced by either party.',
    relatedTerms: ['Voidable', 'Illegal Contract', 'Capacity', 'Consideration'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Voidable Contract',
    definition:
      'A contract that is valid and enforceable unless and until one of the parties elects to disaffirm it. Common grounds for voidability include minority, intoxication, duress, undue influence, or misrepresentation.',
    category: 'Contracts & Commercial',
    example:
      'A contract signed by a 16-year-old is voidable at the minor\'s election but enforceable against the other party until the minor disaffirms.',
    relatedTerms: ['Void Contract', 'Rescission', 'Capacity', 'Fraud'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Unconscionable Contract',
    definition:
      'A contract or clause so oppressively one-sided or fundamentally unfair—typically due to unequal bargaining power combined with terms that shock the conscience—that courts will refuse to enforce it. Courts analyze both procedural unconscionability (how the contract was formed) and substantive unconscionability (the fairness of terms).',
    category: 'Contracts & Commercial',
    example:
      'A consumer credit agreement with a 400% interest rate buried in fine print with no opportunity to negotiate may be deemed unconscionable.',
    relatedTerms: ['Void Contract', 'Adhesion Contract', 'Good Faith', 'UCC'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Statute of Frauds',
    definition:
      'A legal requirement that certain categories of contracts must be evidenced by a signed writing to be enforceable. Covered contracts typically include those for the sale of land, contracts not performable within one year, sale of goods over $500 (UCC), and suretyship agreements.',
    category: 'Contracts & Commercial',
    example:
      'An oral agreement to sell real property is unenforceable under the statute of frauds without a signed writing.',
    relatedTerms: ['Parol Evidence', 'Writing Requirement', 'UCC', 'Promissory Estoppel'],
    difficulty: 'Intermediate',
    isEssential: true,
  },
  {
    term: 'Parol Evidence Rule',
    definition:
      'A common-law doctrine barring the introduction of prior or contemporaneous oral or written statements to vary, contradict, or add to the terms of a fully integrated written contract. Exceptions exist for fraud, mistake, ambiguity, and conditions precedent.',
    category: 'Contracts & Commercial',
    example:
      'A party cannot introduce evidence of an oral side-agreement made before contract signing if the written contract is fully integrated and directly addresses the topic.',
    relatedTerms: ['Statute of Frauds', 'Integration Clause', 'Reformation', 'Extrinsic Evidence'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Condition Precedent',
    definition:
      'An event or state of affairs that must occur before a party\'s obligation to perform under a contract becomes due. If the condition fails, the obligation does not arise and the non-occurrence is not a breach.',
    category: 'Contracts & Commercial',
    example:
      'A home purchase contract conditioned on the buyer obtaining financing: if financing is denied, the buyer has no obligation to close and is not in breach.',
    relatedTerms: ['Condition Subsequent', 'Performance', 'Breach of Contract', 'Excuse of Condition'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Condition Subsequent',
    definition:
      'An event whose occurrence cuts off an already-existing contractual duty to perform. Once the condition subsequent occurs, the obligor\'s duty is discharged going forward.',
    category: 'Contracts & Commercial',
    example:
      'An insurance policy terminates coverage if the insured starts using the premises for commercial purposes, which is a condition subsequent.',
    relatedTerms: ['Condition Precedent', 'Discharge', 'Performance', 'Breach of Contract'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Warranty',
    definition:
      'A contractual representation or promise regarding the quality, characteristics, or title of goods or services. Under the UCC, warranties may be express (written or oral statements of fact) or implied (merchantability, fitness for a particular purpose).',
    category: 'Contracts & Commercial',
    example:
      'A manufacturer\'s written guarantee that a product is free from defects for one year is an express warranty.',
    relatedTerms: ['UCC', 'Implied Warranty', 'Breach of Contract', 'Indemnification'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Indemnification',
    definition:
      'A contractual obligation by one party to compensate another for losses, liabilities, or damages arising from specified events or third-party claims. Indemnification clauses shift the risk of loss between contracting parties.',
    category: 'Contracts & Commercial',
    example:
      'A service agreement requires the contractor to indemnify the client against any claims arising from the contractor\'s negligence.',
    relatedTerms: ['Hold Harmless', 'Warranty', 'Liability', 'Insurance'],
    difficulty: 'Intermediate',
    isEssential: true,
  },
  {
    term: 'Force Majeure',
    definition:
      'A contract clause excusing a party\'s non-performance when extraordinary events beyond their reasonable control (such as natural disasters, war, or government action) prevent performance. The clause defines which events qualify and the consequences of invocation.',
    category: 'Contracts & Commercial',
    example:
      'A supplier invokes the force majeure clause after a hurricane destroys its facilities, excusing its failure to deliver goods on time.',
    relatedTerms: ['Impossibility', 'Frustration of Purpose', 'Impracticability', 'Excuse'],
    difficulty: 'Intermediate',
    isEssential: true,
  },
  {
    term: 'Novation',
    definition:
      'The substitution of a new contract, party, or obligation for an existing one, with the consent of all parties, extinguishing the original obligation. A novation requires mutual agreement and releases the original obligor from liability.',
    category: 'Contracts & Commercial',
    example:
      'When a company sells its business, the buyer assumes all contracts and the seller is released through novation agreements with each counterparty.',
    relatedTerms: ['Assignment', 'Delegation', 'Modification', 'Discharge'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Assignment',
    definition:
      'The transfer by one party (the assignor) of their contractual rights to a third party (the assignee). The assignor retains liability for duties unless released, and the assignee steps into the assignor\'s rights. Anti-assignment clauses may restrict transfers.',
    category: 'Contracts & Commercial',
    example:
      'A landlord assigns the right to collect rent to a property management company without assigning the obligation to maintain the property.',
    relatedTerms: ['Delegation', 'Novation', 'Third-Party Beneficiary', 'Anti-Assignment Clause'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Delegation',
    definition:
      'The transfer by one party (the delegator) of their contractual duties to a third party (the delegatee). Unlike novation, the original obligor remains liable for proper performance unless the other party consents to a release.',
    category: 'Contracts & Commercial',
    example:
      'A painting contractor delegates the work to a subcontractor but remains liable to the homeowner if the subcontractor performs defectively.',
    relatedTerms: ['Assignment', 'Novation', 'Subcontract', 'Breach of Contract'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Third-Party Beneficiary',
    definition:
      'A person who is not a party to a contract but receives a benefit from it and may have the right to enforce the contract. An intended beneficiary (donee or creditor beneficiary) has enforceable rights; an incidental beneficiary does not.',
    category: 'Contracts & Commercial',
    example:
      'A life insurance contract names a child as beneficiary; the child is an intended third-party beneficiary who can sue the insurer if benefits are wrongly withheld.',
    relatedTerms: ['Assignment', 'Privity of Contract', 'Donee Beneficiary', 'Creditor Beneficiary'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Promissory Estoppel',
    definition:
      'A doctrine that makes a promise enforceable without consideration when the promisor should reasonably expect the promise to induce definite and substantial action or forbearance by the promisee, and injustice can be avoided only by enforcement.',
    category: 'Contracts & Commercial',
    example:
      'An employer promises an employee a job, the employee quits their current job in reliance, and the employer withdraws the offer; the employee may recover under promissory estoppel.',
    relatedTerms: ['Consideration', 'Reliance Damages', 'Equitable Estoppel', 'Statute of Frauds'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Quantum Meruit',
    definition:
      'An equitable doctrine allowing recovery of the reasonable value of services or goods provided when there is no enforceable contract or when a contract is silent on price. Literally meaning "as much as is deserved," it prevents unjust enrichment.',
    category: 'Contracts & Commercial',
    example:
      'A lawyer performs services under a contract later declared void; the lawyer may recover the reasonable value of services in quantum meruit.',
    relatedTerms: ['Restitution', 'Unjust Enrichment', 'Implied Contract', 'Consideration'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'UCC (Uniform Commercial Code)',
    definition:
      'A comprehensive set of laws governing commercial transactions in the United States, adopted in whole or in part by all 50 states. Article 2 covers the sale of goods and modifies many common-law contract rules, including acceptance, warranties, and remedies.',
    category: 'Contracts & Commercial',
    example:
      'A dispute over a hardware sale is governed by UCC Article 2, which allows acceptance with additional terms under the battle-of-the-forms rule.',
    relatedTerms: ['Warranty', 'Good Faith', 'Sale of Goods', 'Statute of Frauds'],
    difficulty: 'Intermediate',
    isEssential: true,
  },
  {
    term: 'Good Faith',
    definition:
      'An obligation, implied in every contract under both the UCC and common law, requiring parties to deal honestly and fairly with each other in performance and enforcement. Breach of the implied duty of good faith and fair dealing is independently actionable in many jurisdictions.',
    category: 'Contracts & Commercial',
    example:
      'An insurance company that delays payment without a reasonable basis may breach the implied covenant of good faith and fair dealing.',
    relatedTerms: ['UCC', 'Unconscionable Contract', 'Covenant', 'Bad Faith'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Covenant',
    definition:
      'A formal promise in a contract requiring a party to do or refrain from doing a specified act. Unlike a condition, a covenant\'s breach gives rise to a cause of action for damages but does not automatically discharge the other party\'s obligations.',
    category: 'Contracts & Commercial',
    example:
      'A lease contains a covenant of quiet enjoyment, promising the tenant undisturbed possession of the premises.',
    relatedTerms: ['Non-Compete Agreement', 'Good Faith', 'Condition Precedent', 'Breach of Contract'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Non-Compete Agreement',
    definition:
      'A contractual covenant in which one party (often an employee or seller of a business) agrees not to engage in competing activities within a specified geographic area and time period. Enforceability varies by jurisdiction and depends on reasonableness of scope.',
    category: 'Contracts & Commercial',
    example:
      'A sales executive signs an agreement prohibiting them from working for a direct competitor within a 50-mile radius for two years after leaving the company.',
    relatedTerms: ['Covenant', 'Non-Disclosure Agreement', 'Restraint of Trade', 'Reasonableness'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Reliance Damages',
    definition:
      'A measure of contract damages designed to restore the non-breaching party to the position they were in before the contract was formed, compensating for expenditures made in reasonable reliance on the contract.',
    category: 'Contracts & Commercial',
    example:
      'A party that spent $20,000 preparing for performance before the other party breached may recover those $20,000 as reliance damages.',
    relatedTerms: ['Expectation Damages', 'Restitution', 'Promissory Estoppel', 'Mitigation'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Restitution',
    definition:
      'A remedy that requires a party to return or compensate for any benefit unjustly received at another\'s expense, whether or not a valid contract exists. It prevents unjust enrichment and may be available even when an express contract claim fails.',
    category: 'Contracts & Commercial',
    example:
      'After a contract is rescinded for fraud, the court orders each party to return what they received from the other under restitution.',
    relatedTerms: ['Quantum Meruit', 'Unjust Enrichment', 'Rescission', 'Reliance Damages'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Integration Clause',
    definition:
      'A provision in a written contract stating that the document constitutes the entire and final agreement between the parties and supersedes all prior negotiations, representations, and agreements. Also called a merger clause, it triggers the parol evidence rule.',
    category: 'Contracts & Commercial',
    example:
      'A contract\'s final paragraph states: "This agreement constitutes the entire agreement and supersedes all prior understandings."',
    relatedTerms: ['Parol Evidence Rule', 'Merger Clause', 'Modification', 'Interpretation'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Counter-Offer',
    definition:
      'A response to an offer that proposes different terms, which simultaneously rejects the original offer and creates a new offer that the original offeror may accept or reject. Under the common-law mirror-image rule, a counter-offer terminates the original offer.',
    category: 'Contracts & Commercial',
    example:
      'A buyer responds to a $50,000 offer with a $42,000 offer, creating a counter-offer that kills the original offer.',
    relatedTerms: ['Offer', 'Acceptance', 'Mutual Assent', 'Battle of the Forms'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Impossibility of Performance',
    definition:
      'A doctrine excusing a party from contractual performance when an unforeseen event makes performance objectively impossible. Classic examples include destruction of the contract\'s subject matter or death of a person essential to personal performance.',
    category: 'Contracts & Commercial',
    example:
      'A venue burns down before a scheduled concert; the promoter\'s obligation to perform is excused by impossibility.',
    relatedTerms: ['Force Majeure', 'Frustration of Purpose', 'Commercial Impracticability', 'Discharge'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Frustration of Purpose',
    definition:
      'A doctrine that excuses performance when an unforeseen event substantially destroys the purpose for which a party entered the contract, even though performance itself remains possible. The frustrated purpose must have been known to both parties at formation.',
    category: 'Contracts & Commercial',
    example:
      'A hotel room was booked to watch a coronation parade route; the coronation was cancelled, frustrating the purpose of the contract.',
    relatedTerms: ['Impossibility of Performance', 'Force Majeure', 'Commercial Impracticability', 'Discharge'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Adhesion Contract',
    definition:
      'A standardized, take-it-or-leave-it contract drafted by a party with superior bargaining power, leaving the other party no opportunity to negotiate terms. Adhesion contracts are not automatically unenforceable but are subject to heightened scrutiny for unconscionability.',
    category: 'Contracts & Commercial',
    example:
      'Online terms-of-service agreements presented to consumers with only "I Agree" as an option are typical adhesion contracts.',
    relatedTerms: ['Unconscionable Contract', 'Good Faith', 'Offer', 'Acceptance'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Battle of the Forms',
    definition:
      'A UCC doctrine addressing the situation where contracting parties exchange printed forms (e.g., purchase orders and acknowledgments) with differing or additional terms. Under UCC § 2-207, a contract may be formed even if the acceptance contains different terms, with the competing terms evaluated by specific rules.',
    category: 'Contracts & Commercial',
    example:
      'A buyer\'s purchase order and a seller\'s order confirmation each contain different warranty and dispute-resolution terms; the UCC determines which terms govern.',
    relatedTerms: ['UCC', 'Counter-Offer', 'Acceptance', 'Integration Clause'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Commercial Impracticability',
    definition:
      'A UCC and common-law doctrine excusing non-performance when an unforeseen event makes performance commercially unreasonable or impracticable, even if not literally impossible. The party seeking excuse must not have assumed the risk of the event at formation.',
    category: 'Contracts & Commercial',
    example:
      'A war causes a tenfold increase in the cost of raw materials, making contract performance commercially impracticable for the supplier.',
    relatedTerms: ['Impossibility of Performance', 'Force Majeure', 'Frustration of Purpose', 'UCC'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Implied Contract',
    definition:
      'A contract whose existence and terms are inferred from the conduct of the parties or the circumstances of the case rather than from an express oral or written agreement. An implied-in-fact contract arises from conduct; an implied-in-law (quasi-contract) is imposed by law to prevent unjust enrichment.',
    category: 'Contracts & Commercial',
    example:
      'A patient receives emergency medical treatment and is obligated to pay a reasonable fee under an implied contract.',
    relatedTerms: ['Quantum Meruit', 'Unjust Enrichment', 'Quasi-Contract', 'Consideration'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Penalty Clause',
    definition:
      'A contractual provision imposing a payment disproportionately greater than actual anticipated damages as a punishment for breach, rather than as a genuine pre-estimate of loss. Penalty clauses are generally unenforceable at common law, distinguishing them from valid liquidated damages provisions.',
    category: 'Contracts & Commercial',
    example:
      'A clause requiring a $1 million payment for a minor delay in delivery of a $10,000 order would be struck as a penalty clause.',
    relatedTerms: ['Liquidated Damages', 'Breach of Contract', 'Unconscionable Contract', 'Enforceability'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Modification',
    definition:
      'A mutual agreement by the contracting parties to alter one or more terms of an existing contract. Under common law, modification requires new consideration; the UCC does not require consideration for good-faith modifications of contracts for the sale of goods.',
    category: 'Contracts & Commercial',
    example:
      'Parties agree in writing to extend the delivery deadline by 30 days, constituting a valid modification of the original contract.',
    relatedTerms: ['Novation', 'Consideration', 'Integration Clause', 'UCC'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Unjust Enrichment',
    definition:
      'The principle that a party should not be allowed to retain a benefit conferred by another without paying for it when retention would be inequitable. It forms the basis of restitution and quasi-contract claims.',
    category: 'Contracts & Commercial',
    example:
      'A contractor inadvertently improves the wrong house; the homeowner is unjustly enriched and must pay the reasonable value of the improvement.',
    relatedTerms: ['Restitution', 'Quantum Meruit', 'Quasi-Contract', 'Implied Contract'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
];

export default terms;
