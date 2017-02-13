import cors from 'cors';
import express from 'express';

import apiRoutes from './routes/api';
import { API_PATH } from './helpers/constants';

// INIT
const app = express();

// APP CONFIG
app.use(cors());

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use(API_PATH, apiRoutes);

export { app as default };
