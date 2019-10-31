const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  fistname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  identification_number: {
    type: String,
    required: true
  },
  active: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("drivers", DriverSchema);
