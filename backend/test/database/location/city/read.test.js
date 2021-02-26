const assert = require('assert');
const { City, Country } = require('../../../../app/models/index');


describe('Read city document', () => {
    let city_country;
    let city;
    beforeEach(() => {
        city_country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return city_country.save()
            .then(() => {
                city = new City({
                    name: 'test name city',
                    lat: 'test lat city',
                    long: 'test long city',
                    department: 'test department city',
                    located_in: city_country._id,
                });
                return city.save()
                    .then(() => {
                    });
            });

    });
    it('Find city using city name', () => {
        return City.findOne({ name: "test name city" })
            .then((city) => {
                assert(city.name === "test name city");
            })
    });
    it('Find city using id', () => {
        return City.findById(city._id)
            .then((city) => {
                assert(city.name === "test name city");
            })
    })
});
