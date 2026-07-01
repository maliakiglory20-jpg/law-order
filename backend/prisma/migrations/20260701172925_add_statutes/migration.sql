-- CreateTable
CREATE TABLE "statutes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortName" TEXT,
    "citation" TEXT,
    "category" TEXT NOT NULL DEFAULT 'General',
    "jurisdiction" TEXT NOT NULL DEFAULT 'Federal Statute',
    "enactedYear" INTEGER,
    "summary" TEXT NOT NULL,
    "keyProvisions" TEXT[],
    "officialUrl" TEXT,
    "relatedLitigation" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "statutes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "statutes_name_key" ON "statutes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "statutes_slug_key" ON "statutes"("slug");

-- CreateIndex
CREATE INDEX "statutes_category_idx" ON "statutes"("category");

-- CreateIndex
CREATE INDEX "statutes_name_idx" ON "statutes"("name");
