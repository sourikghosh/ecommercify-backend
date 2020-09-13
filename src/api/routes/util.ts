import { Router } from "express";
import { getInitialProductDetailsController } from "api/controllers/util";
const router = Router();
router.get("/initialproductdetails", getInitialProductDetailsController);
export default router;
