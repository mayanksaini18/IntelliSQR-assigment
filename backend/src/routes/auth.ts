import { Router, Request, Response, NextFunction } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const router = Router();

// signup
router.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "User exists" });
    const user = await User.create({ name, email, password });
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    const { password: _, __v, ...userResponse } = user.toObject();
    res.status(201).json({ token, user: userResponse });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// login
router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });
    const ok = await user.comparePassword(password);
    if (!ok) return res.status(400).json({ error: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    const { password: _, __v, ...userResponse } = user.toObject();
    res.json({ token, user: userResponse });
  } catch (err) {
    next(err);
  }
});

export default router;
