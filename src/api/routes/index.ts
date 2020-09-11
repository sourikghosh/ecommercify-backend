import { Router } from "express";
import productRoute from "./product";
import customerRoute from "./customer";
import utilRoute from "./util";
const router = Router();

router.use("/product", productRoute);
router.use("/customer", customerRoute);
router.use("/util", utilRoute);
export { router as default };
