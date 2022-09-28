const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const healthySchema = mongoose.Schema({
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
  StdAge: [String],
  StudyPopulation: [String],
  StudyType: [String],
  TargetDuration: [String],
});

healthySchema.plugin(findOrCreate);

const Healthy = mongoose.model("Healthy", healthySchema);

module.exports = Healthy;
