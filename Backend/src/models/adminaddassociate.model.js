const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addAssSchema = new Schema({
  EmployeeName: {
    type: String,
    required: true,
  },
  ICTAKID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  pass: {
    required: true,
    type: String,
  },
  phonenum: {
    required: true,
    type: String,
  },
  deptName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  areaint: {
    type: String,
    required: true,
  },
  place: {
    type: String,
  },

  nationality: {
    type: String,
    required: true,
  },
});

var addAssDetails = mongoose.model("addAssDetail", addAssSchema);
module.exports = addAssDetails;
