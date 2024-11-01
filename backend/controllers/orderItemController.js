// controllers/orderItemController.js
const OrderItem = require('../models/OrderItem'); // โมเดลสำหรับรายการคำสั่งซื้อ

// ฟังก์ชันอ่านข้อมูลรายการคำสั่งซื้อทั้งหมด
exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.json(orderItems);
  } catch (error) {
    console.error('Error fetching order items:', error);
    res.status(500).json({ error: 'Failed to fetch order items' });
  }
};

// ฟังก์ชันอื่น ๆ สำหรับการจัดการรายการคำสั่งซื้อ
exports.createOrderItem = async (req, res) => {
  // ตัวอย่างการสร้างรายการคำสั่งซื้อ
};
