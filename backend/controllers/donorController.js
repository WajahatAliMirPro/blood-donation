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
    // Security: Exclude the password field from the results
    const donors = await Donor.find().select("-password");
    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching donors" });
  }
};

// Find Donor by Blood Group
exports.findDonor = async (req, res) => {
  try {
    const { bloodGroup, city } = req.body;
    
    // Build dynamic query
    let query = {};
    if(bloodGroup) query.bloodGroup = bloodGroup;
    if(city) query.city = city;

    // Security: Exclude the password field
    const donors = await Donor.find(query).select("-password");

    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: "Error finding donor" });
  }
};