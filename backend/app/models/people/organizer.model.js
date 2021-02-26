const mongoose = require('mongoose');

// Organizer Schema
const organizerSchema = new mongoose.Schema({
  organize: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
});

// Organizer model
const Organizer = mongoose.model('Organizer', organizerSchema, 'Organizer');
module.exports = { organizerSchema, Organizer };
