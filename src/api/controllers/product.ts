import { Request, Response } from "express";
import { addProduct } from "core/product";
export const addProductController = (req: Request, res: Response) => {
  const productBody = req.body;
  try {
    const result = addProduct(productBody);
    if (!result) throw Error("Product add failure");
    res.status(200).json({ success: true, product: result });
  } catch (error) {
    res.status(400).json({ success: false, message: "Failed to add Product" });
  }
};
