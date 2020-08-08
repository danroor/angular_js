(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', listCheckSrv);


ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService) {

	$scope.getToBuy = function () {
		return ShoppingListCheckOffService.tobuy_items;
	}

	$scope.BuyItem = function (index) {
		ShoppingListCheckOffService.buy(index);
	}

}


AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
	

	$scope.getBought = function () {
		return ShoppingListCheckOffService.bought_items;
	}
	
}


function listCheckSrv () {
	this.tobuy_items = [ 
		{ 
		  name     : "cookies", 
		  quantity : 10,
		  package  : "bag(s)"
		}, 
		{
		  name     : "chips", 
		  quantity : 5,
		  package  : "bag(s)"
		}, 

		{
		  name     : "Dr. Pepper", 
		  quantity : 2,
		  package  : "can(s)"
		}, 

		{
		  name     : "still water", 
		  quantity : 10,
		  package  : "bottle(s)"
		}, 

		{
		  name     : "oranges", 
		  quantity : 10,
		  package  : "kg"
		} 
	];

	this.bought_items = [];

	this.buy = function (index) {
		this.bought_items.push(this.tobuy_items[index]);
		this.tobuy_items.splice(index, 1);
	};
}

})();