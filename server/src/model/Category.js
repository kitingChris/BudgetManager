const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = mongoose.model('Category', new Schema({
    name:  {type: String, unique: true, required: true},
    color: {type: String, default: '#fff'}
}));

module.exports = Category;