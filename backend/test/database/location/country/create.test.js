const assert = require('assert');
const { Country } = require('../../../../app/models/index');

describe('Create country document', () => {
    it('Create new country ', () => {
        //assertion is not included in mocha so
        //require assert which was installed along with mocha
        const country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return country.save() //takes some time and returns a promise
            .then(() => {
                assert(!country.isNew); //if country is saved to db it is not new
            });
    });
});
