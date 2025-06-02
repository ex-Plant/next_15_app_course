/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `age` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Users` table. All the data in the column will be lost.
  - The `id` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[nickname]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nickname` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_email_key";

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "age",
DROP COLUMN "email",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "HouseCleaning" (
    "id" SERIAL NOT NULL,
    "cleaningDate" TIMESTAMP(3) NOT NULL,
    "cleanerNickname" TEXT NOT NULL,

    CONSTRAINT "HouseCleaning_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_nickname_key" ON "Users"("nickname");

-- AddForeignKey
ALTER TABLE "HouseCleaning" ADD CONSTRAINT "HouseCleaning_cleanerNickname_fkey" FOREIGN KEY ("cleanerNickname") REFERENCES "Users"("nickname") ON DELETE RESTRICT ON UPDATE CASCADE;
