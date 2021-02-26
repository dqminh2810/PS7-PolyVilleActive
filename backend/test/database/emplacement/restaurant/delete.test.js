const assert = require('assert');
const { Restaurant, City, Country } = require('../../../../app/models/index');


describe('Delete restaurant document', () => {
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
    it('Delete one restaurant using its instance', () => {
        return restaurant.remove()
            .then(() => Restaurant.findOne({ name: 'test name restaurant' }))
            .then((cinema2) => {
                assert(cinema2 == null);
            })

    });
    it('Delete multiple restaurants matching using model', () => {
        return Restaurant.deleteMany({ name: 'test name restaurant' })
            .then(() => Restaurant.findOne({ name: 'test name restaurant' })
                .then((cinema2) => {
                    assert(cinema2 == null);
                })
            )
    });
    it('Delete one restaurant matching using model' , () => {
        return Restaurant.findOneAndDelete({ name: 'test name restaurant' })
            .then(() => Restaurant.findOne({ name: 'test name restaurant' })
                .then((restaurant2) => {
                    assert(restaurant2 == null);
                })
            )
    });
    it('Delete one restaurant using id', () => {
        return Restaurant.findByIdAndDelete(restaurant._id)
        // the following code block is repeated again and again
            .then(() => Restaurant.findOne({ name: 'test name restaurant' })
                .then((restaurant2) => {
                    assert(restaurant2 == null);
                })
            )
        // block end
    })
});
