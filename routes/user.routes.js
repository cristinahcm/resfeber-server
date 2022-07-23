const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();
const Travel = require("../models/Travel.model");
const User = require("../models/User.model");

router.get("/", isAuthenticated, async (req, res) => {
  try {
    res.status(200).json(req.payload);
    console.log(req.payload);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.put("/edit/:id", isAuthenticated, async (req, res, next) => {
  try {
    const { picture } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        picture,
      },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
