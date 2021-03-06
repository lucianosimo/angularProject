var app = angular.module('app',['ngRoute', 'ui.bootstrap','login', 'comics', 'comic', 'friends', 'loans']);

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
    	if (!Login.isAdminUser() && ($location.url() == '/friends' || $location.url() == '/loans')) {
            alert('Access forbidden');
            $location.path('/comics');
    	}

        if (!Login.isUserLoggedIn()) {
            event.preventDefault();
            alert('Please login');
            $location.path('/');
        }
    });
}])

.controller('MainCtrl', ['$scope', '$location', 'Login', 'Comics', 'Friends', 
	function($scope, $location, Login, Comics, Friends) {

	var getUsers = function() {
		$scope.users = Login.getAllUsers();
	};

	var getComics = function() {
		$scope.comics = Comics.getAllComics();
	};

	var getFriends = function() {
		$scope.friends = Friends.getAllFriends();
	};

	$scope.getUsername = function() {
		return Login.getLoggedUser();
	}

	$scope.logoutUser = function() {
		$location.path('/');
	};

	$scope.isLoggedIn = function() {
		return Login.isUserLoggedIn();
	};

	$scope.isAdmin = function() {
		return Login.isAdminUser();
	};

	//Initialization
	$scope.users = Login.getAllUsers();
	$scope.friends = Friends.getAllFriends();	
	$scope.comics = Comics.getAllComics();

	if ($scope.users.length == 0) {
		Login.retrieveUsers(getUsers);
	};

	if ($scope.friends.length == 0) {
		Friends.retrieveFriends(getFriends);
	};

	if ($scope.comics.length == 0) {
		Comics.retrieveComics(getComics);	
	}	

}]);
