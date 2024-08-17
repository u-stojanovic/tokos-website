/*
  Warnings:

  - You are about to drop the column `description` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "description",
ADD COLUMN     "orderDeliveryInformationId" INTEGER;

-- AlterTable
ALTER TABLE "OrderedProduct" ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "OrderDeliveryInformation" (
    "id" SERIAL NOT NULL,
    "city" TEXT,
    "adresa" TEXT,
    "zip" TEXT,

    CONSTRAINT "OrderDeliveryInformation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderDeliveryInformationId_fkey" FOREIGN KEY ("orderDeliveryInformationId") REFERENCES "OrderDeliveryInformation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
