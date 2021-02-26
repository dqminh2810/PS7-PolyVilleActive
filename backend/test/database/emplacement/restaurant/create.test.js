const assert = require('assert');
const { Restaurant, City, Country } = require('../../../../app/models/index');

describe('Create restaurant document', () => {
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
    it('Create new restaurant ', () => {
        const restaurant = new Restaurant({
            name: 'test name restaurant',
            type_restaurant: 'test type restaurant',
            type_cuisine: 'test type cuisine restaurant',
            opening_hour: 'test opening hour restaurant',
            wheelchair: 'test wheelchair restaurant',
            delivery: 'test delivery restaurant',
            takeaway: 'test takeaway restaurant',
            phone: 'test phone restaurant',
            website: 'test website restaurant',
            address: 'test address restaurant',
            lat: 'test lat restaurant',
            long: 'test long restaurant',
            is_in: city._id,
        });
        return restaurant.save()
            .then((doc) => {
                assert(!doc.isNew);
                assert(doc.is_in === restaurant.is_in);
            })
    });
});
