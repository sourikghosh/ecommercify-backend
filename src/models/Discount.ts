import { Schema, model, Types } from "mongoose";
const discountSchema = new Schema({
  name: { type: String, required: true },
  images: [{ ref: String, url: String }],
  flat: { _id: false, amount: Number, limit: Number, minPurchase: Number },
  percentage: {
    _id: false,
    amount: Number,
    limit: Number,
    minPurchase: Number,
  },
  categories: [Types.ObjectId],
  products: [Types.ObjectId],
  
});
