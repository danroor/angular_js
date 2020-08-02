(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', controller);


function getMessage(items) {
	if (items === undefined  || ! /\S/.test(items)) {
		return "Please enter data first";
	}
	if (items.split(',').length <= 3) {
		return "Enjoy!";
	} 
	
	return "Too much!";
}


controller.$inject = ['$scope'];
function controller($scope) {
	$scope.message = "";
	$scope.displayMessage = function () {
		$scope.message = getMessage($scope.items);	
		if ($scope.message === "Please enter data first") {
			$scope.color = 'red';
		} else {
			$scope.color = 'green';
		}
	}
}


})();