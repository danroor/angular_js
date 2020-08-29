(function () {
'use strict';

angular.module('public')
.service('UserDataService', UserDataService);
	
UserDataService.$inject = ['$q', '$timeout']
function UserDataService($q, $timeout) {

	this.reg = false;

	this.registerNewUser = function (name, surname, email, phone, favDish) {
		this.name    = name;
		this.surname = surname;
		this.email   = email;
		this.phone   = phone;
		this.favDish = favDish;
		
		this.reg = true;
	};

	this.getUserData = function () {

		var data = { registered : this.reg };

		if (this.reg) {
			data.user = {
				name    : this.name,
				surname : this.surname,
				email   : this.email,
				phone   : this.phone,
				favDish : this.favDish
			}
		}
		
		var deferred = $q.defer();

    	$timeout(function () {
    		deferred.resolve(data);
    	}, 0);

	    return deferred.promise;
	};
}

})();