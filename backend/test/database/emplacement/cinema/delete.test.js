const assert = require('assert');
const { Cinema, City, Country } = require('../../../../app/models/index');


describe('Delete city document', () => {
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
    it('Delete one cinema using its instance', () => {
        return cinema.remove()
            .then(() => Cinema.findOne({ name: 'test name cinema' }))
            .then((cinema2) => {
                assert(cinema2 == null);
            })

    });
    it('Delete multiple cinemas matching using model', () => {
        return Cinema.deleteMany({ name: 'test name cinema' })
            .then(() => Cinema.findOne({ name: 'test name cinema' })
                .then((cinema2) => {
                    assert(cinema2 == null);
                })
            )
    });
    it('Delete one cinema matching using model' , () => {
        return Cinema.findOneAndDelete({ name: 'test name cinema' })
            .then(() => Cinema.findOne({ name: 'test name cinema' })
                .then((cinema2) => {
                    assert(cinema2 == null);
                })
            )
    });
    it('Delete one cinema using id', () => {
        return Cinema.findByIdAndDelete(cinema._id)
        // the following code block is repeated again and again
            .then(() => Cinema.findOne({ name: 'test name cinema' })
                .then((cinema2) => {
                    assert(cinema2 == null);
                })
            )
        // block end
    })
});
