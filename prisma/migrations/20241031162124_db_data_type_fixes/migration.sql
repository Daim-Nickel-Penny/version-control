/*
  Warnings:

  - The primary key for the `Branch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `File` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Repo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_repoId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_repoId_fkey";

-- DropForeignKey
ALTER TABLE "Repo" DROP CONSTRAINT "Repo_userId_fkey";

-- DropForeignKey
ALTER TABLE "_StarredRepos" DROP CONSTRAINT "_StarredRepos_A_fkey";

-- DropForeignKey
ALTER TABLE "_StarredRepos" DROP CONSTRAINT "_StarredRepos_B_fkey";

-- AlterTable
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "repoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Branch_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "File" DROP CONSTRAINT "File_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "repoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "File_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Repo" DROP CONSTRAINT "Repo_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Repo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_StarredRepos" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Repo" ADD CONSTRAINT "Repo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StarredRepos" ADD CONSTRAINT "_StarredRepos_A_fkey" FOREIGN KEY ("A") REFERENCES "Repo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StarredRepos" ADD CONSTRAINT "_StarredRepos_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
