require("dotenv").config();
const express = require("express");
var app = express();
const mongoose = require("mongoose");
const controller = require("controllers");
var cors = require("cors");

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000);

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
