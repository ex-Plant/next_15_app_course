/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
