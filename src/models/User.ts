import { Schema, model, Types } from "mongoose";
import { IUser } from "./interfaces/IUser";
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  customers: { type: Types.ObjectId, required: true },
  role: { type: String, enum: ["ADMIN", "MANAGER"] },
});
const User = model<IUser>("User", userSchema);
