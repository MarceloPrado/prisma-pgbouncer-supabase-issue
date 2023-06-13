-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('REVENUE', 'EXPENSE', 'INTERNAL_TRANSFER');

-- CreateTable
CREATE TABLE "TransactionDemo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "amountInCents" INTEGER NOT NULL,
    "type" "TransactionType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "providerId" TEXT,
    "accountId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rawData" JSONB,

    CONSTRAINT "TransactionDemo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransactionDemo_providerId_key" ON "TransactionDemo"("providerId");

-- CreateIndex
CREATE INDEX "TransactionDemo_userId_date_id_idx" ON "TransactionDemo"("userId", "date", "id");

-- CreateIndex
CREATE INDEX "TransactionDemo_userId_idx" ON "TransactionDemo"("userId");

-- CreateIndex
CREATE INDEX "TransactionDemo_providerId_idx" ON "TransactionDemo"("providerId");

-- CreateIndex
CREATE INDEX "TransactionDemo_userId_type_idx" ON "TransactionDemo"("userId", "type");
