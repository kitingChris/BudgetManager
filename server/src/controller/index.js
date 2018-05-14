const express = require('express');
const router = express.Router();

router.use('/api/hello', require('./hello'));
router.use('/api/category', require('./category'));

module.exports = router;