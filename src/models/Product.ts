import { Schema, model, Types } from "mongoose";
import { IProduct } from "./interfaces/IProduct";
const review = new Schema(
  {
    rating: { type: Number, required: true },
    comment: String,
    images: [String],
  },
  { _id: false }
);
const attributeVal = new Schema(
  {
    attribute: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new Schema({
  name: { type: String, required: true, index: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [String],
  images: [{ ref: String, url: String }],
  specifications: [attributeVal],
  quantity: Number,
  category: { type: Types.ObjectId },
  variant: [
    {
      attribute: String,
      values: [{ name: Number, price: Number, quantity: Number }],
    },
  ],
  actualPrice: Number,
  price: { type: Number },
  reviews: [review],
  SKU: String,
  tags: [String],
});
export const Product = model<IProduct>("Product", productSchema);
