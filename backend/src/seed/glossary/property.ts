import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Real Property',
    definition:
      'Land and anything permanently attached to it, including buildings, structures, and the rights associated with ownership of the land. Real property is distinguished from personal property by its immovable character.',
    category: 'Property & Real Estate',
    example: 'A house, a commercial building, or an undeveloped parcel of land are all real property.',
    relatedTerms: ['Personal Property', 'Fee Simple', 'Title', 'Deed'],
  },
  {
    term: 'Personal Property',
    definition:
      'Movable property that is not permanently affixed to land, encompassing tangible items such as vehicles and furniture, as well as intangible assets such as stocks and patents. Personal property is also referred to as "chattel" in common law.',
    category: 'Property & Real Estate',
    example: 'A car, jewelry, or a bank account are examples of personal property.',
    relatedTerms: ['Chattel', 'Real Property', 'Bailment'],
  },
  {
    term: 'Fee Simple',
    definition:
      'The most complete form of ownership interest in real property, granting the owner unlimited power to dispose of the property during life or at death. A fee simple estate is of potentially infinite duration and passes to the owner\'s heirs if they die without a will.',
    category: 'Property & Real Estate',
    example: 'Purchasing a home outright with no conditions on future use or transfer is acquiring it in fee simple.',
    relatedTerms: ['Life Estate', 'Remainder', 'Reversion', 'Real Property'],
  },
  {
    term: 'Life Estate',
    definition:
      'An ownership interest in real property that is limited in duration to the life of the holder (the "life tenant") or, in some cases, the life of another named person (a "pur autre vie" estate). Upon the death of the measuring life, the property passes to the remainder beneficiary or reverts to the grantor.',
    category: 'Property & Real Estate',
    example: 'A parent conveys property to a child for the parent\'s lifetime; upon the parent\'s death, ownership passes to the grandchildren.',
    relatedTerms: ['Fee Simple', 'Remainder', 'Reversion', 'Deed'],
  },
  {
    term: 'Easement',
    definition:
      'A nonpossessory right to use another person\'s land for a specific, limited purpose. Easements are legally enforceable interests in land and bind subsequent owners of the burdened property.',
    category: 'Property & Real Estate',
    example: 'A utility company holds an easement allowing it to run power lines across a private landowner\'s field.',
    relatedTerms: ['Easement Appurtenant', 'Covenant', 'Encumbrance', 'Real Property'],
  },
  {
    term: 'Easement Appurtenant',
    definition:
      'An easement that benefits a particular parcel of land (the "dominant estate") and burdens an adjacent parcel (the "servient estate"). It runs with the land, meaning it transfers automatically when either parcel is sold.',
    category: 'Property & Real Estate',
    example: 'A right-of-way across a neighbor\'s property to reach a landlocked parcel is a classic easement appurtenant.',
    relatedTerms: ['Easement', 'Covenant', 'Encumbrance', 'Quiet Title'],
  },
  {
    term: 'Covenant',
    definition:
      'A binding agreement, typically contained in a deed, that restricts or requires certain uses of real property. Covenants that "run with the land" bind future owners of the property, not just the original contracting parties.',
    category: 'Property & Real Estate',
    example: 'A subdivision covenant may prohibit homeowners from erecting fences taller than four feet.',
    relatedTerms: ['Easement', 'Encumbrance', 'Zoning', 'Deed'],
  },
  {
    term: 'Encumbrance',
    definition:
      'Any claim, lien, easement, covenant, or other charge against a parcel of real property that may diminish its value or restrict its use or transfer. A clear title is one free of undisclosed encumbrances.',
    category: 'Property & Real Estate',
    example: 'An unpaid property tax lien is an encumbrance that a buyer will discover during a title search.',
    relatedTerms: ['Lien', 'Easement', 'Covenant', 'Title'],
  },
  {
    term: 'Lien',
    definition:
      'A legal claim or security interest that a creditor holds against a debtor\'s property until the underlying debt or obligation is satisfied. Liens may arise by contract, judgment, or operation of law.',
    category: 'Property & Real Estate',
    example: 'A contractor who has not been paid may file a mechanic\'s lien against the property they improved.',
    relatedTerms: ['Mortgage', 'Encumbrance', 'Foreclosure', 'Title'],
  },
  {
    term: 'Mortgage',
    definition:
      'A security interest in real property given by a borrower (mortgagor) to a lender (mortgagee) as collateral for a loan. If the borrower defaults, the lender may pursue foreclosure to satisfy the debt from the property\'s proceeds.',
    category: 'Property & Real Estate',
    example: 'A homebuyer obtains a 30-year mortgage from a bank to finance the purchase of a house.',
    relatedTerms: ['Lien', 'Foreclosure', 'Deed', 'Escrow'],
  },
  {
    term: 'Deed',
    definition:
      'A written legal instrument that transfers ownership or an interest in real property from one party (grantor) to another (grantee). A valid deed must be in writing, signed by the grantor, and delivered to and accepted by the grantee.',
    category: 'Property & Real Estate',
    example: 'At closing, the seller signs a warranty deed conveying the house to the buyer.',
    relatedTerms: ['Title', 'Covenant', 'Mortgage', 'Escrow'],
  },
  {
    term: 'Title',
    definition:
      'The legal evidence of a person\'s right to own and possess real property. Title represents the bundle of rights associated with ownership and is typically evidenced by a deed recorded in public records.',
    category: 'Property & Real Estate',
    example: 'Before completing a sale, a title company searches public records to confirm the seller holds clear title to the property.',
    relatedTerms: ['Deed', 'Encumbrance', 'Quiet Title', 'Lien'],
  },
  {
    term: 'Adverse Possession',
    definition:
      'A doctrine by which a person who openly, continuously, exclusively, and hostilely occupies another\'s land for a statutory period may acquire legal title to that land. The possession must be without the owner\'s permission.',
    category: 'Property & Real Estate',
    example: 'After farming a neighbor\'s unused field openly for 20 years without permission, a claimant may petition for title by adverse possession.',
    relatedTerms: ['Quiet Title', 'Real Property', 'Title', 'Encumbrance'],
  },
  {
    term: 'Eminent Domain',
    definition:
      'The inherent power of a governmental entity to take private property for public use, subject to the constitutional requirement of paying just compensation to the owner. This power is also known as "condemnation" or "expropriation."',
    category: 'Property & Real Estate',
    example: 'A city exercises eminent domain to acquire privately owned land needed for a new highway interchange.',
    relatedTerms: ['Condemnation', 'Just Compensation', 'Real Property', 'Zoning'],
  },
  {
    term: 'Condemnation',
    definition:
      'The legal process by which a government exercises its eminent domain power to take private property for public use, or the declaration that a structure is unfit for occupancy. In the taking context, the owner is entitled to just compensation.',
    category: 'Property & Real Estate',
    example: 'The state initiated condemnation proceedings to acquire farmland for a new public park.',
    relatedTerms: ['Eminent Domain', 'Just Compensation', 'Real Property', 'Title'],
  },
  {
    term: 'Zoning',
    definition:
      'A system of land-use regulation enacted by local governments that divides a municipality into districts and specifies the types of uses permitted in each district (e.g., residential, commercial, industrial). Zoning ordinances may also regulate building height, density, and setbacks.',
    category: 'Property & Real Estate',
    example: 'A property owner must obtain a variance before operating a business in a residentially zoned neighborhood.',
    relatedTerms: ['Covenant', 'Easement', 'Eminent Domain', 'Nuisance'],
  },
  {
    term: 'Leasehold',
    definition:
      'A possessory interest in real property held by a tenant under a lease agreement for a defined term or at will. The leaseholder has the right to occupy and use the property but does not hold title to the land.',
    category: 'Property & Real Estate',
    example: 'A commercial tenant operating a store under a five-year lease holds a leasehold interest in the property.',
    relatedTerms: ['Landlord', 'Tenant', 'Eviction', 'Real Property'],
  },
  {
    term: 'Joint Tenancy',
    definition:
      'A form of co-ownership of property in which two or more persons hold equal, undivided shares and enjoy the right of survivorship—meaning that upon the death of one joint tenant, that tenant\'s share passes automatically to the surviving joint tenants rather than through probate.',
    category: 'Property & Real Estate',
    example: 'Spouses who take title as joint tenants ensure that the surviving spouse inherits the property without going through probate.',
    relatedTerms: ['Tenancy in Common', 'Title', 'Real Property', 'Fee Simple'],
  },
  {
    term: 'Tenancy in Common',
    definition:
      'A form of co-ownership in which two or more persons hold separate, undivided interests in property, which need not be equal. Each co-tenant may freely transfer their share, and there is no right of survivorship—upon death, the share passes through the owner\'s estate.',
    category: 'Property & Real Estate',
    example: 'Three siblings inherit a family home as tenants in common, each owning an undivided one-third interest.',
    relatedTerms: ['Joint Tenancy', 'Title', 'Deed', 'Real Property'],
  },
  {
    term: 'Landlord',
    definition:
      'The owner of real property who grants a tenant the right to possess and use that property in exchange for rent, pursuant to a lease or rental agreement. The landlord retains the reversionary interest in the property.',
    category: 'Property & Real Estate',
    example: 'The landlord is responsible for maintaining the property\'s structural integrity under the implied warranty of habitability.',
    relatedTerms: ['Tenant', 'Leasehold', 'Eviction', 'Reversion'],
  },
  {
    term: 'Tenant',
    definition:
      'A person who holds a leasehold interest in real property, occupying and using the property under a lease or rental agreement with the landlord. The tenant pays rent and must comply with the terms of the lease.',
    category: 'Property & Real Estate',
    example: 'A residential tenant signs a one-year lease obligating them to pay monthly rent and maintain the apartment.',
    relatedTerms: ['Landlord', 'Leasehold', 'Eviction', 'Covenant'],
  },
  {
    term: 'Eviction',
    definition:
      'The legal process by which a landlord removes a tenant from possession of real property, typically for nonpayment of rent or breach of a lease term. Landlords must follow statutory procedures; self-help evictions are generally prohibited.',
    category: 'Property & Real Estate',
    example: 'After the tenant failed to pay three months of rent, the landlord filed for eviction in housing court.',
    relatedTerms: ['Landlord', 'Tenant', 'Leasehold', 'Quiet Title'],
  },
  {
    term: 'Quiet Title',
    definition:
      'A court action brought to establish or confirm a party\'s title to real property and to remove any adverse claims, clouds, or encumbrances that others may assert against the property. A successful judgment "quiets" competing claims.',
    category: 'Property & Real Estate',
    example: 'After discovering an old unrecorded deed in the chain of title, the property owner filed a quiet title action to clear the cloud on their title.',
    relatedTerms: ['Title', 'Adverse Possession', 'Encumbrance', 'Deed'],
  },
  {
    term: 'Escrow',
    definition:
      'An arrangement in which a neutral third party (the escrow agent) holds funds, documents, or property until specified conditions of a transaction are fulfilled. In real estate, escrow is commonly used to manage the closing process and ensure all obligations are met before funds and title transfer.',
    category: 'Property & Real Estate',
    example: 'The buyer deposits earnest money into escrow, which is held until all contingencies are satisfied and the sale closes.',
    relatedTerms: ['Mortgage', 'Deed', 'Title', 'Lien'],
  },
  {
    term: 'Foreclosure',
    definition:
      'The legal process by which a lender terminates a borrower\'s equity of redemption and takes or forces the sale of mortgaged property to satisfy a mortgage debt in default. Depending on the jurisdiction, foreclosure may proceed judicially or through a power-of-sale clause.',
    category: 'Property & Real Estate',
    example: 'After the homeowner missed twelve consecutive mortgage payments, the lender initiated foreclosure proceedings.',
    relatedTerms: ['Mortgage', 'Lien', 'Deed', 'Encumbrance'],
  },
  {
    term: 'Bailment',
    definition:
      'The temporary transfer of possession—but not ownership—of personal property from one party (the bailor) to another (the bailee) for a specific purpose or period. The bailee has a duty to care for the property and return it.',
    category: 'Property & Real Estate',
    example: 'Leaving your car with a valet creates a bailment; the valet must return the vehicle in the same condition.',
    relatedTerms: ['Personal Property', 'Chattel', 'Lien', 'Real Property'],
  },
  {
    term: 'Chattel',
    definition:
      'Any item of personal property, whether tangible (goods, livestock, vehicles) or intangible (choses in action). The term historically distinguished movable property from real property in common law.',
    category: 'Property & Real Estate',
    example: 'The antique furniture sold separately from the house was considered chattel not included in the real estate contract.',
    relatedTerms: ['Personal Property', 'Bailment', 'Real Property', 'Lien'],
  },
  {
    term: 'Remainder',
    definition:
      'A future interest in real property that is created in a third party and becomes possessory upon the natural expiration of a prior possessory estate (such as a life estate). The remainder beneficiary is called the "remainderman."',
    category: 'Property & Real Estate',
    example: 'When property is conveyed to Alice for life, then to Bob, Bob holds a remainder that vests when Alice dies.',
    relatedTerms: ['Life Estate', 'Reversion', 'Fee Simple', 'Deed'],
  },
  {
    term: 'Reversion',
    definition:
      'A future interest retained by a grantor who conveys less than their full ownership interest in property. When the conveyed estate ends, possession reverts to the grantor or their heirs by operation of law.',
    category: 'Property & Real Estate',
    example: 'An owner who conveys property to a tenant for life retains a reversion that becomes possessory when the life tenant dies.',
    relatedTerms: ['Remainder', 'Life Estate', 'Fee Simple', 'Landlord'],
  },
  {
    term: 'Riparian Rights',
    definition:
      'The rights of a landowner whose property borders a natural watercourse (river, stream, or lake) to make reasonable use of the water. Riparian rights are appurtenant to the land and cannot be separated from it.',
    category: 'Property & Real Estate',
    example: 'A farmer with riparian rights along a river may divert water for irrigation as long as it does not unreasonably interfere with downstream landowners.',
    relatedTerms: ['Easement Appurtenant', 'Real Property', 'Nuisance', 'Encumbrance'],
  },
  {
    term: 'Nuisance',
    definition:
      'An unreasonable interference with the use and enjoyment of land (private nuisance) or with rights held by the general public (public nuisance). Courts may award damages or issue injunctions to abate a nuisance.',
    category: 'Property & Real Estate',
    example: 'A neighbor operating a junkyard that produces constant noise and odors may be liable for private nuisance.',
    relatedTerms: ['Zoning', 'Easement', 'Covenant', 'Riparian Rights'],
  },
  {
    term: 'Just Compensation',
    definition:
      'The fair market value payment required by the Fifth Amendment that the government must provide to a property owner when taking private property through eminent domain. It is generally measured as what a willing buyer would pay a willing seller in an arm\'s-length transaction.',
    category: 'Property & Real Estate',
    example: 'After the state condemned a homeowner\'s property for a highway project, an appraisal determined just compensation was $350,000.',
    relatedTerms: ['Eminent Domain', 'Condemnation', 'Real Property', 'Title'],
  },
];

export default terms;
