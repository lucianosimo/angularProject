var app = angular.module('friends', []);

app.factory('Friends', [function() {
	var friends  = [
		{name: 'Luciano', comics: []},
		{name: 'Nicolas', comics: []},
		{name: 'Howard', comics: []},
	];

	var getAllFriends = function() {
		return friends;
	};

	var addFriend = function(friend) {
		var newFriend = {
			name: friend.name
		};

		friends.push(newFriend);
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
		receiveComic: receiveComic
	};

}])

.controller('FriendsCtrl', ['$scope','Friends', 'Comics', function($scope, Friends, Comics) {

	$scope.friends = Friends.getAllFriends();
	$scope.comics = Comics.getAllComics();

	$scope.addFriend = function() {
		var friend = $scope.friend;

		Friends.addFriend(friend);
	};

	$scope.deleteFriend = function(friend) {
		//var friend = $scope.friend;

		Friends.deleteFriend(friend);
	};

	$scope.returnComic = function(comic, friend) {
		Friends.returnComic(comic, friend);
		Comics.receiveComic(comic);
	};

}]);