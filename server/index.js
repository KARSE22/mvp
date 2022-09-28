require("dotenv").config();
require("./auth/gpassport.js");
const path = require("path");
const express = require("express");
const cors = require("cors");
const { queryParser } = require("express-query-parser");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const session = require("express-session");
const passport = require("passport");
const authRoute = require("./routes/auth.js");
const searchRoute = require("./routes/search.js");
const db = require("../db");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(
  session({
    secret: "somethingsecretgoeshere",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false, expires: 60000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true,
  })
);
app.use("/api/auth", authRoute);
app.use("/api/search", searchRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Research app listening on port ${process.env.PORT}`);
});
