const express = require("express");
const HallNames = require("../models/hallNames.model");
const router = express.Router();

router.get("/gethallNames", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  try {
    HallNames.find().then(function (hallNames) {
      res.send(hallNames);
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    let id = req.params.id;
    HallNames.find({ _id: id }).then(function (hallNames) {
      res.send(hallNames);
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
