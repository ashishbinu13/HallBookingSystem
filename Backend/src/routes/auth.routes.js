// packages
const express = require("express");
const createHttpError = require("http-errors");

// modules
const User = require("../models/user.model");
const { authSchema, loginSchema } = require("../helpers/validation_schema");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  verifyAccessToken,
} = require("../helpers/jwt_helper");

const router = express.Router();

// register route
router.post("/register", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    const result = await authSchema.validateAsync(req.body);

    const usernameExists = await User.findOne({ username: result.username });
    if (usernameExists)
      throw createHttpError.Conflict(
        `${result.username} is already taken. Please use another username.`
      );

    const emailExists = await User.findOne({ email: result.email });
    if (emailExists)
      throw createHttpError.Conflict(`${result.email} is already registered.`);
    const user = new User(result);
    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.username);
    const refreshToken = await signRefreshToken(savedUser.username);

    res.send({ accessToken, refreshToken });
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

// login route
router.post("/login", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    const result = await loginSchema.validateAsync(req.body);
    const user = await User.findOne({ username: result.username });
    if (!user) throw createHttpError.NotFound("User is not registered");

    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch)
      throw createHttpError.Unauthorized("Invalid username/password");

    const accessToken = await signAccessToken(user.username, user.role);
    const refreshToken = await signRefreshToken(user.username, user.role);

    res.send({ accessToken, refreshToken, username: user.username });
  } catch (error) {
    if (error.isJoi === true)
      return next(createHttpError.BadRequest("Invalid username/password"));
    next(error);
  }
});

router.get("/role", verifyAccessToken, async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    var result = req.payload.role === "ADMIN" ? true : false;
    res.json({ result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
