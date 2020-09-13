import { ObjectID } from "mongodb";
import util from "../src/util/util";
describe("email check", () => {
  it("Should be valid email", () => {
    const email = "sumandas.workplace@gmail.com";
    expect(util.isEmail(email)).toBeTruthy();
  });
  it("Shouldn't been valid email", () => {
    const email = "suman@gmail";
    const email1 = "su#man@maill";
    expect(util.isEmail(email)).toBeFalsy();
    expect(util.isEmail(email1)).toBeFalsy();
  });
});
describe("ObjectID check", () => {
  it("Should be valid", () => {
    const objId = new ObjectID();
    expect(util.isObjectId(String(objId))).toBeTruthy();
  });
  it("Shouldn't been valid", () => {
    expect(util.isObjectId("Hellollldk")).toBeFalsy();
  });
});
