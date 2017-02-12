# App to-dos

## Components
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
* Retrieve all games: `GET /api/v1/games`
  * Filterable by team name(ID?) (retrieve all games played by a team): `/games?team=:team_id`
* Log new game details: `POST /api/v1/games`
* Retrieve single game: `GET /api/v1/games/:game_id`
* Retrieve list of teams: `GET /api/v1/teams`
* Add new team: `POST /api/v1/teams`
