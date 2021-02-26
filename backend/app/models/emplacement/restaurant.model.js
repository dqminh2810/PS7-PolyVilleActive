const mongoose = require('mongoose');

// Restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: String,
  type_restaurant: String,
  type_cuisine: String,
  opening_hour: String,
  wheelchair: String,
  delivery: String,
  takeaway: String,
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

// Restaurant model
const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'Restaurant');
module.exports = { restaurantSchema, Restaurant };
