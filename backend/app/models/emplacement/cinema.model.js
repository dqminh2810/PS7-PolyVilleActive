const mongoose = require('mongoose');

// Cinema Schema
const cinemaSchema = new mongoose.Schema({
  name: String,
  opening_hour: String,
  wheelchair: String,
  nb_screen: String,
  capacity: String,
  phone: String,
  website: String,
  address: String,
  lat: String,
  long: String,
  is_in: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
});

// Cinema model
const Cinema = mongoose.model('Cinema', cinemaSchema, 'Cinema');
module.exports = { cinemaSchema, Cinema };
