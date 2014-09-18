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


 (function() {

 	var app = angular.module('PageApp', []);

 	app.controller('PageController', ['$scope', function($scope) {

 		$scope.page_names = ['HOME', 'CHART 1', 'CHART 2', 'CONTACT US'];
 		$scope.create_page_loc = function(page_name) {
 			return 'view' + '/' + page_name;
 		}

 		$scope.pages = _.map($scope.page_names, function(name) {
 			return {'name' : name, 'loc' : $scope.create_page_loc(name)}
 		});

 		


 	}]);

 })();
