import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();

router.get("/:username", userController.getUser);
router.post("/", userController.createUser);
router.put("/:username", userController.updateUser);

export default router;
