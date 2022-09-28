const router = require("express").Router();
const axios = require("axios");
const url = "http://www.ClinicalTrials.gov/api/query/study_fields";
const fieldString =
  "NCTId,BriefTitle,OverallStatus,ResponsiblePartyInvestigatorFullName,BriefSummary,DetailedDescription,Condition,Keyword,StudyType,TargetDuration,EligibilityCriteria,HealthyVolunteers,Gender,StdAge,StudyPopulation,OverallOfficialName,OverallOfficialAffiliation,LocationFacility,LocationState,LocationCountry";

router.get("/initialPage", async (req, res) => {
  //TODO:change to make request to database later
  const queryObj = {
    expr: "healthy volunteers united states",
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

module.exports = router;
