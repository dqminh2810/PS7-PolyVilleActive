const assert = require('assert');
const { Library, City, Country } = require('../../../../app/models/index');


describe('Update library document', () => {
    let country, city, library;
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
                        library = new Library({
                            name: "test name library",
                            opening_hour: "test opening hour library",
                            wheelchair: "test wheelchair library",
                            lat: "test lat library",
                            long: "test long library",
                            is_in: doc._id
                        });
                        return library.save()
                            .then((doc) => {
                            })
                    });
            });
    });
    it('Update one library using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(library.updateOne({ name: 'updated test name library' }));
    });

    it('Update multiple libraries matching using model', () => {
        return assertHelper(Library.updateMany({ name: 'test name library' }, { name: 'updated test name library' }));
    });

    it('Update one library using model', () => {
        return assertHelper(Library.findOneAndUpdate({ name: 'test name library' }, { name: 'updated test name library' }));
    });

    it('Update one library with id using model', () => {
        return assertHelper(Library.findByIdAndUpdate(library._id, { name: 'updated test name library' }));
    });

    function assertHelper(statement) {
        statement.then(() => Library.find({})
            .then((libraries) => {
                assert(libraries.length === 1);
                assert(libraries[0].name === 'updated test name library');
            })
        )
    }
});
