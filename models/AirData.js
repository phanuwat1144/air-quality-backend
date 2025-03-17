const mongoose = require('mongoose');

const airDataSchema = new mongoose.Schema({
  pm25: Number,
  pm10: Number,
  co: Number,
  o3: Number,
  no2: Number,
  so2: Number,
  temperature: Number,
  humidity: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AirData', airDataSchema);
