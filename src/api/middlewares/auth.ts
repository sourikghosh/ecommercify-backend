import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "../../../util/config";
const extractToken = (req: Request | any) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  } else throw Error("Token Not provided");
};
export const isCustomer = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = extractToken(req);
    verify(token, config.JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        res.status(401).json({ message: "Authorization Error ,Invald Token" });
      } else if (decoded) {
        req.body.user = decoded;
        next();
      }
    });
  } catch (error) {
    res.status(404).json({ Message: "Token Not Found" });
  }
};
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractToken(req);
    verify(token, config.JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        res.status(401).json({ message: "Authorization Error,invalid Token" });
      } else if (decoded.userType !== "admin") {
        res
          .status(403)
          .json({ message: "You are not permitted to view this page" });
      } else {
        if (decoded.userType === "admin") {
          req.body.user = decoded;
          next();
        } else res.sendStatus(500).json({message:"Internal server error"});
      }
    });
  } catch (error) {
    res.status(404).json({message:"Token not found"})
  }
};
