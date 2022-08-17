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

// router post to use cloudinary
// router.post("/upload", async (req, res, next) => {
//   try {
//     const { picture } = req.body;
//     const user = await User.findByIdAndUpdate({
//       picture,
//     });
//     return res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// });

router.put("/edit", isAuthenticated, async (req, res, next) => {
  try {
    const { picture, interests, gender, age } = req.body;
    const user = await User.findByIdAndUpdate(
      req.payload._id,
      {
        picture,
        interests,
        gender,
        age,
      },
      { new: true }
    );
    console.log(req.payload);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select(
      "name email picture isFavorite comments gender interests age"
    );
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
