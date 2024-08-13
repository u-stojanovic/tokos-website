-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('Ordered', 'Completed', 'In_Progress', 'Canceled');

-- CreateEnum
CREATE TYPE "CakeSize" AS ENUM ('BIG', 'SMALL');

-- CreateEnum
CREATE TYPE "CookieSize" AS ENUM ('ONE_KG', 'THREE_KG');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "orderedBy" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderedProduct" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "optionId" INTEGER,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "OrderedProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "cakeSize" "CakeSize",
    "cookieSize" "CookieSize",
    "orderedProductId" INTEGER,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderedProduct_optionId_key" ON "OrderedProduct"("optionId");

-- CreateIndex
CREATE UNIQUE INDEX "Option_orderedProductId_key" ON "Option"("orderedProductId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedProduct" ADD CONSTRAINT "OrderedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedProduct" ADD CONSTRAINT "OrderedProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_orderedProductId_fkey" FOREIGN KEY ("orderedProductId") REFERENCES "OrderedProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
