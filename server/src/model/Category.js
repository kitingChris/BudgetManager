const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = mongoose.model('Category', new Schema({
    name:  {type: String, unique: true, required: true},
    color: {type: String, default: '#fff'}
}));

/*Category.schema.path('name').validate(function (value) {
    Category.findOne({ name: value }, function (err, category) {
        if(category){
            return false;
        }
    });
});*/

module.exports = Category;