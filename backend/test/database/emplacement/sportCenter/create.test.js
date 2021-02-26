const assert = require('assert');
const { SportCenter, City, Country } = require('../../../../app/models/index');

describe('Create sportCenter document', () => {
    let country, city;
    beforeEach(() => {
        country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return country.save()
            .then(() => {
                city = new City({
                    name: 'test name city',
                    lat: 'test lat city',
                    long: 'test long city',
                    department: 'test department city',
                    located_in: country._id,
                });
                return city.save()
                    .then(() => {
                    });
            });

    });
    it('Create new sportCenter ', () => {
        const sportCenter = new SportCenter({
            name: 'test name sport center',
            sport_types: 'test type sport center',
            lat: 'test lat sport center',
            long: 'test long sport center',
            is_in: city._id
        });
        return sportCenter.save()
            .then((doc) => {
                assert(!doc.isNew);
                assert(doc.is_in === sportCenter.is_in);
            })
    });
});
