// routes/protectedRoute.js
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/protected', auth, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.userId });
});

module.exports = router;
