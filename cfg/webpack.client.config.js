const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack"); //подключение @hot-loader/react-dom
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

//для поиска ошибок
function setupDevtool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}
module.exports = {
  //использование .jsx и тд
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom", //подключение @hot-loader/react-dom
    },
  },
  //продакшин/девлеопмент
  mode: NODE_ENV || "development",
  // откуда начинать
  entry: [
    path.resolve(__dirname, "../src/client/index.jsx"),
    "webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr", //запрос к серверу hmr (путь)подключение @hot-loader/react-dom
  ],
  //куда складвать
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    publicPath: "/static/", //подключение @hot-loader/react-dom
  },
  //настройка лоадера
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/, // расширения обрабатваемых файлов
        use: ["ts-loader"], //обработчик
        exclude: /node_modules/,
      },
    ],
  },

  //для поиска ошибок
  devtool: setupDevtool(),
  plugins: IS_DEV
    ? [
        new CleanWebpackPlugin(), //подключение @hot-loader/react-dom
        new HotModuleReplacementPlugin(), //подключение @hot-loader/react-dom
      ]
    : [],
};

//подключение @hot-loader/react-dom
