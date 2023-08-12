import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyAuthToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers.authorization;
    // console.log("authMiddleware: ", authorizationHeader);
    // console.log("process.env.TOKEN_SECRET: ", process.env.TOKEN_SECRET);

    const token = authorizationHeader?.split(" ")[1];
    // console.log("token: ", token);
    const decoded = jwt.verify(token + "", process.env.TOKEN_SECRET + "");
    next();
  } catch (error: any) {
    // Catch clause variable type annotation must be 'any' or 'unknown' if specified.ts(1196)
    res.status(401).json(error.message);
  }
}
