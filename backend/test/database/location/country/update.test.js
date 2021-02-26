const assert = require('assert');
const { Country } = require('../../../../app/models/index');


describe('Update country document', () => {
    let country;
    beforeEach(() => {
        country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return country.save()
            .then(() => {
            });
    });

    it('Update one country using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(country.updateOne({ name: 'updated test name country' }));
    });

    it('Update multiple countries matching using model', () => {
        return assertHelper(Country.updateMany({ name: 'test name country' }, { name: 'updated test name country' }));
    });

    it('Update one country using model', () => {
        return assertHelper(Country.findOneAndUpdate({ name: 'test name country' }, { name: 'updated test name country' }));
    });

    it('Update one country with id using model', () => {
        return assertHelper(Country.findByIdAndUpdate(country._id, { name: 'updated test name country' }));
    });

    function assertHelper(statement) {
        statement
            .then(() => Country.find({}))
            .then((countries) => {
                assert(countries.length === 1);
                assert(countries[0].name === 'updated test name country');
            });
    }
});
