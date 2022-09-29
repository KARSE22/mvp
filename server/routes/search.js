const router = require("express").Router();
const axios = require("axios");
const url = "http://www.ClinicalTrials.gov/api/query/study_fields";
const auth = {
  headers: { Authorization: `Client-ID ${process.env.UD_ACCESS_KEY}` },
};
const fieldString =
  "NCTId,BriefTitle,OverallStatus,ResponsiblePartyInvestigatorFullName,BriefSummary,DetailedDescription,Condition,Keyword,StudyType,TargetDuration,EligibilityCriteria,HealthyVolunteers,Gender,StdAge,StudyPopulation,OverallOfficialName,OverallOfficialAffiliation,LocationFacility,LocationState,LocationCountry";

router.get("/expression", async (req, res) => {
  const { exp } = req.query;
  const queryObj = {
    expr: exp,
    fields: fieldString,
    max_rank: 300,
    fmt: "JSON",
  };
  const studies = await axios.get(url, { params: queryObj });
  const currentStudies = studies.data.StudyFieldsResponse.StudyFields.filter(
    (study) => {
      return study.OverallStatus[0] !== "Completed" && "Withdrawn";
    }
  );
  res.json(currentStudies);
});

router.get("/randomImg", async (req, res) => {
  const { keyword } = req.query;
  try {
    let img = await axios.get(
      `https://api.unsplash.com/photos/random?query=${keyword}&orientation=landscape`,
      auth
    );
    res.json(img.data.urls.small);
  } catch (err) {
    // console.log(err);
  }
});

module.exports = router;
