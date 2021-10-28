angular
  .module('meanGames')
  .controller('GamesController', GamesController);

function GamesController($location, GamesFactory, $window) {
  const vm = this;
  const count = $location.$$search && $location.$$search.count;

  GamesFactory.getAllGames(count).then(function (response) {
    vm.Games = response.data;
  });

  vm.locationSearch = {};

  vm.search = function () {
    window.location.replace(
      `/#!/Games?lng=${vm.locationSearch.lng}&lat=${vm.locationSearch.lat}&distance=${vm.locationSearch.distance}`
    );
    console.log(vm.locationSearch);
  };

  vm.deleteGames = function (GamesId) {
    if ($window.confirm('Do you really want to delete this Games?')) {
      GamesFactory.deleteOneGames(GamesId)
        .then(function (response) {
          if (response.status === 204) {
            location.reload();
            console.log('Successfully deleted');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
}
