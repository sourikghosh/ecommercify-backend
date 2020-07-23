import { sign } from "jsonwebtoken";
import { Customer } from "../../models/Customer";
import { ICustomer } from "../../models/interfaces/ICustomer";
import config from "../../../util/config";
class customer {
  async signup(obj: ICustomer) {
    const customer = new Customer(obj);
    try {
      const res = await customer.save();

      return new Promise((resolve, reject) => {
        sign({ name: res.name,email:res.email }, config.JWT_SECRET, (err: any, token: any) => {
          if (err) reject(err);
          else resolve(token);
        });
      });
    } catch (error) {
      throw Error("User SignUp Failed");
    }
  }
  async login() {}
  async getById() {}
  async get() {}
  async update() {}
  async remove() {}
  async blacklist() {}
}
const cust = new customer();
export { cust as default };
