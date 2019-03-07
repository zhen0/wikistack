const express = require("express");
const router = express.Router();
const add = require("../views/addPage");

router.get("/", (req, res, next) => {
  //   console.log("redirecting");
  res.redirect("../");
});

router.post("/", (req, res, next) => {
  res.json(req.body);
});

router.get("/add", (req, res, next) => {
  res.send(add());
});

module.exports = router;
