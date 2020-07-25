import { sign } from "jsonwebtoken";
import { Customer } from "../../models/Customer";
import { ICustomer } from "../../models/interfaces/ICustomer";
import config from "../../../util/config";
import util from "../../../lib/util";
import { customerIdQueryBuilder } from "../../db/helper";
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
    let customerObj;
    try {
      const customerCount = await Customer.countDocuments({});
      if (perPage * pageNo > customerCount) {
        customerObj = {
          customer: ["0"],
          customerCount: ["0"],
        };
      } else {
        const customer = await Customer.find()
          .skip((pageNo - 1) * perPage)
          .limit(perPage)
          .select({
            _id: 1,
            name: 1,
          });
        customerObj = {
          customer,
          customerCount,
        };
        if (!customer) throw Error("Customer not found");
      }
      return customerObj;
    } catch (error) {
      throw Error("Customer not found");
    }
  }
  /**
   *
   * @param id
   * @param fields
   */
  async update(id: any, fields: any) {
    let query = customerIdQueryBuilder(id);
    try {
      const customer = await Customer.updateOne(query, fields);
      return customer;
    } catch (error) {
      throw Error("Customer not found");
    }
  }
  async remove(id: any) {
    const query = customerIdQueryBuilder(id);
    try {
      const res = await Customer.deleteOne(query);
      if (res.deletedCount) {
        return res.deletedCount;
      } else {
        throw Error("Customer not found");
      }
    } catch (error) {
      throw Error("Customer deletion error");
    }
  }
}
const cust = new customer();
export { cust as default };
