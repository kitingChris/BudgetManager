const express = require('express');
const router = express.Router();
const Account = require('../model/Account');

router.get('/', function(request, response) {
    Account.find(function(error, accounts) {
        response.json(accounts);
    });
});

router.get('/:name', function(request, response) {
    const name = request.params.name;
    Account.where({name: name}).findOne(function(error, account) {
        if(!account) {
            response.status(404).json({
                error: `Account '${name}' not found`
            });
            return;
        }
        response.json(account);
    });
});

router.post('/', function(request, response) {

    if(typeof request.body.name !== 'string' || request.body.name.length === 0) {
        response.status(422).json({
            error: "Account name not given"
        });
        return;
    }

    const account = new Account({name: request.body.name, color: request.body.startAmount || 0});

    account.save(function (error) {
        if(error) {
            if(error.code === 11000) {
                response.status(409).json({error: 'Account already exists'});
            }
            else {
                console.error(error);
                response.status(500).json({error: 'Account save failed'})
            }
        }
        else {
            response.json(account);
        }

    });
});

module.exports = router;