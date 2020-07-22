import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "../../../util/config";
const extractToken = (req: Request | any) => {
  if (req.header.Authorization.startsWith("Bearer ")) {
    const bearer: string = req.header.Authorization;
    const token = bearer.split(" ")[1];
    return token;
  } else throw Error("Token not found");
};
const isCustomer = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {};
