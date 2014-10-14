var app = angular.module('app',['ngRoute','login']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'login/login.tpl.html',
		controller: 'LoginCtrl'
	});
});
