const { Event } = require('./activity/event.model.js');
const { Cinema } = require('./emplacement/cinema.model.js');
const { Restaurant } = require('./emplacement/restaurant.model.js');
const { Library } = require('./emplacement/library.model.js');
const { SportCenter } = require('./emplacement/sportCenter.model.js');
const { City } = require('./location/city.model.js');
const { Country } = require('./location/country.model.js');
const { User } = require('./people/user.model.js');
const { Organizer } = require('./people/organizer.model.js');
const { Visitor } = require('./people/visitor.model.js');


module.exports = {
  Event, Cinema, Restaurant, Library, SportCenter, City, Country, User, Organizer, Visitor
};
