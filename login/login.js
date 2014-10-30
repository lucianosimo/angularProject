var app = angular.module('login', []);

app.factory('Login', ['$http', function($http) {

	var users = [];
	var isUserLoggedIn = false;
	var isAdmin = false;
	var loggedUser = '';

	var retrieveUsers = function(retrieveUsersCallback) {
		var onGetUsersSuccess = function(response) {
			users = response.data;
			retrieveUsersCallback();
		};
		return $http.get('json/users.json')
			.then(onGetUsersSuccess);
	};

	var addUser = function(user) {
		var newUser = {
			username: angular.lowercase(user.name),
			password: user.password
		};

		users.push(newUser);
	};

	var getAllUsers = function() {
		return users;
	};

    var setUserStatus = function(value) {
		isUserLoggedIn = value;
	};

	var isUserLoggedIn = function() {
		return isUserLoggedIn;
		//return true;
	};

	var setAdminUser = function(value) {
		isAdmin = value;
	}

	var isAdminUser = function() {
		return isAdmin;
		//return true;
	};

	var setLoggedUser = function(user) {
		loggedUser = user;
	};

	var getLoggedUser = function() {
		return loggedUser;
	};

	return {
		getAllUsers: getAllUsers,
		setUserStatus: setUserStatus,
		isUserLoggedIn: isUserLoggedIn,
		setAdminUser: setAdminUser,
		isAdminUser: isAdminUser,
		setLoggedUser: setLoggedUser,
		getLoggedUser: getLoggedUser,
		addUser: addUser,
		retrieveUsers: retrieveUsers
	};
}]) 

.controller('LoginCtrl', ['$window', '$scope', '$location', 'Login', function($window, $scope, $location, Login) {

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
				Login.setLoggedUser(username);
				break;
			};
		};

		if (validUser) {
			Login.setUserStatus(true);
			$location.path('/comics');
		} else {
			$window.alert('Wrong credentials');
		}

	};

}]);
