const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const airRoute = require('./routes/airRoute');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/air', airRoute);

// Connect DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
