import request from 'supertest';
import app from './app';

import { API_PATH } from './src/js/variables/constants';

// API test cases
describe('Requests to root path', () => {
  it('Returns a 200 status code', done => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('Returns HTML format', done => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });
});
