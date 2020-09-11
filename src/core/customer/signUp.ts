import { sign } from "jsonwebtoken";
import  Customer  from "models/Customer";
import { ICustomer } from "models/interfaces/ICustomer";
import config from "util/config";
/**
 *
 * @param obj
 * @name SignUp-Customer
 */
const signup = async (obj: ICustomer) => {
  const customer = new Customer(obj);
  try {
    const res = await customer.save();

    return new Promise((resolve, reject) => {
      sign(
        { name: res.name, id: res._id, userType: "customer" },
        config.JWT_SECRET,
        (err: any, token: any) => {
          if (err) reject(err);
          else resolve(token);
        }
      );
    });
  } catch (error) {
    throw Error("User SignUp Failed");
  }
};
export default signup;
