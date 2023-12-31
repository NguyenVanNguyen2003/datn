const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    minlength: 6,
    maxLength: 20,
    required: true
  },
  birthDay:{
    type: String,
    default: "01/01/1991"
  },
  sex:{
    type: String,
    default: "Nam",
  },
  Vip:{
    type: String,
    default: "VIP 1"
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
    default: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
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
  GPLX:{
    type: String,
  }
});

module.exports = mongoose.model("User", UserSchema);