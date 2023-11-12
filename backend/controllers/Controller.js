const Category = require("../models/categoryModel");
const Transaction = require("../models/transactionModel");
const mongoose = require("mongoose");

/* category logic */

//'./' get all
const getCategories = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(categories);
};

// get one
const getCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category" });
  }

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "No such category" });
  }

  res.status(200).json(category);
};

//post
const createCategory = async (req, res) => {
  const { title, color, amount } = req.body;

  try {
    const category = await Category.create({ title, color, amount });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const category = await Category.findOneAndDelete({ _id: id });

  if (!category) {
    return res.status(400).json({ error: "No such category" });
  }

  res.status(200).json(category);
};
//update
const updateCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such category" });
  }

  const category = await Category.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!category) {
    return res.status(400).json({ error: "No such category" });
  }

  res.status(200).json(category);
};

/* end category logic */

/* transaction logic */
// get all
const getTransactions = async (req, res) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  res.status(200).json(transaction);
};
// get one
const getTransaction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such transaction" });
  }

  const transaction = await Transaction.findById(id);

  if (!transaction) {
    return res.status(404).json({ error: "No such transaction" });
  }

  res.status(200).json(transaction);
};
//delete
const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such transaction" });
  }

  const transaction = await Transaction.findOneAndDelete({ _id: id });

  if (!transaction) {
    return res.status(400).json({ error: "No such transaction" });
  }

  res.status(200).json(transaction);
};
//post
const createTransaction = async (req, res) => {
  const { name, type, amount, category } = req.body;

  try {
    const transaction = await Transaction.create({
      name,
      type,
      amount,
      category,
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// update a workout
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such transaction" });
  }

  const transaction = await Transaction.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!transaction) {
    return res.status(400).json({ error: "No such transaction" });
  }

  res.status(200).json(transaction);
};
/* end transaction logic */

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
  createTransaction,
  getTransactions,
  getTransaction,
  deleteTransaction,
  updateTransaction,
};
