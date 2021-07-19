const express = require("express");
const morgan = require("morgan");
const app = express();

const DATA = {
  id: "123",
  title: "example",
};

app.use(morgan("combined"));
app.set("port", 8081);

app.get("/api/jsonp", (req, res) => {
  console.log("JSONP request");
  const callback = req.query.callback || "callback";
  const paddedResponse = callback + "(" + JSON.stringify(DATA) + ")";
  res.type("application/javascript");
  res.send(paddedResponse);
});

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(200);
});

app.listen(app.get("port"), () => {
  console.log("App Started");
});
