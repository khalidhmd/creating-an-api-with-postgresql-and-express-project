import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import routes from "./routes";

import dotenv from "dotenv";
dotenv.config();

const app: express.Application = express();

app.use(bodyParser.json());

// register api routes
app.use("/api", routes);

// check if server is running
app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

// start server
app.listen(process.env.PORT || 3000, function () {
  console.log(`starting app on: ${process.env.PORT || 3000}`);
});
