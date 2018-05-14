const express = require('express');
const router = express.Router();
const Category = require('../model/Category');

router.get('/', function(req, res) {
    Category.find(function(err, entries) {
        res.json(entries);
    });
});

router.post('/', function(req, res) {
    const category = new Category({name: 'test', color: '#ccc'});

    category.save(function (error) {
        if(error) {
            if(error.code === 11000) {
                res.status(409).json({error: 'Category already exists'});
            }
            else {
                console.error(error);
                res.status(500).json({error: 'Category save failed'})
            }
        }
        else {
            res.json(category);
        }

    });
});

module.exports = router;