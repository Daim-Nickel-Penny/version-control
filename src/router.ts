import { Router } from "express";
import userRoutes from "./routes/user.route";
import repoRoutes from "./routes/repo.route";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const router = Router();

router.use("/user", userRoutes);

router.use("/repo", repoRoutes);

router.use(errorMiddleware);

export default router;
