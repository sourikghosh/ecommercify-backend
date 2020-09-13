import { hash, verify } from "argon2";
import { Schema, model, Types } from "mongoose";
import { ICustomer } from "./interfaces/ICustomer";
import { AddressSchema } from "./Schemas";

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
  addresses: [AddressSchema],
  isBlackListed: { type: Boolean },
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
const Customer = model<ICustomer>("Customer", customerSchema);
export default Customer;
