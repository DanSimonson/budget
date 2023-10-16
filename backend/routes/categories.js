const express = require("express");
//const Category = require("../models/categoryModel");
const {
  createCategory,
  getCategories,
  getCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/", getCategories);
//router.get("/:id", getCategory);
router.post("/", createCategory);
//get a category
router.get("/:id", getCategory);

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a category" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a category" });
});

module.exports = router;

/* (req, res) => {
  res.json({ mssg: "GET a single category" });
  console.log("req.body: ", req.body);
} */

/* async (req, res) => {
  const { title, color } = req.body;

  try {
    const category = await Category.create({ title, color });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
} */
