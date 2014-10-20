var app = angular.module('friends', []);

app.factory('Friends', [function() {
	var friends  = [
		{name: 'Luciano Simo'},
		{name: 'Nicolas Simo'},
		{name: 'Howard'},
	];
	return {
		all: function() {
			return friends;
		}
	};

}])

.controller('FriendsCtrl', ['$scope','Friends', function($scope, Friends) {
	$scope.friends = Friends.all();

	$scope.addFriend = function() {

		var newFriend = new function() {
			this.name = $scope.friend.name;
		};

		$scope.friends.push(newFriend);

		$scope.friend.name = " ";
	};

}]);