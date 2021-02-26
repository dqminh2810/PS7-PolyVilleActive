const mongoose = require('mongoose');

// City Schema
const citySchema = new mongoose.Schema({
  name: String,
  lat: String,
  long: String,
  department: String,
  located_in: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
  },
});

// City model
const City = mongoose.model('City', citySchema, 'City');
module.exports = { citySchema, City };
