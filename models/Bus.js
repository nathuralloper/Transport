const mongoose = require("mongoose");

const BusSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  brand: {
    type: String
  },
  model: {
    type: String
  },
  serial: {
    type: String
  },
  capacity: {
    type: Number
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

module.exports = Bus = mongoose.model("bus", BusSchema);
