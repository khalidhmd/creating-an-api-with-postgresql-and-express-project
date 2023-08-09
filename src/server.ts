import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import routes from "./routes";

import dotenv from "dotenv";
dotenv.config();
console.log(process.env);

const app: express.Application = express();

app.use(bodyParser.json());

app.use("/api", routes);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World 5 !");
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`starting app on: ${process.env.PORT || 3000}`);
});
