import { Schema, model, Types } from "mongoose";
import IPromo from "models/interfaces/IPromo";
const promoSchema = new Schema({
  name: String,
  code: { type: String, required: true, unique: true },
  flat: { _id: false, amount: Number, minPurchase: Number },
  percentage: {
    _id: false,
    amount: Number,
    limit: Number,
    minPurchase: Number,
  },
  categories: [Types.ObjectId],
  products: [Types.ObjectId],
});
const Promo = model<IPromo>("Promo", promoSchema);
