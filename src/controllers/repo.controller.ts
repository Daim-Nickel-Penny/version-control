import { NextFunction, Request, Response } from "express";
import repoService from "../services/repo.service";

/**
 *
 * @param req params.username is which connects to the repo
 * @param res body is the {
 *  newRepo: repoData,
 *  branchName: branchName,
 *  commitMessage: commitData
 * }
 * @param res
 * @param next
 */

const createRep = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.params;
    const { newRepo, commitMessage, branchName, files, isDefaultBranch } =
      req.body;

    const newRepoCreated = await repoService.createRepo(
      username,
      newRepo,
      commitMessage,
      branchName,
      files,
      isDefaultBranch,
    );

    res.json(newRepoCreated);
  } catch (e) {
    next(e);
  }
};

const commitRepo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { repoId } = req.params;
    const { commitMessage, files } = req.body;

    const commit = await repoService.commitRepo(repoId, commitMessage, files);

    res.json(commit);
  } catch (e) {
    next(e);
  }
};

/**
 *
 * @param req params.name is the name of the repo
 * @param res repo data
 * @param next
 */
const getAllReposByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username } = req.params;
    const repo = await repoService.getAllReposByUsername(username);
    res.json(repo);
  } catch (e) {
    next(e);
  }
};

/**
 *
 * @param req params.name is the name of the repo
 * @param res
 * @param next
 */
const getRepoByName = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name } = req.params;
    console.log("--");
    console.log(req.params);
    console.log(name);
    const repo = await repoService.getRepoByName(name);
    res.json(repo);
  } catch (e) {
    next(e);
  }
};

const getRepoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const repo = await repoService.getRepoById(id);
    res.json(repo);
  } catch (e) {
    next(e);
  }
};

const updateRepo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const repoData = req.body;

    const updatedRepo = await repoService.updateRepo(id, repoData);

    res.json(updatedRepo);
  } catch (e) {
    next(e);
  }
};

export default {
  createRep,
  commitRepo,
  getAllReposByUsername,
  getRepoByName,
  getRepoById,
  updateRepo,
};
