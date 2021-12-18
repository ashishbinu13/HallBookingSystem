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
router.get("/getbooking/:id",  (req, res) => {
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
router.get("/editBookings", async (req, res, next) => {
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
      empEmail= req.body.empEmail,
      desc=req.body.desc,
      dateStamp= req.body.dateStamp,
  
      bookingDetails.findByIdAndUpdate({"_id":id},
                             {$set:{"employeeName":employeeName,
                             "ICTAKId":ICTAKId,
                             "bookingDate":bookingDate,
                             "hallName":hallName,
                             "startTime":startTime,
                             "endTime":endTime,
                            "empEmail":empEmail,
                            " desc": desc,
                            "dateStamp":dateStamp   
                            }})
.then(function(){
 console.log('success')
    res.send();
})
});

router.get("/deleteBookings", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  bookings =  bookingDetails.findById(req.params.id)
  bookings.remove()   
 .then(()=>{
     console.log('success')
     res.send();
 })
});
module.exports = router;
