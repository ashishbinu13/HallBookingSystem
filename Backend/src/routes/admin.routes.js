// packages
const express = require("express");

// modules
const bookingDetails = require("../models/adminaddbooking.model");
const HallNames= require("../models/hallNames.model")

const router = express.Router();

// insert booking details route
router.post("/insert", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    var details = {
      employeeName: req.body.employeeName,
      ICTAKId: req.body.ICTAKId,
      bookingDate: req.body.bookingDate,
      hallName: req.body.hallName,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      empEmail: req.body.empEmail,
      desc: req.body.desc,
      dateStamp: req.body.dateStamp,
    };
    console.log(details);

    var bookingDet = new bookingDetails(details);
    var booked = await bookingDet.save();
    console.log(booked);
  } catch (error) {
    next(error);
  }
});


router.get('/gethallNames', (req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  try{

    HallNames.find()
    .then (function(hallNames){
      console.log(hallNames)
      res.send(hallNames)
    }) 
  }
    catch(err){
      next(err)
    }
  }


);

module.exports = router;
