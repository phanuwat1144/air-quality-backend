const mongoose = require('mongoose');

const airDataSchema = new mongoose.Schema({
  pm25: Number,
  temperature: Number,
  humidity: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AirData', airDataSchema);
