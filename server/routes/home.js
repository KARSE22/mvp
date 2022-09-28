const router = require("express").Router();
const axios = require("axios");
const Healthy = require("../../db/models/Healthy.js");
const url = "http://www.ClinicalTrials.gov/api/query/study_fields";
const fieldString =
  "NCTId,BriefTitle,OverallStatus,ResponsiblePartyInvestigatorFullName,BriefSummary,DetailedDescription,Condition,Keyword,StudyType,TargetDuration,EligibilityCriteria,HealthyVolunteers,Gender,StdAge,StudyPopulation,OverallOfficialName,OverallOfficialAffiliation,LocationFacility,LocationState,LocationCountry";

router.get("/initialPage", async (req, res) => {
  //TODO:change to make request to database later
  // const queryObj = {
  //   expr: "healthy volunteers united states",
  //   fields: fieldString,
  //   max_rank: 300,
  //   fmt: "JSON",
  // };
  // const studies = await axios.get(url, { params: queryObj });
  // const currentStudies = studies.data.StudyFieldsResponse.StudyFields.filter(
  //   (study) => {
  //     return (
  //       study.OverallStatus[0] !== "Completed" && "Withdrawn" && "Terminated"
  //     );
  //   }
  // );
  const currentStudies = await Healthy.find({}).exec();
  res.json(currentStudies);
});

// (async function insert() {
//   const queryObj = {
//     expr: "healthy volunteers united states",
//     fields: fieldString,
//     max_rank: 300,
//     fmt: "JSON",
//   };
//   const studies = await axios.get(url, { params: queryObj });
//   const currentStudies = studies.data.StudyFieldsResponse.StudyFields.filter(
//     (study) => {
//       return (
//         study.OverallStatus[0] !== "Completed" && "Withdrawn" && "Terminated"
//       );
//     }
//   );
//   for (let i = 0; i < currentStudies.length; i++) {
//     let study = currentStudies[i];
//     await Healthy.create({
//       NCTId: study.NCTId,
//       BriefSummary: study.BriefSummary,
//       BriefTitle: study.BriefTitle,
//       Condition: study.Condition,
//       DetailedDescription: study.DetailedDescription,
//       EligibilityCriteria: study.EligibilityCriteria,
//       Gender: study.Gender,
//       HealthyVolunteers: study.HealthyVolunteers,
//       Keyword: study.Keyword,
//       LocationCountry: study.LocationCountry,
//       LocationFacility: study.LocationFacility,
//       LocationState: study.LocationState,
//       OverallOfficialAffiliation: study.OverallOfficialAffiliation,
//       OverallOfficialName: study.OverallOfficialName,
//       OverallStatus: study.OverallStatus,
//       ResponsiblePartyInvestigatorFullName:
//         study.ResponsiblePartyInvestigatorFullName,
//       StdAge: study.StdAge,
//       StudyPopulation: study.StudyPopulation,
//       StudyType: study.StudyType,
//       TargetDuration: study.TargetDuration,
//     });
//   }
//   console.log("done");
// })();

module.exports = router;
