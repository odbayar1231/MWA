angular.module('meanGames', ['ngRoute']).config(config);


function config($routeProvider) {
  $routeProvider
    .when('/Games', {
      templateUrl: 'angular-app/Trips/Trips.html',
      controller: 'GamesController',
      controllerAs: 'vm',
    })
    .when('/Trips/:TripsId', {
      templateUrl: 'angular-app/Trips-detail/Trips-detail.html',
      controller: 'TripsDetailController',
      controllerAs: 'vm',
    })
    .otherwise({ redirectTo: '/Trips' });
}
