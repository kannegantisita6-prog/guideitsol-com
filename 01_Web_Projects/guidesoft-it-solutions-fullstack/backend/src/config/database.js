const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/guidesoft-it';
    
    // Configure fast failover so offline MongoDB does not freeze API requests
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 1500, // 1.5s max wait instead of 10-30s
      connectTimeoutMS: 2000
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      isConnected = false;
      console.error('❌ MongoDB connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      isConnected = false;
      console.log('⚠️ MongoDB disconnected');
    });

    // Handle app termination
    process.on('SIGINT', async () => {
      try {
        await mongoose.connection.close();
        console.log('🔒 MongoDB connection closed through app termination');
        process.exit(0);
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
        process.exit(1);
      }
    });

  } catch (error) {
    isConnected = false;
    // Disable command buffering so queries fail immediately to in-memory fallback without 10s lag
    mongoose.set('bufferCommands', false);
    console.error('⚠️ MongoDB connection failed:', error.message);
    console.log('⚡ Running with high-speed in-memory data store for local development');
    
    // Don't exit in development - continue without database
    if (process.env.NODE_ENV === 'production' && process.env.STRICT_DB === 'true') {
      process.exit(1);
    }
  }
};

const isDbConnected = () => isConnected && mongoose.connection.readyState === 1;

module.exports = connectDB;
module.exports.isDbConnected = isDbConnected;
