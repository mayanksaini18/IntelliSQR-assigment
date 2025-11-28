import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todos";
import { errorHandler } from "./middleware/error";


const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Vercel URL will be in env
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("todo app backend working fine!");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// error handler (last)
app.use(errorHandler);

export default app;
