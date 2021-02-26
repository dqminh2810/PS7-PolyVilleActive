const assert = require('assert');
const { Library, City, Country } = require('../../../../app/models/index');

describe('Create library document', () => {
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

    it('Create new library ', () => {
        const library = new Library({
            name: "test name library",
            opening_hour: "test opening hour library",
            wheelchair: "test wheelchair library",
            lat: "test lat library",
            long: "test long library",
            is_in: city._id
        });
        return library.save()
            .then((doc) => {
                assert(!doc.isNew);
                assert(doc.is_in === library.is_in);
            })
    });
});
