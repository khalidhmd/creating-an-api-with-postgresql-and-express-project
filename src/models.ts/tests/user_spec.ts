import { userType, UserModel } from "../User";

const user = new UserModel();

describe("UserModel tests", () => {
  it("should have an index() method", () => {
    expect(user.index).toBeDefined();
  });
  it("index method should return a list of users", async () => {
    const result = await user.index();
    expect(result).toEqual([]);
  });
});
