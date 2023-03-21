const express = require('express');
const path = require('path');

//heroku don't sleep package
const { wakeDyno } = require('heroku-keep-awake');
const DYNO_URL = 'https://lili-cohen-portfolio.herokuapp.com/';

// const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
// app.use(routes);

// Start API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  wakeDyno(DYNO_URL);
});
