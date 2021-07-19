const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    app: ["./app/main.js"],
  },
  devServer: {
    contentBase: __dirname,
  },
};
