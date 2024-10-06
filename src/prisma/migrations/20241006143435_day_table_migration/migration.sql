/*
  Warnings:

  - You are about to drop the column `timeZone` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserAvailability` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `availabilityId` on the `UserAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `dayOfWeek` on the `UserAvailability` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,dayId]` on the table `UserAvailability` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dayId` to the `UserAvailability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "timeZone";

-- AlterTable
ALTER TABLE "UserAvailability" DROP CONSTRAINT "UserAvailability_pkey",
DROP COLUMN "availabilityId",
DROP COLUMN "createdAt",
DROP COLUMN "dayOfWeek",
ADD COLUMN     "dayId" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserAvailability_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Day" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Day_name_key" ON "Day"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserAvailability_userId_dayId_key" ON "UserAvailability"("userId", "dayId");
