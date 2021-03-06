const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    amount:  Number,
    entrydate: {type: Date, default: Date.now},
    category: {type: Schema.ObjectId, ref: 'Category', required: true},
    account: {type: Schema.ObjectId, ref: 'Account', required: true}
});

module.exports = mongoose.model('Entry', EntrySchema);