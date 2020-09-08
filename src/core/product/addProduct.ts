import { Product } from "models/Product";
/**
 *
 * @param obj
 * @name Add-Product
 */
const addProduct = async (obj: any) => {
  try {
    const {
      name,
      title,
      description,
      features,
      images,
      specifications,
      quantity,
      category, 
      variant,
      price,
      reviews,
      SKU,
      tags,
    } = obj;
    const product = new Product({
      name,
      title,
      description,
      features,
      images,
      specifications,
      quantity,
      category,
      variant,
      price,
      reviews,
      SKU,
      tags,
    });
    const result = await product.save();
    if (!result) throw Error("Product addition Failure");
    return result;
  } catch (error) {
    throw Error(error);
  }
};
export default addProduct;
