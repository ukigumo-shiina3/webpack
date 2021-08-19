const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // distディレクトリ: バンドルした後のディレクトリで使われる
    filename: "bundle.js",
  },
};
