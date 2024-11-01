import { Repo } from "@prisma/client";
import prisma from "../prisma";
import branchService from "./branch.service";
import commitService from "./commit.service";

/**
 * Creates a repository
 * @param repo
 * @returns repo
 */
const createRepo = async (
  username: string,
  repo: Omit<Repo, "id" | "createdAt" | "updatedAt" | "username">,
  commitMessage: string,
  branchName: string,
) => {
  try {
    const newRepo = await prisma.repo.create({
      data: {
        ...repo,
        user: {
          connect: {
            username: username,
          },
        },
      },
    });

    const branch = await branchService.createBranch(branchName, newRepo.id);
    const commit = await commitService.createCommit(newRepo.id, commitMessage);

    return newRepo;
  } catch (e) {
    throw e;
  }
};

/** */

/**
 * Retrieves the repository with the given id
 * @param username
 * @returns repo
 */
const getAllReposByUsername = async (username: string) => {
  try {
    const repo = await prisma.repo.findMany({
      where: {
        username,
      },
    });

    return repo;
  } catch (e) {
    throw e;
  }
};

/**
 * Retrieves the repository with the given name for repository
 * @param name
 * @returns repo
 *
 */
const getRepoByName = async (name: string) => {
  try {
    const repo = await prisma.repo.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      include: {
        commits: {
          take: 10,
        },
        branches: {
          take: 10,
        },
      },
    });

    return repo;
  } catch (e) {
    throw e;
  }
};

/**
 * Updates the repository with the given id
 * @param id
 * @param repoData
 * @returns the updated repo
 */
const updateRepo = async (
  id: string,
  repoData: Omit<Repo, "id" | "createdAt" | "updatedAt">,
) => {
  try {
    const updateRepo = await prisma.repo.update({
      where: {
        id,
      },
      data: {
        ...repoData,
      },
    });

    return updateRepo;
  } catch (e) {
    throw e;
  }
};

export default {
  createRepo,
  getAllReposByUsername,
  getRepoByName,
  updateRepo,
};
