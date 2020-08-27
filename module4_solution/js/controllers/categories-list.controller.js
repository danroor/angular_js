(function () {
'use strict';

angular.module('data')
.controller('categoriesListController', categoriesListController);

categoriesListController.$inject = ['categoriesList'];
function categoriesListController (categoriesList) {
	this.categories = categoriesList;
}

})();