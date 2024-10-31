import { Router } from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const router = Router();

router.use(errorMiddleware);

export default router;
