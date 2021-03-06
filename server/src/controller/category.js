const express = require('express');
const router = express.Router();
const Category = require('../model/Category');

router.get('/', function(request, response) {
    Category.find(function(error, categories) {
        response.json(categories);
    });
});

router.get('/:name', function(request, response) {
    const name = request.params.name;
    Category.where({name: name}).findOne(function(error, category) {
        if(!category) {
            response.status(404).json({
                error: `Category '${name}' not found`
            });
            return;
        }
        response.json(category);
    });
});

router.post('/', function(request, response) {

    if(typeof request.body.name !== 'string' || request.body.name.length === 0) {
        response.status(422).json({
            error: "Category name not given"
        });
        return;
    }

    const category = new Category({name: request.body.name, color: request.body.color});

    category.save(function (error) {
        if(error) {
            if(error.code === 11000) {
                response.status(409).json({error: 'Category already exists'});
            }
            else {
                console.error(error);
                response.status(500).json({error: 'Category save failed'})
            }
        }
        else {
            response.json(category);
        }

    });
});

module.exports = router;