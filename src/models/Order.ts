import { Schema, model, Types } from "mongoose";
import { IOrder } from "./interfaces/IOrder";
import {AddressSchema} from "./Schemas"
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
  shippingAddress: AddressSchema,
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
