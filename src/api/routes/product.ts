import { Router } from "express";
const router = Router();
router.post("/pitch", (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.sendStatus(200);
});
export { router as default };
