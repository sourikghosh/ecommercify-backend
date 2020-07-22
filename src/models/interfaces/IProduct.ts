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
  category: [string];
  saleCount?: number;
  view?: number;
  cartAddCount?: number;
  cartDiscardCount?: number;
  review?: [
    {
      rating: number;
      comment: string;
      images: [string];
    }
  ];
  tag: Tag;
}
