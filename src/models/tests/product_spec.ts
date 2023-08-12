import { productType, ProductModel } from "../Product";

describe("ProductModel tests", () => {
  beforeAll(async () => {
    await ProductModel.clear();
  });
  it("should have an index() method", () => {
    expect(ProductModel.index).toBeDefined();
  });

  it("should have an show() method", () => {
    expect(ProductModel.show).toBeDefined();
  });

  it("should have an create() method", () => {
    expect(ProductModel.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(ProductModel.delete).toBeDefined();
  });

  it("index method should return a list of product", async () => {
    const res = await ProductModel.index();
    expect(res).toEqual([]);
  });
  it("should add a product", async () => {
    const result = await ProductModel.create({
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

    await ProductModel.delete(1);
  });
});
