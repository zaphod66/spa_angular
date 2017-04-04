(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Norbert";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
