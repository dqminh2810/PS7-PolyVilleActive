const mongoose = require('mongoose');

// Country Schema
const countrySchema = new mongoose.Schema({
  name: String,
  code: String,
  lat: String,
  long: String,
});

// Country model
const Country = mongoose.model('Country', countrySchema, 'Country');
module.exports = { countrySchema, Country };
