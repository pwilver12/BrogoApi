import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
const urlencode = bodyParser.urlencoded({ extended: true });

// Retrieve all games/ add new game
router.route('/games')
  .get((req, res) => {
    // Filterable by team ID
    // Return games as json
    res.json([]);
  })
  .post(urlencode, (req, res) => {
    // 201, return json for new game
    // Return new game data so that it can be added to page listing on success
    const game = req.body;
    if(!game.team_1 || !game.team_2 || !game.type || !game.diff) {
      res.sendStatus(400);
      return false;
    }
    res.status(201).json(game);
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
