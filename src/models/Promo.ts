import { Schema, model, Types } from "mongoose";
const promoSchema = new Schema({
  name: String,
  code: { type: String, required: true, unique: true },
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
