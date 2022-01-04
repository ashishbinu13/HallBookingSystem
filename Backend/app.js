const express = require("express");
const morgan = require("morgan");
const createHttpError = require("http-errors");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// modules
require("./src/helpers/init_mongodb");
const BookingRoute = require("./src/routes/bookings.routes");
const AdminRoute = require("./src/routes/admin.routes");
const AuthRoute = require("./src/routes/auth.routes");
const HallRoute = require("./src/routes/hall.routes");
const DeptRoute = require("./src/routes/dept.routes");
//
const PORT = process.env.PORT || 3000;
const app = express();
//
app.use(express.static("./dist/Frontend"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan("dev"));

// routes-local
// app.use("/auth", AuthRoute);
// app.use("/admin", AdminRoute);
// app.use("/hall", HallRoute);
// app.use("/dept", DeptRoute);
// app.use("/booking", BookingRoute);

// routes
app.use("/api/auth", AuthRoute);
app.use("/api/admin", AdminRoute);
app.use("/api/hall", HallRoute);
app.use("/api/dept", DeptRoute);
app.use("/api/booking", BookingRoute);

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

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/Frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
