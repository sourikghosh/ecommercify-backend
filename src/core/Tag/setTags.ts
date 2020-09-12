import Tag from "models/Tag";
const setTag = async (tags: [any], productId: string) => {
  try {
    const handleTag = tags.map(async (tag: any) => {
      const tagFound = await Tag.findOne({ name: tag });
      tagFound
        ? await Tag.updateOne({ name: tag }, { $push: { products: productId } })
        : await Tag.create({ name: tag, products: [productId] });
    });
    await Promise.all(handleTag);
    return true;
  } catch (error) {
    throw error.message;
  }
};
export default setTag;
