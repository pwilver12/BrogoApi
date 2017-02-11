import cors from 'cors';
import express from 'express';

import routes from './routes/routes'
import { API_VERSION } from './variables/constants';

// INIT
const app = express();

// APP CONFIG
app.set('view engine', 'ejs');
app.use(cors());
app.port = process.env.PORT || 8080;

// ROUTES
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    version: 1
  });
});

app.use(`/api/${API_VERSION}`, routes);

// RUN
app.listen(app.port);
