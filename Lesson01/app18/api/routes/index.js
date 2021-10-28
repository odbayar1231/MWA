const express=require("express");
const router= express.Router();
const controllerGames=require("../controllers/games.controllers.js");
//router.route ("/games").get(controllerGames.gamesGetAll);
//router.route("/games/:gameId").get(controllerGames.gamesGetOne);
//router.route("/games/new").post(controllerGames.gamesAddOne);

router.route("/games")
    .get(controllerGames.gamesGetAll);

module.exports = router;