var app = angular.module('comics', []);

app.factory('Comics', [function() {
	var comics = [
		{id: 0, title: 'Superman', description: 'An superhero'},
		{id: 1, title: 'Batman', description: 'Another superhero'},
		{id: 2, title: 'The Simpsons', description: 'The best tv show ever'},
		{id: 3, title: 'Byclope', description: 'An superhero with glasses'},
		{id: 4, title: 'SpiderMan', description: 'Another another hero'},
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

.controller('ComicsCtrl', ['$scope', 'Comics', function($scope, Comics) {
	$scope.comics = Comics.all();
	var isEditing = false;

	$scope.addComic = function() {

		var newComic = new function() {
			this.id = $scope.comics.length;
			this.title = $scope.comic.title;
			this.description = $scope.comic.description;
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


	//To delete a comic we pass the item to the function and search for its index.
	$scope.deleteComic = function(comic) {

		var item = $scope.comics.indexOf(comic);
		$scope.comics.splice(item, 1);
	};
}]);