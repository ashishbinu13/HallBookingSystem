const express = require("express");
const createHttpError = require("http-errors");
require("dotenv").config();

const app = express();

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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
});