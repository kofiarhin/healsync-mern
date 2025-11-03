const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

// setup middleware
app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next) => {
  return res.json({ message: "hello world" });
});

app.get("/api/health", async (req, res, next) => {
  return res.json({ message: "ok" });
});
module.exports = app;
