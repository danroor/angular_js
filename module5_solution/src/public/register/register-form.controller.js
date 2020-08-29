(function () {
'use strict';

angular.module('public')
.controller('RegisterFormController', RegisterFormController);
	
RegisterFormController.$inject = ['$http', 'UserDataService', 'ITEMS_URL'];
function RegisterFormController($http, UserDataService, ITEMS_URL) {

	var regCtrl = this;

	regCtrl.registered = false;
	regCtrl.noDish = false;

	regCtrl.resetNoDish = function () {
		regCtrl.noDish = false;
	};

	regCtrl.register = function () {

		var request = {
			method: "GET",
			url: ITEMS_URL + '/' + regCtrl.favDish + '.json'
		}

		var onSuccess = function (response) {
			regCtrl.noDish = false;
			regCtrl.registered = true;
			UserDataService.registerNewUser(regCtrl.name,
											regCtrl.surname,
											regCtrl.email,
											regCtrl.phone,
											response.data);
		};

		var onFailure = function (error) {
			regCtrl.noDish = true;
		};

		$http(request).then(onSuccess).catch(onFailure);
	};
}

})();