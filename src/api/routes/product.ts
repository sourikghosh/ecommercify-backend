import { Router } from "express";
import { body } from "express-validator";
import validate from "api/middlewares/validate";
import { addProductController } from "api/controllers/product";
const router = Router();
/**
 * @name Add-Product-Route
 */
router.post("/", [body("name").isString().notEmpty()], validate, addProductController);
export { router as default };
