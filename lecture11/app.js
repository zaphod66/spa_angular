(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Norbert";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Norbert likes to eat healthy snacks at night!";
  };

  $scope.feedNorbert = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
