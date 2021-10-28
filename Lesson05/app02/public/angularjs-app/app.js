angular.module("meanGames", ["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/",{
        teamplateURL : "angularjs-app/game-list/games.html",
        controller: "GamesController",
        controllerAs: "vm"
    })
}