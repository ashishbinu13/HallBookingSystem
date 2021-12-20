// packages
const express = require("express");

// modules
const bookingDetails = require("../models/adminaddbooking.model");
const addAssDetails = require("../models/adminaddassociate.model");

const { verifyAccessToken } = require("../helpers/jwt_helper");
const router = express.Router();

// register route
router.post("/insert", verifyAccessToken, async (req, res, next) => {
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

router.post("/insertass", verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    var assdetails = {
      a_name: req.body.a_name,
      a_id: req.body.a_id,
      a_email: req.body.a_email,
      a_pass: req.body.pass,
      a_phone: req.body.a_phone,
      halls: req.body.halls,
      a_designation: req.body.a_designation,
      a_areaofint: req.body.a_areaofint,
      a_place: req.body.a_place,
      a_nationality: req.body.a_nationality,
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
