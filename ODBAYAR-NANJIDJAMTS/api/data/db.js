const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.DB_URL + process.env.DB_NAME;

require('./trips-model');

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', function () {
  console.log('Connected to database', dbUrl);
});

mongoose.connection.on('disconnected', function () {
  console.log('Disconnected to database');
});

mongoose.connection.on('error', function (err) {
  console.log('Error', err);
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('teminated');
    process.exit(0);
  });
});
