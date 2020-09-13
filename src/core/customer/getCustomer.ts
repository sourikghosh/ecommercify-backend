import Customer from "models/Customer";
export const getByContactno = async (contactNo: string) => {
  try {
    const customer = await Customer.findOne({ contactNo });
    if (customer) {
      return customer;
    } else throw Error("Customer Not Found");
  } catch {
    throw Error("Customer Not Found");
  }
};
/**
 *
 * @param email
 * @name get-Customer-by-Email
 */
export const getByEmail = async (email: string) => {
  try {
    const customer = await Customer.findOne({ email });
    if (customer) return customer;
    else throw Error("Customer Not Found");
  } catch (error) {
    throw Error("Customer not Found");
  }
};
export const getById = async (id: string) => {
  try {
    const customer = await Customer.findById(id);
    if (customer) return customer;
  } catch {
    throw Error("Customer not found");
  }
};
