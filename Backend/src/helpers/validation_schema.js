// packages
const Joi = require("joi");

// register validation
const authSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(4).required(),
  phone:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
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

module.exports = { authSchema, loginSchema };
