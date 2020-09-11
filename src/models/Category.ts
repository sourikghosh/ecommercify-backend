import { Schema, model, Types } from "mongoose";
import { ICategory } from "./interfaces/ICategory";

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  images: [{ ref: String, url: String }],
  productIds: [{ type: Types.ObjectId }],
});
const Category = model<ICategory>("Category", categorySchema);
export default Category;
