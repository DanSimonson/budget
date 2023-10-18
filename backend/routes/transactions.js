const express = require("express");
//const { createTransaction } = require("../controllers/Controller");
const {
  createTransaction,
  getTransactions,
  getTransaction,
} = require("../controllers/Controller");
const router = express.Router();

/* routes */
//get categories
//get categories
router.get("/", getTransactions);
//post a category
router.post("/", createTransaction);
//get a category
router.get("/:id", getTransaction);
//delete a category
//router.delete("/:id", deleteCategory);
//update category
//router.patch("/:id", updateCategory);

module.exports = router;
