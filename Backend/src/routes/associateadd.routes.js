const express = require("express");

// modules
const addAssDetails = require("../models/adminaddassociate.model");
const { verifyAccessToken } = require("../helpers/jwt_helper");

const router = express.Router();

router.get("/getaddass",verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    const adding = await addAssDetails.find();
    res.send(adding);
  } catch (error) {
    next(error);
  }
});

router.post("/insertass",VerifyAccessToken, async(req, res, next) => {
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

      var assDet = new addAssDetails(assdetails);
      var added = await assDet.save();
      console.log(added);
  } catch (error) {
      next(error);
  }
});

module.exports = router;
