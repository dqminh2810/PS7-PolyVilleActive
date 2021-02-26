const assert = require('assert');
const { Library, City, Country } = require('../../../../app/models/index');


describe('Delete library document', () => {
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
    it('Delete one library using its instance', () => {
        return library.remove()
            .then(() => Library.findOne({ name: 'test name library' }))
            .then((library2) => {
                assert(library2 == null);
            })
    });
    it('Delete multiple library matching using model', () => {
        return Library.deleteMany({ name: 'test name library' })
            .then(() => Library.findOne({ name: 'test name library' })
                .then((library2) => {
                    assert(library2 == null);
                })
            )
    });
    it('Delete one library matching using model' , () => {
        return Library.findOneAndDelete({ name: 'test name library' })
            .then(() => Library.findOne({ name: 'test name library' })
                .then((library2) => {
                    assert(library2 == null);
                })
            )
    });
    it('Delete one library using id', () => {
        return Library.findByIdAndDelete(library._id)
        // the following code block is repeated again and again
            .then(() => Library.findOne({ name: 'test name library' })
                .then((library2) => {
                    assert(library2 == null);
                })
            )
        // block end
    })
});
