require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

console.log("🔍 MONGO_URI:", process.env.MONGO_URI); // ลองเช็กค่าตรงนี้ก่อน

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'airqualitydb',
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
