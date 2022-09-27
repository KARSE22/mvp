require("dotenv").config();
const path = require("path");
const express = require("express");
const { queryParser } = require("express-query-parser");
const morgan = require("morgan");
const db = require("../db");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Research app listening on port ${process.env.PORT}`);
});
