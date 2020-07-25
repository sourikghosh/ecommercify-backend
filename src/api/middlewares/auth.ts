import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "../../../util/config";
const extractToken = (req: Request | any) => {
 const bearer: string = req.headers["authorization"];
 const token = bearer.split(" ")[1];
   return token;
 
};
export const isCustomer = (req: Request | any, res: Response, next: NextFunction) => {
  try {
    const token = extractToken(req);
    verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Authorization Error ,Invald Token" });
      } else if (decoded) {
        req.body.user = decoded;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({ Message: "Some error occured" });
  }
};
