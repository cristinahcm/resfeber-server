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

router.get("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id);
    const userFiltered = users.filter(
      (user) =>
        user.username ||
        user.email ||
        user.picture ||
        user.interests ||
        user.gender ||
        user.comments ||
        user.age
    );
    return res.status(200).json(userFiltered);
  } catch (error) {
    next(error);
  }
});

// router post to use cloudinary
router.put("/upload", isAuthenticated, async (req, res, next) => {
  try {
    const { picture } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, {
      picture,
    });
    return res.status(200).json(user);
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
