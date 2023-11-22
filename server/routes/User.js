const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth");
require("../models/User");
const User = mongoose.model("User");
const checkAdmin = require("../middleware/checkAdmin");

//API GET ALL USER
router.get("/getAllUser", async (req, res) => {
  try {
    const users = await User.find({}).select("-password");;
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// API GET USERDetail
router.get("/getProfile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy USER" });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi Server" });
  }
});

router.put("/banned-user/:id", verifyToken, checkAdmin, async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndUpdate(userId, { status: 'banned' });

    if (!user) {
      return res.status(404).json({ success: false, message: "Không tìm thấy USER" });
    }

    res.json({ success: true, message: "User Đã Bị Ban" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Lỗi Server" });
  }
});


module.exports = router;
