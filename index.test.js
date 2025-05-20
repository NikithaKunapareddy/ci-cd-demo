const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD Demo!' });
});

describe('GET /', () => {
  it('should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello from CI/CD Demo!');
  });
}); 