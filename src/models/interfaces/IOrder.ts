import { Document } from "mongoose";
import { ObjectID } from "mongodb";
enum orderStatus{
    "PENDING",
    "CONFIRMED",
    "SHIPPED",
    "ON_THE_WAY",
    "NEAR_YOU",
    "DELIVERED"
}
export interface IOrder extends Document {
  name:string;
  phoneNo:string;
  customer: ObjectID;
  products: [ObjectID]; //ProductIds
  amount: number;
  shippingAddress: {
    name: string;
    contactNo: string;
    addressLine1: string;
    addressLine2?: string;
    landmark: string;
    city: string;
    pincode: string;
  };
  status:orderStatus;
}
