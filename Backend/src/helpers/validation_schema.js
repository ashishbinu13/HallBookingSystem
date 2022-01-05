// packages
const Joi = require("joi");

// register validation
const authSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string()
    .email()
    .lowercase()
    .pattern(
      new RegExp(
        "^([a-z0-9.-]{1,64})@([a-z0-9-]{2,200}).([a-z]{2,20})(.[a-z]{2,10})?$"
      )
    )
    .messages({ "string.pattern.base": "invalid email id" })
    .required(),
  password: Joi.string().min(4).required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  deptName: Joi.string().required(),
  designation: Joi.string().required(),
  areaint: Joi.string().required(),
  place: Joi.string().required(),
  nation: Joi.string().required(),
  role: Joi.string().required(),
});

// login validation
const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(4).required(),
  // .pattern(
  //   new RegExp(
  //     "^([a-z0-9.-]{1,64})@([a-z0-9-]{2,200}).([a-z]{2,20})(.[a-z]{2,10})?$"
  //   )
  // )
  // .messages({ "string.pattern.base": "invalid email id" }),
});

const bookingSchema = Joi.object({
  employeeName: Joi.string().required(),
  ICTAKId: Joi.string().required(),
  bookingDate: Joi.date().required(),
  hallName: Joi.string().required(),
  startTime: Joi.string().required(),
  endTime: Joi.string().required(),
  eventDetails: Joi.string().required(),
  username: Joi.string().required(),
  dateStamp: Joi.date().required(),
});

module.exports = { authSchema, loginSchema, bookingSchema };
