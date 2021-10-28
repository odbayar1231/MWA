const mongoose = require('mongoose');
const Games = mongoose.model('trips');

const _getGeoQuery = function (req, res) {
  const lng = parseFloat(req.query.lng);
  const lat = parseFloat(req.query.lat);
  const distance = parseFloat(req.query.distance);

  //validation for params
  if (isNaN(lat) || isNaN(lng) || isNaN(distance)) {
    return res.status(400).json({
      message: 'Must be number',
    });
  }
  const query = {
    position: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
        $maxDistance: distance,
        $minDistance: 0,
      },
    },
  };
  return query;
};

module.exports.getAllTrips = function (req, res) {

  let count = 5;
  let offset = 0;
  let geoQuery = {};
  const response = {};

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (isNaN(count) || isNaN(offset)) {
    response.status = 400;
    response.message = { message: 'those params must be numberr' };
  }
  if (req.query && req.query.lat && req.query.lng && req.query.distance) {
    geoQuery = _getGeoQuery(req, res);
    console.log(geoQuery);
  }

  Games.find(geoQuery)
    .skip(offset)
    .limit(count)
    .exec(function (err, Trips) {
      if (err) {
        response.status = 500;
        response.message = err;
      } else {
        response.status = 200;
        response.message = Trips;
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getOneGame = function (req, res) {
  const GamesId = req.params.GamesId;

  Games.findById(TripsId).exec(function (err, Trips) {
    const response = {
      status: 200,
      message: Games,
    };

    if (err) {
      response.status = 500;
      response.message = err;
    } else if (!Trips) {
      response.status = 400;
      response.message = { message: 'Could not find any trip' };
    }
    res.status(response.status).json(response.message);
  });
};
