(function () {
'use strict';

angular.module('data')
.controller('itemsListController', itemsListController);

itemsListController.$inject = ['items'];
function itemsListController (items) {
	this.items = items;
}

})();