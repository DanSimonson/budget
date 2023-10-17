const Category = require("../models/categoryModel");
const mongoose = require("mongoose");

//'./' get all
const getCategories = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(categories);
};

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
  const { title, color } = req.body;

  try {
    const category = await Category.create({ title, color });
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

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
