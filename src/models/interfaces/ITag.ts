import {Document} from "mongoose"
interface ITag extends Document{
  name: string;
  products: [string];
  images?: [{ ref: string; url: string }];
}
export default ITag;
