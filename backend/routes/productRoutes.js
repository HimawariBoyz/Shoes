const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// ดึงข้อมูลสินค้าทั้งหมด
router.get('/products', productController.getProducts);

// ดึงข้อมูลสินค้าตาม ID
router.get('/products/:id', productController.getProductById);

// เพิ่มสินค้าใหม่
router.post('/products', productController.addProduct);

// อัปเดตสินค้าตาม ID
router.put('/products/:id', productController.updateProduct);

// ลบสินค้าตาม ID
router.delete('/products/:id', productController.deleteProduct);


module.exports = router;
