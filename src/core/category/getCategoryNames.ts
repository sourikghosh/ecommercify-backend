import Category from "models/Category";
const getCategoryNames = async () => {
  try {
    const categoryNames = Category.find().select({ name: 1 });
    if (!categoryNames) throw Error("Empty Category");
  } catch (error) {
    throw Error("Category Not Found");
  }
};
export default getCategoryNames;
