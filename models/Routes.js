const mongoose = require("mongoose");

const RoutesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  origin_province: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "provinces"
  },
  destination_province: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "provinces"
  },
  active: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  },
  stations: [
    {
      station: {
        type: mongoose.Schema.Types.ObjectId
      },
      order: {
        type: Number
      }
    }
  ]
});

module.exports = Routes = mongoose.model("routes", RoutesSchema);
