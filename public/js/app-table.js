'use strict';
(function () {
	 angular.module('myApp', [])
	 .factory('myFactory',['$http',function($http){
	 	let user = {};
	 	user.getData = function(cb){
	 		$http.get('./test.json')
	 		.then(function(res){
	 			console.log('FAC_RES',res);
	 			cb(res);
	 		})
	 	}
	 	return user;
	 }])
})();