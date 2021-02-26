const assert = require('assert');
const { SportCenter, City, Country } = require('../../../../app/models/index');


describe('Delete sportCenter document', () => {
    let country, city, sportCenter;
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
                        sportCenter = new SportCenter({
                            name: 'test name sportCenter',
                            sport_types: 'test type sportCenter',
                            lat: 'test lat sportCenter',
                            long: 'test long sportCenter',
                            is_in: city._id
                        });
                        return sportCenter.save()
                            .then((doc) => {
                            })
                    });
            });
    });
    it('Delete one sportCenter using its instance', () => {
        return sportCenter.remove()
            .then(() => SportCenter.findOne({ name: 'test name sportCenter' }))
            .then((cinema2) => {
                assert(cinema2 == null);
            })

    });
    it('Delete multiple sportCenters matching using model', () => {
        return SportCenter.deleteMany({ name: 'test name sportCenter' })
            .then(() => SportCenter.findOne({ name: 'test name sportCenter' })
                .then((cinema2) => {
                    assert(cinema2 == null);
                })
            )
    });
    it('Delete one sportCenter matching using model' , () => {
        return SportCenter.findOneAndDelete({ name: 'test name sportCenter' })
            .then(() => SportCenter.findOne({ name: 'test name sportCenter' })
                .then((sportCenter2) => {
                    assert(sportCenter2 == null);
                })
            )
    });
    it('Delete one sportCenter using id', () => {
        return SportCenter.findByIdAndDelete(sportCenter._id)
        // the following code block is repeated again and again
            .then(() => SportCenter.findOne({ name: 'test name sportCenter' })
                .then((sportCenter2) => {
                    assert(sportCenter2 == null);
                })
            )
        // block end
    })
});
