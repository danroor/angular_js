(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowCtrl)
.service('MenuSearchService', MenuSrv)
.directive('foundItems', FoundDir);

function FoundDir () {
	var ddo = {
		scope: {

			items : "<foundItems",
			remove: "<onRemove"
		},

		restrict: 'E',
		templateUrl: "found_items_template.html"

	};

	return ddo;
}

MenuSrv.$inject = ['$http'];
function MenuSrv ($http) {

	this.getMatchedMenuItems = function (searchTerm) {
		var onSuccess = function (response) {
			var foundItems = [];
			var allItems = response.data.menu_items;
			var L = allItems.length;
			
			if (searchTerm === undefined  || ! /\S/.test(searchTerm)) {
				return [];
			}

			searchTerm = searchTerm.toLowerCase();
			
			for (var i = 0; i < L; ++i) {
				var desc = allItems[i].description.toLowerCase();

				if (desc.indexOf(searchTerm) != -1) {
					foundItems.push(allItems[i]);
				}
			}

			return foundItems;
		}

		var request = {
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		}

		return $http(request).then(onSuccess);
	}
}

NarrowCtrl.$inject = ['MenuSearchService'];
function NarrowCtrl(MenuSearchService) {

	var ctrl = this;

	ctrl.found = [1];
	ctrl.removeItem = function (index) {
		ctrl.found.splice(index, 1);
	}

	ctrl.getMenuItems = function () {
		var promise = MenuSearchService.getMatchedMenuItems(ctrl.term);
		
		promise.then( function (foundItems) {
			ctrl.found = foundItems;
		});
	}


}


})();