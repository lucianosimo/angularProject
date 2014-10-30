var app = angular.module('friends', []);

app.factory('Friends', ['$http', 'Login', function($http, Login) {

	var friends = [];

	var retrieveFriends = function(retrieveFriendsCallback) {
		var onGetFriendsSuccess = function(response) {
			friends = response.data;
			retrieveFriendsCallback();
		};
		return $http.get('json/friends.json')
			.then(onGetFriendsSuccess);
	};

	var getAllFriends = function() {
		return friends;
	};

	var addFriend = function(friend) {
		var newFriend = {
			name: friend.name,
			comics: []
		};

		friends.push(newFriend);
		Login.addUser(friend);
	};

	var deleteFriend = function(friend) {
		var index = friends.indexOf(friend);

		friends.splice(index, 1);
	};

	var returnComic = function(comic, friend) {
		var indexFriend = friends.indexOf(friend);
		var indexFriendComic = friends[indexFriend].comics.indexOf(comic);

		friends[indexFriend].comics.splice(indexFriendComic, 1);
	};

	var receiveComic = function(comic, friend) {
		var index = friends.indexOf(friend);
		friends[index].comics.push(comic);
	};

	return {
		getAllFriends: getAllFriends,
		addFriend: addFriend,
		deleteFriend: deleteFriend,
		returnComic: returnComic,
		receiveComic: receiveComic,
		retrieveFriends: retrieveFriends
	};

}])

.controller('FriendsCtrl', ['$scope','Friends', 'Comics', function($scope, Friends, Comics) {

	$scope.addFriend = function() {
		var friend = $scope.friend;
		$scope.friend = null;
		$scope.newFriendForm.$setPristine();
		Friends.addFriend(friend);
	};

	$scope.deleteFriend = function(friend) {
		var response = confirm("Delete " + friend.name);
		if (response == true) {
			Friends.deleteFriend(friend);
		}
	};

	$scope.returnComic = function(comic, friend) {
		Friends.returnComic(comic, friend);
		Comics.receiveComic(comic);
	};

}]);