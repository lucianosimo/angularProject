var app = angular.module('login', []);

app.factory('Login', [function() {

	var users = [
		{username: 'sheldon', password: 'bazinga'},
		{username: 'luciano', password: '1234'},
		{username: 'guest', password: '1111'},
	];
	var isUserLoggedIn = false;
	var isAdmin = false;

	var getAllUsers = function() {
		return users;
	};

    var setUserStatus = function(value) {
		isUserLoggedIn = value;
	};

	var isUserLoggedIn = function() {
		return isUserLoggedIn;
	};

	var setAdminUser = function(value) {
		isAdmin = value;
	}

	var isAdminUser = function() {
		return isAdmin;
	};

	return {
		getAllUsers: getAllUsers,
		setUserStatus: setUserStatus,
		isUserLoggedIn: isUserLoggedIn,
		setAdminUser: setAdminUser,
		isAdminUser: isAdminUser
	};
}]) 

.controller('LoginCtrl', ['$scope', '$location', 'Login', function($scope, $location, Login) {

	Login.setUserStatus(false);
	Login.setAdminUser(false);

	$scope.login = function() {
		var users = Login.getAllUsers();
		var user = $scope.user;
		var username = user.username;
		var password = user.password;
		var validUser = false;

		for (i = 0; i < users.length; i++) {
			if (username == users[i].username && password == users[i].password) {
				validUser = true;
				if (username == 'sheldon') {
					Login.setAdminUser(true);
				} else {
					Login.setAdminUser(false);
				};
				break;
			};
		};

		if (validUser) {
			Login.setUserStatus(true);
			$location.path('/comics');
		} else {
			alert('Wrong credentials');
		}

	};

}]);
