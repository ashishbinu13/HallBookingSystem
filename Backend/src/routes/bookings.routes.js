const express = require("express");

// modules
const bookingDetails = require("../models/adminaddbooking.model");

const router = express.Router();

router.get("/getBookings", async (req, res, next) => {
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
router.get("/:id",  (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  const id = req.params.id;
  bookingDetails.findOne({"_id":id})
    .then((booking)=>{
        res.send(booking);
    });
})
router.put("/editBookings", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
     console.log(req.body)
      id=req.body._id,
      employeeName= req.body.employeeName,
      ICTAKId= req.body.ICTAKId,
      bookingDate=req.body.bookingDate,
      hallName= req.body.hallName,
      startTime= req.body.startTime,
      endTime= req.body.endTime,
      eventDetails= req.body. eventDetails,
     
      dateStamp= req.body.dateStamp,
  
      bookingDetails.findByIdAndUpdate({"_id":id},
                             {$set:{"employeeName":employeeName,
                             "ICTAKId":ICTAKId,
                             "bookingDate":bookingDate,
                             "hallName":hallName,
                             "startTime":startTime,
                             "endTime":endTime,
                            "eventDetails":eventDetails,    
                            "dateStamp":dateStamp   
                            }})
.then(function(){
 console.log('success')
    res.send();
    
})
});

router.delete("/deleteBookings/:id", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  // id = req.params.id;
  // bookingDetails.findByIdAndDelete({"_id":id})
  // .then(()=>{
  //     console.log('success')
  //     res.send();

  bookings =  bookingDetails.findById(req.params.id)
  bookings.remove()   
 .then(()=>{
     console.log('success')
     res.send();
 })
});



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
      eventDetails: req.body.eventDetails,
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

  router.post("/check", function(req,res,next){

    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
       console.log("incheck");
    console.log(req.body);
    newStartTime= req.body.startTime;
    newEndTime= req.body.endTime;
    hallname=req.body.hallName;
    date=req.body.bookingDate;
    console.log(newStartTime);
    console.log(newEndTime);
    bookingDetails.find({
      $or: [{$and: [
  {$or: [
          {$and: [{startTime: {$lt: newStartTime}}, {endTime: {$gt: newStartTime}}]}, 
          {$and: [{startTime: {$lt: newEndTime}}, {endTime: {$gt: newEndTime}}]},
          {$and: [{startTime: {$gte: newStartTime}}, {endTime: {$lte: newEndTime}}]},

]},
          {$or: [{startTime: {$ne: newStartTime}}, {endTime: {$ne: newEndTime}}]},

   ]
      },
          {$and: [{startTime: {$eq: newStartTime}}, {endTime: {$eq: newEndTime}}]}

]
},

      
      function (err, results) {
      
          if (err) {
              console.log(err);
              return;
          }
      
          if (results.length > 0)
          {
console.log(results) ;         }
      });
    
    });
module.exports = router;
