import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";

export const app = express();

config({
  path: "./data/config.env",
});

//Using Middleware
app.use(express.json());
app.use(cookieParser());

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice Working");
});
