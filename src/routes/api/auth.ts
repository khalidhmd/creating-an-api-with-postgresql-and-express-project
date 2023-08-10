import express from "express";
import { UserModel } from "../../models/User";
import jwt from "jsonwebtoken";

const auth = express.Router();

//auth route
auth.post("/", async (req, res) => {
  try {
    const u = req.body;
    const user = await UserModel.auth(u.email, u.password);
    if (user == null) throw new Error("bad data");
    const token = jwt.sign({ user }, process.env.TOKEN_SECRET + "");
    res.json(token);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default auth;
