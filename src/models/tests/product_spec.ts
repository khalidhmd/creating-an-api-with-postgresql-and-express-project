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

  it("should return a list of product", async () => {
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
  });
  it("should show a product", async () => {
    const result = await ProductModel.create({
      name: "product 2",
      price: 20,
      category: "category 2",
    });
    const product = await ProductModel.show(result.id || 1);
    expect({ ...product }).toEqual({ ...result });
  });

  afterAll(async () => {
    await ProductModel.clear();
  });
});
