import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  res.send("<h1>Yeeeeeeeee</h1>");
});
export { router as default };
