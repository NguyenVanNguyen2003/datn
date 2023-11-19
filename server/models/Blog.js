const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  userPost: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    minlength: 20,
    maxlength: 30,
  },
  content: {
    minlength: 5,
    type: String,
    maxlength: 256,
  }
});

module.exports = mongoose.model("Blog", BlogSchema);
