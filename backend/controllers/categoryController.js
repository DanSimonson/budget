const Category = require("../models/categoryModel");
const mongoose = require("mongoose");

//'./' get all
const getCategories = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(categories);
};

const getCategory = async (req, res) => {
  //res.json({ mssg: "GET a single category" });
  //console.log("req.params: ", req.params);
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

// './:id' get one
// const getCategory = async (req, res) => {
//   console.log("req.body: ", req.body);
//   const { id } = req.body;

//   console.log("id: ", id);
//   const category = await Category.findById(id);
//   console.log("category: ", category);
//   if (!category) {
//     return res.status(404).json({ error: "No such workout" });
//   }

//   res.status(200).json(category);
// };

//post: http://localhost:8338/api/categories
const createCategory = async (req, res) => {
  const { title, color } = req.body;

  try {
    const category = await Category.create({ title, color });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
};
