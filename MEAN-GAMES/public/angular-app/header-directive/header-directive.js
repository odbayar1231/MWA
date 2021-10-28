angular.module('meanGame').directive('mainHeader', MainHeader);

function MainHeader() {
  return {
    restrict: 'E',
    templateUrl: 'angular-app/header-directive/header.html',
  };
}
