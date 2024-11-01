const { Sequelize } = require('sequelize');
require('dotenv').config();

// ตรวจสอบการโหลดค่าจาก .env
console.log('Dialect:', process.env.DB_DIALECT); // ควรแสดงผลเป็น 'mysql'

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = db;
