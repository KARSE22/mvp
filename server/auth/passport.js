const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const User = require("../../db/models/user.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // return done(null, profile);
      User.findOneAndUpdate(
        { googleId: profile.id },
        {
          firstName: profile.givenName,
          lastName: profile.familyName,
          email: profile.emails[0].value,
          photos: profile.photos,
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOneAndUpdate(
        { githubId: profile.id },
        {
          firstName: profile.givenName,
          lastName: profile.familyName,
          email: profile.emails,
          photos: profile.photos,
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:8080/api/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOneAndUpdate(
        { facebookId: profile.id },
        {
          firstName: profile.givenName,
          lastName: profile.familyName,
          email: profile.emails,
          photos: profile.photos,
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});
