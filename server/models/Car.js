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
  userPost: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  location: {
    type: String,
    default: "Da Nang"
  },
  price: {
    type: Number
  },
  numberCar: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Car", CarsSchema);