import { Router } from "express";
import productRoute from "./product";
import customerRoute from './customer'
const router = Router();
router.use("/product",productRoute);
router.use("/customer",customerRoute)
export { router as default };
