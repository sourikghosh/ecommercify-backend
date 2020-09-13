import { Document } from "mongoose";
interface IDiscount extends Document {
  name: string;
  images?: [{ ref: string; url: string }];
  flat?: {
    amount: number;
    minPurchase: number;
  };
  percentage?: {
    amount: number;
    limit: number;
    minPurchase: number;
  };
  categories: string;
  products: number;
}
export default IDiscount;
