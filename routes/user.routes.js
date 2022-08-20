const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();
const Travel = require("../models/Travel.model");
const User = require("../models/User.model");

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

router.put("/like/:_id", isAuthenticated, async (req, res, next) => {
  try {
    const { isFavorite } = req.body;
    console.log(isFavorite);
    const userCurrent = await User.findById(req.params._id);

    const user = await User.findByIdAndUpdate(
      req.params._id,
      {
        isFavorite: [...userCurrent.isFavorite, isFavorite],
      },
      { new: true }
    );
    console.log("like: ", req.payload);
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
