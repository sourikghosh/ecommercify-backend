import { Schema, model, Types } from "mongoose";
import ITag from "./interfaces/ITag";
const TagSchema = new Schema({
  name: { type: String, required: true, index: true },
  products: [Types.ObjectId],
  images: [{ ref: String, url: String }],
});
const Tag = model<ITag>("Tag", TagSchema);
export default Tag;
