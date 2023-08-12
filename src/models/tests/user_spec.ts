import { userType, UserModel } from "../User";

import bcrypt from "bcrypt";
const user = new UserModel();

describe("UserModel tests", () => {
  beforeAll(async () => {
    // await UserModel.clear();
  });
  it("should have an index() method", () => {
    expect(UserModel.index).toBeDefined();
  });

  it("should have an show() method", () => {
    expect(UserModel.show).toBeDefined();
  });

  it("should have an create() method", () => {
    expect(UserModel.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(UserModel.delete).toBeDefined();
  });

  it("index method should return a list of users", async () => {
    const res = await UserModel.index();

    expect(res).toEqual([]);
  });
  it("should add a user", async () => {
    const result = await UserModel.create({
      first_name: "khalid",
      last_name: "hasan",
      email: "em1@ail.com",
      password: "passwd",
    });
    expect({ ...result }).toEqual({
      first_name: "khalid",
      last_name: "hasan",
      email: "em1@ail.com",
      password: result.password,
      id: result.id,
    });
    await UserModel.delete("em1@ail.com");
  });
});
