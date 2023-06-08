import { productType, ProductModel } from "../Product";

const product = new ProductModel();

describe("ProductModel tests", () => {
  beforeAll(async () => {
    product.clear();
  });
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
    expect({ ...result }).toEqual({
      name: "product 1",
      price: 10,
      category: "category 1",
      id: result.id,
    });

    await product.delete(1);
  });
});
