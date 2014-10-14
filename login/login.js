var app = angular.module('login', []);

app.controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.login = function() {
		
		var username = $scope.user.username;
		var password = $scope.user.password;

		if (username === "sheldon" && password === "bazinga") {
			$location.path('/comics');
		} else {
			alert('Wrong credentials');
		}
	};
}]);