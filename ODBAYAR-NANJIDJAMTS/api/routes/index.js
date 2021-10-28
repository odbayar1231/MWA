const express = require('express');
const router = express.Router();

const tripsControllers = require('../controllers/trips-controller');

router.route('/games').get(tripsControllers.getAllGames);
router
  .route('/trips/:tripId')
  .get(tripsControllers.getOneGame)
  .delete(tripsControllers.gameDelete);

module.exports = router;
