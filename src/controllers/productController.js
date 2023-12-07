const { Product, Category, Tag, ProductTag } = require('../models');

const productController = {
  // Controller untuk mendapatkan semua produk
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [{ model: Tag, through: ProductTag }],
      });
      res.json(products);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json(err);
    }
  },

  // Controller untuk mendapatkan satu produk berdasarkan ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findOne({
        where: { id: req.params.id },
        include: [Category, { model: Tag, through: ProductTag }],
      });
      res.json(product);
    } catch (err) {
      console.error('Error fetching product by ID:', err);
      res.status(500).json(err);
    }
  },

  // Controller untuk menambahkan produk baru
  addProduct: async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);

      if (req.body.tagIds && req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: newProduct.id,
            tag_id,
          };
        });
        await ProductTag.bulkCreate(productTagIdArr);
      }

      res.status(201).json(newProduct);
    } catch (err) {
      console.error('Error adding product:', err);
      res.status(500).json(err);
    }
  },

  // Controller untuk memperbarui produk berdasarkan ID
  updateProduct: async (req, res) => {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (req.body.tagIds && req.body.tagIds.length) {
        const productTags = await ProductTag.findAll({
          where: { product_id: req.params.id },
        });
        const productTagIds = productTags.map(({ tag_id }) => tag_id);

        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

        const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);

        await ProductTag.destroy({ where: { id: productTagsToRemove } });
        await ProductTag.bulkCreate(newProductTags);
      }

      res.json({ message: `Product ${req.params.id} updated!` });
    } catch (err) {
      console.error('Error updating product:', err);
      res.status(400).json(err);
    }
  },

  // Controller untuk menghapus produk berdasarkan ID
  deleteProduct: async (req, res) => {
    try {
      await Product.destroy({
        where: { id: req.params.id },
      });
      res.json({ message: `Product ${req.params.id} deleted!` });
    } catch (err) {
      console.error('Error deleting product:', err);
      res.status(400).json(err);
    }
  },
};

module.exports = productController;
