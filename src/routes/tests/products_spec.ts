import axios from "axios";
import jwt from "jsonwebtoken";
const base_url = "http://localhost:3000/api/products";

import { productType, ProductModel } from "../../models/Product";

describe("products route tests", () => {
  let product: productType;
  it("should create product ", async () => {
    const res = await axios.post(
      base_url,
      {
        name: "product 1",
        price: 10,
        category: "category 1",
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoia2hhbGlkNSIsImxhc3RfbmFtZSI6Imhhc2FuNSIsInBhc3N3b3JkIjoiJDJiJDEwJHh0Q1gyNE9JSEVEbkJxZFFjRXFLaC5qUjBmMEtSUHlWeVl0Zi5IeWRPcUE1LlM2LnhyajE2IiwiZW1haWwiOiJlbUBhaWwuY29tNSJ9LCJpYXQiOjE2OTE4NjE5ODF9.URgtqFT1zw9ojq_0snq31S1F1dLnAgX3_3gan8DotFM",
        },
      }
    );

    product = res.data;
    expect(product).toEqual({
      name: "product 1",
      price: 10,
      category: "category 1",
      id: product.id,
    });
  });

  it("should show a product", async () => {
    const res = await axios.get(
      base_url + "/" + product.id,

      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoia2hhbGlkNSIsImxhc3RfbmFtZSI6Imhhc2FuNSIsInBhc3N3b3JkIjoiJDJiJDEwJHh0Q1gyNE9JSEVEbkJxZFFjRXFLaC5qUjBmMEtSUHlWeVl0Zi5IeWRPcUE1LlM2LnhyajE2IiwiZW1haWwiOiJlbUBhaWwuY29tNSJ9LCJpYXQiOjE2OTE4NjE5ODF9.URgtqFT1zw9ojq_0snq31S1F1dLnAgX3_3gan8DotFM",
        },
      }
    );

    const data = res.data;
    expect(product).toEqual(data);
  });

  it("should list all products", async () => {
    const res = await axios.get(
      base_url,

      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoia2hhbGlkNSIsImxhc3RfbmFtZSI6Imhhc2FuNSIsInBhc3N3b3JkIjoiJDJiJDEwJHh0Q1gyNE9JSEVEbkJxZFFjRXFLaC5qUjBmMEtSUHlWeVl0Zi5IeWRPcUE1LlM2LnhyajE2IiwiZW1haWwiOiJlbUBhaWwuY29tNSJ9LCJpYXQiOjE2OTE4NjE5ODF9.URgtqFT1zw9ojq_0snq31S1F1dLnAgX3_3gan8DotFM",
        },
      }
    );

    const data = res.data;

    expect(product).toEqual(data[0]);
  });

  afterAll(async () => {
    await ProductModel.clear();
  });
});
