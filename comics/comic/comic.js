var app = angular.module('comic', []);

app.controller('ComicCtrl', function($scope, $routeParams, Comics) {
	$scope.comic = Comics.getComic($routeParams.comicId);
});