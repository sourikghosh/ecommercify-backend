import Tag from "models/Tag";
const getTagNames = async () => {
  try {
    const TagNames = await Tag.find().select({ _id: 0, name: 1 });
    if (!TagNames) throw Error("Empty");
    const names = TagNames.map((name) => name.name);
   
    return names;
  } catch (error) {
    throw Error(" Can't Find the tags");
  }
};
export default getTagNames;
