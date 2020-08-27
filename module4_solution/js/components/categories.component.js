(function () {
'use strict';

angular.module('data')
.component('categoriesComponent', 

{
	templateUrl: 'templates/categories-list.template.html',
	bindings: {
		categorieslist: '<'
	}
}

);

})();