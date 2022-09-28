const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const studySchema = mongoose.Schema({
  NCTId: [String],
  BriefSummary: [String],
  BriefTitle: [String],
  Condition: [String],
  DetailedDescription: [String],
  EligibilityCriteria: [String],
  Gender: [String],
  HealthyVolunteers: [String],
  Keyword: [String],
  LocationCountry: [String],
  LocationFacility: [String],
  LocationState: [String],
  OverallOfficialAffiliation: [String],
  OverallOfficialName: [String],
  OverallStatus: [String],
  ResponsiblePartyInvestigatorFullName: {
    type: Array,
    default: [],
  },
  stdAge: [String],
  StudyPopulation: [String],
  StudyType: [String],
  TargetDuration: [String],
});

studySchema.plugin(findOrCreate);

const Study = mongoose.model("Study", studySchema);

module.exports = Study;
