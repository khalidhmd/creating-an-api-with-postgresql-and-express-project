import express from "express";
import { UserModel } from "../../models/User";

const users = express.Router();

//users route `index`
users.get("/", async (req, res) => {
  const user_list = await UserModel.index();
  res.json(user_list);
});

//users route `show`
users.get("/:id", async (req, res) => {
  const user_id = parseInt(req.params["id"]);
  const user = await UserModel.show(user_id);
  res.json(user);
});

//users route `show`
users.post("/", async (req, res) => {
  const u = req.body;
  const user = await UserModel.create(u);
  res.json(user);
});

export default users;
