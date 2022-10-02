const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const formSchema = mongoose.Schema({
  email: String,
  age: String,
  med1: String,
  med2: String,
  med3: String,
  diagnosis1: String,
  diagnosis2: String,
  diagnosis3: String,
  location: String,
});

formSchema.plugin(findOrCreate);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
