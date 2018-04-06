'use strict';
(function() {
    angular.module('myApp')
        .controller('myCtrl', ['myFactory', myCtrl])

    function myCtrl(myFactory) {
        let vm = this;
        vm.isActive = false;
        vm.activeButton = function() {
            vm.isActive = !vm.isActive;
        }
        myFactory.user()
            .then(data => {
                console.log(data.data.response)
                vm.userList = data.data.response;
            })
            .catch(error => {
                console.log(error)
            })
    }


})();