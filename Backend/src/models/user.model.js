const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { role } = require("../helpers/user.role");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    default: "ICTAKID",
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  deptName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  areaint: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  nation: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [role.admin, role.associate],
    default: role.associate,
  }
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("user", UserSchema);
module.exports = User;
