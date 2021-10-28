angular.module("meanGames").controller("GamesController", GamesController);

function GamesController($http) {
    const vm=this;
    vm.title="MEAN Games App.";
    vm.games=
    $http.get("/api/games").then(function(response));
}