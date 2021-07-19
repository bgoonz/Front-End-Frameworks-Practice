const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("combined"));
app.set("port", 8081);

app.get("/api/one", (req, res) => {
  const randomDelay = Math.floor(Math.random() * 2000 + 300);
  setTimeout(() => {
    res.json({ value: 1 });
  }, randomDelay);
});

app.get("/api/two", (req, res) => {
  const randomDelay = Math.floor(Math.random() * 2000 + 300);
  setTimeout(() => {
    res.json({ value: 2 });
  }, randomDelay);
});

app.get("/api/three", (req, res) => {
  const randomDelay = Math.floor(Math.random() * 2000 + 300);
  setTimeout(() => {
    res.json({ value: 3 });
  }, randomDelay);
});

app.listen(app.get("port"), () => {
  console.log("App Started");
});
