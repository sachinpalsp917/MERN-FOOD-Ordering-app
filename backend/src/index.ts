import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./route/user.route";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
  console.log("Database connected!!!!");
});
const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({message:"health OK!"})
})

app.use("/api/v1/user", userRouter);

app.listen(7000, () => {
  console.log("Server started");
});
