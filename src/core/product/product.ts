import { Product } from "../../models/Product";

class product {
  /**
   *
   * @param obj
   * @name Add-Product
   */
  async add(obj: any) {
    try {
      const product = new Product(obj);
      const result = await product.save();
      if (!result) throw Error("Result not found");
      return result;
    } catch (error) {
      throw Error(error);
    }
  }
  /**
   *
   * @param productId
   * @name Find-Product-By-Id
   */
  async getById(productId: string) {
    try {
      const product = await Product.findById(productId).select({ password: 0 }); //check needed
      if (!product) throw Error("Product not found");
      return product;
    } catch (error) {
      throw Error(error);
    }
  }
  /**
   *
   * @param perPage
   * @param pageNo
   * @param name
   * @name FInd-products-using-various-conditions
   */
  async get(perPage: number, pageNo: number, name?: string) {
    try {
      const products = await Product.find({ name })
        .skip(perPage * (pageNo - 1))
        .limit(perPage)
        .select({ _id: 1, title: 1, specifications: 1 });
      if (!products) throw Error("products not found");
      return products;
    } catch (error) {
      throw Error(error);
    }
  }
  /**
   *
   * @param productId
   * @param obj
   * @name Update-Product-by-Id
   */
  async updateById(productId: string, obj: any) {
    try {
      const product = Product.findOneAndUpdate({ _id: productId }, obj).select({
        name: 1,
        title: 1,
      });
      if (!product) throw Error("Product not found");
      return product;
    } catch (error) {
      throw Error(error);
    }
  }
  /**
   *
   * @param productId
   * @name delete-product-by-id
   */
  async deleteById(productId: string) {
    try {
      const product = Product.findOneAndDelete({ _id: productId }).select({
        name: 1,
        title: 1,
      });
      if (!product) throw Error("Product not found");
      return product;
    } catch (error) {
      throw Error("Product Not Found");
    }
  }
}

export default new product();
