const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("combined"));
app.set("port", 8081);

app.get("/api/slow", (req, res) => {
  console.log("Slow request start");
  setTimeout(() => {
    console.log("Slow request end");
    res.sendStatus(200);
  }, 5000);
});

app.listen(app.get("port"), () => {
  console.log("App Started");
});
