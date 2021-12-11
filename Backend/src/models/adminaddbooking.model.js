const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@projectfiles.zs9i6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const Schema =  mongoose.Schema;
const bookingSchema = new Schema
 ({
    employeeName:
    {
        required:true,
        type: String,

    },
    ICTAKId:
    {
        required:true,
        type: String,

    },
    bookingDate:
    {
       required:true,
       type:Date

    },
    hallName: 
    {    
       required:true,
        type:String
    },
    startTime:
    {
        required:true,
        type:String

    },
    endTime:{
        required:true,
        type:String
    },
    empEmail:
    {
    type: String,
    lowercase: true,
    required: true,

    },

    desc:{
      type:String
    },

    dateStamp:
    {
    required:true,
    type:Date
    }


  })

  var bookingDetails=mongoose.model('bookingDetails',bookingSchema);
  module.exports=bookingDetails;
