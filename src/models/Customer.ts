import { hash, verify } from "argon2";
import { Schema, model, Types } from "mongoose";
import { ICustomer } from "./interfaces/ICustomer";

const addressSchema = new Schema(
  {
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: String,
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    pincode: String,
  },
  { _id: false }
);

const customerSchema = new Schema({
  name: { type: String, required: true, minlength: 4, trim: true, index: true },
  email: { type: String, unique: true, required: true, index: true },
  contactNo: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true, minlength: 5 },
  orders: [{ type: Types.ObjectId }], //OrderId
  verified: {
    _id: false,
    status: Boolean,
    via: { type: String, enum: ["email", "contactno"] },
  },
  addresses: [addressSchema],
  isBlackListed: { type: Boolean },
  productViewed: [
    {
      _id: false,
      productId: Types.ObjectId,
      date: Date,
    },
  ],
  cartActivity: {
    added: [Types.ObjectId], //ProductId
    discarded: [Types.ObjectId], //ProductId
  },
  inCart: [Types.ObjectId], //ProductId
});
customerSchema.pre("save", async function (next) {
  const customer: ICustomer | any = this;
  if (!customer.isModified("password")) return next();
  try {
    const hashedPwd = await hash(customer.password);
    customer.password = hashedPwd;
  } catch (error) {
    return next(error);
  }
});
customerSchema.methods.comparePassword = async function (cPassword: string) {
  try {
    const result = await verify(this.password, cPassword);
    if (result) {
      return true;
    } else return false;
  } catch {
    throw Error("Error in comparing password");
  }
};
export const Customer = model<ICustomer>("Customer", customerSchema);
