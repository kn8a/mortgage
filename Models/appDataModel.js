const mongoose = require("mongoose")

const appDataSchema = new mongoose.Schema({
  conv_rates: {
    15: Number,
    30: Number,
    updated: Date,
  },
  fha_rates: {
    15: Number,
    30: Number,
    updated: Date,
  },
  });

  module.exports = mongoose.model("AppData", appDataSchema)