var app = angular.module('loans', []);

app.factory('Loans', [function() {
	var loans = [];

	var getAllLoans = function() {
		return loans;
	};

	var saveLoan = function(comic, friend) {
		var newLoan = {
			comicTitle: comic.title,
			friendName: friend.name
		};
		loans.push(newLoan);
	};

	return{
		getAllLoans: getAllLoans,
		saveLoan: saveLoan,
	};

}])

.controller('LoansCtrl', ['$scope', 'Loans', function($scope, Loans) {

	$scope.loans = Loans.getAllLoans();

}]);