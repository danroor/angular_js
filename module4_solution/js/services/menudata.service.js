(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'BASE_URL'];
function MenuDataService ($http, BASE_URL) {

	this.getAllCategories = function () {

		var request = {
			method: "GET",
			url: BASE_URL + "/categories.json"
		}

		var onSuccess = function (response) {
			return response.data;
		}

		return $http(request).then(onSuccess);
	};

	this.getItemsForCategory = function (shortName) {

		var request = {
			method: "GET",
			url: BASE_URL + "/menu_items.json?category=" + shortName
		}


		var onSuccess = function (response) {
			return response.data.menu_items;
		}

		return $http(request).then(onSuccess);
	};

}

})();