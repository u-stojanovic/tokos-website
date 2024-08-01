/*
  Warnings:

  - A unique constraint covering the columns `[id,email,useranme]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `useranme` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_id_email_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "useranme" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_email_useranme_key" ON "User"("id", "email", "useranme");
