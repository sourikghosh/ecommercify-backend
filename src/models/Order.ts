import { Schema, model, Types } from "mongoose";
import { IOrder } from "./interfaces/IOrder";
const orderSchema = new Schema({
  name: { type: String, required: true },
  phoneNo: { type: String, required: true },
  customer: { type: Types.ObjectId, required: true },
  products: { type: Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  shippingAddress: {
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: String,
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    pincode: String,
  },
  status: {
    type: String,
    enum: [
      "PENDING",
      "CONFIRMED",
      "SHIPPED",
      "ON_THE_WAY",
      "NEAR_YOU",
      "DELIVERED",
    ],
  },
});
export const Order = model<IOrder>("Order", orderSchema);
