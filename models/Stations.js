const mongoose = require("mongoose");

const StationsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  contact: {
    type: String
  },
  active: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Provinces = mongoose.model("stations", StationsSchema);
