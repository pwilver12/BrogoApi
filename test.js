import request from 'supertest';
import app from './app';

import { API_PATH } from './helpers/constants';

// App root test
describe('Requests to root path', () => {
  it('Returns 200 status code', done => {
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

// GET /api/v1/games
describe('Retrieving game information', () => {
  it('Returns 200 status code', done => {
    request(app)
      .get(`${API_PATH}/games`)
      .expect(200, done);
  });

  it('Returns games in JSON format', done => {
    request(app)
      .get(`${API_PATH}/games`)
      .expect('Content-Type', /json/, done);
  });
});

// POST /api/v1/games
describe('Creating a new game', () => {
  // Check for correct status code
  it('Returns 201 status code', done => {
    request(app)
      .post(`${API_PATH}/games`)
      .send('team_1=patim&team_2=scoben&type=ledger&diff=8')
      .expect(201, done);
  });

  // Check for proper JSON format
  it('Returns JSON format', done => {
    request(app)
      .post(`${API_PATH}/games`)
      .send('team_1=patim&team_2=scoben&type=ledger&diff=8')
      .expect('Content-Type', /json/, done);
  });

  // Check for proper JSON format
  it('Returns new game data', done => {
    request(app)
      .post(`${API_PATH}/games`)
      .send('team_1=patim&team_2=scoben&type=ledger&diff=8')
      .expect(/ledger/i, done);
  });

  // Validate request
  it('Validates required fields', done => {
    request(app)
      .post(`${API_PATH}/games`)
      .send('team_1=&team_2=&type=&diff=')
      .expect(400, done);
  });
});
