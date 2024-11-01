import { Request, Response } from "express";
import commitService from "../services/commit.service";

const getCommitById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const commit = await commitService.getCommitById(id);
    res.status(200).json(commit);
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  getCommitById,
};
