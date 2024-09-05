const express = require("express");
const { AppRouter } = require("./routes");

const app = express();

app.use("/v1", AppRouter);

module.exports = app;
