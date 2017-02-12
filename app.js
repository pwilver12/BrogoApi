import cors from 'cors';
import express from 'express';

import apiRoutes from './routes/api';
import { API_VERSION } from './src/js/variables/constants';

// INIT
const app = express();

// APP CONFIG
app.use(cors());

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use(`/api/${API_VERSION}`, apiRoutes);

export { app as default };
