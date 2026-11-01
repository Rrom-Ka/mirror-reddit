import express from "express";
import ReactDOM from "react-dom/server";
import { Header } from "../shared/Header";
import { indexTemlate } from "./indexTemlate";
import { App } from "../App";
//инициализируме экспресс
const app = express();

app.use("/static", express.static("./dist/client"));

//устаналиваием листененр на сервер get
app.get("/", (req, res) => {
  res.send(indexTemlate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
