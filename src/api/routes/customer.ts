import { Router } from "express";
import { body, param } from "express-validator";
import Customer from "models/Customer"
import {
  getUserController,
  loginController,
  signupController,
  getUsersController,
} from "api/controllers/customer";
import { isAdmin, isCustomer } from "api/middlewares/auth";
import validate from "api/middlewares/validate";
const router = Router();
/**
 * @name Signup-route
 */
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
    body("email", "Email is not valid or provided")
      .isEmail()
      .escape()
      .custom(async (value) => {
        const user = await Customer.findOne({ email: value });
        if (user) {
          return Promise.reject("Email is already in use");
        }
      }),
    body("contactNo").isMobilePhone("any"),
    body("password", "Password must not been empty or of minimum 6 character")
      .notEmpty()
      .isLength({ min: 6 }),
  ],validate,
  signupController
);
/**
 * @name Login-route
 */
router.post(
  "/login",
  [
    body("username", "username must not be empty").notEmpty(),
    body("password", "Password shouldn't be empty").notEmpty(),
  ],validate,
  loginController
);

/**
 * @name GetCustomer-By-id/email/contactNo
 */
router.get(
  "/:id",
  [param("id", "Shouldn't been empty").notEmpty()],validate,
  getUserController
);
router.get("/", getUsersController);

export { router as default };
