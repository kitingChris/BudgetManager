const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json({
        text: 'Hello World'
    });
});

module.exports = router;