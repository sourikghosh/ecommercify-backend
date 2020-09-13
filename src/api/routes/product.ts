import { Router } from "express";
import { body } from "express-validator";
import validate from "api/middlewares/validate";
import { addProductController } from "api/controllers/product";
import { min } from "lodash";
const router = Router();
/**
 * @name Add-Product-Route
 */
router.post(
  "/",
  [
    body("name", "Name is required")
      .isLength({ min: 5, max: 50 })
      .withMessage("Name must be between 5 and 50 character")
      .escape()
      .notEmpty()
      .trim(),
    body("title", "Title is required")
      .isLength({ min: 5, max: 100 })
      .withMessage("Title must be between 5 and 100 character")
      .escape()
      .notEmpty()
      .trim(),
    body("description", "Description is required")
      .isLength({ min: 10 })
      .withMessage("Description Should be of minimum 10 character")
      .escape()
      .notEmpty()
      .trim(),
    body("price", "Price is required").isNumeric().notEmpty().isDecimal(),
    body("actualPrice").isDecimal().optional(),
    body("quantity", "Quantity is required").isDecimal().notEmpty(),
  ],
  validate,
  addProductController
);
export { router as default };
