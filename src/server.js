const express = require("express");
const { AppRouter } = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/v1", AppRouter);

module.exports = app;
