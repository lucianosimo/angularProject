var app = angular.module('app',['ngRoute','login', 'comics', 'comic', 'friends', 'loans']);

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
	})

	.when('/loans', {
		templateUrl: 'loans/loans.tpl.html',
		controller: 'LoansCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

})

.run(['$rootScope', '$location', 'Login', function ($rootScope, $location, Login) {
    $rootScope.$on('$routeChangeStart', function (event) {

        if (!Login.isUserLoggedIn()) {
            event.preventDefault();
            alert('Please login');
            $location.path('/');
        }
    });
}])

.controller('MainCtrl', ['$scope', '$location','Login', function($scope, $location, Login) {

	$scope.logoutUser = function() {
		$location.path('/');
	};

	$scope.isLoggedIn = function() {
		return Login.isUserLoggedIn();
	};

}]);
