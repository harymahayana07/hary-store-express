const express = require('express');
const router = express.Router();
const tagController = require('../../controllers/tagController');

// Endpoint untuk mendapatkan semua produk
router.get('/', tagController.getAllTags);

// Endpoint untuk mendapatkan satu produk berdasarkan ID
router.get('/:id', tagController.getTagById);

// Endpoint untuk menambahkan Tag baru
router.post('/', tagController.createTag);

// Endpoint untuk memperbarui Tag berdasarkan ID
router.put('/:id', tagController.updateTag);

// Endpoint untuk menghapus Tag berdasarkan ID
router.delete('/:id', tagController.deleteTag);

module.exports = router;
