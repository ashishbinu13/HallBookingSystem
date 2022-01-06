// packages
const express = require("express");
const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");

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
    next(error);
  }
});

router.get("/getass", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  try {
    const user1 = await User.find();
    res.send(user1);
  } catch (error) {
    next(error);
  }
});

router.get("/getass/:id", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  const id = req.params.id;

  User.findOne({ username: id }).then((user) => {
    res.send(user);
  });
});

router.get("/:id", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  // const result = await authSchema.validateAsync(req.body.id);
  const id = req.params.id;
  User.findOne({ _id: id }).then((user1) => {
    res.send(user1);
  });
});

router.put("/editass", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  try {
    var id = req.body._id;
    delete req.body._id;
    delete req.body.__v;

    const result = await authSchema.validateAsync(req.body);

    const crypt = new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(result.password, salt, function (err, hash) {
          resolve(hash);
        });
      });
    });

    crypt.then((password) => {
      User.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            name: result.name,
            username: result.username,
            email: result.email,
            password: password,
            phone: result.phone,
            deptName: result.deptName,
            designation: result.designation,
            areaint: result.areaint,
            place: result.place,
            nation: result.nation,
            role: result.role,
          },
        }
      ).then(function () {
        res.send();
      });
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/deleteass/:id", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  user1 = User.findById(req.params.id);
  user1.remove().then(() => {
    res.send();
  });
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
    // if (error.isJoi === true)
    //   return next(createHttpError.BadRequest("Invalid username/password"));
    next(error);
  }
});

// router.get("/role", verifyAccessToken, async (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );

//   try {
//     var result = req.payload.role === "ADMIN" ? true : false;
//     res.json({ result });
//   } catch (error) {
//     next(error);
//   }
// });
router.get("/userlist/:user", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  let username = req.params.user;
  try {
    const records = await User.find().where("username").in(username);

    res.send(records);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
