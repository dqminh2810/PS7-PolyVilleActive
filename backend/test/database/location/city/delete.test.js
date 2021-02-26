const assert = require('assert');
const { City, Country } = require('../../../../app/models/index');


describe('Delete city document', () => {
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
                    .then((doc) => {
                    });
            });

    });
    it('Delete one city using its instance', () => {
        return city.remove()
            .then(() => City.findOne({ name: 'test name city' }))
                .then((city) => {
                    assert(city == null);
                })

    });
    it('Delete multiple cities matching using model', () => {
        return City.deleteMany({ name: 'test name city' })
            .then(() => City.findOne({ name: 'test name city' })
                .then((city) => {
                    assert(city == null);
                })
            )
    });
    it('Delete one city matching using model' , () => {
        return City.findOneAndDelete({ name: 'test name city' })
            .then(() => City.findOne({ name: 'test name city' })
                .then((city) => {
                    assert(city == null);
                })
            )
    });
    it('Delete one city using id', () => {
        return City.findByIdAndDelete(city._id)
        // the following code block is repeated again and again
            .then(() => City.findOne({ name: 'test name country' })
                .then((city) => {
                    assert(city == null);
                })
            )
        // block end
    })
});
