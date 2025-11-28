import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

if (!MONGO_URI) throw new Error("MONGO_URI is not defined in .env");
if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined in .env");
