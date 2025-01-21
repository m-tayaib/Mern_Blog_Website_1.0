const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "default.png",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  stack: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });


module.exports = mongoose.model("Post", PostSchema);