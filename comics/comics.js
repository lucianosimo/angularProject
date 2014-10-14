var app = angular.module('comics', []);

app.factory('Comics', [function() {
	var comics = [
		{id: 0, title: 'Superman', description: 'An superhero'},
		{id: 1, title: 'Batman', description: 'Another superhero'},
		{id: 2, title: 'The Simpsons', description: 'The best tv show ever'},
		{id: 3, title: 'Byclope', description: 'An superhero with glasses'},
	];
	return {
		all: function() {
			return comics;
		},
		getComic: function(id) {
			return comics[id];
		}
	}
}])

.controller('ComicsCtrl', ['$scope', 'Comics', function($scope, Comics) {
	$scope.comics = Comics.all();
}]);