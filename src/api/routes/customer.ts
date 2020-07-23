import { Router } from "express";
import { body } from "express-validator";
import { Customer } from "../../models/Customer";
import {signupController} from '../controllers/customer'
const router = Router();
router.post("/signup", [
  body("name", "Name is not valid or not provided")
    .isString()
    .isLength({ min: 4 })
    .escape()
    .trim()
    .not()
    .isEmpty(),
  body("email", "Email is not valid or not provided")
    .isEmail()
    .escape()
    .normalizeEmail()
    .custom(async (value) => {
      const user = await Customer.findOne({ email: value });
      if (user) {
        return Promise.reject("Email is already in use");
      }
    }),
  body("contactNo").isMobilePhone("any"),
  body("password").not().isEmpty().isLength({ min: 6 }),
],signupController  );
export { router as default };
