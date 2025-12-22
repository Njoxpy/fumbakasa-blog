require("dotenv").config();

// core imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// local imports
const connectDB = require("./config/DB");
const postRoutes = require("./routes/post");

const app = express();
const PORT = process.env.PORT || 4000;

/* -------------------- DATABASE -------------------- */
connectDB();

/* -------------------- MIDDLEWARE ------------------ */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

/* -------------------- ROUTES ---------------------- */

// homepage
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Fumbakasa blog!",
    success: true,
  });
});

// blog routes
app.use("/api/v1/blogs", postRoutes);

// health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "Fumbakasa blog is running",
    success: true,
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

/* -------------------- 404 HANDLER ----------------- */
app.use((req, res) => {
  res.status(404).json({
    message: `Route not found: ${req.originalUrl}`,
    success: false,
  });
});

/* -------------------- SERVER ---------------------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
