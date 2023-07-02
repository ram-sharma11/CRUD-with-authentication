const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  phone: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
