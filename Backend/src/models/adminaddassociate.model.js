const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addAssSchema = new Schema({
  a_name: {
    type: String,
    required: true,
  },
  a_id: {
    type: String,
    required: true,
  },
  a_email: {
    type: String,
    lowercase: true,
    required: true,
  },
  a_pass: {
    required: true,
    type: String,
  },
  a_phone: {
    required: true,
    type: String,
  },
  halls: {
    type: String,
    required: true,
  },
  a_designation: {
    type: String,
    required: true,
  },
  a_areaofint: {
    type: String,
    required: true,
  },
  a_place: {
    type: String,
  },

  a_nationality: {
    type: String,
    required: true,
  },
});

var addAssDetails = mongoose.model("addAssDetail", addAssSchema);
module.exports = addAssDetails;
