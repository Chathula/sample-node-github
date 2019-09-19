const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('respond with hello world', (done) => {
        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect('hello world changed through Github Actions!!', done);
    });
});
