const assert = require('assert');
const { Country } = require('../../../../app/models/index');

describe('Delete country document', () => {
    let country;
    beforeEach(() => {
        country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        country.save()
            .then((doc) => {
            });
    });

    it('Delete one country using its id', () => {
        return country.remove()
            .then(() => Country.findById(country._id))
            .then((country2) => {
                assert(country2 == null);
            });
    });
    it('Delete one country using its instance', () => {
        return country.remove()
            .then(() => Country.findOne({ name: 'test name country' }))
            .then((country2) => {
                assert(country2 == null);
            });
    });
    it('Delete multiple countries matching using model', () => {
        return Country.deleteMany({ name: 'test name country' })
            .then(() => Country.findOne({ name: 'test name country' }))
            .then((country2) => {
                assert(country2 == null);
            });
    });
    it('Delete one country matching using model' , () => {
        return Country.findOneAndDelete({ name: 'test name country' })
            .then(() => Country.findOne({ name: 'test name country' }))
            .then((country2) => {
                assert(country2 == null);
            });
    });
    it('Delete one country using id', () => {
        return Country.findByIdAndDelete(country._id)
        // the following code block is repeated again and again
            .then(() => Country.findOne({ name: 'test name country' })
            .then((country2) => {
                assert(country2 == null);
            })
            );
        // block end
    });

});
