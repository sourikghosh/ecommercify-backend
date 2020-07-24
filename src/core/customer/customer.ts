import { sign } from "jsonwebtoken";
import { Customer } from "../../models/Customer";
import { ICustomer } from "../../models/interfaces/ICustomer";
import config from "../../../util/config";
import util from "../../../lib/util";
class customer {
  /**
   *
   * @param obj
   * @name SignUp-Customer
   */
  async signup(obj: ICustomer) {
    const customer = new Customer(obj);
    try {
      const res = await customer.save();

      return new Promise((resolve, reject) => {
        sign(
          { name: res.name, email: res.email },
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
  }
  /**
   *
   * @param username
   * @param password
   * @name login-customer
   */
  async login(username: any, password: string) {
    try {
      let result: ICustomer | any;
      if (util.isEmail(username)) result = await this.getByEmail(username);
      else if (username) {
        result = await this.getByContactno(username);
      } else throw Error("Nothing Given");

      if (result) {
        if (await result.comparePassword(password)) {
          return new Promise((resolve, reject) => {
            sign(
              { name: result.name, email: result.email },
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
  }
  /**
   *
   * @param contactNo
   * @name get-Customer-By-contactNo
   */
  async getByContactno(contactNo: string) {
    try {
      const customer = await Customer.findOne({ contactNo });
      if (customer) {
        return customer;
      } else throw Error("Customer Not Found");
    } catch {
      throw Error("Customer Not Found");
    }
  }
  /**
   *
   * @param email
   * @name get-Customer-by-Email
   */
  async getByEmail(email: string) {
    try {
      const customer = await Customer.findOne({ email });
      if (customer) return customer;
      else throw Error("Customer Not Found");
    } catch (error) {
      throw Error("Customer not Found");
    }
  }
  async getById(id: string) {
    try {
      const customer = await Customer.findById(id);
      if (customer) return customer;
    } catch {
      throw Error("Customer not found");
    }
  }
  async get(perPage: number, pageNo: number) {
    try {
      const customerCount = await Customer.count({});
      const customer = await Customer.find()
        .skip((pageNo - 1) * perPage)
        .limit(perPage);
      const customerObj = {
        customer,
        customerCount,
      };
      if (customer) return customerObj;
      else throw Error("Customer not found");
    } catch (error) {
      throw Error("Customer not found");
    }
  }
  async update() {}
  async remove() {}
  async blacklist() {}
}
const cust = new customer();
export { cust as default };
