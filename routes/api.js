const express = require('express');

const router = express.Router();

// Retrieve all games/ add new game
router.route('/games')
  .get((req, res) => {
    // Filterable by team ID
    // Return games as json
  })
  .post((req, res) => {
    // 201, return json for new game
    // Add new game to page listing immediately
  });

// Retrieve or delete single game
router.route('/games/:game_id')
  .get((req, res) => {
    // Return single game as json
  })
  .delete((req, res) => {
    // ERROR: when no id, throw 400 Bad request
    // SUCCESS: 204 No content
  });

// Retrieve all teams/ add new team
router.route('/teams')
  .get((req, res) => {
    // Return teams as json
  })
  .post((req, res) => {
    // 201, return json for new team (just name?)
    // Add new team to page listing immediately
  });

// Delete a team
router.route('/teams/:team_id')
  .delete((req, res) => {
    // ERROR: when no id, throw 400 Bad request
    // SUCCESS: 204 No content
  });
export { router as default };
