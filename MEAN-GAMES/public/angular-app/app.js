angular.module('meanGames', ['ngRoute']).config(config);


function config($routeProvider) {
  $routeProvider
    .when('/Games', {
      templateUrl: 'angular-app/Games/Games.html',
      controller: 'GamesController',
      controllerAs: 'vm',
    })
    .when('/Games/:GamesId', {
      templateUrl: 'angular-app/Games-detail/Games-detail.html',
      controller: 'GamesDetailController',
      controllerAs: 'vm',
    })
    .otherwise({ redirectTo: '/Games' });
}
