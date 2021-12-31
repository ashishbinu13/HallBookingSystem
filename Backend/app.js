const express = require("express");
const morgan = require("morgan");
const createHttpError = require("http-errors");
const cors = require("cors");
require("dotenv").config();


const mongoose = require("mongoose");
const BookingRoute = require("./src/routes/bookings.routes");
// const AddAssociateRoute = require("./src/routes/associateadd.routes");
const AdminRoute = require("./src/routes/admin.routes");
const AuthRoute = require("./src/routes/auth.routes");
const HallRoute = require("./src/routes/hall.routes");

require("./src/helpers/init_mongodb");

// modules

const DeptRoute = require("./src/routes/dept.routes");
//
const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan("dev"));

// routes
app.use("/auth", AuthRoute);
app.use("/admin", AdminRoute);
app.use("/hall", HallRoute);
app.use("/dept", DeptRoute);
// app.use("/adding", AddAssociateRoute);


app.use("/booking", BookingRoute);

// error handling

app.use(async(req, res, next) => {
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