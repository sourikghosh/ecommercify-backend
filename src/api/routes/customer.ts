import { Router } from "express";
import { body } from "express-validator";
import { Customer } from "../../models/Customer";
import { loginController, signupController } from "../controllers/customer";
const router = Router();
router.post(
  "/signup",
  [
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
      .custom(async (value) => {
        const user = await Customer.findOne({ email: value });
        if (user) {
          return Promise.reject("Email is already in use");
        }
      }),
    body("contactNo").isMobilePhone("any"),
    body("password").not().isEmpty().isLength({ min: 6 }),
  ],
  signupController
);

router.post(
  "/login",
  [
    body("email", "Not valid Email").isEmail(),
    body("contactNo", "Invalid contact no").isMobilePhone("any"),
    body("password", "Password shouldn't been empty").notEmpty(),
  ],
  loginController
);

export { router as default };
