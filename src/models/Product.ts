import { Schema, model } from "mongoose";
import { IProduct } from "./interfaces/IProduct";
const productSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [
    {
      attribute: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  images: [String],
  specifications: [
    {
      attribute: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  quantity: { type: Number, required: true },
  category: [String],
  saleCount: Number,
  view: Number,
  cartAddCount: Number,
  cartDiscardCount: Number,
  review: [
    {
      rating: { type: Number, required: true },
      comment: String,
      images: [String],
    },
  ],
  tag: {
    type: String,
    enum: ["NEW", "HOT", "TRENDING"],
  },
});
export const Product = model<IProduct>("Product", productSchema);
