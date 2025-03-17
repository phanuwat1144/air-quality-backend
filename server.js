require('dotenv').config(); // 👈 โหลดตัวแปรจาก .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const airRoutes = require('./routes/airRoute');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use('/api/air', airRoutes);

// เชื่อมต่อ MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });
