var app = angular.module('login', []);

app.controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.login = function() {
		if ($scope.user.username === "sheldon" && $scope.user.password === "bazinga") {
			$location.path('/comics');
		} else {
			alert('Wrong credentials');
		}
	};
}]);