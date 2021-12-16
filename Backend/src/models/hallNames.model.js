const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HallNamesSchema = new Schema({
    hallname: {
        type: String,
        required: true
      },
    value:{
        type:String,
        required:true
    }
    
})
var HallNames = mongoose.model("hallnames", HallNamesSchema);
module.exports = HallNames;

