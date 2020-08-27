(function () {
'use strict';

angular.module('data')
.component('itemsComponent', 

{
	templateUrl: 'templates/items-list.template.html',
	bindings: {
		items: '<'
	}
}

);


})();