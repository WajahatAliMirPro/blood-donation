const Donor = require("../models/Donor");

// Register Donor (without login)
exports.registerDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body);
    res.json({ msg: "Donor added successfully", donor });
  } catch (error) {
    res.status(500).json({ error: "Error adding donor" });
  }
};

// Get All Donors
exports.getDonorList = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching donors" });
  }
};

// Find Donor by Blood Group
exports.findDonor = async (req, res) => {
  try {
    const { bloodGroup, city } = req.body;
    const donors = await Donor.find({ bloodGroup, city });

    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: "Error finding donor" });
  }
};
