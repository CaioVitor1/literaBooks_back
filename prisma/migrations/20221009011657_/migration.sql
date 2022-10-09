/*
  Warnings:

  - You are about to drop the column `readingGold` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "readingGold",
ADD COLUMN     "readingGoals" INTEGER;
