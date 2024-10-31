import { Router } from "express";
import userRoutes from "./routes/user.route";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const router = Router();

router.use("/user", userRoutes);

router.use(errorMiddleware);

export default router;
