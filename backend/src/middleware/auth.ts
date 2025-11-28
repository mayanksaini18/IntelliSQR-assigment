import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import User, { IUser } from "../models/User";

type UserPayload = Omit<IUser, "password" | "comparePassword">;

export interface AuthRequest extends Request {
  user?: UserPayload
}

export async function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return res.status(401).json({ error: "Unauthorized" });
  const token = header.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { id: string };
    const user = await User.findById(payload.id).select("-password");
    if (!user) return res.status(401).json({ error: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
