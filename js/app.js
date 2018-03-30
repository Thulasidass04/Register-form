'use strict';
(function () {
	const app = angular.module('myApp', ['ngRoute']);
	app.config(function (){
		$routeProvider
		.when('/login',{
			template: "<h2>login STATE</h2>"
		})
		.when('/Register',{
			template: "<h2>Register STATE</h2>"
		})
		// console.log('jdshfuidshvf');
	})
})();
