import { sign } from "jsonwebtoken";
import { ICustomer } from "models/interfaces/ICustomer";
import config from "util/config";
import util from "util/util";
import { getByContactno, getByEmail } from "./getCustomer";
const signIn = async (username: any, password: string) => {
  try {
    let result: ICustomer | any;
    if (util.isEmail(username)) result = await getByEmail(username);
    else if (username) {
      result = await getByContactno(username);
    } else throw Error("Nothing Given");
    if (result) {
      if (await result.comparePassword(password)) {
        return new Promise((resolve, reject) => {
          sign(
            { name: result.name, id: result._id, userType: "customer" },
            config.JWT_SECRET,
            (err: any, token: any) => {
              if (err) reject(err);
              else resolve(token);
            }
          );
        });
      } else throw Error("Password Not matched");
    }
  } catch (error) {
    throw Error("Customer error");
  }
};
export default signIn;
