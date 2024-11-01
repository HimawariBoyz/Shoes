const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const productRoutes = require('./routes/productRoutes'); // นำเข้า productRoutes
const userRoutes = require('./routes/userRoutes'); // นำเข้า userRoutes

const app = express();
app.use(cors());
app.use(express.json());

// ตั้งค่าเส้นทาง API สำหรับ products
app.use('/api', productRoutes); // ตั้งค่า base path สำหรับสินค้าทั้งหมด

// ตั้งค่าเส้นทาง API สำหรับ users
app.use('/api/users', userRoutes); // ตั้งค่า base path สำหรับผู้ใช้

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
