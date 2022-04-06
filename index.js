const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/greet", (req, res) => {
  res.send("<h1>Hello Everyone");
});

app.listen(4000, () => {
  console.log("🚀 server up and running");
});