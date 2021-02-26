const mongoose = require('mongoose');
const { Cinema } = require('../emplacement/cinema.model.js');
const { Library } = require('../emplacement/library.model.js');
const { Restaurant } = require('../emplacement/restaurant.model.js');
const { SportCenter } = require('../emplacement/sportCenter.model.js');

// Event schema
const eventSchema = new mongoose.Schema({
    type: String,
    website: String,
    language: String,
    title: String,
    description: String,
    detail: String,
    start_date: String,
    end_date: String,
    price: String,
    organized_at: [{
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'onModel',
    }],
    onModel: {
      type: mongoose.Schema.Types.Mixed,
      enum: [Cinema, Library, Restaurant, SportCenter],
    },
});

// Event model
const Event = mongoose.model('Event', eventSchema, 'Event');
module.exports = { eventSchema, Event };
