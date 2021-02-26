const mongoose = require('mongoose');

// Stadium Schema
const sportCenterSchema = new mongoose.Schema({
  name: String,
  sport_types: [String],
  lat: String,
  long: String,
  is_in: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
});

// Stadium model
const SportCenter = mongoose.model('SportCenter', sportCenterSchema, 'SportCenter');
module.exports = { sportCenterSchema, SportCenter };
