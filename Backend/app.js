const express = require("express");
const createHttpError = require("http-errors");
require("dotenv").config();
const bookingDetails = require('./src/models/adminaddbooking.model')
const  cors =require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extented:true}));

app.use(async (req, res, next) => {
  next(createHttpError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: err.status || 500,
    message: err.message,
  });
});

app.post('/adminbookinginsert', function(req,res){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS");
  console.log(req.body)
  res.send("success");
  
})

// const PORT = process.env.PORT || 3000;
const PORT= 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
