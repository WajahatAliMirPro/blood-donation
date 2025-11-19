const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/donor", require("./routes/donorRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
