const express = require('express');
const router = require('./api/route');
require('dotenv').config();
require("./api/db/dbconnection.js");

const app = express();

// middleware
app.use(function (req, res, next) {
    next();
});
// api
app.use("/api", router);

// open db connection
require('./api/db/dbconnection').open();

const server = app.listen(process.env.port, function () {
    console.log("Lab3 running on", server.address().port);
});