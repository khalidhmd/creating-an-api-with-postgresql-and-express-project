import { userType, UserModel } from "../User";

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
      password: "passwd",
      id: result.id,
    });
    await user.delete("em@ail.com");
  });
});
