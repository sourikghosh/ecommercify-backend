import Category from "models/Category";
const getCategoryNames = async () => {
  try {
    const categoryNames = await Category.find().select({ _id: 0, name: 1 });
    if (!categoryNames) throw Error("Empty Category");
     const names = categoryNames.map((cat) => cat.name);
  
    return names;
  } catch (error) {
    throw Error("Category Not Found");
  }
};
export default getCategoryNames;
