'use strict';
( function() {
	var app = angular.module('myApp', [])
		app.controller('myCtrl', ['myFactory', myCtrl])
		function myCtrl(myFactory){
			let vm = this;
			vm.name = 'prakash'
			console.log('hi')
			myFactory.user()
			.then(data => {
				console.log(data.data.response)
				vm.userList = data.data.response
			})
			.catch(error => {
				console.log(error)
			})
		}

}())