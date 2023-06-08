import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import db from "./db";

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`starting app on: ${address}`);
});
