import { orderType, OrderModel } from "../Orders";
import { ProductModel } from "../Product";
import { OrderProductModel } from "../OrderProductModel";
import { UserModel } from "../User";

const product = new ProductModel();
const order = new OrderModel();
const order_product = new OrderProductModel();
const user = new UserModel();

describe("OrderModel tests", () => {
  beforeAll(async () => {
    order.clear();
    user.clear();
    order_product.clear();
    product.clear();
  });
  it("should have an index() method", () => {
    expect(order.index).toBeDefined();
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
    const p = await product.create({
      name: "product 1",
      price: 10,
      category: "category 1",
    });

    const u = await user.create({
      first_name: "fname",
      last_name: "lname",
      email: "e@mail",
      password: "passwd",
    });

    const o = await order.create({
      order_date: new Date(),
      user_id: u.id || 1,
      status: true,
    });
    console.log("order", o);
    const result = await order_product.create({
      order_id: o.id || 1,
      product_id: p.id || 1,
      quantity: 10,
    });
    expect(result).toEqual({
      order_id: o.id,
      product_id: p.id,
      quantity: 10,
      id: 1,
    });

    await user.delete("e@mail");

    await product.delete(1);
    await order_product.delete(1);
    await order.delete(1);
  });
});
