const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DeptNamesSchema = new Schema({
    deptname: {
        type: String,
        required: true
      },
    value:{
        type:String,
        required:true
    }
    
})
var DeptNames = mongoose.model("deptnames", DeptNamesSchema);
module.exports = DeptNames;