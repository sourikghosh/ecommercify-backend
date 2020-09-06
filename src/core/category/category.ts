import { Types } from "mongoose";
import { Category } from "models/Category";
class category {
  categoryQueryBuilder(categoryId: string) {
    let query;
    if (Types.ObjectId.isValid(categoryId)) {
      query = { _id: categoryId };
    } else {
      query = { name: categoryId.toLowerCase() };
    }
    return query;
  }

  async create(name: string) {
    try {
      const category = new Category({ name: name.toLowerCase() });
      const result = await category.save();
      if (!result) throw Error("Internal server error");
      return result;
    } catch (error) {
      throw Error(error);
    }
  }
  async addProducts(categoryId: string, productIds: [any]) {
    let query = this.categoryQueryBuilder(categoryId);
    try {
      const result = await Category.updateOne(query, { productIds });
      if (!result) throw Error("Product not added");
      return true;
    } catch (error) {
      throw Error(error);
    }
  }
  async getProductByCategory(
    categoryId: string,
    perPage: number,
    pageNo: number
  ) {
    let query;
    if (Types.ObjectId.isValid(categoryId)) {
      query = { _id: categoryId };
    } else {
      query = { name: categoryId };
    }
    try {
      const products = Category.find(query)
        .select({ productId: 1 })
        .skip(perPage * (pageNo - 1))
        .limit(perPage)
        .populate("Product");
      if (!products) throw Error("Product not found");
      return products;
    } catch (error) {
      throw Error(error);
    }
  }
  async get(categoryId: string) {
    const query = this.categoryQueryBuilder(categoryId);
    try {
      const categories = Category.find(query);
      if (!categories) throw Error("Categories not found");
      return categories;
    } catch (error) {
      throw Error(error);
    }
  }
  async update(categoryId: string, categoryName: string) {
    const query = this.categoryQueryBuilder(categoryId);
    try {
      const result = Category.findOneAndUpdate(query, {
        name: categoryName.toLowerCase(),
      });
      if (!result) throw Error("Update not occurs");
      return true;
    } catch (error) {
      throw Error(error);
    }
  }
  async delete(categoryId: string) {
    const query = this.categoryQueryBuilder(categoryId);
    try {
      const result = await Category.findOneAndDelete(query).select({ name: 1 });
      if (!result) throw Error("Category not found");
      return result;
    } catch (error) {
      throw Error("Category not Found");
    }
  }
}
export default new category();
