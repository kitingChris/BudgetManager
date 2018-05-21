const express = require('express');
const router = express.Router();
const Entry = require('../model/Entry');

router.get('/', function(request, response) {
    Entry.find(function(error, entries) {
        response.json(entries);
    });
});

router.get('/:id', function(request, response) {
    const id = request.params.id;
    Entry.where({_id: id}).findOne(function(error, entry) {
        if(error) {
            response.status(404).json({
                error: `Entry with id '${id}' not found`
            });
            return;
        }
        response.json(entry);
    });
});

router.post('/', function(request, response) {

});

module.exports = router;