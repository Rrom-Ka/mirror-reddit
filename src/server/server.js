import express from "express";

//инициализируме экспресс
const app = express();

//устаналиваием листененр на сервер get
app.get("/", (req, res) => {
  res.send("Help Woorld");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
