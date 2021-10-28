angular.module("meanGames").factory("GamesFactory", GamesFactory);

function GamesFactory() {
    return {
        getAllGames: getAllGames,
        getOneGame: getOneGame
    };
    function getAllGames() {
        return $http.get("/api/games").then(complete).catch(failed);
    }
}