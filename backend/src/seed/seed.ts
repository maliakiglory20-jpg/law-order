import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { litigationTypes } from './litigation-types';
import { landmarkCases } from './cases';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Create admin user
  const adminPassword = await bcrypt.hash('Admin123!@#', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@litigationplatform.com' },
    update: {},
    create: {
      email: 'admin@litigationplatform.com',
      password: adminPassword,
      name: 'System Administrator',
      role: 'SUPER_ADMIN',
      organization: 'Litigation Learning Platform',
      jobTitle: 'System Administrator',
    },
  });
  console.log(`Created admin user: ${admin.email}`);

  // Create demo student user
  const studentPassword = await bcrypt.hash('Student123!', 12);
  const student = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      email: 'student@example.com',
      password: studentPassword,
      name: 'Jane Law Student',
      role: 'STUDENT',
      organization: 'Harvard Law School',
      jobTitle: 'JD Student',
    },
  });
  console.log(`Created student user: ${student.email}`);

  // Create reviewer user
  const reviewerPassword = await bcrypt.hash('Reviewer123!', 12);
  const reviewer = await prisma.user.upsert({
    where: { email: 'reviewer@litigationplatform.com' },
    update: {},
    create: {
      email: 'reviewer@litigationplatform.com',
      password: reviewerPassword,
      name: 'Senior Attorney Reviewer',
      role: 'REVIEWER',
      organization: 'Smith & Associates Law Firm',
      jobTitle: 'Senior Associate',
    },
  });
  console.log(`Created reviewer user: ${reviewer.email}`);

  // Seed litigation types
  console.log('Seeding litigation types...');
  const createdTypes: Record<string, any> = {};

  for (const typeData of litigationTypes) {
    const type = await prisma.litigationType.upsert({
      where: { slug: typeData.slug },
      update: typeData,
      create: typeData,
    });
    createdTypes[typeData.slug] = type;
    console.log(`  Created litigation type: ${type.name}`);
  }

  // Reset case-derived data for a clean, idempotent reseed.
  // (documents and parties cascade on case delete; quiz questions cascade on quiz delete.)
  console.log('Clearing existing cases and dependent records...');
  await prisma.quizAttempt.deleteMany();
  await prisma.note.deleteMany();
  await prisma.bookmark.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.case.deleteMany();

  // Seed cases
  console.log('Seeding landmark cases...');

  for (const caseData of landmarkCases) {
    const { litigationSlug, parties, ...caseFields } = caseData;
    const litigationType = createdTypes[litigationSlug];

    if (!litigationType) {
      console.error(`  Litigation type not found: ${litigationSlug}`);
      continue;
    }

    const existingCase = await prisma.case.findFirst({ where: { name: caseFields.name, litigationTypeId: litigationType.id } });
    if (existingCase) {
      console.log(`  Skipping existing case: ${caseFields.name}`);
      continue;
    }

    const newCase = await prisma.case.create({
      data: {
        ...caseFields,
        litigationTypeId: litigationType.id,
        parties: {
          create: (parties || []).map((p) => ({ ...p, role: p.role as any })),
        },
      },
    });
    console.log(`  Created case: ${newCase.name}`);

    // Create sample documents for each case
    await prisma.document.createMany({
      data: [
        {
          caseId: newCase.id,
          name: 'Original Complaint / Petition',
          type: 'COMPLAINT',
          description: 'Initial pleading filed by plaintiff',
          isPublic: true,
        },
        {
          caseId: newCase.id,
          name: 'Court Opinion and Order',
          type: 'COURT_ORDER',
          description: 'Final court decision and reasoning',
          isPublic: true,
        },
        {
          caseId: newCase.id,
          name: 'Main Brief on the Merits',
          type: 'BRIEF',
          description: 'Primary appellate or trial brief',
          isPublic: true,
        },
      ],
    });
  }

  // Create sample quizzes
  console.log('Creating sample quizzes...');

  const civilRightsType = createdTypes['civil-rights'];
  if (civilRightsType) {
    const brownCase = await prisma.case.findFirst({ where: { name: 'Brown v. Board of Education' } });

    const quiz = await prisma.quiz.create({
      data: {
        title: 'Civil Rights Law Fundamentals',
        description: 'Test your knowledge of foundational civil rights law, landmark cases, and constitutional principles.',
        litigationTypeId: civilRightsType.id,
        type: 'MULTIPLE_CHOICE',
        passingScore: 70,
        timeLimit: 20,
        isPublished: true,
        createdBy: admin.id,
        questions: {
          create: [
            {
              text: 'In Brown v. Board of Education, what constitutional clause did the Court hold that racial segregation in public schools violated?',
              options: [
                { id: 'a', text: 'Due Process Clause of the 5th Amendment' },
                { id: 'b', text: 'Equal Protection Clause of the 14th Amendment' },
                { id: 'c', text: 'Privileges and Immunities Clause of the 14th Amendment' },
                { id: 'd', text: 'Commerce Clause of Article I' },
              ],
              correctAnswer: 'b',
              explanation: 'The Court held that racial segregation in public schools violated the Equal Protection Clause of the 14th Amendment, overruling the "separate but equal" doctrine from Plessy v. Ferguson.',
              points: 1,
              orderIndex: 1,
            },
            {
              text: 'Under 42 U.S.C. § 1983, a plaintiff suing a government official for constitutional violations must generally prove which of the following?',
              options: [
                { id: 'a', text: 'The official acted under color of state law and violated a federal right' },
                { id: 'b', text: 'The official acted maliciously or with intent to discriminate' },
                { id: 'c', text: 'The plaintiff suffered economic damages only' },
                { id: 'd', text: 'The official was personally enriched by the conduct' },
              ],
              correctAnswer: 'a',
              explanation: 'Section 1983 requires proof that (1) the defendant acted under color of state law and (2) the action deprived the plaintiff of rights, privileges, or immunities secured by the Constitution or federal laws.',
              points: 1,
              orderIndex: 2,
            },
            {
              text: 'The doctrine of qualified immunity protects government officials from civil liability unless their conduct violated a:',
              options: [
                { id: 'a', text: 'Federal statute passed within the last 10 years' },
                { id: 'b', text: 'Clearly established statutory or constitutional right' },
                { id: 'c', text: 'State law provision' },
                { id: 'd', text: 'Local ordinance or regulation' },
              ],
              correctAnswer: 'b',
              explanation: 'Qualified immunity protects government officials unless their conduct violated clearly established law that a reasonable person would have known about at the time of the conduct.',
              points: 1,
              orderIndex: 3,
            },
            {
              text: 'Under Monell v. Department of Social Services, a municipality can be held liable under § 1983 only if:',
              options: [
                { id: 'a', text: 'Any employee of the municipality committed the constitutional violation' },
                { id: 'b', text: 'The constitutional violation was caused by an official policy or custom' },
                { id: 'c', text: 'The mayor personally approved the conduct' },
                { id: 'd', text: 'The municipality had at least 50 employees' },
              ],
              correctAnswer: 'b',
              explanation: 'Monell held that municipalities can be sued under § 1983 but are not liable under respondeat superior. Liability requires that the constitutional violation resulted from an official policy, custom, or practice of the government entity.',
              points: 1,
              orderIndex: 4,
            },
            {
              text: 'The social science evidence used in Brown v. Board of Education, particularly the "doll tests," was conducted by:',
              options: [
                { id: 'a', text: 'Thurgood Marshall and his legal team' },
                { id: 'b', text: 'Kenneth and Mamie Clark' },
                { id: 'c', text: 'Chief Justice Warren\'s law clerks' },
                { id: 'd', text: 'The NAACP research department' },
              ],
              correctAnswer: 'b',
              explanation: 'The famous doll tests were conducted by psychologists Kenneth and Mamie Clark, who found that Black children preferred white dolls over Black dolls, suggesting the psychological harm caused by segregation.',
              points: 1,
              orderIndex: 5,
            },
          ],
        },
      },
    });
    console.log(`  Created quiz: ${quiz.title}`);
  }

  // Create criminal defense quiz
  const criminalType = createdTypes['criminal-defense'];
  if (criminalType) {
    const quiz2 = await prisma.quiz.create({
      data: {
        title: 'Constitutional Criminal Procedure',
        description: 'Comprehensive assessment of Miranda rights, exclusionary rule, and criminal procedure constitutional protections.',
        litigationTypeId: criminalType.id,
        type: 'MULTIPLE_CHOICE',
        passingScore: 75,
        timeLimit: 25,
        isPublished: true,
        createdBy: admin.id,
        questions: {
          create: [
            {
              text: 'Miranda warnings are constitutionally required when a suspect is:',
              options: [
                { id: 'a', text: 'Being questioned by any law enforcement officer anywhere' },
                { id: 'b', text: 'In custody and subject to interrogation' },
                { id: 'c', text: 'Voluntarily speaking with police about a crime' },
                { id: 'd', text: 'Present at a crime scene as a potential witness' },
              ],
              correctAnswer: 'b',
              explanation: 'Miranda warnings are required when two conditions are met: (1) the suspect is in custody, meaning a reasonable person would not feel free to leave, and (2) the suspect is subject to interrogation or its functional equivalent.',
              points: 1,
              orderIndex: 1,
            },
            {
              text: 'Evidence obtained in violation of the Fourth Amendment is generally excluded from trial under:',
              options: [
                { id: 'a', text: 'The Miranda rule' },
                { id: 'b', text: 'The exclusionary rule from Mapp v. Ohio' },
                { id: 'c', text: 'The fruit of the tree doctrine alone' },
                { id: 'd', text: 'The Due Process Clause of the 5th Amendment' },
              ],
              correctAnswer: 'b',
              explanation: 'The exclusionary rule, established for federal courts in Weeks v. United States and applied to state courts in Mapp v. Ohio (1961), requires suppression of evidence obtained through unconstitutional searches and seizures.',
              points: 1,
              orderIndex: 2,
            },
            {
              text: 'What is the standard for determining whether someone is "in custody" for Miranda purposes?',
              options: [
                { id: 'a', text: 'Whether the police subjectively intended to arrest the person' },
                { id: 'b', text: 'Whether a reasonable person in the suspect\'s position would have felt free to terminate the encounter' },
                { id: 'c', text: 'Whether the suspect was formally arrested or in a police station' },
                { id: 'd', text: 'Whether the suspect was physically restrained' },
              ],
              correctAnswer: 'b',
              explanation: 'The "custody" determination uses an objective reasonable person standard: whether, under all the circumstances, a reasonable person would have felt they were not at liberty to terminate the interrogation and leave.',
              points: 1,
              orderIndex: 3,
            },
          ],
        },
      },
    });
    console.log(`  Created quiz: ${quiz2.title}`);
  }

  console.log('\nDatabase seeding completed successfully!');
  console.log('\nLogin credentials:');
  console.log('  Admin: admin@litigationplatform.com / Admin123!@#');
  console.log('  Student: student@example.com / Student123!');
  console.log('  Reviewer: reviewer@litigationplatform.com / Reviewer123!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
