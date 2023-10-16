const express = require("express");
const Category = require("../models/categoryModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all categories" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single category" });
});

router.post("/", async (req, res) => {
  const { title, color } = req.body;

  try {
    const category = await Category.create({ title, color });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a category" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a category" });
});

module.exports = router;