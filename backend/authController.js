const Donor = require("../models/Donor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, bloodGroup, city, phone } = req.body;

    const exists = await Donor.findOne({ email });
    if (exists) return res.json({ msg: "Email already registered!" });

    const hashed = await bcrypt.hash(password, 10);

    const newDonor = await Donor.create({
      name,
      email,
      password: hashed,
      bloodGroup,
      city,
      phone,
    });

    res.json({ msg: "Signup Successful 🎉", donor: newDonor });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const donor = await Donor.findOne({ email });
    if (!donor) return res.json({ msg: "User not found" });

    const match = await bcrypt.compare(password, donor.password);
    if (!match) return res.json({ msg: "Incorrect Password" });

    const token = jwt.sign({ id: donor._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ msg: "Login Successful ", token });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
