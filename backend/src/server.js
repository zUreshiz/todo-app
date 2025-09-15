import express from "express";
import taskRouter from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/tasks", taskRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Start port ${PORT}`);
  });
});
