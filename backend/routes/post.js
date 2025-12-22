const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/post");
const {
  BAD_REQUEST,
  OK,
  SERVER_ERROR,
  NOT_FOUND,
  CREATED,
} = require("../constants/responseCode");
const router = express.Router();

// create
router.post("/", async (req, res) => {
  try {
    const { title, body, author } = req.body;

    if (!title || !body || !author) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Title,body and author are required" });
    }

    if (title.length > 32 && title.length < 2) {
      return res.status(BAD_REQUEST).json({
        message:
          "Title length should not be greater than 32 characters and less than 2 characters",
      });
    }
    if (body.length > BAD_REQUEST && body.length < 20) {
      return res.status(BAD_REQUEST).json({
        message:
          "Title length should not be greater than BAD_REQUEST characters and less than 20 characters",
      });
    }

    const validAuthors = ["NjoxPy", "Chax", "Zai", "Alpha", "Iptsum"];

    if (!validAuthors.includes(author)) {
      return res.status(BAD_REQUEST).json({ message: "Invalid author" });
    }

    const newBlog = await Post.create({ title, body, author });

    if (!newBlog) {
      return res.status(NOT_FOUND).json({ message: "Blog not found" });
    }

    res.status(CREATED).json({
      message: "New blog added",
      data: newBlog,
    });
  } catch (error) {
    console.error(error.message);
    res.status(SERVER_ERROR).json({ message: "Internal server error" });
  }
});

// read
router.get("/", async (req, res) => {
  try {
    const blogs = await Post.find().sort({ createdAt: -1 });

    if (blogs.length === 0) {
      return res.status(NOT_FOUND).json({ message: "No blog found" });
    }

    res.status(OK).json({ blogs: blogs });
  } catch (error) {
    console.error(error.message);
    res.status(SERVER_ERROR).json({ message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(BAD_REQUEST).json({ message: "Enter blog" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(NOT_FOUND).json({ message: "Blog not found" });
    }
    const blog = await Post.findById(id);

    if (!blog) {
      return res.status(NOT_FOUND).json({ message: "blog not found" });
    }

    res.status(OK).json({ message: "Blog retrieved sucessfully", data: blog });
  } catch (error) {
    console.error(error.message);
    res.status(SERVER_ERROR).json({ message: "Internal server error" });
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(BAD_REQUEST).json({ message: "Enter blog" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(NOT_FOUND).json({ message: "Blog not found" });
    }

    const updatedBlog = await Post.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(OK).json({ message: "Blog not found" });
    }

    res.status(OK).json({
      message: "Updated sucessfuly",
      data: updatedBlog,
    });
  } catch (error) {
    console.error(error.message);
    res.status(SERVER_ERROR).json({ message: "Internal server error" });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(BAD_REQUEST).json({ message: "Eneter blog" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(NOT_FOUND).json({ message: "Blog not found" });
    }

    const deletedBlog = await Post.findOneAndDelete({ _id: id });

    if (!deletedBlog) {
      return res.status(NOT_FOUND).json({ message: "Blog not found" });
    }

    res.status(OK).json({
      message: "Blog deleted",
      data: deletedBlog,
    });
  } catch (error) {
    console.error(error.message);
    res.status(SERVER_ERROR).json({ message: "Internal server error" });
  }
});

module.exports = router;
