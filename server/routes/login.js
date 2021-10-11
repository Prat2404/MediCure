const express = require('express');
const router = express.Router();

// @route  GET /login
// @desc   Test route
// @access Public
router.get('/', (req, res) => res.send('Login route'));

module.exports = router;
