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
  } 
  catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.get("/getass", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  try{
    const user1=await User.find();
    res.send(user1);
  }
  catch(error){
    next(error);
  }
});

router.get("/:id",async(req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  // const result = await authSchema.validateAsync(req.body.id);
    const id=req.params.id;
    User.findOne({"_id":id })
    .then((user1)=>{
    res.send(user1);
  });

});

router.put("/editass", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  console.log(req.body);
  id = req.body._id,
    name1 = req.body.name,
    username = req.body.username,
    email = req.body.email,
    password = req.body.password,
    phone = req.body.phone,
    deptName = req.body.endTime,
    designation = req.body.designation,
    areaint = req.body.areaint,
    place = req.body.place,
    nation = req.body.nation,
    role = req.body.role,
    User.findByIdAndUpdate({"_id": id },
        {$set: {"name": name1,
            "username": username,
            "email": email,
            "password": password,
            "phone": phone,
            "deptName": deptName,
            "designation": designation,
            "areaint": areaint,
            "place": place,
            "nation": nation,
            "role": role}})
      
            .then(function () {
        console.log("success");
        res.send();
      });
});

router.delete("/deleteass/:id", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  user1 = User.findById(req.params.id);
  user1.remove().then(() => {
    console.log("success");
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
    if (error.isJoi === true)
      return next(createHttpError.BadRequest("Invalid username/password"));
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

module.exports = router;
