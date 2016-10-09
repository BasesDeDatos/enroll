/******************************/
/*                            */
/*      ANGULAR CONFIG        */
/*                            */
/******************************/

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  //'ngSanitize',
  'myApp.controller',
  'myApp.services',
  'myApp.version',
  'firebase'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider
		.when('/:name/', {
			templateUrl: function(urlattr) {
				return './pages/' + urlattr.name + '.html';
			},
			controller: 'PageCtrl'
		})
		.when('/departamento/registro', {
			templateUrl: './pages/departamentoregistro.html',
			controller: 'DepartamentoRegistroCtrl'
		})
		.when('/', {
			templateUrl: './pages/home.html',
			controller: 'PageCtrl'
		})
		.otherwise({
			redirectTo: '/404'
		});
}]);