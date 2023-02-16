const mongoose = require("mongoose")

const appDataSchema = new mongoose.Schema({
  conv_rates: {
    type: Object
  },
  fha_rates: {
    type: Object
  },
  });

  module.exports = mongoose.model("AppData", appDataSchema)