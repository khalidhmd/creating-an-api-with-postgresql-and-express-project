import express from "express";
import { ProductModel } from "../../models/Product";
import { verifyAuthToken } from "../../middleware/authMiddleware";

const products = express.Router();

//products route `index`
products.get("/", async (req, res) => {
  try {
    const product_list = await ProductModel.index();
    res.json(product_list);
  } catch (error: any) {
    //Catch clause variable type annotation must be 'any' or 'unknown' if specified.ts(1196)
    res.status(500).json(error.message);
  }
});

//products route `show`
products.get("/:id", async (req, res) => {
  try {
    const user_id = parseInt(req.params["id"]);
    const user = await ProductModel.show(user_id);
    res.json(user);
  } catch (error: any) {
    //Catch clause variable type annotation must be 'any' or 'unknown' if specified.ts(1196)
    res.status(500).json(error.message);
  }
});

//products route `create`
products.post("/", verifyAuthToken, async (req, res) => {
  try {
    const p = req.body;
    const product = await ProductModel.create(p);
    res.json(product);
  } catch (error: any) {
    // Catch clause variable type annotation must be 'any' or 'unknown' if specified.ts(1196)
    res.status(500).json(error.message);
  }
});

export default products;
