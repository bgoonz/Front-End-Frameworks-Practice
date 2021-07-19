const express = require("express");
const morgan = require("morgan");
const app = express();

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

app.use(morgan("combined"));
app.set("port", 8081);

app.get("/api/x", (req, res) => {
  const result = { x: getRandomInt(0, 100) };
  res.json(result);
});

app.get("/api/y", (req, res) => {
  const result = { y: getRandomInt(0, 100) };
  res.json(result);
});

app.listen(app.get("port"), () => {
  console.log("App Started");
});
