// packages
const Joi = require("joi");

// register validation
const authSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(4).required(),
});

// login validation
const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(4).required(),
});

module.exports = { authSchema, loginSchema };
