import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../../models/User";

const auth = express.Router();

//auth route
auth.post("/", async (req, res) => {
  const u = req.body;
  const user = await UserModel.auth(u.email, u.password);
  res.json(user);
});

export default auth;
