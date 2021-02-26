const mongoose = require('mongoose');

// Visitor Schema
const visitorSchema = new mongoose.Schema({
  preferences: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
});

// Visitor model
const Visitor = mongoose.model('Visitor', visitorSchema, 'Visitor');
module.exports = { visitorSchema, Visitor };
