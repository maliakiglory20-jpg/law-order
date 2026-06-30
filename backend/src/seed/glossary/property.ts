import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Real Property',
    definition:
      'Land and anything permanently attached to it, including buildings, structures, and the rights associated with ownership of the land. Real property is distinguished from personal property by its immovable character.',
    category: 'Property & Real Estate',
    example: 'A house, a commercial building, or an undeveloped parcel of land are all real property.',
    relatedTerms: ['Personal Property', 'Fee Simple', 'Title', 'Deed'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Personal Property',
    definition:
      'Movable property that is not permanently affixed to land, encompassing tangible items such as vehicles and furniture, as well as intangible assets such as stocks and patents. Personal property is also referred to as "chattel" in common law.',
    category: 'Property & Real Estate',
    example: 'A car, jewelry, or a bank account are examples of personal property — you can pick them up and take them with you, unlike a house.',
    relatedTerms: ['Chattel', 'Real Property', 'Bailment'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Fee Simple',
    definition:
      'The most complete form of ownership interest in real property, granting the owner unlimited power to dispose of the property during life or at death. A fee simple estate is of potentially infinite duration and passes to the owner\'s heirs if they die without a will.',
    category: 'Property & Real Estate',
    example: 'When you buy a home outright with no strings attached — no conditions on how you use it or who you can sell it to — you own it in fee simple.',
    relatedTerms: ['Life Estate', 'Remainder', 'Reversion', 'Real Property'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Life Estate',
    definition:
      'An ownership interest in real property that is limited in duration to the life of the holder (the "life tenant") or, in some cases, the life of another named person. Upon the death of the measuring life, the property passes to the remainder beneficiary or reverts to the grantor.',
    category: 'Property & Real Estate',
    example: 'A parent signs over the family home to their child but keeps the right to live there for the rest of their life. When the parent dies, full ownership goes to the child.',
    relatedTerms: ['Fee Simple', 'Remainder', 'Reversion', 'Deed'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Easement',
    definition:
      'A nonpossessory right to use another person\'s land for a specific, limited purpose. Easements are legally enforceable interests in land and bind subsequent owners of the burdened property.',
    category: 'Property & Real Estate',
    example: 'A utility company has an easement that lets it run power lines across your backyard. You still own the land, but you cannot block the utility\'s access.',
    relatedTerms: ['Easement Appurtenant', 'Covenant', 'Encumbrance', 'Real Property'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Easement Appurtenant',
    definition:
      'An easement that benefits a particular parcel of land (the "dominant estate") and burdens an adjacent parcel (the "servient estate"). It runs with the land, meaning it transfers automatically when either parcel is sold.',
    category: 'Property & Real Estate',
    example: 'Your property is landlocked behind a neighbor\'s lot. You have an easement appurtenant — a permanent right of way across their land — that stays in place even if either of you sells.',
    relatedTerms: ['Easement', 'Covenant', 'Encumbrance', 'Quiet Title'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Covenant',
    definition:
      'A binding agreement, typically contained in a deed, that restricts or requires certain uses of real property. Covenants that "run with the land" bind future owners of the property, not just the original contracting parties.',
    category: 'Property & Real Estate',
    example: 'A deed for a home in a subdivision includes a covenant saying you cannot paint the house any color other than those on an approved list. That rule applies to every future owner too.',
    relatedTerms: ['Easement', 'Encumbrance', 'Zoning', 'Deed'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Encumbrance',
    definition:
      'Any claim, lien, easement, covenant, or other charge against a parcel of real property that may diminish its value or restrict its use or transfer. A clear title is one free of undisclosed encumbrances.',
    category: 'Property & Real Estate',
    example: 'Before you buy a house, a title search turns up an unpaid contractor\'s bill from five years ago — that outstanding debt is an encumbrance you would inherit if you purchased without resolving it.',
    relatedTerms: ['Lien', 'Easement', 'Covenant', 'Title'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Lien',
    definition:
      'A legal claim or security interest that a creditor holds against a debtor\'s property until the underlying debt or obligation is satisfied. Liens may arise by contract, judgment, or operation of law.',
    category: 'Property & Real Estate',
    example: 'A contractor who did $10,000 of renovations and was never paid can file a lien on your home, which means you generally cannot sell the property until that debt is cleared.',
    relatedTerms: ['Mortgage', 'Encumbrance', 'Foreclosure', 'Title'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Mortgage',
    definition:
      'A security interest in real property given by a borrower (mortgagor) to a lender (mortgagee) as collateral for a loan. If the borrower defaults, the lender may pursue foreclosure to satisfy the debt from the property\'s proceeds.',
    category: 'Property & Real Estate',
    example: 'You borrow $300,000 from a bank to buy a house. The bank holds a mortgage on the property — if you stop making payments, the bank can take the house through foreclosure.',
    relatedTerms: ['Lien', 'Foreclosure', 'Deed', 'Escrow'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Deed',
    definition:
      'A written legal instrument that transfers ownership or an interest in real property from one party (grantor) to another (grantee). A valid deed must be in writing, signed by the grantor, and delivered to and accepted by the grantee.',
    category: 'Property & Real Estate',
    example: 'At a home closing, the seller signs a deed and hands it to the buyer. That document is the official record that ownership has changed hands.',
    relatedTerms: ['Title', 'Covenant', 'Mortgage', 'Escrow'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Title',
    definition:
      'The legal evidence of a person\'s right to own and possess real property. Title represents the bundle of rights associated with ownership and is typically evidenced by a deed recorded in public records.',
    category: 'Property & Real Estate',
    example: 'Having "clear title" to a home means no one else can make a legitimate claim to own it. A title company searches public records before a sale to confirm this.',
    relatedTerms: ['Deed', 'Encumbrance', 'Quiet Title', 'Lien'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Adverse Possession',
    definition:
      'A doctrine by which a person who openly, continuously, exclusively, and hostilely occupies another\'s land for a statutory period may acquire legal title to that land. The possession must be without the owner\'s permission.',
    category: 'Property & Real Estate',
    example: 'A neighbor has been mowing, fencing, and using a strip of your land openly for 20 years without you objecting. Depending on your state\'s law, they may be able to go to court and claim legal ownership of that strip.',
    relatedTerms: ['Quiet Title', 'Real Property', 'Title', 'Encumbrance'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Eminent Domain',
    definition:
      'The inherent power of a governmental entity to take private property for public use, subject to the constitutional requirement of paying just compensation to the owner. This power is also known as "condemnation" or "expropriation."',
    category: 'Property & Real Estate',
    example: 'The city needs to build a new road through your property. Under eminent domain, the government can force you to sell — but it must pay you fair market value for what it takes.',
    relatedTerms: ['Condemnation', 'Just Compensation', 'Real Property', 'Zoning'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Condemnation',
    definition:
      'The legal process by which a government exercises its eminent domain power to take private property for public use, or the declaration that a structure is unfit for occupancy. In the taking context, the owner is entitled to just compensation.',
    category: 'Property & Real Estate',
    example: 'The state files condemnation proceedings to take a farmer\'s land for a new public park and must pay the farmer the land\'s fair market value.',
    relatedTerms: ['Eminent Domain', 'Just Compensation', 'Real Property', 'Title'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Zoning',
    definition:
      'A system of land-use regulation enacted by local governments that divides a municipality into districts and specifies the types of uses permitted in each district (e.g., residential, commercial, industrial). Zoning ordinances may also regulate building height, density, and setbacks.',
    category: 'Property & Real Estate',
    example: 'You want to open a restaurant in a house you own, but the neighborhood is zoned residential-only. You would need to apply for a variance or rezoning before operating a business there.',
    relatedTerms: ['Covenant', 'Easement', 'Eminent Domain', 'Nuisance'],
    difficulty: 'Beginner',
    isEssential: false,
  },
  {
    term: 'Leasehold',
    definition:
      'A possessory interest in real property held by a tenant under a lease agreement for a defined term or at will. The leaseholder has the right to occupy and use the property but does not hold title to the land.',
    category: 'Property & Real Estate',
    example: 'You rent a storefront for five years. You have the right to use the space (a leasehold interest), but the landlord still owns the building.',
    relatedTerms: ['Landlord', 'Tenant', 'Eviction', 'Real Property'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Joint Tenancy',
    definition:
      'A form of co-ownership of property in which two or more persons hold equal, undivided shares and enjoy the right of survivorship — meaning that upon the death of one joint tenant, that tenant\'s share passes automatically to the surviving joint tenants rather than through probate.',
    category: 'Property & Real Estate',
    example: 'A married couple takes title to their home as joint tenants. When one spouse dies, the other automatically becomes the sole owner without going through probate court.',
    relatedTerms: ['Tenancy in Common', 'Title', 'Real Property', 'Fee Simple'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Tenancy in Common',
    definition:
      'A form of co-ownership in which two or more persons hold separate, undivided interests in property, which need not be equal. Each co-tenant may freely transfer their share, and there is no right of survivorship — upon death, the share passes through the owner\'s estate.',
    category: 'Property & Real Estate',
    example: 'Three siblings inherit their parents\' house as tenants in common, each owning one-third. If one sibling dies, their one-third share goes to whoever is named in their will, not automatically to the other siblings.',
    relatedTerms: ['Joint Tenancy', 'Title', 'Deed', 'Real Property'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Landlord',
    definition:
      'The owner of real property who grants a tenant the right to possess and use that property in exchange for rent, pursuant to a lease or rental agreement. The landlord retains the reversionary interest in the property.',
    category: 'Property & Real Estate',
    example: 'The landlord owns the apartment building and is legally required to keep it livable — fixing heat, plumbing, and structural problems — while the tenant rents a unit.',
    relatedTerms: ['Tenant', 'Leasehold', 'Eviction', 'Reversion'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Tenant',
    definition:
      'A person who holds a leasehold interest in real property, occupying and using the property under a lease or rental agreement with the landlord. The tenant pays rent and must comply with the terms of the lease.',
    category: 'Property & Real Estate',
    example: 'You sign a one-year apartment lease and pay rent each month. As a tenant, you have the right to live there, but you must follow the lease rules and cannot make major changes without permission.',
    relatedTerms: ['Landlord', 'Leasehold', 'Eviction', 'Covenant'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Eviction',
    definition:
      'The legal process by which a landlord removes a tenant from possession of real property, typically for nonpayment of rent or breach of a lease term. Landlords must follow statutory procedures; self-help evictions are generally prohibited.',
    category: 'Property & Real Estate',
    example: 'A tenant stops paying rent for three months. The landlord cannot simply change the locks — they must file an eviction case in court, give proper notice, and obtain a judge\'s order before removing the tenant.',
    relatedTerms: ['Landlord', 'Tenant', 'Leasehold', 'Quiet Title'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Quiet Title',
    definition:
      'A court action brought to establish or confirm a party\'s title to real property and to remove any adverse claims, clouds, or encumbrances that others may assert against the property. A successful judgment "quiets" competing claims.',
    category: 'Property & Real Estate',
    example: 'An old, unrecorded deed surfaces suggesting someone else may have a claim to your property. You sue in a quiet title action so the court officially confirms you are the true owner and wipes out the competing claim.',
    relatedTerms: ['Title', 'Adverse Possession', 'Encumbrance', 'Deed'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Escrow',
    definition:
      'An arrangement in which a neutral third party (the escrow agent) holds funds, documents, or property until specified conditions of a transaction are fulfilled. In real estate, escrow is commonly used to manage the closing process and ensure all obligations are met before funds and title transfer.',
    category: 'Property & Real Estate',
    example: 'When you make an offer on a house, your deposit goes into an escrow account held by a neutral party. The money is not released to the seller until the sale closes and all conditions are met.',
    relatedTerms: ['Mortgage', 'Deed', 'Title', 'Lien'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Foreclosure',
    definition:
      'The legal process by which a lender terminates a borrower\'s equity of redemption and takes or forces the sale of mortgaged property to satisfy a mortgage debt in default. Depending on the jurisdiction, foreclosure may proceed judicially or through a power-of-sale clause.',
    category: 'Property & Real Estate',
    example: 'A homeowner misses 12 months of mortgage payments. The bank starts foreclosure, which can result in a court-ordered sale of the home to repay what is owed.',
    relatedTerms: ['Mortgage', 'Lien', 'Deed', 'Encumbrance'],
    difficulty: 'Beginner',
    isEssential: true,
  },
  {
    term: 'Bailment',
    definition:
      'The temporary transfer of possession — but not ownership — of personal property from one party (the bailor) to another (the bailee) for a specific purpose or period. The bailee has a duty to care for the property and return it.',
    category: 'Property & Real Estate',
    example: 'Dropping your car off at a parking garage creates a bailment. The garage is responsible for taking reasonable care of your car and must return it to you.',
    relatedTerms: ['Personal Property', 'Chattel', 'Lien', 'Real Property'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Chattel',
    definition:
      'Any item of personal property, whether tangible (goods, livestock, vehicles) or intangible (choses in action). The term historically distinguished movable property from real property in common law.',
    category: 'Property & Real Estate',
    example: 'When you sell a house, the appliances that are bolted in may be included in the sale, but loose furniture is chattel — personal property that you take with you.',
    relatedTerms: ['Personal Property', 'Bailment', 'Real Property', 'Lien'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Remainder',
    definition:
      'A future interest in real property that is created in a third party and becomes possessory upon the natural expiration of a prior possessory estate (such as a life estate). The remainder beneficiary is called the "remainderman."',
    category: 'Property & Real Estate',
    example: 'Property is deeded "to Alice for life, then to Bob." Bob holds a remainder — he does not get possession now, but he will automatically own the property when Alice dies.',
    relatedTerms: ['Life Estate', 'Reversion', 'Fee Simple', 'Deed'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Reversion',
    definition:
      'A future interest retained by a grantor who conveys less than their full ownership interest in property. When the conveyed estate ends, possession reverts to the grantor or their heirs by operation of law.',
    category: 'Property & Real Estate',
    example: 'You let a friend use your property for the rest of their life but keep a reversion. When your friend dies, the property automatically comes back to you (or your heirs) without any further action.',
    relatedTerms: ['Remainder', 'Life Estate', 'Fee Simple', 'Landlord'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Riparian Rights',
    definition:
      'The rights of a landowner whose property borders a natural watercourse (river, stream, or lake) to make reasonable use of the water. Riparian rights are appurtenant to the land and cannot be separated from it.',
    category: 'Property & Real Estate',
    example: 'A farmer whose land runs along a river has riparian rights allowing them to draw water for irrigation — but only in amounts that do not unreasonably cut off water to neighbors downstream.',
    relatedTerms: ['Easement Appurtenant', 'Real Property', 'Nuisance', 'Encumbrance'],
    difficulty: 'Advanced',
    isEssential: false,
  },
  {
    term: 'Nuisance',
    definition:
      'An unreasonable interference with the use and enjoyment of land (private nuisance) or with rights held by the general public (public nuisance). Courts may award damages or issue injunctions to abate a nuisance.',
    category: 'Property & Real Estate',
    example: 'Your neighbor runs a late-night auto repair shop next door, with loud noise and chemical smells drifting onto your property every night. That could be a private nuisance you can sue to stop.',
    relatedTerms: ['Zoning', 'Easement', 'Covenant', 'Riparian Rights'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
  {
    term: 'Just Compensation',
    definition:
      'The fair market value payment required by the Fifth Amendment that the government must provide to a property owner when taking private property through eminent domain. It is generally measured as what a willing buyer would pay a willing seller in an arm\'s-length transaction.',
    category: 'Property & Real Estate',
    example: 'The government condemns your home to build a highway. An appraiser determines the home is worth $350,000 on the open market — that is the just compensation the government must pay you.',
    relatedTerms: ['Eminent Domain', 'Condemnation', 'Real Property', 'Title'],
    difficulty: 'Intermediate',
    isEssential: false,
  },
];

export default terms;
