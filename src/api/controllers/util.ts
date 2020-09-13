import { Request, Response } from "express";
import { getCategoryNames } from "core/category";
import { getTagNames } from "core/Tag";
export const getInitialProductDetailsController = async (
  req: Request,
  res: Response
) => {
  try {
    const categories = await getCategoryNames();
    const tags = await getTagNames();
    res.status(200).json({ success: true, categories, tags });
  } catch (error) {
    res.status(200).json({ success: false, error: error.message });
  }
};
