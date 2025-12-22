const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: [32, "The title should not be greater than 32 characters"],
      minLength: [2, "The title should not be less than 2 characters"],
    },
    body: {
      type: String,
      required: true,
      maxLength: [400, "The title should not be greater than 400 characters"],
      minLength: [20, "The title should not be less than 20 characters"],
    },

    author: {
      type: String,
      required: true,
      enum: ["NjoxPy", "Chax", "Zai", "Alpha", "Iptsum"],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
