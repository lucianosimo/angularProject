var app = angular.module('app',['ngRoute','login', 'comics', 'comic', 'friends']);

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
	})

	.when('/friends', {
		templateUrl: 'friends/friends.tpl.html',
		controller: 'FriendsCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

});

app.controller('MainCtrl', ['$scope', '$location','Login', function($scope, $location, Login) {

	$scope.logoutUser = function() {
		Login.setUserLoggedStatus(false);
		$location.path('/');
	};

	$scope.isLoggedIn = function() {
		return Login.isUserLoggedIn();
	};

}]);
