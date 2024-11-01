// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route สำหรับการสร้างคำสั่งซื้อ
router.post('/', orderController.createOrder);

// Route สำหรับการอ่านข้อมูลคำสั่งซื้อทั้งหมด
router.get('/', orderController.getAllOrders);

// Route สำหรับการอ่านข้อมูลคำสั่งซื้อตาม ID
router.get('/:id', orderController.getOrderById);

// Route สำหรับการอัปเดตข้อมูลคำสั่งซื้อ
router.put('/:id', orderController.updateOrder);

// Route สำหรับการลบคำสั่งซื้อ
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
