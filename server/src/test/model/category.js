const expect = require('chai').expect;

const Category = require('../../model/Category');

describe('Category', function() {
    it('should be invalid if name is empty', function(done) {
        const category = new Category();

        category.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
});