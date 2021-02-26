const assert = require('assert');
const { City, Country } = require('../../../../app/models/index');
const mongoose = require('mongoose');


describe('Create city document', () => {
    let city_country;
    beforeEach(() => {
        city_country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return city_country.save()
            .then(() => {
            });
    });
    it('Create new city ', () => {
        const city = new City({
            name: 'test name city',
            lat: 'test lat city',
            long: 'test long city',
            department: 'test department city',
            located_in: city_country._id,
        });
        return city.save()
            .then(() => {
                assert(!city.isNew);
            })
        });
});
