module.exports.gamesGetAll=function(req, res) {
console.log("JSON request received");
console.log(req, query);
var offset = 0;
var count = 5;
if(req.query && req.query.offset){
    offset = parseInt(req.query.offset, 10);
}
if(req.query && req.query.count){
    count = parseInt(req.query.count, 10);
}
const pageGames = gamesData.slice(offset, offset+count);
res.status(200).json(pageGames);
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