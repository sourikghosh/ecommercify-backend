import { Schema } from "mongoose";
const AddressSchema = new Schema(
  {
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: String,
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    pincode: String,
  },
  { _id: false }
);
const ImageSchema = new Schema({ ref: String, url: String }, { _id: false });
export {AddressSchema,ImageSchema}