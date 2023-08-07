import express from "express";
import users from "./api/users";
import products from "./api/products";
import orders from "./api/orders";

const routes = express.Router();

//this route is used to check, from client app, that the server is running and accessible
routes.get("/", (req, res) => {
  res.json({ message: "api connected..." });
});

//users route
routes.use("/users", users);

//products route
routes.use("/products", products);

//orders route
routes.use("/orders", orders);

export default routes;
