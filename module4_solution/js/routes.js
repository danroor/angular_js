(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

	// Redirect to home page if no other URL matches
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home',

	{
		url: '/',
		templateUrl: 'templates/home-page.template.html'
	}

	)

	.state('categories',

	{
		url: '/categories',
		templateUrl: 'templates/categories-page.template.html',
		controller: 'categoriesListController as catList',
		resolve: {
			categoriesList: ['MenuDataService',

			function (MenuDataService) {
				return MenuDataService.getAllCategories();
			}

			]
		}
	}

	)

	.state('category_items',

	{
		url: '/items/{short_name}',
		templateUrl: 'templates/items-page.template.html',
		controller: 'itemsListController as itemsList',
		resolve: {
			items: ['$stateParams', 'MenuDataService',

			function ($stateParams, MenuDataService) {
				return MenuDataService.getItemsForCategory($stateParams.short_name);
			}

			]
		}
	}

	);

}


})();