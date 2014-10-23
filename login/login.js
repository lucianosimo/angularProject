var app = angular.module('login', []);

app.factory('Login', [function() {

	var isUserLoggedIn = false;

    var setUserLoggedStatus = function(value) {
		isUserLoggedIn = value;
		console.log(isUserLoggedIn);
	};

	var isUserLoggedIn = function() {
		return isUserLoggedIn;
	};

	return {
		setUserLoggedStatus: setUserLoggedStatus,
		isUserLoggedIn: isUserLoggedIn
	};
}]) 

.controller('LoginCtrl', ['$scope', '$location', 'Login', function($scope, $location, Login) {

	Login.setUserLoggedStatus(false);

	$scope.login = function() {
		var user = $scope.user;
		var username = user.username;
		var password = user.password;

		if (username === "sheldon" && password === "bazinga") {
			Login.setUserLoggedStatus(true);
			$location.path('/comics');
		} else {
			alert('Wrong credentials');
		}
	};

}]);
