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

	$scope.addComic = function() {

		var newComic = new function() {
			this.id = $scope.comics.length;
			this.title = $scope.comic.title;
			this.description = $scope.comic.description;
		};

		console.log(newComic);

		$scope.comics.push(newComic);
	};

	//To delete a comic we pass the item to the function and search for its index.
	$scope.deleteComic = function(comic) {

		var item = $scope.comics.indexOf(comic);
		$scope.comics.splice(item, 1);
	};
}]);