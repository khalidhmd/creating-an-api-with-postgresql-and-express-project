import express from "express";

const users = express.Router();

// serve original images (no processing) from images folder
users.get("/", async (req, res) => {
  res.send("Users route");
});

export default users;
