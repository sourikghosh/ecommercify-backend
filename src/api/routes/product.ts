import { Router } from "express";
import { body } from "express-validator";
import validate from "api/middlewares/validate";
import { addProductController } from "api/controllers/product";
const router = Router();
/**
 * @name Add-Product-Route
 */
router.post(
  "/",
  validate([
    body("name", "Name is Required").toString(),
    body("title", "Title is required").toString(),
    body("description", "Description is required"),
    body("features", "Features should be of array").isArray().optional(),
    body("images").isArray().optional(),
    body("variant").isArray().optional(),
    body("price").isNumeric(),
  ]),
  addProductController
);
export { router as default };
