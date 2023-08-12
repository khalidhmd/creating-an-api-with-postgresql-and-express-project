import { userType, UserModel } from "../User";
// import dotenv from "dotenv";
// dotenv.config();
import bcrypt from "bcrypt";
const user = new UserModel();

describe("UserModel tests", () => {
  beforeAll(async () => {
    await user.clear();
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
    expect(user.delete).toBeDefined();
  });

  it("index method should return a list of users", async () => {
    const res = await UserModel.index();

    expect(res).toEqual([]);
  });
  it("should add a user", async () => {
    const hash = bcrypt.hashSync(
      "passwd" + process.env.BRYPT_PASSWORD,
      parseInt(process.env.SALT_ROUNDS || "")
    );
    const result = await UserModel.create({
      first_name: "khalid",
      last_name: "hasan",
      email: "em@ail.com",
      password: "passwd",
    });
    expect({ ...result }).toEqual({
      first_name: "khalid",
      last_name: "hasan",
      email: "em@ail.com",
      password: result.password,
      id: result.id,
    });
    await user.delete("em@ail.com");
  });
});
