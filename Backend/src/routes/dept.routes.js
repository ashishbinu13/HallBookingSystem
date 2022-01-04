const express = require("express");
const DeptNames= require("../models/department.model");
const router = express.Router();

router.get('/getdeptNames', (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    try{
   console.log("In backend");
      DeptNames.find()
      .then (function(deptNames){
        console.log(deptNames)
        res.send(deptNames)
      }) 
    }
      catch(err){
        next(err)
      }
    }
  
  
  );

  router.get('/:id', (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );

     try
     {
        let id= req.params.id;
        DeptNames.find({"_id":id})  
        .then (function(deptNames){
          res.send(deptNames)
        }) 
  
  
     }
  catch(err)
  {
      next(err)
  }

  })
  module.exports = router;