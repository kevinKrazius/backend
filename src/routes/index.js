const { Router } = require("express");

const AppRouter = Router();

AppRouter.get("/", function (req, res) {
  res.send("Hello World");
});

AppRouter.get("/user", function (req, res) {
  res.send("Hello User");
});

module.exports = { AppRouter };
