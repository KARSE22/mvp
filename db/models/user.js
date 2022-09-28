const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  photos: {
    type: Array,
    default: [],
  },
  googleId: String,
  facebookId: String,
  githubId: String,
  studyInterests: [String],
  keywords: [String],
  medications: [String],
  diagnosis: [String],
  location: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
