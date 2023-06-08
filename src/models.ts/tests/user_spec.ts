import { userType, UserModel } from "../User";

const user = new UserModel();

describe("UserModel tests", () => {
  beforeAll(async () => {
    user.clear();
  });
  it("should have an index() method", () => {
    expect(user.index).toBeDefined();
  });

  it("should have an show() method", () => {
    expect(user.show).toBeDefined();
  });

  it("should have an create() method", () => {
    expect(user.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(user.delete).toBeDefined();
  });

  it("index method should return a list of users", async () => {
    const res = await user.index();

    expect(res).toEqual([]);
  });
  it("should add a user", async () => {
    const result = await user.create({
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
