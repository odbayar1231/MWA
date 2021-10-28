const express = require('express');
const router = express.Router();

const gamesControllers = require('../controllers/games-controller');

router.route('/games').get(gamesControllers.getAllGames);
router
  .route('/games/:gameId')
  .get(gamesControllers.getOneGame)
  .delete(gamesControllers.gameDelete);

module.exports = router;
