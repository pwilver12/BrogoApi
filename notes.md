# Notes

## TODO
- Add "admin" layer using cheet.js
- Create database schema

### Components
* Initial view (select Brogo)
* Tournament Summary view: `/overview`
  * List of Teams
  * Table of current standings
* Team Page view: `/team/:id`
  * List of games played
* Game Details view: `/games/:id`
  * Game name
  * Team played
  * Score
  * Point Differential
* "Log a Game" view: `/games/new`
* "Create Tournament" view
* "Add a team" view: `/teams/new`

## API Routes
* Games
  * Retrieve all games: `GET /api/v1/games`
    * Filterable by team name(ID?) (retrieve all games played by a team): `/games?team=:team_id`
  * Retrieve single game: `GET /api/v1/games/:game_id`
  * Log new game details: `POST /api/v1/games`
  * Delete a game: `DELETE /api/v1/games/:game_id`
* Teams
  * Retrieve list of teams: `GET /api/v1/teams`
  * Add new team: `POST /api/v1/teams`
  * Delete team: `DELETE /api/v1/teams/:team_id`

### Database
* Teams table
  * Name (string)
  * Members (array)

* Games table
  * Type (string)
  * Teams (array)
  * Score (array)
  * Winner (string)

* TeamsGames join table
  * Team ID
  * Game ID

### Questions
* File structure
  * Folder name for 'helper' functions to use within app.js -- where should this live?
