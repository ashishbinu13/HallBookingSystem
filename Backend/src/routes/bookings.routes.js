const express = require("express");

// modules
const bookingDetails = require("../models/adminaddbooking.model");
const { bookingSchema } = require("../helpers/validation_schema");

const { verifyAccessToken } = require("../helpers/jwt_helper");

const router = express.Router();

router.get("/getBookings", verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    //const bookings = await bookingDetails.find();

    const bookings = await bookingDetails.find().sort({ _id: -1 });
    res.send(bookings);
  } catch (error) {
    next(error);
  }
});

router.post("/insert", verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  try {
    const result = await bookingSchema.validateAsync(req.body);

    var details = {
      employeeName: req.body.employeeName,
      ICTAKId: req.body.ICTAKId,
      bookingDate: req.body.bookingDate,
      hallName: req.body.hallName,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      eventDetails: req.body.eventDetails,
      username: req.body.username,
      dateStamp: req.body.dateStamp,
    };
    //console.log(details);

    var bookingDet = new bookingDetails(details);
    var booked = await bookingDet.save();
    res.send(booked);
    //console.log(booked);
  } catch (error) {
    //
    next(error);
  }
});

router.get("/:id", verifyAccessToken, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  const id = req.params.id;
  bookingDetails.findOne({ _id: id }).then((booking) => {
    res.send(booking);
  });
});
router.put("/editBookings", verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    var id = req.body._id;
    delete req.body._id;
    delete req.body.__v;
    const result = await bookingSchema.validateAsync(req.body);
    bookingDetails
      .findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            employeeName: result.employeeName,
            ICTAKId: result.ICTAKId,
            bookingDate: result.bookingDate,
            hallName: result.hallName,
            startTime: result.startTime,
            endTime: result.endTime,
            eventDetails: result.eventDetails,
            dateStamp: result.dateStamp,
          },
        }
      )
      .then(function () {
        res.send();
      });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/deleteBookings/:id",
  verifyAccessToken,
  async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );

    bookings = bookingDetails.findById(req.params.id);
    bookings.remove().then(() => {
      res.send();
    });
  }
);

router.get(
  "/userbookinglist/:user",
  verifyAccessToken,
  async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    let username = req.params.user;
    try {
      const records = await bookingDetails
        .find()
        .where("username")
        .in(username)
        .sort({ _id: -1 })
        .limit(5)
        .exec();

      res.send(records);
    } catch (err) {
      res.send(err);
    }
  }
);

router.post("/check", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  newStartTime = req.body.startTime;
  newEndTime = req.body.endTime;
  hallname = req.body.hallName;
  date = req.body.bookingDate;

  bookingDetails.find(
    {
      $or: [
        {
          $and: [
            {
              $or: [
                {
                  $and: [
                    { start_time: { $lt: newStartTime } },
                    { end_time: { $gt: newStartTime } },
                  ],
                },
                {
                  $and: [
                    { start_time: { $lt: newEndTime } },
                    { end_time: { $gt: newEndTime } },
                  ],
                },
                {
                  $and: [
                    { start_time: { $gte: newStartTime } },
                    { end_time: { $lte: newEndTime } },
                  ],
                },
              ],
            },
            {
              $or: [
                { start_time: { $ne: newStartTime } },
                { end_time: { $ne: newEndTime } },
              ],
            },
          ],
        },
        {
          $and: [
            { start_time: { $eq: newStartTime } },
            { end_time: { $eq: newEndTime } },
          ],
        },
        { $and: [{ hallName: { hallname } }, { bookingDate: { date } }] },
      ],
    }.exec(function (err, results) {
      if (err) {
        //handle error
        return;
      }

      // if (results.length > 0) {
      //   console.log(results);
      // }
    })
  );
});

module.exports = router;
