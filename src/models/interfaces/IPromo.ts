import { Document } from "mongoose";
interface IPromo extends Document {
  name: string;
  code: string;
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
export default IPromo;
