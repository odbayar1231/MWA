module.exports.gamesGetAll=function(req, res) {
console.log("JSON request received");
res.status(200).json({"jsonData" : true});
};

module.exports.gamesGetOne=function(req, res) {
    const gameId = req.params.gameId;
    const theGame = gamesData[gameId];
    console.log("GET game with gameId ", gameId);
    res.status(200).json(theGame);
}

const gamesData = require("../data/games-data.json");
module.exports.gamesGetAll = function(req, res) {
    console.log("Get All Games");
    res.status(200).json(gamesData);
}