const User = require("../db/models/user.js");
const Study = require("../db/models/studies.js");
const Form = require("../db/models/form.js");

const axios = require("axios");
const url = "http://www.ClinicalTrials.gov/api/query/study_fields";
const auth = {
  headers: { Authorization: `Client-ID ${process.env.UD_ACCESS_KEY}` },
};
const fieldString =
  "NCTId,BriefTitle,OverallStatus,ResponsiblePartyInvestigatorFullName,BriefSummary,DetailedDescription,Condition,Keyword,StudyType,TargetDuration,EligibilityCriteria,HealthyVolunteers,Gender,StdAge,StudyPopulation,OverallOfficialName,OverallOfficialAffiliation,LocationFacility,LocationState,LocationCountry";

module.exports = {
  addStudy: async function (study) {
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
      (err, result) => {}
    );
  },
  getHealthyStudies: async function () {
    return await Study.find({});
  },
  getMatchedStudies: async function (exp) {
    let queryObj = {
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
    return currentStudies;
  },
};
