angular.module('meanGame').factory('TripsFactory', TripsFactory);

function TripsFactoryactory($http, $location) {
  return {
    getAllGames,
    deleteOneGame,
    getOneGame,
  };

  function getAllTrips(count) {
    const paramString = count ? `?count=${count}` : '';
    
    const lng = $location.search().lng;
    const lat = $location.search().lat;
    const distance = $location.search().distance;

    const locationSearch =
      lng && lat && distance
        ? `?lng=${lng}&lat=${lat}&distance=${distance}`
        : '';

    return $http
      .get('api/Trips' + paramString + locationSearch)
      .then(complete)
      .catch(failed);
  }

  function getOneTrip(GameId) {
    return $http
      .get('api/Games/' + GameId)
      .then(complete)
      .catch(failed);
  }

  function deleteOneTrip(GameId) {
    return $http
      .delete('api/Games/' + GameId)
      .then(complete)
      .catch(failed);
  }

  function failed(err) {
    console.log('error', err);
    return err;
  }

  function complete(response) {
    return response;
  }
}
