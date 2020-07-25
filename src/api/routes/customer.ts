import { Router } from "express";
import { body, param } from "express-validator";
import { Customer } from "../../models/Customer";
import {
  getUserController,
  loginController,
  signupController,
  getUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/customer";
import { isAdmin, isCustomer } from "../middlewares/auth";
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
/**
 * @name Login-route
 */
router.post(
  "/login",
  [
    body("username", "username must not be empty").notEmpty(),
    body("password", "Password shouldn't been empty").notEmpty(),
  ],
  loginController
);

/**
 * @name GetCustomer-By-id/email/contactNo
 */
router.get(
  "/:id",
  param("id", "Shouldn't been empty").notEmpty(),
  getUserController
);
router.get("/", getUsersController);
router.patch("/:id", updateUserController);
router.delete("/:id", deleteUserController);
export { router as default };
