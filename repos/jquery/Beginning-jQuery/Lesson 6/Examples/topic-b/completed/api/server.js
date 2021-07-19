const db = require("./db");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", 8081);

app.get("/api/e", (req, res) => {
  const term = req.query.term.toUpperCase();
  const result = db.E_ENTRIES[term];
  res.json(result);
});

app.post("/api/f", (req, res) => {
  const term = req.body.term.toUpperCase();
  let results = [];
  for (let entry in db.F_ENTRIES) {
    if (entry.startsWith(term)) {
      const result = db.F_ENTRIES[entry];
      results.push(result);
    }
  }
  res.json(results);
});

app.get("/api/g", (req, res) => {
  setTimeout(() => {
    res.json({ value: 1 });
  }, 2000);
});

app.listen(app.get("port"), () => {
  console.log("App Started");
});
