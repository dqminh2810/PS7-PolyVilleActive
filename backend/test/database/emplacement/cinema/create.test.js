const assert = require('assert');
const { Cinema, City, Country } = require('../../../../app/models/index');

describe('Create cinema document', () => {
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
    it('Create new cinema ', () => {
        const cinema = new Cinema({
            name: 'test name cinema',
            opening_hour: 'test opening hour cinema',
            wheelchair: 'test wheelchair cinema',
            nb_screen: 'test number screen cinema',
            capacity: 'test capacity cinema',
            phone: 'test phone cinema',
            website: 'test website cinema',
            address: 'test address cinema',
            lat: 'test lat cinema',
            long: 'test long cinema',
            is_in: city._id
        });
        return cinema.save()
            .then((doc) => {
                assert(!doc.isNew);
                assert(doc.is_in === cinema.is_in);
            })
    });
});
