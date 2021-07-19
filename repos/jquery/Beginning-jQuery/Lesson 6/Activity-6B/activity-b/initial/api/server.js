const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", 8081);

app.post("/api/contact", (req, res) => {
  console.log("Contact form submitted!");
  console.log(JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(app.get("port"), () => {
  console.log("App Started");
});
