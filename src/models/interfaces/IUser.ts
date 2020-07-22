import { Document } from "mongoose";
import { ObjectID } from "mongodb";
enum Roles {
  ADMIN,
  MANAGER,
}
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  customers: [ObjectID]; //Customer Id
  role: Roles;
}
