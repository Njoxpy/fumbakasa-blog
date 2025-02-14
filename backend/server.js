require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Static file serving for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect DB
const connectDB = require("./config/DB");

// Middleware
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: http://localhost:${process.env.PORT}`);
});
