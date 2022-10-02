//need to make a call to the database
const router = require("express").Router();
const User = require("../../db/models/user.js");
const Study = require("../../db/models/studies");
const Form = require("../../db/models/form.js");
const controller = require("../controllers");
// router.get("/myStudies", async (req, res) => {
//   //TODO:make a call to database to get user's studies
//   //send the studies back
//   //   res.json();
// });

router.get("/account", async (req, res) => {
  //need to query database for account/profile information
});

router.post("/infoForm", async (req, res) => {
  //need to post to the database form
  let { email, age, med1, med2, med3, diagnosis1, diagnosis2, diagnosis3 } =
    req.body;

  Study.findOrCreate({ email: email }, req.body, async (err, result) => {
    //make a search to the api
    if (parseInt(age) > 18) {
      age = "adult";
    } else {
      age = "child";
    }
    const currentStudies = await controller.getMatchedStudies(
      `${age} AND ${diagnosis1 || ""}`
    );
    res.json(currentStudies);
  });
});

router.post("/personalList", async (req, res) => {
  //need to post to the database the things that interest an individual

  const { study, user } = req.body;
  const foundUser = await User.findOneAndUpdate(
    { email: user.email },
    { $push: { studyInterests: study.NCTId[0] } }
  );
  Study.findOrCreate(
    { NCTId: study.NCTId },
    {
      NCTId: study.NCTId,
      BriefSummary: study.BriefSummary,
      BriefTitle: study.BriefTitle,
      Condition: study.Condition,
      DetailedDescription: study.DetailedDescription,
      EligibilityCriteria: study.EligibilityCriteria,
      Gender: study.Gender,
      HealthyVolunteers: study.HealthyVolunteers,
      Keyword: study.Keyword,
      LocationCountry: study.LocationCountry,
      LocationFacility: study.LocationFacility,
      LocationState: study.LocationState,
      OverallOfficialAffiliation: study.OverallOfficialAffiliation,
      OverallOfficialName: study.OverallOfficialName,
      OverallStatus: study.OverallStatus,
      ResponsiblePartyInvestigatorFullName:
        study.ResponsiblePartyInvestigatorFullName,
      StdAge: study.StdAge,
      StudyPopulation: study.StudyPopulation,
      StudyType: study.StudyType,
      TargetDuration: study.TargetDuration,
    },
    (err, result) => {
      res.json(foundUser);
    }
  );
});

router.put("/personalList", async (req, res) => {
  //need to post to the database the things that interest an individual
  const { study, user } = req.body;
  const foundUser = await User.updateOne(
    { email: user.email },
    { $pull: { studyInterests: study.NCTId[0] } }
  );
  res.json(foundUser);
});

router.get("/personalList", async (req, res) => {
  const { user } = req.query;
  const foundUser = await User.find({ email: user }).exec();
  const promiseStudies = foundUser[0].studyInterests.map((studyId) => {
    return Study.findOne({ NCTId: studyId }).exec();
  });
  const foundStudies = await Promise.all(promiseStudies);
  res.json(foundStudies);
});

router.get("/personalListIds", async (req, res) => {
  const { user } = req.query;
  const foundUser = await User.find({ email: user }).exec();
  res.json(foundUser[0].studyInterests);
});

module.exports = router;
