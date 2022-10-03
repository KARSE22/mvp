require("dotenv").config();
require("./auth/passport.js");
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { queryParser } = require("express-query-parser");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const authRoute = require("./routes/auth.js");
const searchRoute = require("./routes/search.js");
const userRoute = require("./routes/user.js");
const homeRoute = require("./routes/home.js");
require("../db");
const studyRoute = require("./routes/studies.js");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 8 * 60 * 60 * 1000 },
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
app.use("/api/home", homeRoute);
app.use("/api/user", userRoute);
app.use("/api/studies", studyRoute);

app.listen(process.env.PORT, () => {
  console.log(`Research app listening on port ${process.env.PORT}`);
});
