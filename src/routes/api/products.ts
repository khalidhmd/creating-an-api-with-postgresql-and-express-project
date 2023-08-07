import express from "express";

const products = express.Router();

// serve original images (no processing) from images folder
products.get("/", async (req, res) => {
  res.send("Products route");
});

export default products;
