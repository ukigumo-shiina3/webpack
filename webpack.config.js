const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // distディレクトリ: バンドルした後のディレクトリで使われる
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
  },
};
