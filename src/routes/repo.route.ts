import { Router } from "express";
import repoController from "../controllers/repo.controller";

const router = Router();

router.post("/:username", repoController.createRep);

router.post("/:username/commit", repoController.commitRepo);

router.get("/user-name/:username", repoController.getAllReposByUsername);
router.get("/repo-name/:name", repoController.getRepoByName);
router.get("/repo-id/:id", repoController.getRepoById);

router.put("/:id", repoController.updateRepo);

export default router;
