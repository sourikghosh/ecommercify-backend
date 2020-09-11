import Tag from "models/Tag";
const getTagNames = async () => {
  try {
    const TagNames = await Tag.find().select({ name: 1 });
    if (!TagNames) throw Error("Empty");
    return TagNames;
  } catch (error) {
    throw Error(" Can't Find the tags");
  }
};
export default getTagNames;
