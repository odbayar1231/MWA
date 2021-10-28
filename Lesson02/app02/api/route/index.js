const express = require('express');
const gameCtrl = require('../controller/game.ctrl');

const router = express.Router();

router.route("/games")
    .get(gameCtrl.getAll);

module.exports = router;