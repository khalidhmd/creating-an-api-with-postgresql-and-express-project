import express from "express";

const orders = express.Router();

// serve original images (no processing) from images folder
orders.get("/", async (req, res) => {
  res.send("Orders route");
});

export default orders;
