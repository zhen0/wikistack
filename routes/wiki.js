const express = require("express");
const router = express.Router();
const add = require("../views/addPage");
const { Page } = require("../models/index");

router.get("/", (req, res, next) => {
  //   console.log("redirecting");
  res.redirect("../");
});

router.get("/add", (req, res, next) => {
  res.send(add());
});

router.post("/", async (req, res, next) => {
  //   console.log(req.body);
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
