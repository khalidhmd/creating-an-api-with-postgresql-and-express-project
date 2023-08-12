import axios from "axios";
import jwt from "jsonwebtoken";
const base_url = "http://localhost:3000/api/auth";

import { userType, UserModel } from "../User";
import { configDotenv } from "dotenv";

describe("auth route tests", () => {
  it("should authenticate registered user", async () => {
    await UserModel.create({
      first_name: "khalid",
      last_name: "hasan",
      email: "auth@email.com",
      password: "passwd1",
    });

    const res = await axios.post(base_url, {
      email: "auth@email.com",
      password: "passwd1",
    });

    const data = res.data;
    jwt.verify(data, process.env.TOKEN_SECRET + "");
  });
  afterAll(async () => {
    await UserModel.clear();
  });
});
