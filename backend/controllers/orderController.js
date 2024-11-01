// controllers/orderController.js
const Order = require('../models/Order');

// ฟังก์ชันการสร้างคำสั่งซื้อใหม่
exports.createOrder = async (req, res) => {
  const { orderNumber, userId, totalAmount, paymentMethod } = req.body;

  try {
    const newOrder = await Order.create({ orderNumber, userId, totalAmount, paymentMethod });
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// ฟังก์ชันอ่านข้อมูลคำสั่งซื้อทั้งหมด
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// ฟังก์ชันอ่านข้อมูลคำสั่งซื้อตาม ID
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

// ฟังก์ชันอัปเดตข้อมูลคำสั่งซื้อ
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { orderNumber, userId, totalAmount, paymentMethod } = req.body;

  try {
    const updates = { orderNumber, userId, totalAmount, paymentMethod };

    const [updated] = await Order.update(updates, { where: { id } });
    if (updated) {
      const updatedOrder = await Order.findByPk(id);
      res.json({ message: 'Order updated successfully', order: updatedOrder });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
};

// ฟังก์ชันลบคำสั่งซื้อ
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Order.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Failed to delete order' });
  }
};
