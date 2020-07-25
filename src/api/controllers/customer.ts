import { Request, Response } from "express";
import customer from "../../core/customer/customer";
import { validationResult } from "express-validator";
import util from "../../../lib/util";
/**
 *
 * @param req
 * @param res
 * @name SignUpController
 */
export const signupController = async (req: Request, res: Response) => {
  let error: any = validationResult(req);
  if (!error.isEmpty()) {
    error = error.errors.map((value: any) => value.msg);
    res.status(400).json({ message: "Validation Error", errors: error });
  } else {
    try {
      const token = await customer.signup(req.body);
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

  if (!error.isEmpty()) {
    error = error.errors.map((value: any) => value.msg);
    res.status(400).json({ message: "Validation Error", errors: error });
  } else {
    const { username, password } = req.body;
    try {
      const token = await customer.login(username, password);
      if (token) res.status(200).json({ message: "Success", token });
    } catch {
      res.status(400).json({ message: "Error", error: "Login failed" });
    }
  }
};
/**
 *
 * @param req
 * @param res
 * @name Get-user-controller
 */
export const getUserController = async (req: Request, res: Response) => {
  try {
    let cstmr, error;
    const id = req.params.id;
    let errorsList: any = validationResult(req);
    error = errorsList.errors.map((value: any) => value.msg);
    if (!errorsList.isEmpty()) {
      res.status(400).json({ message: "Validation Error", errors: error });
    } else {
      if (util.isEmail(id)) {
        cstmr = await customer.getByEmail(id);
      } else if (util.isObjectId(id)) {
        cstmr = await customer.getById(id);
      } else {
        cstmr = await customer.getByContactno(id);
      }
      if (cstmr) res.status(200).json({ message: "Success", result: cstmr });
    }
  } catch (error) {
    res.status(400).json({ message: "Error", error: "User error occured" });
  }
};
/**
 *
 * @param req
 * @param res
 * @name get-All-User-controller
 */
export const getUsersController = async (req: Request, res: Response) => {
  const { perPage, pageNo } = req.query;
  try {
    const result = await customer.get(Number(perPage), Number(pageNo));
    if (result)
      res.status(200).json({
        message: "Success",
        count: result.customerCount,
        customers: result.customer,
      });
    else res.status(400).json({ message: "Customer Not found" });
  } catch (error) {
    res.status(501).json({ message: "Internal Server Error" });
  }
};
/**
 *
 * @param req
 * @param res
 * @name update-user-controller
 */
export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  let body = req.body;
  try {
    console.log(body, req.body);
    const result = await customer.update(id, body);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await customer.remove(id);
    console.log(result);
    if (result) res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(404).json({ message: "Customer not found" });
  }
};
