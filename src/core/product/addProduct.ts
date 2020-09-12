import Product from "models/Product";
import { setTags } from "core/Tag";
import { setCategory } from "core/category";
/**
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
      tags,
    } = obj;
  
    const product = new Product({
      name,
      title,
      description,
      features: Object.values(features),
      images,
      specifications,
      quantity,
      variant,
      price,
      reviews,
    });
    const result = await product.save();
    /**
     * If Ctegory is provided then first we will check if ctegory already
     * exists.If exists then we will add product to that category or we
     * will create New Category
     */
    category && (await setCategory(category, result._id));
    /**
     * IfTags are provided then first we will check if tags are already
     * there.If exists then we will add product to that tags or we
     * will create New Tag
     */
    tags && tags.length !==0 && (await setTags(tags, result._id));
    if (!result) throw Error("Product addition Failure");
    return result._id;
  } catch (error) {
    console.log(error.message)
    throw Error("Product could not be added!");
  }
};
export default addProduct;
