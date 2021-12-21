// packages
const express = require("express");

// modules
const bookingDetails = require("../models/adminaddbooking.model");
const addAssDetails = require("../models/adminaddassociate.model");

const { verifyAccessToken } = require("../helpers/jwt_helper");
const router = express.Router();

// register route
router.post("/insert", verifyAccessToken,async (req, res, next) => {
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

router.post("/insertass",verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    var assdetails = {
      employeeName: req.body.employeeName,
      ICTAKID: req.body.ICTAKID,
      email: req.body.email,
      pass: req.body.pass,
      phonenum: req.body.phonenum,
      deptName: req.body.deptName,
      designation: req.body.designation,
      areaint: req.body.areaint,
      place: req.body.place,
      nationality: req.body.nationality,
    };
    console.log(assdetails);

    var addAssDet = new addAssDetails(assdetails);
    var added = await addAssDet.save();
    console.log(added);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
