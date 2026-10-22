//wbpack вызов
//запуск компеляции
//перезапуск компеляции при изменении кода
const webpack = require("webpack");
// const webpackConfig = require("../webpack.config");
const [clientConfig, serverConfig] = require("../webpack.config"); //2.3
const nodemon = require("nodemon");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware"); //2.3
const webpackHotMiddleware = require("webpack-hot-middleware"); //2.3
const express = require("express");

const hmrServer = express(); //2.3
const clientCompiller = webpack(clientConfig); //2.3

hmrServer.use(
  webpackDevMiddleware(clientCompiller, {
    publicPath: clientConfig.output.publicPath,
    serverSideRender: true, //доп
    noInfo: true, //в косоль только нужная инфа
    watchOptions: {
      ignore: /dist/, //при изменении папки - приложение не пересобирается
    },
    writeToDisk: true, //позволяет записывать бандл в /dist
    stats: "errors-only", //выключает логи укспешной компиляции
  }),
); //2.3

//2,3 подключение к hmr серверу webpackHotMiddleware
hmrServer.use(
  webpackHotMiddleware(clientCompiller, {
    path: "/static/__webpack_hmr", //путь отдачи данных hmr
  }),
);
//2,3 запуск сервера
hmrServer.listen(3001, () => {
  console.log("HMR sever successfuly started");
});

// const compiller = webpack(webpackConfig); //создаем компайлер
const compiller = webpack(serverConfig); //2.3
//холодный старт
compiller.run((err) => {
  if (err) {
    console.log("Compilation failed: ", err);
  }

  compiller.watch({}, (err) => {
    if (err) {
      console.log("Compilation failed: ", err);
    }
    console.log("Compilation was succesfully");
  });
  //вызов nodemon
  nodemon({
    script: path.resolve(__dirname, "../dist/server/server.js"), //путь сервера
    watch: [
      path.resolve(__dirname, "../dist/server"),
      path.resolve(__dirname, "../dist/client"),
    ], //директория изменений
  });
});
