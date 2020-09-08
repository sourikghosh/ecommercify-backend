import { Schema, model, Types } from "mongoose";
import { IOrder } from "./interfaces/IOrder";
const orderSchema = new Schema({
  name: { type: String, required: true },
  phoneNo: { type: String, required: true },
  customer: { type: Types.ObjectId, required: true },
  product: { type: Types.ObjectId, required: true },
  actualAmount: { type: Number, required: true },
  amount: { type: Number, required: true },
  amountPaid: Boolean,
  paymentMode: { type: String, enum: ["COD", "ONLINE"] },
  discountApplied: Types.ObjectId,
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
