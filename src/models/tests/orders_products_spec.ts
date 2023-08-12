import { orderType, OrderModel } from "../Orders";
import { ProductModel } from "../Product";
import { OrderProductModel } from "../OrderProductModel";
import { UserModel } from "../User";

const order_product = new OrderProductModel();
const user = new UserModel();

describe("OrderProductModel tests", () => {
  beforeAll(async () => {
    await OrderModel.clear();
    await user.clear();
    await order_product.clear();
    await ProductModel.clear();
  });
  it("should have an index() method", () => {
    expect(OrderModel.index).toBeDefined();
  });

  it("index method should return a list of order_product", async () => {
    const res = await order_product.index();
    expect(res).toEqual([]);
  });

  it("should have an create() method", () => {
    expect(order_product.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(order_product.delete).toBeDefined();
  });
  it("should add an order_product", async () => {
    const p = await ProductModel.create({
      name: "product 1",
      price: 10,
      category: "category 1",
    });

    const u = await UserModel.create({
      first_name: "fname",
      last_name: "lname",
      email: "e@mail",
      password: "passwd",
    });

    const o = await OrderModel.create({
      order_date: new Date(),
      user_id: u.id || 1,
      status: true,
    });

    const result = await order_product.create({
      order_id: o.id || 1,
      product_id: p.id || 1,
      quantity: 10,
    });
    expect(result).toEqual({
      order_id: o.id || 1,
      product_id: p.id || 1,
      quantity: 10,
      id: result.id,
    });

    await user.delete("e@mail");

    await ProductModel.delete(1);
    await order_product.delete(1);
    await OrderModel.delete(1);
  });
});
