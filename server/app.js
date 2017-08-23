const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const redis = require('redis');
// require('dotenv').load();

const app = express();

// const client = redis.createClient(process.env.REACT_APP_REDIS);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

module.exports = app;
