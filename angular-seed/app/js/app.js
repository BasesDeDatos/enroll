/******************************/
/*                            */
/*      ANGULAR CONFIG        */
/*                            */
/******************************/

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.controller',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');


	$routeProvider
		.when('/:name*', {
			templateUrl: function(urlattr) {
				return './pages/' + urlattr.name + '.html';
			},
			controller: 'PageCtrl'
		})
		.when('/', {
			templateUrl: './pages/home.html',
			controller: 'PageCtrl'
		})
		.otherwise({
			redirectTo: '/view2'
		});
}]);