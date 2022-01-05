// packages
const Joi = require("joi");

// register validation
const authSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().pattern(
    new RegExp(
      "^([a-z0-9.-]{1,64})@([a-z0-9-]{2,200}).([a-z]{2,20})(.[a-z]{2,10})?$"
    )
  )
  .messages({ "string.pattern.base": "invalid email id" })
  .required(),
  password: Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"))
  .required()
  .messages({
    "string.pattern.base":
      "password must have at least one capital letter, small letter and number with minimum 8 characters",
  }),
  phone:Joi.string().length(10).pattern(/^[0-9]+$/).messages({ "string.pattern.base": "invalid mobile number" }).required(),
  deptName: Joi.string().required(),
  designation: Joi.string().required(),
  areaint: Joi.string().required(),
  place: Joi.string().required(),
  nation: Joi.string().required(),
  role: Joi.string().required()
});

// login validation
const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(4).required(),
});

const bookingSchema= Joi.object({
  employeeName: Joi.string().required(),
  ICTAKId:Joi.string().required(),
  bookingDate:Joi.date().required(),
  hallName: Joi.string().required(),
  startTime: Joi.string().required(),
  endTime: Joi.string().required(),
  eventDetails:Joi.string().required(),
  username:Joi.string().required(),
  dateStamp: Joi.date().required(),
});

module.exports = { authSchema, loginSchema, bookingSchema };
