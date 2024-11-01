import { Router } from "express";
import commitController from "../controllers/commit.controller";

const router = Router();

router.get("/:id", commitController.getCommitById);

export default router;
