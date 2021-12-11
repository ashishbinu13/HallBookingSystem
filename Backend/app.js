// packages

const express = require("express");
const morgan = require("morgan");
const createHttpError = require("http-errors");
const cors = require("cors");
var bodyParser = require('body-parser')
//require("dotenv").config();
const mongoose= require('mongoose')
mongoose.connect("mongodb+srv://userone@Project6#.zs9i6.mongodb.net/hallBookingSystem?retryWrites=true&w=majority");


const AdminRoute= require("./src/routes/admin.routes")
const AuthRoute= require("./src/routes/auth.routes")


// modules

//
const app = express();
//
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan("dev"));

// routes
app.use("/auth", AuthRoute);
app.use("/admin", AdminRoute);

// error handling

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

// port

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});