const express = require('express');
const router = express.Router();
const AirData = require('../models/AirData');

router.post('/add', async (req, res) => {
  try {
    const {
      pm25, pm10, co, o3, no2, so2,
      temperature, humidity
    } = req.body;

    const newAirData = new AirData({
      pm25, pm10, co, o3, no2, so2,
      temperature, humidity
    });

    await newAirData.save();
    res.status(201).json({ message: 'บันทึกข้อมูลอากาศสำเร็จ' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const airDataList = await AirData.find().sort({ timestamp: -1 });
    res.json(airDataList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
