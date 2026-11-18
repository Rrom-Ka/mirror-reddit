const path = require("path");
const webpack = require("webpack");
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack"); //подключение @hot-loader/react-dom
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

//глобальный стили будут заканчиваться
const CLOBAL_CSS_REGEXP = /\.global\.css$/;
//плагины, некоторые будут использованы в прод и дев
const DEV_PLUGINS = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
];
const COMMON_PLUGINS = [
  new DefinePlugin({ "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'` }),
];
//для поиска ошибок в продакшенеа false
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
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "../customTemplates"),
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        exclude: CLOBAL_CSS_REGEXP, //
      },
      {
        test: CLOBAL_CSS_REGEXP,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  //для поиска ошибок
  devtool: setupDevtool(),
  plugins: [
    // ДЛЯ WEBPACK 4: Передаем массив путей напрямую
    new webpack.WatchIgnorePlugin([
      path.resolve(__dirname, "../customTemplates"),
    ]),
    ...(IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS),
  ],
};

//подключение @hot-loader/react-dom
