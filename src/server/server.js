import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemlate } from "./indexTemlate";
import axios from "axios";

import { App } from "../App";
import React from "react";
//инициализируме экспресс
const app = express();

app.use("/static", express.static("./dist/client"));

//Сетевая политика запррещает обращаться к redit Добавьте прокси-маршрут в ваш сервер для reddit
// app.get("/api/posts", (req, res) => {
//   axios
//     .get("https://old.reddit.com/r/popular/best.json?sr_detail=true", {
//       headers: {
//         // Обязательный заголовок, чтобы Reddit не заблокировал запрос как бота
//         "User-Agent": "web:new-reddit-study-app:v1.0.0 (by /u/student)",
//       },
//     })
//     .then(({ data }) => {
//       res.json(data);
//     })
//     .catch(console.log);
// });

app.get("/api/posts", async (req, res) => {
  try {
    // Загружаем реальные свежие статьи с Dev.to (работает без ключей и блокировок)
    const { data } = await axios.get(
      "https://dev.to/api/articles?per_page=15?",
    );

    // Превращаем массив статей в точную структуру Reddit API, которую ждет ваш фронтенд
    const formattedForReddit = {
      data: {
        children: data.map((article) => ({
          data: {
            id: String(article.id),
            title: article.title,
            author: article.user.username,
            subreddit: article.tag_list[0] || "webdev",
            score: article.positive_reactions_count,
            num_comments: article.comments_count,
            created_utc: Math.floor(
              new Date(article.published_at).getTime() / 1000,
            ),
            thumbnail: article.cover_image || "self",
            url: article.url,
            selftext: article.description,
            sr_detail: {
              icon_img: article.user.profile_image_90,
            },
          },
        })),
      },
    };

    res.json(formattedForReddit);
  } catch (err) {
    res.status(500).json({ error: "Ошибка загрузки статей" });
  }
});

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
