const mongoose = require("mongoose");

const StationsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
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
