var app = angular.module('app',['ngRoute','login', 'comics', 'comic']);

//Routing
app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'login/login.tpl.html',
		controller: 'LoginCtrl'
	})

	.when('/comics', {
		templateUrl: 'comics/comics.tpl.html',
		controller: 'ComicsCtrl',
		requireLogin: true
	})

	.when('/comic/:comicId', {
		templateUrl: 'comics/comic/comic.tpl.html',
		controller: 'ComicCtrl',
		requireLogin: true
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

});
