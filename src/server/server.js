import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemlate } from "./indexTemlate";
import axios from "axios";

import { App } from "../App";
import React from "react";
//инициализируме экспресс
const app = express();

app.use("/static", express.static("./dist/client"));

//устаналиваием листененр на сервер get
app.get("/", (req, res) => {
  // res.send(indexTemlate(ReactDOM.renderToString(App())));
  res.send(indexTemlate(ReactDOM.renderToString(<App />)));
});
//путь, возврата приложения после аутенфикации
app.get("/auth", (req, res) => {
  //отпарвляем запрос на получени токена исп axios
  axios
    .post(
      "https://github.com/login/oauth/access_token",
      `client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      },
    )
    //обработка access_tocen -> рендер ручки токена
    .then(({ data }) => {
      //достае инденитфицирующий код
      //req.query.code
      res.send(
        indexTemlate(ReactDOM.renderToString(<App />), data["access_token"]),
      );
    })
    .catch(console.log);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
