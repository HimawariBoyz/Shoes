// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'firstName' // ชื่อฟิลด์ในฐานข้อมูล
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'lastName' // ชื่อฟิลด์ในฐานข้อมูล
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // เปิดใช้งาน createdAt และ updatedAt
  createdAt: 'created_at', // เปลี่ยนชื่อ createdAt ในฐานข้อมูล
  updatedAt: 'updated_at', // เปลี่ยนชื่อ updatedAt ในฐานข้อมูล
});

module.exports = User;
