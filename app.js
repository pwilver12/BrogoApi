'use strict';
// TODO: Fix es6 rendering issues
import cors from 'cors';
import express from 'express';
import path from 'path';

import { router as apiRoutes } from './routes/api';
import { API_VERSION } from './src/js/variables/constants';

// INIT
const app = express();

// APP CONFIG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
// static files
app.use(express.static(path.join(__dirname, './build')));
// port to listen on
app.set('port', process.env.PORT || 8080);

// ROUTES
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    version: 1
  });
});

app.use(`/api/${API_VERSION}`, apiRoutes);

// RUN
app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
