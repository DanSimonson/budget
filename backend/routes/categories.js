const express = require("express");
const {
  updateCategory,
  deleteCategory,
  createCategory,
  getCategories,
  getCategory,
} = require("../controllers/Controller");
const router = express.Router();

/* routes */
//get categories
router.get("/", getCategories);
//post a category
router.post("/", createCategory);
//get a category
router.get("/:id", getCategory);
//delete a category
router.delete("/:id", deleteCategory);
//update category
router.patch("/:id", updateCategory);

module.exports = router;
