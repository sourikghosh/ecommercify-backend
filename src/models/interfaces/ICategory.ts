import { Document } from "mongoose";
export interface ICategory extends Document {
  name: string;
  images?: [{ ref: string; url: string }];
  productIds: [string];
}
