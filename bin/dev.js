//wbpack вызов
//запуск компеляции
//перезапуск компеляции при изменении кода
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const nodemon = require("nodemon");
const path = require("path");

const compiller = webpack(webpackConfig); //создаем компайлер
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
