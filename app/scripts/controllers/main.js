'use strict';

/**
 * @ngdoc function
 * @name assignment01bApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignment01bApp
 */
angular.module('assignment01bApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
