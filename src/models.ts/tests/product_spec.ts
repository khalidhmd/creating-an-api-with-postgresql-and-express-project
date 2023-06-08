import { productType, ProductModel } from "../Product";

// import { Pool } from "pg";


// const db = new Pool({host: 'localhost',
// database: 'udaci_db_test',
// user: 'test_user',
// password: 'passwd',})
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

  
  
});
