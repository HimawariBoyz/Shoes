// routes/orderItemRoutes.js
const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController'); // ตรวจสอบการนำเข้าที่นี่

// Route สำหรับการอ่านข้อมูลรายการคำสั่งซื้อ
router.get('/', orderItemController.getAllOrderItems); // ฟังก์ชันใน controller ต้องถูกต้อง

// Route อื่น ๆ ที่คุณต้องการสามารถเพิ่มได้ที่นี่
router.post('/', orderItemController.createOrderItem); // ตัวอย่างการสร้างรายการคำสั่งซื้อ

module.exports = router;
