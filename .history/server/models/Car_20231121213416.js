const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imagePath: {
    type: String,
    default: ""
  },
  image1: {
    type: String,
    default: ""
  },
  image2: {
    type: String,
    default: ""
  },
  image3: {
    type: String,
    default: ""
  },
  location: {
    type: String,
    default: "Da Nang"
  },
  price: {
    type: Number
  },
  chair: {
    type: Number,
    minlength: 1,
    maxlength: 2,
  },
  fuel: {
    type: String,
  },
  // NguyenNV thêm
  // tax: {
  //  type: String,
  //  required: true,
  // },
  falsh: {
    type: String,
   },
   star: {
    type: String,
   },
   usage: {
    type: String,
   },
});

module.exports = mongoose.model("Car", CarsSchema);