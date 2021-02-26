const assert = require('assert');
const { Restaurant, City, Country } = require('../../../../app/models/index');

describe('Read restaurant document', () => {
    let country, city, restaurant;
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
                        restaurant = new Restaurant({
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
                            })
                    });
            });
    });
    it('Find one restaurant using restaurant name', () => {
        return Restaurant.findOne({ name: "test name restaurant" })
            .then((doc) => {
                assert(doc.name === "test name restaurant");
            })
    });

});
