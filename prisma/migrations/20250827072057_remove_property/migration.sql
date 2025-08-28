/*
  Warnings:

  - You are about to drop the column `propertyId` on the `Apartment` table. All the data in the column will be lost.
  - You are about to drop the `Property` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Apartment" DROP CONSTRAINT "Apartment_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PropertyImage" DROP CONSTRAINT "PropertyImage_propertyId_fkey";

-- AlterTable
ALTER TABLE "public"."Apartment" DROP COLUMN "propertyId";

-- DropTable
DROP TABLE "public"."Property";

-- DropTable
DROP TABLE "public"."PropertyImage";
