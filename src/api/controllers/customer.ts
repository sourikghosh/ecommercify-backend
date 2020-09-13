import { Request, Response } from "express";
import {
  signIn,
  signUp,
  getCustomers,
  getByEmail,
  getByContactno,
  getById,
} from "core/customer";
import { validationResult } from "express-validator";
import util from "util/util";
/**
 *
 * @param req
 * @param res
 * @name SignUpController
 */
export const signupController = async (req: Request, res: Response) => {
  try {
    const token = await signUp(req.body);
    if (token) res.status(200).json({ message: "Success", token });
  } catch (error) {
    res.status(400).json({ message: "Error", error: "Signup failed" });
  }
};
/**
 *
 * @param req
 * @param res
 * @name Login COntroller
 */
export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const token = await signIn(username, password);
    if (token) res.status(200).json({ message: "Success", token });
  } catch {
    res.status(400).json({ message: "Error", error: "Login failed" });
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
        cstmr = await getByEmail(id);
      } else if (util.isObjectId(id)) {
        cstmr = await getById(id);
      } else {
        cstmr = await getByContactno(id);
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
  let perPage: any = 0,
    pageNo: any = 0;
  perPage = req.query.perPage;
  pageNo = req.query.pageNo;
  try {
    const result = await getCustomers(Number(perPage), Number(pageNo));
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
