// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route สำหรับการลงทะเบียนผู้ใช้
router.post('/register', userController.register);

// Route สำหรับการล็อกอินผู้ใช้
router.post('/login', userController.login);

// Route สำหรับการอ่านข้อมูลผู้ใช้ทั้งหมด
router.get('/', userController.getAllUsers);

// Route สำหรับการอ่านข้อมูลผู้ใช้ตาม ID
router.get('/:id', userController.getUserById);

// Route สำหรับการอัปเดตข้อมูลผู้ใช้
router.put('/:id', userController.updateUser);

// Route สำหรับการลบผู้ใช้
router.delete('/:id', userController.deleteUser);

module.exports = router;
