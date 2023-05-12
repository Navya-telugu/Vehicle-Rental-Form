const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['car', 'bike'], // it Only allows values of 'car' and 'bike'
  },
  model: {
    type: String,
    required: true,
  },
  availableDates: [{
    type: Date,
    required: true,
  }],
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
