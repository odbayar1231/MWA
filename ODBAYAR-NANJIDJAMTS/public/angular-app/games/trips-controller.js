angular
  .module('trip')
  .controller('TripsController', TripsController);

function TripsController($location, TripFactory, $window) {
  const vm = this;
  const count = $location.$$search && $location.$$search.count;

  TripsFactory.getAllTrips(count).then(function (response) {
    vm.Games = response.data;
  });

  vm.locationSearch = {};
}
