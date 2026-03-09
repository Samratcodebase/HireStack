import express from "express";
import cors from "cors";
import ENV from "../src/utils/env.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENT_URI,
    credentials: true,
  }),
);

export default app;
