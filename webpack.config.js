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
  module: {
    rules: [
      {
        test: /\.js$/,
        // 正規表現。拡張子「.js」で終わるファイルをテストする
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            },
          },
        ],
      },
    ],
  },
};
