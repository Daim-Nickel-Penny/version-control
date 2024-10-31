import { config } from "dotenv";
import createLogger from "./logger";
import app from "./app";

config();

const port = process.env.PORT || 5006;

app.listen(port, () => {
  createLogger("index.ts").info(`API listening on http://localhost:${port}`);
});
