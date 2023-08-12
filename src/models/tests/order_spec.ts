import { orderType, OrderModel } from "../Orders";
import { UserModel } from "../User";
const user = new UserModel();
const order = new OrderModel();

describe("OrderModel tests", () => {
  beforeAll(async () => {
    await OrderModel.clear();
    await user.clear();
  });
  it("should have an index() method", () => {
    expect(OrderModel.index).toBeDefined();
  });

  it("index method should return a list of order", async () => {
    const res = await OrderModel.index(1);
    expect(res).toEqual([]);
  });

  it("should have an create() method", () => {
    expect(OrderModel.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(OrderModel.delete).toBeDefined();
  });
  it("should add an order", async () => {
    const u = await UserModel.create({
      first_name: "fname",
      last_name: "lname",
      email: "e@mail",
      password: "passwd",
    });
    const result = await OrderModel.create({
      order_date: new Date(),
      user_id: u.id || 1,
      status: true,
    });
    expect({ ...result, id: 1 }).toEqual({
      order_date: result.order_date,
      user_id: u.id || 1,
      status: true,
      id: 1,
    });

    await OrderModel.delete(1);
    await user.delete("e@mail");
  });
});
