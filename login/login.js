var app = angular.module('login', []);

app.controller('LoginCtrl', ['$scope', '$location', 'LoginService', function($scope, $location, LoginService) {

	$scope.login = function() {
		
		var username = $scope.user.username;
		var password = $scope.user.password;

		if (username === "sheldon" && password === "bazinga") {

			LoginService.setUserLoggedStatus(true);
			$location.path('/comics');

		} else {

			alert('Wrong credentials');

		}
	};

}]);

//Service used to check if the user is logged in
app.service('LoginService', [function() {

	var isUserLoggedIn = false;

    this.setUserLoggedStatus = function(value) {
		isUserLoggedIn = value;
	};

	this.isUserLoggedIn = function() {
		return isUserLoggedIn;
	};

	return this;

}]);