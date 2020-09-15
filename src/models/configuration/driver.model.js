const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema(
  {
    fistname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    identification_number: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
    },
    cellphone: {
      type: String,
    },
    email: {
      type: String,
    },
    driver_license: {
      type: String,
    },
    category_license_driving: {
      type: String,
    },
    work_experiences: [
      {
        company: { type: String },
        market_stall: { type: String },
        start_date: { type: String },
        end_date: { type: String },
        telephone: { type: String },
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "created_at" } }
);

module.exports = User = mongoose.model("drivers", DriverSchema);
