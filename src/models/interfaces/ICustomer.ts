import { Document } from "mongoose";
import { ObjectID } from "mongodb";
export interface ICustomer extends Document {
  name: string;
  email?: string;
  contactNo: string;
  password: string;
  orders?: [ObjectID]; //OrderId
  verified?: {
    status: boolean;
    via: string;
  };
  addresses?: [
    {
      name: string;
      contactNo: string;
      addressLine1: string;
      addressLine2?: string;
      landmark: string;
      city: string;
      pincode: string;
    }
  ];
  isBlacklisted: boolean;
  comparePassword(cPassword:string):boolean;
}
