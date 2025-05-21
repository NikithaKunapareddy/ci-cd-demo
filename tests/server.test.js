const request = require('supertest');
const express = require('express');
const cors = require('cors');

// Create a test app
const app = express();
app.use(cors());
app.use(express.json());

// Add test routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from CI/CD Demo!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ 
    received: req.body,
    timestamp: new Date().toISOString()
  });
});

describe('API Endpoints', () => {
  test('GET /api/health returns healthy status', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /api/message returns correct message', async () => {
    const response = await request(app).get('/api/message');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello from CI/CD Demo!');
  });

  test('POST /api/echo returns received data', async () => {
    const testData = { message: 'Test message' };
    const response = await request(app)
      .post('/api/echo')
      .send(testData);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('received', testData);
    expect(response.body).toHaveProperty('timestamp');
  });
}); 