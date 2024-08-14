/*
  Warnings:

  - Added the required column `orderDateTime` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderDateTime" TIMESTAMP(3) NOT NULL;
