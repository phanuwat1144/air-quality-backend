const express = require('express');
const router = express.Router();
const AirData = require('../models/AirData');

// เพิ่มข้อมูล
router.post('/add', async (req, res) => {
  try {
    const newData = new AirData(req.body);
    await newData.save();
    res.json({ success: true, message: "Data saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// อ่านข้อมูลทั้งหมด
router.get('/', async (req, res) => {
  try {
    const allData = await AirData.find().sort({ timestamp: -1 });
    res.json(allData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

