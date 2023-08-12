import axios from "axios";
import jwt from "jsonwebtoken";
const base_url = "http://localhost:3000/api/users";

import { userType, UserModel } from "../../models/User";

describe("users route tests", () => {
  let user: userType;
  beforeAll(async () => {
    user = await UserModel.create({
      first_name: "khalid",
      last_name: "hasan",
      email: "test1@email.com",
      password: "passwd1",
    });
  });
  it("should create user ", async () => {
    const res = await axios.post(
      base_url,
      {
        first_name: "khalid",
        last_name: "hasan",
        email: "auth@email.com",
        password: "passwd1",
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoia2hhbGlkNSIsImxhc3RfbmFtZSI6Imhhc2FuNSIsInBhc3N3b3JkIjoiJDJiJDEwJHh0Q1gyNE9JSEVEbkJxZFFjRXFLaC5qUjBmMEtSUHlWeVl0Zi5IeWRPcUE1LlM2LnhyajE2IiwiZW1haWwiOiJlbUBhaWwuY29tNSJ9LCJpYXQiOjE2OTE4NjE5ODF9.URgtqFT1zw9ojq_0snq31S1F1dLnAgX3_3gan8DotFM",
        },
      }
    );

    const data = res.data;
    jwt.verify(data, process.env.TOKEN_SECRET + "");
  });

  it("should show user", async () => {
    const res = await axios.get(
      base_url + "/" + user.id,

      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoia2hhbGlkNSIsImxhc3RfbmFtZSI6Imhhc2FuNSIsInBhc3N3b3JkIjoiJDJiJDEwJHh0Q1gyNE9JSEVEbkJxZFFjRXFLaC5qUjBmMEtSUHlWeVl0Zi5IeWRPcUE1LlM2LnhyajE2IiwiZW1haWwiOiJlbUBhaWwuY29tNSJ9LCJpYXQiOjE2OTE4NjE5ODF9.URgtqFT1zw9ojq_0snq31S1F1dLnAgX3_3gan8DotFM",
        },
      }
    );

    const data = res.data;
    expect(user).toEqual(data);
  });
  it("should list all users", async () => {
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

    expect(user).toEqual(data[0]);
  });

  afterAll(async () => {
    await UserModel.clear();
  });
});
