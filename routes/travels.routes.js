const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router();
const Travel = require("../models/Travel.model");

router.get("/", async (req, res, next) => {
  try {
    const travels = await Travel.find();
    return res.status(200).json(travels);
  } catch (error) {
    next(error);
  }
});

router.post("/upload", async (req, res, next) => {
  try {
    const {
      initialDate,
      finalDate,
      destination,
      typeTravel,
      origin,
      route,
      budget,
      images,
    } = req.body;
    console.log(typeTravel);
    const travel = await Travel.create({
      initialDate,
      finalDate,
      destination,
      typeTravel,
      origin,
      route,
      budget,
      images,
    });
    return res.status(201).json(travel);
  } catch (error) {
    next(error);
  }
});

router.put("/edit/:id", async (req, res, next) => {
  try {
    const { dates, destination, type, origin, route, budget, images } =
      req.body;
    const travel = await Travel.findByIdAndUpdate(
      req.params.id,
      {
        dates,
        destination,
        typeTravel,
        origin,
        route,
        budget,
        images,
      },
      { new: true }
    );
    return res.status(200).json(travel);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const travel = await Travel.findById(req.params.id);
    return res.status(200).json(travel);
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    return res.status(200).json(travel);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
