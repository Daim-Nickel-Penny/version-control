/*
  Warnings:

  - You are about to drop the column `userId` on the `Repo` table. All the data in the column will be lost.
  - Added the required column `username` to the `Repo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Repo" DROP CONSTRAINT "Repo_userId_fkey";

-- AlterTable
ALTER TABLE "Repo" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Repo" ADD CONSTRAINT "Repo_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
