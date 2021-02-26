const mongoose = require('mongoose');

// Library Schema
const librarySchema = new mongoose.Schema({
  name: String,
  opening_hour: String,
  wheelchair: String,
  lat: String,
  long: String,
  is_in: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
});

// Library model
const Library = mongoose.model('Library', librarySchema, 'Library');
module.exports = { librarySchema, Library };
