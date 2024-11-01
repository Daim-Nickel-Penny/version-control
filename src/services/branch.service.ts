import { Branch } from "@prisma/client";
import prisma from "../prisma";

/**
 *
 * @param branchName The branch name by default is main
 * @param repoId to which the branch belongs
 * @returns branch
 */
const createBranch = async (branchName: string = "main", repoId: string) => {
  try {
    const newBranch = await prisma.branch.create({
      data: {
        name: branchName,
        repo: {
          connect: {
            id: repoId,
          },
        },
      },
    });

    return newBranch;
  } catch (e) {
    throw e;
  }
};

const getBranchByRepoName = async (repoName: string) => {};

export default {
  createBranch,
  getBranchByRepoName,
};
