const { Category, Product } = require('../models');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll({
        include: [Product],
      });
      res.json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findOne({
        where: { id: req.params.id },
        include: [Product],
      });
      res.json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res
        .status(200)
        .json({ message: `${req.body.category_name} category created!` });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateCategory: async (req, res) => {
    try {
      await Category.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json({ message: `Category ${req.params.id} updated!` });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await Category.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json({ message: `Category ${req.params.id} deleted!` });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = categoryController;
