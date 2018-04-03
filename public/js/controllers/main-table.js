'use strict';
(function() {
    angular.module('myApp')
        .controller('MyCtrl', MyCtrl)
        
    function MyCtrl($scope, myFactory) {
        // const vm = this;
        myFactory.getData(function(list) {
            $scope.userList = list.data.response;
        })

    }
    MyCtrl.$inject = ['$scope', 'myFactory'];





})()