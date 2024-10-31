import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.params;

    const user = await userService.getUser(username);

    if (!user) {
      throw new Error("No user for this username");
    }

    res.json(user);
  } catch (e) {
    next(e);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.updateUser(req.params.username, req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
};

export default {
  getUser,
  createUser,
  updateUser,
};
