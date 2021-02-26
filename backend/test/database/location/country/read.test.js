const assert = require('assert');
const { Country } = require('../../../../app/models/index');

describe('Read country document', () => {
    let country;
    beforeEach(() => {
        country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return country.save()
            .then((doc) => {
            });
    });
    it('Find country using the country name', () => {
        return Country.findOne({ name: "test name country" })
            .then((country) => {
                assert(country.name === "test name country");
            });
    });
    it('Find country using id', () => {
        return Country.findById(country._id)
            .then((country) => {
                assert(country.name === "test name country");
            });
    })
});
