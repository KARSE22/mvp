const User = require("../db/models/user.js");
const Study = require("../db/models/studies.js");

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
};
