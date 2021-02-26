const assert = require('assert');
const { Cinema, City, Country } = require('../../../../app/models/index');
const mongoose = require('mongoose');
const models = require('../../../../app/models/index');

describe('Read cinema document', () => {
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
    it('Find one cinema using cinema name', () => {
        return Cinema.findOne({ name: "test name cinema" })
            .then((doc) => {
                assert(doc.name === "test name cinema");
            })
    });

});
