import { orderType, OrderModel } from "../Orders";

const order = new OrderModel();

describe("OrderModel tests", () => {
  it("should have an index() method", () => {
    expect(order.index).toBeDefined();
  });
  it("index method should return a list of orders", async () => {
    const result = await order.index();
    expect(result).toEqual([]);
  });
});
