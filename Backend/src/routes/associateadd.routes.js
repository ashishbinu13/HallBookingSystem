const express = require("express");

// modules
const addAssDetails = require("../models/adminaddassociate.model");
const { verifyAccessToken } = require("../helpers/jwt_helper");

const router = express.Router();

router.get("/getaddass", verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    const addings = await addAssDetails.find();
    res.send(addings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
