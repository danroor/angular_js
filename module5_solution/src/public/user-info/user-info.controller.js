(function () {
'use strict';

angular.module('public')
.controller('UserInfoController', UserInfoController);
	
UserInfoController.$inject = ['userData'];
function UserInfoController(userData) {

	this.registered  = userData.registered;
	this.user        = userData.user;

}

})
();