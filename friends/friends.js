var app = angular.module('friends', []);

app.factory('Friends', [function() {
	var friends  = [
		{name: 'Luciano', comics: []},
		{name: 'Nicolas', comics: []},
		{name: 'Howard', comics: []},
	];
	return {
		all: function() {
			return friends;
		}
	};

}])

.controller('FriendsCtrl', ['$scope','Friends', 'Comics', function($scope, Friends, Comics) {

	$scope.friends = Friends.all();
	$scope.comics = Comics.all();

	$scope.addFriend = function() {

		var newFriend = new function() {
			this.name = $scope.friend.name;
		};

		$scope.friends.push(newFriend);

		$scope.friend.name = " ";
	};

	$scope.deleteFriend = function(friend) {

		var item = $scope.friends.indexOf(friend);
		$scope.friends.splice(item, 1);
	};

	$scope.returnComic = function(comic, friend) {

		var indexFriend = $scope.friends.indexOf(friend);
		var indexFriendComic = $scope.friends[indexFriend].comics.indexOf(comic);
		var indexComic = $scope.comics.indexOf(comic);

		$scope.friends[indexFriend].comics.splice(indexFriendComic, 1);
		$scope.comics[indexComic].available++;
		
		console.log($scope.friends[indexFriend].comics);
	};

}]);