// packages
const express = require("express");

// modules
const User = require("../models/user.model");
const admin = require("../models/adminaddbooking.model");


const router = express.Router();

// register route
router.post("/insert", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  

  try {
    console.log(req.body);
    res.send("Success");
  } catch (error) {
    next(error);
  }
});


module.exports = router;
