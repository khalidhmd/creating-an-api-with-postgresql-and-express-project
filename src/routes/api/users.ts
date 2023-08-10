import express from "express";
import { UserModel } from "../../models/User";
import jwt from "jsonwebtoken";

const users = express.Router();

//users route `index`
users.get("/", async (req, res) => {
  try {
    const user_list = await UserModel.index();
    res.json(user_list);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//users route `show`
users.get("/:id", async (req, res) => {
  try {
    const user_id = parseInt(req.params["id"]);
    const user = await UserModel.show(user_id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

//users route `create`
users.post("/", async (req, res) => {
  try {
    const u = req.body;
    const user = await UserModel.create(u);
    const token = jwt.sign({ user }, process.env.TOKEN_SECRET + "");
    res.json(token);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default users;
