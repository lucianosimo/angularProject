var app = angular.module('comics', []);

app.factory('Comics', [function() {
	var comics = [
		{id: 0, title: 'Superman', description: 'An superhero', available: 3},
		{id: 1, title: 'Batman', description: 'Another superhero', available: 3},
		{id: 2, title: 'The Simpsons', description: 'The best tv show ever', available: 3},
		{id: 3, title: 'Byclope', description: 'An superhero with glasses', available: 3},
		{id: 4, title: 'SpiderMan', description: 'Another another hero', available: 3},
	];

	var getComic = function(id) {
		return comics[id];
	};

	var getAllComics = function() {
		return comics;
	};

	var addComic = function(comic) {
		var newComic = {
			id : comics.length,
			title : comic.title,
			description : comic.description,
			available : comic.available
		};
		
		comics.push(newComic);
	};

	var deleteComic = function(comic) {
		var index = comics.indexOf(comic);

		comics.splice(index, 1);
	};

	var lendComic = function(comic) {
		var index = comics.indexOf(comic);

		comics[index].available--;
	};

	var receiveComic = function(comic) {
		var index = comics.indexOf(comic);

		comics[index].available++;
	};

	return {
		getComic: getComic,
		getAllComics: getAllComics,
		addComic: addComic,
		deleteComic: deleteComic,
		lendComic: lendComic,
		receiveComic: receiveComic
	};
}])

.controller('ComicsCtrl', ['$scope', 'Comics', 'Friends', function($scope, Comics, Friends) {

	$scope.comics = Comics.getAllComics();
	$scope.friends = Friends.getAllFriends();

	var isEditing = false;
	var isLoaning = false;

	$scope.lendComic = function(comic, friendLoan) {
		var indexFriend = $scope.friends.indexOf(friendLoan);
		$scope.friends[indexFriend].comics.push(comic);

		Comics.lendComic(comic);

		isLoaning = false;
	};

	//To delete a comic we pass the item to the function and search for its index.
	$scope.deleteComic = function(comic) {
		Comics.deleteComic(comic);
	};

	$scope.addComic = function() {
		var comic = $scope.comic;

		Comics.addComic(comic);
	};

	$scope.isEditing = function() {
		return isEditing;
	};

	//We set the editing state to true to display text fields for editing comic
	$scope.setEditComicState = function() {
		isEditing = true;
	};

	//To edit a comic we pass the item to the function, search for its index, remove the old item and save the new one
	$scope.saveEditedComic = function(comic) {
		var item = $scope.comics.indexOf(comic);

		$scope.comics.splice(item, 1, comic);
		isEditing = false;
	};

	//If loan button is pressed we want to display loaning options and hide edit and delete comic buttons
	//We also load all sheldon friends to display them in the dropdown menu
	$scope.isLoaning = function() {
		return isLoaning;
	};

	$scope.setLoaningState = function() {
		isLoaning = true;
	};

}]);