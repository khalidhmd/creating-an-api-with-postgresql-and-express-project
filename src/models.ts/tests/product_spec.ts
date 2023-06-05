import { ProductModel, productType } from "../Product";

const product = new ProductModel();

describe("ProductModel tests", () => {
  it("should have an index() method", () => {
    expect(product.index).toBeDefined();
  });
  it("index method should return a list of products", async () => {
    const result = await product.index();
    expect(result).toEqual([]);
  });
});
