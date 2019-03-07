const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const index = require("./models/index");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static("static"));
app.get("/", (req, res, next) => {
  res.send(layout("hello world"));
});

index.db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await index.Page.sync();
  await index.User.sync();

  const PORT = 1337;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};
init();
