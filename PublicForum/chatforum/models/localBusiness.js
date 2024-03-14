const mongoose = require("mongoose");

const localBusiness = new mongoose.Schema(
  {
    local_name: {
      type: String,
      required: true,
    },
    country: {
      type: "String",
      required: true,
    },
    city_name: {
      type: "String",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    aadhar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LocalBusiness", localBusiness);
