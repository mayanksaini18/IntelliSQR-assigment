import { Request, Response, NextFunction } from "express";
import { JsonWebTokenError } from "jsonwebtoken";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({ error: "Invalid token" });
  }
  res.status(err.status || 500).json({ error: err.message || "Server Error" });
}
