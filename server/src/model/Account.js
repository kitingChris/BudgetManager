const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = mongoose.model('Account', new Schema({
    name:  {type: String, unique: true, required: true},
    startAmount: {type: Number, default: 0}
}));

module.exports = Account;