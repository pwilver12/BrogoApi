import cors from 'cors';
import express from 'express';
// import path from 'path';

import apiRoutes from './routes/api';
import { API_VERSION } from './src/js/variables/constants';

// INIT
const app = express();

// APP CONFIG
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, './build')));
app.use(cors());

// ROUTES
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    version: 1
  });
});

app.use(`/api/${API_VERSION}`, apiRoutes);

export { app as default };
