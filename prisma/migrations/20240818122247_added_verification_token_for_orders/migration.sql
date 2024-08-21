/*
  Warnings:

  - A unique constraint covering the columns `[verificationToken]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "verificationToken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Order_verificationToken_key" ON "Order"("verificationToken");
