const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/categoryController');

// Endpoint untuk mendapatkan semua Category
router.get('/', categoryController.getAllCategories);

// Endpoint untuk mendapatkan kategori berdasarkan ID
router.get('/:id', categoryController.getCategoryById);

// Endpoint untuk membuat category baru
router.post('/', categoryController.createCategory);

// Endpoint untuk memperbarui category berdasarkan ID
router.put('/:id', categoryController.updateCategory);

// Endpoint untuk menghapus category berdasarkan ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
