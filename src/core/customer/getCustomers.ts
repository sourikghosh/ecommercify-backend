import  Customer  from "models/Customer";
const get = async (perPage: number, pageNo: number) => {
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
};
export default get;
