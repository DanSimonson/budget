const express = require("express");

const {
  createTransaction,
  getTransactions,
  getTransaction,
  deleteTransaction,
  updateTransaction,
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
//update transaction
router.patch("/:id", updateTransaction);

module.exports = router;
