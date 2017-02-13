#!/usr/bin/env node
import app from './../app';

// port to listen on
app.port = process.env.PORT || 8080;

// RUN
app.listen(app.port, () => {
  console.log(`Listening on port ${app.port}`);
});
