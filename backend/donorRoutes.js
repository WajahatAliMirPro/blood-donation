const express = require("express");
const { registerDonor, getDonorList, findDonor } = require("../controllers/donorController");

const router = express.Router();

router.post("/register", registerDonor);
router.get("/list", getDonorList);
router.post("/find", findDonor);

module.exports = router;
