'use strict';
(function () {
	const app = angular.module('myApp');

	app.controller('MyCtrl',[
		 MyCtrl
		]);

	function MyCtrl(){
		const vm = this;

		vm.RegisterMe = function(data){
		console.log('WELCOME');

		}
	}
	


})()