const Product = require('../models/Product');
const { Sequelize } = require('sequelize'); 

// Fetch all products with optional pagination and price filtering
exports.getProducts = async (req, res) => {
  const { page = 1, limit = 24, minPrice = 0, maxPrice = 5000 } = req.query;

  try {
    const offset = (page - 1) * limit;

    const products = await Product.findAll({
      where: {
        approx_price_range: {
          [Sequelize.Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)],
        },
      },
      attributes: ['id', 'model_name', 'design', 'design_name', 'approx_price_range', 'model_code', 'size_range', 'image_url'],
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Fetch product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      attributes: ['id', 'model_name', 'design', 'design_name', 'approx_price_range', 'model_code', 'size_range', 'image_url'],
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

// Add new product
exports.addProduct = async (req, res) => {
  const { model_name, design, design_name, approx_price_range, model_code, size_range, image_url } = req.body;
  try {
    const newProduct = await Product.create({
      model_name,
      design,
      design_name,
      approx_price_range: parseFloat(approx_price_range), // Ensure price is a number
      model_code,
      size_range,
      image_url,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Update existing product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { model_name, design, design_name, approx_price_range, model_code, size_range, image_url } = req.body;
  try {
    const [updated] = await Product.update(
      {
        model_name,
        design,
        design_name,
        approx_price_range: parseFloat(approx_price_range), // Ensure price is a number
        model_code,
        size_range,
        image_url,
      },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Product.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
