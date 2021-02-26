const assert = require('assert');
const { Event, Cinema, Restaurant, Library, SportCenter, City, Country } = require('../../../../app/models/index');


describe('Update event document', () => {
    let country, city, cinema, restaurant, library, sportCenter, event;
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
                                                        event = new Event({
                                                            type: 'test type event',
                                                            website: 'test website event',
                                                            language: 'test language event',
                                                            title: 'test title event',
                                                            description: 'test description event',
                                                            detail: 'test detail event',
                                                            start_date: 'test start_date event',
                                                            end_date: 'test end_date event',
                                                            price: 'test price event',
                                                            organized_at: [cinema._id, restaurant._id, library._id, sportCenter._id]
                                                        });

                                                        return event.save()
                                                            .then((doc) => {
                                                            });
                                                    })
                                            })
                                    })
                            });
                    });
            });

    });
    it('Update one event using instance', () => {
        //useful to update multiple fields of the object
        return assertHelper(event.updateOne({ name: 'updated test name event' }));
    });

    it('Update multiple events matching using model', () => {
        return assertHelper(Event.updateMany({ name: 'test name event' }, { name: 'updated test name event' }));
    });

    it('Update one event using model', () => {
        return assertHelper(Event.findOneAndUpdate({ name: 'test name event' }, { name: 'updated test name event' }));
    });

    it('Update one event with id using model', () => {
        return assertHelper(Event.findByIdAndUpdate(event._id, { name: 'updated test name event' }));
    });

    function assertHelper(statement) {
        statement.then(() => Event.find({})
            .then((events) => {
                assert(events.length === 1);
                assert(events[0].name === 'updated test name event');
            })
        )
    }
});
