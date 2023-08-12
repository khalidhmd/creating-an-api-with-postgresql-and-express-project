import express from "express";
import { OrderModel } from "../../models/Orders";
import { verifyAuthToken } from "../../middleware/authMiddleware";

const orders = express.Router();

orders.get("/", async (req, res) => {
  res
    .status(400)
    .json(
      "Please format the request endpoint correctly to include user_id as route param"
    );
});

// list orders for current user
orders.get("/:user_id", async (req, res) => {
  const id = req.params["user_id"];
  try {
    const product_list = await OrderModel.index(parseInt(id));
    res.json(product_list);
  } catch (error: any) {
    // Catch clause variable type annotation must be 'any' or 'unknown' if specified.ts(1196)
    res.status(500).json(error.message);
  }
});

//products route `create`
orders.post("/", verifyAuthToken, async (req, res) => {
  try {
    const p = req.body;
    const product = await OrderModel.create(p);
    res.json(product);
  } catch (error: any) {
    // Catch clause variable type annotation must be 'any' or 'unknown' if specified.ts(1196)
    res.status(500).json(error.message);
  }
});

export default orders;
