import { Request, Response } from "express";
import customer from "../../core/customer/customer";
import { validationResult } from "express-validator";
/**
 *
 * @param req
 * @param res
 * @Name SignUpController
 */
export const signupController = async (req: Request, res: Response) => {
  let error: any = validationResult(req);
  error = error.errors.map((value: any) => value.msg);
  if (error) {
    res.status(400).json({ message: "Validation Error", errors: error });
  } else {
    const customerObj: any = {
      name: req.body.name,
      email: req.body.email,
      contactNo: req.body.contactNo,
      password: req.body.password,
    };
    try {
      const token = await customer.signup(customerObj);
      if (token) res.status(200).json({ message: "Success", token });
    } catch (error) {
      res.status(400).json({ message: "Error", error: "Signup failed" });
    }
  }
};
/**
 *
 * @param req
 * @param res
 * @name Login COntroller
 */
export const loginController = async (req: Request, res: Response) => {
  let error: any = validationResult(req);
  error = error.errors.map((value: any) => value.msg);
  if (error) {
    res.status(400).json({ message: "Validation Error", errors: error });
  } else {
    const email = req.body.email;
    const contactNo = req.body.contactNo;
    const password = req.body.password;

    let username = email ? email : contactNo;
    try {
      const token = await customer.login(username, password);
      if (token) res.status(200).json({ message: "Success", token });
    } catch {
      res.status(400).json({ message: "Error", error: "Login failed" });
    }
  }
};
