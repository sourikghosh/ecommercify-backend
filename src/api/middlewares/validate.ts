import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
const validate = (validations: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(
      validations.map((validation: any) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ success: true, errors: errors.array() });
  };
};
export default validate;
