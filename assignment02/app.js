const express = require('express');
const path = require('path');
require('dotenv').config();

const router = require('./api/routes');

const app = express();
app.set('port', process.env.PORT);
app.use('/api', router);

app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));

const server = app.listen(app.get('port'), function () {
  console.log('Listening port: ' + server.address().port);
});
