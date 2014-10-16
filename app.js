var app = angular.module('app',['ngRoute','login', 'comics', 'comic']);

//Routing
app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'login/login.tpl.html',
		controller: 'LoginCtrl'
	})

	.when('/comics', {
		templateUrl: 'comics/comics.tpl.html',
		controller: 'ComicsCtrl'
	})

	.when('/comic/:comicId', {
		templateUrl: 'comics/comic/comic.tpl.html',
		controller: 'ComicCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

});

app.controller('MainCtrl', ['$scope', '$location','LoginService', function($scope, $location, LoginService) {

	$scope.logoutUser = function() {

		LoginService.setUserLoggedStatus(false);
		$location.path('/');

	};

	$scope.isLoggedIn = function() {

		return LoginService.isUserLoggedIn();

	};

}]);
