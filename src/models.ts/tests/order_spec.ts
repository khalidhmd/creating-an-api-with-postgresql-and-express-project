import { orderType, OrderModel } from "../Orders";

const order = new OrderModel();

describe("OrderModel tests", () => {
  it("should have an index() method", () => {
    expect(order.index).toBeDefined();
  });

  it("index method should return a list of order", async () => {
    const res = await order.index();
    expect(res).toEqual([]);
  });

  it("should have an create() method", () => {
    expect(order.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(order.delete).toBeDefined();
  });
  it("should add an order", async () => {
    const result = await order.create({
      order_date: new Date(),
      user_id: 1,
      status: true,
    });
    expect({ ...result, id: 1 }).toEqual({
      order_date: result.order_date,
      user_id: 1,
      status: true,
      id: 1,
    });

    await order.delete(1);
  });
});
