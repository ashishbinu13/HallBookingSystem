const express = require("express");

// modules
const bookingDetails = require("../models/adminaddbooking.model");
const { verifyAccessToken } = require("../helpers/jwt_helper");

const router = express.Router();

router.get("/getBookings", verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    const bookings = await bookingDetails.find();
    res.send(bookings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
