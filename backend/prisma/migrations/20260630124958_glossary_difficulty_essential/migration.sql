-- AlterTable
ALTER TABLE "glossary_terms" ADD COLUMN     "difficulty" TEXT NOT NULL DEFAULT 'Intermediate',
ADD COLUMN     "isEssential" BOOLEAN NOT NULL DEFAULT false;
