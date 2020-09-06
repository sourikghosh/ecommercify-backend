import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  title: string;
  description: string;
  features: [string];
  images?: [string];
  specifications: [
    {
      attribute: string;
      value: string;
    }
  ];
  quantity: number;
  category: string; //Category Id
  variant: [
    {
      attribute: string;
      values: [{ name: string; price: Number; quantity: Number }];
    }
  ];
  price: number;
  SKU:string;
  review?: [
    {
      rating: number;
      comment: string;
      images: [string];
    }
  ];
  tag: [string];
}
