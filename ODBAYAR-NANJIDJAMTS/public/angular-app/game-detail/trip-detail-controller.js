angular
  .module('trip')
  .controller('TripDetailController', TripDetailController);

  //Controller with params
function TripDetailController($routeParams, TripFactory) {
  const vm = this;
  const GameId = $routeParams.GameId;
  GamesFactory.getOneGame(GameId).then(function (response) {
    vm.Game = response.data;
  });
}
