const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const { DefinePlugin } = require("webpack");

const NODE_ENV = process.env.NODE_ENV;
//глобальный стили будут заканчиваться
const CLOBAL_CSS_REGEXP = /\.global\.css$/;
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
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
  },
  externals: [nodeExternals()], //подключение extenals
  //настройка лоадера
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/, // расширения обрабатваемых файлов
        use: ["ts-loader"], //обработчик
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "../customTemplates"),
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
        ],
        exclude: CLOBAL_CSS_REGEXP, //
      },
      {
        test: CLOBAL_CSS_REGEXP,
        use: ["css-loader"],
      },
    ],
  },
  //выключение минмизации
  optimization: {
    minimize: false,
    minimizer: [],
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      path.resolve(__dirname, "../customTemplates"),
    ]),
    new DefinePlugin({
      "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'`,
    }),
  ],
};
