const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    minlength: 6,
    maxLength: 20,
    required: true
  },
  phoneNumber: {
    type: Number,
    minlength: 11,
    unique: true,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxLength: 40,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imagePath: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: "false"
  },
  location: {
    type:String,
    default: "Việt Nam"
  },
  status:{
    type: String,
    enum: ["banned", "active"],
    default: "active"
  },
  isVerified:{
    type: String,
    enum: ["Yes", "No"],
    default: "No"
  },
});

module.exports = mongoose.model("User", UserSchema);