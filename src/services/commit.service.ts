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

export default {
  createCommit,
};
