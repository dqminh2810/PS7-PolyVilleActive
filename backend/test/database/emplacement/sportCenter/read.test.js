const assert = require('assert');
const { SportCenter, City, Country } = require('../../../../app/models/index');

describe('Read sportCenter document', () => {
    let country, city, sportCenter;
    beforeEach(() => {
        country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return country.save()
            .then((doc) => {
                city = new City({
                    name: 'test name city',
                    lat: 'test lat city',
                    long: 'test long city',
                    department: 'test department city',
                    located_in: doc,
                });
                return city.save()
                    .then((doc) => {
                        sportCenter = new SportCenter({
                            name: 'test name sportCenter',
                            sport_types: 'test type sportCenter',
                            lat: 'test lat sportCenter',
                            long: 'test long sportCenter',
                            is_in: city._id
                        });
                        return sportCenter.save()
                            .then((doc) => {
                            })
                    });
            });
    });
    it('Find one sportCenter using sportCenter name', () => {
        return SportCenter.findOne({ name: "test name sportCenter" })
            .then((doc) => {
                assert(doc.name === "test name sportCenter");
            })
    });

});
