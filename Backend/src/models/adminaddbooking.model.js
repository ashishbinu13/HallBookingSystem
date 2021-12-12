const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  employeeName: {
    type: String,
    required: true,
  },
  ICTAKId: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  hallName: {
    required: true,
    type: String,
  },
  startTime: {
    required: true,
    type: String,
  },
  endTime: {
    type: String,
    required: true,
  },
  empEmail: {
    type: String,
    lowercase: true,
    required: true,
  },

  desc: {
    type: String,
  },

  dateStamp: {
    type: Date,
    required: true,
  },
});

var bookingDetails = mongoose.model("bookingDetail", bookingSchema);
module.exports = bookingDetails;
