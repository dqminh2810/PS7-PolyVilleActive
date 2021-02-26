const assert = require('assert');
const { Visitor, Event, Cinema, Restaurant, Library, SportCenter, City, Country } = require('../../../../app/models/index');


describe('Update visitor document', () => {
    let country, city, cinema, restaurant, library, sportCenter, event1, event2, visitor;
    beforeEach(() => {
        country = new Country({
            name: "test name country",
            code: "test code country",
            lat: "test lat country",
            long: "test long country",
        });
        return country.save()
            .then(() => {
                city = new City({
                    name: 'test name city',
                    lat: 'test lat city',
                    long: 'test long city',
                    department: 'test department city',
                    located_in: country._id,
                });
                return city.save()
                    .then(() => {
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
                            is_in: city._id
                        });
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
                        library = new Library({
                            name: "test name library",
                            opening_hour: "test opening hour library",
                            wheelchair: "test wheelchair library",
                            lat: "test lat library",
                            long: "test long library",
                            is_in: city._id
                        });
                        sportCenter = new SportCenter({
                            name: 'test name sportCenter',
                            sport_types: 'test type sportCenter',
                            lat: 'test lat sportCenter',
                            long: 'test long sportCenter',
                            is_in: city._id
                        });

                        return cinema.save()
                            .then((doc) => {
                                return restaurant.save()
                                    .then((doc) => {
                                        return library.save()
                                            .then((doc) => {
                                                return sportCenter.save()
                                                    .then((doc) => {
                                                        event1 = new Event({
                                                            type: 'test type event1',
                                                            website: 'test website event1',
                                                            language: 'test language event1',
                                                            title: 'test title event1',
                                                            description: 'test description event1',
                                                            detail: 'test detail event1',
                                                            start_date: 'test start_date event1',
                                                            end_date: 'test end_date event1',
                                                            price: 'test price event1',
                                                            organized_at: [cinema._id, restaurant._id]
                                                        });
                                                        event2 = new Event({
                                                            type: 'test type event2',
                                                            website: 'test website event2',
                                                            language: 'test language event2',
                                                            title: 'test title event2',
                                                            description: 'test description event2',
                                                            detail: 'test detail event2',
                                                            start_date: 'test start_date event2',
                                                            end_date: 'test end_date event2',
                                                            price: 'test price event2',
                                                            organized_at: [library._id, sportCenter._id]
                                                        });

                                                        return event1.save()
                                                            .then((doc) => {
                                                                return event2.save()
                                                                    .then((doc) => {
                                                                        visitor = new Visitor({
                                                                            preferences: [event1._id, event2._id]
                                                                        });
                                                                        return visitor.save()
                                                                            .then((doc) => {
                                                                            })
                                                                    });
                                                            });
                                                    })
                                            })
                                    })
                            });
                    });
            });

    });
    it('Update one visitor using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(visitor.updateOne({ preferences: [event1._id] }));
    });

    it('Update multiple visitors matching using model', () => {
        return assertHelper(Visitor.updateMany({ preferences: [event1._id, event2._id] }, { preferences: [event1._id] }));
    });

    it('Update one visitor using model', () => {
        return assertHelper(Visitor.findOneAndUpdate({ preferences: [event1._id, event2._id] }, { preferences: [event1._id] }));
    });

    it('Update one visitor with id using model', () => {
        return assertHelper(Visitor.findByIdAndUpdate(visitor._id, { preferences: [event1._id] }));
    });

    function assertHelper(statement) {
        statement.then(() => Visitor.find({})
            .then((visitors) => {
                assert(visitors.length === 1);
                assert(visitors[0]._id === organizer._id);
                assert(visitors[0].preferences.length === 1);
                assert(visitors[0].preferences[0] === event1._id);
            })
        )
    }
});
