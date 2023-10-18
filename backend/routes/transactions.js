const express = require("express");
//const { createTransaction } = require("../controllers/Controller");
const {
  createTransaction,
  getTransactions,
  getTransaction,
  deleteTransaction,
} = require("../controllers/Controller");
const router = express.Router();

/* routes */

//get transactions
router.get("/", getTransactions);
//post a transaction
router.post("/", createTransaction);
//get a transaction
router.get("/:id", getTransaction);
//delete a transaction
router.delete("/:id", deleteTransaction);
//router.delete("/:id", deleteCategory);
//update category
//router.patch("/:id", updateCategory);

module.exports = router;
