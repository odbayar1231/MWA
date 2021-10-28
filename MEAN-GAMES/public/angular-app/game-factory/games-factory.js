angular.module('meanGame').factory('GamesFactory', GamesFactory);

function GamesFactory($http, $location) {
  return {
    getAllGames,
    deleteOneGame,
    getOneGame,
  };

  function getAllGames(count) {
    const paramString = count ? `?count=${count}` : '';
    
    const lng = $location.search().lng;
    const lat = $location.search().lat;
    const distance = $location.search().distance;

    const locationSearch =
      lng && lat && distance
        ? `?lng=${lng}&lat=${lat}&distance=${distance}`
        : '';

    return $http
      .get('api/Games' + paramString + locationSearch)
      .then(complete)
      .catch(failed);
  }

  function getOneGame(GameId) {
    return $http
      .get('api/Games/' + GameId)
      .then(complete)
      .catch(failed);
  }

  function deleteOneGame(GameId) {
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
