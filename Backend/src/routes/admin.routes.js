// packages
const express = require("express");

// modules
const bookingDetails = require("../models/adminaddbooking.model");
// const addAssDetails = require("../models/adminaddassociate.model");

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
      eventDetails: req.body.eventDetails,
      dateStamp: req.body.dateStamp,
    };

    var bookingDet = new bookingDetails(details);
    var booked = await bookingDet.save();
  } catch (error) {
    next(error);
  }
});

// router.post("/register",verifyAccessToken, async (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );

//   try {
//     var assdetails = {
//       name: req.body.name,
//       username: req.body.ICTAKID,
//       email: req.body.email,
//       password: req.body.password,
//       phone: req.body.phone,
//       deptName: req.body.deptName,
//       designation: req.body.designation,
//       areaint: req.body.areaint,
//       place: req.body.place,
//       nation: req.body.nation,
//     };
//     console.log(assdetails);

//     var addAssDet = new addAssDetails(assdetails);
//     var added = await addAssDet.save();
//     console.log(added);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
