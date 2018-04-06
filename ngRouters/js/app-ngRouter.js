'use strict';
(function () {
	var app = angular.module('myApp')
	app.factory('myFactory', function($http) {
			let serivces = {};
			serivces.user = function(){
				return $http.get('../test.json')
					.then(data => {
						return data;
					})
					.catch(error => {
						console.log(error)
					})
			}
			return serivces;
		})
	
	 
})();