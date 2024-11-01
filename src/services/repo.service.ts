import { Repo } from "@prisma/client";
import prisma from "../prisma";
import branchService from "./branch.service";
import commitService from "./commit.service";
import fileService from "./file.service";
import { FileParams } from "../types/fileParams";

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
  isDefaultBranch: boolean,
  files: FileParams[],
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

    const branch = await branchService.createBranch(
      branchName,
      newRepo.id,
      isDefaultBranch,
    );
    const commit = await commitService.createCommit(newRepo.id, commitMessage);

    const createFiles = files.map(async (eachFile) => {
      const newFile = await fileService.createFile(newRepo.id, eachFile);
      return newFile;
    });

    return newRepo;
  } catch (e) {
    throw e;
  }
};

/** */

const commitRepo = async (
  repoId: string,
  commitMessage: string,
  files: FileParams[],
) => {
  try {
    const commit = await commitService.createCommit(repoId, commitMessage);

    /**Issue: There's a bug. You can as of now add same file twice */
    const createFiles = files.map(async (eachFile) => {
      const newFile = await fileService.createFile(repoId, eachFile);
    });

    return commit;
  } catch (e) {
    throw e;
  }
};

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

const getRepoById = async (id: string) => {
  try {
    const repo = await prisma.repo.findUnique({
      where: {
        id,
      },
      include: {
        branches: {
          take: 10,
          orderBy: {
            updatedAt: "desc",
          },
        },
        commits: {
          take: 10,
          orderBy: {
            createdAt: "desc",
          },
        },
        files: {
          take: 100,
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
  getRepoById,
  updateRepo,

  commitRepo,
};
