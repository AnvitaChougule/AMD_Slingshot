const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/nutrismart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const healthSchema = new mongoose.Schema({
  mealsPerDay: Number,
  breakfast: String,
  fastFood: String,
  waterIntake: Number,
  fruitIntake: String,
  vegetableIntake: String,
  exercise: String,
  sleepHours: Number,
  score: Number,
  suggestions: [String],
});

const Health = mongoose.model("Health", healthSchema);

// Save health data
app.post("/api/health", async (req, res) => {
  const data = new Health(req.body);
  await data.save();
  res.json({ message: "Health data saved successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});