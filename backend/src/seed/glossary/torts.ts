import { GlossaryTermSeed } from './types';

const terms: GlossaryTermSeed[] = [
  {
    term: 'Tort',
    definition:
      'A civil wrong, other than a breach of contract, that causes harm or loss to another person and gives rise to liability. Tort law provides remedies—typically monetary damages—to compensate the injured party.',
    category: 'Torts',
    example: 'A driver who runs a red light and injures a pedestrian has committed a tort.',
    relatedTerms: ['Negligence', 'Intentional Tort', 'Strict Liability', 'Damages'],
  },
  {
    term: 'Negligence',
    definition:
      'Failure to exercise the standard of care that a reasonably prudent person would exercise under similar circumstances, resulting in harm to another. Negligence requires proof of duty, breach, causation, and damages.',
    category: 'Torts',
    example: 'A surgeon who leaves a surgical instrument inside a patient may be liable for negligence.',
    relatedTerms: ['Duty of Care', 'Breach of Duty', 'Causation', 'Damages'],
  },
  {
    term: 'Duty of Care',
    definition:
      'A legal obligation to act with reasonable care toward others who could foreseeably be harmed by one\'s actions or omissions. Establishing that a duty existed is the first element of a negligence claim.',
    category: 'Torts',
    example: 'A property owner owes a duty of care to lawful visitors to maintain reasonably safe premises.',
    relatedTerms: ['Negligence', 'Breach of Duty', 'Foreseeability', 'Standard of Care'],
  },
  {
    term: 'Breach of Duty',
    definition:
      'The failure to meet the applicable standard of care owed to another person. A defendant breaches the duty of care when their conduct falls below what a reasonable person would do in the same circumstances.',
    category: 'Torts',
    example: 'A pharmacist who dispenses the wrong medication has breached the duty of care owed to the patient.',
    relatedTerms: ['Duty of Care', 'Negligence', 'Standard of Care', 'Causation'],
  },
  {
    term: 'Causation',
    definition:
      'The link between the defendant\'s breach of duty and the plaintiff\'s injury. Causation has two components: actual cause (but-for causation) and proximate cause (legal cause).',
    category: 'Torts',
    example: 'A plaintiff must show that the defendant\'s negligent act actually and proximately caused the harm suffered.',
    relatedTerms: ['But-For Causation', 'Proximate Cause', 'Negligence', 'Damages'],
  },
  {
    term: 'Proximate Cause',
    definition:
      'The legal cause of harm—a cause that is sufficiently close and foreseeable to justify holding the defendant liable. Even if a defendant\'s act was the actual cause, liability may be cut off if the harm was too remote or unforeseeable.',
    category: 'Torts',
    example: 'If a negligently started fire spreads to a neighbor\'s house, the arsonist is the proximate cause of the neighbor\'s loss.',
    relatedTerms: ['But-For Causation', 'Foreseeability', 'Causation', 'Superseding Cause'],
  },
  {
    term: 'But-For Causation',
    definition:
      'The basic test for actual causation: the plaintiff\'s harm would not have occurred but for the defendant\'s negligent conduct. If the harm would have happened regardless, the defendant\'s act is not the actual cause.',
    category: 'Torts',
    example: 'But for the pharmacist\'s error in filling the prescription, the patient would not have been harmed.',
    relatedTerms: ['Causation', 'Proximate Cause', 'Negligence', 'Substantial Factor Test'],
  },
  {
    term: 'Damages',
    definition:
      'The monetary compensation awarded to a plaintiff to remedy harm caused by the defendant\'s tortious conduct. Damages may be compensatory (covering actual losses) or punitive (designed to punish egregious conduct).',
    category: 'Torts',
    example: 'A plaintiff injured in a car accident may recover damages for medical bills, lost wages, and pain and suffering.',
    relatedTerms: ['Compensatory Damages', 'Punitive Damages', 'Negligence', 'Wrongful Death'],
  },
  {
    term: 'Strict Liability',
    definition:
      'Liability imposed on a defendant regardless of fault or intent. In strict liability torts, the plaintiff need not prove negligence—only that the defendant engaged in the activity and that it caused the harm.',
    category: 'Torts',
    example: 'An owner of a wild animal is strictly liable if the animal injures a person, even if the owner took precautions.',
    relatedTerms: ['Products Liability', 'Abnormally Dangerous Activities', 'Negligence', 'Tort'],
  },
  {
    term: 'Products Liability',
    definition:
      'The area of law holding manufacturers, distributors, and sellers responsible for injuries caused by defective products. Liability may arise from a manufacturing defect, design defect, or failure to warn.',
    category: 'Torts',
    example: 'A consumer injured by a car with a defectively designed brake system may sue the manufacturer under products liability.',
    relatedTerms: ['Strict Liability', 'Negligence', 'Breach of Warranty', 'Design Defect'],
  },
  {
    term: 'Res Ipsa Loquitur',
    definition:
      'Latin for "the thing speaks for itself." A doctrine allowing negligence to be inferred from the very nature of the accident or injury, without direct evidence of the defendant\'s specific negligent act, when the harm ordinarily would not occur without negligence.',
    category: 'Torts',
    example: 'A surgical sponge left inside a patient\'s abdomen invokes res ipsa loquitur—such events do not occur absent negligence.',
    relatedTerms: ['Negligence', 'Breach of Duty', 'Burden of Proof', 'Causation'],
  },
  {
    term: 'Comparative Negligence',
    definition:
      'A system that apportions fault between the plaintiff and defendant and reduces the plaintiff\'s recovery proportionally to their share of fault. Most states use either pure or modified comparative negligence.',
    category: 'Torts',
    example: 'If a plaintiff is 30% at fault for an accident and damages are $100,000, recovery is reduced to $70,000 under comparative negligence.',
    relatedTerms: ['Contributory Negligence', 'Negligence', 'Assumption of Risk', 'Apportionment'],
  },
  {
    term: 'Contributory Negligence',
    definition:
      'A common-law defense that completely bars a plaintiff\'s recovery if the plaintiff\'s own negligence contributed in any way to their harm. Only a handful of jurisdictions still follow the pure contributory negligence rule.',
    category: 'Torts',
    example: 'Under contributory negligence, a plaintiff who was even 1% at fault for their own injuries recovers nothing.',
    relatedTerms: ['Comparative Negligence', 'Assumption of Risk', 'Negligence', 'Last Clear Chance'],
  },
  {
    term: 'Assumption of Risk',
    definition:
      'A defense holding that a plaintiff who voluntarily and knowingly accepted the risks inherent in an activity cannot recover for injuries resulting from those risks. It may be express (by agreement) or implied (by conduct).',
    category: 'Torts',
    example: 'A spectator at a baseball game assumes the risk of being struck by a foul ball.',
    relatedTerms: ['Comparative Negligence', 'Contributory Negligence', 'Consent', 'Volenti Non Fit Injuria'],
  },
  {
    term: 'Intentional Tort',
    definition:
      'A tort in which the defendant acts with intent to bring about a specific result or knows with substantial certainty that the result will occur. Examples include battery, assault, false imprisonment, and intentional infliction of emotional distress.',
    category: 'Torts',
    example: 'Punching someone in the face is an intentional tort (battery) because the actor intends the harmful contact.',
    relatedTerms: ['Battery', 'Assault', 'False Imprisonment', 'Negligence'],
  },
  {
    term: 'Battery',
    definition:
      'An intentional tort consisting of harmful or offensive contact with another person without consent. Unlike assault, battery requires actual contact, not merely the apprehension of it.',
    category: 'Torts',
    example: 'Striking a person during an argument constitutes battery even if the victim was not seriously hurt.',
    relatedTerms: ['Assault', 'Intentional Tort', 'Consent', 'False Imprisonment'],
  },
  {
    term: 'Assault',
    definition:
      'An intentional tort that occurs when the defendant intentionally places another person in reasonable apprehension of an imminent harmful or offensive contact. No physical contact is required.',
    category: 'Torts',
    example: 'Raising a fist threateningly at someone who sees it and fears being struck constitutes assault.',
    relatedTerms: ['Battery', 'Intentional Tort', 'Apprehension', 'Threat'],
  },
  {
    term: 'False Imprisonment',
    definition:
      'The intentional confinement or restraint of another person within a bounded area without lawful justification and without the person\'s consent. The victim must be aware of the confinement or be harmed by it.',
    category: 'Torts',
    example: 'Locking an employee in a store room during an interrogation without their consent is false imprisonment.',
    relatedTerms: ['Intentional Tort', 'Battery', 'Assault', 'Consent'],
  },
  {
    term: 'Defamation',
    definition:
      'A false statement of fact communicated to a third party that injures the reputation of another person. Defamation may be written (libel) or spoken (slander) and requires the statement to be false, published, and cause harm.',
    category: 'Torts',
    example: 'Falsely telling a person\'s employer that the person embezzled money is defamation.',
    relatedTerms: ['Libel', 'Slander', 'Publication', 'Actual Malice'],
  },
  {
    term: 'Libel',
    definition:
      'Defamation in written, printed, or other permanent form, including digital communications such as social-media posts or emails. Because written statements are permanent, libel is often treated as more serious than slander.',
    category: 'Torts',
    example: 'Publishing a false newspaper article accusing a politician of accepting bribes is libel.',
    relatedTerms: ['Defamation', 'Slander', 'Publication', 'Actual Malice'],
  },
  {
    term: 'Slander',
    definition:
      'Defamation in spoken or transient form. Unlike libel, slander typically requires the plaintiff to prove actual damages, except in cases of slander per se (e.g., false accusations of a crime or loathsome disease).',
    category: 'Torts',
    example: 'Falsely telling neighbors that someone is a convicted felon is slander.',
    relatedTerms: ['Defamation', 'Libel', 'Slander Per Se', 'Publication'],
  },
  {
    term: 'Invasion of Privacy',
    definition:
      'A family of torts protecting a person\'s right to be left alone, including intrusion upon seclusion, public disclosure of private facts, false light, and appropriation of name or likeness.',
    category: 'Torts',
    example: 'Secretly recording someone in their private home and distributing the footage is an invasion of privacy by intrusion upon seclusion.',
    relatedTerms: ['Defamation', 'Intentional Tort', 'False Light', 'Appropriation'],
  },
  {
    term: 'Nuisance',
    definition:
      'An unreasonable interference with the use and enjoyment of land (private nuisance) or with rights common to the general public (public nuisance). Unlike trespass, nuisance does not require a physical invasion of property.',
    category: 'Torts',
    example: 'A factory emitting noxious fumes that prevent neighboring residents from enjoying their yards creates a private nuisance.',
    relatedTerms: ['Trespass', 'Private Nuisance', 'Public Nuisance', 'Strict Liability'],
  },
  {
    term: 'Trespass',
    definition:
      'An intentional and unauthorized entry onto another person\'s land (trespass to land) or interference with another\'s personal property (trespass to chattels). Intent to enter, not intent to trespass, is required.',
    category: 'Torts',
    example: 'Walking across a neighbor\'s fenced yard without permission is trespass to land, even if no damage is caused.',
    relatedTerms: ['Nuisance', 'Conversion', 'Intentional Tort', 'Trespass to Chattels'],
  },
  {
    term: 'Conversion',
    definition:
      'An intentional exercise of dominion or control over another\'s personal property that seriously interferes with the owner\'s right to possess it, amounting to a forced sale. The defendant must pay the full value of the property.',
    category: 'Torts',
    example: 'Stealing or destroying another person\'s laptop constitutes conversion.',
    relatedTerms: ['Trespass to Chattels', 'Trespass', 'Intentional Tort', 'Replevin'],
  },
  {
    term: 'Vicarious Liability',
    definition:
      'The imputation of liability to one person for the tortious acts of another based on their relationship, such as employer-employee or principal-agent. The vicariously liable party need not be personally at fault.',
    category: 'Torts',
    example: 'An employer is vicariously liable when an employee negligently injures a customer while performing job duties.',
    relatedTerms: ['Respondeat Superior', 'Agency', 'Joint and Several Liability', 'Negligence'],
  },
  {
    term: 'Respondeat Superior',
    definition:
      'Latin for "let the master answer." The doctrine holding an employer liable for torts committed by an employee acting within the scope of employment. It is the primary basis of vicarious liability.',
    category: 'Torts',
    example: 'A delivery company is liable under respondeat superior when its driver negligently causes an accident while making deliveries.',
    relatedTerms: ['Vicarious Liability', 'Scope of Employment', 'Agency', 'Negligence'],
  },
  {
    term: 'Joint and Several Liability',
    definition:
      'A rule allowing a plaintiff who suffers harm caused by multiple defendants to recover the full amount of damages from any one of them, leaving the defendants to sort out contribution among themselves.',
    category: 'Torts',
    example: 'Two drivers whose combined negligence causes an accident may be jointly and severally liable, meaning the injured party can recover all damages from either driver.',
    relatedTerms: ['Vicarious Liability', 'Contribution', 'Comparative Negligence', 'Indemnification'],
  },
  {
    term: 'Wrongful Death',
    definition:
      'A statutory tort claim brought by survivors or the estate of a person who was killed by the defendant\'s tortious conduct. Recoverable damages typically include lost financial support, funeral expenses, and loss of companionship.',
    category: 'Torts',
    example: 'The family of a pedestrian killed by a drunk driver may bring a wrongful death action against the driver.',
    relatedTerms: ['Damages', 'Negligence', 'Survival Action', 'Punitive Damages'],
  },
  {
    term: 'Punitive Damages',
    definition:
      'An award above and beyond compensatory damages intended to punish a defendant for especially egregious, malicious, or reckless conduct and to deter similar conduct by others.',
    category: 'Torts',
    example: 'A court may award punitive damages against a company that knowingly sold a dangerous product to maximize profits.',
    relatedTerms: ['Damages', 'Compensatory Damages', 'Negligence', 'Gross Negligence'],
  },
  {
    term: 'Foreseeability',
    definition:
      'The reasonable ability to anticipate that a particular act or omission might cause harm to another. Foreseeability is central to both the existence of a duty of care and the scope of proximate cause.',
    category: 'Torts',
    example: 'It is foreseeable that leaving ice on a sidewalk could cause a pedestrian to slip and fall.',
    relatedTerms: ['Duty of Care', 'Proximate Cause', 'Negligence', 'Palsgraf Doctrine'],
  },
  {
    term: 'Intentional Infliction of Emotional Distress',
    definition:
      'A tort that imposes liability when a defendant\'s extreme and outrageous conduct intentionally or recklessly causes severe emotional distress to another. The conduct must go beyond all bounds of decency.',
    category: 'Torts',
    example: 'Repeatedly sending harassing messages to a grieving parent describing their child\'s death in graphic detail may constitute intentional infliction of emotional distress.',
    relatedTerms: ['Intentional Tort', 'Negligent Infliction of Emotional Distress', 'Battery', 'Assault'],
  },
  {
    term: 'Negligent Infliction of Emotional Distress',
    definition:
      'A tort allowing recovery for severe emotional harm caused by a defendant\'s negligent conduct, typically requiring the plaintiff to be within the zone of danger or a close relative who witnessed the event.',
    category: 'Torts',
    example: 'A parent who witnesses their child being struck by a negligent driver and suffers severe emotional trauma may recover under negligent infliction of emotional distress.',
    relatedTerms: ['Intentional Infliction of Emotional Distress', 'Negligence', 'Duty of Care', 'Damages'],
  },
  {
    term: 'Superseding Cause',
    definition:
      'An intervening act or event that breaks the chain of causation between the defendant\'s negligence and the plaintiff\'s harm, relieving the defendant of liability. The intervening cause must be unforeseeable to qualify as superseding.',
    category: 'Torts',
    example: 'If a third party\'s criminal act intervenes between a defendant\'s negligence and the plaintiff\'s injury, the criminal act may be a superseding cause.',
    relatedTerms: ['Proximate Cause', 'Causation', 'Foreseeability', 'Intervening Cause'],
  },
  {
    term: 'Standard of Care',
    definition:
      'The degree of caution and concern that a reasonably prudent person would exercise in a given situation. In professional negligence cases, the standard is set by what a competent professional in the same field would do.',
    category: 'Torts',
    example: 'A physician is held to the standard of care of a reasonably competent doctor in the same specialty.',
    relatedTerms: ['Duty of Care', 'Breach of Duty', 'Negligence', 'Professional Negligence'],
  },
  {
    term: 'Trespass to Chattels',
    definition:
      'An intentional interference with another\'s personal property that causes harm to the property or deprives the owner of its use, but falls short of the complete dominion required for conversion.',
    category: 'Torts',
    example: 'Temporarily taking a neighbor\'s bicycle without permission and returning it scratched is trespass to chattels.',
    relatedTerms: ['Conversion', 'Trespass', 'Intentional Tort', 'Replevin'],
  },
];

export default terms;
