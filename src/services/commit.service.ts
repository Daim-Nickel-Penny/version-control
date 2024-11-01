import { Commit } from "@prisma/client";
import prisma from "../prisma";

/**
 *
 * @param repoId to which the commit belongs
 * @param commitMessage the commit message
 * @returns commit
 */
const createCommit = async (repoId: string, commitMessage: string) => {
  try {
    const newCommit = await prisma.commit.create({
      data: {
        message: commitMessage,
        repo: {
          connect: {
            id: repoId,
          },
        },
      },
    });
    console.log("newCommit");
    console.log(newCommit);
    return newCommit;
  } catch (e) {
    throw e;
  }
};

/**
 * Retrieves the commit with the given id
 * @param id
 * @returns commit
 
 */
const getCommitById = async (id: string) => {
  try {
    const commit = await prisma.commit.findUnique({
      where: {
        id,
      },
      include: {
        repo: {
          select: {
            name: true,
            language: true,
            path: true,
            files: {
              select: {
                id: true,
                path: true,
                language: true,
              },
            },
          },
        },
      },
    });

    return commit;
  } catch (e) {
    throw e;
  }
};

export default {
  createCommit,
  getCommitById,
};
