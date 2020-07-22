import { fromPairs } from "lodash";
import { Router } from "express";
import productRoute from "./product";
const router = Router();
router.use("/product",productRoute);
export { router as default };
