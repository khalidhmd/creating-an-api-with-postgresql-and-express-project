import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import db from "./database";

const app: express.Application = express();

app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World 3 !");
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`starting app on: ${process.env.PORT || 3000}`);
});
