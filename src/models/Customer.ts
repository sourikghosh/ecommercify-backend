import { Schema, model, Types } from "mongoose";
import { ICustomer } from "./interfaces/ICustomer";
const customerSchema = new Schema({
  name: { type: String, required: true, minlength: 4, trim: true },
  email: { type: String },
  contactNo: { type: String },
  password: { type: String, required: true, minlength: 5 },
  orders: [{ type: Types.ObjectId }], //OrderId
  verified: {
    status: Boolean,
    via: { type: String, enum: ["email", "contactno"] },
  },
  address: [
    {
      name: { type: String, required: true },
      contactNo: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: String,
      landmark: { type: String, required: true },
      city: { type: String, required: true },
      pincode: String,
    },
  ],
  isBlackListed: { type: Boolean, required: true },
  productViewed: [
    {
      productId: Types.ObjectId,
      date: Date,
    },
  ],
  cartActivity: {
    added: Types.ObjectId, //ProductId
    discarded: Types.ObjectId, //ProductId
  },
  inCart: [Types.ObjectId], //ProductId
});
export const Customer = model<ICustomer>("Customer", customerSchema);
