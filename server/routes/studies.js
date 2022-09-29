const router = require("express").Router();
const axios = require("axios");
const url = "http://www.ClinicalTrials.gov/api/query/study_fields";
const fieldString =
  "NCTId,BriefTitle,OverallStatus,ResponsiblePartyInvestigatorFullName,BriefSummary,DetailedDescription,Condition,Keyword,StudyType,TargetDuration,EligibilityCriteria,HealthyVolunteers,Gender,StdAge,StudyPopulation,OverallOfficialName,OverallOfficialAffiliation,LocationFacility,LocationState,LocationCountry";

router.get("/cancer", async (req, res) => {
  // const { exp } = req.query;
  const queryObj = {
    expr: "cancer",
    fields: fieldString,
    max_rank: 300,
    fmt: "JSON",
  };
  const studies = await axios.get(url, { params: queryObj });
  const currentStudies = studies.data.StudyFieldsResponse.StudyFields.filter(
    (study) => {
      return (
        study.OverallStatus[0] !== "Completed" && "Withdrawn" && "Terminated"
      );
    }
  );
  res.json(currentStudies);
});

router.get("/brain", async (req, res) => {
  // const { exp } = req.query;
  const queryObj = {
    expr: "brain and nerves",
    fields: fieldString,
    max_rank: 300,
    fmt: "JSON",
  };
  const studies = await axios.get(url, { params: queryObj });
  const currentStudies = studies.data.StudyFieldsResponse.StudyFields.filter(
    (study) => {
      return (
        study.OverallStatus[0] !== "Completed" && "Withdrawn" && "Terminated"
      );
    }
  );
  res.json(currentStudies);
});

router.get("/food", async (req, res) => {
  // const { exp } = req.query;
  const queryObj = {
    expr: "food and nutrition",
    fields: fieldString,
    max_rank: 300,
    fmt: "JSON",
  };
  const studies = await axios.get(url, { params: queryObj });
  const currentStudies = studies.data.StudyFieldsResponse.StudyFields.filter(
    (study) => {
      return (
        study.OverallStatus[0] !== "Completed" && "Withdrawn" && "Terminated"
      );
    }
  );
  res.json(currentStudies);
});

module.exports = router;
