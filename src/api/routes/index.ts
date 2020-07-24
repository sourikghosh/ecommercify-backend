import { Router,Request,Response } from "express";
import productRoute from "./product";
import customerRoute from './customer'
const router = Router();
router.get("/",(req:Request,res:Response)=>{
    res.send(`<h1>Hello Welcome here`)
})
router.use("/product",productRoute);
router.use("/customer",customerRoute)
export { router as default };
