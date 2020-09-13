import Category from "models/Category";
const setCategory = async (name: string, productId: any) => {
  try {
    const categoryFound = await Category.findOne({ name });
    categoryFound
      ? await Category.updateOne({ name }, { $push: { productIds: productId } })
      : await Category.create({ name, productIds: [productId] });
    return true;
  } catch (error) {
    throw error.message;
  }
};
export default setCategory;
