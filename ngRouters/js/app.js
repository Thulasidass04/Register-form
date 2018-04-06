'use strict';
(function() {
    angular.module('myApp', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/login', {
                    
                    templateUrl: "../template/login.html"
                })
                .when('/register', {
                    
                    templateUrl: "../template/Register.html"
                })
           
        })
})();