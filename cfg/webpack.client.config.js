const path = require("path");
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
  },
  //продакшин/девлеопмент
  mode: NODE_ENV || "development",
  // откуда начинать
  entry: path.resolve(__dirname, "../src/client/index.jsx"),
  //куда складвать
  output: {
    path: path.resolve(__dirname, "../dist/client.js"),
    filename: "client.js",
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
};
