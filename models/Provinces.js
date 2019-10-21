const mongoose = require("mongoose");

const ProvincesSchema = mongoose.Schema({
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

module.exports = Provinces = mongoose.model("provinces", ProvincesSchema);
