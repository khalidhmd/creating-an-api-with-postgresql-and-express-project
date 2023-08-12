import axios from "axios";

const base_url = "http://localhost:3000/api/orders";

import { orderType, OrderModel } from "../../models/Orders";
import { userType, UserModel } from "../../models/User";

describe("orders route tests", () => {
  let u: userType;
  let order: orderType;
  beforeAll(async () => {
    u = await UserModel.create({
      first_name: "fname",
      last_name: "lname",
      email: "e2@mail",
      password: "passwd",
    });
  });

  it("should create order ", async () => {
    const res = await axios.post(
      base_url,
      {
        order_date: new Date(),
        user_id: u.id || 1,
        status: true,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoia2hhbGlkNSIsImxhc3RfbmFtZSI6Imhhc2FuNSIsInBhc3N3b3JkIjoiJDJiJDEwJHh0Q1gyNE9JSEVEbkJxZFFjRXFLaC5qUjBmMEtSUHlWeVl0Zi5IeWRPcUE1LlM2LnhyajE2IiwiZW1haWwiOiJlbUBhaWwuY29tNSJ9LCJpYXQiOjE2OTE4NjE5ODF9.URgtqFT1zw9ojq_0snq31S1F1dLnAgX3_3gan8DotFM",
        },
      }
    );

    order = res.data;
    expect(order).toEqual({
      order_date: order.order_date,
      user_id: u.id || 1,
      status: true,
      id: order.id,
    });
  });

  it("should list all orders of a user", async () => {
    const res = await axios.get(
      base_url + "/" + u.id,

      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoia2hhbGlkNSIsImxhc3RfbmFtZSI6Imhhc2FuNSIsInBhc3N3b3JkIjoiJDJiJDEwJHh0Q1gyNE9JSEVEbkJxZFFjRXFLaC5qUjBmMEtSUHlWeVl0Zi5IeWRPcUE1LlM2LnhyajE2IiwiZW1haWwiOiJlbUBhaWwuY29tNSJ9LCJpYXQiOjE2OTE4NjE5ODF9.URgtqFT1zw9ojq_0snq31S1F1dLnAgX3_3gan8DotFM",
        },
      }
    );

    const data = res.data;

    expect(order).toEqual(data[0]);
  });

  afterAll(async () => {
    await OrderModel.clear();
    await UserModel.clear();
  });
});
