const assert = require('assert');
const { City, Country } = require('../../../../app/models/index');


describe('Update city document', () => {
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
    it('Update one city using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(city.updateOne({ name: 'updated test name city' }));
    });

    it('Update multiple citie matching using model', () => {
        return assertHelper(City.updateMany({ name: 'test name city' }, { name: 'updated test name city' }));
    });

    it('Update one city using model', () => {
        return assertHelper(City.findOneAndUpdate({ name: 'test name city' }, { name: 'updated test name city' }));
    });

    it('Update one city with id using model', () => {
        return assertHelper(City.findByIdAndUpdate(city._id, { name: 'updated test name city' }));
    });

    function assertHelper(statement) {
        statement.then(() => City.find({})
                .then((cities) => {
                    assert(cities.length === 1);
                    assert(cities[0].name === 'updated test name city');
                })
            )
    }
});
