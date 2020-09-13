import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  title: string;
  description: string;
  features?: [string];
  images?: [string];
  specifications?: [
    {
      attribute: string;
      value: string;
    }
  ];
  quantity: number;
  variant?: [
    {
      attribute: string;
      values: [{ name: string; price: Number; quantity: Number }];
    }
  ];
  actualPrice: number;
  price: number;
  reviews?: [
    {
      rating: number;
      comment?: string;
      images?: [string];
    }
  ];
}
