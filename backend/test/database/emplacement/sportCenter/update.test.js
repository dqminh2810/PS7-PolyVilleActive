const assert = require('assert');
const { Restaurant, City, Country } = require('../../../../app/models/index');


describe('Update restaurant document', () => {
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
    it('Update one restaurant using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(restaurant.updateOne({ name: 'updated test name restaurant' }));
    });

    it('Update multiple restaurants matching using model', () => {
        return assertHelper(Restaurant.updateMany({ name: 'test name restaurant' }, { name: 'updated test name restaurant' }));
    });

    it('Update one restaurant using model', () => {
        return assertHelper(Restaurant.findOneAndUpdate({ name: 'test name restaurant' }, { name: 'updated test name restaurant' }));
    });

    it('Update one restaurant with id using model', () => {
        return assertHelper(Restaurant.findByIdAndUpdate(restaurant._id, { name: 'updated test name restaurant' }));
    });

    function assertHelper(statement) {
        statement.then(() => Restaurant.find({})
            .then((restaurants) => {
                assert(restaurants.length === 1);
                assert(restaurants[0].name === 'updated test name restaurant');
            })
        )
    }
});
