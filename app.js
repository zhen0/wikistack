const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const index = require("./models/index");
const wikiRoutes = require("./routes/wiki");
const userRoutes = require("./routes/user");
const main = require("./views/main");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/wiki", wikiRoutes);
app.use("/user", userRoutes);

app.use(express.static("static"));

app.get("/", async (req, res, next) => {
  const pages = await index.Page.findAll();
  console.log("pages", pages);
  res.send(main(pages));
});

index.db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await index.db.sync({ force: true });

  const PORT = 1337;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};
init();
