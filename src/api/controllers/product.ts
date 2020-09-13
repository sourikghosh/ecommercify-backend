import { Request, Response } from "express";
import {addProduct} from "core/product";
export const addProductController = async(req: Request, res: Response) => {
  const productBody = req.body;
  try {
    const result = await addProduct(productBody);
    if (!result) throw Error("Product add failure");
    res.status(200).json({ success: true, product: result });
  } catch (error) {
    res.status(200).json({ success: false, message: error.message});
  }
};
