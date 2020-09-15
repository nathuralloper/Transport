const mongoose = require("mongoose");

const BusSchema = mongoose.Schema(
  {
    record_number: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    license_plate: {
      type: String,
      required: true,
    },
    year_manufacture: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    enrollment: {
      type: String,
    },
    capacity: {
      type: Number,
    },
    used: {
      type: Boolean,
      required: true,
    },
    new: {
      type: Boolean,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "created_at" } }
);

module.exports = Bus = mongoose.model("bus", BusSchema);
