angular
  .module('meanGame')
  .controller('GameDetailController', GameDetailController);

  //Controller with params
function GameDetailController($routeParams, GamesFactory) {
  const vm = this;
  const GameId = $routeParams.GameId;
  GamesFactory.getOneGame(GameId).then(function (response) {
    vm.Game = response.data;
  });
}
