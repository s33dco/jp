const request   = require('supertest');
const expect    = require('expect');

const app       = require('./server').app;

describe('Server', () => {

  describe('get /', (done) => {
    it('should return home page', (done) => {
      request(app)
      .get('/')
      .expect(304)
      .end(done)
    });
  });

  describe('get /about', () => {
    it('should return about page', (done) => {
      done()
    });
  });

  describe('get /carpentry', () => {
    it('should return carpentry page', (done) => {
      done()
    });
  });

  describe('get /gardening', () => {
    it('should return gardening page', (done) => {
      done()
    });
  });

  describe('get /contact', () => {
    it('should return contact page', (done) => {
      done()
    });
  });

  describe('get /thanks', () => {
    it('should return thanks page', (done) => {
      done()
    });
  });
});
