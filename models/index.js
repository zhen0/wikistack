const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("page", {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.ENUM("open", "closed")
});

const User = db.define("user", {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING, unique: true, isEmail: true }
});

module.exports = {
  db,
  Page,
  User
};
