import { Request, Response } from "express";
import customer from "../../core/customer/customer";
import _ from "lodash";
import { ICustomer } from "../../models/interfaces/ICustomer";
export const signupController = async (req: Request, res: Response) => {
  const customerObj: any = {
    name: req.body.name,
    email: req.body.email,
    contactNo: req.body.contactNo,
    password: req.body.password,
  };
  try {
    const token = await customer.signup(customerObj);
    res.status(200).json({ message: "Success", token });
  } catch (error) {
    res.status(400).json({ message: "Error", error:"Signup failed" });
  }
};
