// app.js
require('dotenv').config();

const express = require('express');
const redis = require('redis');

const app = express();
const port = process.env.PORT || 3000;

// Create a Redis client and connect
const client = redis.createClient({
    url: process.env.REDIS_URL // Redis URL from environment variables
});

client.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
