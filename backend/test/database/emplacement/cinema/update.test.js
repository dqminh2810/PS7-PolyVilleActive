const assert = require('assert');
const { Cinema, City, Country } = require('../../../../app/models/index');


describe('Update city document', () => {
    let country, city, cinema;
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
                        cinema = new Cinema({
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
                            is_in: doc
                        });
                        return cinema.save()
                            .then((doc) => {
                            })
                    });
            });
    });
    it('Update one cinema using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(cinema.updateOne({ name: 'updated test name cinema' }));
    });

    it('Update multiple cinemas matching using model', () => {
        return assertHelper(Cinema.updateMany({ name: 'test name cinema' }, { name: 'updated test name cinema' }));
    });

    it('Update one cinema using model', () => {
        return assertHelper(Cinema.findOneAndUpdate({ name: 'test name cinema' }, { name: 'updated test name cinema' }));
    });

    it('Update one cinema with id using model', () => {
        return assertHelper(Cinema.findByIdAndUpdate(cinema._id, { name: 'updated test name cinema' }));
    });

    function assertHelper(statement) {
        statement.then(() => Cinema.find({})
            .then((cinemas) => {
                assert(cinemas.length === 1);
                assert(cinemas[0].name === 'updated test name cinema');
            })
        )
    }
});
