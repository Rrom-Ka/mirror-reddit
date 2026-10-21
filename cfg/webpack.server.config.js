const path = require("path");
const nodeExternals = require("webpack-node-externals");

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  //только для node.js
  target: "node",
  mode: NODE_ENV || "development",
  //
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()], //подключение extenals
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/, // расширения обрабатваемых файлов
        use: ["ts-loader"], //обработчик
        exclude: /node_modules/,
      },
    ],
  },
  //выключение минмизации
  optimization: {
    minimize: false,
    minimizer: [],
  },
};
