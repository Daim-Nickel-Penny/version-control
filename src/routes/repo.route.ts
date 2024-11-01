import { Router } from "express";
import repoController from "../controllers/repo.controller";

const router = Router();

router.post("/:username", repoController.createRep);

router.get("/user-name/:username", repoController.getAllReposByUsername);
router.get("/repo-name/:name", repoController.getRepoByName);

router.put("/:id", repoController.updateRepo);

export default router;
