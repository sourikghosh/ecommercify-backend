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
const priceSchema = new Schema(
  {
    amount: Number,
    currency: { type: String, enum: ["INR", "EUR", "USD", "YUN"] },
  },
  { _id: false }
);
const productSchema = new Schema({
  name: { type: String, required: true, index: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [attributeVal],
  images: [String],
  specifications: [attributeVal],
  quantity:Number,
  category: { type: Types.ObjectId },
  variant: [
    { attribute: String, value: String, price: priceSchema, quantity: Number },
  ],
  price: priceSchema,
  reviews: [review],
  tag: {
    type: String,
    enum: ["NEW", "HOT", "TRENDING"],
  },
});
export const Product = model<IProduct>("Product", productSchema);
