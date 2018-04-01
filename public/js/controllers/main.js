'use strict';
(function () {
	angular.module('myApp')

	.controller('MyCtrl',[MyCtrl])

	function MyCtrl(){
		const vm = this;

		vm.RegisterMe = function(data){
		console.log('WELCOME');

		}
	}
	


})()