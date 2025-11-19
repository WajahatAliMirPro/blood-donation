const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },

  email: { type: String, unique: true },
  password: { type: String },

  lastDonation: { type: String, default: "Not donated yet" },
});

module.exports = mongoose.model("Donor", donorSchema);
