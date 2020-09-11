import util from "util/util";
export const customerIdQueryBuilder = (id: any) => {
  let query;
  if (util.isEmail(id)) {
    query = {
      email: id,
    };
  } else if (util.isObjectId(id)) {
    query = {
      _id: id,
    };
  } else {
    query = {
      contactNo: id,
    };
  }
  return query;
};
