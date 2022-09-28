//need to make a call to the database
const router = require("express").Router();

router.get("/myStudies", async (req, res) => {
  //TODO:make a call to database to get user's studies
  //send the studies back
  //   res.json();
});

router.get("/account", async (req, res) => {
  //need to query database for account/profile information
});

router.post("/infoForm", async (req, res) => {
  //need to post to the database the things that interest an individual
});

module.exports = router;
