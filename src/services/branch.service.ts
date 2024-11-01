import { Branch } from "@prisma/client";
import prisma from "../prisma";

/**
 *
 * @param branchName The branch name by default is main
 * @param repoId to which the branch belongs
 * @returns branch
 */
const createBranch = async (
  branchName: string = "main",
  repoId: string,
  isDefault: boolean = false,
) => {
  try {
    const newBranch = await prisma.branch.create({
      data: {
        name: branchName,
        isDefault: isDefault,
        repo: {
          connect: {
            id: repoId,
          },
        },
      },
    });

    console.log("newBranch");
    console.log(newBranch);

    return newBranch;
  } catch (e) {
    throw e;
  }
};

const checkoutBranch = async (
  branchId: string,
  repoId: string,
  newBranchName: string,
) => {
  try {
    const existingBranch = await prisma.branch.findUnique({
      where: {
        id: branchId,
      },
    });

    const newBranchFromExisting = {
      ...existingBranch,
      name: newBranchName,
    };

    // const createNewBranch = await prisma.branch.create({
    //   data: newBranchFromExisting,
    // });
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @param repoName
 * @returns the branch
 */
const getBranchByRepoName = async (repoName: string) => {};

export default {
  createBranch,
  getBranchByRepoName,
};
