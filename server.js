require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('❌ MongoDB error:', err);
});

// API Route
app.use('/api/air', require('./routes/airRoute'));

// Start HTTP Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// WebSocket
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('📡 WebSocket connected');
  ws.send(JSON.stringify({ message: 'Welcome to Air Quality WebSocket!' }));
});
