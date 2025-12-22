const mongoose = require("mongoose");

const connectDB = () => {
  const MONGO_URI =
    process.env.MONGO_URI || "mongodb://localhost:27017/fumbakasa-blog";
  try {
    mongoose.connect(MONGO_URI);
    console.log("connected to Db");
  } catch (error) {
    console.error(`failed to connect: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
