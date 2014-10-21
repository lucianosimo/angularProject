var app = angular.module('comics', []);

app.factory('Comics', [function() {
	var comics = [
		{id: 0, title: 'Superman', description: 'An superhero', available: 3},
		{id: 1, title: 'Batman', description: 'Another superhero', available: 3},
		{id: 2, title: 'The Simpsons', description: 'The best tv show ever', available: 3},
		{id: 3, title: 'Byclope', description: 'An superhero with glasses', available: 3},
		{id: 4, title: 'SpiderMan', description: 'Another another hero', available: 3},
	];
	return {
		all: function() {
			return comics;
		},
		getComic: function(id) {
			return comics[id];
		}
	};
}])

.controller('ComicsCtrl', ['$scope', 'Comics', 'Friends', function($scope, Comics, Friends) {

	$scope.comics = Comics.all();
	$scope.friends = Friends.all();

	var isEditing = false;
	var isLoaning = false;

	$scope.addComic = function() {

		var newComic = new function() {
			this.id = $scope.comics.length;
			this.title = $scope.comic.title;
			this.description = $scope.comic.description;
			this.available = $scope.comic.available;
		};

		$scope.comics.push(newComic);

		$scope.comic.title = " ";
		$scope.comic.description = " ";
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

	$scope.lendComic = function(comic, friendLoan) {

		var indexComic = $scope.comics.indexOf(comic);
		var indexFriend = $scope.friends.indexOf(friendLoan);

		$scope.comics[indexComic].available--;
		$scope.friends[indexFriend].comics.push(comic);
		isLoaning = false;

	};

	//To delete a comic we pass the item to the function and search for its index.
	$scope.deleteComic = function(comic) {

		var item = $scope.comics.indexOf(comic);
		$scope.comics.splice(item, 1);
	};
}]);