const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("./"));

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
