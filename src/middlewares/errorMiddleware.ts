import { Request, Response, NextFunction } from "express";
import createLogger from "../logger";
import { HttpError } from "src/errors/httpError";

const logger = createLogger("errorMiddleware.ts");

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof HttpError) {
    const { statusCode, message, ...rest } = error;
    res.status(statusCode).json({ error: message, ...rest });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
  logger.error(error);
};
