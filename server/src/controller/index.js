const express = require('express');
const router = express.Router();

router.use('/api/hello', require('./hello'));
router.use('/api/category', require('./category'));
router.use('/api/account', require('./account'));
router.use('/api/entry', require('./entry'));

module.exports = router;