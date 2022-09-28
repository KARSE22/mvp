const router = require("express").Router();
const axios = require("axios");
const url = "http://www.ClinicalTrials.gov/api/query/study_fields";
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
  res.json(studies.data);
});

module.exports = router;
