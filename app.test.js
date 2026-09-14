const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return 200 OK and success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('CI/CD Pipeline is working successfully!');
  });
});
