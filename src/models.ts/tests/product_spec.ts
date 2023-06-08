import { productType, ProductModel } from "../Product";

const product = new ProductModel();

describe("ProductModel tests", () => {
  it("should have an index() method", () => {
    expect(product.index).toBeDefined();
  });

  it("should have an show() method", () => {
    expect(product.show).toBeDefined();
  });

  it("should have an create() method", () => {
    expect(product.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(product.delete).toBeDefined();
  });

  it("index method should return a list of product", async () => {
    const res = await product.index();
    expect(res).toEqual([]);
  });
  it("should add a product", async () => {
    const result = await product.create({
      name: "product 1",
      price: 10,
      category: "category 1",
    });
    expect({ ...result, id: 1 }).toEqual({
      name: "product 1",
      price: 10,
      category: "category 1",
      id: 1,
    });

    await product.delete(1);
  });
});
