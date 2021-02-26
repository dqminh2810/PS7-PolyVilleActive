const assert = require('assert');
const { SportCenter, City, Country } = require('../../../../app/models/index');


describe('Update sportCenter document', () => {
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
    it('Update one sportCenter using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(sportCenter.updateOne({ name: 'updated test name sportCenter' }));
    });

    it('Update multiple sportCenters matching using model', () => {
        return assertHelper(SportCenter.updateMany({ name: 'test name sportCenter' }, { name: 'updated test name sportCenter' }));
    });

    it('Update one sportCenter using model', () => {
        return assertHelper(SportCenter.findOneAndUpdate({ name: 'test name sportCenter' }, { name: 'updated test name sportCenter' }));
    });

    it('Update one sportCenter with id using model', () => {
        return assertHelper(SportCenter.findByIdAndUpdate(sportCenter._id, { name: 'updated test name sportCenter' }));
    });

    function assertHelper(statement) {
        statement.then(() => SportCenter.find({})
            .then((sportCenters) => {
                assert(sportCenters.length === 1);
                assert(sportCenters[0].name === 'updated test name sportCenter');
            })
        )
    }
});
