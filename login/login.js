var app = angular.module('login', []);

app.controller('LoginCtrl', function() {
	this.login = function() {
		alert('log');
	};
});