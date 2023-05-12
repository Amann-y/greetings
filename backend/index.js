import express from "express";
import connectDB from "./DB/connectDb.js";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB(process.env.MONGODBURL);
app.use("/", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Sever is running ${process.env.PORT}`);
});
