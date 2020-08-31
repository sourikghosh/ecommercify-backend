import { Document } from "mongoose";
enum Tag {
  HOT,
  TRENDING,
  NEW,
}
export interface IProduct extends Document {
  name: string;
  title: string;
  description: string;
  features: [
    {
      attribute: string;
      value: string;
    }
  ];
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
      value: string;
      price: { amount: number; currency: string };
      quantity: number;
    }
  ];
  review?: [
    {
      rating: number;
      comment: string;
      images: [string];
    }
  ];
  tag: Tag;
}
