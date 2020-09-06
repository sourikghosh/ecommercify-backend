import { Schema, model, Types } from "mongoose";
import { ICategory } from "./interfaces/ICategory";

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  images:[{type:String}],
  productIds: [{ type: Types.ObjectId }],
});
export const Category = model<ICategory>("Category", categorySchema);
