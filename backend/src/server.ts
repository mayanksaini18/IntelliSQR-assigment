import app from "./app";
import { MONGO_URI, PORT } from "./config";
import mongoose from "mongoose";

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongo connected");
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
