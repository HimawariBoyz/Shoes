const { Sequelize } = require('sequelize');
const db = require('../config/db'); 

const Product = db.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    model_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    design: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    design_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    approx_price_range: {
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false,
    },
    model_code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size_range: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image_url: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = Product;
