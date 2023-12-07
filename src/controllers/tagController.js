const { Tag, Product, ProductTag } = require('../models');

const tagController = {
  getAllTags: async (req, res) => {
    try {
      const tags = await Tag.findAll({
        include: [{ model: Product, through: ProductTag }],
      });
      res.status(200).json(tags);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getTagById: async (req, res) => {
    try {
      const tag = await Tag.findOne({
        where: { id: req.params.id },
        include: [{ model: Product, through: ProductTag }],
      });
      res.status(200).json(tag);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createTag: async (req, res) => {
    try {
      const tag = await Tag.create(req.body);
      res.status(200).json(tag);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateTag: async (req, res) => {
    try {
      await Tag.update(req.body, { where: { id: req.params.id } });
      res.status(200).json({ message: `Tag ${req.params.id} updated!` });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteTag: async (req, res) => {
    try {
      await Tag.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: `Tag ${req.params.id} deleted!` });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = tagController;
