import { Schema, model, Types } from "mongoose";
import { IProduct } from "./interfaces/IProduct";
import { ImageSchema } from "./Schemas";
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
  images: [ImageSchema],
  specifications: [attributeVal],

  variant: [
    {
      attribute: String,
      values: [{ name: Number, price: Number, quantity: Number }],
    },
  ],
  actualPrice: Number,
  price: { type: Number },
  quantity: Number,
  reviews: [review],
});
const Product = model<IProduct>("Product", productSchema);
export default Product;
